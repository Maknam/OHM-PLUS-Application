import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/images/icon.jpeg";
import { ThemeSwitcher } from "./ThemeSwitcher";

const toolLinks = [
  { href: "/services/bill-calculator", label: "Bill Calculator" },
  { href: "/services/report-fault", label: "Report Fault" },
  { href: "/services/new-connection", label: "New Connection" },
];

const serviceLinks = [
  { href: "/energy-tips", label: "Energy Tips" },
  { href: "/tariffs", label: "Tariff Info" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const location = useLocation();
  
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const toolsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setToolsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (toolsDropdownRef.current && !toolsDropdownRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (servicesOpen || toolsOpen) {
        setServicesOpen(false);
        setToolsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [servicesOpen, toolsOpen]);

  const navLinks = [
    { href: "/product", label: "Omhero Device" },
    { href: "/solutions", label: "Solutions" },
    { href: "/news", label: "News" },
    { href: "/about", label: "About Us" },
  ];

  const isActive = (path: string) => location.pathname === path;
  
  const linkClassName = "text-sm font-medium transition-colors duration-200 text-foreground/70 hover:text-primary";
  const activeLinkClassName = "text-sm font-medium transition-colors duration-200 text-primary";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-theme/90 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          data-testid="link-logo"
        >
          <div className="w-15 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 shadow-[0_0_15px_rgba(0,75,158,0.3)] overflow-hidden">
            <img 
              src={logoImage} 
              alt="OHM Plus Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={isActive(link.href) ? activeLinkClassName : linkClassName}
              data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative" ref={servicesDropdownRef}>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={`${linkClassName} outline-none focus:ring-2 focus:ring-primary/50 rounded px-2 py-1 inline-flex items-center gap-1`}
              data-testid="dropdown-services"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-52 rounded-lg border border-border bg-theme shadow-xl shadow-black/40 py-1 z-50 backdrop-blur-sm"
                role="menu"
              >
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="block px-4 py-2.5 text-sm text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors"
                    role="menuitem"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Tools Dropdown */}
          <div className="relative" ref={toolsDropdownRef}>
            <button
              onClick={() => setToolsOpen((v) => !v)}
              aria-expanded={toolsOpen}
              aria-haspopup="true"
              className={`${linkClassName} outline-none focus:ring-2 focus:ring-primary/50 rounded px-2 py-1 inline-flex items-center gap-1`}
              data-testid="dropdown-tools"
            >
              Tools
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`} />
            </button>

            {toolsOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-52 rounded-lg border border-border bg-theme shadow-xl shadow-black/40 py-1 z-50 backdrop-blur-sm"
                role="menu"
              >
                {toolLinks.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="block px-4 py-2.5 text-sm text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors"
                    role="menuitem"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <ThemeSwitcher />

          <div className="flex items-center gap-4 pl-4 border-l border-border ml-2">
            <Link to="/comingsoon" className={linkClassName}>
              Login
            </Link>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(0,75,158,0.4)]">
                Book Demo
              </Button>
            </Link>
          </div>
        </nav>

        <button
          className="md:hidden text-foreground p-2 hover:bg-primary/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-theme/95 backdrop-blur-md border-b border-border shadow-xl p-4 flex flex-col gap-4 max-h-[calc(100vh-5rem)] overflow-y-auto transition-all duration-300 transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={() => setIsOpen(false)}
            className={`text-lg font-medium p-2 block transition-colors ${
              isActive(link.href) ? "text-primary" : "text-foreground/70 hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}

        <div className="py-2">
          <p className="text-sm font-bold text-foreground mb-2 pl-2">Services</p>
          <div className="flex flex-col gap-2 pl-4 border-l border-border ml-2">
            {serviceLinks.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground/70 hover:text-primary block py-1 text-sm transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="py-2">
          <p className="text-sm font-bold text-foreground mb-2 pl-2">Tools</p>
          <div className="flex flex-col gap-2 pl-4 border-l border-border ml-2">
            {toolLinks.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground/70 hover:text-primary block py-1 text-sm transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <hr className="border-border my-2" />

        <div className="flex items-center justify-between gap-4">
          <Link
            to="/comingsoon"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-foreground/70 hover:text-primary p-2 block transition-colors"
          >
            Login to Dashboard
          </Link>
          <ThemeSwitcher />
        </div>
        
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          <Button className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
            Book Demo
          </Button>
        </Link>
      </div>
    </header>
  );
}