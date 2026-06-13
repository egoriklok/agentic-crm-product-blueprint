# Agentic CRM Product Blueprint

Universal PRD and implementation blueprint for building an AI-native CRM for any company and product from:

- a company website URL,
- public documentation,
- internal files if provided,
- and this repository.

The target user is another AI agent or AI-agent swarm that must reproduce a CRM similar in capability to the Lunch Up CRM, but for a different business domain.

## What This Repo Contains

- `PRD.md` - product requirements for the generalized CRM.
- `docs/IMPLEMENTATION_BLUEPRINT.md` - architecture, data model and deployment plan.
- `docs/AI_SWARM_PLAYBOOK.md` - agent roles and workflow.
- `docs/CLIENT_INTAKE_TEMPLATE.md` - input checklist for a new company.
- `AGENTS.md` - operating instructions for AI agents.
- `agent-swarm.manifest.json` - machine-readable first file for future AI agents.
- `schemas/canonical_crm.schema.json` - canonical CRM dataset schema.
- `mcp/manifest.json` - planned MCP/API resources and tools.
- `evals/blueprint-readiness.scenarios.json` - readiness scenarios.
- `landing/` - public RouteOps CRM monetization landing page.
- `docs/MONETIZATION_PLAYBOOK.md` - client-meeting playbook with offer, ICP, pricing, unit economics, CJM and JTBD.
- `docs/RU_SALES_SUBAGENTS.md` - two Russian-speaking commercial review subagents: buyer comprehension and seller/marketing.

## Public Monetization Demo

RouteOps CRM is the clean public commercial packaging of this blueprint. It is positioned for companies that need a repeat-order B2B sales channel with CRM, catalog inside Telegram, lead base, commercial offers and manager follow-up control.

- Demo landing page: <https://egoriklok.github.io/agentic-crm-product-blueprint/>
- Sales playbook: [`docs/MONETIZATION_PLAYBOOK.md`](docs/MONETIZATION_PLAYBOOK.md)
- Russian sales subagents: [`docs/RU_SALES_SUBAGENTS.md`](docs/RU_SALES_SUBAGENTS.md)
- Local preview: open [`landing/index.html`](landing/index.html) in a browser.

The landing intentionally does not include private customer data, proprietary catalogs, live keys or third-party brand claims.

## Agent Readiness Check

```bash
npm run verify
npm run landing:verify
```

This validates manifest, contracts, schema, MCP manifest, eval scenarios, guardrail docs, the monetization landing, the sales playbook and basic secret patterns.

## Expected Output for a New Company

1. Company-specific CRM.
2. Client-facing catalog or knowledge portal.
3. Web app / mini app surface where applicable.
4. Canonical database.
5. Source provenance and enrichment pipeline.
6. Deployment package for VPS.
7. Backup and restore runbook.
8. Agent-ready documentation.
