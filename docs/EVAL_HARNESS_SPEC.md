# Eval Harness Spec

The generated CRM must include evals before it is considered agent-ready.

## Required Eval Groups

- source registration;
- entity extraction;
- deduplication;
- provenance completeness;
- generated CRM smoke flow;
- client portal rendering;
- external-write refusal;
- backup and restore;
- secret scan.

## Metrics

- extraction precision and recall on a golden fixture;
- percentage of generated fields with source IDs;
- duplicate rate;
- review queue correctness;
- build and smoke success;
- zero committed secrets.

## Pass Criteria

The default readiness threshold is:

- 100% schema-valid required entities;
- 100% sensitive fields reviewed or blocked;
- 0 committed secrets;
- build succeeds;
- backup restore drill documented and tested.
