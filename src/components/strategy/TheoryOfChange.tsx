import { motion } from "framer-motion";

const steps = [
  { label: "Inputs", title: "Blended Finance", desc: "SIBs/DIBs, P2P, крипто, ЕБРД, бюджети, спільнокошт", icon: "💰" },
  { label: "Activities", title: "Цифрова платформа", desc: "HL7 FHIR, API-first, координація, CRM для фахівців", icon: "🔗" },
  { label: "Outputs", title: "Сертифіковані фахівці", desc: "50-60K у приватній практиці, EMDR + VR Bravemind", icon: "🎓" },
  { label: "Outcomes", title: "Завершені курси", desc: "6-12 сеансів (EMDR/VR) замість 12-20, PCL-5 ↓", icon: "✅" },
  { label: "Impact", title: "Вплив на ВВП", desc: "DALY averted, повернення до зайнятості, народжуваність", icon: "📈" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const TheoryOfChange = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-3">Theory of Change</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Теорія <span className="text-gradient-accent">змін</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Від ресурсної мобілізації до вимірюваного економічного впливу — ланцюг за стандартами OECD DAC
          </p>
        </motion.div>

        {/* Chain visualization */}
        <div className="flex flex-col md:flex-row items-stretch gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex-1 relative"
            >
              <div className="layer-card rounded-lg p-5 h-full flex flex-col hover:border-accent/30 transition-colors">
                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-accent mb-2">{step.label}</div>
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{step.desc}</p>
              </div>
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-accent/60 text-xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheoryOfChange;
