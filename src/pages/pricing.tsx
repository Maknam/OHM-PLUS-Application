import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, Building2, Home, Factory, Calculator, TrendingUp, Shield, Zap, Clock, ArrowRight, DollarSign, Info, AlertCircle, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showEstimator, setShowEstimator] = useState(false);
  const [deviceCount, setDeviceCount] = useState(1);

  const plans = [
    {
      id: "homeBasic",
      name: "Home Basic",
      icon: Home,
      description: "Perfect for single-phase residential monitoring",
      features: [
        "Real-time energy monitoring",
        "Basic alerts & notifications",
        "30-day data history",
        "Mobile app access",
        "Email support",
        "1-year warranty"
      ],
      gradient: "from-[#004B9E] to-[#004B9E]/70",
      badge: null,
      popular: false,
      type: "home"
    },
    {
      id: "premium",
      name: "Premium",
      icon: Building2,
      description: "For SMEs, large homes, and businesses",
      features: [
        "3-Phase monitoring capability",
        "Advanced surge protection",
        "1-year data history",
        "Priority support 24/7",
        "API access for integration",
        "2-year warranty",
        "Energy consumption analytics",
        "Monthly PDF reports"
      ],
      gradient: "from-[#0D9444] to-[#004B9E]",
      badge: "MOST POPULAR",
      popular: true,
      type: "business"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      icon: Factory,
      description: "For facility managers & large organizations",
      features: [
        "Unlimited devices",
        "Custom dashboard & analytics",
        "Dedicated account manager",
        "On-site installation support",
        "Custom integrations",
        "SLA guarantee (99.9% uptime)",
        "White-label options",
        "Quarterly business reviews"
      ],
      gradient: "from-[#FF4E00] to-[#FF4E00]/70",
      badge: "CUSTOM",
      popular: false,
      type: "enterprise"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004B9E]/5 via-background to-[#0D9444]/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#004B9E]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0D9444]/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#004B9E]/5 rounded-full blur-[100px]" />
        <div className="theme-grid" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header with Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#004B9E]/20 backdrop-blur-sm border border-[#004B9E]/30 text-[#0D9444] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Transparent Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9444] to-[#004B9E]">Pricing</span> for Every Need
          </h1>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-6">
            Get the perfect solution for your home or business with pricing that scales with you
          </p>
          
          {/* IMPORTANT DISCLAIMER - Highly visible */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-4 mb-6"
          >
            <div className="inline-flex flex-col items-center gap-2 px-6 py-3 rounded-xl bg-[#FF4E00]/15 border-2 border-[#FF4E00]/40 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#FF4E00]" />
                <span className="text-[#FF4E00] font-semibold text-sm sm:text-base">IMPORTANT NOTE</span>
              </div>
              <p className="text-[#FF4E00]/90 text-xs sm:text-sm max-w-md">
                All pricing shown on this page are rough estimates only. Final pricing will be confirmed upon launch. 
                Please contact our sales team for accurate quotes.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing Cards - No Prices Shown */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`relative group ${plan.popular ? 'transform md:-translate-y-4' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-[#0D9444] to-[#004B9E] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    {plan.badge}
                  </div>
                </div>
              )}
              
              <div className={`h-full bg-gradient-to-br from-muted/60 via-muted/50 to-muted/60 backdrop-blur-md rounded-2xl border transition-all duration-300 ${
                plan.popular 
                  ? 'border-[#0D9444] shadow-[0_0_30px_rgba(13,148,68,0.3)] hover:shadow-[0_0_40px_rgba(13,148,68,0.4)]' 
                  : 'border-border hover:border-[#004B9E]/50'
              }`}>
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg mx-auto md:mx-0`}>
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2 text-center md:text-left">{plan.name}</h3>
                  <p className="text-foreground/70 text-sm mb-6 text-center md:text-left">{plan.description}</p>
                  
                  {/* Price Placeholder - Showing estimate only */}
                  <div className="mb-6 text-center md:text-left">
                    <div className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0D9444] to-[#004B9E]">
                      Estimate Available
                    </div>
                    <p className="text-xs text-foreground/50 mt-1">Contact for accurate pricing</p>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className={`w-4 h-4 mt-0.5 ${plan.popular ? 'text-[#0D9444]' : 'text-[#004B9E]'} shrink-0`} />
                        <span className="text-foreground/70 text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* 10% ACTION HIGHLIGHT - Orange for high-priority CTA on popular plan */}
                  <Button 
                    className={`w-full transition-all ${
                      plan.popular 
                        ? 'bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-lg shadow-[#FF4E00]/30' 
                        : 'bg-[#004B9E] hover:bg-[#003A7A] text-white'
                    }`}
                    onClick={() => {
                      window.location.href = "/contact";
                    }}
                  >
                    Request Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Volume Discount Section - Estimate Only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-[#004B9E]/20 via-[#0D9444]/20 to-[#004B9E]/20 rounded-2xl p-1">
            <div className="bg-muted/60 backdrop-blur-md rounded-xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Volume Discounts Available</h3>
                <p className="text-foreground/70">The more you buy, the more you save — estimated discounts below</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { min: 1, max: 9, discount: "Standard", label: "Base Price" },
                  { min: 10, max: 19, discount: "10%", label: "Small Business" },
                  { min: 20, max: 49, discount: "15%", label: "Growing Business" },
                  { min: 50, max: 99, discount: "20%", label: "Large Business" },
                  { min: 100, max: "+", discount: "25%", label: "Enterprise" }
                ].map((tier, index) => (
                  <div key={index} className="text-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all">
                    <div className="text-lg font-bold text-[#0D9444]">{tier.discount}</div>
                    <div className="text-xs text-foreground/60 mt-1">OFF (est.)</div>
                    <div className="text-xs text-foreground/50 mt-2">{tier.min}-{tier.max} units</div>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-foreground/50 mt-4">
                * Estimated volume discounts. Final discounts will be confirmed upon consultation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Request Custom Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-[#004B9E]/10 to-[#0D9444]/10 rounded-2xl p-8 border border-[#004B9E]/20 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B9E]/20 border border-[#004B9E]/30 text-[#0D9444] text-sm font-medium mb-4 mx-auto w-fit">
              <DollarSign className="w-4 h-4" />
              Need a Custom Quote?
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Get Accurate Pricing for Your Needs</h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Contact our sales team for a personalized quote based on your specific requirements, 
              volume needs, and installation preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* 10% ACTION HIGHLIGHT - Orange for high-priority CTA */}
              <Link to="/contact">
                <Button size="lg" className="bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-lg shadow-[#FF4E00]/30">
                  Contact Sales <Phone className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              {/* 30% OPERATIONAL - Blue for secondary action */}
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-[#004B9E]/30 text-foreground hover:bg-[#004B9E]/10">
                  Request Quote via Email <Mail className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-muted/40 backdrop-blur-sm rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-[#0D9444] font-medium mb-1">What's included in the hardware cost?</p>
                <p className="text-sm text-foreground/60">The device, installation kit, and warranty. Contact us for detailed pricing.</p>
              </div>
              <div>
                <p className="text-[#0D9444] font-medium mb-1">Is there a monthly subscription?</p>
                <p className="text-sm text-foreground/60">No monthly fees. One-time hardware purchase with free mobile app access.</p>
              </div>
              <div>
                <p className="text-[#0D9444] font-medium mb-1">Do you offer installation services?</p>
                <p className="text-sm text-foreground/60">Yes, professional installation available. Pricing available upon request.</p>
              </div>
              <div>
                <p className="text-[#0D9444] font-medium mb-1">What payment methods do you accept?</p>
                <p className="text-sm text-foreground/60">Bank transfer, card payments, and financing options for bulk orders.</p>
              </div>
              <div>
                <p className="text-[#0D9444] font-medium mb-1">Are these the final prices?</p>
                <p className="text-sm text-foreground/60">All pricing shown are estimates. Final pricing will be confirmed upon official launch.</p>
              </div>
              <div>
                <p className="text-[#0D9444] font-medium mb-1">How can I get an accurate quote?</p>
                <p className="text-sm text-foreground/60">Contact our sales team directly for a personalized quote based on your needs.</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="text-[#0D9444] hover:text-[#0D9444]/80 text-sm inline-flex items-center gap-1 justify-center">
                <MessageCircle className="w-3 h-3" /> Chat with Sales
              </Link>
              <Link to="/contact" className="text-foreground/60 hover:text-foreground text-sm inline-flex items-center gap-1 justify-center">
                More questions? Contact our sales team <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-[#004B9E]/20 via-[#0D9444]/20 to-[#004B9E]/20 rounded-2xl p-8 border border-border">
            <p className="text-foreground/70 text-sm mb-4">
              <AlertCircle className="w-4 h-4 inline-block mr-1 text-[#FF4E00]" />
              All pricing shown are preliminary estimates. Final pricing will be confirmed upon full launch.
            </p>
            {/* 10% ACTION HIGHLIGHT - Orange for high-priority CTA */}
            <Link to="/contact">
              <Button size="lg" className="bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-lg shadow-[#FF4E00]/30">
                Get Accurate Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}