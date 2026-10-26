# SHYBO Design System

## 1. Purpose

This document defines the visual rules for the SHYBO construction company website.

The goal is to keep every page visually consistent, modern, readable, and easy to maintain. The design should communicate:

- reliability;
- professionalism;
- engineering precision;
- clarity;
- confidence;
- modern construction expertise.

The visual direction is minimal and corporate:

- generous white space;
- strong black typography;
- restrained yellow accents;
- large architectural photography;
- clean cards;
- subtle borders;
- very limited decoration;
- no visual noise.

The website should feel closer to a modern European construction or engineering company than to an advertising landing page.

---

## 2. Core principles

### 2.1 Simplicity

Every section must have one clear purpose.

Avoid:

- duplicated headings;
- unnecessary labels above headings;
- excessive icons;
- decorative backgrounds without functional value;
- repeated calls to action;
- too many competing colors;
- text-heavy layouts.

### 2.2 Hierarchy

Each screen should clearly show:

1. what the section is about;
2. what the user should read first;
3. what action is available;
4. what content is secondary.

### 2.3 Contrast

Yellow is an accent color, not a general text color.

Use yellow mainly for:

- primary buttons;
- active navigation indicators;
- icons;
- small decorative lines;
- selected states;
- hover accents.

Do not use light yellow for small text on a white background.

### 2.4 Consistency

Reuse the same:

- button styles;
- spacing scale;
- card treatment;
- container width;
- typography scale;
- border radii;
- transition timings;
- section rhythm.

### 2.5 Accessibility

The interface must remain readable and usable for keyboard, touch, and screen-reader users.

---

# 3. Color system

## 3.1 Brand colors

```css
:root {
  --color-brand: #f2b705;
  --color-brand-hover: #d89f00;
  --color-brand-active: #bd8b00;
  --color-brand-text: #806000;
  --color-brand-soft: #fff7d6;
}
```

Use `--color-brand` for:

- primary buttons;
- icon strokes;
- active navigation accents;
- small highlights;
- focus accents where appropriate.

Use `--color-brand-text` when a darker brand-colored text accent is needed on a light background.

Do not use it as the main color for long text.

## 3.2 Neutral colors

```css
:root {
  --color-white: #ffffff;
  --color-background: #ffffff;
  --color-surface: #f7f7f5;
  --color-surface-strong: #efefec;

  --color-text: #17191c;
  --color-text-soft: #4d535a;
  --color-text-muted: #6d737a;

  --color-border: #dedfdc;
  --color-border-strong: #c9cbc7;

  --color-dark: #12181d;
  --color-dark-soft: #1b232a;
  --color-dark-border: #303a42;
}
```

## 3.3 State colors

```css
:root {
  --color-success: #2f7d4a;
  --color-warning: #a96d00;
  --color-error: #b83a3a;
  --color-focus: #0b3d91;
}
```

State colors should be used sparingly and only for real UI states.

## 3.4 Contrast rules

- Body text on white: `--color-text`.
- Secondary text on white: `--color-text-soft`.
- Muted text on white: `--color-text-muted`.
- White text on dark backgrounds: `--color-white`.
- Yellow text on white should not be used for small labels.
- If a yellow label is necessary, use a darker golden tone with sufficient contrast.

---

# 4. Typography

## 4.1 Font family

Use one modern sans-serif font with strong Cyrillic support through `next/font`.

Recommended direction:

- Manrope;
- Inter;
- Onest;
- Roboto Sans.

Choose one and use it consistently throughout the entire website.

Preferred:

```text
Manrope
```

Fallback:

```css
font-family: var(--font-main), Arial, Helvetica, sans-serif;
```

## 4.2 Font weights

Use only the weights actually needed:

```text
400 — regular body text
500 — medium labels and navigation
600 — semibold buttons and card headings
700 — major headings
800 — hero heading when needed
```

Avoid excessive use of bold text.

## 4.3 Type scale

Recommended desktop values:

```css
--font-size-display: clamp(2.75rem, 5vw, 4.75rem);
--font-size-h1: clamp(2.5rem, 4.5vw, 4rem);
--font-size-h2: clamp(2rem, 3.5vw, 3rem);
--font-size-h3: clamp(1.5rem, 2.3vw, 2rem);
--font-size-h4: 1.25rem;

--font-size-body-large: clamp(1.0625rem, 1.4vw, 1.25rem);
--font-size-body: 1rem;
--font-size-small: 0.875rem;
--font-size-caption: 0.75rem;
```

