import { motion } from "framer-motion";
import why1 from "@/assets/why-1.jpg";
import why2 from "@/assets/why-2.jpg";
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
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
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
            <ul className="space-y-2 mb-8">
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
            <a href="#proceso" className="btn-etm-primary">Postular</a>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-3 h-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Large image spanning full width - taller */}
            <div className="col-span-2 overflow-hidden rounded-md border border-border flex-1">
              <img src={why3} alt="Stands EtMday" className="w-full h-full object-cover" style={{ minHeight: '220px' }} />
            </div>
            {/* Two smaller images side by side - taller to fill remaining space */}
            <div className="overflow-hidden rounded-md border border-border flex-1">
              <img src={why1} alt="Emprendedores EtMday" className="w-full h-full object-cover" style={{ minHeight: '200px' }} />
            </div>
            <div className="overflow-hidden rounded-md border border-border flex-1">
              <img src={why2} alt="Innovación EtMday" className="w-full h-full object-cover object-top" style={{ minHeight: '200px' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
