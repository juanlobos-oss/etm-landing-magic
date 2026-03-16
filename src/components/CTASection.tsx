import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="postular" className="py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <p className="mono-label text-background/70 mb-4">EtMday 2026</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-background mb-6">
            ¿ESTÁS LISTO PARA JUGAR EN GRANDE?
          </h2>
          <p className="text-background/80 text-lg max-w-2xl mx-auto mb-4">
            EtMday 2026 no es masivo por casualidad. Es grande porque el ecosistema lo hace grande.
          </p>
          <div className="space-y-1 text-background/90 font-semibold text-xl mb-8">
            <p>Si tienes ambición.</p>
            <p>Si tienes claridad.</p>
            <p>Si quieres crecer.</p>
            <p className="text-background font-black text-2xl mt-2">Este es tu lugar.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://etmday.org"
              className="bg-background text-primary font-black uppercase px-10 py-5 hover:bg-foreground hover:text-background transition-colors duration-200 inline-block text-center text-lg"
            >
              POSTULAR AHORA
            </a>
            <a
              href="https://etmday.org"
              className="border-2 border-background text-background font-bold uppercase px-10 py-5 hover:bg-background hover:text-primary transition-colors duration-200 inline-block text-center bg-transparent"
            >
              REVISA LAS BASES
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
