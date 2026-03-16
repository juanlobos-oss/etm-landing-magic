import { motion } from "framer-motion";

const stats = [
  { number: "+56.000", label: "asistentes" },
  { number: "+750", label: "stands de emprendedores" },
  { number: "110.000", label: "conexiones registradas" },
  { number: "+120", label: "organizaciones del ecosistema" },
  { number: "+10", label: "países presentes" },
];

const StatsBar = () => {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <p className="mono-label text-background/70 pt-4 pb-2">Solo en 2025:</p>
        <div className="grid grid-cols-2 md:grid-cols-5 border-t border-background/20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="border-b md:border-b-0 border-r border-background/20 p-6 last:border-r-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <p className="stat-number text-background">{stat.number}</p>
              <p className="text-sm text-background/80 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
