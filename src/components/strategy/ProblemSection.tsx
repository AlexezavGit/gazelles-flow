import { motion } from "framer-motion";

const problems = [
  {
    title: "Стик компетенцій МОЗ × МінЕконом",
    desc: "Відсутні показники впливу ментального здоров'я на економіку. 2.5% бюджету МОЗ витрачається на психіатричні диспансери. Жодна інституція не створює умови для «стада газелей».",
    metric: "2.5%",
    metricLabel: "бюджету МОЗ на диспансери",
    color: "coral",
  },
  {
    title: "Тіньовий приватний сектор",
    desc: "~8 000 ФОП-психологів поза координацією. 30–40% часу на адміністрування після «цифровізації». Жодна система не є CRM для практики.",
    metric: "~8K",
    metricLabel: "ФОП без координації",
    color: "secondary",
  },
  {
    title: "Провал конверсії навчання",
    desc: "700 навчено з клінічною супервізією → 42 практикують (6%). 117 000 «сертифіковано» mhGAP — лише 1 000 точок підписали пакет НСЗУ.",
    metric: "6%",
    metricLabel: "конверсія навчання → практика",
    color: "primary",
  },
  {
    title: "89% ресурсів — у стіни диспансерів",
    desc: "Гуманітарне реагування надало 3.9M бенефіціарів, але ресурси течуть у застарілу інфраструктуру. Депресія (2.5% довоєнна) не лікувалась і до війни.",
    metric: "89%",
    metricLabel: "ресурсів у диспансери",
    color: "lavender",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-secondary font-mono text-xs tracking-[0.3em] uppercase mb-3">Діагностика</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Системні <span className="text-gradient-gold">проблеми</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Четвертий вимір кризи: стик компетенцій між регулюванням, гуманітарним реагуванням та ринковим розвитком
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="layer-card rounded-lg p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <div className="text-right shrink-0 ml-4">
                  <div className={`text-2xl font-display font-bold text-${p.color}`}>{p.metric}</div>
                  <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">{p.metricLabel}</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
