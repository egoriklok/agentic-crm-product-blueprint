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
10. Deployment.
11. Backup and restore drill.
12. Handoff.

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

