# Ingestion Pipeline Spec

The ingestion pipeline turns authorized sources into canonical CRM entities.

## Stages

1. Register source.
2. Fetch or import content.
3. Parse text, tables and media.
4. Extract candidate entities.
5. Deduplicate.
6. Map to `schemas/canonical_crm.schema.json`.
7. Score confidence.
8. Queue human review for sensitive fields.
9. Commit approved data.

## Idempotency

Every importer must use stable source IDs and content hashes. Re-running ingestion should update changed records without creating duplicates.

## Failure States

- `source_unavailable`
- `permission_missing`
- `parse_failed`
- `low_confidence`
- `needs_human_review`
- `duplicate_candidate`
- `blocked_by_policy`

## Output

The output is a canonical dataset, source registry, extraction log and review queue.
