import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  MessageSquareText,
  PhoneCall,
  ShieldCheck,
  Target,
  TrendingUp
} from "lucide-react"
import { useMemo, useState } from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const moneyFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0
})

const integerFormatter = new Intl.NumberFormat("ru-RU", {
  maximumFractionDigits: 0
})

const symptoms = [
  "КП отправили, но никто не видит, кто должен дожать клиента.",
  "Клиенты пишут в Telegram или WhatsApp, но повторный заказ не попадает в систему.",
  "Менеджер ушел, и вместе с ним ушла история клиентов и договоренностей.",
  "Собственник не понимает, сколько денег лежит в недожатых КП.",
  "База есть, но непонятно, кому звонили, что предлагали и когда повторить контакт.",
  "Текущая CRM есть, но она не помогает запустить новый B2B-сегмент."
]

const delivery = [
  {
    title: "База компаний",
    text: "100-150 компаний в одном сегменте с источником, адресом, статусом проверки и следующим действием.",
    note: "Качество важнее количества"
  },
  {
    title: "КП и задачи менеджеру",
    text: "Понятно, кому написать, что предложить, где КП зависло и когда нужен повторный контакт.",
    note: "Меньше ручной памяти"
  },
  {
    title: "Повторный заказ в Telegram",
    text: "Клиент видит понятный каталог и может повторить закупку без долгой переписки.",
    note: "Для клиента привычный канал"
  },
  {
    title: "Отчет для решения",
    text: "Сколько компаний проверено, сколько касаний сделано, сколько КП отправлено и стоит ли масштабировать.",
    note: "Решение по цифрам"
  }
]

const segments = [
  {
    title: "Поставщик еды и кейтеринга",
    text: "Проверить офисы, бизнес-центры, клиники, школы или склады как новый B2B-сегмент.",
    metric: "Главная метрика: первые B2B-заказы за 30 дней"
  },
  {
    title: "Вендинг и микромаркеты",
    text: "Понять, какие точки требуют пополнения, где падает повтор и кому нужно напомнить.",
    metric: "Главная метрика: повторные поставки"
  },
  {
    title: "Поставщик воды и расходников",
    text: "Вернуть регулярные закупки в управляемый процесс, а не в переписки и напоминания вручную.",
    metric: "Главная метрика: доля клиентов с повтором"
  },
  {
    title: "Интегратор автоматизации",
    text: "Быстро показать клиенту рабочий пример отраслевой CRM без долгого проектирования с нуля.",
    metric: "Главная метрика: время от брифа до демо"
  }
]

const diagnosticSteps = [
  ["1. Выбираем сегмент", "Офисы, клиники, школы, кофейни, бизнес-центры, склады или другой понятный B2B-сегмент."],
  ["2. Считаем деньги", "Средний заказ, маржа после себестоимости, частота повтора, минимальный выгодный заказ."],
  ["3. Рисуем процесс", "Откуда приходят компании, кто делает КП, где теряется повтор и кто должен дожимать."],
  ["4. Ставим критерий", "Какие цифры за 14 дней покажут, что канал стоит развивать дальше."],
  ["5. Снимаем риски", "Можно начать отдельно от текущей CRM. Закрытые базы и чужие данные не используются."],
  ["6. Решаем шаг", "Если экономика сегмента не сходится, большой проект не предлагаем."]
]

const packages = [
  {
    id: "segment",
    title: "Проверка одного сегмента за 14 дней",
    price: "280-450 тыс. ₽",
    text: "Для компании, которая хочет понять: есть ли живые B2B-клиенты в выбранном городе.",
    items: ["100-150 компаний с источниками", "КП и первые касания", "Каталог и повторный заказ в Telegram", "Отчет по критериям успеха"]
  },
  {
    id: "control",
    title: "Контроль повторных заказов и КП",
    price: "690 тыс. - 1,2 млн ₽",
    text: "Для команды, где повторные заказы уже есть, но они теряются в переписках и памяти менеджеров.",
    items: ["Компании, контакты, сделки и заказы", "История КП, статусы и задачи", "Повторный заказ для клиента", "Роли менеджера и руководителя"]
  },
  {
    id: "growth",
    title: "Рост базы и повторных продаж каждый месяц",
    price: "90-180 тыс. ₽/мес",
    text: "Для компании, которая подтвердила сегмент и хочет масштабировать канал без ручного хаоса.",
    items: ["Новые сегменты и города", "Обновление базы компаний", "Разбор воронки и просроченных задач", "Новые КП и сценарии продаж"]
  }
]

