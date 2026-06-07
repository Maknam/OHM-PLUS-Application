import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, TrendingDown, Smartphone, Bell, Activity, Sparkles, Clock, DollarSign, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function SmartHomes() {
  const features = [
    { icon: Activity, title: "Real-Time Monitoring", desc: "See exactly how much power you're using at any moment", gradient: "from-[#004B9E] to-[#004B9E]/70" },
    { icon: Shield, title: "Surge Protection", desc: "Detect dangerous voltage fluctuations instantly", gradient: "from-[#FF4E00] to-[#FF4E00]/70" },
    { icon: Bell, title: "Instant Alerts", desc: "Get notified about unusual usage patterns", gradient: "from-[#FF4E00] to-[#FF4E00]/70" },
    { icon: Smartphone, title: "Remote Control", desc: "Turn appliances on/off from anywhere", gradient: "from-[#004B9E] to-[#004B9E]/70" },
    { icon: TrendingDown, title: "Energy Insights", desc: "Identify which devices cost you the most", gradient: "from-[#0D9444] to-[#0D9444]/70" },
    { icon: Zap, title: "Bill Verification", desc: "Dispute estimated bills with real data", gradient: "from-[#0D9444] to-[#0D9444]/70" }
  ];

  const testimonials = [
    {
      name: "James Okafor",
      location: "Lagos, Nigeria",
      quote: "Omhero helped me discover my old AC was consuming 40% more energy than it should. I replaced it and my bill dropped by ₦35,000 monthly!",
      image: "https://images.unsplash.com/photo-1656313836297-0cd072f08f43?w=600&h=600&fit=crop",
      savings: "35% reduction"
    },
    {
      name: "Ama Serwaa",
      location: "Accra, Ghana",
      quote: "The real-time monitoring feature is a game-changer. I can finally see exactly what I'm paying for and dispute ECG's estimated bills.",
      image: "https://images.unsplash.com/photo-1632765866070-3fadf25d3d5b?w=600&h=600&fit=crop",
      savings: "28% reduction"
    },
    {
      name: "Michael Adeyemi",
      location: "Abuja, Nigeria",
      quote: "Installation was seamless and the app is incredibly intuitive. I've recommended Omhero to all my neighbors.",
      image: "https://images.unsplash.com/photo-1596580817363-a4a8f67d4bc8?w=600&h=600&fit=crop",
      savings: "₦25,000 saved"
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden bg-background">
      {/* Dark Background with subtle gradient */}
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
              <Sparkles className="w-4 h-4" />
              For Homeowners
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight text-center md:text-left">
              Smart Homes <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9444] to-[#004B9E]">Solution</span>
            </h1>
            <p className="text-base sm:text-lg text-foreground/70 mb-8 leading-relaxed text-center md:text-left">
              Transform your home into an intelligent energy ecosystem. Get real-time visibility into every appliance's consumption and protect your valuable electronics from dangerous voltage fluctuations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* 10% ACTION HIGHLIGHT - Orange for high-priority CTA */}
              <Link to="/contact">
                <Button size="lg" className="bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-lg shadow-[#FF4E00]/20 w-full sm:w-auto justify-center">
                  Get Started <Sparkles className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-[#0D9444]/30 text-foreground hover:bg-[#0D9444]/10 w-full sm:w-auto justify-center">
                  View Pricing
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
                src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&h=420&fit=crop"
                alt="Smart Home Energy Monitoring"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md rounded-xl p-3 border border-border">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xs text-foreground/60">Current Usage</div>
                    <div className="text-base sm:text-lg font-bold text-[#0D9444]">2.4 kW</div>
                  </div>
                  <div className="border-l border-border pl-2">
                    <div className="text-xs text-foreground/60">Today's Cost</div>
                    <div className="text-base sm:text-lg font-bold text-foreground">₦1,280</div>
                  </div>
                  <div className="border-l border-border pl-2">
                    <div className="text-xs text-foreground/60">Status</div>
                    <div className="text-xs sm:text-sm font-semibold text-[#0D9444]">● Optimized</div>
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
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9444] to-[#004B9E]">Features</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto text-center">
              Everything you need to take complete control of your home's energy
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

        {/* Savings Calculator Preview */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-[#004B9E]/20 via-[#0D9444]/20 to-[#004B9E]/20 rounded-3xl p-1">
            <div className="bg-muted/60 backdrop-blur-md rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D9444]/20 border border-[#0D9444]/30 text-[#0D9444] text-sm font-medium mb-4 mx-auto md:mx-0 w-fit">
                    <DollarSign className="w-4 h-4" />
                    Potential Savings
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center md:text-left">How much can you save?</h3>
                  <p className="text-foreground/70 mb-6 text-center md:text-left">
                    Based on real customer data, homeowners save an average of 25-30% on their monthly electricity bills after installing Omhero.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#0D9444]">₦35,000+</div>
                      <div className="text-xs text-foreground/60">Average monthly savings</div>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-border" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#0D9444]">6-8</div>
                      <div className="text-xs text-foreground/60">Months ROI</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=600&h=400&fit=crop"
                    alt="Energy Savings Chart"
                    className="rounded-xl shadow-2xl w-full"
                  />
                  <div className="absolute -top-3 -right-3 bg-[#0D9444] rounded-full p-2 shadow-lg">
                    <TrendingDown className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-muted/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-border mb-24">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground text-center mb-12">
            What You'll <span className="text-[#0D9444]">Save</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0D9444]/30 to-[#0D9444]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10 text-[#0D9444]" />
              </div>
              <div className="text-4xl font-bold text-[#0D9444] mb-2 text-center">20-30%</div>
              <p className="text-foreground/70 text-center">Monthly energy savings</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0D9444]/30 to-[#0D9444]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-10 h-10 text-[#0D9444]" />
              </div>
              <div className="text-4xl font-bold text-[#0D9444] mb-2 text-center">6-8 Months</div>
              <p className="text-foreground/70 text-center">Average ROI timeline</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#004B9E]/30 to-[#004B9E]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10 text-[#004B9E]" />
              </div>
              <div className="text-4xl font-bold text-[#004B9E] mb-2 text-center">100%</div>
              <p className="text-foreground/70 text-center">Bill dispute confidence</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground text-center mb-12">
            What Our <span className="text-[#0D9444]">Customers Say</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/40 backdrop-blur-md rounded-xl p-6 border border-border hover:border-[#0D9444]/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4 text-center sm:text-left">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#0D9444] mx-auto sm:mx-0"
                  />
                  <div>
                    <h4 className="font-bold text-foreground text-center sm:text-left">{testimonial.name}</h4>
                    <p className="text-xs text-foreground/60 text-center sm:text-left">{testimonial.location}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-2 justify-center sm:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#0D9444] text-[#0D9444]" />
                    ))}
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed italic text-center sm:text-left">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-border justify-center sm:justify-start">
                  <Leaf className="w-4 h-4 text-[#0D9444]" />
                  <span className="text-sm text-[#0D9444]">{testimonial.savings}</span>
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
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">Ready to Transform Your Home?</h3>
            <p className="text-base sm:text-lg text-foreground/70 mb-8 max-w-2xl mx-auto text-center">
              Join thousands of homeowners already saving with Omhero. Get your device today.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-lg shadow-[#FF4E00]/20 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto justify-center">
                  Request a Consultation <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Star component for ratings
function Star({ className }: { className: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}