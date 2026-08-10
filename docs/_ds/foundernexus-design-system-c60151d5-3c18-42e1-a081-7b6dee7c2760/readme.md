# FounderNexus Design System

Judgment infrastructure for venture-scale founders — recreated as a usable design system. This project contains the FounderNexus brand foundations (color, type, spacing), reusable React UI components, full-screen UI-kit recreations, copy-and-go templates, and the verified brand assets, so any design agent can produce on-brand FounderNexus interfaces, decks, emails, and marketing.

---

## 1 · Company & product context

**FounderNexus is not a networking community.** It is *judgment infrastructure for venture-scale founders*: curated, stage-specific founder rooms that put the right founder experience in the room at the moment a decision matters. **The room is the product.** Events, nominations, VC Fast-Pass, the Nexus Partner (member-facing: *advocate*), and 48-hour follow-up are one loop that sources, routes, proves, and recycles founders into the right room at the right moment.

- **Brand promise:** the right room, at the moment a decision matters.
- **Category:** judgment infrastructure, not networking.
- **Audience:** experienced venture-scale founders (Stage 1–4) who can both draw from and contribute to a room; plus qualified prospects, chapter chairs, VCs/partners, speakers.
- **Spine:** organized by **stage and decision**, not geography. Geography is the venue, never the relevance axis.

### Surfaces represented here
1. **Marketing site** — public landing/event pages (`ui_kits/marketing`).
2. **Member area / product UI** — member dashboard, events, profile, membership flow (`ui_kits/member-area`).
3. Source file also covers Admin, Email templates, Speakers, Questionnaire, Event Control, Subscriptions — patterns captured in components & guidance, not all built as kits.

