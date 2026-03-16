import { motion } from "framer-motion";
import colorsLine from "@/assets/colors-underline.svg";

const steps = [
{
  step: "01",
  title: "Postulaciones abiertas",
  date: "Hasta el 30 de junio",
  description: "Completa el formulario de postulación."
},
{
  step: "02",
  title: "Pre selección",
  date: "Publicación: 1 de agosto",
  description: "Pre-seleccionamos según propuesta de valor, potencial y visión. Buscamos equilibrio entre industrias, etapas y perfiles."
},
{
  step: "03",
  title: "Confirma tu participación",
  date: "Hasta el 1 de septiembre",
  description: "Firma del contrato y paga la garantía ($200.000) para confirmar tu participación."
},
{
  step: "04",
  title: "Preparación",
  date: "Septiembre - Noviembre",
  description: "Te asesoramos para preparar tu stand, ajustar tu pitch y tener tu objetivo claro."
},
{
  step: "05",
  title: "EtMday 2026",
  date: "16, 17 y 18 de noviembre 2026",
  description: "¡Reconoce tu stand y vive la experiencia!"
}];


const ProcessSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-12">
          
          <p className="mono-label mb-3">Proceso</p>
          <h2 className="display-l2 text-foreground mb-4">
            El proceso de postulación
          </h2>
          <img src={colorsLine} alt="" className="w-48 mb-4" />
          <p className="text-muted-foreground max-w-xl">
            Sé parte del corazón del Encuentro de Innovación, Emprendimiento e Inversión más grande de Latinoamérica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 etm-grid">
          {steps.map((s, i) =>
          <motion.div
            key={i}
            className="etm-grid-item relative"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}>
            
              <p className="stat-number text-primary mb-2">{s.step}</p>
              <h3 className="text-foreground font-bold text-lg mb-2">{s.title}</h3>
              <p className="mono-label text-primary mb-3">{s.date}</p>
              <p className="text-muted-foreground text-sm">{s.description}</p>
            </motion.div>
          )}
        </div>

        <motion.div
          className="mt-8 border border-border p-6 rounded-md"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}>
          
          <p className="text-foreground font-bold mb-2">Muy importante:</p>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              Quienes no queden preseleccionados pasarán automáticamente a lista de espera y podrán avanzar si se libera un cupo.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              Para asegurar tu participación, debes firmar contrato y pagar la garantía dentro del plazo; de lo contrario, tu cupo podrá asignarse a otro emprendedor.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>);

};

export default ProcessSection;