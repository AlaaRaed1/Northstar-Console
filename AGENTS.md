<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, build behavior, and file structure may differ from older training data. Read the relevant guide in `node_modules/next/dist/docs/` before making framework-level assumptions, and pay attention to deprecations or app-router constraints surfaced by the build.
<!-- END:nextjs-agent-rules -->

# Northstar Console Agent Rules

This file is the repository-level instruction set for Codex and any future AI chat working in this project. Read and follow it before making product, code, architecture, or git decisions.

## Source Of Truth

Always align work with these repo documents:

- `PROJECT_GUIDE.md`
- `ROADMAP.md`
- `README.md`

If a future chat proposes work that conflicts with those files, update the docs first or explicitly confirm the change in direction before implementing it.

## Product Direction

Northstar Console is a serious internal operations dashboard. It must not drift into a generic admin template, a landing page, or a toy demo.

The product direction is:

- Full-stack Next.js application
- Multi-tenant and workspace-aware
- Role-aware and permission-aware
- Built around requests, assets, auditability, and operational visibility
- Designed for real daily use by internal teams

## Design Direction

The UI must remain aligned with the current product style:

- Modern, sleek, calm, and structured
- Blue-led visual system
- Premium-feeling dense interface for internal workflows
- Ant Design foundation, but not stock Ant Design appearance
- Strong tables, forms, shell navigation, states, and hierarchy

Do not introduce a new design direction casually. If the palette, visual language, or product framing changes materially, update `PROJECT_GUIDE.md`.

## Required Workflow

Every future chat should follow this workflow:

1. Read `PROJECT_GUIDE.md` and `ROADMAP.md`.
2. Identify the next appropriate milestone or checklist slice.
3. Keep work scoped to one realistic feature slice.
4. Update `ROADMAP.md` when statuses change.
5. If product or architectural direction changes, update `PROJECT_GUIDE.md`.
6. Keep commits and PRs believable, focused, and reviewable.

## Branch Naming Rules

Use this branch schema exactly:

- `feat/{featName}`
- `fix/{short-fix-desc}`
- `chore/{chore-desc}`

Examples:

- `feat/auth-local-db-setup`
- `feat/requests-list-page`
- `fix/sign-in-redirect-loop`
- `chore/add-project-docs`

Do not use the default `codex/*` branch naming pattern in this repository unless the user explicitly asks for it.

## Commit And PR Rules

Git history should look authentic, steady, and organized.

Rules:

- Prefer multiple small, real commits over one giant dump
- Each commit should represent a coherent step
- Each branch should map to one feature slice or tightly related slice
- Each PR should be understandable in one review sitting
- Update roadmap checklists in the same branch as the feature work
- Avoid mixing unrelated features in one PR

Preferred commit style:

- `feat: add requests list page`
- `feat: implement credentials auth flow`
- `fix: correct sign-in callback redirect`
- `chore: add prisma environment setup docs`
- `docs: update roadmap for dashboard milestone`

## Documentation Rules

Documentation is part of the product workflow, not an afterthought.

Always do the following:

- Keep `ROADMAP.md` updated as features progress
- Keep `PROJECT_GUIDE.md` aligned with current product direction
- Keep `README.md` useful for setup and orientation
- Record meaningful milestone completion in the roadmap progress log

When a feature is completed, the relevant roadmap checklist items should be marked complete in the same branch.

## Technical Rules

### Framework And Architecture

- Use Next.js App Router
- Prefer server components by default
- Use client components only when interaction requires them
- Keep backend logic in route handlers or server-side service layers
- Keep validation explicit with Zod where relevant
- Keep workspace scoping explicit in backend and data access

### Data And Auth

- Prisma is the ORM
- PostgreSQL is the database target
- NextAuth credentials auth is the v1 auth path
- Prisma 7 setup must follow the current config model already established in this repo
- Do not reintroduce outdated Prisma datasource URL patterns in the schema

### UI And Styling

- Use Ant Design as the component base
- Reuse the shared theme configuration instead of one-off styling when possible
- Preserve the blue-led theme direction
- Build polished loading, empty, success, and error states
- Favor serious internal-tool ergonomics over decorative layout experiments

### Quality Gates

Before treating a slice as done, run the relevant checks:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

When relevant, also add or run:

- `npm run test`
- `npm run test:e2e`

Do not leave the branch in a red or knowingly broken state if it can be avoided.

## Scope Control Rules

To keep the repository history believable and useful:

- Do not implement the whole product in one go
- Do not silently expand scope far beyond the current milestone
- Prefer milestone-sized progress over “finish everything now” behavior
- If a task belongs to a later milestone, note it in the roadmap instead of sneaking it into the current branch

## Done Criteria

A feature slice is considered done when:

- The implementation works locally
- It matches the current product direction
- The roadmap checklist is updated
- Lint, typecheck, and build pass
- Any new important direction is reflected in docs

## Repo-Specific Reminder

This repository is intentionally being built to show realistic professional progress over time. Future chats should optimize for maintainable momentum, coherent commits, and clean PR boundaries, not maximum one-shot output.
