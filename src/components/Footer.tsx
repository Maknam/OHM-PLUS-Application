import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, FileText, Sparkles, Facebook, Instagram, Linkedin } from "lucide-react";
import logoImage from "@/assets/images/icon.png";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/ohmplus", label: "Facebook", color: "hover:text-[#1877F2]" },
    { icon: Instagram, href: "https://instagram.com/ohmplus", label: "Instagram", color: "hover:text-[#E4405F]" },
    { icon: Linkedin, href: "https://linkedin.com/company/ohmplus", label: "LinkedIn", color: "hover:text-[#0A66C2]" },
  ];

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description - 60% Dominant Surface */}
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2"
              data-testid="link-logo"
            >
              <div className="w-30 h-25 flex items-center justify-center overflow-hidden">
                <img 
                  src={logoImage} 
                  alt="OHM Plus Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-foreground/60 text-sm mb-6 mt-4 max-w-sm">
              Empowering Africa with intelligent energy control. Monitor, analyze, and optimize your power usage in real-time with the Omhero device.
            </p>
            {/* Trust badge - Green success indicator */}
            <div className="flex items-center gap-2 text-xs text-[#0D9444] bg-[#0D9444]/10 px-3 py-1.5 rounded-full w-fit">
              <Sparkles className="w-3 h-3" />
              <span>Trusted across Nigeria & Ghana</span>
            </div>
          </div>

          {/* Product Links - 30% Operational (Green on hover) */}
          <div>
            <h4 className="text-foreground font-display font-semibold tracking-wide text-lg mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/product" className="text-foreground/60 hover:text-[#0D9444] transition-colors text-sm">Omhero Device</Link></li>
              <li><Link to="/solutions" className="text-foreground/60 hover:text-[#0D9444] transition-colors text-sm">Solutions</Link></li>
              <li><Link to="/pricing" className="text-foreground/60 hover:text-[#0D9444] transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/ohm" className="text-foreground/60 hover:text-[#0D9444] transition-colors text-sm">Dashboard</Link></li>
            </ul>
          </div>

          {/* Resources Links - 30% Operational (Green on hover) */}
          <div>
            <h4 className="text-foreground font-display font-semibold tracking-wide text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-foreground/60 hover:text-[#0D9444] transition-colors text-sm">Quick Services</Link></li>
              <li><Link to="/case-studies" className="text-foreground/60 hover:text-[#0D9444] transition-colors text-sm flex items-center gap-2">
                <FileText className="w-3 h-3" /> Case Studies
              </Link></li>
              <li><Link to="/news" className="text-foreground/60 hover:text-[#0D9444] transition-colors text-sm">News</Link></li>
              <li><Link to="/energy-tips" className="text-foreground/60 hover:text-[#0D9444] transition-colors text-sm">Energy Tips</Link></li>
              <li><Link to="/tariffs" className="text-foreground/60 hover:text-[#0D9444] transition-colors text-sm">Tariff Info</Link></li>
              <li><Link to="/about" className="text-foreground/60 hover:text-[#0D9444] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-foreground/60 hover:text-[#0D9444] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info - Green icons for success indicators */}
          <div>
            <h4 className="text-foreground font-display font-semibold tracking-wide text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-foreground/60">
                <MapPin className="w-5 h-5 text-[#0D9444] shrink-0" />
                <span>Accra, Ghana<br/>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/60">
                <Mail className="w-5 h-5 text-[#0D9444] shrink-0" />
                <span>hello@ohmplus.africa</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/60">
                <Phone className="w-5 h-5 text-[#0D9444] shrink-0" />
                <span>+233 (0) 55 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/60">
                <Phone className="w-5 h-5 text-[#0D9444] shrink-0" />
                <span>+234 (0) 701 234 5678</span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="mt-6">
              <h4 className="text-foreground font-display font-semibold tracking-wide text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-[#004B9E]/10 flex items-center justify-center text-foreground/60 ${social.color} hover:bg-[#004B9E]/20 transition-all hover:scale-110 transform duration-200`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom - 30% Operational border */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50">
            &copy; {new Date().getFullYear()} OHM Plus Energy Management Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-foreground/50 hover:text-[#0D9444] transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-foreground/50 hover:text-[#0D9444] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}