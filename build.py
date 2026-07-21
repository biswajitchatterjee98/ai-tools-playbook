#!/usr/bin/env python3
"""Regenerate index.html and content-manifest.json from AI-Tools-Playbook.md."""

from __future__ import annotations

import html as html_lib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
MD_PATH = ROOT / "AI-Tools-Playbook.md"
STYLE_PATH = ROOT / "assets" / "site.css"
PLAYBOOK_SCRIPT_PATH = ROOT / "assets" / "playbook.js"
HERO_SNIPPET = """<header class="hero">
<img class="brand-logo" src="images/traininglobe-logo.png" alt="Traininglobe" />
<div class="hero-copy">
<p class="hero-kicker">A practical learning guide</p>
<h1>AI Tools Playbook</h1>
<p>Reading material, how-to steps, efficient workflows, real examples, STAR and CREATE prompting methods, benefits, images, and videos for nine modern tools.</p>
</div>
</header>"""

ADMIN_REVEAL_SCRIPT = """<script>
(function () {
  function revealAdminNav() {
    var user = PlaybookAuth.currentUser();
    var userEl = document.querySelector('.toc-user');
    if (userEl && user) {
      userEl.innerHTML = 'Signed in as <strong>' + user + '</strong>';
    }
    if (!PlaybookAuth.isAdmin()) return;
    var link = document.querySelector('.toc-admin');
    if (link) link.classList.add('is-visible');
  }
  revealAdminNav();
  document.addEventListener('DOMContentLoaded', revealAdminNav);
})();
</script>"""


def slugify(title: str) -> str:
    s = re.sub(r"[^a-z0-9\s-]", "", title.lower())
    return re.sub(r"\s+", "-", s.strip()) or "section"


def esc(text: str) -> str:
    return html_lib.escape(text, quote=True)


YT_RE = re.compile(r"(?:youtube\.com/watch\?v=|youtu\.be/)([A-Za-z0-9_-]{6,})")


def yt_card(title: str, url: str, vid: str) -> str:
    thumb = f"images/youtube/{vid}.jpg"
    return (
        f'<div class="yt-card" data-ytid="{esc(vid)}">'
        f'<a class="yt-title" href="{esc(url)}" target="_blank" rel="noopener">{esc(title)}</a>'
        f'<button type="button" class="yt-poster" aria-label="Play video: {esc(title)}" '
        f'data-ytid="{esc(vid)}" data-yturl="{esc(url)}">'
        f'<img src="{esc(thumb)}" alt="{esc(title)}" loading="lazy" referrerpolicy="no-referrer" />'
        f'<span class="yt-play" aria-hidden="true"></span></button>'
        f'<div class="yt-frame" hidden></div></div>'
    )


def format_inline(raw: str, auto_embed: bool = True) -> str:
    tokens: list[tuple] = []
    pattern = re.compile(
        r"(!\[([^\]]*)\]\(([^)]+)\))|(\[([^\]]+)\]\(([^)]+)\))|(\*\*[^*]+\*\*)|(`[^`]+`)"
    )
    pos = 0
    for m in pattern.finditer(raw):
        if m.start() > pos:
            tokens.append(("t", raw[pos : m.start()]))
        if m.group(1):
            tokens.append(("img", m.group(2), m.group(3)))
        elif m.group(4):
            tokens.append(("a", m.group(5), m.group(6)))
        elif m.group(7):
            tokens.append(("b", m.group(7)[2:-2]))
        else:
            tokens.append(("c", m.group(0)[1:-1]))
        pos = m.end()
    if pos < len(raw):
        tokens.append(("t", raw[pos:]))

    out: list[str] = []
    for tok in tokens:
        if tok[0] == "t":
            out.append(esc(tok[1]))
        elif tok[0] == "b":
            out.append(f"<strong>{esc(tok[1])}</strong>")
        elif tok[0] == "c":
            out.append(f"<code>{esc(tok[1])}</code>")
        elif tok[0] == "img":
            alt, src = tok[1], tok[2]
            cls = " topic" if src.startswith("images/topics/") else ""
            out.append(
                f'<figure class="media{cls}"><img src="{esc(src)}" alt="{esc(alt)}" '
                f'loading="lazy" referrerpolicy="no-referrer" />'
                f"<figcaption>{esc(alt)}</figcaption></figure>"
            )
        elif tok[0] == "a":
            label, url = tok[1], tok[2]
            ym = YT_RE.search(url) if auto_embed else None
            if ym:
                out.append(yt_card(label, url, ym.group(1)))
            else:
                out.append(f'<a href="{esc(url)}" target="_blank" rel="noopener">{esc(label)}</a>')
    return "".join(out)


