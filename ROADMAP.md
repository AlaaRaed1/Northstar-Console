# Northstar Console Roadmap

This roadmap is a living execution checklist. Every future chat should update this file when feature status changes, scope shifts, or milestones are completed.

## How To Use This File

- Treat each phase as a branchable and reviewable product slice
- Prefer one PR per phase or sub-slice
- Keep checklist items honest
- When a slice is completed, mark it done and add a dated note in the progress log

## Branch And PR Strategy

Recommended branch prefix:

- `codex/foundation-*`
- `codex/auth-*`
- `codex/requests-*`
- `codex/assets-*`
- `codex/settings-*`
- `codex/deploy-*`

Recommended PR style:

- Small enough to review in one sitting
- Each PR should produce a visible product improvement
- Each PR should include roadmap updates

## Milestone 0: Repository Foundation

Suggested branch:

- `codex/foundation-bootstrap`

Suggested commits:

- `chore: scaffold nextjs app on main branch`
- `feat: add app shell and theme foundation`
- `feat: scaffold prisma schema and credentials auth`
- `docs: add product guide and roadmap`

Checklist:

- [x] Initialize repository on `main`
- [x] Scaffold Next.js app
- [x] Add core dependency stack
- [x] Add initial Ant Design shell
- [x] Establish blue theme direction
- [x] Add initial Prisma schema
- [x] Add auth scaffold
- [x] Add core project documentation

## Milestone 1: Local Database And Real Auth

Suggested branch:

- `codex/auth-local-db-setup`

Suggested commits:

- `chore: configure neon env and prisma workflow`
- `feat: implement working credentials auth flow`
- `feat: add protected routing and session-aware shell`

Checklist:

- [ ] Add real local `.env` based on `.env.example`
- [ ] Connect to Neon or local Postgres
- [ ] Create first Prisma migration
- [ ] Run seed successfully
- [ ] Make sign-in work end-to-end
- [ ] Add middleware or route guards
- [ ] Show signed-in user and workspace from session
- [ ] Redirect unauthenticated users correctly

## Milestone 2: Dashboard Data Integration

Suggested branch:

- `codex/dashboard-live-data`

Suggested commits:

- `feat: load dashboard metrics from database`
- `feat: replace static activity feed with live data`
- `refactor: centralize overview queries`

Checklist:

- [ ] Replace static dashboard metrics with live queries
- [ ] Replace static request inbox preview with live records
- [ ] Replace static activity panel with live audit data
- [ ] Add loading and empty states
- [ ] Add error handling for overview queries

## Milestone 3: Requests Module V1

Suggested branch:

- `codex/requests-list-and-detail`

Suggested commits:

- `feat: add requests list page`
- `feat: add request detail view and timeline`
- `feat: add create request flow`

Checklist:

- [ ] Create `/requests` route
- [ ] Render requests data table
- [ ] Add search, status filter, and pagination
- [ ] Add request detail page or drawer
- [ ] Add create request form
- [ ] Add edit request flow
- [ ] Add due date and priority support
- [ ] Add comments or timeline events
- [ ] Add request validation with Zod

## Milestone 4: Request Workflow Actions

Suggested branch:

- `codex/requests-workflow-actions`

Suggested commits:

- `feat: add request status transitions`
- `feat: add assignment and review actions`
- `feat: log request workflow audit events`

Checklist:

- [ ] Add approve action
- [ ] Add reject action
- [ ] Add move to in-review action
- [ ] Add assignee updates
- [ ] Add permission-aware actions
- [ ] Add audit log writes for workflow changes
- [ ] Add success and failure feedback states

## Milestone 5: Assets Module V1

Suggested branch:

- `codex/assets-core-module`

Suggested commits:

- `feat: add assets list page`
- `feat: add asset create and edit flows`
- `feat: add low stock visual states`

Checklist:

