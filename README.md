# Swiss Outreach Module

Shared types, schema definitions, Zod validators, and LLM prompt templates for Swiss B2B outreach in the Arpeggio platform.

Consumed by **maestro** (ZEFIX search, enrichment pipeline, email send) and **sinfonia** (campaign UI and approval flows).

Enable at runtime via `ENABLED_MODULES` (maestro) or `VITE_ENABLED_MODULES` (sinfonia). Add `swissOutreach` to the module list.

Platform docs: [`docs/swiss-outreach/`](../../../../docs/swiss-outreach/).

## Scope

Discover registered Swiss companies from a job/project description, enrich public contacts, score fit, draft personalized quotation emails (de/fr/it/en), and manage human approval before send.

## Directory layout

```
swissOutreach/
├── api/swissOutreach/private/
│   ├── campaign/           # Campaign create/edit contract
│   ├── prospectCompany/    # Discovered / enriched companies
│   ├── outreachEmail/      # Draft → approved → sent emails
│   └── dashboard/          # Aggregate metrics DTO
├── prompts/
│   └── outreachPrompts.ts  # Job parse, company summary, email compose prompts
└── types/
    ├── constants.ts        # Status, language, tone, canton enums
    └── parsedJob.ts        # Structured job-parse result
```

## API resources

| Resource | Description |
|----------|-------------|
| `campaign` | Outreach run: job text, cantons, language/tone, sender identity, pipeline status + stats |
| `prospectCompany` | Company discovered via ZEFIX/enrichment; website, contacts, score, lifecycle status |
| `outreachEmail` | Generated/edited email tied to a campaign + prospect; send attempts and status |
| `dashboard` | Summary counters (found, contacted, sent, failures, success rate, averages) |

## Shared constants

Defined in `types/constants.ts` and reused by schema-defs and DTOs:

| Constant | Values |
|----------|--------|
| Campaign status | `draft` → `parsing` → `searching` → `enriching` → `scoring` → `awaiting_approval` → `sending` → `completed` / `failed` / `cancelled` |
| Prospect status | `discovered`, `website_found`, `crawled`, `scored`, `skipped`, `approved`, `sent`, `failed` |
| Email status | `draft`, `edited`, `approved`, `skipped`, `queued`, `sent`, `failed` |
| Language | `de`, `fr`, `it`, `en` |
| Email tone | `professional`, `friendly`, `formal` |
| Cantons | All 26 Swiss canton codes (`AG` … `ZH`) |

## Prompts

`prompts/outreachPrompts.ts` holds the system/user prompt builders used by maestro’s LLM adapters:

1. **Job parse** — extract industry, synonyms, multilingual equivalents, NOGA categories, keywords
2. **Company summary** — ≤150 words from crawl evidence only
3. **Email compose** — JSON `{subject, body}` in the requested language/tone

## File conventions

Follows the standard Armonia resource layout (see [core README](../../../README.md)):

- `*.dto.ts` — document/response types (extend core ownership / lifecycle / soft-delete)
- `*.schema-def.ts` — declarative field map; drives validators and maestro create/update builders
- `create*.form.validator.ts` / `edit*.form.validator.ts` — Zod schemas via `buildCreateZodSchema` / `buildEditZodSchema`

## Example import

```ts
import {CampaignSchemaDef} from "armonia/src/modules/swissOutreach/api/swissOutreach/private/campaign/campaign.schema-def";
import {createCampaignFormSchema} from "armonia/src/modules/swissOutreach/api/swissOutreach/private/campaign/createCampaign.form.validator";
import type {Campaign} from "armonia/src/modules/swissOutreach/api/swissOutreach/private/campaign/campaign.dto";
import {JOB_PARSE_SYSTEM_PROMPT} from "armonia/src/modules/swissOutreach/prompts/outreachPrompts";
import type {SwissCantonCode} from "armonia/src/modules/swissOutreach/types/constants";
```

## Backend counterpart

Pipeline orchestration, Mongo schemas, Kafka `swissOutreach.pipeline`, and HTTP routes live in **maestro** under `maestro/modules/swissOutreach/`. See that package’s README and `docs/swiss-outreach/ARCHITECTURE.md`.

## Frontend counterpart

Campaign UI, approval flows, and panel contributions live in **sinfonia** under `sinfonia/src/modules/swissOutreach/`.
