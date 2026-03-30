import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/logo-etmday.svg";
import vitacuraLogo from "@/assets/logo-vitacura.png";

const TiktokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.3z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="rainbow-bar" />
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Brand + contact + socials */}
          <div className="border-r-0 md:border-r border-border md:pr-12">
            <div className="flex items-center gap-6 mb-6">
              <img src={logo} alt="EtMday" className="h-10" />
              <img src={vitacuraLogo} alt="Vitacura" className="h-12" />
            </div>
            <div className="space-y-2 mb-6 text-muted-foreground text-sm">
              <p>contacto@emprendetumente.org</p>
              <p>Los militares #4611, Centro Nace</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/emprendetumente_org?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md p-2">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100063927138260&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md p-2">
                <Facebook size={18} />
              </a>
              <a href="https://www.tiktok.com/@emprendetumente_org?_t=8ZqQtIRN325&_r=1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md p-2">
                <TiktokIcon size={18} />
              </a>
              <a href="https://youtube.com/@emprendetumente1850" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md p-2">
                <Youtube size={18} />
              </a>
              <a href="https://www.linkedin.com/company/emprende-tu-mente/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md p-2">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right: Link columns */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="mono-label mb-4 text-foreground">EtMDay 2025</p>
              <ul className="space-y-3">
                <li><a href="https://etmday.org/programa" className="text-muted-foreground hover:text-primary transition-colors text-sm">Programa</a></li>
                <li><a href="https://etmday.org/mapa" className="text-muted-foreground hover:text-primary transition-colors text-sm">Mapa</a></li>
                <li><a href="https://etmday.org/speakers" className="text-muted-foreground hover:text-primary transition-colors text-sm">Speakers</a></li>
                <li><a href="https://etmday.org/stands" className="text-muted-foreground hover:text-primary transition-colors text-sm">Stands</a></li>
              </ul>
            </div>
            <div>
              <p className="mono-label mb-4 text-foreground">Otros enlaces</p>
              <ul className="space-y-3">
                <li><a href="https://etmday.org/libro" className="text-muted-foreground hover:text-primary transition-colors text-sm">Libro Rumbo Emprender</a></li>
                <li><a href="https://etmday.org/noticias" className="text-muted-foreground hover:text-primary transition-colors text-sm">Noticias</a></li>
                <li><a href="https://etmday.org/sponsors" className="text-muted-foreground hover:text-primary transition-colors text-sm">Sponsors y partners</a></li>
              </ul>
            </div>
            <div>
              <p className="mono-label mb-4 text-foreground">Información</p>
              <ul className="space-y-3">
                <li><a href="https://etmday.org/ayuda" className="text-muted-foreground hover:text-primary transition-colors text-sm">Centro de ayuda</a></li>
                <li><a href="https://drive.google.com/file/d/1zRyie3G1MhNd9LI-bN0OBf9tVSvtHUZ0/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Bases legales ↗</a></li>
                <li><a href="https://etmday.org/privacidad" className="text-muted-foreground hover:text-primary transition-colors text-sm">Políticas de privacidad ↗</a></li>
                <li><a href="https://etmday.org/impacto" className="text-muted-foreground hover:text-primary transition-colors text-sm">Informe impacto 2024 ↗</a></li>
                <li><a href="https://emprendetumente.org" className="text-muted-foreground hover:text-primary transition-colors text-sm">Emprende tu mente ↗</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <p className="text-muted-foreground text-xs text-center">
            © 2026 EtMday · Emprende tu Mente. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
