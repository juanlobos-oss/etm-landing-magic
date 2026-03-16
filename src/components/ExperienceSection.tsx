import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <p className="mono-label mb-3">La experiencia</p>
            <h2 className="display-l2 text-foreground mb-6">
              ¿CÓMO ES TENER UN STAND EN ETMDAY?
            </h2>
            <div className="space-y-1 text-muted-foreground mb-6">
              <p>Es intenso.</p>
              <p>Es exigente.</p>
              <p>Es desafiante.</p>
            </div>
            <p className="text-foreground mb-6">
              Pero es una de las experiencias más potentes del año para muchos emprendedores.
            </p>
            <p className="text-primary font-bold text-xl mb-4">
              Tu stand no es solo un espacio físico. Es tu punto de conexión.
            </p>
            <p className="text-foreground mb-4">Es donde:</p>
            <ul className="space-y-2 mb-8">
              {[
                "Empresas te descubren.",
                "Inversionistas se detienen.",
                "Otros emprendedores te proponen colaboraciones.",
                "Nacen conversaciones que no estaban planificadas.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#postular" className="btn-etm-primary">POSTULAR</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-secondary border border-border flex items-center justify-center overflow-hidden">
                <img src="https://etmday.org/content/uploads/2026/01/etm-10-1.jpg" alt="Stand EtMday" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-secondary border border-border flex items-center justify-center overflow-hidden">
                <img src="https://etmday.org/content/uploads/2026/01/etm-38-scaled.jpg" alt="Stand EtMday" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-secondary border border-border flex items-center justify-center overflow-hidden col-span-2">
                <img src="https://etmday.org/content/uploads/2026/01/0C5A1382-scaled.jpg" alt="Stand EtMday" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
