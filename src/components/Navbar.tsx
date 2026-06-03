import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/images/favicon.jpeg";

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
          ? "bg-ohm-blue/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:text-ohm-green transition-colors"
          data-testid="link-logo"
        >
          <div className="w-11 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(0,75,158,0.3)] overflow-hidden">
            <img 
              src={logoImage} 
              alt="OHM Plus Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-display font-bold text-2xl tracking-wide text-white">OHM PLUS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-white/70 hover:text-ohm-green transition-colors"
              data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Services dropdown — plain React, no Radix */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium text-white/70 hover:text-ohm-green transition-colors outline-none"
              data-testid="dropdown-services"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 rounded-lg border border-white/10 bg-ohm-blue shadow-xl shadow-black/40 py-1 z-50 backdrop-blur-sm">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="block px-4 py-2.5 text-sm text-white/70 hover:bg-white/10 hover:text-ohm-green transition-colors"
                    data-testid={`link-services-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 pl-4 border-l border-white/10 ml-2">
            <Link
              to="/comingsoon"
              className="text-sm font-medium text-white/70 hover:text-ohm-green transition-colors"
              data-testid="link-login"
            >
              Login
            </Link>
            <Link to="/contact">
              <Button
                className="bg-ohm-green hover:bg-ohm-green/90 text-white shadow-[0_0_20px_rgba(13,148,68,0.4)]"
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
        <div className="md:hidden absolute top-20 left-0 w-full bg-ohm-blue border-b border-white/10 shadow-xl p-4 flex flex-col gap-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-lg font-medium text-white/70 hover:text-ohm-green p-2 block"
              data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </Link>
          ))}

          <div className="py-2">
            <p className="text-sm font-bold text-white mb-2 pl-2">Services</p>
            <div className="flex flex-col gap-2 pl-4 border-l border-white/10 ml-2">
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="text-white/70 hover:text-ohm-green block py-1 text-sm"
                  data-testid={`link-mobile-service-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <hr className="border-white/10 my-2" />
          <Link
            to="/comingsoon"
            className="text-lg font-medium text-white/70 hover:text-ohm-green p-2 block"
            data-testid="link-mobile-login"
          >
            Login to Dashboard
          </Link>
          <Link to="/contact">
            <Button
              className="w-full mt-2 bg-ohm-green hover:bg-ohm-green/90 text-white"
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