## 4.4 Line heights

```css
--line-height-tight: 1.05;
--line-height-heading: 1.15;
--line-height-body: 1.6;
--line-height-small: 1.45;
```

## 4.5 Heading rules

- Use one `h1` per page.
- Keep heading hierarchy logical.
- Avoid all-caps headings except very short navigation or utility labels.
- Do not place an unnecessary small label above every heading.
- Use a decorative yellow line only where it adds value.

Preferred section format:

```text
Наші послуги
```

Not:

```text
НАШІ ПОСЛУГИ
Що ми пропонуємо
```

unless both lines have genuinely different meanings.

## 4.6 Natural heading wrapping

Heading wrapping is part of the approved responsive design, especially for H1–H3 text.

- Keep meaningful and SEO-relevant heading wording intact; do not rewrite an H1 only to make a screenshot look tidier.
- Use the shared responsive type scale and give headings enough inline space before reducing font size.
- Use `text-wrap: balance` for prominent headings where supported.
- Prefer natural wrapping over manual `<br>` elements, non-breaking phrases, or viewport-specific text variants.
- Avoid a short isolated final word when it can be prevented by a modest, shared adjustment to the text measure.
- Do not make heading containers so narrow that long Ukrainian words overflow or break unnaturally.
- Language-aware hyphenation and an emergency overflow fallback may be used for unusually long words on narrow screens, but ordinary words should not be split merely for decoration.
- Recheck every route using a shared Hero or heading style after changing its font size, width, line height, or wrapping behavior.
- Visual balance never overrides semantic heading order, one-H1-per-page rules, accessibility, or factual SEO wording.

## 4.7 Body copy

- Keep paragraphs concise.
- Recommended maximum width: 60–70 characters per line.
- Avoid center-aligned long text.
- Prefer left alignment.
- Use no more than 2–3 short paragraphs in a standard section intro.

---

# 5. Layout system

## 5.1 Main container

```css
:root {
  --container-max: 1320px;
  --container-padding-desktop: 32px;
  --container-padding-tablet: 24px;
  --container-padding-mobile: 16px;
}
```

Recommended implementation:

```css
.container {
  width: min(
    100% - (var(--container-padding-mobile) * 2),
    var(--container-max)
  );
  margin-inline: auto;
}
```

Adjust padding through media queries.

## 5.2 Content widths

Use narrower content widths when appropriate:

```css
--content-narrow: 720px;
--content-medium: 920px;
```

Examples:

- Hero text: narrow.
- Contact form: narrow.
- Legal text: narrow.
- Project grid: full container.

## 5.3 Grid

Use CSS Grid or Flexbox based on the component.

Desktop guideline:

```text
12-column conceptual grid
```

The implementation does not need to expose 12 actual columns everywhere.

Typical layouts:

- Hero: 5/7 or 6/6 split.
- Services: 3, 4, 5, or 6 cards depending on viewport.
- Projects: 3–4 columns.
- Footer: 3–4 columns.

## 5.4 Section width

Full-width backgrounds are allowed, but content should stay inside the shared container.

Do not let text stretch across the whole viewport.

---

# 6. Spacing system

