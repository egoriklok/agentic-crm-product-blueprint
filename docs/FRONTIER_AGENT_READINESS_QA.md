# Frontier Agent Readiness Q&A

## What should the owner have asked for?

Ask:

> Prepare this repo so a frontier LLM or AI-agent swarm can generate a safe company-specific CRM from a company URL and documents. Add machine-readable schemas, source provenance contracts, orchestration contracts, MCP/API manifest, eval scenarios, guardrails and a verification script.

## What is the core answer?

The repo must become self-describing for agents. Human prose is not enough. The agent needs:

- `agent-swarm.manifest.json` as the first file to read;
- JSON Schema for the canonical CRM dataset;
- source provenance rules;
- ingestion pipeline rules;
- orchestration state machine and approval gates;
- MCP/API tool manifest;
- eval scenarios;
- security/privacy model;
- a repeatable readiness check.

## What did we implement?

This repo now includes all of those artifacts and validates them with:

```bash
npm run verify
```

## What should future agents not do?

They must not place company secrets, private customer data or unverified claims into this public blueprint repo. Company-specific generated CRMs must live in separate private repos or controlled deployments.
