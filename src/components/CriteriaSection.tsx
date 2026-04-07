import { motion } from "framer-motion";
import colorsLine from "@/assets/colors-underline.svg";

const criteria = [
  {
    title: "Claridad de propósito y propuesta de valor.",
    description: "Esperamos que puedas explicar con claridad qué problema resuelves, a quién y cómo. Mientras más definido esté tu cliente y tu forma de generar valor, mejor evaluada estará tu postulación."
  },
  {
    title: "Innovación y diferenciación.",
    description: "Buscamos propuestas que tengan algo propio frente a lo que ya existe en el mercado. Puede ser una tecnología, un modelo, un proceso o un enfoque distinto. Lo importante es que puedas argumentar por qué alguien te elegiría a ti."
  },
  {
    title: "Validación y evidencia de avance.",
    description: "Valoramos que hayas contrastado tu propuesta con el mundo real. Pueden ser entrevistas con usuarios, pilotos, primeras ventas o inversión recibida. A mayor evidencia concreta de que tu propuesta funciona, más alta será tu evaluación en este criterio."
  },
  {
    title: "Visión y mentalidad de crecimiento.",
    description: "Queremos emprendedores que piensen en grande y tengan claridad sobre hacia dónde quieren llevar su proyecto. Buscamos ambición real, conciencia de los desafíos que vienen y una actitud orientada a escalar."
  },
  {
    title: "Equipo y capacidad de ejecución.",
    description: "Evaluamos si el equipo tiene las competencias necesarias para ejecutar el proyecto y si hay conciencia de lo que falta para seguir creciendo. Roles claros y complementariedad suman."
  },
  {
    title: "Intención de conectar y colaborar.",
    description: "EtMday es una comunidad antes que una feria. Valoramos que llegues con objetivos concretos para el evento: conseguir clientes, encontrar alianzas, conectar con inversionistas o acceder al ecosistema. Buscamos emprendedores que vengan a dar y a recibir."
  },
  {
    title: "Compromiso y seriedad como expositor.",
    description: "Tener un stand implica responsabilidades concretas: firmar un contrato, respetar las normas del evento y cumplir con los compromisos del Manual del Expositor. El incumplimiento de este criterio es causal de exclusión automática."
  }
];

const CriteriaSection = () => {
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
          <p className="mono-label mb-3">Selección</p>
          <h2 className="display-l2 text-foreground mb-4">
            ¿Qué emprendedores buscamos?
          </h2>
          <img src={colorsLine} alt="" className="w-48 mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Criterios de selección
          </h3>
          <p className="text-muted-foreground max-w-3xl">
            El EtMday convoca a emprendedores en distintas etapas de desarrollo, desde quienes están comenzando hasta quienes ya están escalando. El stand es gratuito y está pensado para abrir oportunidades reales. Lo que buscamos en todos los casos es lo mismo: propósito claro, mentalidad de crecimiento, innovación y disposición genuina a aprovechar el evento.
          </p>
          <p className="text-muted-foreground max-w-3xl mt-4">
            Estos son los criterios con los que evaluaremos cada postulación:
          </p>
        </motion.div>

        <div className="space-y-6">
          {criteria.map((c, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <span className="stat-number text-primary mt-1 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-foreground font-bold text-lg mb-1">{c.title}</p>
                <p className="text-muted-foreground text-sm">{c.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CriteriaSection;
