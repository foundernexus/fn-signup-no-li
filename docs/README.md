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

---

## Login integration (added after export)

The member login page lives at `login.html`, with its photo, wordmark, and fonts under `assets/`.

Wiring, done without editing the compiled `index.html` bundle:

- A small integration `<script>` was appended to the very end of `index.html`. It routes the demo's three inert "Log in" links to `login.html`. The two in-flow links (the entry gate and the "pick up where you left off" step) pass `?from=signup`.
- `login.html` reads `?from=signup` and reframes the headline to "Finish your application." to acknowledge an application in progress.
- In the "See how founders get access" dialog, **Apply now** returns the user into the signup flow (`index.html`).
- Signing in (Log in or Continue with LinkedIn) sends the user to `index.html?view=profile`; the integration script opens the "Your profile" view once the bundle has mounted.

### Notes for productionizing

- `index.html` is compiled output. This wiring is a demo-only shim; the real integration should be regenerated from the signup flow's source, not layered on with an appended script.
- The demo keeps no step state in the URL, so "return to the exact step" is simulated, not real. Thread a real step index / application id when the source supports it.
- `login.html`'s `.fn-input` / `.fn-btn` / `.fn-check` / `.fn-dialog` are standalone reimplementations of the design system. In a real codebase, swap them for the real `Input`, `Button`, `Checkbox`, and `Dialog` components.

---

## Profile page update (added after export)

The redesigned member profile is hosted as its own page, `profile.html`, rendered by the FounderNexus design-system runtime (`support.js` + `_ds/`) copied from the event-page repo (same `c60151` design system).

- New fields over the old in-bundle profile: **Industry**, **Funding timing** (last round / next raise, which drives the VC Fast-Pass note), and **How you found us** (source + referral).
- A slim demo view-switcher strip sits at the top of `profile.html` so reviewers can jump between screens; it is a scaffold, not part of the page design.
- The demo's **Your profile** tab and the login sign-in both route to `profile.html`.
- The shared design-system bundle does not ship the `Avatar` component, so the avatar is a plain initials circle here.

### Productionizing

The clean fix is to re-export the whole signup flow as one bundle that includes this updated profile, so the profile stays an internal view with native tab navigation, instead of this standalone-page shim.
