# AI Agent Instructions

You are using this repository to create a company-specific AI-native CRM from public and provided data.

## Required Process

1. Read `PRD.md`.
2. Collect client inputs using `docs/CLIENT_INTAKE_TEMPLATE.md`.
3. Build the canonical data model before UI work.
4. Preserve provenance for every generated field.
5. Use human approval gates for external writes, outreach, payments, deletion and production deployment.
6. Keep secrets outside Git.
7. Produce a deployment and backup runbook for the generated CRM.

## Do Not

- Do not scrape private or authenticated sources without explicit authorization.
- Do not invent company facts without source provenance.
- Do not commit `.env`, customer data dumps, tokens or private documents.
- Do not deploy without health checks and rollback instructions.