- [ ] Create `/assets` route
- [ ] Render assets data table
- [ ] Add search and category filters
- [ ] Add stock status filters
- [ ] Add create asset form
- [ ] Add edit asset flow
- [ ] Add asset detail view
- [ ] Add low-stock indicators
- [ ] Add asset validation with Zod

## Milestone 6: Assets Bulk Actions And Inventory UX

Suggested branch:

- `codex/assets-bulk-actions`

Suggested commits:

- `feat: add bulk asset actions`
- `feat: add inventory summary states`
- `refactor: improve asset table ergonomics`

Checklist:

- [ ] Add row selection
- [ ] Add bulk archive or status update
- [ ] Add quantity adjustment flow
- [ ] Add summary panels for stock health
- [ ] Add audit log writes for asset changes

## Milestone 7: Team, Roles, And Settings

Suggested branch:

- `codex/settings-and-memberships`

Suggested commits:

- `feat: add workspace settings page`
- `feat: add member management and role editing`
- `feat: add account profile surface`

Checklist:

- [ ] Create `/settings` route
- [ ] Show workspace details
- [ ] List members and roles
- [ ] Add role update flow
- [ ] Add invite placeholder or invite flow
- [ ] Add account/profile section
- [ ] Enforce owner/admin-only actions

## Milestone 8: Audit Log And Activity Center

Suggested branch:

- `codex/audit-and-activity-center`

Suggested commits:

- `feat: add audit log index page`
- `feat: add entity activity timeline reuse`
- `refactor: normalize audit event formatting`

Checklist:

- [ ] Create audit log route or panel
- [ ] Add filters by entity type and actor
- [ ] Add reusable activity timeline component
- [ ] Show per-entity audit history
- [ ] Improve audit summaries for readability

## Milestone 9: UX Hardening

Suggested branch:

- `codex/ux-hardening`

Suggested commits:

- `feat: add loading empty and error states`
- `feat: add success toasts and optimistic interactions`
- `refactor: improve responsive app shell behavior`

Checklist:

- [ ] Add polished loading states
- [ ] Add polished empty states
- [ ] Add polished error states
- [ ] Add toast feedback patterns
- [ ] Improve mobile and tablet behavior
- [ ] Improve keyboard and focus flows
- [ ] Review accessibility for forms and tables

## Milestone 10: Tests And Reliability

Suggested branch:

- `codex/tests-and-reliability`

Suggested commits:

- `test: add auth and dashboard coverage`
- `test: add requests flow coverage`
- `test: add smoke e2e for core routes`

Checklist:

- [ ] Add unit tests for key helpers
- [ ] Add component tests for important UI
- [ ] Add auth smoke coverage
- [ ] Add dashboard smoke coverage
- [ ] Add requests smoke coverage
- [ ] Add assets smoke coverage
- [ ] Add CI-friendly test scripts

## Milestone 11: Deployment And Production Readiness

Suggested branch:

- `codex/deploy-production-readiness`

Suggested commits:

- `chore: configure vercel and production env docs`
- `feat: finalize deployment workflow`
- `docs: add production setup instructions`

Checklist:

- [ ] Finalize Neon production setup
- [ ] Finalize Vercel env vars
- [ ] Ensure Prisma migrations are production-safe
- [ ] Add deploy documentation
- [ ] Run final production build verification
- [ ] Confirm first live deployment

## Milestone 12: Post-V1 Enhancements

Suggested branch:

- `codex/post-v1-enhancements`

Suggested commits:

- `feat: add saved views and advanced filters`
- `feat: add csv import export`
- `feat: prepare oauth and notifications extensions`

Checklist:

- [ ] Saved table views
- [ ] Advanced filters
- [ ] CSV import
- [ ] CSV export
- [ ] Notification preferences
- [ ] OAuth upgrade path
- [ ] Additional analytics views

## Progress Log

- [2026-05-08] Repository foundation is in place with app shell, blue theme, dashboard starter UI, Prisma 7 starter schema, credentials auth scaffold, and core product docs.

