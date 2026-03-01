import NavigationBar from "@/components/strategy/NavigationBar";
import HeroSection from "@/components/strategy/HeroSection";
import ProblemSection from "@/components/strategy/ProblemSection";
import ConvergenceSection from "@/components/strategy/ConvergenceSection";
import TheoryOfChange from "@/components/strategy/TheoryOfChange";
import LayersSection from "@/components/strategy/LayersSection";
import FinancialModel from "@/components/strategy/FinancialModel";
import PriorityMatrix from "@/components/strategy/PriorityMatrix";
import OutputFormats from "@/components/strategy/OutputFormats";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" id="top">
      <NavigationBar />
      <HeroSection />
      <ProblemSection />
      <ConvergenceSection />
      <div id="toc">
        <TheoryOfChange />
      </div>
      <LayersSection />
      <FinancialModel />
      <div id="matrix">
        <PriorityMatrix />
      </div>
      <div id="formats">
        <OutputFormats />
      </div>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm font-mono">
            MHPSS Strategy Framework · Ukraine · 2025
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            Humanitarian-Development-Peace Nexus · Секторальна імплементація
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
