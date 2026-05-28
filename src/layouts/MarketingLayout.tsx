import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,114,206,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,114,206,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <Navbar />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
