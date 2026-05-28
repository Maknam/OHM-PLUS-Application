import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-sidebar border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-white mb-6 inline-flex" data-testid="link-footer-logo">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/50">
                <Zap className="text-primary w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-wide">
                OHM PLUS
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 mt-4 max-w-sm">
              Empowering Africa with intelligent energy control. Monitor, analyze, and optimize your power usage in real-time with the Omhero device.
            </p>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold tracking-wide text-lg mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/product" className="text-muted-foreground hover:text-primary transition-colors text-sm">Omhero Device</Link></li>
              <li><Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors text-sm">Solutions</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/ohm" className="text-muted-foreground hover:text-primary transition-colors text-sm">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold tracking-wide text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Quick Services</Link></li>
              <li><Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                <FileText className="w-3 h-3" /> Case Studies
              </Link></li>
              <li><Link to="/news" className="text-muted-foreground hover:text-primary transition-colors text-sm">News</Link></li>
              <li><Link to="/energy-tips" className="text-muted-foreground hover:text-primary transition-colors text-sm">Energy Tips</Link></li>
              <li><Link to="/tariffs" className="text-muted-foreground hover:text-primary transition-colors text-sm">Tariff Info</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold tracking-wide text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Accra, Ghana<br/>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@ohmplus.africa</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+233 (0) 55 123 4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} OHM Plus Energy Management Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}