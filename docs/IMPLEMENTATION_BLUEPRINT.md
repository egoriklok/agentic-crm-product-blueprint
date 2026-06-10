# Implementation Blueprint

## Architecture Layers

1. Source layer: website crawler, file importer, API connectors.
2. Ingestion layer: fetch, parse, normalize, deduplicate.
3. Storage layer: relational DB, object storage, vector index.
4. Enrichment layer: entity extraction, scoring, summarization.
5. Agent orchestration: task queue, agent registry, approval gates.
6. API/MCP layer: CRUD, search, workflow, backup tools.
7. Application layer: CRM dashboard, catalog/portal, settings.
8. Deployment layer: VPS, Docker/systemd, reverse proxy, backup jobs.

## MVP Stack

- Web: Next.js or equivalent server-rendered React framework.
- Database: SQLite for single-company MVP; PostgreSQL for multi-tenant production.
- Queue: database-backed queue for MVP; Redis/BullMQ or equivalent later.
- Storage: local filesystem for MVP; S3-compatible object storage later.
- Auth: access-key for MVP, then user auth/RBAC.
- Deployment: Docker Compose or systemd + Nginx.

## Build Sequence

1. Create schema and source registry.
2. Build ingestion pipeline.
3. Build CRM dashboard shell.
4. Add product/catalog domain.
5. Add pipeline/tasks.
6. Add agent run registry and approval queue.
7. Add API/MCP manifest.
8. Add deployment and backup automation.
9. Run smoke tests and restore drill.

## Data Provenance Contract

Every generated field must store:

- source URL or file,
- retrieval timestamp,
- extractor/parser,
- confidence,
- human review status,
- last verified timestamp.

## Deployment Contract

Generated CRM must include:

- `.env.example`
- Dockerfile or systemd service.
- reverse proxy example.
- health endpoint.
- backup script or documented commands.
- restore checklist.
- AI-agent handoff document.

