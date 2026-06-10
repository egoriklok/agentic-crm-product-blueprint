# PRD: Universal AI-Native CRM Generator

## 1. Objective

Create a repeatable product blueprint that allows an AI-agent swarm to build a company-specific CRM from a company website, public documentation and optional internal files.

The generated CRM must include:

- company intelligence,
- product/service catalog,
- CRM accounts and contacts,
- sales pipeline,
- client-facing catalog or portal,
- agent orchestration,
- source provenance,
- integrations,
- VPS deployment,
- backup and restore.

## 2. Product Vision

An AI-native CRM factory: given a company URL and business documents, the system produces a deployable CRM tailored to that company, while keeping a reusable architecture across industries.

## 3. Users

- Founder / director.
- Sales team.
- Product manager.
- Operations manager.
- AI agent maintaining enrichment and workflows.
- External client or partner using a catalog/portal.

## 4. Inputs

- Company website.
- Product pages.
- Pricing pages.
- Documentation.
- PDF/DOCX/XLSX files.
- CRM exports if available.
- Brand assets.
- Target geography.
- Sales process requirements.
- Required integrations.

## 5. Output

- Deployable web CRM.
- Database with canonical entities.
- Source registry and data catalog.
- Agent run logs.
- Client-facing public catalog/portal.
- API/MCP layer.
- VPS deployment docs.
- Backup/restore docs.
- Security baseline.

## 6. Data Domains

- Organization profile.
- Products and services.
- Features and use cases.
- Customers/accounts.
- Contacts.
- Leads and opportunities.
- Pipeline stages.
- Activities and tasks.
- Documents and sources.
- Campaigns.
- Support/success tickets.
- Integrations.
- Agent runs.
- Audit events.

## 7. Canonical Entities

Every entity must include:

- stable ID,
- source references,
- confidence score,
- provenance,
- created/updated timestamps,
- owner,
- sensitivity classification,
- version history where needed.

Core entities:

- `Organization`
- `Account`
- `Contact`
- `Product`
- `Feature`
- `Source`
- `Document`
- `Lead`
- `Opportunity`
- `Activity`
- `Task`
- `Segment`
- `Campaign`
- `Ticket`
- `Insight`
- `AgentRun`
- `Integration`
- `AuditEvent`

## 8. Functional Requirements

1. Register a new client from company URL and metadata.
2. Ingest website pages and provided documents.
3. Extract company, product and customer-relevant entities.
4. Deduplicate and map entities to canonical schema.
5. Generate CRM workspace with accounts, contacts, pipeline, tasks and catalog.
6. Generate client-facing catalog/portal when product data exists.
7. Provide agent activity console and approval queue.
8. Expose API/MCP tools for agent workflows.
9. Deploy on VPS using Docker Compose or systemd.
10. Backup and restore all runtime data.

## 9. Non-Functional Requirements

- Tenant isolation if multi-client.
- Secrets outside repository.
- Audit logs for data changes and agent actions.
- Health checks.
- Structured errors.
- Rate limits on public APIs.
- Restore drill documented.
- No generated facts without provenance.

## 10. Acceptance Criteria

- New company can be onboarded from URL + docs.
- Sources are searchable and linked to extracted entities.
- CRM can run locally and on VPS.
- Catalog/portal renders from the same database as CRM.
- API/MCP tools are documented.
- Backups restore successfully.
- Security baseline passes.