Use a consistent 4px-based spacing scale.

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-28: 112px;
  --space-32: 128px;
}
```

## 6.1 Section spacing

Desktop:

```text
Large section: 96–128px vertical padding
Standard section: 80–96px
Compact section: 56–72px
```

Tablet:

```text
64–80px
```

Mobile:

```text
48–64px
```

## 6.2 Internal spacing

Typical values:

```text
Section title to content: 32–48px
Card icon to title: 20–24px
Card title to description: 12–16px
Button group gap: 12–16px
Grid gap: 20–32px
```

Avoid arbitrary values such as 37px or 53px unless required by a specific visual alignment.

---

# 7. Border radius

The design should feel modern but not overly soft.

```css
:root {
  --radius-small: 6px;
  --radius-medium: 10px;
  --radius-large: 16px;
  --radius-pill: 999px;
}
```

Use:

- Buttons: 6–8px.
- Cards: 8–12px.
- Large images: 8–12px.
- Form controls: 6–8px.

Avoid large rounded corners that make the construction brand feel playful.

---

# 8. Borders and shadows

## 8.1 Borders

```css
--border-default: 1px solid var(--color-border);
--border-strong: 1px solid var(--color-border-strong);
```

Cards should rely primarily on subtle borders rather than heavy shadows.

## 8.2 Shadows

Use no more than two shared shadow values.

```css
:root {
  --shadow-small: 0 8px 24px rgb(17 24 39 / 0.06);
  --shadow-medium: 0 16px 40px rgb(17 24 39 / 0.10);
}
```

Default card:

```text
border + no shadow
```

Hover card:

```text
small shadow + slight upward movement
```

Do not use deep floating shadows.

---

# 9. Buttons

## 9.1 Button sizes

```text
Small: 40px minimum height
Medium: 48px minimum height
Large: 54–56px minimum height
```

All interactive controls must remain comfortable on touch devices.

## 9.2 Primary button

```css
background: var(--color-brand);
color: var(--color-text);
border: 1px solid var(--color-brand);
```

Hover:

```css
background: var(--color-brand-hover);
border-color: var(--color-brand-hover);
transform: translateY(-1px);
```

## 9.3 Secondary button

```css
background: transparent;
color: var(--color-text);
border: 1px solid var(--color-border-strong);
```

Hover:

```css
background: var(--color-surface);
border-color: var(--color-text-soft);
```

## 9.4 Dark button

Use inside yellow or dark CTA sections.

```css
background: var(--color-dark);
color: var(--color-white);
```

## 9.5 Text link

Use for subtle navigation inside cards.

- No filled background.
- Clear hover state.
- Optional arrow icon.
- Do not use a button when the action is navigation.

## 9.6 Button rules

- One primary action per visual area.
- Do not place several equally strong buttons together.
- CTA labels must be specific.
- Do not use vague labels such as `Детальніше` when a clearer alternative exists.

Preferred:

```text
Переглянути послуги
Переглянути проєкти
Зв’язатися з нами
Обговорити проєкт
```

---

# 10. Navigation and Header

## 10.1 Header

The existing Header is an approved shared component. It is:

- clean;
- compact;
- sticky on every route;
- separated from the page with a subtle bottom border and white background;
- consistent on every route.

Implemented heights:

```text
Mobile: 76px (`--header-height-mobile: 4.75rem`)
Desktop: 84px (`--header-height-desktop: 5.25rem`)
```

Do not replace these with approximate component-local values. If a height changes intentionally, update the shared token, the mobile navigation offset, and this document together.

## 10.2 Header content

Desktop:

- logo;
- primary navigation;
- one CTA.

Mobile:

- logo;
- menu toggle;
- fixed full-width navigation below the Header;
- clear close button;
- compact menu spacing.

## 10.3 Breakpoint behavior

The approved navigation breakpoint is content-driven and currently implemented at:

```text
58rem / 928px
```

Below it, the menu uses the fixed mobile presentation. At and above it, the logo, navigation, and CTA share one horizontal row. Change this breakpoint only after inspecting the complete Header at intermediate widths; keep the CSS media query and the matching `window.matchMedia()` value synchronized.

## 10.4 Active navigation

Use:

- yellow underline;
- or dark text with a subtle yellow indicator.

Do not use large filled active pills.

---

# 11. Logo

Use the provided SHYBO logo until a revised brand mark is approved.

Rules:

- Keep it visible on every page.
- Do not distort proportions.
- Use a transparent or clean background version when available.
- Do not crop the helmet or company name.
- Provide suitable `alt` text.
- Do not apply decorative filters.
- Keep enough clear space around the logo.

Approved displayed sizing:

```text
Logo symbol: 56px mobile, 64px from 928px
Brand name: 22px mobile, 26px from 928px
```

The logo is intentionally composed from the symbol and live text rather than constrained to one fixed total width. Preserve its intrinsic proportions and existing gap.

---

# 12. Hero section

## 12.1 Purpose

The Hero must answer immediately:

- who the company is;
- what it does;
- what the user can do next.

## 12.2 Structure

The approved homepage Hero uses a split layout from 768px:

```text
Left:
- headline;
- short description;
- primary CTA;
- secondary CTA.

