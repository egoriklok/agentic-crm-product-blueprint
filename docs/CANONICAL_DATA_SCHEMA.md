# Canonical Data Schema

The generated CRM must use a canonical dataset before UI generation. The machine-readable contract is `schemas/canonical_crm.schema.json`.

## Required Entity Families

- `Organization`: the company being modeled.
- `Source`: URLs, files, APIs, notes and databases used for extraction.
- `Product`: products, services, bundles or catalog items.
- `Account`: target/customer companies.
- `Contact`: people or public contact points connected to accounts.
- `Opportunity`: sales pipeline objects.
- `AgentRun`: agent task execution and review state.
- `AuditEvent`: mutation and approval history.

## Required Metadata

Every generated entity must include:

- stable ID;
- source IDs;
- confidence score;
- sensitivity classification;
- timestamps;
- review state where the value can affect customers, pricing, compliance or outreach.

## Tenant Boundary

Each company-specific CRM generated from this blueprint must define whether it is single-tenant or multi-tenant before data ingestion begins.
