# Agent Orchestration Spec

The generated CRM should use a bounded swarm, not unlimited autonomy.

## Roles

- `source_researcher`
- `schema_mapper`
- `product_modeler`
- `crm_builder`
- `integration_architect`
- `qa_skeptic`
- `deployment_operator`

## Task States

- `queued`
- `running`
- `needs_review`
- `completed`
- `failed`
- `blocked`

## Handoff Packet

Each subagent task must include:

- task ID;
- objective;
- allowed files;
- forbidden files;
- source context;
- expected output;
- approval gates;
- evidence required;
- rollback plan.

## Approval Gates

Human approval is required before external writes, paid API calls, production deployment, private data import, outbound messages and destructive mutations.
