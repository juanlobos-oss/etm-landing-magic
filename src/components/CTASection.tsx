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
          <p className="text-xs tracking-widest text-primary-foreground/70 mb-4 font-medium">EtMday 2026</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-primary-foreground mb-6">
            ¿Estás listo para jugar en grande?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-4">
            EtMday 2026 no es masivo por casualidad. Es grande porque el ecosistema lo hace grande.
          </p>
          <div className="space-y-1 text-primary-foreground/90 font-semibold text-xl mb-8">
            <p>Si tienes ambición.</p>
            <p>Si tienes claridad.</p>
            <p>Si quieres crecer.</p>
            <p className="text-primary-foreground font-black text-2xl mt-2">Este es tu lugar.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://emprendetumente.vform.io/process/9901/public"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-foreground font-black uppercase px-10 py-5 rounded-full hover:bg-foreground hover:text-background transition-colors duration-200 inline-block text-center text-lg"
            >
              Postular
            </a>
            <a
              href="https://drive.google.com/file/d/1zRyie3G1MhNd9LI-bN0OBf9tVSvtHUZ0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-foreground text-primary-foreground font-bold uppercase px-10 py-5 rounded-full hover:bg-primary-foreground hover:text-primary transition-colors duration-200 inline-block text-center bg-transparent"
            >
              Revisa las bases
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
