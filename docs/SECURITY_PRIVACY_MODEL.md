# Security And Privacy Model

This public repo is a blueprint. It must not contain private company data, customer data, tokens or deployment secrets.

## Data Classes

- `public`: company website facts and public marketing copy.
- `internal`: generated CRM configuration and non-sensitive process docs.
- `confidential`: private company documents, pricing files and strategy.
- `pii`: personal contacts, phone numbers, emails and customer records.

## Rules

- Public blueprint repo stores templates only.
- Company-specific datasets go to private repos or databases.
- Secrets live in runtime environment variables or secret managers.
- Every external write requires human approval.
- Audit events are required for agent writes and approval decisions.

## Tenant Isolation

Multi-company deployments must isolate tenant data at database, API and storage levels.
