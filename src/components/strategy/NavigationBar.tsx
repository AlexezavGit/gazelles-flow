import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "top", label: "Огляд" },
  { id: "problem", label: "Проблеми" },
  { id: "toc", label: "Theory of Change" },
  { id: "layers", label: "Шари" },
  { id: "finance", label: "Фінанси" },
  { id: "matrix", label: "Пріоритети" },
  { id: "formats", label: "Формати" },
];

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: scrolled ? 0 : -60, opacity: scrolled ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center h-12 gap-1 overflow-x-auto">
        <span className="text-primary font-display font-bold text-sm mr-4 shrink-0">MHPSS UA</span>
        {sections.map(s => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors px-3 py-1 rounded shrink-0"
          >
            {s.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default NavigationBar;
