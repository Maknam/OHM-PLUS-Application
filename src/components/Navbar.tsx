import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const serviceLinks = [
  { href: "/services/bill-calculator", label: "Bill Calculator" },
  { href: "/services/report-fault", label: "Report Fault" },
  { href: "/services/new-connection", label: "New Connection" },
  { href: "/energy-tips", label: "Energy Tips" },
  { href: "/tariffs", label: "Tariff Info" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/product", label: "Omhero Device" },
    { href: "/solutions", label: "Solutions" },
    { href: "/news", label: "News" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:text-primary transition-colors"
          data-testid="link-logo"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/50 shadow-[0_0_15px_rgba(0,114,206,0.3)]">
            <Zap className="text-primary w-6 h-6" />
          </div>
          <span className="font-display font-bold text-2xl tracking-wide">OHM PLUS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Services dropdown — plain React, no Radix */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-white transition-colors outline-none"
              data-testid="dropdown-services"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 rounded-lg border border-border bg-sidebar shadow-xl shadow-black/40 py-1 z-50">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:bg-primary/20 hover:text-white transition-colors"
                    data-testid={`link-services-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 pl-4 border-l border-border ml-2">
            <Link
              to="/comingsoon"
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              data-testid="link-login"
            >
              Login
            </Link>
            <Link to="/contact">
              <Button
                className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(0,114,206,0.4)]"
                data-testid="button-book-demo"
              >
                Book Demo
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-xl p-4 flex flex-col gap-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-lg font-medium text-muted-foreground hover:text-white p-2 block"
              data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </Link>
          ))}

          <div className="py-2">
            <p className="text-sm font-bold text-white mb-2 pl-2">Services</p>
            <div className="flex flex-col gap-2 pl-4 border-l border-border ml-2">
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="text-muted-foreground hover:text-white block py-1 text-sm"
                  data-testid={`link-mobile-service-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <hr className="border-border my-2" />
          <Link
            to="/comingsoon"
            className="text-lg font-medium text-muted-foreground hover:text-white p-2 block"
            data-testid="link-mobile-login"
          >
            Login to Dashboard
          </Link>
          <Link to="/contact">
            <Button
              className="w-full mt-2 bg-primary hover:bg-primary/90"
              data-testid="button-mobile-demo"
            >
              Book Demo
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}