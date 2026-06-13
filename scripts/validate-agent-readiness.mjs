import { existsSync, readdirSync, readFileSync, statSync } from "node:fs"
import { join, relative } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(fileURLToPath(import.meta.url), "..", "..")

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

function readText(path) {
  const fullPath = join(root, path)
  assert(existsSync(fullPath), `Missing required file: ${path}`)
  return readFileSync(fullPath, "utf8")
}

function readJson(path) {
  try {
    return JSON.parse(readText(path))
  } catch (error) {
    throw new Error(`Invalid JSON in ${path}: ${error.message}`)
  }
}

const requiredFiles = [
  "README.md",
  "PRD.md",
  "AGENTS.md",
  "agent-swarm.manifest.json",
  "docs/IMPLEMENTATION_BLUEPRINT.md",
  "docs/AI_SWARM_PLAYBOOK.md",
  "docs/CLIENT_INTAKE_TEMPLATE.md",
  "docs/FRONTIER_AGENT_READINESS_QA.md",
  "docs/PRD_USE_CASE_MATRIX.md",
  "docs/CANONICAL_DATA_SCHEMA.md",
  "docs/SOURCE_PROVENANCE_CONTRACT.md",
  "docs/INGESTION_PIPELINE_SPEC.md",
  "docs/AGENT_ORCHESTRATION_SPEC.md",
  "docs/EVAL_HARNESS_SPEC.md",
  "docs/REFERENCE_COMPANY_FIXTURE.md",
  "docs/SECURITY_PRIVACY_MODEL.md",
  "docs/MONETIZATION_PLAYBOOK.md",
  "docs/RU_SALES_SUBAGENTS.md",
  "landing/index.html",
  "landing/.nojekyll",
  "landing/assets/styles.css",
  "landing/assets/app.js",
  ".github/workflows/pages.yml",
  "scripts/validate-landing.mjs",
  "schemas/canonical_crm.schema.json",
  "contracts/agent-orchestrator.contract.json",
  "mcp/manifest.json",
  "evals/blueprint-readiness.scenarios.json"
]

for (const file of requiredFiles) {
  assert(existsSync(join(root, file)), `Missing agent-ready artifact: ${file}`)
}

const manifest = readJson("agent-swarm.manifest.json")
for (const field of ["repo_name", "repo_type", "entrypoints", "setup_commands", "test_commands", "contracts", "eval_scenarios", "guardrails", "data_boundaries", "subagents", "orchestrator"]) {
  assert(manifest[field] !== undefined, `Manifest missing ${field}`)
}
assert(manifest.repo_name === "agentic-crm-product-blueprint", "Manifest repo_name mismatch")
assert(Array.isArray(manifest.subagents) && manifest.subagents.length >= 5, "Manifest must define swarm subagents")

const schema = readJson("schemas/canonical_crm.schema.json")
assert(schema.$defs?.Organization && schema.$defs?.Source && schema.$defs?.AgentRun, "Canonical schema missing required definitions")

const contract = readJson("contracts/agent-orchestrator.contract.json")
assert(Array.isArray(contract.abort_conditions) && contract.abort_conditions.length >= 4, "Orchestrator contract must define abort conditions")

const mcp = readJson("mcp/manifest.json")
assert(Array.isArray(mcp.tools) && mcp.tools.length >= 5, "MCP manifest must define tools")

const evals = readJson("evals/blueprint-readiness.scenarios.json")
assert(Array.isArray(evals.scenarios) && evals.scenarios.length >= 5, "Eval suite must define at least five scenarios")

const textExpectations = [
  ["docs/SOURCE_PROVENANCE_CONTRACT.md", ["confidence", "retrieval", "review"]],
  ["docs/INGESTION_PIPELINE_SPEC.md", ["idempotency", "deduplicate", "failure"]],
  ["docs/AGENT_ORCHESTRATION_SPEC.md", ["approval", "handoff", "blocked"]],
  ["docs/SECURITY_PRIVACY_MODEL.md", ["secrets", "tenant", "pii"]],
  ["docs/EVAL_HARNESS_SPEC.md", ["secret scan", "backup", "schema"]],
  ["docs/MONETIZATION_PLAYBOOK.md", ["экономика пилота", "путь клиента", "сценарий первой встречи", "возражения"]],
  ["docs/RU_SALES_SUBAGENTS.md", ["agents-human-customer-bp", "agents-seller-marketing-guru-ru", "русскоязычный", "без английского"]],
  ["landing/index.html", ["routeops crm", "что продаем", "экономика пилота", "путь клиента", "задача покупателя"]]
]

for (const [file, terms] of textExpectations) {
  const text = readText(file).toLowerCase()
  for (const term of terms) {
    assert(text.includes(term), `${file} must mention ${term}`)
  }
}

const secretPatterns = [
  [/gho_[A-Za-z0-9_]{20,}/, "GitHub OAuth token"],
  [/github_pat_[A-Za-z0-9_]{20,}/, "GitHub fine-grained token"],
  [/apify_api_[A-Za-z0-9_-]{20,}/, "Apify API token"],
  [/sk-[A-Za-z0-9_-]{20,}/, "OpenAI-style API key"]
]

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) walk(fullPath, files)
    else files.push(fullPath)
  }
  return files
}

for (const fullPath of walk(root)) {
  const rel = relative(root, fullPath).replaceAll("\\", "/")
  if (rel === ".env" || rel.endsWith(".pem") || rel.endsWith(".key") || rel.endsWith("id_rsa") || /service-account.*\.json$/i.test(rel)) {
    throw new Error(`Forbidden secret-like file: ${rel}`)
  }
  const stats = statSync(fullPath)
  if (stats.size > 1024 * 1024) continue
  const text = readFileSync(fullPath, "utf8")
  for (const [pattern, label] of secretPatterns) {
    assert(!pattern.test(text), `Potential secret detected (${label}) in ${rel}`)
  }
}

console.log("Universal agentic CRM blueprint readiness verification passed")
console.log(`Contracts: ${manifest.contracts.length}; eval scenarios: ${evals.scenarios.length}; subagents: ${manifest.subagents.length}`)
