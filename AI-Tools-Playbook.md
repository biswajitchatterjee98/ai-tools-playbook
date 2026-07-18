# AI Tools Playbook

A practical, in-depth guide to **9 modern tools**: what each one is, how to use it, how to use it efficiently, real examples, a prompt method (**STAR** or **CREATE**) for each tool, benefits, and curated media.

**Tools covered:** ChatGPT · Claude · E-mail · Gamma · Google Workspace with Gemini · make.com · Midjourney · NotebookLM · Notion

---

## How to read this playbook

For every tool you will find the same structure:

1. **Reading material**: core ideas, explained step by step (deep enough for real skill)  
2. **How to use**: get productive in 5-6 steps  
3. **How to use efficiently**: the habits that save hours  
4. **Real-world example**: a concrete implementation you can copy  
5. **Prompt method**: either **STAR** or **CREATE** (never both in the same chapter)  
6. **Benefits**: what you gain when you work this way  
7. **Media**: topic images and YouTube videos  

**Two prompt methods used in this playbook (one per tool):**

- **STAR**: **Situation**, **Task**, **Action**, **Result**. Best when you already know the outcome and need a complete brief. Used in: ChatGPT, E-mail, Gamma, Midjourney, Notion.  
- **CREATE**: **Context**, **Role**, **Expectation**, **Audience**, **Task**, **Examples**. Best when tone, audience fit, and sample quality matter. Used in: Claude, Google Workspace with Gemini, make.com, NotebookLM.  

Pick the method the chapter teaches. Do not mix STAR and CREATE inside one tool section.

---

# 1. ChatGPT

