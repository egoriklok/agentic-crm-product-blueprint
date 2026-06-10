# Source Provenance Contract

No generated company fact is valid without source provenance.

## Source Record

Each source must include:

- source ID;
- kind: `url`, `file`, `manual_note`, `api`, `database`;
- URI or file identity;
- retrieval timestamp;
- permission or license note;
- trust level;
- extraction method.

## Extracted Field Record

Each extracted field must include:

- entity ID;
- field name;
- value;
- source ID;
- quote, span, selector or row reference when available;
- confidence score;
- freshness;
- human review status.

## Review Rules

Human review is required for:

- pricing;
- legal/compliance claims;
- employee counts;
- private contacts;
- customer names;
- outbound messages;
- public portal copy.
