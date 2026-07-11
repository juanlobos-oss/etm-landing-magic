import { motion } from "framer-motion";
import colorsLine from "@/assets/colors-underline.svg";

const WAITLIST_URL = "https://emprendetumente.vform.io/process/9901/public";

const WaitlistSection = () => {
  return (
    <section id="lista-espera" className="py-16 md:py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative rounded-2xl border-2 border-primary bg-secondary p-6 md:p-12 overflow-hidden"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-1 bg-primary" />
          <div className="absolute top-0 left-0 w-1 h-16 bg-primary" />
          <div className="absolute bottom-0 right-0 w-16 h-1 bg-primary" />
          <div className="absolute bottom-0 right-0 w-1 h-16 bg-primary" />

          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start relative z-10">
            <div className="md:col-span-3">
              <p className="mono-label text-primary mb-3">Aviso importante</p>
              <h2 className="display-l2 text-foreground mb-4 leading-[0.95]">
                Postulaciones cerradas.<br />
                Súmate a la <span className="text-primary">Lista de Espera</span>.
              </h2>
              <img src={colorsLine} alt="" className="w-40 md:w-48 mb-6" />

              <div className="space-y-4 text-muted-foreground text-sm md:text-base max-w-2xl">
                <p>
                  Las postulaciones para obtener un stand ya finalizaron. Sin embargo, puedes inscribirte en la{" "}
                  <span className="text-foreground font-semibold">Lista de Espera para el EtMday 2026</span>.
                </p>
                <p>
                  En caso de que se libere un cupo por desistimiento o incumplimiento de algún expositor seleccionado, nos pondremos en contacto con los emprendimientos de esta lista, siguiendo nuestros criterios de selección y la disponibilidad de espacios.
                </p>
                <p>
                  Es importante que, al inscribirte, tengas la disponibilidad para participar en el evento, ya que podríamos contactarte en cualquier momento, incluso pocos días antes del inicio del EtMday.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 md:pl-6 md:border-l md:border-border">
              <p className="mono-label text-primary mb-3">Cuándo & Dónde</p>
              <p className="text-2xl md:text-3xl font-black text-foreground leading-tight mb-2">
                19, 20 y 21 <br className="hidden md:block" />de noviembre 2026
              </p>
              <p className="text-muted-foreground mb-8">
                Parque Bicentenario de Vitacura, Santiago.
              </p>

              <a
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-etm-primary w-full text-center block"
              >
                Inscribirme en la lista de espera
              </a>
              <p className="mono-label text-muted-foreground mt-3 text-center">
                Cupos sujetos a disponibilidad
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;