import { motion } from "framer-motion";
import heroImg from "@/assets/etmday-hero.jpg";
import colorsLine from "@/assets/colors-underline.svg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  viewport: { once: true }
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="EtMday evento" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left: Title */}
          <motion.div {...fadeUp}>
            <p className="mono-label mb-2 md:mb-4 normal-case">EtMday2026 - Stands de emprendedores</p>
            <h1 className="display-l1 text-foreground mb-3 md:mb-6">
              Ten un stand en el EtMday<span className="text-primary">2026</span>
            </h1>
            <img src={colorsLine} alt="" className="w-48 mb-3 md:mb-6" />
            <p className="text-lg text-muted-foreground max-w-lg mb-1 md:mb-2">
               Encuentro Internacional de Innovación, Emprendimiento e Inversión más grande de Latinoamérica.
            </p>
          </motion.div>

          {/* Right: Description */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
            <div className="border border-border p-4 md:p-8 rounded-lg">
              {/* Mobile: compact version */}
              <div className="block md:hidden">
                <p className="text-muted-foreground mb-2">EtMday no es una feria.</p>
                <p className="text-foreground mb-3 text-sm">
                  Es donde emprendedores, empresas e inversionistas se encuentran cara a cara.
                </p>
                <p className="text-foreground font-semibold mb-1 text-sm">Conexión. Colaboración. Oportunidades reales.</p>
                <p className="text-primary font-bold mb-4">
                  Sé parte del corazón del EtMday. Es gratis.
                </p>
                <a href="https://emprendetumente.vform.io/process/9345/public" target="_blank" rel="noopener noreferrer" className="btn-etm-primary">Postular</a>
              </div>
              {/* Desktop: full version */}
              <div className="hidden md:block">
                <p className="text-muted-foreground mb-4">EtMday no es una feria.</p>
                <p className="text-foreground mb-4">
                  Es el punto de encuentro donde emprendedores, grandes empresas, inversionistas, 
                  organizaciones públicas, privadas y mentores se cruzan cara a cara.
                </p>
                <div className="space-y-1 mb-6">
                  <p className="text-foreground font-semibold">Es intensidad.</p>
                  <p className="text-foreground font-semibold">Es colaboración.</p>
                  <p className="text-foreground font-semibold">Es comunidad.</p>
                  <p className="text-foreground font-semibold">Es oportunidad real.</p>
                </div>
                <p className="text-primary font-bold text-lg mb-6">
                  Sé parte del corazón del EtMday en los stands de emprendedores. Es gratis.
                </p>
                <a href="https://emprendetumente.vform.io/process/9345/public" target="_blank" rel="noopener noreferrer" className="btn-etm-primary">Postular</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default HeroSection;