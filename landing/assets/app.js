const moneyFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0
})

const integerFormatter = new Intl.NumberFormat("ru-RU", {
  maximumFractionDigits: 0
})

const fields = {
  leadCount: document.querySelector("#leadCount"),
  conversionRate: document.querySelector("#conversionRate"),
  averageOrder: document.querySelector("#averageOrder"),
  repeatCount: document.querySelector("#repeatCount"),
  grossMargin: document.querySelector("#grossMargin")
}

const outputs = {
  leadCount: document.querySelector("#leadCountOut"),
  conversionRate: document.querySelector("#conversionRateOut"),
  averageOrder: document.querySelector("#averageOrderOut"),
  repeatCount: document.querySelector("#repeatCountOut"),
  grossMargin: document.querySelector("#grossMarginOut"),
  firstCustomers: document.querySelector("#firstCustomers"),
  revenue90: document.querySelector("#revenue90"),
  grossProfit: document.querySelector("#grossProfit"),
  payback: document.querySelector("#payback")
}

function numberValue(input) {
  return Number(input?.value || 0)
}

function updateEconomics() {
  const leads = numberValue(fields.leadCount)
  const conversion = numberValue(fields.conversionRate) / 100
  const averageOrder = numberValue(fields.averageOrder)
  const repeats = numberValue(fields.repeatCount)
  const margin = numberValue(fields.grossMargin) / 100

  const firstCustomers = Math.round(leads * conversion)
  const revenue90 = firstCustomers * averageOrder * repeats
  const grossProfit = revenue90 * margin
  const pilotCost = 690000
  const paybackCycles = grossProfit > 0 ? pilotCost / grossProfit : 0

  outputs.leadCount.textContent = integerFormatter.format(leads)
  outputs.conversionRate.textContent = `${integerFormatter.format(conversion * 100)}%`
  outputs.averageOrder.textContent = moneyFormatter.format(averageOrder)
  outputs.repeatCount.textContent = integerFormatter.format(repeats)
  outputs.grossMargin.textContent = `${integerFormatter.format(margin * 100)}%`
  outputs.firstCustomers.textContent = integerFormatter.format(firstCustomers)
  outputs.revenue90.textContent = moneyFormatter.format(revenue90)
  outputs.grossProfit.textContent = moneyFormatter.format(grossProfit)
  outputs.payback.textContent = paybackCycles < 10 ? `${paybackCycles.toFixed(1)} цикла` : "10+ циклов"
}

for (const input of Object.values(fields)) {
  input?.addEventListener("input", updateEconomics)
}

updateEconomics()
