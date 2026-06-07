import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col relative overflow-hidden bg-theme">
      <div className="theme-grid" />
      <Navbar />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  );
}