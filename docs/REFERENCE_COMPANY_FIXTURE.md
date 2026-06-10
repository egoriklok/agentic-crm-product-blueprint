# Reference Company Fixture

Use this fixture to test a generated CRM without private data.

## Input

- Company URL: `https://example.com`
- Company name: `Example Office Snacks`
- Target region: `Example City`
- Provided docs: one product PDF, one pricing CSV, one sales-process note.

## Expected Canonical Data

- 1 organization.
- 3 sources.
- 5 products.
- 3 account segments.
- 5 sample accounts.
- 5 contacts.
- 3 opportunities.
- 1 agent run for source extraction.
- audit events for every generated mutation.

## Expected CRM Modules

- dashboard;
- accounts;
- contacts;
- pipeline;
- product catalog;
- client portal;
- agent task queue;
- approval queue;
- backup/restore runbook.
