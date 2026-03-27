import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="rainbow-bar" />
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Brand + contact + socials */}
          <div className="border-r-0 md:border-r border-border md:pr-12">
            <div className="flex items-center gap-4 mb-6">
              <p className="text-foreground font-black text-xl">EtMday</p>
              <span className="text-muted-foreground text-sm">Emprende tu Mente</span>
            </div>
            <div className="space-y-2 mb-6 text-muted-foreground text-sm">
              <p>contacto@emprendetumente.org</p>
              <p>Los militares #4611, Centro Nace</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/etmday" className="text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md p-2">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com/etmday" className="text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md p-2">
                <Facebook size={18} />
              </a>
              <a href="https://youtube.com/etmday" className="text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md p-2">
                <Youtube size={18} />
              </a>
              <a href="https://linkedin.com/company/etmday" className="text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md p-2">
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
                <li><a href="https://etmday.org/bases" className="text-muted-foreground hover:text-primary transition-colors text-sm">Bases legales ↗</a></li>
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
