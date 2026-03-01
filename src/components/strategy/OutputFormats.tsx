import { motion } from "framer-motion";

const formats = [
  {
    icon: "📊",
    title: "Pitch Deck / Інвестори",
    desc: "Для банківського сектору, ЕБРД, корпоративних партнерів. ROI-орієнтовано, SIBs/DIBs фреймворк.",
    audience: "ЕБРД, НБУ, банки, корпорації",
    priority: "Перший",
  },
  {
    icon: "📋",
    title: "Donor Proposal",
    desc: "Для USAID, GFF, World Bank, ЮНІСЕФ. Theory of Change, LogFrame, DALY-based impact.",
    audience: "USAID, World Bank, UNICEF, EU",
    priority: "Другий",
  },
  {
    icon: "🇺🇸",
    title: "US Embassy Proposal",
    desc: "Якірна інвестиція $2B контекст. Alignment з Grand Bargain reset та Tom Fletcher реформами.",
    audience: "Посольство США",
    priority: "Третій",
  },
  {
    icon: "🏛️",
    title: "Policy Brief для КМУ",
    desc: "Стратегічний документ: регуляторний sandbox, податкові преференції, поетапна ліцензія.",
    audience: "Координаційна рада КМУ, МОЗ, МінЕконом",
    priority: "Четвертий",
  },
  {
    icon: "🗺️",
    title: "Стратегічна карта (цей сайт)",
    desc: "Інтерактивна візуалізація для стейкхолдерів. Theory of Change, фінансова модель, пріоритизація.",
    audience: "Усі стейкхолдери",
    priority: "Живий документ",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const OutputFormats = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-3">Вихідні формати</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Від стратегії до <span className="text-gradient-accent">дії</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formats.map((f, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`layer-card rounded-lg p-6 hover:border-primary/30 transition-colors ${i === 0 ? 'md:col-span-2 lg:col-span-1 glow-gold' : ''}`}
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-primary mb-2">{f.priority}</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{f.desc}</p>
              <div className="text-xs font-mono text-accent">{f.audience}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutputFormats;