**Official site:** [https://chatgpt.com](https://chatgpt.com)

![AI assistant at work: modern computing and generative tools](images/topics/chatgpt.jpg)

## 1.1 Reading material (step by step)

**Step 1: What it is**  
ChatGPT is an AI assistant from OpenAI. You type or speak a request in natural language; it replies with text, plans, code, summaries, tables, or structured drafts. Think of it as a fast junior teammate available 24/7 who still needs your judgment, taste, and fact-checking.

ChatGPT predicts helpful next text from patterns in training and (when enabled) tools like browsing or file analysis. That is why it can feel brilliant on structure and wording, yet invent a confident-sounding wrong detail.

**Step 2: What it is good at**  
It shines on language-heavy and structure-heavy work:

- Brainstorming options and angles  
- Rewriting for tone, length, or audience  
- Outlining reports, lessons, proposals, and SOPs  
- Explaining difficult topics simply  
- Drafting emails, posts, scripts, and FAQs  
- Turning messy notes into clean sections  
- Walking through problems step by step  
- Generating checklists, rubrics, and interview questions  
- Building decision matrices and comparison tables  
- Creating first-pass lesson plans, agendas, and runbooks  
- Role-playing stakeholder objections so you prepare better answers  

**Step 3: What it is not**  
It is not a guaranteed source of truth. It can hallucinate. It does not know your private company data unless you paste it or connect an approved tool. Never trust it alone for legal, medical, financial, or compliance decisions. Verify facts, numbers, citations, names, and dates before client or manager delivery.

**Step 4: How a good prompt works**  
Weak prompt: "Write a proposal." Strong prompts include:

1. **Role**  
2. **Goal**  
3. **Context** (audience, industry, constraints, location)  
4. **Format**  
5. **Examples** of tone or past winning work  

Reusable skeleton:

> Act as a [role]. Goal: [deliverable]. Audience: [who]. Constraints: [length, tone, must include / must avoid]. Format: [structure]. Here is context: [paste]. First ask up to 5 clarifying questions if anything critical is missing; otherwise produce draft v1.

**Step 5: Conversation as iteration**  
Draft 1 is rarely final. Useful follow-ups:

- "Make it shorter by 30%."  
- "Add one India-specific example."  
- "Rewrite for a skeptical CFO."  
- "Give me 3 options; I will pick one."  
- "List assumptions you made."  
- "What should I verify before sending?"  

**Step 6: Four practical work modes**  

1. **Draft mode**: create from blank  
2. **Edit mode**: improve your existing text  
3. **Think mode**: explore options and trade-offs  
4. **Teach mode**: explain, quiz, reinforce  

Mixing modes in one chat ("write the report, teach finance, and debug code") usually lowers quality. Prefer one mode per chat.

**Step 7: Context and memory hygiene**  
Long chats can become polluted: contradictions, forgotten constraints, generic tone. Fix: open a new chat and paste only the latest brief plus the best draft so far.

**Step 8: Safety and privacy**  
Do not paste passwords, API keys, secrets, salary, health data, or confidential contracts unless policy allows. Prefer anonymized examples. Treat outputs as drafts until reviewed. Follow enterprise admin rules when applicable.

**Step 9: Common failure patterns**  

- Vague asks → generic answers  
- Missing audience → wrong tone  
- No length limit → walls of text  
- No "do not invent" rule → fake stats  
- Accepting draft 1 → missed quality jump from iteration  

**Step 10: When to open a new chat**  
Change of topic = new chat. One job per chat keeps answers sharp.

**Step 11: Quality bar before you ship**  
Before sending AI-assisted work, ask yourself:

1. Did I verify every number and name?  
2. Does this sound like me / my brand?  
3. Is the ask or next step obvious to the reader?  
4. Would I be comfortable if this appeared under my name?  

If any answer is no, one more edit pass is cheaper than reputation damage.

## 1.2 How to use ChatGPT (5-6 steps)

1. Go to [chatgpt.com](https://chatgpt.com) and sign in.  
2. Click **New chat** for a clean context.  
3. Write a clear prompt with role + goal + audience + format + constraints.  
4. Read the full answer once. Mark useful vs wrong parts.  
5. Ask for one improvement at a time.  
6. Copy into Docs/email/Notion/slides and fact-check before sending.

## 1.3 How to use ChatGPT efficiently (5-6 steps)

1. **One chat = one job.**  
2. **Give a template once** and reuse it.  
3. **Ask for options, then pick.**  
4. **Use it as an editor**, not only a writer.  
5. **Force quality checks**: Assumptions + What to verify.  
6. **Build a prompt library** of 8-12 weekly workflows.

### Extra efficiency habits

- Keep a short "voice sample" of your best writing for tone matching.  
- Ask for a critique pass: score clarity, specificity, actionability; then rewrite the weakest score.  
- For research-like questions: "Separate confident facts from guesses."  
- Save winning prompts in Notion the same day you create them.

## 1.4 Real-world example

**Scenario:** A freelance performance marketer sends a weekly client report every Friday by 11:00 AM.

**Before:** 60-90 minutes formatting screenshots and rewriting tone.

**Implementation:**

1. Export last week's metrics (anonymize if needed).  
2. Prompt: "Act as a performance marketer. Turn these numbers into a 1-page client update: Executive summary (3 bullets), Wins, Risks, Next actions (owner + date). Tone: clear, confident, no jargon. Do not invent numbers."  
3. Follow-up: calm the risks section.  
4. Follow-up: subject line + 2-sentence email body.  
5. Paste, verify every number, send.

**Result:** 15-25 minutes with consistent weekly structure.

**Student variant:** lecture notes → study guide + quiz + cheat sheet (verify against notes).  
**Manager variant:** messy meeting notes → decisions / owners / deadlines table.

## 1.5 STAR method for writing a strong ChatGPT prompt / brief

Use **STAR** so your instructions are complete: **Situation**, **Task**, **Action**, **Result**.

| Letter | Meaning | What you write |
|--------|---------|----------------|
| **S** | Situation | Context, audience, constraints, and why this matters now |
| **T** | Task | The exact job the tool must do |
| **A** | Action | Role, steps, tone, rules, and process |
| **R** | Result | Format, length, and definition of done |

**Copy-paste STAR template for ChatGPT:**

> **Situation:** I am a [role] at [company/context]. This week [background]. Audience is [who].  
> **Task:** Create [deliverable].  
> **Action:** Act as [expert]. Process: [steps]. Constraints: [length, tone, must include/avoid, do not invent].  
> **Result:** Output as [format]. End with Assumptions + What I should verify.

**Worked STAR example:**

> **Situation:** Freelance performance marketer. Friday client update due. Audience: busy founder.  
> **Task:** Turn pasted metrics into a 1-page weekly update.  
> **Action:** Act as senior performance marketer. Sections: Executive summary, Wins, Risks, Next actions. Calm tone. No invented metrics.  
> **Result:** Report text + subject line + 2-sentence cover note.

**Weak vs STAR:**

- Weak: "Write a weekly report."
- STAR: the full STAR prompt above with real metrics pasted underneath

**Extra tips for this tool:**

- Put hard constraints early ("do not invent numbers").  
- Ask for Assumptions at the end so hidden guesses become visible.  
- Iterate once for tone after structure is correct.
## 1.6 Benefits (when used efficiently)

- Faster first drafts for writing-heavy work  
- Clearer thinking through outlines and option comparison  
- Less blank-page anxiety  
- More consistent weekly deliverables  
- More time for judgment and relationships  
- Better learning loops (explain → quiz → apply)  
- Stronger stakeholder communication when audience + format are forced every time  

## 1.7 Media

**Videos:**

- [Introduction to ChatGPT agent (OpenAI)](https://www.youtube.com/watch?v=1jn_RpbPbEc)  
- OpenAI Academy: [ChatGPT 101](https://academy.openai.com/en/public/clubs/work-users-ynjqu/videos/chatgpt-101-a-guide-to-your-ai-superassistant-recording)  
- Getting started: [openai.com/academy/getting-started](https://openai.com/academy/getting-started/)

---

# 2. Claude

**Official site:** [https://claude.ai](https://claude.ai)

![Writing and careful document work: Claude's natural strength](images/topics/claude.jpg)

## 2.1 Reading material (step by step)

**Step 1: What it is**  
Claude is an AI assistant from Anthropic. Many professionals prefer it for careful writing, long-document analysis, thoughtful rewriting, and structured reasoning. If ChatGPT often feels like a fast generalist, Claude often feels like a patient editor who can stay with a long brief.

**Step 2: Core ideas**  

- **Chat**: Q&A, drafting, analysis  
- **Projects**: workspace with files + custom instructions across chats  
- **Artifacts**: side panel for documents, code, interactive outputs  
- **Connectors / skills** (plan-dependent): reusable workflows and tool links  

Projects are the difference between "Claude is nice" and "Claude is part of my operating system."

**Step 3: Why Projects matter**  
Without Projects, every chat starts from zero. With a Project, Claude already knows brand voice, audience, product facts, and constraints. Setup is an investment that pays back every session.

**Step 4: Good use cases**  

- Long PDFs → FAQs, briefs, onboarding guides  
- Proposal writing with house style  
- Tone rewrites (formal, warm, direct, simple English)  
- Meeting notes → action plans  
- SOP and checklist creation  
- Careful code explanation and review  
- Turning research packs into decision memos  

**Step 5: Limits**  
Still not infallible. Too many low-quality files confuse results. Conflicting sources (old vs new pricing) create mixed answers. Keep Project files curated. Verify live web facts outside the chat.

**Step 6: Working style that wins**  
Treat Claude like a senior editor:

1. Give sources  
2. Give rules  
3. Ask for draft v1  
4. Critique with specifics  
5. Lock the final version yourself  

Vague feedback ("make it better") wastes capacity. Specific feedback compounds quality.

**Step 7: Instructions that work in Projects**  
Write behavior rules, not essays:

- Prefer short paragraphs.  
- Never invent metrics.  
- Ask if a required fact is missing.  
- Use Indian English spelling if that is house style.  
- End drafts with Assumptions and Open questions.  

**Step 8: File strategy**  
Upload the 5-8 documents that actually decide quality: brand guide, offer sheet, winning past proposal, objection notes, glossary. More files are not always better. Label files clearly ("Pricing_2026_Q2.pdf" not "final_final2.pdf").

**Step 9: When Claude beats a blank chat**  
Choose Claude/Projects when:

- The work repeats weekly  
- Voice consistency matters  
- Source documents are long  
- Multiple teammates should share the same assistant rules  

**Step 10: Review ritual**  
After every important output, ask Claude: "What did you assume?" Then verify those assumptions against your source files before shipping.

## 2.2 How to use Claude (5-6 steps)

1. Open [claude.ai](https://claude.ai) and sign in.  
2. Start with a concrete ask: email, outline, summary, comparison, rewrite.  
3. Upload a file when the task depends on real content.  
4. For recurring work, create a **Project** named by job ("Client Proposals").  
5. Add short custom instructions: voice, do/don't, audience, forbidden inventions.  
6. Iterate in Artifacts when you want an editable document.

## 2.3 How to use Claude efficiently (5-6 steps)

1. **One Project per jobstream**, not one mega Project for life.  
2. **Upload only the 5-8 files that matter.**  
3. **Write instructions as rules**, not a memoir.  
4. **Start chats with a job ticket:** Goal / Audience / Deadline / Format / Constraints / Source of truth.  
5. **Use Claude for synthesis and polish; you fact-check.**  
6. **Save reusable prompts** for weekly tasks.

### Extra efficiency habits

- Keep a "golden example" of a winning deliverable inside the Project.  
- Ask Claude to compare draft vs golden example and list gaps.  
- Separate research chats from writing chats inside the same Project.

## 2.4 Real-world example

**Scenario:** An HR lead must turn a 40-page policy PDF into something new hires will actually read.

**Implementation:**

1. Create Project: "HR Onboarding".  
2. Upload: policy PDF + welcome email + 5 common new-hire questions.  
3. Prompt: "Extract only rules a new hire must know in week 1. Output FAQ with 12 questions. Plain language. Flag unclear or conflicting points. Do not invent policy."  
4. Follow-up: rewrite at roughly Grade-8 reading level.  
5. Follow-up: create a printable Day-1 checklist.  
6. Copy into Notion/Docs, Legal/HR review once, publish internally.

**Result:** Policy becomes usable. Fewer repeated questions. Managers stop rewriting the same explanations.

**Ops variant:** upload three vendor contracts and ask for a comparison table of renewal dates, notice periods, and risk clauses (still have Legal confirm).

## 2.5 CREATE method for writing a strong Claude prompt / brief

Use **CREATE** so your instructions are complete: **Context**, **Role**, **Expectation**, **Audience**, **Task**, **Examples**.

| Letter | Meaning | What you write |
|--------|---------|----------------|
| **C** | Context | Background, constraints, tools/files in play, and why this matters now |
| **R** | Role | Who the AI (or you) should act as |
| **E** | Expectation | Quality bar, length, tone, and what "good" looks like |
| **A** | Audience | Who will read or use the output |
| **T** | Task | The exact job to complete |
| **E** | Examples | 1-2 samples, anti-examples, or "match this style" references |

**Copy-paste CREATE template for Claude:**

> **Context:** Working inside Project "[name]" with uploaded sources [list]. Constraints: [do not invent / house style / deadline].  
> **Role:** Act as [editor / analyst / proposal writer].  
> **Expectation:** Ground answers only in uploaded sources. Flag gaps. Reading level: [level]. Include Assumptions + Open questions.  
> **Audience:** [who will use this].  
> **Task:** Produce [deliverable].  
> **Examples:** Match the tone of [golden sample / pasted paragraph]. Avoid [fluff / invented policy].

**Worked CREATE example:**

> **Context:** Project "HR Onboarding" with policy PDF + welcome email. Need week-1 clarity only.  
> **Role:** Plain-language editor for HR.  
> **Expectation:** No invented policy. Grade-8 reading level. Flag conflicts for Legal.  
> **Audience:** First-week employees.  
> **Task:** 12-question FAQ + Day-1 checklist.  
> **Examples:** Prefer short answers like: "Q: When is payroll? A: Last working day of each month. See Policy §4." Avoid essay-length replies.

**Weak vs CREATE:**

- Weak: "Summarize this PDF."  
- CREATE: full CREATE brief with Project sources, audience, no-invention rule, and a sample answer shape  

**Extra tips for this tool:**

- Put source-of-truth rules in Project instructions once.  
- Ask Claude to cite which uploaded file each claim came from.  
- Keep Projects narrow so answers stay on-topic.

## 2.6 Benefits

- Higher-quality long-form writing with less rewriting  
- Persistent context via Projects  
- Better digestion of long documents  
- Clearer SOPs and internal knowledge  
- Fewer start-from-scratch sessions  
- Team voice consistency when everyone shares Project rules  

## 2.7 Media

**Videos:**

- [Beginner's Guide to Master Claude](https://www.youtube.com/watch?v=BGuv4pjOTOI)  
- [Claude AI Tutorial for Beginners (Step-by-Step)](https://www.youtube.com/watch?v=r2vYObllqJU)  
- [Claude AI 101: Complete Beginner's Guide](https://www.youtube.com/watch?v=H6LchswC74Y)

---

# 3. E-mail (AI-assisted professional email)

**Tools in this chapter:** Gmail or Outlook, plus AI drafting (Gemini Help me write in Gmail, Microsoft Copilot, or ChatGPT/Claude as a writing partner)

![Inbox and professional communication](images/topics/email.jpg)

## 3.1 Reading material (step by step)

**Step 1: What good email means today**  
Email is still the default channel for clients, vendors, colleges, and many internal approvals. Good email is short, scannable, and action-clear. AI should help you draft faster. It should not make emails longer, vaguer, or fake-polite.

Useful test: if the reader only reads the subject line and first two sentences, can they still understand what you need?

**Step 2: Anatomy of an efficient email**  

1. Subject line: topic + action or status  
2. First line: purpose in plain language  
3. Body: short paragraphs or 3-5 bullets  
4. One primary ask  
5. Deadline if there is one  
6. Soft close + signature  

Subject patterns:

- `Action needed: Q2 invoice by Fri 5pm`  
- `Update: Project Atlas is green (1 risk)`  
- `Intro: [Name] <> [Name] for [reason]`  

**Step 3: Where AI helps most**  

- Subject line options  
- Tone shifts (formal, warm, firm, apologetic)  
- Shortening rambling drafts  
- Turning bullets into polished messages  
- Summarizing long threads before reply  
- Drafting FAQ-style replies you send often  

**Step 4: Where AI can hurt**  

- Corporate fluff that sounds like nobody wrote it  
- Wrong facts, dates, or promises  
- Wrong tone for the relationship  
- Sending without reading  

Always review names, amounts, dates, attachments, and commitments.

**Step 5: Inbox as a system**  
Writing faster is only half of efficiency. The other half is triage: Respond / Defer / Delegate / Archive. AI summaries help understanding; your rules decide priority. Batching email twice a day usually beats living in the inbox.

**Step 6: Privacy and policy**  
Be careful pasting confidential threads into external AI tools. Prefer Gemini in Gmail or Copilot in Outlook when company policy requires it.

**Step 7: Templates beat one-off genius**  
If you send the same kinds of email weekly, create templates. AI fills variables; it should not invent a brand-new structure every time.

**Step 8: Emotional emails**  
For conflict, delay, or apology emails: write bullets of facts first, then ask AI for a calm draft, then remove anything that sounds defensive or dramatic. Sleep on high-stakes sends when possible.

**Step 9: Thread discipline**  
Change of topic often deserves a new subject line. Do not bury a new proposal inside a 40-message invoice thread.

**Step 10: Measurement of "good"**  
Good email gets a clear reply or decision. If people often reply "what do you need from me?", your ask is still buried.

## 3.2 How to use AI for email (5-6 steps)

1. Capture intent in rough bullets: who, why, ask, deadline, tone.  
2. Paste into Gemini / ChatGPT / Claude: "Turn into a concise professional email under 120 words."  
3. Ask for 2 tone variants (direct vs warm).  
4. Choose one; cut another 15-20% without losing the ask.  
5. Paste into Gmail/Outlook; personalize the first line.  
6. Send only after checking names, facts, links, and attachments.

## 3.3 How to use email efficiently (5-6 steps)

1. **Write the ask first.**  
2. **Use subject formulas.**  
3. **One email = one purpose** when possible.  
4. **Template your top 10 replies.**  
5. **Batch email** (for example 11:00 and 16:30).  
6. **Summarize long threads before replying.**

### Extra efficiency habits

- Keep a swipe file of emails that got fast yes replies.  
- For follow-ups, reference the original ask and deadline in line one.  
- Unsubscribe or filter newsletters so real work mail is visible.

## 3.4 Real-world example

**Scenario:** A founder must follow up with 8 investors after demo day.

**Implementation:**

1. Capture 4 fields per conversation: name, interest, objection, next step.  
2. Prompt AI with a skeleton under 120 words, one specific detail, soft CTA for a 15-minute call.  
3. Generate 8 variants from notes.  
4. Edit 1-2 lines each for authenticity.  
5. Send with reminders in 4 business days.

**Result:** Same-day personal follow-ups that still sound human.

**Support variant:** FAQ page + AI draft + human send → faster replies, consistent tone.

## 3.5 STAR method for writing a strong email AI prompt / brief

Use **STAR** so your instructions are complete: **Situation**, **Task**, **Action**, **Result**.

| Letter | Meaning | What you write |
|--------|---------|----------------|
| **S** | Situation | Context, audience, constraints, and why this matters now |
| **T** | Task | The exact job the tool must do |
| **A** | Action | Role, steps, tone, rules, and process |
| **R** | Result | Format, length, and definition of done |

**Copy-paste STAR template for email AI:**

> **Situation:** I need to email [person/role] about [topic]. Relationship: [new/warm/tense]. Stakes: [low/high].  
> **Task:** Draft a concise email that achieves [ask].  
> **Action:** Tone [direct/warm/firm]. Max [N] words. Include subject + body. Do not overpromise. Keep one primary ask.  
> **Result:** Final email ready to paste, plus 2 alternate subject lines.

**Worked STAR example:**

> **Situation:** Founder following up with an interested investor after demo day. Warm relationship, high stakes.  
> **Task:** Ask for a 15-minute call next week.  
> **Action:** Under 120 words. Mention one specific demo detail. Soft CTA. No hype.  
> **Result:** Email body + 2 subject lines.

**Weak vs STAR:**

- Weak: "Write a follow-up email."
- STAR: STAR brief with relationship, stakes, word limit, and one concrete detail from the meeting

**Extra tips for this tool:**

- Put the ask in the first 2 lines.  
- Generate two tones, then choose; do not blend both.  
- Always human-edit names and commitments.
## 3.6 Benefits

- Faster replies without sounding rushed  
- Cleaner asks and usually higher response rates  
- Less emotional overthinking on hard emails  
- Better comprehension of long threads  
- Consistent professional tone across a team  
- More calendar time protected from inbox thrash  

## 3.7 Media

**Videos and resources:**

- [How to use "Help me Write" in Gmail (Google Workspace)](https://www.youtube.com/watch?v=PRkCkKhO-3k)  
- Official help: [Draft emails with Gemini in Gmail](https://support.google.com/mail/answer/13955415)

> Email product UIs change often. Keep the principles (ask, subject, brevity, review) even when button names move.

---

# 4. Gamma

**Official site:** [https://gamma.app](https://gamma.app)

![Team presentation and slide storytelling](images/topics/gamma.jpg)

## 4.1 Reading material (step by step)

**Step 1: What Gamma is**  
Gamma is an AI-native tool for presentations, documents, and simple web-style pages. You provide a prompt or pasted content; Gamma generates designed cards (slides) you can edit, theme, present, and share.

**Step 2: Why people use it**  
Traditional slide tools force layout fights. Gamma flips toward content-first design. Ideal when speed and clean visuals matter more than pixel-perfect corporate template compliance.

**Step 3: Best inputs win**  
Before generate, decide:

- Who is the audience?  
- What decision or feeling should they leave with?  
- What are the 6-12 section titles?  
- What proof points are non-negotiable?  

Garbage outline in, pretty garbage out.

**Step 4: Editing mindset**  
Never accept the first AI deck as final:

1. Generate  
2. Cut unnecessary cards  
3. Rewrite headlines into takeaways  
4. Reduce text density  
5. Replace weak images where trust matters  
6. Rehearse out loud once  

**Step 5: Sharing**  
Present in browser, share a review link, or export (PDF/PPT depending on plan). Link sharing is excellent for async feedback.

**Step 6: When not to use Gamma alone**  
Strict brand systems, animation-heavy keynotes, or legal disclosure-heavy decks: use Gamma as draft engine, finalize in brand tool if needed.

**Step 7: Headline craft**  
Weak: "Financials." Strong: "Gross margin improved 4 points." If someone skims only headlines, they should still get the story.

**Step 8: Narrative arcs that work**  
Common decks:

- Problem → Insight → Solution → Proof → Ask  
- Status → Wins → Risks → Decisions needed  
- Teach → Practice → Apply (training decks)  

Pick one arc before you generate cards.

**Step 9: Text density rule**  
If a card needs more than about 40 words, split it or move detail to appendix notes. Dense cards kill attention.

**Step 10: Image strategy**  
Use real product/team photos for trust moments. Keep decorative AI images for mood, not for evidence.

## 4.2 How to use Gamma (5-6 steps)

1. Sign up at [gamma.app](https://gamma.app).  
2. Create a presentation (or paste existing content).  
3. Set audience, tone, and approximate card count.  
4. Review/edit outline before full generation when available.  
5. Edit card by card: headlines, bullets, images, theme.  
6. Present or export/share for review.

## 4.3 How to use Gamma efficiently (5-6 steps)

1. **Write narrative outside Gamma first** (Docs/Notion/NotebookLM).  
2. **One idea per card.**  
3. **Headline = takeaway.**  
4. **Lock a theme early.**  
5. **Replace generic images** when credibility matters.  
6. **60-second skim test** using headlines only.

### Extra efficiency habits

- Keep a reusable outline template for pitch / weekly review / training.  
- Ask a teammate to comment on the link overnight before live delivery.  
- Export PDF backup before important meetings.

## 4.4 Real-world example

**Scenario:** Training company needs a 12-slide pitch for a corporate L&D buyer by tomorrow.

**Implementation:**

1. Outline in Notion: problem, method, curriculum map, proof, pricing logic, next step.  
2. Paste into Gamma → ~12 cards.  
3. Rewrite headlines into benefit language.  
4. Add one real case-study metric card.  
5. Share link for overnight comments.  
6. Present from browser; export PDF backup.

**Result:** Usable deck in under 2 hours.

**Student variant:** chapter summary → 8-card revision deck for a study group.

## 4.5 STAR method for writing a strong Gamma prompt / brief

Use **STAR** so your instructions are complete: **Situation**, **Task**, **Action**, **Result**.

| Letter | Meaning | What you write |
|--------|---------|----------------|
| **S** | Situation | Context, audience, constraints, and why this matters now |
| **T** | Task | The exact job the tool must do |
| **A** | Action | Role, steps, tone, rules, and process |
| **R** | Result | Format, length, and definition of done |

**Copy-paste STAR template for Gamma:**

> **Situation:** Audience is [who]. Goal of the talk is [decision/feeling]. Time available: [N minutes].  
> **Task:** Create a [N]-card presentation about [topic].  
> **Action:** Narrative arc: [problem→solution→ask / status→risks→decisions]. One idea per card. Headlines must be takeaways. Tone: [style]. Avoid dense paragraphs.  
> **Result:** Outline first, then cards. Include speaker notes for the ask slide.

**Worked STAR example:**

> **Situation:** Corporate L&D buyer meeting tomorrow, 12 minutes. Need credibility + clear next step.  
> **Task:** 12-card pitch for our training program.  
> **Action:** Arc: problem → method → curriculum → proof → pricing logic → ask. Benefit headlines. One verified metric card.  
> **Result:** Presentable deck + PDF export + one-sentence ask on final card.

**Weak vs STAR:**

- Weak: "Make a presentation about our training."
- STAR: STAR brief with audience, time, card count, narrative arc, and proof constraints

**Extra tips for this tool:**

- Paste a structured outline, not a vague topic.  
- Rewrite every headline after generation.  
- Cut cards ruthlessly; fewer stronger cards win.
## 4.6 Benefits

- Dramatically faster first decks  
- Cleaner default visual hierarchy  
- Easy async sharing for feedback  
- Less time fighting fonts and alignment  
- More energy for story and delivery  
- Lower barrier for non-designers  

## 4.7 Media

**Videos:**

- [Gamma.app Tutorial: AI presentations](https://www.youtube.com/watch?v=sDUjoih6JgA)  
- [How to Use Gamma AI (Full Tutorial)](https://www.youtube.com/watch?v=KcbXKUR7-a0)

---

# 5. Google Workspace with Gemini

**Includes:** Gmail, Docs, Sheets, Slides, Drive with Gemini AI assistance  
**Start:** [https://workspace.google.com](https://workspace.google.com)

![Team collaboration inside shared documents and meetings](images/topics/workspace.jpg)

## 5.1 Reading material (step by step)

**Step 1: What this combo is**  
Google Workspace is where many schools and companies already work. Gemini adds AI inside those apps so you draft, summarize, and analyze without constant copy-paste to a separate chatbot.

**Step 2: Mental model by app**  

- **Gmail**: compose, rewrite, summarize threads  
- **Docs**: outline, draft, rewrite selections  
- **Sheets**: explain formulas, clean columns, summarize tables  
- **Slides**: structure and first-pass content  
- **Drive**: file of record for collaboration  

**Step 3: Grounding advantage**  
Gemini can work with content already in your Doc/Sheet/email, so answers often stay closer to your material than a blank chat. Still verify.

**Step 4: Collaboration still wins**  
AI drafts. Humans comment, assign owners, and decide. Use Suggesting mode in Docs so teammates can accept/reject safely.

**Step 5: Governance**  
Follow org AI policy. Features differ by Workspace edition and admin settings.

**Step 6: Best practice principle**  
Accelerate inside the file of record so version history, comments, and permissions stay clean.

**Step 7: Prompting inside Workspace**  
Highlight the messy paragraph or table range first, then ask Gemini to fix only that selection. Narrow scope beats rewriting the whole document.

**Step 8: Sheets caution**  
Ask Gemini to explain a formula before applying bulk changes. One wrong fill-down can corrupt a dataset.

**Step 9: Meeting-to-action loop**  
Capture notes in Docs during/after meetings → Gemini extracts decisions and owners → paste actions into a tracker Sheet or Notion.

**Step 10: When to leave Workspace**  
Move to Gamma for design-heavy decks, NotebookLM for multi-source research, Claude/ChatGPT for deep rewriting outside the file, make.com for cross-app automation.

## 5.2 How to use Google Workspace + Gemini (5-6 steps)

1. Open Docs / Gmail / Sheets / Slides.  
2. Open Gemini / Help me write / Ask Gemini panel.  
3. Select or point to the content Gemini should use.  
4. Ask for a specific output: summary, rewrite, formula, outline, actions.  
5. Insert, then edit in Suggesting/Editing mode.  
6. Share with clear reviewer roles and a due time.

## 5.3 How to use it efficiently (5-6 steps)

1. **Keep source truth in Drive.**  
2. **Prompt with selection.**  
3. **Standardize team prompts.**  
4. **In Sheets, explain before changing.**  
5. **Write in Docs, design later in Gamma/Slides.**  
6. **Comment ownership:** "AI drafted; verify rows 12-20."

### Extra efficiency habits

- Create a shared Doc of approved team prompts.  
- Name files clearly with dates and owners.  
- Use comments for review, not side chats that lose decisions.

## 5.4 Real-world example

**Scenario:** Operations team runs a weekly KPI review every Monday.

**Implementation:**

1. Raw exports land in a Sheet Friday evening.  
2. Gemini helps create a summary tab and flags odd spikes (human confirms).  
3. Doc "Weekly Ops Brief" drafted with wins, risks, asks.  
4. Manager edits 10 minutes and assigns owners in comments.  
5. Email Doc link via Gmail; actions copied to tracker.

**Result:** Same ritual, less formatting labor, faster decisions.

**Classroom variant:** teachers draft parent updates in Docs with Gemini, then share.

## 5.5 CREATE method for writing a strong Gemini in Google Workspace prompt / brief

Use **CREATE** so your instructions are complete: **Context**, **Role**, **Expectation**, **Audience**, **Task**, **Examples**.

| Letter | Meaning | What you write |
|--------|---------|----------------|
| **C** | Context | Background, constraints, tools/files in play, and why this matters now |
| **R** | Role | Who the AI (or you) should act as |
| **E** | Expectation | Quality bar, length, tone, and what "good" looks like |
| **A** | Audience | Who will read or use the output |
| **T** | Task | The exact job to complete |
| **E** | Examples | 1-2 samples, anti-examples, or "match this style" references |

**Copy-paste CREATE template for Gemini in Google Workspace:**

> **Context:** Working in [Docs / Sheets / Gmail]. Selected content is [what]. File of record stays in Drive.  
> **Role:** Act as [ops analyst / editor / spreadsheet coach].  
> **Expectation:** Use only the selected content. Preserve names and numbers. Keep edits reviewable (Suggesting mode when possible).  
> **Audience:** [reviewer / leadership / teammates].  
> **Task:** [summarize / rewrite / extract actions / explain formula].  
> **Examples:** Desired shape: [paste 2-3 bullet sample]. Avoid: [rewriting the whole doc / inventing totals].

**Worked CREATE example:**

> **Context:** Weekly KPI Sheet with Friday exports. Building Monday leadership brief in Docs.  
> **Role:** Operations analyst.  
> **Expectation:** Do not invent metrics. Flag anomalies. Executive-friendly language.  
> **Audience:** Leadership team.  
> **Task:** Create wins / risks / asks narrative from the summary tab.  
> **Examples:** Ask bullets like "Owner: Priya · Due: Wed · Decision needed: approve vendor X." Avoid vague asks like "we should improve performance."

**Weak vs CREATE:**

- Weak: "Make this better."  
- CREATE: CREATE brief naming the app, selection, audience, and a sample output shape  

**Extra tips for this tool:**

- Highlight first, then prompt.  
- Keep AI edits in Suggesting mode for team review.  
- Never skip human verification on Sheet formulas and totals.

## 5.6 Benefits

- Less tool-switching for everyday work  
- Faster document cycles with shared ownership  
- Better spreadsheet literacy via formula explanations  
- Consistent team templates  
- AI help where files already live  
- Cleaner audit trail than scattered chat copy-paste  

## 5.7 Media

**Videos and resources:**

- [How to use "Help me Write" in Gmail (Google Workspace)](https://www.youtube.com/watch?v=PRkCkKhO-3k)  
- Workspace learning: [Use generative AI at work](https://support.google.com/a/users/answer/14628736)  
- Related: [NotebookLM demo](https://www.youtube.com/watch?v=6dHmu1GALmA)

---

# 6. make.com

**Official site:** [https://www.make.com](https://www.make.com)

*(Formerly Integromat: a visual automation platform)*

![Systems, data flow, and automation between apps](images/topics/make.jpg)

## 6.1 Reading material (step by step)

**Step 1: What make.com is**  
make.com connects apps so work moves automatically. When something happens in App A, make.com can run steps in Apps B, C, and D without copy-paste. It is visual: you build a flowchart of modules.

**Step 2: Core vocabulary**  

- **Scenario**: one automation flowchart  
- **Trigger**: event that starts it  
- **Module**: one step  
- **Filter**: continue only if a condition is true  
- **Router**: split into multiple paths  
- **Operations**: metered units of work on your plan  

**Step 3: Perfect for**  

- Lead form → CRM/Sheet + Slack + welcome email  
- Invoice PDF → Drive folder + finance notify  
- Course signup → Notion onboarding checklist  
- Daily digest of new rows to email  
- Syncing selected Notion items to Sheets  

**Step 4: What it is not**  
Not a full custom software product. It is glue between SaaS tools. If your process is unclear, automation moves confusion faster.

**Step 5: Design before you build**  
Write on paper first: Trigger → data needed → decisions → actions → failure path.

**Step 6: Reliability mindset**  
APIs change. Fields arrive empty. People submit junk. Add filters, error handlers, and notify-on-failure. Log important runs to a Sheet.

**Step 7: Start tiny**  
First scenario should be boring and useful: form → Sheet. Then Slack. Then email. Complexity is earned.

**Step 8: Mapping discipline**  
Most broken scenarios come from bad field mapping (phone into email, name into company). Test with 3 real records before going live.

**Step 9: Human checkpoints**  
Not everything should be fully automatic. High-risk actions (refunds, legal emails, price changes) may need an approval step or Slack confirmation.

**Step 10: Operations budget**  
Watch operations usage. Inefficient loops or overly frequent schedules can burn plan limits. Prefer webhooks/triggers over aggressive polling when possible.

## 6.2 How to use make.com (5-6 steps)

1. Create an account at [make.com](https://www.make.com).  
2. Create a new **Scenario**.  
3. Add a trigger module.  
4. Add action modules.  
5. Map fields carefully.  
6. Run once with test data, then turn on.

## 6.3 How to use make.com efficiently (5-6 steps)

1. **Automate only after the manual process is stable.**  
2. **Start with one trigger and two actions.**  
3. **Normalize data early.**  
4. **Use filters** to block junk.  
5. **Log important events to a Sheet.**  
6. **Name modules clearly.**

### Extra efficiency habits

- Keep a one-page "automation catalog" of live scenarios and owners.  
- Review failed executions weekly.  
- Version notes: what changed and why.

## 6.4 Real-world example

**Scenario:** Coaching business collects leads day and night.

**Implementation:**

1. Trigger: new form submission.  
2. Filter: valid email + consent = yes.  
3. Add/update Google Sheet CRM row.  
4. Create Notion Lead page with source tags.  
5. Slack sales channel.  
6. Personalized welcome email.

**Result:** Night/weekend leads do not wait until Monday.

**Ops variant:** Sheet status "Won" → Drive kickoff folder + Notion checklist.

## 6.5 CREATE method for writing a strong make.com scenario design brief

Use **CREATE** so your instructions are complete: **Context**, **Role**, **Expectation**, **Audience**, **Task**, **Examples**.

| Letter | Meaning | What you write |
|--------|---------|----------------|
| **C** | Context | Background, constraints, tools/files in play, and why this matters now |
| **R** | Role | Who the AI (or you) should act as |
| **E** | Expectation | Quality bar, length, tone, and what "good" looks like |
| **A** | Audience | Who will read or use the output |
| **T** | Task | The exact job to complete |
| **E** | Examples | 1-2 samples, anti-examples, or "match this style" references |

**Copy-paste CREATE template for make.com scenario design:**

> **Context:** Manual process today is [describe]. Apps involved: [list]. Pain: [time / errors / delays].  
> **Role:** You are designing the automation blueprint (I will build modules in make.com).  
> **Expectation:** Keep business rules unchanged. Include filters, field mapping notes, error path, and a test plan. Prefer simple over clever.  
> **Audience:** [ops owner / developer who will build it].  
> **Task:** Specify Trigger → Filters → Actions → Error path → Logging fields.  
> **Examples:** Good step label: "Filter: email valid AND consent = yes." Bad: "Handle leads somehow."

**Worked CREATE example:**

> **Context:** Landing-form leads sit until Monday. Need Sheet + Notion + Slack + welcome email same night.  
> **Role:** Automation designer for a coaching business.  
> **Expectation:** Block invalid email / no consent. On error, email ops. Log timestamp + lead id. Go live only after 3 successful tests.  
> **Audience:** Sales + ops who will maintain the scenario.  
> **Task:** Ordered scenario design for form → Sheet → Notion → Slack → welcome email.  
> **Examples:** Module names like "1. Watch form", "2. Filter consent", "3. Upsert Sheet row". Avoid unnamed generic modules.

**Weak vs CREATE:**

- Weak: "Automate our leads."  
- CREATE: CREATE brief with apps, filters, ordered actions, error path, and naming examples  

**Extra tips for this tool:**

- Draw the flow on paper before clicking modules.  
- Test edge cases (blank phone, duplicate email).  
- Name every module for future debugging.

## 6.6 Benefits

- Removes repetitive copy-paste  
- Faster lead response  
- Fewer data-entry errors  
- Clear process visibility via logs  
- Capacity scales without hiring for glue work first  
- Fewer dropped handoffs between tools  

## 6.7 Media

**Videos:**

- [Make.com Automation Tutorial for Beginners (Kevin Stratvert)](https://www.youtube.com/watch?v=JSA2oezQWOU)  
- [Make.com Tutorial for Beginners 2026](https://www.youtube.com/watch?v=d0vHcgTVOc4)

Practice idea: rebuild one tiny scenario (form → Sheet → email), then expand.

---

# 7. Midjourney

**Official site:** [https://www.midjourney.com](https://www.midjourney.com)

*(Access may be via web app and/or Discord depending on current product flow.)*

![Visual creativity and digital art direction](images/topics/midjourney.jpg)

## 7.1 Reading material (step by step)

**Step 1: What Midjourney is**  
Midjourney is an AI image generation tool. You describe a visual; it creates images for concept art, moodboards, ads, thumbnails, packaging atmosphere, storyboards, and early creative exploration.

**Step 2: Prompt anatomy**  

- Subject  
- Setting  
- Style  
- Lighting  
- Camera / framing  
- Constraints  
- Parameters (aspect ratio and current flags)  

**Step 3: Iteration is the real skill**  
First images are sketches. Pros vary one variable at a time and tighten language until the image matches the brief.

**Step 4: Brand consistency**  
Keep an internal visual language note: color mood, lens style, do/don't list, winning prompts. Store it in Notion next to brand guidelines.

**Step 5: Rights and responsibility**  
Check current terms for commercial use. Avoid generating private people without rights. Disclose AI imagery when required.

**Step 6: Pipeline fit**  
Midjourney creates visuals → you pick winners → export → place in Canva/Gamma/Figma/Notion/CMS. Rarely the system of record.

**Step 7: Text in images**  
Add accurate logos and readable headlines in a design tool after generation.

**Step 8: Brief before prompt**  
Write audience, emotion, use case, and aspect ratio before typing the prompt. Prompting without a brief wastes credits and time.

**Step 9: Aspect ratio by destination**  
YouTube 16:9, stories 9:16, feed posts often 1:1 or 4:5. Wrong ratio means painful cropping later.

**Step 10: Art direction checklist**  
Before finalizing: subject clarity, brand color fit, unwanted artifacts, text issues, crop safety for UI overlays.

## 7.2 How to use Midjourney (5-6 steps)

1. Create/access Midjourney (web or Discord as offered).  
2. Start with a plain-language prompt for scene and mood.  
3. Generate options.  
4. Select closest image and create variations.  
5. Upscale/export at needed size.  
6. Bring into design tool; add real brand text/logo.

## 7.3 How to use Midjourney efficiently (5-6 steps)

1. **Write the brief before the prompt.**  
2. **Lock aspect ratio to destination.**  
3. **Keep a swipe file of winning prompts.**  
4. **Change one variable per iteration.**  
5. **Add negative constraints** when needed.  
6. **Human art-direct the final 10%.**

### Extra efficiency habits

- Save rejected prompts too (know what not to repeat).  
- Separate "exploration" sessions from "final asset" sessions.  
- Always keep source prompt text with the final file name.

## 7.4 Real-world example

**Scenario:** D2C brand needs 6 mood images for a summer collection landing page before budgeting a full shoot.

**Implementation:**

1. Mood brief: warm coastal morning, linen textures, hopeful, no faces.  
2. Run 4 prompt families.  
3. Shortlist 8 → final 6.  
4. Light retouch + brand color grade.  
5. Publish on web; reuse in Gamma retailer pitch.

**Result:** Visual exploration in one afternoon.

## 7.5 STAR method for writing a strong Midjourney prompt / brief

Use **STAR** so your instructions are complete: **Situation**, **Task**, **Action**, **Result**.

| Letter | Meaning | What you write |
|--------|---------|----------------|
| **S** | Situation | Context, audience, constraints, and why this matters now |
| **T** | Task | The exact job the tool must do |
| **A** | Action | Role, steps, tone, rules, and process |
| **R** | Result | Format, length, and definition of done |

**Copy-paste STAR template for Midjourney:**

> **Situation:** Asset needed for [channel]. Audience emotion: [feeling]. Brand constraints: [colors/do-nots].  
> **Task:** Generate images of [subject] for [use case].  
> **Action:** Style [photo/illustration]. Lighting [type]. Framing [wide/close]. Aspect ratio [AR]. Avoid [text/watermarks/faces/etc]. Iterate by changing one variable.  
> **Result:** [N] shortlisted images ready for design polish and brand overlay.

**Worked STAR example:**

> **Situation:** Summer landing page hero + supporting images. Hopeful coastal mood. No faces.  
> **Task:** 6 mood images with linen textures and morning light.  
> **Action:** Photoreal style, soft morning light, 16:9 for hero candidates, no text/watermarks. Vary composition only after lighting is locked.  
> **Result:** 6 finals + prompt text saved for each file.

**Weak vs STAR:**

- Weak: "Make a summer brand image."
- STAR: STAR brief with channel, emotion, constraints, aspect ratio, and avoid-list

**Extra tips for this tool:**

- Brief first, prompt second.  
- One variable per iteration.  
- Final text/logo always added outside Midjourney.
## 7.6 Benefits

- Rapid visual exploration before expensive production  
- Stronger creative direction conversations  
- More creative tests at low cost  
- Consistent moodboarding across marketing and product  
- Faster stakeholder alignment  

## 7.7 Media

**Videos:**

- [The ULTIMATE Beginners Guide to Midjourney in 2025](https://www.youtube.com/watch?v=vUj4VNXXC1c)  
- [How To Use Midjourney | Beginners Guide](https://www.youtube.com/watch?v=J3DWZ60ShzM)

---

# 8. NotebookLM

**Official site:** [https://notebooklm.google](https://notebooklm.google)

![Research, books, and source-grounded learning](images/topics/notebooklm.jpg)

## 8.1 Reading material (step by step)

**Step 1: What NotebookLM is**  
NotebookLM is Google's AI research notebook. Unlike a general chatbot, it works from **sources you upload** and can cite those sources.

**Step 2: Why that matters**  
When truth lives in your documents, a grounded notebook reduces random invention. Ideal for exam prep, competitor research, policy Q&A, and briefing packs.

**Step 3: Core pieces**  

- **Notebook**: topic container  
- **Sources**: raw materials  
- **Chat**: grounded questions  
- **Studio outputs**: study guides, briefing docs, FAQs, mind maps, audio overviews  

**Step 4: Source quality rule**  
Bad sources → bad answers. Prefer primary documents. Remove outdated PDFs when strategy changes.

**Step 5: One notebook, one mission**  
"Q3 Pricing Research" beats "Misc". Mixed worlds force the model to guess context.

**Step 6: Output to other tools**  
Excellent for synthesis. Final delivery often moves to Docs, Gamma, Notion, or Slides.

**Step 7: Citations are not decoration**  
Click through before putting claims in front of a client or teacher.

**Step 8: Source set design**  
Start with 5-15 high-signal sources. Too many weak blogs dilute quality. Label sources clearly.

**Step 9: Question strategy**  
Ask comparison, conflict, and unknown questions:

- What do all sources agree on?  
- Where do they conflict?  
- What is still unknown?  

**Step 10: Audio and study outputs**  
Audio overviews help commute review. Study guides and FAQs help onboarding and exam prep. Still verify critical claims.

## 8.2 How to use NotebookLM (5-6 steps)

1. Open [notebooklm.google](https://notebooklm.google) and sign in.  
2. Create a notebook named by project.  
3. Add sources.  
4. Ask focused grounded questions.  
5. Generate briefing/FAQ/mind map/audio as needed.  
6. Save notes and share if allowed.

## 8.3 How to use NotebookLM efficiently (5-6 steps)

1. **Start with 5-15 high-signal sources.**  
2. **Ask for citations** and open them.  
3. **Use conversion prompts** (executive brief, study guide).  
4. **Generate Audio Overview** for dense material.  
5. **Export structure to Gamma** for slides.  
6. **Maintain source hygiene.**

### Extra efficiency habits

- Keep a "source index" note listing why each file was included.  
- Separate "raw collection" notebooks from "decision" notebooks.  
- Re-run key questions after adding new sources.

## 8.4 Real-world example

**Scenario:** Product manager briefs leadership using 3 competitor whitepapers + 2 interview notes.

**Implementation:**

1. Notebook: "Competitor Deep Dive: June".  
2. Upload 5 sources only.  
3. Ask agreement / conflict / unknown questions.  
4. Generate briefing doc + FAQ.  
5. Paste outline into Gamma for 10 slides.  
6. Share notebook with design lead.

**Result:** Evidence-based meeting with much less prep time.

**Student variant:** class PDFs → quiz + Audio Overview for revision.

## 8.5 CREATE method for writing a strong NotebookLM prompt / brief

Use **CREATE** so your instructions are complete: **Context**, **Role**, **Expectation**, **Audience**, **Task**, **Examples**.

| Letter | Meaning | What you write |
|--------|---------|----------------|
| **C** | Context | Background, constraints, tools/files in play, and why this matters now |
| **R** | Role | Who the AI (or you) should act as |
| **E** | Expectation | Quality bar, length, tone, and what "good" looks like |
| **A** | Audience | Who will read or use the output |
| **T** | Task | The exact job to complete |
| **E** | Examples | 1-2 samples, anti-examples, or "match this style" references |

**Copy-paste CREATE template for NotebookLM:**

> **Context:** Notebook "[name]" contains sources about [topic]. Decision needed: [what]. Sources only: [list or count].  
> **Role:** Act as [research analyst / study coach].  
> **Expectation:** Answer only from uploaded sources. Cite claims. Separate agreement / conflict / unknown. Do not invent outside facts.  
> **Audience:** [leadership / students / teammates].  
> **Task:** Produce [briefing / FAQ / study guide / slide outline].  
> **Examples:** Citation style: "According to Source 2 (p.4)…". Avoid unsupported claims presented as facts.

**Worked CREATE example:**

> **Context:** Notebook "Competitor Deep Dive: June" with five uploaded sources. Leadership briefing tomorrow.  
> **Role:** Product research analyst.  
> **Expectation:** Cite sources. List agreements, conflicts, and unknowns. No external invention.  
> **Audience:** Leadership team.  
> **Task:** 1-page executive brief + FAQ + Gamma slide outline.  
> **Examples:** Conflict line: "Source 1 says X; Source 4 says Y — unresolved." Avoid: "Experts generally agree…" with no citation.

**Weak vs CREATE:**

- Weak: "Tell me about these competitors."  
- CREATE: CREATE brief with notebook mission, citation rule, audience, and sample conflict phrasing  

**Extra tips for this tool:**

- Narrow source sets beat giant mixed notebooks.  
- Always click citations for high-stakes claims.  
- Convert outputs into Docs/Gamma for delivery.

## 8.6 Benefits

- Research grounded in your materials  
- Faster synthesis across many documents  
- Better onboarding packs and study aids  
- Stronger presentation inputs  
- Lower risk of invented statistics (still verify)  
- Shareable research context for teammates  

## 8.7 Media

**Videos and resources:**

- [How to Use Google NotebookLM (Full Tutorial)](https://www.youtube.com/watch?v=uSVBfyHBiDU)  
- [NotebookLM demo (Google Cloud)](https://www.youtube.com/watch?v=6dHmu1GALmA)  
- [NotebookLM 2.0 tutorial](https://www.youtube.com/watch?v=raTGrL2MGxg)  
- Google tips: [How to get started with NotebookLM](https://blog.google/innovation-and-ai/products/notebooklm-beginner-tips/)

---

# 9. Notion

**Official site:** [https://www.notion.so](https://www.notion.so)

![Personal and team workspace organization](images/topics/notion.jpg)

## 9.1 Reading material (step by step)

**Step 1: What Notion is**  
Notion is an all-in-one workspace for docs, wikis, tasks, and databases. Notion AI (plan-dependent) helps summarize, draft, and operate where work already lives.

**Step 2: Building blocks**  

- Pages  
- Blocks  
- Databases  
- Templates  
- AI / Agents (plan-dependent)  

**Step 3: Real power**  
Databases + templates encode process: content calendar, light CRM, hiring pipeline, course tracker, bug triage. Empty pretty pages are decoration, not a system.

**Step 4: AI inside vs external AI**  
External AI is great for deep drafting. Notion AI is great when the answer should land directly in the page/database you already use.

**Step 5: Team OS principle**  
One shared source of truth beats five scattered Doc links. Naming and permissions matter more than fancy dashboards.

**Step 6: Avoid overbuilding**  
Start with one database and two views. Complexity is earned by weekly use.

**Step 7: Properties that matter**  
Status, Owner, Due date, Tags/type, Priority, Link to asset/brief. Delete unused properties.

**Step 8: Views for jobs**  
Create views people actually open: My tasks this week, Blocked, By owner, Due soon. Vanity dashboards get abandoned.

**Step 9: Templates for rituals**  
Meeting notes, client kickoff, bug report, weekly review: template once, reuse forever.

**Step 10: Notion debt**  
Archive stale pages weekly. Unowned databases rot. Assign an owner for every critical database.

## 9.2 How to use Notion (5-6 steps)

1. Sign up at [notion.so](https://www.notion.so).  
2. Create a homepage for your workstream.  
3. Add a database (Tasks/Content/Leads/Readings).  
4. Add properties that matter.  
5. Create templates for recurring pages.  
6. Use Notion AI to summarize or draft in place.

## 9.3 How to use Notion efficiently (5-6 steps)

1. **Define statuses that match reality.**  
2. **Create views for jobs.**  
3. **Template every repeating ritual.**  
4. **Keep AI prompts next to the work.**  
5. **Link databases instead of duplicating.**  
6. **Review weekly and archive.**

### Extra efficiency habits

- One homepage per team with links to only active systems.  
- Use relations/rollups carefully; start simple.  
- Pair with make.com only after the Notion process is stable.

## 9.4 Real-world example

**Scenario:** Content team publishes 8 LinkedIn posts/month and loses draft versions.

**Implementation:**

1. Content Calendar database: Hook, Status, Publish date, Asset link, Owner.  
2. Post Brief template.  
3. Writer uses Notion AI for first draft in-page.  
4. Editor comments; status Review → Approved.  
5. Designer drops asset link into the same row.  
6. Optional: make.com Slack notify when Ready to publish.

**Result:** One pipeline. Fewer "where is the latest draft?" messages.

**Student variant:** Reading list database with status + notes template + weekly review view.

## 9.5 STAR method for writing a strong Notion AI / workspace setup prompt / brief

Use **STAR** so your instructions are complete: **Situation**, **Task**, **Action**, **Result**.

| Letter | Meaning | What you write |
|--------|---------|----------------|
| **S** | Situation | Context, audience, constraints, and why this matters now |
| **T** | Task | The exact job the tool must do |
| **A** | Action | Role, steps, tone, rules, and process |
| **R** | Result | Format, length, and definition of done |

**Copy-paste STAR template for Notion AI / workspace setup:**

> **Situation:** Team/process is [describe]. Current pain: [lost drafts/no owners/unclear status].  
> **Task:** Build or update a Notion system for [workflow].  
> **Action:** Database properties: [list]. Statuses: [list]. Views: [list]. Template fields: [list]. AI should [draft/summarize] inside the page using this brief.  
> **Result:** Working database + template + views that the team can run this week.

**Worked STAR example:**

> **Situation:** Content team loses LinkedIn draft versions across chats and Docs.  
> **Task:** Create a Content Calendar system for 8 posts/month.  
> **Action:** Properties: Hook, Status, Publish date, Asset link, Owner. Statuses: Idea→Draft→Review→Approved→Published. Views: This month, My drafts, Needs design. Template: audience, angle, CTA, sources. AI drafts inside the brief page.  
> **Result:** Live calendar with one sample post moved through all statuses.

**Weak vs STAR:**

- Weak: "Make a Notion workspace for content."
- STAR: STAR brief with properties, statuses, views, template fields, and definition of done

**Extra tips for this tool:**

- Design statuses around real handoffs.  
- Keep AI prompts on a linked Prompt Library page.  
- Archive ruthlessly to prevent Notion debt.
## 9.6 Benefits

- Single home for docs, tasks, and knowledge  
- Less context loss between tools  
- Templates create consistency across people  
- AI drafts land where work is tracked  
- Clearer operations as a team grows  
- Easier handoffs when someone is on leave  

## 9.7 Media

**Videos and resources:**

- [How to Use Notion AI to Get More Done](https://www.youtube.com/watch?v=VNeiHq4aLeU)  
- [Notion beginners tutorial (2026)](https://www.youtube.com/watch?v=2BVX__JBDo0)  
- Notion help: [Custom Agents](https://www.notion.com/help/custom-agents)  
- Guide: [Build your first Custom Agent](https://www.notion.com/help/guides/build-your-first-custom-agent)

---

# Bonus: A simple multi-tool workflow

When these tools work together, a high-leverage loop looks like this:

1. **NotebookLM**: digest source material and extract a brief  
2. **Claude or ChatGPT**: turn the brief into narrative, scripts, or emails (CREATE for Claude; STAR for ChatGPT)  
3. **Notion**: store briefs, tasks, and approvals (STAR)  
4. **Gamma**: convert approved narrative into slides (STAR)  
5. **Midjourney**: create custom visuals for key slides or ads (STAR)  
6. **Google Workspace + Gemini**: collaborate on the final Doc or Sheet of record (CREATE)  
7. **E-mail**: send the update, ask, or proposal (STAR)  
8. **make.com**: automate repetitive handoffs (form → CRM → Slack → Notion) (CREATE)

You do not need all nine on day one. Pick the 2-3 that remove your biggest weekly pain, master that chapter's prompt method (STAR or CREATE), then add the next tool.

---

# Quick comparison: when to pick what

| Need | Start with |
|------|------------|
| Fast general drafting and ideation | ChatGPT |
| Careful writing, long docs, Projects | Claude |
| Clear client or stakeholder messages | E-mail (+ AI draft) |
| Beautiful slides fast | Gamma |
| Work inside Docs, Sheets, Gmail | Google Workspace + Gemini |
| Automate app-to-app busywork | make.com |
| Custom images and moodboards | Midjourney |
| Research grounded in your files | NotebookLM |
| Team wiki, databases, and process | Notion |

---

# Final practice checklist

- [ ] Skim each tool's **efficient use** section and mark 1 habit to adopt this week  
- [ ] Try one **real-world example** end to end (not all nine)  
- [ ] Write one **STAR** or **CREATE** prompt (matching the tool you chose) and save it in Notion  
- [ ] Keep topic images and video practice linked from your own notes  
