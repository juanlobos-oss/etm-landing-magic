import { motion } from "framer-motion";

import colorsLine from "@/assets/colors-underline.svg";

const testimonials = [
  {
    quote: "Conecté de maneras inesperadas. Iba principalmente a buscar potenciales clientes, pero encontré muchas posibles colaboraciones en otras líneas que no tenía en mi radar.”",
    author: "Vania Tapia, emprendedora"
  },
  {
    quote: "Volvería a repetir esta experiencia mil veces, porque me recordó por qué empecé, hacia dónde voy y que sí es posible crecer cuando otras personas creen en ti.\nGracias por abrir puertas, por creer y por impulsar nuestros sueños.”",
    author: "Luisa Licancura, Emprendedora"
  },
  {
    quote: "Gracias a nuestro stand, llegaron personas de todo tipo: inversionistas, potenciales clientes y posibles alianzas, lo que nos permitió generar una lista de contactos de muy buena calidad.",
    author: "Frank Oliva, emprendedor"
  }
];

const energyPoints = [
  "Es cuando un emprendedor le presenta su producto a otro y terminan colaborando.",
  "Es cuando un inversionista se queda 20 minutos en tu stand.",
  "Es cuando una empresa grande te dice \"conversemos después del evento\".",
  "Es cuando conoces a alguien que está pasando exactamente por lo mismo que tú.",
  "Es cuando un cliente te da retroalimentaciones en vivo sobre tu producto o servicio.",
  "Es cuando un empresario te da un consejo que te cambia la perspectiva.",
];

const EnergySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-stretch">
          {/* Left: header + energy points */}
          <div className="flex flex-col h-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="mono-label mb-3">La energía</p>
              <h2 className="display-l2 text-foreground mb-4">
                La energía del EtMday
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Hay cosas que no se explican. <span className="text-foreground font-bold">Se viven.</span>
              </p>
            </motion.div>
            <ul className="space-y-4 flex-1">
              {energyPoints.map((point, i) =>
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
              )}
            </ul>
          </div>

          {/* Right: photo + quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="border border-border overflow-hidden rounded-md">
              <img src="/lovable-uploads/c1420e18-2bf1-4482-9dc4-5ad87684fd89.jpg" alt="Energía EtMday" className="w-full aspect-[16/10] object-cover" />
            </div>
            <div className="border border-primary/30 bg-primary/5 p-5 rounded-md">
              <p className="text-foreground text-base font-light font-sans">
                Los stands de emprendedores fueron el{" "}
                <span className="text-primary font-bold">espacio de networking más valorado de todo el evento</span>
                , elegido por el 31% de los asistentes por encima de cualquier otro espacio, incluyendo las actividades de conexión formales y los stands de grandes empresas.
              </p>
              <p className="text-muted-foreground text-sm mt-3">
                Global Metrics. (2025). Encuesta de satisfacción digital EtMday.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Color line */}
        <img src={colorsLine} alt="" className="w-full max-w-md mb-8" />

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 etm-grid">
          {testimonials.map((t, i) =>
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
          )}
        </div>
      </div>
    </section>
  );
};

export default EnergySection;
