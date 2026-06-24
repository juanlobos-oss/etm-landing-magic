import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import colorsLine from "@/assets/colors-underline.svg";

type Zone = {
  name: string;
  description: string;
  subdivisions?: { name: string; description: string }[];
};

const startups: Zone[] = [
  { name: "Healthtech", description: "Gestión clínica y centros de salud | Seguimiento y alertas tempranas de pacientes | Salud mental | Telesalud y salud digital | Entre otras" },
  { name: "Biotech", description: "Biotecnología en salud humana y animal | Prevención y tratamiento de enfermedades | Salud veterinaria | Bioingredientes y dermocosmética | Nutrición neonatal | Entre otras" },
  { name: "Industrias creativas y entretenimiento", description: "Creación de contenido y creadores | Experiencias inmersivas | Gaming y entretenimiento | Diseño y nuevos hábitos de consumo | Difusión en redes sociales | Entre otras" },
  { name: "Fintech e Insurtech", description: "Medios y plataformas de pago | Inclusión y educación financiera | Gestión de riesgo y cumplimiento | Crédito y financiamiento | Pagos por canales digitales | Innovación en seguros | Entre otras" },
  { name: "Retailtech y comercio electrónico", description: "Optimización de ventas y comercial | Marketing y creadores de contenido | Conexión marcas-comercios locales | Analítica para retail y consumo masivo | Comercio digital y marketplaces | Entre otras" },
  { name: "Climatech y economía circular", description: "Gestión de residuos y economía circular | Medición de huella de carbono | Gestión hídrica | Cumplimiento y trazabilidad ambiental | Transición energética | Modelos productivos sostenibles | Entre otras" },
  { name: "Economía plateada e inclusión", description: "Cuidado de adultos mayores | Movilidad reducida y accesibilidad | Seguridad y teleasistencia | Inclusión e impacto social | Servicios de cuidado | Entre otras" },
  { name: "Edtech", description: "Aprendizaje y experiencias interactivas | Plataformas para colegios y docentes | Capacitación y desarrollo de habilidades | Convivencia y bienestar escolar | Formación corporativa | Entre otras" },
  { name: "Industria, minería e IoT industrial", description: "Seguridad y prevención operacional | Monitoreo de activos críticos | Visión computacional en terreno | Trazabilidad y cumplimiento | Minería y procesos productivos | Entre otras" },
  { name: "Proptech & Construtech", description: "Gestión y trazabilidad de proyectos | Comercialización inmobiliaria | Software para construcción | Decisión de compra de propiedades | Conexión con arquitectos y proveedores | Entre otras" },
  { name: "Logística y movilidad inteligente", description: "Optimización de operación logística | Trazabilidad y seguimiento de embarques | Comercio exterior y supply chain | Gestión de inventario | Última milla y ruteo | Entre otras" },
  { name: "Deeptech", description: "Agentes inteligentes y modelos propios | IA aplicada y análisis avanzado | Automatización con IA | Infraestructura tecnológica | Hardware e ingeniería | Entre otras" },
  { name: "Foodtech y Agrotech", description: "Innovación en ingredientes y alimentos funcionales | Trazabilidad y rotulado | Ciencia aplicada al agro | Exportación y cumplimiento sanitario | Bienestar nutricional | Entre otras" },
  { name: "HRTech y futuro del trabajo", description: "Reclutamiento y selección | Evaluación de candidatos | Cumplimiento y riesgo laboral | Inclusión y ajustes razonables | Desarrollo de talento | Entre otras" },
  { name: "Ciberseguridad y Legaltech", description: "Cumplimiento normativo y compliance | Protección de datos y ciberseguridad | Firma electrónica y validez legal | Gestión documental legal | Monitoreo continuo de riesgos | Entre otras" },
  { name: "Tec. para empresas", description: "Automatización de ventas y atención | Agentes conversacionales | Software a medida | Analítica y gestión empresarial | Integración de procesos B2B | Entre otras" },
];

