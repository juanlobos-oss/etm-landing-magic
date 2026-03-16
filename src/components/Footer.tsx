const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="rainbow-bar" />
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-foreground font-black text-xl mb-2">EtMday</p>
            <p className="text-muted-foreground text-sm">
              El encuentro de innovación y emprendimiento más grande de Latinoamérica.
            </p>
          </div>
          <div>
            <p className="mono-label mb-3 text-foreground">Enlaces</p>
            <ul className="space-y-2">
              <li><a href="https://etmday.org" className="text-muted-foreground hover:text-primary transition-colors text-sm">Inicio</a></li>
              <li><a href="https://etmday.org/programa" className="text-muted-foreground hover:text-primary transition-colors text-sm">Programa</a></li>
              <li><a href="https://etmday.org/noticias" className="text-muted-foreground hover:text-primary transition-colors text-sm">Noticias</a></li>
            </ul>
          </div>
          <div>
            <p className="mono-label mb-3 text-foreground">Contacto</p>
            <p className="text-muted-foreground text-sm">
              19, 20 y 21 de Noviembre<br />
              Parque Bicentenario, Vitacura.
            </p>
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
