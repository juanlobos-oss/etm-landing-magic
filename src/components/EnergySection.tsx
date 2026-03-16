import { motion } from "framer-motion";
import energyImg from "@/assets/etmday-energy.jpg";
import colorsLine from "@/assets/colors-underline.svg";

const testimonials = [
  {
    quote: "EtMday tiene una vibra única: personas motivadas, interesadas, con mentalidad abierta. Esa energía se contagia.",
    author: "Emprendedor EtMday 2025",
  },
  {
    quote: "Me permitió conectar con empresas que de otra forma no habría podido contactar.",
    author: "Fundadora, Startup Zona Celeste",
  },
  {
    quote: "Conectamos con dos clientes y muchos fundadores, fue increíble.",
    author: "CEO, Scaleup Tecnológica",
  },
];

const energyPoints = [
  "Es cuando un emprendedor le presenta su producto a otro y terminan colaborando.",
  "Es cuando un inversionista se queda 20 minutos en tu stand.",
  "Es cuando una empresa grande te dice \"conversemos después del evento\".",
  "Es cuando conoces a alguien que está pasando exactamente por lo mismo que tú.",
];

const EnergySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mono-label mb-3">La energía</p>
          <h2 className="display-l2 text-foreground mb-4">
            La energía del EtMday
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Hay algo que no se puede explicar en una pauta. <span className="text-foreground font-bold">Se siente.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: energy points */}
          <ul className="space-y-4">
            {energyPoints.map((point, i) => (
              <motion.li
                key={i}
                className="text-muted-foreground border-l-2 border-primary pl-4 py-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                {point}
              </motion.li>
            ))}
          </ul>

          {/* Right: photo + quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="border border-border overflow-hidden rounded-md">
              <img src={energyImg} alt="Energía EtMday" className="w-full aspect-video object-cover" />
            </div>
            <div className="border border-primary/30 bg-primary/5 p-5 rounded-md">
              <p className="text-primary italic text-lg font-medium">
                *El espacio más valorado para hacer networking en todo el evento fueron los stands de emprendedores.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Color line */}
        <img src={colorsLine} alt="" className="w-full max-w-lg h-4 mb-8" />

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 etm-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="etm-grid-item"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <p className="text-foreground text-lg mb-4">"{t.quote}"</p>
              <p className="mono-label text-primary">{t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnergySection;
