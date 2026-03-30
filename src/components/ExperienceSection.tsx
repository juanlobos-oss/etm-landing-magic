import { motion } from "framer-motion";
import exp1 from "@/assets/exp-1.jpg";
import exp2 from "@/assets/exp-2.jpg";

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Photos */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-secondary border border-border overflow-hidden rounded-md">
                <img src={exp1} alt="Stand EtMday" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-secondary border border-border overflow-hidden rounded-md">
                <img src={exp2} alt="Stand EtMday" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-secondary border border-border overflow-hidden rounded-md">
                <img src="/lovable-uploads/DSC08736.jpg" alt="Stand EtMday VR" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-secondary border border-border overflow-hidden rounded-md">
                <img src="/lovable-uploads/ETM_Dia2_MM_MG_5345.jpg" alt="Stand EtMday crowd" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <p className="mono-label mb-3">La experiencia</p>
            <h2 className="display-l2 text-foreground mb-6">
              ¿Cómo es tener un stand en EtMday?
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
            <a href="#proceso" className="btn-etm-primary">Postular</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
