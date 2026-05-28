import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";

// Layouts
import { MarketingLayout } from "@/layouts/MarketingLayout";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { AdminLayout } from "@/layouts/AdminLayout";
import { ScrollToTop } from "@/components/ScrollToTop";

// Marketing Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Product from "@/pages/product";
import Solutions from "@/pages/solutions";
import Pricing from "@/pages/pricing";
import Contact from "@/pages/contact";
import ComingSoon from "@/pages/comingsoon";
import Services from "@/pages/services";
import BillCalculator from "@/pages/bill-calculator";
import ReportFault from "@/pages/report-fault";
import NewConnection from "@/pages/new-connection";
import News from "@/pages/news";
import NewsArticle from "@/pages/news-article";
import EnergyTips from "@/pages/energy-tips";
import Tariffs from "@/pages/tariffs";

// Solution Detail Pages
import SmartHomes from "@/pages/solutions/SmartHomes";
import SMEsRetail from "@/pages/solutions/SMEsRetail";
import Industrial from "@/pages/solutions/Industrial";
import Telecom from "@/pages/solutions/Telecom";
import DataCenters from "@/pages/solutions/DataCenters";
import FacilityManagers from "@/pages/solutions/FacilityManagers";

// Dashboard Pages
import DashboardOverview from "@/pages/dashboard/index";
import DashboardAlerts from "@/pages/dashboard/alerts";
import DashboardBilling from "@/pages/dashboard/billing";
import DashboardSettings from "@/pages/dashboard/settings";
import OhmDashboard from "@/pages/ohmdashboard";

// Admin Pages
import AdminDashboard from "@/pages/admin/index";

import NotFound from "@/pages/not-found";
import CaseStudies from "./pages/casestudies";
import { ScrollToTopButton } from "./components/ScrollToTopButton";

const queryClient = new QueryClient();

// Placeholder for other pages
function Placeholder({ title }: { title: string }) {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <h1 className="text-4xl font-display font-bold text-white">{title}</h1>
      <p className="text-muted-foreground mt-4">Coming soon</p>
    </div>
  );
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Marketing Routes */}
        <Route path="/" element={<MarketingLayout><Home /></MarketingLayout>} />
        <Route path="/about" element={<MarketingLayout><About /></MarketingLayout>} />
        <Route path="/product" element={<MarketingLayout><Product /></MarketingLayout>} />
        <Route path="/solutions" element={<MarketingLayout><Solutions /></MarketingLayout>} />
        <Route path="/pricing" element={<MarketingLayout><Pricing /></MarketingLayout>} />
        <Route path="/contact" element={<MarketingLayout><Contact /></MarketingLayout>} />
        <Route path="/comingsoon" element={<MarketingLayout><ComingSoon /></MarketingLayout>} />
        <Route path="/case-studies" element={<MarketingLayout><CaseStudies /></MarketingLayout>} />

        {/* New Marketing/Service Pages */}
        <Route path="/services" element={<MarketingLayout><Services /></MarketingLayout>} />
        <Route path="/services/bill-calculator" element={<MarketingLayout><BillCalculator /></MarketingLayout>} />
        <Route path="/services/report-fault" element={<MarketingLayout><ReportFault /></MarketingLayout>} />
        <Route path="/services/new-connection" element={<MarketingLayout><NewConnection /></MarketingLayout>} />
        
        <Route path="/news" element={<MarketingLayout><News /></MarketingLayout>} />
        <Route path="/news/:slug" element={<MarketingLayout><NewsArticle /></MarketingLayout>} />
        
        <Route path="/energy-tips" element={<MarketingLayout><EnergyTips /></MarketingLayout>} />
        <Route path="/tariffs" element={<MarketingLayout><Tariffs /></MarketingLayout>} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout><DashboardOverview /></DashboardLayout>} />
        <Route path="/dashboard/alerts" element={<DashboardLayout><DashboardAlerts /></DashboardLayout>} />
        <Route path="/dashboard/billing" element={<DashboardLayout><DashboardBilling /></DashboardLayout>} />
        <Route path="/dashboard/settings" element={<DashboardLayout><DashboardSettings /></DashboardLayout>} />
        <Route path="/ohm" element={<MarketingLayout><OhmDashboard /></MarketingLayout>} />
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        {/* <Route path="/admin/:rest*" element={<AdminLayout><Placeholder title="Admin Module" /></AdminLayout>} /> */}
        <Route path="/admin/:rest/*" element={<AdminLayout><Placeholder title="Admin Module" /></AdminLayout>} />

        {/* Solution Detail Routes */}
        <Route path="/solutions/smart-homes" element={<MarketingLayout><SmartHomes /></MarketingLayout>} />
        <Route path="/solutions/smes-retail" element={<MarketingLayout><SMEsRetail /></MarketingLayout>} />
        <Route path="/solutions/industrial" element={<MarketingLayout><Industrial /></MarketingLayout>} />
        <Route path="/solutions/telecom" element={<MarketingLayout><Telecom /></MarketingLayout>} />
        <Route path="/solutions/data-centers" element={<MarketingLayout><DataCenters /></MarketingLayout>} />
        <Route path="/solutions/facility-managers" element={<MarketingLayout><FacilityManagers /></MarketingLayout>} />

        {/* Fallback to 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

function App() {
  // Ensure dark mode is active on html root
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <ScrollToTop />
          <AppRoutes />
        </BrowserRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;