def parse_blocks(text: str) -> list[tuple]:
    lines = text.splitlines()
    blocks: list[tuple] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if not line.strip():
            i += 1
            continue
        if line.startswith("#"):
            level = len(line) - len(line.lstrip("#"))
            title = line[level:].strip()
            blocks.append(("h", level, title))
            i += 1
        elif line.strip() == "---":
            blocks.append(("hr",))
            i += 1
        elif line.startswith("|") and i + 1 < len(lines) and re.match(r"^\|[\s\-:|]+\|$", lines[i + 1].strip()):
            rows: list[list[str]] = []
            while i < len(lines) and lines[i].startswith("|"):
                row = lines[i].strip()
                if re.match(r"^\|[\s\-:|]+\|$", row):
                    i += 1
                    continue
                rows.append([c.strip() for c in row.strip("|").split("|")])
                i += 1
            blocks.append(("table", rows))
        elif line.startswith(">"):
            q: list[str] = []
            while i < len(lines) and (lines[i].startswith(">") or (q and lines[i].strip() == "")):
                if lines[i].startswith(">"):
                    q.append(lines[i][1:].lstrip())
                elif lines[i].strip() == "":
                    q.append("")
                i += 1
            blocks.append(("quote", q))
        elif re.match(r"^[-*] ", line) or re.match(r"^\d+\. ", line):
            ordered = bool(re.match(r"^\d+\. ", line))
            items: list[str] = []
            while i < len(lines) and (re.match(r"^[-*] ", lines[i]) or re.match(r"^\d+\. ", lines[i])):
                item = re.sub(r"^([-*] |\d+\. )", "", lines[i])
                i += 1
                while i < len(lines) and lines[i].startswith("  ") and lines[i].strip():
                    item += " " + lines[i].strip()
                    i += 1
                items.append(item)
            blocks.append(("list", ordered, items))
        else:
            para = [line]
            i += 1
            while (
                i < len(lines)
                and lines[i].strip()
                and not lines[i].startswith("#")
                and not lines[i].startswith("|")
                and not lines[i].startswith(">")
                and not re.match(r"^[-*] ", lines[i])
                and not re.match(r"^\d+\. ", lines[i])
                and lines[i].strip() != "---"
            ):
                para.append(lines[i])
                i += 1
            blocks.append(("p", " ".join(para)))
    return blocks


def render_block(block: tuple) -> str:
    kind = block[0]
    if kind == "hr":
        return "<hr />"
    if kind == "p":
        return f"<p>{format_inline(block[1])}</p>"
    if kind == "quote":
        parts = [f"<p>{format_inline(q)}</p>" for q in block[1] if q.strip()]
        return "<blockquote>" + "".join(parts) + "</blockquote>"
    if kind == "list":
        tag = "ol" if block[1] else "ul"
        items = "".join(f"<li>{format_inline(it)}</li>" for it in block[2])
        return f"<{tag}>{items}</{tag}>"
    if kind == "table":
        rows = block[1]
        thead = "".join(f"<th>{format_inline(c, auto_embed=False)}</th>" for c in rows[0])
        body = [
            "<tr>" + "".join(f"<td>{format_inline(c, auto_embed=False)}</td>" for c in row) + "</tr>"
            for row in rows[1:]
        ]
        return f'<div class="table-wrap"><table><tr>{thead}</tr>{"".join(body)}</table></div>'
    if kind == "h":
        level, title = block[1], block[2]
        sid = slugify(title)
        tag = f"h{level}"
        return f'<{tag} id="{sid}">{esc(title)}</{tag}>'
    return ""


