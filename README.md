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

## Agent Readiness Check

```bash
npm run verify
```

This validates manifest, contracts, schema, MCP manifest, eval scenarios, guardrail docs and basic secret patterns.

## Expected Output for a New Company

1. Company-specific CRM.
2. Client-facing catalog or knowledge portal.
3. Web app / mini app surface where applicable.
4. Canonical database.
5. Source provenance and enrichment pipeline.
6. Deployment package for VPS.
7. Backup and restore runbook.
8. Agent-ready documentation.
