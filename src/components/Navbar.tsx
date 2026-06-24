import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-etmday.svg";

const POSTULAR_URL = "https://emprendetumente.vform.io/process/9345/public";
const BASES_URL = "https://drive.google.com/file/d/1zRyie3G1MhNd9LI-bN0OBf9tVSvtHUZ0/view?usp=sharing";

const navLinks = [
  { label: "¿Cómo es el proceso?", href: "#proceso" },
  { label: "¿A quién buscamos?", href: "#seleccion" },
  { label: "Bases de postulación", href: BASES_URL, external: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="https://etmday.org">
          <img src={logo} alt="EtMday" className="h-12" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href={POSTULAR_URL} target="_blank" rel="noopener noreferrer" className="btn-etm-primary text-sm py-2 px-6">
            Postular
          </a>
        </div>

        {/* Mobile: Postular + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a href={POSTULAR_URL} target="_blank" rel="noopener noreferrer" className="btn-etm-primary text-sm py-2 px-5">
            Postular
          </a>
          <button onClick={() => setOpen(!open)} className="text-foreground p-1" aria-label="Menú">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 pt-2 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
