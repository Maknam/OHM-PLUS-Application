import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  AlertTriangle, 
  Receipt, 
  Settings, 
  LogOut, 
  Zap, 
  Menu, 
  X,
  User
} from "lucide-react";
import { useState } from "react";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/alerts", label: "Alerts", icon: AlertTriangle },
    { href: "/dashboard/billing", label: "Billing Evidence", icon: Receipt },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ];

  const Sidebar = () => (
    <div className="h-full flex flex-col bg-sidebar border-r border-border">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 text-white" data-testid="link-sidebar-logo">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/50 shadow-[0_0_10px_rgba(0,114,206,0.3)]">
            <Zap className="text-primary w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-wide">
            OHM PLUS
          </span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive 
                  ? "bg-primary/20 text-primary border border-primary/30 shadow-[inset_0_0_15px_rgba(0,114,206,0.2)]" 
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-white"
              }`}
              data-testid={`link-sidebar-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : ""}`} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border mt-auto space-y-4">
        <div className="px-4 py-3 rounded-lg bg-card border border-primary/20 flex items-center gap-3">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-[#2E8B43] absolute -top-1 -right-1 ring-2 ring-card" />
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Omhero Alpha</p>
            <p className="text-xs text-[#2E8B43]">Online</p>
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
            <User className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">john@example.com</p>
          </div>
        </div>

        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-white transition-colors w-full"
          data-testid="link-sidebar-logout"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-[100dvh] flex bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 fixed inset-y-0 z-20">
        <Sidebar />
      </aside>

      {/* Mobile Header & Sidebar */}
      <div className="md:hidden fixed top-0 w-full z-30 bg-sidebar border-b border-border px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white" data-testid="link-mobile-logo">
          <Zap className="text-primary w-6 h-6" />
          <span className="font-display font-bold text-lg">OHM PLUS</span>
        </Link>
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-white" data-testid="button-mobile-sidebar">
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 z-20 bg-background pt-16">
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-64 pt-16 md:pt-0 min-h-[100dvh]">
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