const objections = [
  {
    question: "У нас уже есть Bitrix или amoCRM",
    answer: "Отлично. Пилот можно вести как отдельный канал, а после проверки связать с текущей CRM. Не нужно сразу перестраивать отдел продаж."
  },
  {
    question: "Менеджеры не будут вести еще одну систему",
    answer: "Стартуем с одного сегмента и простых задач: кому написать, что предложить, когда напомнить. Цель - меньше ручной памяти, а не больше отчетности."
  },
  {
    question: "Нам нужны заказы, а не лиды",
    answer: "Поэтому в отчете считаем не только компании, но и касания, КП, первые заказы и повторность. Пилот оценивается по движению к деньгам."
  },
  {
    question: "Что если за 14 дней заказов нет?",
    answer: "Смотрим причину: сегмент, оффер, контакты, КП или процесс касаний. Большой проект не продаем без сигнала."
  }
]

function SectionHeading({
  eyebrow,
  title,
  children
}: {
  eyebrow: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="mx-auto mb-8 grid max-w-5xl gap-4">
      <Badge variant="outline" className="w-fit border-primary/30 text-primary">
        {eyebrow}
      </Badge>
      <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-normal text-foreground md:text-5xl">
        {title}
      </h2>
      {children ? <div className="max-w-3xl text-lg leading-8 text-muted-foreground">{children}</div> : null}
    </div>
  )
}

