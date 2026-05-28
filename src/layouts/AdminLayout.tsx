import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Users, 
  HardDrive, 
  AlertTriangle, 
  Settings, 
  LogOut, 
  Zap, 
  Menu, 
  X,
  CreditCard
} from "lucide-react";
import { useState } from "react";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/admin", label: "Overview", icon: LayoutDashboard },
    { href: "/admin/customers", label: "Customers", icon: Users },
    { href: "/admin/devices", label: "Devices", icon: HardDrive },
    { href: "/admin/alerts", label: "System Alerts", icon: AlertTriangle },
    { href: "/admin/revenue", label: "Revenue", icon: CreditCard },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ];

  const Sidebar = () => (
    <div className="h-full flex flex-col bg-sidebar border-r border-border">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 text-white" data-testid="link-admin-logo">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/50 shadow-[0_0_10px_rgba(0,114,206,0.3)]">
            <Zap className="text-primary w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-wide text-[#E65516]">
            OHM ADMIN
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
              data-testid={`link-admin-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : ""}`} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border mt-auto space-y-4">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-white transition-colors w-full"
          data-testid="link-admin-exit"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Exit Admin</span>
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
        <Link href="/" className="flex items-center gap-2 text-white" data-testid="link-mobile-admin-logo">
          <Zap className="text-primary w-6 h-6" />
          <span className="font-display font-bold text-lg text-[#E65516]">OHM ADMIN</span>
        </Link>
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-white" data-testid="button-mobile-admin-sidebar">
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
