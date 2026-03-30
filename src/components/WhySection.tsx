import { motion } from "framer-motion";
import why1 from "@/assets/why-1.jpg";
import why3 from "@/assets/why-3.jpg";


const benefits = [
  "Conectar con tomadores de decisión.",
  "Conversar con inversionistas.",
  "Conocer mentores.",
  "Generar alianzas.",
  "Encontrar clientes.",
  "Validar tu propuesta.",
  "Expandir tu red.",
  "Colaborar.",
  "Llenarte de energía emprendedora.",
  "Aprender.",
];

const WhySection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-3 md:gap-16 items-stretch">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <p className="mono-label mb-3">¿Por qué participar?</p>
            <h2 className="display-l2 text-foreground mb-6">
              ¿Por qué postular a un stand en el EtMday?
            </h2>
            <p className="text-muted-foreground mb-6">
              Porque aquí no vienes solo a "estar presente".
            </p>
            <p className="text-foreground font-semibold mb-4">Vienes a:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {b}
                </motion.li>
              ))}
            </ul>
            <div className="mb-3 md:mb-8">
              <a href="https://emprendetumente.vform.io/process/9345/public" target="_blank" rel="noopener noreferrer" className="btn-etm-primary">Postular</a>
            </div>
            <div className="overflow-hidden rounded-md border border-border">
              <img src="/lovable-uploads/0C5A1337.jpg" alt="Networking EtMday" className="w-full h-auto object-cover" />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3 md:h-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="md:flex-1 overflow-hidden rounded-md border border-border">
              <img src={why3} alt="Stands EtMday" className="w-full h-auto md:h-full object-cover" />
            </div>
            <div className="md:flex-1 overflow-hidden rounded-md border border-border">
              <img src={why1} alt="Emprendedores EtMday" className="w-full h-auto md:h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
