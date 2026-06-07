import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, CheckCircle2, TrendingDown, Clock, BarChart3, Users, DollarSign, Store, ShoppingBag, Zap, Shield, Smartphone, Bell, Activity, Sparkles, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function SMEsRetail() {
  const features = [
    { icon: Activity, title: "Real-Time Monitoring", desc: "Track energy usage across all your locations instantly", gradient: "from-[#004B9E] to-[#004B9E]/70" },
    { icon: Clock, title: "Off-Hours Detection", desc: "Identify energy waste when your business is closed", gradient: "from-[#FF4E00] to-[#FF4E00]/70" },
    { icon: BarChart3, title: "Usage Analytics", desc: "Detailed reports for accounting and budgeting", gradient: "from-[#0D9444] to-[#0D9444]/70" },
    { icon: Shield, title: "Surge Protection", desc: "Protect expensive equipment from voltage spikes", gradient: "from-[#FF4E00] to-[#FF4E00]/70" },
    { icon: Smartphone, title: "Remote Management", desc: "Monitor all locations from your phone", gradient: "from-[#004B9E] to-[#004B9E]/70" },
    { icon: DollarSign, title: "Bill Dispute Tool", desc: "Data-backed evidence against estimated bills", gradient: "from-[#0D9444] to-[#0D9444]/70" }
  ];

  const benefits = [
    { icon: TrendingDown, title: "Energy Savings", desc: "Average reduction in operational costs", value: "35%", color: "text-[#0D9444]" },
    { icon: Store, title: "Multi-Location", desc: "Monitor unlimited stores from one dashboard", value: "Unlimited", color: "text-[#004B9E]" },
    { icon: Users, title: "Team Access", desc: "Give your team secure access permissions", value: "Unlimited", color: "text-[#004B9E]" },
    { icon: Zap, title: "Support", desc: "Dedicated business support line", value: "24/7", color: "text-[#0D9444]" }
  ];

  const caseStudies = [
    {
      business: "Food Market Chain",
      location: "Lagos, Nigeria",
      savings: "₦280,000",
      reduction: "32%",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=600&h=400&fit=crop",
      description: "Retail chain reduced energy costs across 5 locations"
    },
    {
      business: "Office Complex",
      location: "Accra, Ghana",
      savings: "₵8,500",
      reduction: "28%",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=600&h=400&fit=crop",
      description: "Corporate office identified after-hours energy waste"
    },
    {
      business: "Retail Store",
      location: "Abuja, Nigeria",
      savings: "₦145,000",
      reduction: "35%",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=600&h=400&fit=crop",
      description: "Shopping mall reduced HVAC energy consumption"
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden bg-background">
      {/* Dark Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004B9E]/5 via-background to-[#0D9444]/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0D9444]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#004B9E]/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0D9444]/5 rounded-full blur-[100px]" />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D9444]/20 border border-[#0D9444]/30 text-[#0D9444] text-sm font-medium mb-6 mx-auto md:mx-0 w-fit">
              <Building2 className="w-4 h-4" />
              For Businesses
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight text-center md:text-left">
              SMEs & Retail <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9444] to-[#0D9444]">Solution</span>
            </h1>
            <p className="text-base sm:text-lg text-foreground/70 mb-8 leading-relaxed text-center md:text-left">
              Cut operational costs by identifying power waste during off-hours. Get data-backed evidence to dispute inflated estimated bills from distribution companies.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <CheckCircle2 className="w-5 h-5 text-[#0D9444] shrink-0" />
                <span className="text-foreground">Reduce energy costs by up to 35%</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <CheckCircle2 className="w-5 h-5 text-[#0D9444] shrink-0" />
                <span className="text-foreground">Monitor multiple locations from one dashboard</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <CheckCircle2 className="w-5 h-5 text-[#0D9444] shrink-0" />
                <span className="text-foreground">Automated usage reports for accounting</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* 10% ACTION HIGHLIGHT - Orange for high-priority CTA */}
              <Link to="/contact">
                <Button size="lg" className="bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-lg shadow-[#FF4E00]/20 w-full sm:w-auto justify-center">
                  Get Started <Sparkles className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-[#0D9444]/30 text-foreground hover:bg-[#0D9444]/10 w-full sm:w-auto justify-center">
                  View Business Pricing
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D9444]/30 to-[#0D9444]/30 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-[#0D9444]/20 to-[#0D9444]/10 rounded-3xl p-6 border border-border backdrop-blur-sm overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?w=800&h=600&fit=crop"
                alt="SME Business Energy Monitoring"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md rounded-xl p-3 border border-[#0D9444]/30">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xs text-foreground/60">Store 1 - Ikeja</div>
                    <div className="text-base sm:text-lg font-bold text-[#0D9444]">1.8 kW</div>
                  </div>
                  <div className="border-l border-border pl-2">
                    <div className="text-xs text-foreground/60">Store 2 - VI</div>
                    <div className="text-base sm:text-lg font-bold text-[#0D9444]">2.1 kW</div>
                  </div>
                  <div className="border-l border-border pl-2">
                    <div className="text-xs text-foreground/60">Total Daily</div>
                    <div className="text-base sm:text-lg font-bold text-foreground">3.9 kW</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
              Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9444] to-[#0D9444]">Features</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto text-center">
              Everything your business needs to optimize energy costs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-muted/40 backdrop-blur-md rounded-xl p-6 border border-border hover:border-[#0D9444]/50 transition-all hover:-translate-y-2"
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

        {/* Benefits Section */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-[#0D9444]/20 via-[#0D9444]/20 to-[#0D9444]/20 rounded-3xl p-1">
            <div className="bg-muted/60 backdrop-blur-md rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground text-center mb-4">
                Why SMEs Choose <span className="text-[#0D9444]">Omhero</span>
              </h2>
              <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto text-sm sm:text-base">
                Join hundreds of businesses already saving on energy costs
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0D9444]/30 to-[#0D9444]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-[#0D9444] mb-1 text-center">{benefit.value}</div>
                    <h3 className="text-lg font-bold text-foreground mb-1 text-center">{benefit.title}</h3>
                    <p className="text-foreground/60 text-sm text-center">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground text-center mb-12">
            Real Business <span className="text-[#0D9444]">Results</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/40 backdrop-blur-md rounded-xl overflow-hidden border border-border hover:border-[#0D9444]/30 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image}
                    alt={study.business}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1 text-center md:text-left">{study.business}</h3>
                  <p className="text-sm text-foreground/60 mb-3 text-center md:text-left">{study.location}</p>
                  <p className="text-foreground/70 text-sm mb-4 text-center md:text-left">{study.description}</p>
                  <div className="flex justify-between items-center pt-3 border-t border-border">
                    <div>
                      <div className="text-xs text-foreground/60 text-center md:text-left">Monthly Savings</div>
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

        {/* ROI Calculator Section */}
        <div className="mb-24">
          <div className="bg-muted/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D9444]/20 border border-[#0D9444]/30 text-[#0D9444] text-sm font-medium mb-4 mx-auto md:mx-0 w-fit">
                  <TrendingDown className="w-4 h-4" />
                  Return on Investment
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center md:text-left">Typical Business ROI</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between text-sm mb-1 gap-2 sm:gap-0">
                      <span className="text-foreground/70 text-center sm:text-left">Average Monthly Bill</span>
                      <span className="text-foreground text-center sm:text-right">₦500,000</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between text-sm mb-1 gap-2 sm:gap-0">
                      <span className="text-foreground/70 text-center sm:text-left">After Omhero</span>
                      <span className="text-[#0D9444] text-center sm:text-right">₦325,000</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden mt-2">
                      <div className="w-[35%] h-full bg-[#0D9444] rounded-full" />
                    </div>
                    <p className="text-xs text-foreground/60 mt-1 text-center sm:text-left">35% reduction</p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between pt-3 border-t border-border gap-2 sm:gap-0">
                    <span className="text-foreground/70 text-center sm:text-left">Monthly Savings</span>
                    <span className="text-xl font-bold text-[#0D9444] text-center sm:text-right">₦175,000</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
                    <span className="text-foreground/70 text-center sm:text-left">Payback Period</span>
                    <span className="text-xl font-bold text-foreground text-center sm:text-right">4-6 months</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?w=600&h=400&fit=crop"
                  alt="Business Energy Savings"
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute -top-3 -right-3 bg-[#0D9444] rounded-full p-2 shadow-lg">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA - 10% ACTION HIGHLIGHT: Orange */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#0D9444]/20 to-[#0D9444]/20 rounded-2xl p-8 sm:p-12 border border-border backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">Ready to Reduce Your Business Energy Costs?</h3>
            <p className="text-base sm:text-lg text-foreground/70 mb-8 max-w-2xl mx-auto text-center">
              Join hundreds of SMEs already saving with Omhero. Get a free business consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-lg shadow-[#FF4E00]/20 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto justify-center">
                  Schedule Business Consultation <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-[#0D9444]/30 text-foreground hover:bg-[#0D9444]/10 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto justify-center">
                  View Business Plans
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}