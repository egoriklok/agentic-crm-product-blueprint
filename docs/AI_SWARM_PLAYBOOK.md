# AI Swarm Playbook

## Agent Roles

- Discovery Agent: reads website/docs and describes business model.
- Ingestion Agent: collects source pages/files and registers provenance.
- Schema Mapper Agent: maps extracted facts to canonical CRM entities.
- Entity Resolution Agent: deduplicates organizations, contacts and products.
- Enrichment Agent: fills gaps and scores confidence.
- Catalog Agent: builds product/service catalog and client-facing portal.
- CRM Architect Agent: selects modules and configures pipeline.
- Workflow Agent: creates tasks, follow-ups and sales/support workflows.
- QA Agent: validates schema, links, smoke tests and data completeness.
- Security Agent: checks secrets, permissions and sensitive data.
- Deployment Agent: prepares VPS deployment and health checks.
- Backup Agent: validates backup and restore.
- agents-human-customer-bp: reviews sales pages as a Russian-speaking non-technical B2B buyer who does not know English.
- agents-seller-marketing-guru-ru: reviews offer, pricing, objections, meeting script and KPI for Russian-speaking B2B sales.

## Workflow

1. Intake and source registration.
2. Crawl/import.
3. Raw source storage.
4. Entity extraction.
5. Canonical mapping.
6. Human review of low-confidence fields.
7. CRM generation.
8. Catalog/portal generation.
9. Integration setup.
10. Russian buyer comprehension review with `agents-human-customer-bp`.
11. Russian seller/marketing review with `agents-seller-marketing-guru-ru`.
12. Deployment.
13. Backup and restore drill.
14. Handoff.

## Russian Sales Review Loop

Use this loop before publishing a public landing page, commercial offer or meeting script:

1. `agents-human-customer-bp` checks whether the target buyer understands the page without English or technical background.
2. `agents-seller-marketing-guru-ru` checks whether the offer can be sold in a Russian-speaking B2B meeting.
3. The main builder applies copy and structure changes.
4. QA verifies that the public material has no private data, live keys, unapproved brand claims or unsupported company facts.

Detailed instructions live in `docs/RU_SALES_SUBAGENTS.md`.

## Human Approval Gates

Approval is required before:

- external outreach,
- sending emails/messages,
- production deployment,
- deleting data,
- changing secrets,
- enabling paid APIs,
- publishing public pages,
- importing private data.

## QA Gates

- Build passes.
- Type checks pass.
- Health endpoint returns 200.
- No `.env` or tokens in repo.
- Source provenance present.
- Backup exists.
- Restore procedure tested.