### Sources used (store for reference — reader may not have access)
- **Figma:** *FounderNexus Master Design (Copy) (1).fig* — a large master working file (315 component sets, ~1,843-glyph imported icon library, 1,123 Figma variables). It carries heavy imported MUI/UI-kit noise; per the brand's own design skill we treated that as noise and built around the **authentic FounderNexus brand** (Plus Jakarta Sans, navy/blue, white surfaces). Visual specifics (event card, member area) were taken from the file's real product screens.
- **GitHub — distilled brand system (authoritative):** [`robroyhobbs/foundernexus-skill`](https://github.com/robroyhobbs/foundernexus-skill) — `founder-nexus-design/` holds the canonical tokens, design principles, components, assets, and a full **messaging framework**. Tokens, fonts, icons, logos and template imagery here were imported from this repo. **Explore this repo to build better FounderNexus work** — especially `references/messaging-framework.md`, `references/tokens.md`, and `references/*` for landing pages, email, events, product UI, and the prospect-to-member journey.
- **Uploads:** `uploads/foundernexus_logo.jpeg`, `Founder Nexus_CV.*` (logo source files), and a generated mark reference.

---

## 2 · Content fundamentals (voice & copy)

FounderNexus copy is **mature, precise, and useful — never loud or inspirational.** Premium but plainspoken.

- **Voice:** clear not clever · premium not flashy · direct not pushy · earned not entitled · human not corporate · specific not generic. Write to *one serious founder*, not "founders."
- **Person:** address the founder as *you*; the org as *we*/*FounderNexus* (one word).
- **Casing:** sentence case for headings and CTAs. No ALL-CAPS except small uppercase eyebrows/overlines.
- **Emoji:** none. Iconography carries scanning, not emoji.
- **Two registers:** *Court authority* (LinkedIn/thought leadership — reflective, can imply) and *FounderNexus product* (site, email, decks, product — explains value, mechanism, proof, next step).

**Lead with better decisions and the room.** Name the stage, the decision, the moment.

- **Say:** better decisions · the right room · stage-specific room · trusted founder room · decision quality · relevant founder judgment · pattern recognition · venture-scale founders · same-stage room · your advocate · Founder Nomination System.
- **Avoid everywhere:** vibrant community · like-minded entrepreneurs · unlock your network · accelerator / class / course / curriculum / training / working group · account manager / VIP / concierge (external) · referral program · guaranteed outcomes · join the club · level up.
- **CTAs are concrete:** *Apply for membership · Express your interest · Request an invitation · Nominate a founder · Register to event · Add to calendar · See more details · Next step.*

**Examples (approved register):** "Better decisions start with the right room." · "The right room, at the moment a decision matters." · "For founders making decisions where the wrong move is expensive." · "FounderNexus is invitation-only and organized by stage. The next step is not to sell you a membership — it is to place you in a relevant room."

Never invent metrics, speakers, companies, partners, eligibility criteria, or success-rate claims. Pricing is never published. Quotes are category-protection assets — pass the proof checks before external use.

---

## 3 · Visual foundations

**Default mode:** clean white surfaces, deep navy text, decisive blue actions, pale-blue supporting panels, restrained gray borders. Compact, information-rich, scan-friendly.

- **Color.** Text/headings **deep navy `#01052A`**. Single primary action **blue `#007BE4`** (hover `#0072BA`, active `#0059A8`); action-link variant `#215BE3`. Emphasis panels **pale blue `#F1F8FF`**; soft chips **`#D3EAFD`**. Page sits on **`#F9F9F9`**, cards pure white. Borders **`#D3D6DA` / `#D0D5DD`**. Secondary text **`#56646F`**, muted **`#9EADBA`**. Dark surfaces (event heroes) use rich navy **`#061B2C`**. Yellow `#FFCC00` is a product-UI **status label only** — never dominant. See `tokens/colors.css`.
- **Type.** **Plus Jakarta Sans** primary (400/500/600/700). Roboto secondary for legacy email / product UI. Display 50–80px bold, H1 40/bold, H2 30, H3 24, H4 20 (semibold); body 16/regular at 1.6 line-height; labels 14/medium; meta 12. Headings use slight negative letter-spacing. See `tokens/typography.css`.
- **Spacing.** 8px-based rhythm (4 / 8 / 12 / 16 / 24 / 32 / 40 / 64+). See `tokens/spacing.css`.
- **Corners.** Compact and restrained: 4–6px controls & tables, 8px buttons/inputs, 12px cards, 16–24px large/special panels, pill (9999px) only for chips, tags, avatars, badges.
- **Cards.** White (or pale-blue `accent`) surface, 1px light border, 12px radius, **soft low shadow** (`--shadow-sm`); hover lifts to `--shadow-md` with a 2px translate. FounderNexus reads *quiet* — no heavy elevation.
- **Borders & shadows.** 1px gray dividers; shadows are soft and low-spread, tinted with navy (`rgba(1,5,42,…)`). Dialogs use `--shadow-xl`.
- **Backgrounds & imagery.** White / near-white pages; full-bleed photographic heroes on event cards (dark navy overlay gradient for text legibility). Imagery is warm, natural, real-founder photography — professional, not stocky-glossy. **Real people and real rooms only: event photography, actual speakers, member headshots — never stock.** The room is the product; show the actual room. If no real photo exists yet, use a typographic or mark-furniture layout rather than a stock placeholder, and confirm usage rights before a member's face appears externally. **No heavy decorative gradients as identity, no purple, no oversized hero graphics.** A single blue→action-blue gradient is used sparingly on the final marketing CTA panel only.
- **Motion.** Calm and functional: `--ease-standard` / `--ease-out`, 120–320ms. Fades and small translates; **no bounces**, no infinite decorative loops.
- **Interaction states.** Hover = darker fill (primary) or pale-blue tint (secondary/ghost); press = subtle 1px translate-down. Focus = 3px soft-blue ring (`--shadow-focus`). Disabled = gray fill + muted text.
- **Transparency / blur.** Minimal — only the dialog scrim (navy 45% + 2px blur) and the image-overlay gradient.
- **Layout.** Max content width 1200px; 80px header; generous 64–88px section rhythm on marketing; compact 36–40px padding in product.

---

## 4 · Iconography

FounderNexus uses **Lucide-style line icons** — 24px grid, 2px round stroke, single-color via `currentColor`. The brand's own extracted SVGs (`assets/icons/`: calendar, location, users, check, arrow-right, mail) are exactly this style, so the system standardizes on it.

- **In code:** use the `Icon` component (`components/icon/Icon.jsx`) — a curated inline set (`<Icon name="calendar" size={18} />`). `ICON_NAMES` lists all ~40 glyphs.
- **Raw SVGs:** `assets/icons/*.svg` (+ PNG fallbacks in the source repo) for non-React surfaces (email).
- **No emoji. No unicode-glyph icons.** Icons support scanning (event metadata, forms, nav) — used sparingly, never decoratively.
- **Substitution note:** the inline `Icon` set is Lucide-style and matches the brand's extracted SVGs; if you need a glyph not in the set, pull the matching [Lucide](https://lucide.dev) icon (same 24px / 2px-stroke spec) to stay consistent.

---

## 5 · Presentations & decks

Decks are a **distinct register**, not the web scale enlarged. Reference implementation: the *Make Trust Your GTM Advantage* keynote (14 slides). Authored at 960×540, so the system below is that deck ×2, normalized to **1920×1080**.

**Canvas.** 1920×1080. Outer padding 100px. Slide number bottom-right (100px in, 72px up), 24px semibold.

**Navy and blue work in partnership — navy is the ink, blue is the accent, and both can be fields.** On white slides, headlines are **navy `#01052A`** (matching the wordmark and every other FounderNexus surface) and blue appears only as accent: eyebrows, numeral discs, data panels, CTAs. That frees the two dark fields to mean different things:

- **Blue-600 `#0072BA`** — opportunity and upside. The framing statement, the economics, the win story. In a deck blue-600 is the statement field, not a hover state; this is the one place it outranks `#007BE4`.
- **Navy-700 `#061B2C`** — risk and consequence. The warning, the failure rate, the post-mortem. Navy is the floor beneath blue: heavier, quieter, and it lands harder precisely because it is rarer.

Use navy fields sparingly — one or two per deck. If every hard truth gets a navy slide the contrast collapses and you are back to one volume. Never a fourth background, never a gradient.

**Type roles** (`--fs-deck-*` / `--text-deck-*` in `tokens/typography.css`): eyebrow 24 · note 28 · body-sm 30 · body 38 · lead 48 · h2 66 · h1 88 · display 104 · stat 132.

**Color roles** (`--deck-*` in `tokens/colors.css`): headlines `--deck-headline` `#01052A` on white / white on either field · body `--deck-ink` `#334155` · accents `--deck-accent` `#0072BA` · captions and slide numbers `--deck-muted` `#929497` (neutral gray — *not* the blue-tinted slates) · secondary copy on a field `--deck-on-field-muted` `#D3EAFD` · panels `#F1F5F9` on `#E2E8F0`.

**Nine slide archetypes** — every slide in the reference deck is one of these; reuse them rather than inventing layouts:
1. **Title** (white) — navy display headline, muted subtitle, wordmark.
2. **Statement** (blue field) — one sentence at display size, light-blue support line.
3. **Numbered framework** (white) — eyebrow, navy h2, lead, three 96px blue numeral discs with label + statement.
4. **Statement + citation** (blue field) — h1, attributed quote, plainspoken takeaway.
5. **Split with stat panel** (white) — navy copy left, blue panel right holding one large figure and its footnote.
6. **Card grid** (white) — 2×2 `#F1F5F9` panels, 72px numeral disc, title, short body.
7. **Consequence** (navy field) — the one slide that has to land as a warning; eyebrow, h1, the post-mortem in two sentences.
8. **Qualifying close** (white) — value left with a blue pill CTA, "Is this you?" checklist right.
9. **Closing statement** (blue field) — final line plus a single white CTA card.

**Rules.** Eyebrows are uppercase, letterspaced `0.08em`, and use ` · ` to join section to question (`PRODUCT TRUST · WILL IT WORK?`). Cite sources in `--deck-muted` at 28px rather than dropping book covers. One idea per slide — if a slide needs two, split it. Minimum on-slide type is 24px.

**Corners are soft, never pills.** The reference deck rounds every rectangle to **12–18px at 1920** (`--radius-lg` for grid cards, `--radius-xl` for stat panels, CTAs, and the closing card). CTA buttons are soft rectangles, *not* pills — a pill reads consumer-friendly; the soft rectangle reads mature and considered, which is the brand. `--radius-pill` is reserved for the numeral discs and check circles, which are true circles (equal width/height).

**Mark furniture appears on every slide** — this is what makes the deck read as FounderNexus rather than a generic template. Three marks, all in `assets/logos/`:
- `foundernexus-mark-pale.png` (`#E9ECEF`) — large watermark bleeding off the **top-right** of white slides, 562px wide.
- `foundernexus-mark-blue.png` (`#0068AD`) — the same mark one step darker than the blue field, sitting **lower-right** on blue slides, 634px wide. Same-tone, so it reads as texture rather than a logo.
- `foundernexus-mark-navy.png` (`#0C2438`) — the navy-field equivalent, same position and size. Each dark field needs its **own** tonal mark: the blue mark on navy jumps to ~3:1 contrast and reads as a loud logo instead of texture. Target roughly 1.15–1.3:1 against whatever field it sits on.
- `foundernexus-mark.png` (two-tone blue/gray) — small 80px mark **bottom-left** of white slides only, paired opposite the slide number. Dark slides omit it.

The full wordmark appears on **two slides only** — the title and the qualifying close. Everywhere else the mark furniture carries the brand. The closing slide uses the QR code (`assets/images/foundernexus-qr.png`) rather than a repeated wordmark.

**The mark is where the palette comes from.** `#929497` (our `--gray-450`, used for deck captions and slide numbers) is the gray *in the logo itself* — that is why the deck's neutrals read warmer than our blue-tinted slate scale. When in doubt about a deck neutral, take it from the mark.

Start from `templates/keynote-deck/` — it ships all nine archetypes on `deck-stage`, so keyboard nav and PDF export work out of the box.

---

## 6 · Index / manifest

**Root**
- `styles.css` — global CSS entry (consumers link this one file; `@import` list only).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `assets/` — `fonts/` (Plus Jakarta Sans, Roboto woff2 + `fonts.css`), `icons/` (brand SVGs), `logos/` (wordmark, square mark, partner logos), `images/` (landing/event/speaker reference imagery).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing) for the Design System tab.
- `SKILL.md` — Agent-Skill manifest for portable use.

**Components** (`components/<group>/` — `<Name>.jsx` + `.d.ts` + `.prompt.md`, one `@dsCard` HTML per group)
- `icon/` — **Icon**
- `brand/` — **Logo**
- `core/` — **Button, IconButton, Chip, Badge, Avatar**
- `forms/` — **FormField, Input, Select, Checkbox, Radio, Switch**
- `navigation/` — **Tabs, SidebarNav, Breadcrumb, SiteHeader**
- `data-display/` — **Card, EventCard, SpeakerCard, StatCard, Table**
- `feedback/` — **Dialog, Tooltip, ProgressBar, Steps**

**UI kits** (`ui_kits/<product>/` — interactive recreations)
- `marketing/` — public landing page (`index.html` + `Landing.jsx`).
- `member-area/` — member product UI: events, profile, membership flow (`index.html` + `MemberApp.jsx`).

**Templates** (`templates/<slug>/` — copy-and-go starting frames consuming the bundle)
- `landing-page/` — marketing landing scaffold.
- `member-dashboard/` — member-area shell with events grid.

> Components are consumed via the compiled bundle: `const { Button, EventCard } = window.FounderNexusDesignSystem_c60151`. The Design System tab renders every `@dsCard`-tagged file.
