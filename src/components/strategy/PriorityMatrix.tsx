import { motion } from "framer-motion";

interface Project {
  name: string;
  impact: number; // 1-5
  feasibility: number; // 1-5
  quickWin: boolean;
  layer: string;
}

const projects: Project[] = [
  { name: "Проєкт з банківським сектором", impact: 5, feasibility: 4, quickWin: true, layer: "FinTech" },
  { name: "P2P платежі / спільнокошт", impact: 4, feasibility: 5, quickWin: true, layer: "FinTech" },
  { name: "Крипто-кампейн ЮНІСЕФ", impact: 3, feasibility: 4, quickWin: true, layer: "FinTech" },
  { name: "VR Bravemind адаптація", impact: 5, feasibility: 3, quickWin: false, layer: "Клінічний" },
  { name: "EMDR тренінг Геха", impact: 5, feasibility: 4, quickWin: true, layer: "Клінічний" },
  { name: "Центр експертизи КНУ", impact: 5, feasibility: 3, quickWin: false, layer: "Клінічний" },
  { name: "eHealth інтеграція (FHIR)", impact: 4, feasibility: 2, quickWin: false, layer: "Цифровий" },
  { name: "Перший dataset 10 років", impact: 5, feasibility: 3, quickWin: false, layer: "Дані" },
  { name: "Наскрізні показники ВВП", impact: 5, feasibility: 2, quickWin: false, layer: "Дані" },
  { name: "Податкові преференції", impact: 4, feasibility: 3, quickWin: false, layer: "Регуляторний" },
  { name: "Regulatory sandbox", impact: 4, feasibility: 3, quickWin: false, layer: "Регуляторний" },
  { name: "Корпоративна філантропія", impact: 3, feasibility: 5, quickWin: true, layer: "FinTech" },
  { name: "Тренінги побратимів", impact: 3, feasibility: 4, quickWin: true, layer: "Цифровий" },
  { name: "SIBs / DIBs запуск", impact: 5, feasibility: 2, quickWin: false, layer: "FinTech" },
];

const quickWins = projects.filter(p => p.quickWin).sort((a, b) => (b.impact + b.feasibility) - (a.impact + a.feasibility));

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const PriorityMatrix = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">Пріоритизація</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Матриця <span className="text-gradient-gold">Impact × Feasibility</span>
          </h2>
        </motion.div>

        {/* Matrix table */}
        <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }} className="overflow-x-auto mb-16">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left font-mono text-xs uppercase tracking-wider text-muted-foreground py-3 px-4">Проєкт</th>
                <th className="text-center font-mono text-xs uppercase tracking-wider text-muted-foreground py-3 px-4">Шар</th>
                <th className="text-center font-mono text-xs uppercase tracking-wider text-muted-foreground py-3 px-4">Impact</th>
                <th className="text-center font-mono text-xs uppercase tracking-wider text-muted-foreground py-3 px-4">Feasibility</th>
                <th className="text-center font-mono text-xs uppercase tracking-wider text-muted-foreground py-3 px-4">Score</th>
                <th className="text-center font-mono text-xs uppercase tracking-wider text-muted-foreground py-3 px-4">Quick Win</th>
              </tr>
            </thead>
            <tbody>
              {projects.sort((a, b) => (b.impact + b.feasibility) - (a.impact + a.feasibility)).map((p, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-4 font-body text-foreground">{p.name}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">{p.layer}</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center gap-0.5">
                      {[1,2,3,4,5].map(n => (
                        <div key={n} className={`w-2 h-2 rounded-full ${n <= p.impact ? 'bg-primary' : 'bg-muted'}`} />
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center gap-0.5">
                      {[1,2,3,4,5].map(n => (
                        <div key={n} className={`w-2 h-2 rounded-full ${n <= p.feasibility ? 'bg-accent' : 'bg-muted'}`} />
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center font-mono text-primary font-bold">{p.impact + p.feasibility}</td>
                  <td className="py-3 px-4 text-center">{p.quickWin ? <span className="text-primary">★</span> : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Quick wins highlight */}
        <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
          <h3 className="font-display text-2xl font-bold text-foreground mb-6">
            Quick Wins — <span className="text-primary">Перший рік</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {quickWins.slice(0, 6).map((p, i) => (
              <div key={i} className="layer-card rounded-lg p-5 glow-gold">
                <div className="text-xs font-mono text-primary/60 uppercase tracking-wider mb-2">{p.layer}</div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{p.name}</h4>
                <div className="flex gap-4 text-xs text-muted-foreground font-mono">
                  <span>Impact: {p.impact}/5</span>
                  <span>Feasibility: {p.feasibility}/5</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriorityMatrix;
