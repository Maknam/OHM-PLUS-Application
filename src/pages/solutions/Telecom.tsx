import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Signal, Battery, Fuel, MapPin, Bell, CheckCircle2, Activity, TowerControl, Gauge, Shield, Zap, Cloud, AlertTriangle, TrendingDown, Sparkles, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function Telecom() {
  const features = [
    { icon: Signal, title: "Grid Status Monitoring", desc: "Real-time visibility of utility power availability", gradient: "from-[#004B9E] to-[#004B9E]/70" },
    { icon: Battery, title: "Battery Health Tracking", desc: "Monitor backup battery condition and runtime", gradient: "from-[#0D9444] to-[#0D9444]/70" },
    { icon: Fuel, title: "Fuel Consumption", desc: "Track generator fuel usage and detect theft", gradient: "from-[#FF4E00] to-[#FF4E00]/70" },
    { icon: MapPin, title: "Site Dashboard", desc: "Manage all tower sites from one central view", gradient: "from-[#004B9E] to-[#004B9E]/70" },
    { icon: Bell, title: "Instant Alerts", desc: "Get notified immediately of power disruptions", gradient: "from-[#FF4E00] to-[#FF4E00]/70" },
    { icon: Activity, title: "Generator Runtime", desc: "Track usage patterns and maintenance needs", gradient: "from-[#0D9444] to-[#0D9444]/70" }
  ];

  const benefits = [
    { icon: TrendingDown, title: "Less Site Visits", desc: "Remote monitoring reduces operational costs", value: "40%", color: "text-[#004B9E]" },
    { icon: Shield, title: "Uptime", desc: "Instant alerts prevent service disruptions", value: "99.9%", color: "text-[#0D9444]" },
    { icon: AlertTriangle, title: "Theft Detection", desc: "Monitor fuel consumption anomalies", value: "25%", color: "text-[#FF4E00]" },
    { icon: Gauge, title: "Battery Life Extension", desc: "Predictive maintenance alerts", value: "30%", color: "text-[#004B9E]" }
  ];

  const caseStudies = [
    {
      operator: "MTN Nigeria",
      location: "Lagos, Nigeria",
      savings: "₦45M",
      reduction: "32%",
      image: "/images/case-studies/mtn-nigeria-towers.jpg",
      description: "Reduced fuel costs across 50 tower sites with real-time monitoring"
    },
    {
      operator: "Airtel Ghana",
      location: "Accra, Ghana",
      savings: "₵280,000",
      reduction: "28%",
      image: "/images/case-studies/airtel-ghana-towers.jpg",
      description: "Improved generator efficiency and reduced downtime by 45%"
    },
    {
      operator: "Glo Nigeria",
      location: "Port Harcourt, Nigeria",
      savings: "₦38M",
      reduction: "35%",
      image: "/images/case-studies/glo-nigeria-towers.jpg",
      description: "Detected fuel theft and optimized maintenance schedules"
    }
  ];

  const metrics = [
    { label: "Towers Monitored", value: "500+", icon: TowerControl },
    { label: "Fuel Savings", value: "25-35%", icon: Fuel },
    { label: "Uptime Improvement", value: "99.9%", icon: Zap },
    { label: "ROI Timeline", value: "6-8 months", icon: TrendingDown }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden bg-background">
      {/* Dark Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004B9E]/5 via-background to-[#0D9444]/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#004B9E]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0D9444]/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#004B9E]/5 rounded-full blur-[100px]" />
        <div className="theme-grid" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link to="/solutions" className="text-[#0D9444] hover:text-[#0D9444]/80 transition-colors inline-flex items-center gap-2 group">
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Solutions
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B9E]/20 border border-[#004B9E]/30 text-[#0D9444] text-sm font-medium mb-6 mx-auto md:mx-0 w-fit">
              <Wifi className="w-4 h-4" />
              Telecom Infrastructure
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight text-center md:text-left">
              Telecom <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9444] to-[#004B9E]">Towers</span>
            </h1>
            <p className="text-base sm:text-lg text-foreground/70 mb-6 leading-relaxed text-center md:text-left">
              Remote monitoring of backup generators and grid power. Ensure uptime across distributed infrastructure with centralized visibility.
            </p>
            <p className="text-foreground/60 mb-8 text-center md:text-left">
              Telecom infrastructure requires 24/7 uptime. Omhero provides remote monitoring capabilities for your distributed tower network, tracking grid availability, generator runtime, and battery health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* 10% ACTION HIGHLIGHT - Orange for high-priority CTA */}
              <Link to="/contact">
                <Button size="lg" className="bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-lg shadow-[#FF4E00]/20 w-full sm:w-auto justify-center">
                  Request Demo <Sparkles className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-[#004B9E]/30 text-foreground hover:bg-[#004B9E]/10 w-full sm:w-auto justify-center">
                  View Telecom Pricing
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D9444]/30 to-[#004B9E]/30 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-[#0D9444]/20 to-[#004B9E]/10 rounded-3xl p-6 border border-border backdrop-blur-sm overflow-hidden">
              <img 
                src="/images/solutions/telecom-tower-hero.jpg"
                alt="Telecom Tower Monitoring"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md rounded-xl p-3 border border-[#004B9E]/30">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xs text-foreground/60">Grid Status</div>
                    <div className="text-base sm:text-lg font-bold text-[#0D9444]">Active</div>
                  </div>
                  <div className="border-l border-border pl-2">
                    <div className="text-xs text-foreground/60">Battery Health</div>
                    <div className="text-base sm:text-lg font-bold text-[#004B9E]">94%</div>
                  </div>
                  <div className="border-l border-border pl-2">
                    <div className="text-xs text-foreground/60">Fuel Level</div>
                    <div className="text-base sm:text-lg font-bold text-foreground">68%</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metrics Overview */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-[#004B9E]/20 via-[#0D9444]/20 to-[#004B9E]/20 rounded-3xl p-1">
            <div className="bg-muted/60 backdrop-blur-md rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground text-center mb-4">
                Network <span className="text-[#004B9E]">Performance Metrics</span>
              </h2>
              <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto text-sm sm:text-base">
                Real results from telecom operators using Omhero
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#004B9E]/30 to-[#0D9444]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <metric.icon className="w-8 h-8 text-[#0D9444]" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1 text-center">{metric.value}</h3>
                    <p className="text-foreground/60 text-sm text-center">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground text-center mb-12">
            Why Telecom Companies <span className="text-[#0D9444]">Choose Omhero</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-muted/40 backdrop-blur-md rounded-xl p-6 border border-border hover:border-[#004B9E]/30 transition-all group text-center md:text-left"
            >
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-[#004B9E]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingDown className="w-5 h-5 text-[#0D9444]" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Reduce OPEX</h3>
              </div>
              <p className="text-foreground/70 text-center md:text-left">Optimize fuel delivery schedules and reduce site visits by up to 40% with remote monitoring.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-muted/40 backdrop-blur-md rounded-xl p-6 border border-border hover:border-[#004B9E]/30 transition-all group text-center md:text-left"
            >
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-[#004B9E]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5 text-[#0D9444]" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Prevent Downtime</h3>
              </div>
              <p className="text-foreground/70 text-center md:text-left">Get instant alerts when grid power fails or generators aren't performing as expected.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-muted/40 backdrop-blur-md rounded-xl p-6 border border-border hover:border-[#004B9E]/30 transition-all group text-center md:text-left"
            >
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-[#FF4E00]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Fuel className="w-5 h-5 text-[#FF4E00]" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Detect Fuel Theft</h3>
              </div>
              <p className="text-foreground/70 text-center md:text-left">Track fuel consumption against generator runtime to identify discrepancies and theft.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-muted/40 backdrop-blur-md rounded-xl p-6 border border-border hover:border-[#004B9E]/30 transition-all group text-center md:text-left"
            >
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-[#004B9E]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Battery className="w-5 h-5 text-[#0D9444]" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Extend Equipment Life</h3>
              </div>
              <p className="text-foreground/70 text-center md:text-left">Predictive maintenance alerts help prevent generator and battery failure.</p>
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4 text-center">
              Monitoring <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9444] to-[#004B9E]">Capabilities</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto text-center">
              Complete visibility across your entire tower network
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-muted/40 backdrop-blur-md rounded-xl p-6 border border-border hover:border-[#004B9E]/50 transition-all hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto md:mx-0`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 text-center md:text-left">{feature.title}</h3>
                <p className="text-foreground/60 text-sm text-center md:text-left">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/40 backdrop-blur-md rounded-xl p-6 text-center border border-border hover:border-[#004B9E]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#004B9E]/30 to-[#0D9444]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1 text-center">{benefit.value}</h3>
                <p className="text-sm font-semibold text-foreground/70 mb-1 text-center">{benefit.title}</p>
                <p className="text-xs text-foreground/50 text-center">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground text-center mb-12">
            Telecom <span className="text-[#0D9444]">Success Stories</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/40 backdrop-blur-md rounded-xl overflow-hidden border border-border hover:border-[#004B9E]/30 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image}
                    alt={study.operator}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#0D9444]/90 rounded-full px-2 py-1">
                    <span className="text-xs font-bold text-white">{study.reduction} saved</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1 text-center md:text-left">{study.operator}</h3>
                  <p className="text-sm text-foreground/60 mb-3 text-center md:text-left">{study.location}</p>
                  <p className="text-foreground/70 text-sm mb-4 text-center md:text-left">{study.description}</p>
                  <div className="flex justify-between items-center pt-3 border-t border-border">
                    <div>
                      <div className="text-xs text-foreground/60 text-center md:text-left">Annual Savings</div>
                      <div className="text-lg font-bold text-[#0D9444] text-center md:text-left">{study.savings}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-foreground/60 text-center md:text-right">Reduction</div>
                      <div className="text-lg font-bold text-foreground text-center md:text-right">{study.reduction}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA - 10% ACTION HIGHLIGHT: Orange */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#004B9E]/20 to-[#0D9444]/20 rounded-2xl p-8 sm:p-12 border border-border backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">Ready to Optimize Your Network?</h3>
            <p className="text-base sm:text-lg text-foreground/70 mb-8 max-w-2xl mx-auto text-center">
              Join leading telecom operators already reducing costs and improving uptime with Omhero.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-lg shadow-[#FF4E00]/20 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto justify-center">
                  Deploy Across Your Network <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-[#004B9E]/30 text-foreground hover:bg-[#004B9E]/10 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto justify-center">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}