# FounderNexus — onboarding flow prototype

Interactive walkthrough of the FounderNexus application flow, guest/prospect profile, and the two lifecycle emails.

**Live demo:** https://USERNAME.github.io/REPO/

## What's in it

Four views, switchable from the tab bar at the top:

| View | What it shows |
| --- | --- |
| **Onboarding** | Entry gate → contact + email check → verification → profile → founder experience → confirmation |
| **Your profile** | Member area after applying, with an **In review / Prospect** preview toggle |
| **Approval email** | Sent when the application is approved and sessions open up |
| **Invitation email** | Sent when the room votes them in and membership is offered |

## Walking the team through it

1. Start on **Onboarding**. Take the LinkedIn path once and the email path once — the contact step behaves differently for each.
2. On the contact step, type `court@foundernexus.com` to trigger the returning-applicant state.
3. On the experience step, answer **Yes** to the founder question, then **Building**, to see the full branch (stage, funding, multi-company follow-ups). Answering **No** shows the shorter non-founder branch.
4. The confirmation page reads back the stage you selected.
5. On **Your profile**, use the *In review / Prospect* toggle in the banner to compare pre- and post-approval states.

## Publishing to GitHub Pages

This file is self-contained — fonts, logos, the design system, and all logic are inlined. No build step, no dependencies, works offline.

```
your-repo/
└── docs/
    └── index.html
```

In the repo: **Settings → Pages → Source: Deploy from a branch → Branch: `main`, folder: `/docs`.**

Serving from the repo root works too — move `index.html` up a level and select folder `/ (root)`.

## Editing

`index.html` is compiled output. Don't hand-edit it; regenerate it from the source design instead.
