# AI Tools Playbook

A practical, in-depth guide to **9 modern tools**: what each one is, how to use it, how to use it efficiently, real examples, benefits, and curated media.

**Tools covered:** ChatGPT · Claude · E-mail · Gamma · Google Workspace with Gemini · make.com · Midjourney · NotebookLM · Notion

---

## How to read this playbook

For every tool you will find the same structure:

1. **Reading material**: core ideas, explained step by step  
2. **How to use**: get productive in 5-6 steps  
3. **How to use efficiently**: the habits that save hours  
4. **Real-world example**: a concrete implementation you can copy  
5. **Benefits**: what you gain when you work this way  
6. **Media**: topic images and YouTube videos  

---

# 1. ChatGPT

**Official site:** [https://chatgpt.com](https://chatgpt.com)

![AI assistant at work: modern computing and generative tools](images/topics/chatgpt.jpg)

## 1.1 Reading material (step by step)

**Step 1: What it is**  
ChatGPT is an AI assistant from OpenAI. You type or speak a request in natural language; it replies with text, plans, code, summaries, tables, or structured drafts. The useful mental model is: a fast junior teammate who can draft almost anything, available 24/7, but who still needs your judgment, taste, and fact-checking.

ChatGPT is not magic and it is not a search engine with perfect memory of the world. It predicts helpful next text based on patterns in training and (when enabled) tools like browsing or file analysis. That is why it can feel brilliant on structure and wording, and still invent a confident-sounding wrong detail.

**Step 2: What it is good at**  
It shines when the task is language-heavy or structure-heavy:

- Brainstorming options and angles  
- Rewriting for tone, length, or audience  
- Outlining reports, lessons, proposals, and SOPs  
- Explaining difficult topics in simpler language  
- Drafting emails, LinkedIn posts, scripts, and FAQs  
- Turning messy notes into clean sections  
- Walking through problems step by step  
- Generating checklists, rubrics, and interview questions  
- Helping you think by asking clarifying questions back  

**Step 3: What it is not**  
It is not a guaranteed source of truth. It can invent details (often called hallucination). It does not automatically know your private company data unless you paste that data or connect an allowed tool. It should not be trusted alone for legal, medical, financial, or compliance decisions. Always verify facts, numbers, citations, names, and dates before you send work to a client or manager.

**Step 4: How a good prompt works**  
Weak prompt: "Write a proposal."  
Strong prompts usually include five ingredients:

1. **Role**: who it should act as  
2. **Goal**: what finished output you need  
3. **Context**: audience, industry, constraints, location  
4. **Format**: email, table, bullets, 1-page brief, JSON, etc.  
5. **Examples**: a sample of the tone or a past piece you liked  

Example skeleton you can reuse:

> Act as a [role]. Goal: [deliverable]. Audience: [who]. Constraints: [length, tone, must include / must avoid]. Format: [structure]. Here is context: [paste]. First ask me up to 5 clarifying questions if anything critical is missing; otherwise produce draft v1.

**Step 5: Conversation as iteration**  
The first reply is a draft, not the final product. Professionals get leverage from follow-ups:

- "Make it shorter by 30%."  
- "Add one India-specific example."  
- "Rewrite for a skeptical CFO."  
- "Give me 3 options; I will pick one."  
- "List assumptions you made."  
- "What should I verify before sending?"  

The power is in the loop: draft, critique, refine, ship.

**Step 6: Safety and privacy basics**  
Do not paste passwords, API keys, client secrets, salary data, health data, or confidential contracts into a public chat unless your organization has approved that workflow. Prefer anonymized examples ("Client A in retail"). Treat every output as a draft until a human reviews it. If your company has an enterprise ChatGPT plan with admin controls, follow those rules.

**Step 7: When to open a new chat**  
Open a new chat when the topic changes. Mixing "debug Python", "plan a wedding", and "rewrite a sales deck" in one thread pollutes context and lowers quality. One job per chat keeps answers sharper.

## 1.2 How to use ChatGPT (5-6 steps)

1. Go to [chatgpt.com](https://chatgpt.com) and sign in with your account.  
2. Click **New chat** so you start with a clean context for this task.  
3. Write a clear prompt using role + goal + audience + format + constraints.  
4. Read the full answer once without editing. Mark what is useful and what is wrong.  
5. Ask for one improvement at a time (length, tone, structure, examples, missing section).  
6. Copy the final result into your real tool (Docs, email, Notion, slides) and do a human fact-check before sending.

## 1.3 How to use ChatGPT efficiently (5-6 steps)

1. **One chat = one job.** Keep "Client proposal", "Python bug", and "Weekend trip" separate so context stays sharp.  
2. **Give a template once.** Paste your preferred email or report skeleton and say: "Always use this structure unless I say otherwise."  
3. **Ask for options, then pick.** "Give me 3 subject lines. I will choose one; then expand it into a full email." This beats accepting the first generic line.  
4. **Use it as an editor, not only a writer.** Paste your draft: "Cut 30%, keep my voice, fix weak transitions, do not invent metrics."  
5. **Force quality checks.** End important prompts with: "List assumptions" and "What should I verify?"  
6. **Build a personal prompt library** of 8-12 prompts for work you repeat weekly (status update, meeting summary, proposal outline, FAQ rewrite). Reuse beats reinventing.

## 1.4 Real-world example

**Scenario:** A freelance performance marketer must send a weekly report to a client every Friday by 11:00 AM.

**Before ChatGPT:** They spent 60-90 minutes formatting screenshots, rewriting the same story, and stressing about tone.

**Efficient implementation:**

1. Export last week's metrics into a simple table (anonymize client-sensitive notes if needed).  
2. Prompt ChatGPT: "Act as a performance marketer. Turn these numbers into a 1-page client update with sections: Executive summary (3 bullets), Wins, Risks, Next actions (owner + date). Tone: clear, confident, no jargon. Do not invent numbers."  
3. Follow-up: "Tighten the risks section so it sounds honest but calm."  
4. Follow-up: "Add a subject line and a 2-sentence email body that links to the report."  
5. Paste into Google Docs or email, verify every number against the source sheet, send.

**Result:** Report time drops to about 15-25 minutes. Quality becomes more consistent week to week because the structure never collapses.

**Variant for students:** Paste lecture notes and ask for a study guide with key terms, 10 practice questions, and a 1-page cheat sheet. Still verify against the original notes.

## 1.5 Benefits (when used efficiently)

- Faster first drafts for writing-heavy work  
- Clearer thinking through outlines and option comparison  
- Less blank-page anxiety at the start of a task  
- More consistent quality across weekly deliverables  
- More time left for judgment, relationships, and creative decisions  
- Better learning loops: you can ask "explain like I am new" then "quiz me"

## 1.6 Media

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

**Step 2: Core ideas to understand**  

- **Chat**: normal Q&A, drafting, analysis  
- **Projects**: a workspace that remembers your files and custom instructions across chats  
- **Artifacts**: a side panel for documents, code, or small interactive outputs you can iterate on  
- **Connectors / skills** (where available on your plan): reusable workflows and links to other tools  

Understanding Projects is the difference between "Claude is nice" and "Claude is part of my operating system."

**Step 3: Why Projects matter**  
Without Projects, every new chat starts from zero. You re-explain brand voice, audience, product facts, and constraints again and again. With a Project, Claude already knows those things, so every answer starts closer to ready-to-use. Setup time is an investment that pays back every session.

**Step 4: Good use cases**  

- Turning long PDFs into FAQs, briefs, and onboarding guides  
- Proposal writing with a fixed house style  
- Tone rewrites (formal, warm, direct, simple English)  
- Analyzing CSVs or pasted tables for patterns (still verify)  
- Meeting notes to action plans  
- SOP and checklist creation  
- Careful code explanation and review  

**Step 5: Limits to remember**  
Claude is still not infallible. Too many low-quality files in a Project can confuse results. Conflicting source docs (old pricing + new pricing) create mixed answers. Keep Project files curated: quality over quantity. For live web facts, verify outside the chat.

**Step 6: Working style that wins**  
Treat Claude like a senior editor:

1. Give sources  
2. Give rules  
3. Ask for draft v1  
4. Critique with specifics ("cut section 3", "too salesy in paragraph 2")  
5. Lock the final version yourself  

Vague feedback ("make it better") wastes the model. Specific feedback compounds quality.

**Step 7: Instructions that work in Projects**  
Write instructions as behavior rules, not essays:

- Prefer short paragraphs.  
- Never invent metrics.  
- Ask if a required fact is missing.  
- Use Indian English spelling if that is your house style.  
- End drafts with Assumptions and Open questions.

## 2.2 How to use Claude (5-6 steps)

1. Open [claude.ai](https://claude.ai) and sign in.  
2. Start with a concrete ask: email, outline, summary, comparison, or rewrite.  
3. Upload a file when the task depends on real content (PDF, notes, spreadsheet export).  
4. For recurring work, create a **Project** and name it by job ("Client Proposals", not "Stuff").  
5. Add short custom instructions: voice, do/don't rules, audience, forbidden inventions.  
6. Iterate in Artifacts when you want an editable document you can refine visually.

## 2.3 How to use Claude efficiently (5-6 steps)

1. **One Project per jobstream**, not one mega Project for your whole life.  
2. **Upload only the 5-8 files that matter** (brand guide, offer sheet, winning past proposal, objection handling notes).  
3. **Write instructions as rules**, not a memoir.  
4. **Start chats with a job ticket:** Goal / Audience / Deadline / Format / Constraints / Source of truth.  
5. **Use Claude for synthesis and polish; you do final fact-check.**  
6. **Save reusable prompts** for weekly tasks (weekly update, FAQ rewrite, SOP draft, lesson plan).

## 2.4 Real-world example

**Scenario:** An HR lead must turn a 40-page policy PDF into something new hires will actually read.

**Implementation:**

1. Create Project: "HR Onboarding".  
2. Upload: policy PDF + current welcome email + 5 common new-hire questions from managers.  
3. Prompt: "Extract only rules a new hire must know in week 1. Output an FAQ with 12 questions. Use plain language. Flag anything unclear or conflicting. Do not invent policy."  
4. Follow-up: "Rewrite answers at roughly Grade-8 reading level. Keep legal meaning intact."  
5. Follow-up: "Create a 1-page Day-1 checklist managers can print."  
6. Copy into Notion or Google Docs, have Legal/HR review once, then publish internally.

**Result:** Policy becomes usable. New hires ask fewer repeated questions. Managers stop rewriting the same explanations in chat.

## 2.5 Benefits

- Higher-quality long-form writing with less rewriting  
- Persistent context via Projects (large cumulative time saver)  
- Better digestion of long documents for research and ops  
- Clearer SOPs and internal knowledge  
- Fewer "start from scratch" sessions  
- Stronger consistency of voice across a team if everyone uses the same Project rules

## 2.6 Media

**Videos:**

- [Beginner's Guide to Master Claude](https://www.youtube.com/watch?v=BGuv4pjOTOI)  
- [Claude AI Tutorial for Beginners (Step-by-Step)](https://www.youtube.com/watch?v=r2vYObllqJU)  
- [Claude AI 101: Complete Beginner's Guide](https://www.youtube.com/watch?v=H6LchswC74Y)

---

# 3. E-mail (AI-assisted professional email)

**Tools in this chapter:** Gmail or Outlook, plus AI drafting (Gemini Help me write in Gmail, Microsoft Copilot, or ChatGPT/Claude as a writing partner)

![Inbox and professional communication](images/topics/email.jpg)

## 3.1 Reading material (step by step)

**Step 1: What "good email" means today**  
Email is still the default channel for clients, vendors, colleges, and many internal approvals. Good email is short, scannable, and action-clear. AI should help you draft faster. It should not make emails longer, vaguer, or fake-polite.

A useful test: if the reader only reads the subject line and the first two sentences, can they still understand what you need?

**Step 2: The anatomy of an efficient email**  

1. **Subject line**: topic + action or status when needed  
2. **First line**: purpose in plain language  
3. **Body**: short paragraphs or 3-5 bullets  
4. **One primary ask**: what you want the person to do  
5. **Deadline** if there is one  
6. **Soft close + signature**  

Example subject patterns:

- `Action needed: Q2 invoice by Fri 5pm`  
- `Update: Project Atlas is green (1 risk)`  
- `Intro: [Name] <> [Name] for [reason]`  

**Step 3: Where AI helps most**  

- Subject line options  
- Tone shifts (formal, warm, firm, apologetic)  
- Shortening a rambling draft  
- Translating rough bullets into a polished message  
- Summarizing a long thread before you reply  
- Drafting FAQ-style replies you send often  

**Step 4: Where AI can hurt**  

- Corporate fluff that sounds like nobody wrote it  
- Wrong facts, wrong dates, wrong promises  
- Wrong tone for the relationship (too casual with a client, too stiff with a teammate)  
- Sending without reading  

Always review names, amounts, dates, attachments, and commitments.

**Step 5: Inbox as a system**  
Writing faster is only half of email efficiency. The other half is triage:

- **Respond** now  
- **Defer** with a date  
- **Delegate**  
- **Archive/delete**  

AI summaries help you understand a thread. Your rules decide priority. Batching email 2 times a day usually beats living inside the inbox.

**Step 6: Privacy and policy**  
Be careful pasting confidential threads into external AI tools. If your organization provides Gemini in Gmail or Copilot in Outlook, prefer those for company mail when policy requires it.

**Step 7: Templates beat one-off genius**  
If you send the same kinds of email weekly (follow-up, delay notice, meeting recap, payment reminder), create templates. AI should fill variables, not invent a brand-new structure every time.

## 3.2 How to use AI for email (5-6 steps)

1. Capture your intent in rough bullets: who, why, ask, deadline, tone.  
2. Paste into Gemini / ChatGPT / Claude: "Turn into a concise professional email under 120 words."  
3. Ask for 2 tone variants (direct vs warm).  
4. Choose one; ask AI to cut another 15-20% without losing the ask.  
5. Paste into Gmail or Outlook; personalize the first line with one human detail.  
6. Send only after checking names, facts, links, and attachments.

## 3.3 How to use email efficiently (5-6 steps)

1. **Write the ask first.** If you cannot state the ask in one sentence, the email is not ready.  
2. **Use subject formulas** so people can prioritize without opening everything.  
3. **One email = one purpose** when possible. Split status + new proposal + personal note if they compete.  
4. **Template your top 10 replies** and let AI only fill the blanks.  
5. **Batch email** (for example 11:00 and 16:30) instead of reacting all day.  
6. **Summarize long threads before replying:** "What was decided? What is open? What is my action?"

## 3.4 Real-world example

**Scenario:** A founder must follow up with 8 investors after demo day while details are still fresh.

**Implementation:**

1. During or right after each conversation, capture 4 fields in a sheet: name, interest level, objection, next step.  
2. Prompt AI with a skeleton: "Draft a short personalized follow-up under 120 words. Mention one specific detail from notes. Soft CTA: 15-minute call next week. No hype language."  
3. Generate 8 variants from the same skeleton + each row of notes.  
4. Founder edits 1-2 lines in each for authenticity (this step matters).  
5. Send via Gmail with reminders for non-responders in 4 business days.

**Result:** Personal follow-ups leave the same day instead of three days later, while still sounding human.

**Second example (support):** A course support inbox uses AI to draft replies from a FAQ page, then a human sends. Response time falls; tone stays consistent.

## 3.5 Benefits

- Faster replies without sounding rushed  
- Cleaner asks, which usually improves response rates  
- Less emotional overthinking on difficult emails  
- Better comprehension of long threads under load  
- Consistent professional tone across a team  
- More calendar time protected from inbox thrash

## 3.6 Media

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
Gamma is an AI-native tool for presentations, documents, and simple web-style pages. You provide a prompt or pasted content; Gamma generates designed cards (slides) that you can edit, theme, present, and share.

**Step 2: Why people use it**  
Traditional slide tools often force you to fight layout: fonts, alignment, margins, image boxes. Gamma flips the workflow toward content-first. Design becomes mostly automatic. That is ideal when speed and clean visuals matter more than pixel-perfect corporate template compliance.

**Step 3: Best inputs win**  
A sharp outline beats a vague prompt every time. Before you click generate, decide:

- Who is the audience?  
- What decision or feeling should they leave with?  
- What are the 6-12 section titles?  
- What proof points are non-negotiable?  

Garbage outline in, pretty garbage out.

**Step 4: Editing mindset**  
Never accept the first AI deck as final. The professional loop is:

1. Generate  
2. Cut unnecessary cards  
3. Rewrite headlines into takeaways  
4. Reduce text density  
5. Replace weak stock/AI images where trust matters  
6. Rehearse out loud once  

**Step 5: Sharing options**  
You can present in the browser, share a review link, or export (PDF / PowerPoint depending on plan). Link sharing is excellent for async feedback the night before a meeting.

**Step 6: When not to use Gamma alone**  
For strict brand systems, animation-heavy keynotes, or legal disclosure-heavy decks, use Gamma as a draft engine and finalize in your brand tool if needed.

**Step 7: Headline craft**  
Topic labels are weak ("Financials"). Takeaway headlines are strong ("Gross margin improved 4 points"). If someone skims only headlines, they should still get the story.

## 4.2 How to use Gamma (5-6 steps)

1. Sign up at [gamma.app](https://gamma.app).  
2. Click **Create** and choose presentation (or paste existing content).  
3. Set audience, tone, and approximate card/slide count.  
4. Review and edit the outline before full generation when the product offers that step.  
5. Edit card by card: headlines, bullets, images, theme.  
6. Present from the browser or export/share the link for review.

## 4.3 How to use Gamma efficiently (5-6 steps)

1. **Write the narrative outside Gamma first** in Docs, Notion, or NotebookLM. Paste structured content.  
2. **One idea per card.** If a card has three ideas, split it.  
3. **Headline = takeaway**, not a category label.  
4. **Lock a theme early** so you do not restyle every card later.  
5. **Replace generic images** with 2-3 real product, classroom, or team photos when credibility matters.  
6. **Do a 60-second skim test:** read only headlines. Does the story still make sense?

## 4.4 Real-world example

**Scenario:** A training company needs a 12-slide pitch for a corporate L&D buyer by tomorrow morning.

**Implementation:**

1. Outline in Notion: problem, method, curriculum map, proof, pricing logic, next step.  
2. Paste the outline into Gamma and generate about 12 cards.  
3. Rewrite headlines into benefit language.  
4. Add one real case-study metric card (verified number only).  
5. Share the Gamma link with a colleague for comments overnight.  
6. Present next morning from the browser; export PDF as backup.

**Result:** A usable deck in under 2 hours instead of a full design day.

**Student variant:** Turn a chapter summary into a 8-card revision deck, then present to a study group.

## 4.5 Benefits

- Dramatically faster first decks  
- Cleaner default visual hierarchy  
- Easy async sharing for feedback  
- Less time fighting fonts and alignment  
- More energy left for story and delivery  
- Lower barrier for non-designers to communicate visually

## 4.6 Media

**Videos:**

- [Gamma.app Tutorial: AI presentations](https://www.youtube.com/watch?v=sDUjoih6JgA)  
- [How to Use Gamma AI (Full Tutorial)](https://www.youtube.com/watch?v=KcbXKUR7-a0)

---

# 5. Google Workspace with Gemini

**Includes:** Gmail, Docs, Sheets, Slides, Drive with Gemini AI assistance inside Google's work apps  
**Start:** [https://workspace.google.com](https://workspace.google.com)

![Team collaboration inside shared documents and meetings](images/topics/workspace.jpg)

## 5.1 Reading material (step by step)

**Step 1: What this combo is**  
Google Workspace is where many schools and companies already work: email, documents, spreadsheets, slides, and shared drives. Gemini adds AI inside those apps so you can draft, summarize, and analyze without constantly copy-pasting into a separate chatbot.

**Step 2: Mental model by app**  

- **Gmail**: compose, rewrite, summarize threads  
- **Docs**: outline, draft, rewrite selected sections  
- **Sheets**: explain formulas, clean columns, summarize tables  
- **Slides**: generate structure and first-pass content  
- **Drive**: keep the file of record where collaboration already happens  

**Step 3: Grounding advantage**  
Because Gemini can work with content already in your Doc, Sheet, or email, answers often stay closer to your material than a blank chat with no context. That does not remove the need to verify, but it reduces pointless re-pasting.

**Step 4: Collaboration still wins**  
AI drafts. Humans comment, assign owners, and decide. In Docs, Suggesting mode is useful so teammates can accept or reject AI-assisted text safely.

**Step 5: Governance**  
Follow your organization's AI policy. Features and data protections differ by Workspace edition and admin settings. If Gemini is not enabled, ask your admin or use an approved alternative.

**Step 6: Best practice principle**  
Use Gemini for acceleration inside the file of record, so version history, comments, and sharing permissions stay clean.

**Step 7: Prompting inside Workspace**  
Highlight the messy paragraph or table range first, then ask Gemini to fix only that selection. Narrow scope beats "rewrite the whole document" for control.

## 5.2 How to use Google Workspace + Gemini (5-6 steps)

1. Open the relevant app (Docs, Gmail, Sheets, or Slides).  
2. Open the Gemini / Help me write / Ask Gemini panel (label varies by app and edition).  
3. Select or point to the content Gemini should use.  
4. Ask for a specific output: summary, rewrite, formula explanation, outline, action list.  
5. Insert the suggestion, then edit in Suggesting or Editing mode.  
6. Share the file with clear reviewer roles and a due time.

## 5.3 How to use it efficiently (5-6 steps)

1. **Keep source truth in Drive**: one master Doc or Sheet per project.  
2. **Prompt with selection**: highlight the weak section, then ask for a local fix.  
3. **Standardize team prompts** ("Weekly update format", "Meeting notes to actions").  
4. **In Sheets, ask Gemini to explain before changing** so you understand the formula.  
5. **Use Docs for narrative, Gamma or Slides for design later.** Write first, decorate second.  
6. **Close the loop in comments:** "AI drafted this; please verify numbers in rows 12-20."

## 5.4 Real-world example

**Scenario:** An operations team runs a weekly KPI review every Monday.

**Implementation:**

1. Raw exports land in a Google Sheet each Friday evening.  
2. Gemini helps create a clean summary tab and flags odd spikes (human confirms).  
3. A Doc titled "Weekly Ops Brief" is drafted with wins, risks, and asks.  
4. Manager edits for 10 minutes and comments owners onto action lines.  
5. The Doc link is emailed via Gmail; actions are copied into a tracker.

**Result:** Same ritual, less formatting labor, faster decisions.

**Classroom variant:** Teachers draft a parent update in Docs with Gemini, then share via Classroom or email.

## 5.5 Benefits

- Less tool-switching for everyday work  
- Faster document cycles with shared ownership  
- Better spreadsheet literacy through formula explanations  
- Consistent team templates  
- AI help where the files already live  
- Cleaner audit trail than scattered chat copy-paste

## 5.6 Media

**Videos and resources:**

- [How to use "Help me Write" in Gmail (Google Workspace)](https://www.youtube.com/watch?v=PRkCkKhO-3k)  
- Workspace learning: [Use generative AI at work](https://support.google.com/a/users/answer/14628736)  
- Related Google AI research tool: [NotebookLM demo](https://www.youtube.com/watch?v=6dHmu1GALmA)  

---

# 6. make.com

**Official site:** [https://www.make.com](https://www.make.com)

*(Formerly Integromat: a visual automation platform)*

![Systems, data flow, and automation between apps](images/topics/make.jpg)

## 6.1 Reading material (step by step)

**Step 1: What make.com is**  
make.com connects apps so work moves automatically. When something happens in App A, make.com can run steps in Apps B, C, and D without you copy-pasting. It is visual: you build a flowchart of modules.

**Step 2: Core vocabulary**  

- **Scenario**: one automation flowchart  
- **Trigger**: the event that starts it (new form row, new email, schedule, webhook)  
- **Module**: one step (create Notion page, send Slack message, add Sheet row)  
- **Filter**: continue only if a condition is true  
- **Router**: split into multiple paths  
- **Operations**: the metered units of work on your plan  

**Step 3: What it is perfect for**  

- Lead form to CRM/Sheet + Slack alert + welcome email  
- Invoice PDF to Drive folder + finance notify  
- New course signup to onboarding checklist in Notion  
- Daily digest of new rows to email  
- Syncing selected Notion database items to Google Sheets  

**Step 4: What it is not**  
It is not a full custom software product builder. It is glue between existing SaaS tools. If your process is unclear, automation will only move confusion faster.

**Step 5: Design before you build**  
Write the flow on paper first:

Trigger -> data needed -> decisions -> actions -> failure path

Building blind creates fragile scenarios that break silently.

**Step 6: Reliability mindset**  
APIs change. Fields arrive empty. People submit junk. Add filters, error handlers, and a notify-me-on-failure path. Log important runs to a Sheet for audit.

**Step 7: Start tiny**  
Your first scenario should be boring and useful: form to Sheet. Once that is stable, add Slack. Then email. Complexity is earned.

## 6.2 How to use make.com (5-6 steps)

1. Create an account at [make.com](https://www.make.com).  
2. Create a new **Scenario**.  
3. Add a trigger module (Google Forms, Sheets, Gmail, Typeform, webhook, etc.).  
4. Add action modules (Notion, Slack, Gmail, Drive, HubSpot, etc.).  
5. Map fields carefully (email to email, name to name).  
6. Run once with test data, fix mapping issues, then turn the scenario on.

## 6.3 How to use make.com efficiently (5-6 steps)

1. **Automate only after the manual process is stable.** Do not automate chaos.  
2. **Start with one trigger and two actions.** Expand later.  
3. **Normalize data early** (trim spaces, standardize dates, lowercase emails).  
4. **Use filters** so junk records never enter your CRM.  
5. **Log important events to a Sheet** (timestamp, record id, status).  
6. **Name modules clearly** (`1. Trigger: New Typeform`, `2. Filter: paid plan only`). Future you will thank present you.

## 6.4 Real-world example

**Scenario:** A coaching business collects leads from a landing-page form day and night.

**Implementation:**

1. Trigger: new form submission.  
2. Filter: email looks valid and consent = yes.  
3. Action A: add or update a row in Google Sheet CRM.  
4. Action B: create a Notion Lead page with source tags.  
5. Action C: send Slack message to the sales channel.  
6. Action D: send a personalized welcome email.

**Result:** Night and weekend leads do not wait until Monday. Response time drops from hours to minutes.

**Ops variant:** When a Sheet status becomes "Won", make.com creates a kickoff folder in Drive and posts a checklist page in Notion.

## 6.5 Benefits

- Removes repetitive copy-paste work  
- Faster lead response  
- Fewer human data-entry errors  
- Clear process visibility via logs  
- Team capacity scales without hiring for glue work first  
- Fewer dropped handoffs between tools

## 6.6 Media

**Videos:**

- [Make.com Automation Tutorial for Beginners (Kevin Stratvert)](https://www.youtube.com/watch?v=JSA2oezQWOU)  
- [Make.com Tutorial for Beginners 2026](https://www.youtube.com/watch?v=d0vHcgTVOc4)  

Practice idea: rebuild one tiny scenario (form to Sheet to email), then expand.

---

# 7. Midjourney

**Official site:** [https://www.midjourney.com](https://www.midjourney.com)

*(Access may be via web app and/or Discord depending on current Midjourney product flow.)*

![Visual creativity and digital art direction](images/topics/midjourney.jpg)

## 7.1 Reading material (step by step)

**Step 1: What Midjourney is**  
Midjourney is an AI image generation tool. You describe a visual; it creates images. Teams use it for concept art, moodboards, ad creatives, thumbnails, packaging atmosphere, storyboards, and early creative exploration before a photoshoot.

**Step 2: Prompt anatomy**  
A practical prompt often includes:

- Subject (what is the hero object or scene)  
- Setting (where)  
- Style (photo, illustration, 3D, editorial)  
- Lighting (soft morning, harsh noon, neon night)  
- Camera / framing (wide, close-up, top-down)  
- Constraints (no text, no watermark, no crowded background)  
- Parameters (aspect ratio and other current Midjourney flags)  

**Step 3: Iteration is the real skill**  
First images are sketches. Pros create variations, change one variable at a time, use references when available, and tighten language until the image matches the brief. Prompting once and quitting is how beginners get generic output.

**Step 4: Brand consistency**  
Build a short internal visual language note:

- Color mood  
- Lens style  
- Do list / don't list  
- Example winning prompts  

Store that note in Notion next to brand guidelines.

**Step 5: Rights and responsibility**  
Check Midjourney's current terms for commercial use on your plan. Avoid generating images of real private people without rights. Disclose AI imagery when a client, platform, or policy requires it.

**Step 6: Where it fits in a pipeline**  
Midjourney creates visuals. You pick winners, export, then place them into Canva, Gamma, Figma, Notion, or a website CMS. Midjourney is rarely the final system of record.

**Step 7: Text in images**  
If you need accurate logos or readable headlines, add text in a design tool after generation. Do not rely on the model for perfect typography.

## 7.2 How to use Midjourney (5-6 steps)

1. Create or access your Midjourney account (web or Discord as currently offered).  
2. Start with a plain-language prompt that describes the scene and mood.  
3. Generate a set of options.  
4. Select the closest image and create variations.  
5. Upscale or export the winner at the size you need.  
6. Bring the image into your design or presentation tool and add real brand text/logo.

## 7.3 How to use Midjourney efficiently (5-6 steps)

1. **Write the brief before the prompt** (audience, emotion, use case, aspect ratio).  
2. **Lock aspect ratio to destination** (YouTube 16:9, story 9:16, post 1:1 or 4:5).  
3. **Keep a swipe file of winning prompts** for your brand.  
4. **Change one variable per iteration** (lighting or composition or style: not all at once).  
5. **Add negative constraints** when needed (no text, no watermark, clean background).  
6. **Human art-direct the final 10%**: crop, color grade, overlay real logo and copy.

## 7.4 Real-world example

**Scenario:** A D2C brand needs 6 mood images for a new summer collection landing page before budgeting a full shoot.

**Implementation:**

1. Creative lead writes a mood brief: warm coastal morning, linen textures, hopeful, no faces.  
2. Designer runs 4 prompt families in Midjourney.  
3. Team shortlists 8, then final 6.  
4. Light retouch and brand color grade in Figma or Photoshop.  
5. Images go on the web and are reused in a Gamma pitch for retailers.

**Result:** Campaign visual exploration in one afternoon instead of waiting on a full photoshoot for early concept testing.

## 7.5 Benefits

- Rapid visual exploration before expensive production  
- Stronger creative direction conversations ("show, don't only tell")  
- More creative tests at low cost  
- Consistent moodboarding across marketing and product  
- Faster stakeholder alignment  

## 7.6 Media

**Videos:**

- [The ULTIMATE Beginners Guide to Midjourney in 2025](https://www.youtube.com/watch?v=vUj4VNXXC1c)  
- [How To Use Midjourney | Beginners Guide](https://www.youtube.com/watch?v=J3DWZ60ShzM)  

---

# 8. NotebookLM

**Official site:** [https://notebooklm.google](https://notebooklm.google)

![Research, books, and source-grounded learning](images/topics/notebooklm.jpg)

## 8.1 Reading material (step by step)

**Step 1: What NotebookLM is**  
NotebookLM is Google's AI research notebook. Unlike a general chatbot that answers from broad world knowledge, NotebookLM is built to work from **sources you upload** (PDFs, Google Docs, websites, YouTube links, pasted text, and more, depending on current product support). It can cite those sources in answers.

**Step 2: Why that matters**  
When your truth lives in your documents, a grounded notebook reduces random invention. Ideal for exam prep from your notes, competitor research from real PDFs, policy Q&A from internal files, and briefing packs from mixed source sets.

**Step 3: Core workflow pieces**  

- **Notebook**: one topic container  
- **Sources**: the raw materials  
- **Chat**: ask questions grounded in those sources  
- **Studio outputs**: study guides, briefing docs, FAQs, mind maps, audio overviews (feature set evolves)  

**Step 4: Source quality rule**  
Bad sources create bad answers. Prefer primary documents over random blogs when accuracy matters. Remove outdated PDFs when strategy changes.

**Step 5: One notebook, one mission**  
Do not mix unrelated domains in one notebook. "Q3 Pricing Research" beats "Misc". Mixed worlds force the model to guess which context you mean.

**Step 6: Output to other tools**  
NotebookLM is excellent for synthesis. Final delivery often moves to Docs, Gamma, Notion, or Slides.

**Step 7: Citations are a feature, not a decoration**  
When NotebookLM cites a claim, click through before you put that claim in front of a client or teacher. Grounding helps; humans still own accuracy.

## 8.2 How to use NotebookLM (5-6 steps)

1. Open [notebooklm.google](https://notebooklm.google) and sign in with Google.  
2. Create a new notebook and name it by project.  
3. Add sources (PDFs, Drive files, URLs, YouTube, text).  
4. Ask focused questions in chat ("Compare source A and B on pricing").  
5. Generate a briefing doc, FAQ, mind map, or audio overview as needed.  
6. Save important answers as notes and share the notebook if collaboration is allowed.

## 8.3 How to use NotebookLM efficiently (5-6 steps)

1. **Start with 5-15 high-signal sources**, not 50 weak ones.  
2. **Ask for citations** and open them before you trust a claim.  
3. **Use conversion prompts:** "Create a 1-page executive brief" or "Make a study guide for new hires."  
4. **Generate an Audio Overview** for commute review of dense material.  
5. **Export structure to Gamma** for slides (outline to paste to design).  
6. **Maintain source hygiene:** archive or remove outdated files when reality changes.

## 8.4 Real-world example

**Scenario:** A product manager must brief leadership using 3 competitor whitepapers and 2 customer interview note docs.

**Implementation:**

1. Create notebook: "Competitor Deep Dive: June".  
2. Upload the 5 sources only.  
3. Ask: "What do all sources agree on? Where do they conflict? What is still unknown?"  
4. Generate a briefing doc and FAQ.  
5. Paste the structured outline into Gamma for a 10-slide review.  
6. Share the notebook with the design lead for async reading.

**Result:** The leadership meeting becomes evidence-based. Prep time falls sharply compared with manual highlighting across five PDFs.

**Student variant:** Upload class PDFs and ask for a quiz, then an Audio Overview for revision.

## 8.5 Benefits

- Research grounded in your materials  
- Faster synthesis across many documents  
- Better onboarding packs and study aids  
- Stronger presentation inputs  
- Lower risk of "AI invented this statistic" (still verify; citations help)  
- Shareable research context for teammates

## 8.6 Media

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
Notion is an all-in-one workspace for docs, wikis, tasks, and databases. Notion AI (plan-dependent) sits on top so you can summarize, draft, and operate inside the same system where work already lives.

**Step 2: Building blocks**  

- **Pages**: documents and wikis  
- **Blocks**: headings, lists, toggles, embeds, callouts  
- **Databases**: tables, boards, calendars, and lists with properties  
- **Templates**: repeatable page structures  
- **AI / Agents** (plan-dependent): writing help and automated workflows inside Notion  

**Step 3: The real power**  
Notion becomes valuable when databases and templates encode your process: content calendar, light CRM, hiring pipeline, course tracker, bug triage. Empty pretty pages are decoration, not a system.

**Step 4: AI inside Notion vs external AI**  
External AI (ChatGPT/Claude) is excellent for deep drafting and hard reasoning. Notion AI is excellent when the answer should land directly into the page or database you already use, with less copy-paste.

**Step 5: Team OS principle**  
One shared source of truth beats five scattered Doc links. Naming conventions and permissions matter more than fancy dashboards.

**Step 6: Avoid overbuilding**  
Start with one database and two views. Complexity should be earned by repeated weekly use, not by a day-one architecture spiral.

**Step 7: Properties that matter**  
For most work databases, these properties cover a lot:

- Status  
- Owner  
- Due date  
- Tags / type  
- Priority  
- Link to asset or brief  

If a property is never used in a view or filter, delete it.

## 9.2 How to use Notion (5-6 steps)

1. Sign up at [notion.so](https://www.notion.so).  
2. Create a homepage for your workstream.  
3. Add a database (Tasks, Content, Leads, or Readings).  
4. Add properties that matter (Status, Owner, Due date, Tags).  
5. Create a template for recurring pages (Meeting Notes, Brief, Weekly Review).  
6. Use Notion AI to summarize a long page or draft a section in place.

## 9.3 How to use Notion efficiently (5-6 steps)

1. **Define statuses that match reality** (Idea to Draft to Review to Published).  
2. **Create views for jobs**, not vanity (My tasks this week, Blocked, By owner).  
3. **Template every repeating ritual** (weekly review, client kickoff, bug report).  
4. **Keep AI prompts next to the work** on a Prompt library page linked from home.  
5. **Link databases instead of duplicating** (Projects linked to Tasks linked to Meeting Notes).  
6. **Review weekly:** archive stale pages. Notion debt is real.

## 9.4 Real-world example

**Scenario:** A content team publishes 8 LinkedIn posts per month and keeps losing track of drafts.

**Implementation:**

1. Database: Content Calendar with Hook, Status, Publish date, Asset link, Owner.  
2. Template: Post Brief (audience, angle, CTA, source links).  
3. Writer uses Notion AI to turn the brief into a first draft inside the page.  
4. Editor comments in-page; status moves Review to Approved.  
5. Designer drops Midjourney or Canva asset link into the same row.  
6. Optional: make.com notifies Slack when status = Ready to publish.

**Result:** Everyone sees the same pipeline. "Where is the latest draft?" messages drop.

**Student variant:** Reading list database with Status (To read / Reading / Done), notes template, and weekly review view.

## 9.5 Benefits

- Single home for docs, tasks, and knowledge  
- Less context loss between tools  
- Templates create consistency across people  
- AI drafts land where work is tracked  
- Clearer operations as a team grows  
- Easier handoffs when someone is on leave

## 9.6 Media

**Videos and resources:**

- [How to Use Notion AI to Get More Done](https://www.youtube.com/watch?v=VNeiHq4aLeU)  
- [Notion beginners tutorial (2026)](https://www.youtube.com/watch?v=2BVX__JBDo0)  
- Notion help: [Custom Agents](https://www.notion.com/help/custom-agents)  
- Guide: [Build your first Custom Agent](https://www.notion.com/help/guides/build-your-first-custom-agent)

---

# Bonus: A simple multi-tool workflow

When these tools work together, a high-leverage loop looks like this:

1. **NotebookLM**: digest source material and extract a brief  
2. **Claude or ChatGPT**: turn the brief into narrative, scripts, or emails  
3. **Notion**: store briefs, tasks, and approvals  
4. **Gamma**: convert approved narrative into slides  
5. **Midjourney**: create custom visuals for key slides or ads  
6. **Google Workspace + Gemini**: collaborate on the final Doc or Sheet of record  
7. **E-mail**: send the update, ask, or proposal  
8. **make.com**: automate repetitive handoffs (form to CRM to Slack to Notion)

You do not need all nine on day one. Pick the 2-3 that remove your biggest weekly pain, master those, then add the next tool.

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
- [ ] Save your best prompts in Notion  
- [ ] Keep topic images and video practice linked from your own notes  

---

