# Changes to implement

Two pages changed. Each ships as a standalone HTML file you can open in a browser:

- `Application Confirmation.dc.html` — the page shown right after the application is submitted
- `Your Profile.dc.html` — the member profile / first dashboard page

Both use the FounderNexus design system components (`Card`, `Button`, `Badge`, `Input`, `Select`, `Icon`, `ProgressBar`, `Avatar`, `SidebarNav`) and design tokens (`var(--*)`). No new colors, spacing values, or type sizes were introduced.

---

## Shared: the path to membership

Previously 4 steps, then 6. **Now 7**, with "Connect your calendar" inserted as step 3:

| # | Step | Short label (horizontal rail) |
| --- | --- | --- |
| 01 | Apply | Apply |
| 02 | Application review | Review |
| 03 | **Connect your calendar** *(new)* | Connect calendar |
| 04 | Meet your Nexus Partner | Intro call |
| 05 | Attend sessions | Attend sessions |
| 06 | Peer evaluation | Peer evaluation |
| 07 | Invitation extended | Invitation |

Each step carries three strings: a full `title`, a `short` label for the horizontal rail, and a `line` used when that step is the current one. Both pages build the rail from one `buildJourney(current)` function — the only difference is what `current` is.

---

## 1 · Application Confirmation page

**Hero**
- Removed the "APPLICATION RECEIVED" eyebrow — it repeated the card below it.
- Checkmark icon replaced with the FounderNexus mark in the blue disc. A check reads as *finished*; the application is still under review.
- Headline is `Welcome!`
- Sub is two short sentences: "A Nexus Partner is reading your application now. You'll hear back shortly." No "one business day" commitment.

**Two cards**
- **Where you'd sit** — always resolves to a stage. If no ARR band was selected it falls back to Stage 1 and the note says so honestly: "Our read from your answers. Your Nexus Partner confirms it on the call." It must never show a general or empty answer.
- **What happens next** — retitled "Review, then your first room": "Once your application is reviewed, you'll talk with your Nexus Partner. They choose the session you sit in, and you attend it as a guest."

**Path to membership (rebuilt)**

The old version had three competing layers of naming and per-step notes that wrapped to 2–3 word columns. Now:
- One title, "Your path to membership", with "Membership is offered, never sold." as a quiet supporting line.
- The two group headings ("Getting into the room" / "Earning the seat") are **removed**.
- The rail shows 7 evenly-spaced discs with **short labels only** — no per-step notes.
- One full-width line below the rail explains only the current step: **"Step 2 of 7. We're reading your application and will come back to you shortly."**
- This rail is **pinned to step 2** — it is a snapshot of the moment of submission and must not follow the member's later status.

---

## 2 · Your Profile page

The page no longer opens by reading back what was just submitted. It opens with what is left to do.

**Order of the page:** status banner → header → *Finish your profile* → *Your application* → right rail.

### "Finish your profile" card (primary, shown in both states)

Shown while **in review** as well as after approval, with the reason changing by state:
- In review: "Add these while we read your application. They tell us who you should be sitting with."
- Approved: "This is what we read before your intro call."

Contents:
1. **Work email check** — reads the domain of the signup email. A company domain shows "Work email confirmed"; a free provider (gmail, outlook, hotmail, yahoo, icloud, proton) shows a warning state plus an "Add work email" action.
2. **Your company** — company name, website, industry (10 options), your title, company address.
3. **Funding** *(new)* — "Last round closed" and "Next raise expected". Note beneath: timing decides whether a raise conversation is useful now or noise, and it triggers a VC Fast-Pass introduction.
4. **What you're working through** *(new)* — free-text field for the decision in front of them. Framed as the most important field on the page.
5. **How you found us** *(new)* — 8 options, people-first: member nominated me / another founder told me / an investor or VC told me / someone else in my network / attended a FounderNexus session / met the team at an event / LinkedIn, a podcast or press / found it myself. A conditional **"Who sent you"** name field appears for the first four.

**Completion meter** — percentage out of 13 items (4 already captured by the application, 9 collected here), plus a line naming the next missing item: "Next: add your company name." Ends on "Nothing left here. Thank you."

### "Your application" card (secondary)

Personal details and Founder experience combined into one quieter card, each with its own Edit control. Read-only display; no change to the founder-experience questions themselves.

### Right rail

1. **Your path to membership** — vertical, 7 steps. `current` = 2 in review; 3 once approved; **4 once the calendar is connected**.
2. **Sessions** *(approved only)* — "Open to you now", browse and register, no cap.
3. **Your calendar** *(new)* — sits above the advocate card because connecting is what unblocks booking.
   - Unconnected: "Step 3" badge, Google Calendar and Outlook buttons, and a privacy line: "We read free and busy times only. We never see titles, guests or notes."
   - Connected: badge flips to "Connected", confirms the provider, offers Disconnect.
4. **Your advocate** — gated on the calendar. Before connecting the CTA reads "Connect your calendar first" and is disabled; after, "Book 15 minutes".

### Status states

A member is either **In review** or **Prospect** (approved). This drives the banner, the sidebar locks, the rail position, the header CTA, and the advocate card.

- In review: amber banner, "We're reading it now. You'll hear back shortly." Dashboard and Sessions locked.
- Prospect: blue banner, "Connect your calendar to book your intro call. You can register for any session that fits your stage, with no cap." Header CTA is "Connect your calendar". Dashboard and Sessions unlocked.

The **PREVIEW: In review / Prospect** toggle in the banner is a prototype affordance for reviewing both states. Remove it in production.

---

## Copy rules applied throughout

- No em dashes in prose. (The `—` used as an empty-value placeholder in the detail tables is intentional and should stay.)
- Sentence case for headings and CTAs.
- "Nexus Partner" appears **twice** on the profile page, both in the advocate card. It previously appeared eight times. Everywhere else says the plain thing: "intro call", "we're reading it".
- Same for placement language — "place you", "choose your room", "matches you against" were saying one thing four ways.