const pymes: Zone[] = [
  {
    name: "Bienestar y vida sana",
    description: "Bienestar integral y autocuidado | Cosmética natural | Salud mental y emocional | Fitness y vida activa | Terapias y suplementos | Entre otras",
    subdivisions: [
      { name: "Cosmética y cuidado personal", description: "Cosmética natural | Cuidado de la piel y dermo | Ingredientes naturales y aceites esenciales | Jabones y aromas | Cuidado capilar y corporal" },
      { name: "Salud, movimiento y autocuidado", description: "Salud mental y bienestar emocional | Bienestar integral | Fitness y vida activa | Terapias y autocuidado | Nutrición y suplementos | Entre otras" },
    ],
  },
  {
    name: "Arte, cultura y experiencias",
    description: "Productos hechos a mano y diseño de autor | Moda y accesorios | Decoración y objeto | Arte, cultura y eventos | Turismo y experiencias",
    subdivisions: [
      { name: "Cultura, contenido y entretenimiento", description: "Producción de eventos y experiencias | Arte y cultura | Contenido y diseño con identidad | Patrimonio e identidad local | Música, editorial y audiovisual | Entre otras" },
      { name: "Turismo y experiencias", description: "Turismo local y rural | Experiencias auténticas y memorables | Naturaleza y cultura | Turismo con comunidades locales | Tours y actividades personalizadas | Entre otras" },
      { name: "Moda y accesorios", description: "Marca propia y diseño | Ropa y prendas | Joyería y accesorios | Moda con identidad | Venta directa y redes sociales | Entre otras" },
      { name: "Hogar, diseño y objeto", description: "Decoración y objetos para el hogar | Diseño de producto funcional | Fabricación local | Equipamiento y mobiliario | Objeto de autor | Entre otras" },
      { name: "Arte, artesanía y diseño de autor", description: "Piezas hechas a mano | Artesanía contemporánea | Diseño de autor con identidad | Productos únicos y personalizados | Regalos corporativos | Entre otras" },
    ],
  },
  { name: "Mundo Financiero", description: "Asesoría contable y tributaria | Gestión financiera PyME | Flujo de caja y finanzas corporativas | Facturación electrónica | Financiamiento y crédito | Entre otras" },
  { name: "Sostenibilidad e impacto", description: "Economía circular y reutilización | Productos eco-friendly | Consumo consciente y responsable | Impacto ambiental y social | Materias primas sustentables | Entre otras" },
  { name: "Educación e investigación", description: "Formación y capacitación | Talleres y cursos | Desarrollo de habilidades | Material y recursos educativos | Capacitación a organizaciones | Entre otras" },
  { name: "Oficios, producción y construcción", description: "Manufactura y fabricación | Construcción y terminaciones | Carpintería y metalurgia | Maquinaria y oficios | Producción con materiales reciclados | Entre otras" },
  { name: "Alimentos", description: "Alimentos artesanales y gourmet | Opciones saludables y sin azúcar añadida | Bebidas y café de especialidad | Ingredientes naturales con identidad local | Listos para consumir | Entre otras" },
  { name: "Gestión de talento", description: "Gestión de personas y RR.HH. | Reclutamiento y selección | Capacitación y talento | Cultura y clima laboral | Bienestar y liderazgo | Entre otras" },
  { name: "Mundo Legal & Seguridad", description: "Asesoría legal y compliance | Acompañamiento legal a PyMEs | Propiedad intelectual | Prevención de riesgos | Seguridad y certificaciones | Entre otras" },
  { name: "Estrategia y empresa", description: "Consultoría y estrategia | Marketing y comunicación | Software y automatización | Asesoría a emprendedores | Servicios B2B | Entre otras" },
];

const investigacion: Zone[] = [
  { name: "I+D Ciencia Aplicada", description: "Investigación aplicada por centros de estudio, ciencia y desarrollo tecnológico | Tecnología de frontera | Investigaciones de largo plazo | Entre otras" },
];

type GroupProps = {
  label: string;
  title: string;
  zones: Zone[];
};

const ZoneGroup = ({ label, title, zones }: GroupProps) => {
  return (
    <div className="border border-border">
      <div className="px-4 md:px-5 py-3 md:py-4 border-b border-border bg-card">
        <p className="mono-label mb-1 text-[10px] md:text-xs">{label}</p>
        <h3 className="text-foreground font-bold text-lg md:text-xl">{title}</h3>
      </div>
      <Accordion type="multiple" className="w-full">
        {zones.map((zone, i) => (
          <AccordionItem
            key={i}
            value={`${label}-${i}`}
            className="border-b border-border last:border-b-0"
          >
            <AccordionTrigger className="px-4 md:px-5 py-3 md:py-4 hover:no-underline hover:bg-primary/5 text-left gap-3">
              <span className="text-foreground font-semibold text-sm md:text-base">
                {zone.name}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-4 md:px-5 pb-4 md:pb-5">
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {zone.description}
              </p>
              {zone.subdivisions && zone.subdivisions.length > 0 && (
                <div className="mt-4 border-l-2 border-primary/40 pl-3 md:pl-4 space-y-3">
                  <p className="mono-label text-[10px] md:text-xs">Subdivisiones</p>
                  {zone.subdivisions.map((sub, j) => (
                    <div key={j}>
                      <p className="text-foreground font-semibold text-xs md:text-sm">
                        ↳ {sub.name}
                      </p>
                      <p className="text-muted-foreground text-[11px] md:text-xs mt-1 leading-relaxed">
                        {sub.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const ZonesSection = () => {
  return (
    <section id="zonas" className="py-14 md:py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <p className="mono-label mb-3">Zonas del parque</p>
          <h2 className="display-l2 text-foreground text-3xl md:text-5xl">
            Las zonas que organizarán el EtMday 2026
          </h2>
          <img src={colorsLine} alt="" className="w-36 md:w-48 mt-4" />
          <p className="text-muted-foreground mt-4 max-w-2xl text-sm md:text-base">
            Conoce las verticales en las que se distribuirán los stands. Haz click en cada zona para ver el detalle.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <ZoneGroup label="01 / Startups" title="Startups" zones={startups} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <ZoneGroup
              label="02 / Pymes"
              title="Emprendimientos tradicionales"
              zones={pymes}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <ZoneGroup
              label="03 / I+D"
              title="Proyectos de I+D"
              zones={investigacion}
            />
          </motion.div>
        </div>

        <div className="mt-8 md:mt-10 border border-dashed border-border p-4 md:p-5">
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            <span className="text-foreground font-semibold">Aclaración:</span>{" "}
            Estas son las zonas referenciales del parque EtMday 2026 y pueden estar sujetas a cambios durante el año según el desarrollo de la convocatoria y la curatoría final de stands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ZonesSection;