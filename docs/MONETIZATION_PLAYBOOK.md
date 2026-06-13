# RouteOps CRM Monetization Playbook

## Executive Positioning

RouteOps CRM is a clean-room commercial product built from the public agentic CRM blueprint. It should be sold as a B2B revenue operating system for local suppliers with recurring orders, not as a custom software project.

The original implementation work becomes a reusable pattern:

- CRM for leads, companies, contacts, pipeline and orders.
- Client-facing catalog and order surface.
- Telegram Mini App architecture for repeat ordering.
- Company enrichment from public sources.
- AI-agent approval queue for manager tasks.
- Documentation, tests, guardrails and deployment handoff.

Private customer data, proprietary catalogs, live tokens, third-party brand assets and rejected partnership context must not be used in sales collateral.

## What We Sell

### 1. Revenue Sprint

Two-week launch for one city and one priority segment.

- Lead list with source links and address context.
- CRM pipeline with stages, tasks and contacts.
- Client-facing catalog prototype.
- Commercial offer template.
- Sales script and objection map.
- First outreach plan.

Recommended price: **280,000-450,000 RUB**.

### 2. Order OS Implementation

Full working system for B2B repeat orders.

- CRM, catalog, order history and repeat order flow.
- Telegram Mini App-ready client catalog.
- Company enrichment from 2GIS, DaData, websites and Apify Actors.
- API/MCP integration contracts.
- Manager approval queue for AI-suggested changes.
- VPS deployment, backup and restore runbook.

Recommended price: **690,000-1,200,000 RUB**.

### 3. Managed Growth

Monthly operating package after launch.

- New lead refresh.
- Source enrichment.
- Pipeline review.
- New segments and scripts.
- Weekly revenue review.
- AI-agent task queue tuning.

Recommended price: **90,000-180,000 RUB per month**.

## Who We Sell To

### Local Food Producers and Caterers

JTBD: when B2B sales sit across messengers, spreadsheets and manual calls, help the team launch a repeatable office sales channel with a catalog, CRM and first-order workflow.

Trigger: founder or commercial director wants to enter offices, coworkings, clinics, schools or distributed retail points.

Primary KPI: first B2B orders in 30 days.

### Vending and Micromarket Operators

JTBD: when locations grow and assortment decisions become manual, help the operator see replenishment, sell-through, route priority and repeat demand.

Trigger: operator needs better site-level control and a stronger B2B customer surface.

Primary KPI: repeat replenishment and fewer manual manager actions.

### B2B Suppliers With Regular Replenishment

JTBD: when clients reorder the same categories, help turn manager memory into a structured catalog, order history and next-best action system.

Trigger: recurring orders are managed in chat history or spreadsheets.

Primary KPI: repeat-order share and manager capacity.

### Automation Integrators

JTBD: when an integrator needs to demonstrate a vertical CRM quickly, help generate a working demo from a proven blueprint instead of writing a custom PRD from zero.

Trigger: pre-sale discovery for a client with messy B2B operations.

Primary KPI: time from brief to demo.

## Where We Sell

Start with dense local B2B markets where repeat delivery or replenishment matters:

- Saint Petersburg and Leningrad region for local supplier use cases.
- Moscow for larger B2B supplier density.
- Russian million-plus cities for repeatable roll-out.

Primary channels:

- Direct outbound to founders, commercial directors and heads of operations.
- 2GIS category research for company discovery.
- Industry Telegram chats and local business communities.
- Partnerships with bot, CRM and automation integrators.
- Case-led demos to companies that already sell through messengers.

## Unit Economics

Use this model in the first meeting. The goal is not to promise revenue, but to show which inputs make the pilot rational.

| Input | Conservative Pilot Value | Notes |
| --- | ---: | --- |
| B2B leads | 150 | One city, one segment |
| First-order conversion | 5-8% | Depends on offer and segment fit |
| Average order | 15,000-25,000 RUB | Depends on category |
| Repeat orders in 90 days | 2-4 | For replenishment or food delivery |
| Gross margin | 25-45% | Confirm with client finance owner |

Example:

- 150 leads.
- 7% conversion to first order.
- 18,000 RUB average order.
- 3 orders per buyer in 90 days.
- 35% gross margin.

Expected 90-day gross profit signal:

```text
150 x 7% = 10-11 first buyers
11 x 18,000 x 3 = 594,000 RUB revenue
594,000 x 35% = 207,900 RUB gross profit
```

This does not fully pay back a large implementation alone, but it validates the channel. The stronger sales case is repeatable expansion: more segments, more cities, higher average order, manager capacity and lower manual work.

## CJM

### 1. Recognition

The client sees that sales are scattered across messengers, spreadsheets, calls and manager memory.

Question: "Where does a repeat order get lost today?"

### 2. Diagnosis

Map the current flow: source, lead, contact, offer, first order, repeat order, delivery, support.

Question: "Which step has no owner or no data?"

### 3. Economic Model

Estimate leads, conversion, average order, repeat frequency and margin.

Question: "Which segment can prove the model in 30 days?"

### 4. Demo

Show CRM, catalog, pipeline, company enrichment and order flow.

Question: "Can your manager use this tomorrow without extra explanation?"

### 5. Pilot

Launch one city, one segment and one catalog slice.

Question: "What decision will we make after 30 days if the signal is positive?"

### 6. Scale

Add segments, integrations, replenishment logic and AI-agent support.

Question: "Which manual manager action should disappear first?"

## First Meeting Script

### 0-5 minutes: Context

"I am not here to sell a generic CRM. I want to understand where your repeat B2B orders are leaking and whether a 14-day pilot can prove a new sales channel."

### 5-12 minutes: Current Process

Ask:

- Where do leads come from?
- Where are contacts stored?
- How is the first offer created?
- Who reminds the client to reorder?
- What is currently inside messengers or spreadsheets?

### 12-20 minutes: Economics

Ask:

- What is the average order?
- What is gross margin?
- Which segment repeats fastest?
- How many leads can sales process per week?
- What conversion would make this pilot worth scaling?

### 20-28 minutes: Demo

Show:

- Lead and company profile.
- Contact, address and map link.
- Segment-specific catalog.
- Telegram Mini App order flow.
- AI task suggestion that waits for manager approval.

### 28-35 minutes: Close

Offer one of two decisions:

- Revenue Sprint if the buyer needs proof before full implementation.
- Order OS Implementation if repeat orders are already proven and the bottleneck is operational control.

Close with:

"The pilot is not a software experiment. It is a controlled test of one B2B revenue segment. If the economics fail, we stop. If they work, the same system becomes the operating layer for the channel."

## Proof Points To Mention Carefully

Use only source-backed platform claims:

- Telegram Mini Apps can provide an in-Telegram web app surface for bot users: <https://core.telegram.org/bots/webapps>
- 2GIS Places API can search organizations and places by company/category/contact context: <https://docs.2gis.com/en/api/search/places/overview>
- DaData organization suggestions can enrich legal company data by name, INN and address context: <https://dadata.ru/api/suggest/party/>
- Apify Actors can run web data automation workflows: <https://docs.apify.com/platform/actors>

Do not claim access to a client's private systems until credentials, permissions and data boundaries are formally approved.

## Clean-Room Sales Rule

When a former prospect declined cooperation, the asset remains useful only as a generalized pattern:

- Sell the architecture, not their brand.
- Sell the workflow, not their catalog.
- Sell the enrichment and order operating model, not their private data.
- Keep all public demos free of proprietary screenshots, names, prices and contacts.
