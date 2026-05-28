import { Link } from "wouter";
import { Calculator, AlertTriangle, PlugZap, Gauge, Lightbulb, FileText, ArrowRight, Zap, Shield, Clock, Sparkles, ChevronRight, CheckCircle2, Phone, Mail, MapPin, Star, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 8,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0, -10, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Service card with enhanced design
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
      whileHover={{ y: -8 }}
    >
      <Link href={service.href}>
        <div className="relative group h-full">
          {/* Glow effect on hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
          
          <Card className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-md border border-white/10 hover:border-primary/40 transition-all duration-300 cursor-pointer overflow-hidden">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardContent className="p-8 relative z-10">
              {/* Icon with animated background */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl ${service.bg} border ${service.borderColor} flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative z-10`}>
                  <service.icon className={`w-8 h-8 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                {/* Animated pulse ring */}
                <div className={`absolute inset-0 rounded-2xl ${service.bg} opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-700`} style={{ animationDuration: '1.5s' }} />
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-3 flex items-center justify-between gap-2">
                <span className="group-hover:text-primary transition-colors">{service.title}</span>
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {service.tags?.map((tag: string, idx: number) => (
                  <span key={idx} className="text-xs bg-white/5 px-2 py-1 rounded-full text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Link>
    </motion.div>
  );
};

// Featured service highlight
const FeaturedService = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="relative mb-16"
  >
    <div className="bg-gradient-to-r from-primary/20 via-cyan-500/20 to-purple-500/20 rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-sm overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-4">
            <Sparkles className="w-3 h-3" />
            Featured Service
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bill Calculator</h2>
          <p className="text-gray-300 mb-6">
            Estimate your monthly energy bill and discover potential savings with our intelligent calculator. 
            Compare different tariff plans and find the best option for your home or business.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Real-time rates
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Savings estimate
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Compare plans
            </div>
          </div>
          <Link href="/services/bill-calculator">
            <Button className="mt-6 bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white">
              Try Calculator <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400 text-sm">Estimated Monthly Bill</span>
              <span className="text-primary text-sm">Savings: 30%</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Current Bill</span>
                <span className="text-white font-bold">₦25,000</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "70%" }} />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">After Omhero</span>
                <span className="text-green-500 font-bold">₦17,500</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-center">
                <span className="text-cyan-400 font-bold">Save ₦7,500 monthly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Quick stats section
const QuickStats = () => {
  const stats = [
    { value: "24/7", label: "Support Available", icon: Clock },
    { value: "30%", label: "Average Savings", icon: TrendingUp },
    { value: "98%", label: "Customer Satisfaction", icon: Star },
    { value: "< 1hr", label: "Response Time", icon: Zap }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-primary/30 transition-all"
        >
          <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
          <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-xs text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const services = [
    {
      title: "Bill Calculator",
      description: "Estimate your monthly energy bill and calculate potential savings with our intelligent calculator.",
      icon: Calculator,
      href: "/services/bill-calculator",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      tags: ["Real-time rates", "Savings estimate", "Compare plans"]
    },
    {
      title: "Report Fault",
      description: "Log an outage, voltage drop, or sparking wire to our technical team for immediate response.",
      icon: AlertTriangle,
      href: "/services/report-fault",
      color: "text-[#E65516]",
      bg: "bg-[#E65516]/10",
      borderColor: "border-[#E65516]/20",
      tags: ["24/7 response", "Track status", "SMS alerts"]
    },
    {
      title: "New Connection",
      description: "Apply for a new property connection or Omhero device installation at your location.",
      icon: PlugZap,
      href: "/services/new-connection",
      color: "text-[#2E8B43]",
      bg: "bg-[#2E8B43]/10",
      borderColor: "border-[#2E8B43]/20",
      tags: ["Fast approval", "Professional install", "3-5 days"]
    },
    {
      title: "Meter Upgrade",
      description: "Request an upgrade from your old post-paid meter to a smart pre-paid meter.",
      icon: Gauge,
      href: "/services/meter-upgrade",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      tags: ["Smart meter", "Pre-paid option", "Remote control"]
    },
    {
      title: "Energy Tips",
      description: "Learn practical strategies to optimize your power usage and reduce monthly expenses.",
      icon: Lightbulb,
      href: "/energy-tips",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
      tags: ["Guides", "Video tutorials", "Checklists"]
    },
    {
      title: "Tariff Info",
      description: "View current residential and commercial electricity rates in Nigeria and Ghana.",
      icon: FileText,
      href: "/tariffs",
      color: "text-teal-500",
      bg: "bg-teal-500/10",
      borderColor: "border-teal-500/20",
      tags: ["Updated rates", "Compare tariffs", "Calculator"]
    }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 min-h-[100dvh] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2a] to-[#1a1a3e]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?q=80&w=2070')] bg-cover bg-fixed opacity-5" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,114,206,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,114,206,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <FloatingParticles />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Hero Section */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-sm font-medium mb-6 mx-auto">
              <Zap className="w-4 h-4 animate-pulse" />
              Self-Service Portal
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight text-center">
              Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center">
              Manage your energy needs, request support, and estimate your costs from our comprehensive self-service portal. 
              Fast, efficient, and available 24/7.
            </p>
          </motion.div>
        </motion.div>

        {/* Quick Stats */}
        <QuickStats />

        {/* Featured Service Highlight */}
        <FeaturedService />

        {/* Services Grid */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose from our range of energy management services designed to make your life easier
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 via-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-white/20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Need Assistance?</h3>
              <p className="text-gray-300 mb-4">
                Our customer support team is available 24/7 to help you with any questions or issues.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+233 (0) 55 123 4567 (Ghana)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+234 (0) 701 234 5678 (Nigeria)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>support@ohmplus.africa</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-cyan-500 text-white shadow-lg shadow-primary/30">
                  Contact Support <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <p className="text-xs text-gray-500 mt-3">Average response time: &lt; 1 hour</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}