function App() {
  const [leadCount, setLeadCount] = useState(150)
  const [conversionRate, setConversionRate] = useState(7)
  const [averageOrder, setAverageOrder] = useState(18000)
  const [repeatCount, setRepeatCount] = useState(3)
  const [grossMargin, setGrossMargin] = useState(28)

  const economics = useMemo(() => {
    const firstCustomers = Math.round(leadCount * (conversionRate / 100))
    const revenue90 = firstCustomers * averageOrder * repeatCount
    const grossProfit = revenue90 * (grossMargin / 100)
    const signal =
      firstCustomers >= 10 && grossProfit >= 180000
        ? "есть смысл развивать"
        : firstCustomers >= 5
          ? "нужна проверка оффера"
          : "лучше сменить сегмент"

    return { firstCustomers, revenue90, grossProfit, signal }
  }, [averageOrder, conversionRate, grossMargin, leadCount, repeatCount])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <a className="flex items-center gap-3 font-semibold" href="#top" aria-label="RouteOps CRM">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">R</span>
            <span>RouteOps CRM</span>
          </a>
          <nav className="hidden items-center gap-5 text-sm font-medium text-muted-foreground lg:flex" aria-label="Основная навигация">
            <a className="hover:text-foreground" href="#delivery">
              Что получите
            </a>
            <a className="hover:text-foreground" href="#segments">
              Кому подходит
            </a>
            <a className="hover:text-foreground" href="#economics">
              Как окупается
            </a>
            <a className="hover:text-foreground" href="#diagnostic">
              Диагностика
            </a>
            <a className="hover:text-foreground" href="#pricing">
              Пакеты
            </a>
          </nav>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="mailto:hello@example.com?subject=RouteOps%20CRM%20diagnostic">Записаться на диагностику</a>
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-border bg-[linear-gradient(120deg,#dff5f0,transparent_36%),linear-gradient(180deg,#ffffff,#f7fafc)] px-5 py-12 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-7">
              <Badge variant="outline" className="w-fit border-primary/30 bg-background/80 text-primary">
                Для поставщиков еды, воды, расходников, вендинга и регулярных B2B-товаров
              </Badge>
              <div className="grid gap-5">
                <h1 className="max-w-4xl text-5xl font-semibold leading-none tracking-normal text-foreground md:text-7xl">
                  Верните повторные B2B-заказы под контроль за 14 дней
                </h1>
                <p className="max-w-3xl text-xl leading-8 text-muted-foreground md:text-2xl">
                  Проверим один сегмент без перестройки отдела продаж: соберем подходящие компании,
                  покажем менеджеру кому звонить, подготовим КП и настроим повторный заказ через привычный Telegram.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#diagnostic">
                    Разобрать мой сегмент за 30 минут
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href="#economics">Посчитать экономику пилота</a>
                </Button>
              </div>
              <Card className="max-w-3xl border-primary/20 bg-background/80">
                <CardContent className="p-5 text-base leading-7 text-muted-foreground">
                  <strong className="text-foreground">Мини-пример:</strong> 150 компаний в одном сегменте дают
                  10-11 первых покупателей при 7% конверсии. После этого видно, стоит ли масштабировать канал
                  до большого внедрения.
                </CardContent>
              </Card>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["14 дней", "до базы, КП, задач менеджеру и отчета"],
                  ["100-150", "компаний с источником и статусом проверки"],
                  ["Без замены", "можно начать отдельно от вашей текущей CRM"]
                ].map(([value, label]) => (
                  <Card key={value} className="bg-background/85">
                    <CardContent className="p-4">
                      <div className="text-2xl font-semibold">{value}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="overflow-hidden border-0 bg-[#102033] text-white shadow-2xl">
              <div className="flex flex-wrap gap-2 bg-[#0b1725] p-4 text-xs font-semibold text-blue-100">
                <Badge variant="secondary">КП отправлено</Badge>
                <Badge variant="secondary">Нет ответа 3 дня</Badge>
                <Badge variant="secondary">Задача менеджеру</Badge>
                <Badge variant="secondary">Повторный заказ</Badge>
              </div>
              <div className="grid gap-4 p-4 md:grid-cols-[1fr_0.85fr]">
                <Card className="border-white/10 bg-white/10 text-white">
                  <CardHeader>
                    <CardTitle className="text-lg text-[#9bdad3]">Что видит руководитель</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-3">
                    {[
                      ["КП без ответа", "18"],
                      ["Нужно дожать сегодня", "7"],
                      ["Готовы к повтору", "12"]
                    ].map(([label, value], index) => (
                      <div
                        key={label}
                        className={`flex min-h-14 items-center justify-between rounded-md px-4 ${
                          index === 1 ? "border border-[#f26d4f]/50 bg-[#f26d4f]/20" : "bg-white/10"
                        }`}
                      >
                        <span className="text-sm text-slate-200">{label}</span>
                        <strong className="text-2xl">{value}</strong>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="row-span-2 bg-[#fffaf5] text-foreground">
                  <CardHeader>
                    <Badge variant="warm" className="w-fit">
                      Для клиента в Telegram
                    </Badge>
                    <CardTitle>Повторить заказ</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-3">
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">Прошлая закупка</p>
                        <strong className="text-xl">18 400 ₽</strong>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">Комментарий клиента</p>
                        <strong className="text-xl">к пятнице</strong>
                      </CardContent>
                    </Card>
                    <Button>Отправить заказ</Button>
                  </CardContent>
                </Card>
                <Card className="border-white/10 bg-white/10 text-white">
                  <CardHeader>
                    <CardTitle className="text-lg text-[#9bdad3]">Задача менеджеру</CardTitle>
                    <CardDescription className="text-slate-300">
                      КП отправлено 3 дня назад. Ответа нет. Предложить повтор с учетом прошлого заказа.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </Card>
          </div>
        </section>

        <section className="bg-secondary px-5 py-16 md:px-8 md:py-24">
          <SectionHeading
            eyebrow="Позиционирование"
            title="Это не замена вашей CRM. Это способ проверить новый поток B2B-заказов без перестройки отдела продаж."
          />
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {[
              ["Что продаем", "Проверку одного B2B-сегмента: подходящие компании, карточки клиентов, КП, задачи менеджеру, повторный заказ и отчет по цифрам."],
              ["Кому продаем", "Локальным поставщикам с регулярными заказами: еда, кейтеринг, вендинг, вода, расходники для офисов и сервисные B2B-поставки."],
              ["Где продаем", "Санкт-Петербург, Москва и города-миллионники. Первый контакт: собственник, коммерческий директор или операционный директор."]
            ].map(([title, text]) => (
              <Card key={title}>
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="text-base leading-7">{text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-24">
          <SectionHeading eyebrow="Симптомы" title="Вам нужен пилот, если продажи держатся на памяти менеджера." />
          <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-2 xl:grid-cols-3">
            {symptoms.map((symptom) => (
              <Card key={symptom}>
                <CardContent className="flex gap-3 p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <p className="leading-7 text-muted-foreground">{symptom}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="delivery" className="px-5 py-16 md:px-8 md:py-24">
          <SectionHeading eyebrow="Что будет за 14 дней" title="Через 14 дней вы получите не презентацию, а измеримый тест сегмента." />
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
            {delivery.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="text-base leading-7">{item.text}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {item.note}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="segments" className="bg-secondary px-5 py-16 md:px-8 md:py-24">
          <SectionHeading eyebrow="Кому подходит" title="Задача покупателя: перестать терять повторные заказы в мессенджерах и таблицах." />
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
            {segments.map((segment) => (
              <Card key={segment.title}>
                <CardHeader>
                  <CardTitle>{segment.title}</CardTitle>
                  <CardDescription className="text-base leading-7">{segment.text}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{segment.metric}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="diagnostic" className="px-5 py-16 md:px-8 md:py-24">
          <SectionHeading
            eyebrow="Сценарий первой встречи"
            title="Диагностика за 30 минут: сначала проверяем, есть ли смысл запускать пилот."
          />
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">
            {diagnosticSteps.map(([title, text]) => (
              <Card key={title}>
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="text-base leading-7">{text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="economics" className="px-5 py-16 md:px-8 md:py-24">
          <SectionHeading eyebrow="Экономика пилота" title="Сначала смотрим потенциал сегмента за 90 дней, а не стоимость разработки.">
            <p>
              Модель не обещает продажи. Она показывает, какие входные цифры нужны, чтобы решить:
              запускать пилот, менять сегмент или не тратить деньги на большое внедрение.
            </p>
          </SectionHeading>
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.85fr_1fr]">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Настройте сегмент
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-5">
                {[
                  ["Компаний в сегменте", leadCount, 50, 400, 25, setLeadCount, integerFormatter.format(leadCount)],
                  ["Конверсия в первый заказ", conversionRate, 2, 15, 1, setConversionRate, `${conversionRate}%`],
                  ["Средний заказ", averageOrder, 7000, 60000, 1000, setAverageOrder, moneyFormatter.format(averageOrder)],
                  ["Повторов за 90 дней", repeatCount, 1, 6, 1, setRepeatCount, integerFormatter.format(repeatCount)],
                  ["Маржа после себестоимости", grossMargin, 15, 45, 1, setGrossMargin, `${grossMargin}%`]
                ].map(([label, value, min, max, step, setter, output]) => (
                  <label key={label as string} className="grid gap-2 text-sm font-semibold text-muted-foreground">
                    <span className="flex items-center justify-between gap-3">
                      {label as string}
                      <output className="text-base text-foreground">{output as string}</output>
                    </span>
                    <input
                      className="w-full accent-primary"
                      type="range"
                      value={value as number}
                      min={min as number}
                      max={max as number}
                      step={step as number}
                      onChange={(event) => (setter as (next: number) => void)(Number(event.target.value))}
                    />
                  </label>
                ))}
              </CardContent>
            </Card>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Первые покупатели", integerFormatter.format(economics.firstCustomers), Target],
                ["Потенциал выручки за 90 дней", moneyFormatter.format(economics.revenue90), TrendingUp],
                ["Потенциал валовой прибыли", moneyFormatter.format(economics.grossProfit), CalculatorIcon],
                ["Сигнал для продолжения", economics.signal, ShieldCheck]
              ].map(([label, value, Icon]) => (
                <Card key={label as string}>
                  <CardContent className="grid min-h-40 gap-4 p-5">
                    <Icon className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">{label as string}</p>
                      <strong className="mt-3 block text-2xl leading-tight">{value as string}</strong>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="px-5 py-16 md:px-8 md:py-24">
          <SectionHeading eyebrow="Пакеты" title="Начинаем с маленькой проверки, а не с большого внедрения.">
            <p>Цены ниже подаются как стоимость проверки или запуска канала. Большой контур имеет смысл только после диагностики и понятной экономики.</p>
          </SectionHeading>
          <div className="mx-auto max-w-7xl">
            <Tabs defaultValue="segment" className="w-full">
              <TabsList className="grid h-auto w-full grid-cols-1 gap-1 md:grid-cols-3">
                {packages.map((item) => (
                  <TabsTrigger key={item.id} value={item.id} className="whitespace-normal">
                    {item.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {packages.map((item) => (
                <TabsContent key={item.id} value={item.id}>
                  <Card>
                    <CardHeader>
                      <Badge variant={item.id === "control" ? "default" : "outline"} className="w-fit">
                        {item.price}
                      </Badge>
                      <CardTitle className="text-3xl">{item.title}</CardTitle>
                      <CardDescription className="text-base leading-7">{item.text}</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-3 md:grid-cols-2">
                      {item.items.map((point) => (
                        <div key={point} className="flex gap-3 rounded-md border border-border bg-secondary/60 p-4">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className="bg-secondary px-5 py-16 md:px-8 md:py-24">
          <SectionHeading eyebrow="Возражения" title="Сразу отвечаем на вопросы, которые обычно возникают у директора." />
          <Card className="mx-auto max-w-4xl">
            <CardContent className="p-6">
              <Accordion type="single" collapsible defaultValue="item-0">
                {objections.map((item, index) => (
                  <AccordionItem key={item.question} value={`item-${index}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
          <p className="mx-auto mt-6 max-w-4xl text-muted-foreground">
            Мы не гарантируем продажи. Мы запускаем проверяемый канал и показываем цифры: компании, касания, КП, первые заказы и повторность.
          </p>
        </section>

        <section id="cjm" className="bg-secondary px-5 py-16 md:px-8 md:py-24">
          <SectionHeading eyebrow="Путь клиента" title="От хаоса в мессенджерах до управляемого канала повторных заказов." />
          <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3 xl:grid-cols-6">
            {[
              ["1. Боль", "КП, заказы и повторы живут в переписках, таблицах и памяти менеджера."],
              ["2. Диагностика", "Выбираем сегмент, считаем деньги и фиксируем критерий успеха."],
              ["3. Проверка", "Собираем компании, ставим задачи менеджеру и запускаем первые касания."],
              ["4. Отчет", "Показываем касания, КП, ответы, первые заказы и узкие места."],
              ["5. Контроль", "Подключаем историю заказов, повтор, напоминания и роли руководителя."],
              ["6. Рост", "Добавляем новые сегменты, города и регулярное обновление базы."]
            ].map(([title, text]) => (
              <Card key={title}>
                <CardHeader>
                  <CardTitle className="text-lg">{title}</CardTitle>
                  <CardDescription>{text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-24">
          <Card className="mx-auto max-w-7xl border-primary/20 bg-primary text-primary-foreground">
            <CardContent className="grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center">
              <div className="grid gap-4">
                <Badge variant="warm" className="w-fit">
                  Следующий шаг
                </Badge>
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-normal md:text-5xl">
                  Разобрать ваш сегмент и понять, стоит ли запускать пилот.
                </h2>
                <p className="max-w-3xl text-lg leading-8 text-primary-foreground/80">
                  На 30-минутной встрече выберем один сегмент, посчитаем средний заказ и маржу,
                  посмотрим текущий процесс и определим, какие цифры за 14 дней подтвердят продолжение.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary" size="lg">
                  <a href="mailto:hello@example.com?subject=RouteOps%20CRM%20segment%20diagnostic">Разобрать сегмент</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  <a href="#economics">Сначала посчитать</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="border-t border-border bg-secondary px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="Откуда берутся данные и кто их проверяет" title="Используются только открытые источники и действия, которые можно проверить.">
            <p>
              Мы используем открытые справочники, сайты компаний и данные, которые можно проверить.
              Менеджер подтверждает важные действия сам. Закрытые базы и чужие клиентские данные не используются.
            </p>
          </SectionHeading>
          <div className="mx-auto flex max-w-5xl flex-wrap gap-3">
            <Button asChild variant="secondary">
              <a href="https://core.telegram.org/bots/webapps" target="_blank" rel="noreferrer">
                Каталог внутри Telegram
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="https://docs.2gis.com/en/api/search/places/overview" target="_blank" rel="noreferrer">
                2GIS для компаний и адресов
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="https://dadata.ru/api/suggest/party/" target="_blank" rel="noreferrer">
                DaData для реквизитов
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="https://docs.apify.com/platform/actors" target="_blank" rel="noreferrer">
                Apify для открытых данных
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-6 text-sm text-muted-foreground md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3">
          <p>RouteOps CRM - публичный демонстрационный продукт на базе Agentic CRM Product Blueprint.</p>
          <p>В демо нет закрытых клиентских данных, чужих брендов, приватных каталогов и живых ключей.</p>
        </div>
      </footer>
    </div>
  )
}

function CalculatorIcon({ className }: { className?: string }) {
  return <PhoneCall className={className} />
}

export default App
