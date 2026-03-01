import { motion } from "framer-motion";

const layers = [
  {
    id: "fintech",
    number: "01",
    title: "FinTech & Blended Finance",
    color: "primary",
    projects: [
      "Проєкт з банківським сектором (ЕБРД–НБУ–38 банків)",
      "Корпоративна філантропія + CSR банків",
      "P2P платежі (100K збірок в Монобанку 2025)",
      "Крипто-кампейн з ЮНІСЕФ",
      "SIBs / DIBs / Results-Based Financing",
      "Системний фонд ЕБРД–НБУ + хартія людського капіталу",
    ],
    keyMetric: "$2.5–4.5B",
    metricLabel: "Цільовий обсяг",
    bestPractice: "UK NHS IAPT: £2.4B/рік на 1.2M пацієнтів. Social Impact Bonds для mental health — повернення інвестицій при досягненні KPI.",
  },
  {
    id: "digital",
    number: "02",
    title: "Цифровізація & Мідлвер",
    color: "secondary",
    projects: [
      "МІС – eHealth (Хелсі) інтеграція",
      "HL7 FHIR interoperability шина",
      "API-first платформа координації",
      "Чат-бот + опитування бенефіціарів",
      "DHIS2 для агрегованих даних WHO",
      "Тренінги для персоналу шпиталів",
    ],
    keyMetric: "8–24",
    metricLabel: "Цифрових систем для інтеграції",
    bestPractice: "Estonia X-Road: interoperability layer між 900+ системами. Не блокчейн — API-шина. Модель для України.",
  },
  {
    id: "clinical",
    number: "03",
    title: "Клінічна ефективність",
    color: "accent",
    projects: [
      "EMDR тренінг (Геха, Ізраїль) — 8-12 сеансів",
      "VR Bravemind (Skip Rizzo, USC) — 6-12 сеансів, 90%",
      "Центр експертизи КНУ Шевченка",
      "Stepped care model (mhGAP → спеціалізація)",
      "Measurement-based care (PHQ-9, PCL-5)",
      "Paid clinical placement (IAPT конверсія 60-70%)",
    ],
    keyMetric: "6–12",
    metricLabel: "Сеансів замість 12–20",
    bestPractice: "UK IAPT: paid placement = конверсія 60-70%. WHO золотий стандарт EMDR — без культурної адаптації.",
  },
  {
    id: "sustainable",
    number: "04",
    title: "Сталий розвиток «Газелей»",
    color: "teal",
    projects: [
      "Формалізація приватної практики (4 потоки)",
      "Гуманітарний сектор → приватна практика",
      "Діаспорянські психологи — повернення",
      "Перекваліфікація психіатрів → менеджери центрів",
      "Franchise/network practice model",
      "Quality assurance framework",
    ],
    keyMetric: "50–60K",
    metricLabel: "Фахівців «газелей»",
    bestPractice: "4-5% ВВП в ЄС та UK. $8B ВВП України (бюджет 2021). Regulatory sandbox як у fintech.",
  },
  {
    id: "data",
    number: "05",
    title: "Дані & Координація",
    color: "lavender",
    projects: [
      "Перший dataset 10 років приватної практики",
      "Моніторинг + інтеграція фінансових систем",
      "Відкриті дані для координації",
      "Цифрова координація програм фінансування",
      "Наскрізні показники до ВВП (DALY averted)",
      "WHO HESPER methodology",
    ],
    keyMetric: "10+",
    metricLabel: "Років даних для аналізу",
    bestPractice: "DALY-based impact measurement. Показники завершених курсів + повернення до роботи замість процесних KPI.",
  },
  {
    id: "regulatory",
    number: "06",
    title: "Регуляторний шар",
    color: "gold-dim",
    projects: [
      "Податкові преференції на 5 років",
      "Кредити на відновлення + ментальний добробут",
      "Приміщення для практики",
      "Поетапна ліцензія (provisional → full)",
      "Співфінансування громада–корпорація–донор–бюджет",
      "Regulatory sandbox",
    ],
    keyMetric: "5",
    metricLabel: "Років преференцій",
    bestPractice: "UK Regulatory Sandbox: поетапна ліцензія знижує бар'єри входу на 40%. Social franchise model.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const LayersSection = () => {
  return (
    <section id="layers" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">Архітектура рішення</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Шість <span className="text-gradient-gold">шарів</span> трансформації
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Кожен шар — самостійний блок із проєктами, який підсилює сусідні шари
          </p>
        </motion.div>

        <div className="space-y-6">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.id}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="layer-card rounded-lg overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Left: header */}
                  <div className="md:w-1/3 shrink-0">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-primary/40 font-mono text-sm">{layer.number}</span>
                      <h3 className="font-display text-2xl font-bold text-foreground">{layer.title}</h3>
                    </div>
                    <div className="mt-4 p-3 rounded-md bg-muted/50 border border-border">
                      <div className="text-3xl font-display font-bold text-primary">{layer.keyMetric}</div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mt-1">{layer.metricLabel}</div>
                    </div>
                  </div>

                  {/* Middle: projects */}
                  <div className="md:w-1/3">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-3">Проєкти</p>
                    <ul className="space-y-2">
                      {layer.projects.map((proj, j) => (
                        <li key={j} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="text-primary mt-1 shrink-0">▸</span>
                          {proj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: best practice */}
                  <div className="md:w-1/3">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-3">Best Practice</p>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">{layer.bestPractice}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayersSection;
