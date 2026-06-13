import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(fileURLToPath(import.meta.url), "..", "..")

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

function read(path) {
  const fullPath = join(root, path)
  assert(existsSync(fullPath), `Missing landing artifact: ${path}`)
  return readFileSync(fullPath, "utf8")
}

const app = read("src/App.tsx")
const css = read("src/index.css")
const main = read("src/main.tsx")
const vite = read("vite.config.ts")
const componentsJson = read("components.json")
const button = read("src/components/ui/button.tsx")
const card = read("src/components/ui/card.tsx")
const badge = read("src/components/ui/badge.tsx")
const tabs = read("src/components/ui/tabs.tsx")
const accordion = read("src/components/ui/accordion.tsx")
const playbook = read("docs/MONETIZATION_PLAYBOOK.md")
const subagents = read("docs/RU_SALES_SUBAGENTS.md")
const audit = read("docs/RU_SUBAGENT_LANDING_AUDIT.md")
read("index.html")
read(".github/workflows/pages.yml")

assert(!existsSync(join(root, "landing/index.html")), "Static landing/index.html must not coexist with shadcn/ui React landing")
assert(main.includes("ReactDOM.createRoot"), "React entrypoint must mount the app")
assert(vite.includes("@tailwindcss/vite"), "Vite config must use Tailwind CSS Vite plugin")
assert(vite.includes("/agentic-crm-product-blueprint/"), "Vite build must set GitHub Pages base path")
assert(componentsJson.includes("ui.shadcn.com/schema.json"), "components.json must be shadcn/ui-compatible")
assert(css.includes("@import \"tailwindcss\""), "Tailwind v4 CSS entry must import tailwindcss")

for (const [name, source] of [
  ["button", button],
  ["card", card],
  ["badge", badge],
  ["tabs", tabs],
  ["accordion", accordion]
]) {
  assert(source.includes("@/lib/utils") || name === "accordion", `shadcn/ui ${name} component must use local utilities`)
}

const requiredAppTerms = [
  "RouteOps CRM",
  "Верните повторные B2B-заказы под контроль за 14 дней",
  "Разобрать мой сегмент за 30 минут",
  "Симптомы",
  "Что будет за 14 дней",
  "Кому подходит",
  "Задача покупателя",
  "Сценарий первой встречи",
  "Экономика пилота",
  "Проверка одного сегмента за 14 дней",
  "Контроль повторных заказов и КП",
  "Рост базы и повторных продаж каждый месяц",
  "Мы не гарантируем продажи",
  "Каталог внутри Telegram",
  "2GIS",
  "DaData",
  "Apify"
]

for (const term of requiredAppTerms) {
  assert(app.includes(term), `src/App.tsx must include: ${term}`)
}

for (const term of ["Accordion", "Tabs", "Button", "Card", "Badge", "useState", "useMemo"]) {
  assert(app.includes(term), `src/App.tsx must use ${term}`)
}

for (const term of ["Что продаем", "Кому продаем", "Где продаем", "Экономика пилота", "Путь клиента", "Сценарий первой встречи", "Возражения и ответы"]) {
  assert(playbook.includes(term), `docs/MONETIZATION_PLAYBOOK.md must include: ${term}`)
}

const subagentsLower = subagents.toLowerCase()
for (const term of ["agents-human-customer-bp", "agents-seller-marketing-guru-ru", "без английского", "русскоязычный"]) {
  assert(subagentsLower.includes(term), `docs/RU_SALES_SUBAGENTS.md must include: ${term}`)
}

for (const term of ["agents-human-customer-bp", "agents-seller-marketing-guru-ru", "Required changes", "Adaptation Decisions"]) {
  assert(audit.includes(term), `docs/RU_SUBAGENT_LANDING_AUDIT.md must include: ${term}`)
}

const forbidden = [
  /Lunch\s*Up/i,
  /lunch-up/i,
  /CRM_ACCESS_KEY/i,
  /APIFY_TOKEN/i,
  /apify_api_[A-Za-z0-9_-]{20,}/,
  /github_pat_[A-Za-z0-9_]{20,}/,
  /sk-[A-Za-z0-9_-]{20,}/
]

for (const pattern of forbidden) {
  assert(!pattern.test(app), `Forbidden clean-room term or secret in src/App.tsx: ${pattern}`)
}

console.log("RouteOps shadcn/ui landing verification passed")
