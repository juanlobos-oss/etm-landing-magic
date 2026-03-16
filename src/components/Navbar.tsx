import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="https://etmday.org" className="text-foreground font-black text-xl tracking-tight">
          EtMday
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="https://etmday.org" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Inicio</a>
          <a href="https://etmday.org/noticias" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Noticias</a>
          <a href="#proceso" className="btn-etm-primary text-sm py-2 px-6">Postular</a>
        </div>
        <a href="#proceso" className="md:hidden btn-etm-primary text-xs py-2 px-4">Postular</a>
      </div>
      <div className="rainbow-bar" />
    </nav>
  );
};

export default Navbar;