def build() -> None:
    md = MD_PATH.read_text(encoding="utf-8")
    blocks = parse_blocks(md)

    manifest_sections: list[dict] = []
    toc_topics: list[dict] = []
    panels: list[dict] = []

    current_panel: dict | None = None
    current_topic: dict | None = None
    current_section_id: str | None = None
    section_open = False
    sort_order = 0

    def open_section(section_id: str, parts: list[str]) -> None:
        nonlocal section_open, current_section_id
        close_section(parts)
        current_section_id = section_id
        parts.append(
            f'<section class="content-block" data-section-id="{esc(section_id)}">'
            f'<div class="content-block-body">'
        )
        section_open = True

    def close_section(parts: list[str]) -> None:
        nonlocal section_open
        if section_open:
            parts.append("</div></section>")
            section_open = False

    for block in blocks:
        if block[0] == "h" and block[1] == 1:
            title = block[2]
            tid = slugify(title)
            if current_panel is not None:
                close_section(current_panel["parts"])
                panels.append(current_panel)
            current_panel = {"id": tid, "title": title, "parts": [f'<h1 id="{tid}">{esc(title)}</h1>']}
            current_topic = {"id": tid, "title": title, "children": []}
            toc_topics.append(current_topic)
            sort_order += 1
            manifest_sections.append(
                {"id": tid, "parent_id": None, "title": title, "type": "topic", "sort_order": sort_order}
            )
            current_section_id = None
            section_open = False
            continue

        if current_panel is None:
            continue

        if block[0] == "h" and block[1] == 2:
            title = block[2]
            sid = slugify(title)
            current_topic["children"].append({"id": sid, "title": title})
            sort_order += 1
            manifest_sections.append(
                {
                    "id": sid,
                    "parent_id": current_panel["id"],
                    "title": title,
                    "type": "section",
                    "sort_order": sort_order,
                }
            )
            open_section(sid, current_panel["parts"])
            current_panel["parts"].append(render_block(block))
            continue

        if block[0] == "h" and block[1] == 3:
            if not section_open:
                open_section(current_panel["id"], current_panel["parts"])
            current_panel["parts"].append(render_block(block))
            continue

        if block[0] == "h":
            current_panel["parts"].append(render_block(block))
            continue

        if not section_open:
            open_section(current_panel["id"], current_panel["parts"])

        current_panel["parts"].append(render_block(block))

    if current_panel is not None:
        close_section(current_panel["parts"])
        panels.append(current_panel)

    for topic in toc_topics:
        topic["children"].insert(
            0,
            {
                "id": topic["id"],
                "title": topic["title"] if topic["title"].startswith("AI Tools") else f"{topic['title']} overview",
            },
        )

    manifest = {"version": 1, "sections": manifest_sections}
    (ROOT / "content-manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")

    toc_parts = ['<nav class="toc"><h2>Contents</h2><ul class="toc-topics">']
    for topic in toc_topics:
        subs = "".join(
            f'<li><a href="#{esc(c["id"])}" data-section-id="{esc(c["id"])}">{esc(c["title"])}</a></li>'
            for c in topic["children"]
        )
        toc_parts.append(
            f'<li class="toc-topic">'
            f'<button type="button" class="toc-toggle" aria-expanded="false" data-target="#{esc(topic["id"])}">'
            f'<span class="toc-label">{esc(topic["title"])}</span>'
            f'<span class="toc-chevron" aria-hidden="true"></span></button>'
            f'<ul class="toc-subs" hidden>{subs}</ul></li>'
        )
    toc_parts.extend(
        [
            '<li class="toc-user" aria-live="polite"></li>',
            '<li class="toc-topic toc-contact"><a class="toc-link" href="contact.html">Contact Us</a></li>',
            '<li class="toc-topic toc-admin"><a class="toc-link" href="admin.html">Admin</a></li>',
            "</ul></nav>",
        ]
    )

    panel_html = []
    for idx, panel in enumerate(panels):
        hidden = "" if idx == 0 else " hidden"
        active = " is-active" if idx == 0 else ""
        panel_html.append(
            f'<section class="topic-panel{active}" data-topic-id="{esc(panel["id"])}"{hidden}>'
            + "".join(panel["parts"])
            + "</section>"
        )

    style = STYLE_PATH.read_text(encoding="utf-8")
    playbook_js = PLAYBOOK_SCRIPT_PATH.read_text(encoding="utf-8")

    page = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>AI Tools Playbook · Traininglobe</title>
<meta name="description" content="Practical playbook for ChatGPT, Claude, Email, Gamma, Google Workspace with Gemini, make.com, Midjourney, NotebookLM, and Notion." />
<style>
{style}
</style>
</head>
<body>
<script src="config.js"></script>
<script src="api.js"></script>
<script src="auth.js"></script>
<div class="wrap">
{HERO_SNIPPET}
{"".join(toc_parts)}
<main>{"".join(panel_html)}</main>
<footer>Traininglobe · AI Tools Playbook</footer>
</div>
<div id="access-modal" class="access-modal" hidden aria-hidden="true">
<div class="access-modal-backdrop" data-close-modal></div>
<div class="access-modal-panel" role="dialog" aria-labelledby="access-modal-title">
<h3 id="access-modal-title">Request access</h3>
<p class="access-modal-lead">Tell us why you need this section. An admin will review your request.</p>
<form id="access-request-form">
<input type="hidden" id="access-section-id" name="section_id" />
<p class="access-modal-section"><strong>Section:</strong> <span id="access-section-title"></span></p>
<div class="field">
<label for="access-notes">Reason / notes</label>
<textarea id="access-notes" name="notes" required placeholder="Why do you need access?"></textarea>
</div>
<div class="access-modal-actions">
<button type="button" class="btn-secondary" data-close-modal>Cancel</button>
<button type="submit" class="btn-primary">Submit request</button>
</div>
<p id="access-form-error" class="access-form-error" hidden></p>
</form>
</div>
</div>
<script src="access.js"></script>
<script>
{playbook_js}
</script>
{ADMIN_REVEAL_SCRIPT}
</body>
</html>
"""
    (ROOT / "index.html").write_text(page, encoding="utf-8")
    print(f"Built {len(panels)} panels, {len(manifest_sections)} manifest sections")


if __name__ == "__main__":
    build()
