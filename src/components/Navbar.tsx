import logo from "@/assets/logo-etmday.svg";

const POSTULAR_URL = "https://emprendetumente.vform.io/process/9067/public";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="https://etmday.org">
          <img src={logo} alt="EtMday" className="h-8" />
        </a>
        <a href={POSTULAR_URL} target="_blank" rel="noopener noreferrer" className="btn-etm-primary text-sm py-2 px-6">Postular</a>
      </div>
    </nav>
  );
};

export default Navbar;
