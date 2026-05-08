# Northstar Console Project Guide

This document is the source of truth for what Northstar Console is, how it should feel, what it should include, and how future work should be shaped. Any future chat working on this repository should read this first and stay aligned with it.

## Product Summary

Northstar Console is a full-stack operations dashboard for internal teams. It is built as a multi-tenant, role-aware system for handling requests, assets, approvals, activity history, and workspace-level operational visibility.

The app should feel like a serious product, not a demo. It should support dense workflows, real data, permissioned actions, and the kind of interactions you expect in an internal tool used daily by operations, admin, logistics, procurement, and leadership teams.

## Product Goals

- Build a deployable full-stack application using modern Next.js patterns.
- Showcase strong frontend engineering through polished data-heavy UI, state handling, and resilient UX.
- Keep the codebase organized enough that multiple chats can continue work without drifting.
- Ship in believable product slices that can be committed, pushed, and reviewed independently.
- Maintain a professional Git history that reads like real iterative product development.

## Core Product Shape

Northstar Console should include these main areas:

- Authentication and protected app access
- Workspace-aware multi-tenant structure
- Role-based access control
- Overview dashboard
- Requests workflow module
- Assets management module
- Audit log and activity history
- Settings and workspace administration
- Deployment and production readiness

## Primary Users

- Workspace Owner: full control over users, settings, and approvals
- Workspace Admin: manages operations, requests, assets, and reporting
- Team Member: submits requests, views assigned data, and performs allowed actions

## Core Features

### Authentication

- Credentials-based sign-in for v1
- Protected routes
- Session-aware UI
- Future-friendly auth structure so OAuth can be added later without a rewrite

### Multi-Tenancy

- Users belong to one or more workspaces
- Workspace membership defines role
- Data must always be scoped by workspace
- Workspace context should be visible in the UI

### Requests Module

- Requests list page with filters, search, sorting, pagination, and status tabs
- Create request flow
- Edit request flow
- Request detail page or drawer
- Status workflow: draft, submitted, in review, approved, rejected
- Comments or activity timeline on each request
- Assignee support
- Priority support
- SLA or due date support

### Assets Module

- Assets list page with dense table UX
- Filters by category, stock status, and search
- Asset details view
- Create and edit flows
- Quantity and status management
- Low-stock indicators
- Bulk actions in later phase

### Dashboard

- KPI summary cards
- Recent requests snapshot
- Recent activity feed
- Attention-needed or anomaly panel
- Fast entry points into main workflows

### Audit and Activity

- Audit trail for important mutations
- User-facing activity feed for major events
- Per-entity history on requests and assets

### Settings

- Workspace info
- Team and role management
- Basic account/profile area
- Future place for notification preferences and integrations

## Design Direction

The visual style must remain modern, sleek, structured, and calm. It should feel expensive and intentional without becoming flashy.

### Design Principles

- Built for repeated use, not for a marketing first impression
- Dense enough for serious work, but not cramped
- Strong information hierarchy
- Clear visual states for status, priority, and health
- Elegant surfaces, restrained motion, and polished spacing
- Minimal clutter and no default-template feel

### Current Theme Direction

- Blue-led palette with a modern cobalt and sky-blue range
- Soft glass-like light surfaces over a cool atmospheric background
- Deep navy sidebar and shell framing
- Rounded but controlled corners
- Blue-tinted shadows rather than muddy gray or warm brown shadows

### UI Expectations

- Ant Design is the component system, but the result should not look like stock Ant Design
- Tables should feel premium and readable
- Forms should feel clean, spacious, and deliberate
- Empty, loading, success, and error states should be styled, not ignored
- Mobile support matters, but desktop ergonomics come first because this is an internal tool

## Engineering Direction

### Frontend

- Next.js App Router
- React 19
- TypeScript strict mode
- Server components by default
- Client components only where interaction demands them
- Ant Design v6
- TanStack Query for client-side server state where useful
- Zod for shared validation
- Zustand for local UI state when needed

### Backend

- Next.js route handlers for v1 backend endpoints
- Prisma ORM
- PostgreSQL on Neon for production
- NextAuth credentials auth for v1
- Workspace-scoped queries and service functions

### Quality

- ESLint
- TypeScript typecheck
- Vitest for unit and component coverage
- Playwright for smoke and key flow testing
- Production build must stay green after each meaningful slice

## Non-Goals For Early Phases

- Do not add every possible enterprise feature immediately
- Do not over-abstract prematurely
- Do not introduce three different state management patterns for the same problem
- Do not optimize for OAuth/integrations before the core product loop works
- Do not let the app become a generic admin template

## Repository Working Rules

Future chats working in this repo should follow these rules:

- Read this file and `ROADMAP.md` before making directional changes
- Update the roadmap checklist whenever a feature status changes
- Keep work grouped into realistic feature slices
- Prefer one branch per slice and one PR per coherent milestone
- Do not collapse many unrelated features into one commit
- Preserve the current product identity and design direction unless explicitly changed

## Definition Of Done For A Feature Slice

A feature slice is done when:

- The feature works end-to-end in the local app
- Types and lint pass
- Build passes
- The roadmap checklist is updated
- The feature behavior matches this guide
- Any meaningful product or architecture decisions are reflected in docs

## Current State

As of now, the repository already has:

- Next.js app scaffold
- App shell foundation
- Blue theme foundation
- Dashboard starter UI
- Credentials auth scaffold
- Prisma schema starter
- Seed script starter

These are foundations, not final feature-complete implementations.

## How Future Chats Should Use This Document

Before implementing work:

- Read the product summary, core features, design direction, and engineering direction
- Check `ROADMAP.md` for the next highest-priority unchecked slice
- Keep the roadmap updated as part of the same change

After implementing work:

- Update the relevant checklist items in `ROADMAP.md`
- Add a brief note to the progress log in `ROADMAP.md` if the milestone meaningfully changed direction

