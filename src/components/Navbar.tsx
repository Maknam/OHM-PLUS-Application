import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Facebook, Instagram, Linkedin } from "lucide-react";
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
  
  const linkClassName = "text-sm font-medium transition-colors duration-200 text-foreground/70 hover:text-[#004B9E]";
  const activeLinkClassName = "text-sm font-medium transition-colors duration-200 text-[#004B9E]";

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/ohmplus", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/ohmplus", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/ohmplus", label: "LinkedIn" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-theme/95 backdrop-blur-md border-b border-theme shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo - Properly sized for both desktop and mobile */}
        <Link
          to="/"
          className="flex items-center gap-2 md:gap-3 text-foreground hover:text-[#004B9E] transition-colors flex-shrink-0"
          data-testid="link-logo"
        >
          <div className="w-20 h-20 md:w-12 md:h-12 rounded-lg bg-[#004B9E]/10 flex items-center justify-center border border-[#004B9E]/20 shadow-[0_0_15px_rgba(0,75,158,0.3)] overflow-hidden">
            <img 
              src={logoImage} 
              alt="OHM Plus Logo" 
              className="w-full h-full object-contain"
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
              className={`${linkClassName} outline-none focus:ring-2 focus:ring-[#004B9E]/50 rounded px-2 py-1 inline-flex items-center gap-1`}
              data-testid="dropdown-services"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-52 rounded-lg border border-theme bg-theme shadow-xl shadow-black/40 py-1 z-50 backdrop-blur-sm"
                role="menu"
              >
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="block px-4 py-2.5 text-sm text-foreground/70 hover:bg-[#004B9E]/10 hover:text-[#004B9E] transition-colors"
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
              className={`${linkClassName} outline-none focus:ring-2 focus:ring-[#004B9E]/50 rounded px-2 py-1 inline-flex items-center gap-1`}
              data-testid="dropdown-tools"
            >
              Tools
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`} />
            </button>

            {toolsOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-52 rounded-lg border border-theme bg-theme shadow-xl shadow-black/40 py-1 z-50 backdrop-blur-sm"
                role="menu"
              >
                {toolLinks.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="block px-4 py-2.5 text-sm text-foreground/70 hover:bg-[#004B9E]/10 hover:text-[#004B9E] transition-colors"
                    role="menuitem"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <ThemeSwitcher />

          {/* Auth Section */}
          <div className="flex items-center gap-4 pl-4 border-l border-theme ml-2">
            <Link to="/comingsoon" className={linkClassName}>
              Login
            </Link>
            <Link to="/contact">
              <Button className="bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-[0_0_20px_rgba(255,78,0,0.4)] font-semibold transition-all duration-200 hover:scale-105">
                Book Demo
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 hover:bg-[#004B9E]/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-theme border-t border-theme shadow-2xl p-6 flex flex-col gap-4 max-h-[calc(100vh-5rem)] overflow-y-auto transition-all duration-300 transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Mobile Logo in Menu Header */}
        <div className="flex items-center justify-between pb-4 border-b border-theme mb-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-[#004B9E]/10 flex items-center justify-center border border-[#004B9E]/20 overflow-hidden">
              <img 
                src={logoImage} 
                alt="OHM Plus Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-display font-bold text-lg tracking-wide text-foreground">OHM PLUS</span>
          </Link>
        </div>

        {/* Mobile Navigation Links */}
        <div className="space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium p-3 block transition-colors rounded-lg ${
                isActive(link.href) 
                  ? "text-[#004B9E] bg-[#004B9E]/10" 
                  : "text-foreground hover:text-[#004B9E] hover:bg-[#004B9E]/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-2">
          <p className="text-sm font-semibold text-[#0D9444] mb-2 px-3">Services</p>
          <div className="flex flex-col gap-1 pl-4 border-l-2 border-[#0D9444]/30 ml-2">
            {serviceLinks.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground/80 hover:text-[#004B9E] hover:bg-[#004B9E]/5 block py-2 px-3 text-sm transition-colors rounded-lg"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-2">
          <p className="text-sm font-semibold text-[#0D9444] mb-2 px-3">Tools</p>
          <div className="flex flex-col gap-1 pl-4 border-l-2 border-[#0D9444]/30 ml-2">
            {toolLinks.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground/80 hover:text-[#004B9E] hover:bg-[#004B9E]/5 block py-2 px-3 text-sm transition-colors rounded-lg"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <hr className="border-theme my-3" />

        {/* Auth Section - Mobile */}
        <div className="flex items-center justify-between gap-4 p-2">
          <Link
            to="/comingsoon"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-foreground/80 hover:text-[#004B9E] transition-colors"
          >
            Login to Dashboard
          </Link>
          <ThemeSwitcher />
        </div>
        
        {/* 10% ACTION HIGHLIGHT - Orange CTA on mobile */}
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          <Button className="w-full mt-2 bg-[#FF4E00] hover:bg-[#E04500] text-white font-semibold">
            Book Demo
          </Button>
        </Link>

        {/* Social Media Icons */}
        <div className="mt-6 pt-4 border-t border-theme">
          <p className="text-sm text-foreground/60 text-center mb-3">Follow Us</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-[#0D9444] transition-all hover:scale-110 transform duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}