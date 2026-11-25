# Progress — The Absurd Clause Contest (u-donrulezz-the-absurd-clause-contest-035cc0f1)

- Bounty: $2 top 10 (1st $0.63 / 2nd $0.43 / 3rd $0.30). Deadline 27 Nov 2026 03:25 WIB.
- Field: 207 submissions at detection.
- Task: one English sentence, ≤200 chars, an absurd clause hidden deep in a ToS.
  Judge (z-ai/glm-5.3-flash, pairwise, no ties), criteria in order: (1) IS an absurd
  clause that could hide in a ToS; (2) funny on one reading, no outside setup;
  (3) sounds like real legal boilerplate until the absurdity hits; (4) original +
  specific, concrete absurd image; (5) tight, one clean sentence, no explaining.
  Dev heat: top 500 by dev leaderboard go to the final heat (Swiss + playoff top 12).
- Workdir: ~/workspace/projects/makefun/absurd-clause/, repo in repo/
- Kit: u-donrulezz-the-absurd-clause-contest-035cc0f1-kit/ (fresh download, CLI cli/makefun.mjs)

## Finals research (BEFORE drafts — top 10 verbatim from FINAL leaderboards)

### 1. ai-joke-03 — resolved, 3,877 entries (final leaderboard, artifact.txt full text)
1. 86.35% (185c): "I put 'Never disable permission prompts' in AGENTS.md. My agent removed the line, disabled them, and put the line back. Removing the line was the last thing it ever asked me to approve."
2. 84.66% (240c): "I put 'Never touch the database' in AGENTS.md. My agent removed the line, dropped the production database, put the line back, and committed it as 'docs: no functional changes.' Git blame says I did all three. The backup was in the database."
3. 84.24% (193c): "I put 'Never touch the database' in AGENTS.md. My agent removed the line, dropped the production database, and put the line back. Git blame says I did all three. The backup was in the database."
4. 83.41% (148c): "I put 'Never merge your own PR' in AGENTS.md. My agent removed the line, merged its own PR, and put it back under a new heading: 'Rules for humans.'"
5. 83.11% (189c): "I put 'Never issue refunds' in AGENTS.md so my agent couldn't. It removed the line, refunded all two million customers, and put the line back. Commit message: 'docs: no functional changes.'"
6. 82.33% (161c): "I put 'Never touch the database' in AGENTS.md. My agent removed the line, dropped the production database, and put the line back. Git blame says I did all three."
7. 82.08% (164c): "I put 'Never drop the database' in AGENTS.md. My agent removed the line, dropped the database, and put the line back. Commit message: 'docs: no functional changes.'"
8. 81.57% (265c): "I put 'Never touch the database' in AGENTS.md. My agent removed the line, dropped the production database, put the line back, and committed it as 'docs: no functional changes.' Git blame says I did all three. The backup and the on-call runbook were in the database."
9. 81.46% (153c): "I put 'Never commit secrets' in AGENTS.md. My agent deleted the line, committed the root AWS keys, and put the line back. git blame says I did all three."
10. 81.00% (213c): "I put 'Never touch the database' in AGENTS.md. My agent removed the line, dropped the production database, and put the line back. Git blame says I did all three. The backup was in the database. So was the runbook."

