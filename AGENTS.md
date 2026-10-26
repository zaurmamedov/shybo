<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Shybo project instructions

## Project overview

Shybo is a corporate website for a construction company.

The project is a public informational website. It does not require authentication, an admin panel, a database, a personal account, online payment, or e-commerce functionality.

Before implementing a large feature, read `README.md` and inspect the existing project structure.

## Communication

* Communicate with the user in Ukrainian.
* Write all visible website content in Ukrainian unless explicitly instructed otherwise.
* Explain important architectural decisions before making substantial structural changes.
* Do not silently replace the chosen stack or introduce a new architecture.

## Technology stack

Use:

* Next.js App Router;
* React;
* TypeScript;
* CSS Modules;
* standard CSS;
* `next/image`;
* `next/font`;
* ESLint.

Do not use unless explicitly requested:

* Tailwind CSS;
* styled-components;
* Sass/SCSS;
* Redux;
* Zustand;
* Supabase;
* Firebase;
* Prisma;
* databases;
* authentication libraries;
* large UI component libraries.

Do not install a package when the same result can reasonably be achieved with the existing stack or a small reusable component.

## Next.js rules

* Follow the documentation bundled with the installed Next.js version.
* Use the App Router.
* Prefer Server Components.
* Add `"use client"` only when browser APIs, state, effects, event handlers, or client-side interactivity are actually required.
* Do not turn an entire page into a Client Component when only one nested interactive component requires it.
* Use `next/link` for internal navigation.
* Use `next/image` for content images whenever appropriate.
* Use the Metadata API for page metadata.
* Keep static content statically renderable.
* Do not add API routes unless the requested functionality requires them.

## Project architecture

Use this general structure:

```text
src/
├── app/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
├── styles/
├── types/
└── utils/
```

Follow these rules:

* `app/` contains routes, layouts, metadata, and route-specific files.
* `components/layout/` contains shared structural components such as Header, Footer, Container, and Navigation.
* `components/sections/` contains larger page sections such as Hero, Services, Projects, Benefits, FAQ, and ContactSection.
* `components/ui/` contains small reusable UI components such as Button, Logo, SectionTitle, Icon, and Input.
* `data/` contains static structured content such as services, projects, reviews, and FAQ items.
* `types/` contains shared TypeScript types.
* `styles/` contains global variables, resets, typography, and other genuinely shared styles.

Do not create unnecessary abstraction layers or deeply nested directories.

## Component rules

* Use functional components.
* Use named exports for reusable components.
* Keep components focused on one responsibility.
* Split a component when it becomes difficult to read or contains several independent sections.
* Do not split trivial markup into unnecessary tiny components.
* Define explicit TypeScript types for component props.
* Avoid `any`.
* Avoid duplicating markup and styles.
* Prefer data-driven rendering for repeated cards, services, projects, reviews, and FAQ items.
* Keep page files readable and compose pages from section components.

Preferred component structure:

```text
ComponentName/
├── ComponentName.tsx
└── ComponentName.module.css
```

Use an `index.ts` export file only when it improves imports and does not add unnecessary complexity.

## Styling rules

* Use CSS Modules for component and page styles.
* Use `src/app/globals.css` only for global rules.
* Put shared CSS custom properties in a dedicated global variables file.
* Do not place all project styles in one file.
* Do not use inline styles except for truly dynamic values.
* Use semantic class names.
* Prefer CSS custom properties for repeated colors, spacing, container widths, transitions, and typography values.
* Avoid excessive fixed heights.
* Avoid absolute positioning for primary page layout.
* Do not solve responsiveness only for a few screenshots; layouts must work continuously between breakpoints.
* Prevent accidental horizontal scrolling at 320 px and wider.
* Preserve visible keyboard focus states.
* Respect `prefers-reduced-motion` when adding animations.

## Responsive design

The website must work at widths including:

* 320 px;
* 375 px;
* 480 px;
* 768 px;
* 1024 px;
* 1280 px;
* larger desktop screens.

Use a mobile-first approach when practical.

After changing layout or styles, check:

* no horizontal overflow;
* readable typography;
* comfortable button sizes;
* correct image scaling;
* working navigation;
* appropriate spacing;
* correct stacking of sections and cards.

## Typography and text wrapping

- Treat typography as part of responsive layout quality, not merely as text styling.
- Use the shared font, type-scale tokens, font weights, and line-height tokens; do not introduce page-specific heading scales without an approved design reason.
- Review visual line breaks in H1, H2, H3, navigation labels, buttons, and prominent text blocks.
- Avoid visually awkward heading wraps, including isolated short words on the final line, whenever reasonably preventable.
- Do not introduce forced line breaks to solve a problem at one viewport width if they cause problems at other widths.
- Prefer responsive font sizing, appropriate text container widths, balanced text wrapping, and natural Ukrainian phrasing.
- Use CSS features such as `text-wrap: balance` where appropriate, with sensible fallbacks.
- Do not arbitrarily shorten meaningful headings or remove important SEO terminology solely to improve wrapping.
- Check heading readability and wrapping at all supported viewport widths and between breakpoints.
- Avoid overly narrow text containers combined with oversized typography.
- Ensure headings remain visually balanced without compromising accessibility or semantic structure.

