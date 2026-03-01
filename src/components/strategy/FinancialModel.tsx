import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const fundingSources = [
  { name: "Спільнокошт / P2P", value: 15, color: "hsl(43, 85%, 55%)" },
  { name: "Корпоративна філантропія", value: 10, color: "hsl(35, 90%, 45%)" },
  { name: "Обласні бюджети + кредити", value: 15, color: "hsl(200, 65%, 35%)" },
  { name: "Бюджетне співфінансування", value: 20, color: "hsl(170, 55%, 40%)" },
  { name: "Системний фонд ЕБРД-НБУ", value: 25, color: "hsl(260, 40%, 60%)" },
  { name: "Донори (SIBs/DIBs/RBF)", value: 15, color: "hsl(10, 75%, 55%)" },
];

const financialStack = [
  { level: "Рівень 1", title: "Найближче оточення", desc: "Соціальний договір, P2P Монобанк, спільнокошт", amount: "$375–675M", derisking: "Низький ризик, високе довір'я" },
  { level: "Рівень 2", title: "Корпоративний + обласний", desc: "CSR банків, обласні бюджети, кредити на відновлення", amount: "$625–1.125B", derisking: "Де-ризикування через Рівень 1" },
  { level: "Рівень 3", title: "Бюджетне + системний фонд", desc: "Держбюджет, ЕБРД–НБУ фонд, хартія людського капіталу", amount: "$1.125–2.025B", derisking: "Де-ризиковане Рівнями 1+2" },
  { level: "Рівень 4", title: "Міжнародне фінансування", desc: "SIBs, DIBs, RBF (World Bank GFF), якірна інвестиція", amount: "$375–675M", derisking: "Страхування ризиків нестачі" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const FinancialModel = () => {
  return (
    <section id="finance" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">Фінансова модель</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blended <span className="text-gradient-gold">Finance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Диверсифікована ресурсна мобілізація з де-ризикуванням через послідовне нарощування шарів фінансування
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Pie chart */}
          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }} className="layer-card rounded-lg p-6">
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">Структура фінансування</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={fundingSources}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {fundingSources.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: 'hsl(220, 22%, 10%)',
                      border: '1px solid hsl(220, 15%, 18%)',
                      borderRadius: '8px',
                      color: 'hsl(45, 20%, 92%)',
                      fontSize: '13px',
                    }}
                    formatter={(value: number) => [`${value}%`, '']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {fundingSources.map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: s.color }} />
                  <span className="text-muted-foreground">{s.name} ({s.value}%)</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Financial stack */}
          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">Послідовність де-ризикування</h3>
            {financialStack.map((level, i) => (
              <div key={i} className="layer-card rounded-lg p-5 border-l-2 border-l-primary/60">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-primary">{level.level}</span>
                  <span className="font-display font-bold text-primary text-lg">{level.amount}</span>
                </div>
                <h4 className="font-display font-semibold text-foreground">{level.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{level.desc}</p>
                <p className="text-xs text-accent font-mono mt-2">{level.derisking}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.3 }} className="layer-card rounded-lg p-8 text-center glow-gold">
          <p className="text-muted-foreground text-sm mb-2">Загальна потреба: 50M годин × $70/год</p>
          <div className="font-display text-5xl font-bold text-gradient-gold mb-2">$2.5 — 4.5B</div>
          <p className="text-muted-foreground text-sm">В залежності від повернення діаспори та темпів мобілізації «газелей»</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialModel;
