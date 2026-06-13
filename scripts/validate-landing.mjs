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

const landing = read("landing/index.html")
const styles = read("landing/assets/styles.css")
const app = read("landing/assets/app.js")
const playbook = read("docs/MONETIZATION_PLAYBOOK.md")
read(".github/workflows/pages.yml")
read("landing/.nojekyll")

const requiredLandingTerms = [
  "RouteOps CRM",
  "Что продаем",
  "Кому продаем",
  "Где продаем",
  "Unit economics",
  "CJM",
  "JTBD",
  "Сценарий первой встречи",
  "Telegram Mini App",
  "2GIS",
  "DaData",
  "Apify"
]

for (const term of requiredLandingTerms) {
  assert(landing.includes(term), `landing/index.html must include: ${term}`)
}

for (const term of ["What We Sell", "Who We Sell To", "Where We Sell", "Unit Economics", "CJM", "First Meeting Script", "Clean-Room Sales Rule"]) {
  assert(playbook.includes(term), `docs/MONETIZATION_PLAYBOOK.md must include: ${term}`)
}

for (const id of ["leadCount", "conversionRate", "averageOrder", "repeatCount", "grossMargin", "revenue90", "payback"]) {
  assert(landing.includes(`id="${id}"`) || app.includes(`#${id}`), `Economics calculator missing ${id}`)
}

assert(styles.includes("@media (max-width: 760px)"), "Landing CSS must define mobile layout")
assert(styles.includes("overflow-wrap: anywhere"), "Landing CSS must protect long labels from overflow")
assert(app.includes("Intl.NumberFormat"), "Landing calculator must format Russian currency")

const cleanRoomForbidden = [
  /Lunch\s*Up/i,
  /lunch-up/i,
  /CRM_ACCESS_KEY/i,
  /APIFY_TOKEN/i,
  /apify_api_[A-Za-z0-9_-]{20,}/,
  /github_pat_[A-Za-z0-9_]{20,}/,
  /sk-[A-Za-z0-9_-]{20,}/
]

for (const pattern of cleanRoomForbidden) {
  assert(!pattern.test(landing), `Forbidden clean-room term or secret in landing: ${pattern}`)
}

console.log("RouteOps monetization landing verification passed")
