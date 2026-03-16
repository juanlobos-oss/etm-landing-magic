import { motion } from "framer-motion";
import imgStartups from "@/assets/stands-startups.jpg";
import imgTradicional from "@/assets/stands-tradicional.jpg";
import imgBazar from "@/assets/stands-bazar.jpg";
import imgID from "@/assets/stands-id.jpg";

const categories = [
  {
    icon: "💻",
    title: "Startups & Scaleups",
    image: imgStartups,
    description: "Negocios de base tecnológica con alto impacto y potencial de escalamiento.",
  },
  {
    icon: "🛍",
    title: "Emprendimientos Tradicionales",
    image: imgTradicional,
    description: "Productos y servicios tradicionales que buscan escalar sus negocios al siguiente nivel.",
  },
  {
    icon: "🛒",
    title: "Bazar Tradicional",
    image: imgBazar,
    description: "Productos tradicionales innovadores que buscan, principalmente, vender.",
  },
  {
    icon: "🧪",
    title: "Proyectos de I+D",
    image: imgID,
    description: "Investigación aplicada por centros de estudio, ciencia y desarrollo tecnológico.",
  },
];

const CategoriesSection = () => {
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
          <p className="mono-label mb-3">Categorías 2026</p>
          <h2 className="display-l2 text-foreground">
            ESTE AÑO ABRIMOS 4 LÍNEAS DE POSTULACIÓN
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Para ordenar mejor la experiencia y potenciar el impacto, los stands de emprendedores del 
            EtMday2026 tendrán cuatro categorías oficiales:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 etm-grid">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className="etm-grid-item group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <p className="text-2xl mb-2">{cat.icon}</p>
              <h3 className="text-foreground font-bold text-lg mb-4">{cat.title}</h3>
              <div className="aspect-[4/3] overflow-hidden mb-4 border border-border">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="text-muted-foreground text-sm">{cat.description}</p>
              <div className="h-1 bg-primary/0 group-hover:bg-primary mt-4 transition-all duration-300 w-0 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