Right:
- large construction photograph.
```

The split is implemented as a 5/7 grid. On narrower screens it stacks into one column with text before the image.

Internal pages use the separate approved `InternalPageHero` pattern described below. Do not force the homepage split layout onto internal pages.

## 12.3 Content limits

Hero should contain:

- one short supporting label at most;
- one headline;
- one short paragraph;
- one or two CTAs.

Avoid:

- long company history;
- statistics without proof;
- multiple badges;
- unnecessary icon rows;
- more than two CTAs.

## 12.4 Hero image

- Use a high-quality real construction image.
- Maintain a professional architectural look.
- Avoid generic stock-photo clichés.
- Use `object-fit: cover`.
- Preserve important building details.
- Use a subtle gradient only if required for readability.

## 12.5 Internal page Hero

`InternalPageHero` is shared by the service index, all 13 service detail pages, projects, about, and contacts. Its approved structure differs from the homepage Hero:

- full-width dark Hero rather than a left/right card layout;
- optional full-bleed image, otherwise the restrained geometric brand graphic;
- dark readability overlay;
- breadcrumb navigation, one H1, and one description inside the shared container;
- no CTA inside this Hero.

Implemented dimensions and content measures:

```text
Minimum height: 352px mobile, 384px from 768px, 416px from 1024px
Content padding: 48px mobile, 64px from 768px
Description measure: 42rem maximum
H1 measure: min(18ch, 100%)
H1 size: clamp(2rem, calc(4vw + 1.2rem), 3.75rem)
```

The H1 must remain left-aligned, use the shared heading weight and line height, and wrap naturally. A width correction made for one long service title must be checked against every route using `InternalPageHero`. Do not add route-specific line breaks or title overrides.

---

# 13. Service cards

## 13.1 Structure

Each service card may contain:

- icon;
- service title;
- one short description;
- navigation arrow or clear link.

## 13.2 Style

Default:

- white background;
- subtle border;
- medium radius;
- generous padding;
- no heavy shadow.

Hover:

```css
transform: translateY(-4px);
box-shadow: var(--shadow-small);
border-color: var(--color-border-strong);
```

## 13.3 Content limits

- Title: 1–2 lines.
- Description: 2–4 short lines.
- Avoid detailed service lists on the homepage.
- On homepage preview sections, show no more than 5–6 service cards at once.
- Detailed service-page work cards follow the dedicated shared rules below and may contain additional confirmed items when they remain concise and scannable.

## 13.4 Icons

- Use one consistent icon set.
- Prefer simple outlined construction icons.
- Use yellow for icon strokes.
- Do not mix outlined and filled icon styles.

---

# 14. Projects section

## 14.1 Homepage project cards

Show only a curated preview.

Each card should primarily contain the image.

Optional:

- project title;
- project category;
- location.

Do not overload cards with descriptions.

## 14.2 Images

Recommended ratios:

```text
Landscape project preview: 4:3 or 16:10
Wide gallery item: 16:9
```

Use consistent cropping.

## 14.3 Interaction

Hover may include:

- slight image scale;
- subtle dark overlay;
- project title reveal.

Keep transitions restrained.

---

# 15. Organizations section

## 15.1 Heading

Use one heading only:

```text
Виконували роботи для
```

Do not add another heading with the same meaning.

## 15.2 Organization names

- Present confirmed organization names as neutral text items.
- Keep typography and cards visually balanced.
- Do not imply partnership, endorsement, or sponsorship.
- Maintain generous horizontal spacing.

Only display organizations for which completed work is confirmed.

Do not display logos without confirmed permission.

---

# 16. CTA section

## 16.1 Purpose

The CTA before the Footer should provide one clear final action.

Recommended content:

```text
Не знайшли потрібну послугу?

Зв’яжіться з нами, і ми підберемо оптимальне рішення для вашого проєкту.

