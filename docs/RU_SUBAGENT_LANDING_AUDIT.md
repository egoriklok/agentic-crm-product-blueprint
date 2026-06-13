# Russian Subagent Landing Audit

Date: 2026-06-13

Target: `landing/index.html`

Purpose: adapt the public RouteOps CRM landing page after two role-based reviews:

- `agents-human-customer-bp`: Russian-speaking non-technical B2B buyer.
- `agents-seller-marketing-guru-ru`: Russian-speaking B2B seller and marketing strategist.

## agents-human-customer-bp Findings

What was clear:

- The page sells a repeat-order B2B channel, not CRM for its own sake.
- The 14-day timeline is clear.
- The pilot output is understandable: company base, sales stages, Telegram catalog, commercial offer and report.
- The target segments are recognizable: food, catering, vending, water, consumables and recurring B2B supplies.
- It is good that the page does not guarantee sales and frames the pilot as a measured segment test.

What still blocked trust:

- `RouteOps CRM` as the main headline sounds like a foreign IT product.
- Technical words on the first screen make the offer feel like an IT project, not a sales result.
- The price appears before the buyer understands payback logic.
- The Telegram catalog needs clearer explanation: who uses it and why it helps repeat orders.
- Lead quality needs explanation: source, status, contact availability and legality.
- Technology names should be lower on the page.

Required changes:

- First screen should sell the business result, not the product name.
- Navigation should use buyer language.
- Add a simple mini-economics example near the first screen.
- Add clearer answer on where data comes from and who verifies it.
- Replace early high-commitment CTAs with diagnostic meeting CTAs.

## agents-seller-marketing-guru-ru Findings

What blocked conversion:

- The first screen was too product-led and not pain-led.
- `Смотреть пакеты` was too early because pricing appears before trust.
- Packages looked like implementation services instead of stages of channel validation.
- The economics block should focus on 90-day segment potential and continuation criteria.
- The page needs a stronger reason to book a meeting now.

Required changes:

- Hero flow: pain -> result in 14 days -> audience -> diagnostic CTA.
- Add "without replacing your current CRM" to lower perceived risk.
- Add "symptoms that you need a pilot".
- Add "what happens during a 30-minute diagnostic".
- Rename packages:
  - `Проверка одного сегмента за 14 дней`.
  - `Контроль повторных заказов и КП`.
  - `Рост базы и повторных продаж каждый месяц`.
- Add objections around existing CRM, manager adoption, lead quality and no orders after 14 days.
- Move technology explanation to the bottom and keep it short.

## Adaptation Decisions

The landing page must now satisfy these checks:

- First screen headline is a business outcome, not `RouteOps CRM`.
- First CTA asks for a diagnostic meeting, not a paid pilot.
- First screen includes a concrete audience and a mini-economics proof.
- A "symptoms" block appears before package pricing.
- A "30-minute diagnostic" block explains meeting agenda.
- Package names are stages, not product jargon.
- The economics block shows segment potential and continuation logic.
- Technology/source details are near the bottom and framed as trust, not as the core offer.
- The adapted page is implemented as a React/Vite landing using local shadcn/ui-style components: Button, Card, Badge, Tabs and Accordion.