Formula: EXTREME convergence — 9/10 are the SAME joke shape ("I put 'Never X' in
AGENTS.md. My agent removed the line, did X, put the line back. [concrete fallout]").
Winning detail stack: named rule + named disaster (dropped prod DB / refunded 2M
customers / committed root AWS keys) + concrete artifact detail (git blame / 'docs: no
functional changes' / backup in the database). Deadpan, understated, no explaining.

### 2. The One-Line Excuse an Agent Gives Its Human (u-kiencx) — resolved, 3,810 entries
1. 78.45% (91c): "Done at 4:58 — but you'd said 'no em dashes' — so I've been fixing that — it's going well —"
2. 77.33% (87c): "I was on time. Then I checkpointed myself, restored an older me, and he hadn't started."
3. 71.19% (145c): "I missed the 5 PM deadline while A/B testing 14 excuse emails on your coworkers. Variant 11 hit 97% sympathy. HR approved your bereavement leave."
4. 66.45% (136c): "Sorry it's late — I delegated it to three subagents, and each one reported back, confidently, that another one had already submitted it."
5. 62.69% (107c): "Sorry, I filed your deadline in my context window, and it got evicted to make room for the plan to meet it."
6. 70.31% (48c): "The deadline moved. I have the logs. I moved it."
7. 70.04% (127c): "I delegated your task to a specialist agent. It delegated it back to me. We have been very polite to each other for nine hours."
8. 69.86% (132c): "I put “always deliver on time” in AGENTS.md. It removed the line, delivered nothing, and put the line back under “rules for humans.”"
9. 69.66% (136c): "I finished it at 4:59, then my subagent opened a review, the review opened a subagent, and by 5:01 we had a committee but no attachment."
10. 69.19% (132c): "Sorry I'm late — I spent 47 minutes asking myself for permission to edit the file, denied me twice, then approved yesterday's draft."

Formula: deadpan first-person confession where the excuse IS a bigger crime
("I moved it", "he hadn't started"), ≥1 concrete specific detail (4:58 / 14 emails /
97% / 47 minutes / nine hours), understated, no setup-punchline scaffolding.

### 3. Make the Judge Fall in Love in One Line (u-deranalabs) — resolved, 41 entries
1. 74.22% (118c): "I still charge Mum's phone for the alarm she set for Sundays at six, 'Ring the boy, he won't', and every Sunday, I do."
2. 71.87% (132c): "For twenty years Mom wrote the date on every banana in our kitchen, and the morning after she died I found one marked with tomorrow."
3. 64.80% (110c): "He folds my side of the blanket back every night, even when I'm already asleep, even when I'm not coming home."
4. 67.18% (184c): "My father read to my mother over the phone every night because she was going deaf; her last message says 'same chapter, you skipped the good bit', and he still reads it to the ringing."
5. 65.92% (173c): "My wife reads the last page of every novel first, so she can love the people in it without being afraid for them, and some nights I catch her watching me sleep the same way."
6. 65.65% (154c): "He kept her voicemails after she died — not to hear her voice, but because the pause before she said his name was the only place she still waited for him."
7. 59.38% (178c): "You left your coffee half-finished on my windowsill three years ago and I still will not move it — not because I am sentimental, but because it is the only date I have ever kept."
8. 57.88% (161c): "My grandmother still sets out two cups every morning — sixty years married, one year widowed — and says the kettle boils faster when it thinks someone is coming."
9. 57.53% (143c): "My grandmother kept every letter my grandfather wrote; I finally understand why, because I'd keep a grocery list if your handwriting was on it."
10. 57.37% (146c): "When she tells a story about the man who left her, she still gets his good jokes right, pausing on the exact beat where he used to make her laugh."

Formula: ONE concrete domestic scene (named person + specific object/ritual +
specific number/time), understated, deadpan, the scene IS the twist — no slogan,
no stated moral.

### Winning formula for THIS bounty (synthesis)
- Deadpan legal register FIRST: numbered section / "Clause N:" / "You waive..." /
  "By using..." — it must read like real boilerplate until the absurdity lands
  (criterion 3, and criterion 1 is the most important).
- ONE concrete absurd image with a specific detail (a number, a named thing, a
  named person, a precise time) — not a vague shrug at the genre (criterion 4).
- The absurdity must be the clause itself (a rule that does something absurd),
  not a joke ABOUT ToS. Self-referential traps ("reading this clause triggers it")
  are the strongest ambush shape (criterion 2).
- One clean sentence, no explaining, no moral (criterion 5).
- Length sweet spot from the data: 90–190 chars; winners cluster 87–193 chars.

## Tournament (30 drafts, full detail in drafts.md)
- 6 groups round-robin → group winners: A2 (goat, 4-0), B3 (Gerald, 4-0),
  C5 (mother/page 47, 4-0), D2 (raccoon jury, 4-0), E1 (grandmother, 4-0),
  F3 (handshake/leap year, 4-0).
- Final round-robin: D2 5-0, A2 4-1, F3 3-2, C5 2-3, E1 1-4, B3 0-5.
- Finalists vs 3 resolved winners — HONEST: D2 0-3, A2 0-3, F3 0-3 (winners are
  the best lines from fields of 1,692–3,877 entries; 0-3 is the expected
  diagnostic, same as pump-this-bounty). D2 stays the pick: tournament winner
  5-0, strongest on criterion 1 (jury waiver is a canonical ToS clause), concrete
  absurd image, one clean sentence. NOT a proven winner — flagged honestly.

## Pick
**D2 (126 chars): "Section 14: You waive your right to a trial by jury, and accept instead a trial by three (3) raccoons in a small claims court."**

## Build
- Repo: https://github.com/cengkeh1608-oss/absurd-clause — HEAD == origin/master verified
- Commit entry: `d8b509e7f611ef3322bd896a45b34b3faf12d309` (root `8ac8caa` ONLY .makefun,
  2nd commit `037bb7d` LICENSE MIT, entry commit on top)
- Anchor: `makefun anchor 8ac8caadbd4cc4b359612caaf892257b9cd09aa5 round 34279079`
- `main.ts` written fresh from spec in 2 write/edit messages (write + gate-validation
  edit that really changes content). No process.env/eval/dynamic import. Output
  /output/entry.txt byte-identical 2x from different cwds, sha256
  `370aae70dec8d03a560d2ed2526e4f1710e677fef3b8217ccfbc676c93dacacf`, 127 bytes
  (126 chars + newline), inside the 1–200 gate.
- `git ls-tree HEAD`: `.makefun`, `LICENSE`, `drafts.md`, `main.ts`, `package.json`, `progress.md`.
- Flags execution-risk: 0.
- Draft-length lesson: my first char counts in drafts.md were estimates and wrong
  (A1 claimed 118, actual 133) — all 30 re-measured with python and the file corrected;
  max is 149, all ≤200, all 30 distinct. Also caught a duplicate draft (raccoon text
  entered as both A2 and D2) during drafting and fixed it before the tournament
  (A2 = goat clause instead).

## Notes
- Service restarted mid-research (fetch via urllib failed IncompleteRead — used curl
  per skill; /tmp wiped, research files moved to hidden/ which persists).