[Зв’язатися з нами]
```

## 16.2 Style

Preferred:

- dark background;
- white text;
- yellow primary button;
- minimal decoration.

A subtle construction image may be used, but it must not reduce readability.

Avoid:

- multiple decorative illustrations;
- repeated helmets, cranes, blueprints, and pipes at once;
- more than one CTA button.

---

# 17. Footer

## 17.1 Structure

Recommended columns:

- logo and short company description;
- navigation;
- services;
- contacts.

A map is optional and should only be added if it provides real value.

## 17.2 Content

Footer should include:

- real company name;
- real contact details;
- navigation;
- copyright;
- privacy link if needed.

Do not use placeholder contacts in production.

## 17.3 Style

- dark background;
- white primary text;
- muted secondary text;
- subtle separators;
- compact spacing.

The Footer should not become a second homepage.

---

# 18. Forms

## 18.1 Controls

Minimum height:

```text
48px
```

Use:

- clear labels;
- visible focus;
- readable placeholders;
- concise validation messages.

## 18.2 Fields

Typical contact form:

- name;
- phone;
- email, optional;
- message;
- consent, if legally required.

Do not ask for unnecessary information.

## 18.3 States

Provide:

- default;
- hover;
- focus;
- error;
- disabled;
- success.

---

# 19. Icons

Preferred approach:

- use one consistent icon library only if needed;
- otherwise use small custom SVG components;
- keep stroke widths consistent;
- use `currentColor`;
- ensure decorative icons are hidden from assistive technologies.

Do not use emoji as production interface icons.

---

# 20. Images

## 20.1 General rules

- Use `next/image`.
- Add meaningful alt text.
- Use correct dimensions.
- Avoid stretching.
- Use modern formats where possible.
- Optimize file size.
- Preserve architectural details.

## 20.2 Photography direction

Preferred:

- real buildings;
- active construction sites;
- completed industrial or residential projects;
- engineers and builders in natural work contexts.

Avoid:

- exaggerated handshakes;
- fake office teams;
- overly staged stock photography;
- low-resolution images;
- obviously AI-generated people in production content.

---

# 21. Motion and interaction

## 21.1 Transition values

```css
:root {
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
}
```

## 21.2 Allowed motion

- button color transition;
- subtle card lift;
- small image zoom;
- mobile menu transition;
- underline or arrow movement.

## 21.3 Avoid

- large parallax effects;
- continuous animation;
- bouncing buttons;
- excessive reveal effects;
- animation that delays content access.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 22. Responsive system

## 22.1 Reference breakpoints

```css
--breakpoint-small: 480px;
--breakpoint-medium: 768px;
--breakpoint-large: 1024px;
--breakpoint-wide: 1280px;
```

These are references, not strict requirements for every component.

Use content-driven breakpoints where appropriate.

## 22.2 Required testing widths

Test at:

```text
320px
375px
480px
768px
1024px
1280px
1440px+
```

## 22.3 Mobile rules

- No horizontal scrolling.
- Minimum comfortable tap area.
- Hero stacks vertically.
- Cards become one column or horizontal scroll only when intentionally designed.
- Section spacing is reduced.
- Typography scales down with `clamp()`.
- CTA buttons may become full width.
- Mobile menu must fit without huge empty gaps.

## 22.4 Tablet rules

Tablet layouts must not look like stretched mobile layouts.

Use:

- 2-column service grids;
- balanced Hero stacking or split layout;
- compact but readable spacing.

---

# 23. Accessibility

Every implementation must include:

- semantic HTML;
- one logical `h1`;
- proper heading hierarchy;
- visible focus states;
- keyboard-accessible menus;
- correct button/link semantics;
- meaningful image alt text;
- sufficient color contrast;
- properly associated labels;
- `aria-expanded` and `aria-controls` for mobile navigation;
- Escape support for overlays where appropriate.

Do not use ARIA when native HTML already solves the problem.

---

# 24. Page structure

## 24.1 Home

Recommended order:

1. Header.
2. Hero.
3. Services.
4. Projects.
5. Trusted companies.
6. CTA.
7. Footer.

Alternative order:

1. Header.
2. Hero.
3. Services.
4. Trusted companies.
5. Projects.
6. CTA.
7. Footer.

Choose one based on content quality.

## 24.2 Services

- clear page intro;
- all services;
- concise details;
- CTA.

## 24.3 Projects

- project grid;
- filters only if genuinely useful;
- real project information;
- CTA.

## 24.4 About

- company story;
- principles;
- capabilities;
- real facts;
- real team or equipment only if available.

## 24.5 Contacts

- contact information;
- form;
- map only if useful;
- operating hours;
- service area.

---

# 25. Shared service detail pages

All 13 routes under `/services/[slug]` use one data-driven page template and one shared visual system. A change to the shared renderer, `InternalPageHero`, service data shape, or service-page CSS affects the complete route set and must be reviewed as such.

## 25.1 Page sequence

Keep this shared order:

1. internal page Hero with breadcrumbs, H1, and concise description;
2. service overview with introduction and compact work summary;
3. grouped service-detail sections;
4. related projects when real matching projects exist;
5. related services;
6. final CTA.

Preserve one H1, logical H2/H3 hierarchy, canonical metadata, Service and BreadcrumbList JSON-LD, and static generation.

## 25.2 Detail sections

Each grouped section uses:

- a large H2 and concise contextual paragraph in the left column;
- compact bordered work cards in the right column;
- the shared container and spacing tokens;
- top alignment between the heading column and card column.

Descriptions should add context rather than repeat every adjacent card title. Do not create extra cards for synonyms, room-by-room applications, or keyword variants. When a section contains one meaningful concept, show one concise card without stretching it to imitate a larger grid.

## 25.3 Card styling

Work cards use the approved shared treatment:

- white background;
- `--border-default`;
- `--radius-small`;
- `--space-5` padding;
- `--space-3` grid gap;
- semibold text;
- a short yellow marker aligned with the first text line;
- content-driven height with no forced equal-height stretching.

Cards are informational, not interactive. Do not add hover elevation, links, icons, or animation unless the content becomes a real action.

## 25.4 Backgrounds and spacing

- The first detail section is white, the second uses `--color-surface`, and the pattern continues by section position.
- The alternation must not reset according to item count or content type.
- Adjacent sections use the shared border as a quiet separator.
- Detail-section vertical padding is 48px below 1024px and 64px from 1024px.
- Do not add page-specific background overrides or arbitrary vertical offsets.

## 25.5 Responsive behavior

- Below 768px, cards use one column.
- From 768px, cards use two columns when more than one card exists.
- Below 1024px, the section order is H2, paragraph, then cards.
- From 1024px, the heading and content form the approved two-column layout and align at the top.
- Long card labels wrap naturally; cards keep content-driven heights.
- Layouts must not overflow at 320px or rely on fixed card heights.

After changing this shared design, inspect all 13 service routes or an equivalently complete automated screenshot set. At minimum include the shortest and longest headings, one-card sections, the densest card grids, routes with related projects, and routes without them.

---

# 26. Anti-patterns

Do not introduce:

- Tailwind CSS;
- mixed styling systems;
- excessive gradients;
- large amounts of yellow text on white;
- duplicate section headings;
- repeated CTA buttons;
- fake statistics;
- fake partners;
- fake reviews;
- heavy shadows;
- excessive rounded corners;
- random breakpoints;
- inconsistent icon styles;
- decorative content that harms readability;
- long blocks of centered text;
- autoplay carousels;
- unnecessary sliders;
- unnecessary dependencies.

---

# 27. Implementation checklist

Before completing any UI task, verify:

- Does it match the shared container?
- Does it use approved colors?
- Is typography consistent?
- Is there only one clear primary action?
- Is yellow used as an accent rather than body text?
- Is spacing from the shared scale?
- Is the component responsive at 320px?
- Is keyboard navigation preserved?
- Is the component using semantic HTML?
- Are images optimized?
- Are there any invented company facts?
- Are `lint`, TypeScript, and production build checks passing?
- Was the rendered UI inspected in a browser at the required widths?
- If browser inspection was unavailable, is visual validation explicitly reported as pending rather than inferred from build success?

---

# 28. Source of truth

This document is the visual source of truth for SHYBO.

Existing design decisions that the user has explicitly reviewed and approved are authoritative. Generic recommendations in this guide must not silently replace those decisions. Reconcile the documentation with the approved implementation unless the user requests a new direction.

When an implementation conflicts with this guide:

1. inspect the current design decision;
2. preserve user-approved choices;
3. update this document if the design direction intentionally changes;
4. avoid silently introducing a new visual style.