## Shared page and component consistency

- Pages that share the same template must follow one consistent visual design system.
- Reuse shared layout components, spacing, typography, card styles, and responsive rules.
- Do not introduce alternative visual patterns for the same content type without a clear design reason.
- When changing a shared component, review every route that uses it.
- Before editing shared components or shared styles, identify all importing components and affected routes. Review the complete affected route set after the change, not only the page where the issue was first reported.
- For data-driven pages, test representative content extremes: shortest title, longest title, fewest items, most items, and longest descriptions.
- Ensure alternating section backgrounds, spacing, alignment, and card appearance remain consistent.
- Avoid unnecessary empty space, oversized cards, and inconsistent content alignment.
- Do not add filler content solely to make a layout appear balanced.

## Visual validation and definition of done

- Passing ESLint, TypeScript, and production build checks does not establish visual correctness.
- Static HTML inspection and source-code review also do not establish visual correctness.
- For UI changes, inspect the actual rendered result in a browser whenever browser access is available.
- Check representative pages at 320, 375, 480, 768, 1024, 1280, and 1440 px.
- Review heading wrapping, text overflow, card alignment, spacing, image scaling, section transitions, and navigation.
- Check intermediate widths when layout behavior suggests a potential breakpoint issue.
- When a shared component changes, inspect every affected route or perform an equivalent comprehensive visual audit.
- Use browser automation or screenshots when available, but do not claim visual validation without actually performing it.
- Visual validation means inspecting the rendered UI at the relevant viewport sizes, including wrapping, overflow, alignment, spacing, and interactive states affected by the change.
- If browser access is unavailable, perform static CSS and component checks, explicitly report the limitation, and mark visual validation as pending.
- Do not describe a UI task as fully visually verified when browser inspection was not performed.
- Do not silently substitute successful build checks for visual testing.
- In the final report, clearly distinguish automated checks, static code review, and actual browser-based visual validation.

## Accessibility

* Use semantic HTML elements.
* Use real buttons for actions and links for navigation.
* Every meaningful image must have useful `alt` text.
* Decorative images should use an empty `alt`.
* Form controls must have associated labels.
* Interactive elements must be keyboard accessible.
* Maintain sufficient text and control contrast.
* Do not remove focus outlines without providing a visible replacement.
* Use ARIA only where native semantic HTML is insufficient.

## SEO

* Use one clear `h1` per page.
* Maintain a logical heading hierarchy.
* Add unique metadata to every public page.
* Write meaningful page titles and descriptions.
* Use semantic content rather than text embedded in images.
* Add `robots.ts` and `sitemap.ts`.
* Prepare Open Graph metadata.
* Use descriptive internal links.
* Use descriptive image filenames and alt text.
* Avoid duplicate placeholder content.
* Keep the site fast and statically renderable wherever possible.

## Content rules

* Do not invent factual company information, experience, prices, addresses, certificates, guarantees, project counts, customer reviews, or contact details.
* Use clearly marked placeholders when real information has not been provided.
* Do not present placeholder reviews as real customer reviews.
* Keep Ukrainian text natural and professional.
* Avoid generic SEO keyword stuffing.
* Preserve the company tone: professional, reliable, clear, and modern.

## Forms

Until a form submission method is explicitly selected:

* build only the interface and client-side validation;
* do not pretend that submissions are being sent;
* clearly identify unfinished submission behavior;
* do not add a database;
* do not expose secrets in client-side code.

## Code quality

Before considering a task complete:

1. Review all changed files.
2. Remove unused imports and dead code.
3. Check TypeScript types.
4. Run:

```bash
npm run lint
npm run build
```

5. Fix errors caused by the changes.
6. Report what was changed and whether the checks passed.

Do not claim that a command passed unless it was actually run successfully.

## Change discipline

* Make focused changes related to the current task.
* Do not rewrite unrelated parts of the project.
* Do not rename or move many files without a clear reason.
* Preserve working functionality.
* Check existing components before creating duplicates.
* Reuse established patterns already present in the repository.
* Do not modify dependencies, configuration, or global styles without explaining why.
* Never delete user-created content merely because it appears unused without first verifying its purpose.

## Git rules

* Do not commit or push changes unless explicitly requested.
* Never use destructive Git commands such as `git reset --hard`, force push, or deleting branches unless explicitly instructed.
* Do not overwrite unrelated uncommitted changes.
* Suggest a concise commit message after completing a meaningful feature.

## Task workflow

For a small task:

1. Inspect the relevant files.
2. Implement the focused change.
3. Run the appropriate checks.
4. Summarize the result.

For a large task:

1. Inspect the repository and existing conventions.
2. Present or create a short implementation plan.
3. Implement the work in logical stages.
4. Validate each stage.
5. Run lint and production build.
6. Summarize changed files, decisions, and any remaining work.

Do not generate the entire website in one uncontrolled pass unless explicitly asked to do so.

Before implementing or modifying UI, read `docs/design-system.md`.

Before writing or changing visible website content, read `docs/content-guide.md`.

Treat these files as the source of truth for visual design and content style.
