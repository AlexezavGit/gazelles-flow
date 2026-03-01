import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const ConvergenceSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div {...fadeInUp} transition={{ duration: 0.8 }}>
          <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-6">Точка конвергенції</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            HDP Nexus для <span className="text-gradient-gold">MHPSS</span>
          </h2>
          
          {/* Three circles convergence */}
          <div className="flex justify-center mb-12">
            <div className="relative w-80 h-72">
              {/* Humanitarian */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full border-2 border-secondary/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl mb-1">🔴</div>
                  <div className="text-xs font-mono text-secondary">Гуманітарне</div>
                  <div className="text-[10px] text-muted-foreground">3.9M бенефіціарів</div>
                </div>
              </div>
              {/* Clinical */}
              <div className="absolute bottom-0 left-4 w-36 h-36 rounded-full border-2 border-accent/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl mb-1">🏥</div>
                  <div className="text-xs font-mono text-accent">Клінічне</div>
                  <div className="text-[10px] text-muted-foreground">89% у диспансери</div>
                </div>
              </div>
              {/* Sustainable */}
              <div className="absolute bottom-0 right-4 w-36 h-36 rounded-full border-2 border-primary/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl mb-1">📈</div>
                  <div className="text-xs font-mono text-primary">Сталий</div>
                  <div className="text-[10px] text-muted-foreground">4-5% ВВП у ЄС</div>
                </div>
              </div>
              {/* Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center glow-gold">
                <span className="text-xs font-mono font-bold text-primary">Nexus</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Стоїмо на точці конвергенції між гуманітарним реагуванням, клінічною практикою та сталим 
            розвитком. Технологічний розвиток з FinTech та війна, здатна мобілізувати ресурси —
            два вектори, що створюють вікно можливостей для «стада газелей».
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ConvergenceSection;
