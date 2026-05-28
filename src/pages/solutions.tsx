import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Building2, Factory, Server, Wifi, LayoutDashboard, ArrowRight, CheckCircle2, Zap, Shield, TrendingDown, Clock, Star, Users, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const solutions = [
    {
      id: "smart-homes",
      title: "Smart Homes",
      icon: Home,
      desc: "Protect expensive appliances from grid surges and monitor exactly how much power you consume daily.",
      longDesc: "Omhero transforms your home into an intelligent energy ecosystem. Get real-time visibility into every appliance's consumption, receive instant alerts about unusual usage patterns, and protect your valuable electronics from dangerous voltage fluctuations.",
      benefits: [
        "Save 20-30% on monthly electricity bills",
        "Protect appliances from power surges",
        "Identify energy-hungry devices",
        "Remote power control from anywhere",
        "Dispute estimated bills with real data"
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      gradient: "from-blue-600/20 to-cyan-600/10",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/20"
    },
    {
      id: "smes-retail",
      title: "SMEs & Retail",
      icon: Building2,
      desc: "Cut operational costs by identifying power waste during off-hours. Dispute estimated commercial bills.",
      longDesc: "For small businesses and retail stores, every naira counts. Omhero helps you understand exactly where your energy budget is going, identify waste during non-business hours, and provide concrete data to dispute inflated estimated bills.",
      benefits: [
        "Reduce operational energy costs by up to 35%",
        "Identify after-hours energy waste",
        "Data-backed bill dispute evidence",
        "Monitor multiple locations from one dashboard",
        "Automatic usage reports for accounting"
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
      gradient: "from-green-600/20 to-emerald-600/10",
      borderColor: "border-green-500/30",
      iconBg: "bg-green-500/20"
    },
    {
      id: "industrial",
      title: "Factories & Industrial",
      icon: Factory,
      desc: "Three-phase monitoring for heavy machinery. Detect power anomalies before they cause equipment failure.",
      longDesc: "Industrial operations demand robust energy monitoring. Omhero's three-phase monitoring capabilities give you unprecedented visibility into your factory's power consumption patterns.",
      benefits: [
        "Prevent costly equipment breakdowns",
        "Optimize production shift scheduling",
        "Detect power quality issues early",
        "Reduce unplanned downtime by 50%",
        "Comprehensive three-phase monitoring"
      ],
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=500&fit=crop",
      gradient: "from-orange-600/20 to-red-600/10",
      borderColor: "border-orange-500/30",
      iconBg: "bg-orange-500/20"
    },
    {
      id: "telecom",
      title: "Telecom Towers",
      icon: Wifi,
      desc: "Remote monitoring of backup generators and grid power. Ensure uptime across distributed infrastructure.",
      longDesc: "Telecom infrastructure requires 24/7 uptime. Omhero provides remote monitoring capabilities for your distributed tower network.",
      benefits: [
        "Real-time generator monitoring",
        "Track fuel consumption remotely",
        "Predictive maintenance alerts",
        "Reduce site visit frequency by 40%",
        "Centralized dashboard for all sites"
      ],
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=500&fit=crop",
      gradient: "from-purple-600/20 to-pink-600/10",
      borderColor: "border-purple-500/30",
      iconBg: "bg-purple-500/20"
    },
    {
      id: "data-centers",
      title: "Data Centres",
      icon: Server,
      desc: "Precision power usage effectiveness (PUE) tracking. Environmental and thermal risk alerts.",
      longDesc: "Data centers demand precision. Omhero delivers granular power monitoring with PUE tracking and thermal management alerts.",
      benefits: [
        "Track and improve PUE metrics",
        "Early warning for thermal issues",
        "Redundancy monitoring",
        "Compliance reporting",
        "Reduce cooling energy by 25%"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
      gradient: "from-cyan-600/20 to-blue-600/10",
      borderColor: "border-cyan-500/30",
      iconBg: "bg-cyan-500/20"
    },
    {
      id: "facility-managers",
      title: "Facility Managers",
      icon: LayoutDashboard,
      desc: "Manage hundreds of properties from a single dashboard. Automated billing and sub-metering solutions.",
      longDesc: "Managing multiple properties? Omhero's facility management dashboard gives you complete visibility across your entire portfolio.",
      benefits: [
        "Centralized multi-property dashboard",
        "Automated tenant billing",
        "Maintenance scheduling",
        "Energy benchmarking",
        "Reduce management overhead by 50%"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      gradient: "from-red-600/20 to-rose-600/10",
      borderColor: "border-red-500/30",
      iconBg: "bg-red-500/20"
    }
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers", color: "text-blue-400" },
    { icon: Globe, value: "2", label: "Countries", color: "text-green-400" },
    { icon: Zap, value: "30%", label: "Average Savings", color: "text-yellow-400" },
    { icon: Award, value: "99.9%", label: "Uptime", color: "text-purple-400" },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2a] to-[#1a1a3e]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2070')] bg-cover bg-fixed opacity-10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px]" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,114,206,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,114,206,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-sm font-medium mb-6 shadow-lg">
            <Zap className="w-4 h-4" />
            Tailored Solutions for Every Need
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Solutions by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Industry</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From single-family homes to distributed telecom infrastructure, Omhero scales to meet your energy monitoring needs.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-black/30 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:border-primary/30 transition-all group">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold text-white mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className={`bg-gradient-to-br ${sol.gradient} backdrop-blur-md border ${sol.borderColor} hover:border-opacity-100 transition-all duration-500 h-full flex flex-col overflow-hidden group shadow-xl hover:shadow-2xl hover:-translate-y-2`}>
                {/* Image Preview */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={sol.image} 
                    alt={sol.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${sol.gradient} opacity-60`} />
                  <div className="absolute -bottom-6 left-6">
                    <div className={`w-14 h-14 rounded-2xl ${sol.iconBg} backdrop-blur-sm flex items-center justify-center border ${sol.borderColor} shadow-lg`}>
                      <sol.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col flex-1 pt-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{sol.desc}</p>
                  
                  {/* Benefits Preview */}
                  <div className="space-y-2 mb-6">
                    {sol.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                    {sol.benefits.length > 3 && (
                      <div className="text-xs text-primary">+{sol.benefits.length - 3} more benefits</div>
                    )}
                  </div>
                  
                  <Link to={`/solutions/${sol.id}`} className="mt-auto">
                    <Button variant="outline" className={`w-full ${sol.borderColor} text-white hover:bg-primary/20 hover:border-primary transition-all gap-2 group-hover:gap-3`}>
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-cyan-500/10 rounded-3xl blur-xl" />
          <div className="relative bg-black/40 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-white/10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-4">
                <Star className="w-4 h-4" />
                Why Trust Us
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">OHM Plus?</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We combine cutting-edge technology with local expertise to deliver solutions that work for Africa.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Save Up to 30%</h3>
                <p className="text-gray-400 text-sm">On your energy bills</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Protection</h3>
                <p className="text-gray-400 text-sm">From electrical hazards</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/30 to-cyan-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all">
                  <Clock className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Real-Time Data</h3>
                <p className="text-gray-400 text-sm">Updated every 5 seconds</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/30 to-green-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all">
                  <TrendingDown className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Reduce Waste</h3>
                <p className="text-gray-400 text-sm">Identify inefficiencies</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/10 to-cyan-500/30 rounded-2xl blur-2xl" />
          <div className="relative bg-gradient-to-r from-primary/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-12 text-center border border-white/20 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Not Sure Which Solution Fits?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Our team will help you find the perfect energy monitoring solution for your specific needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 text-lg px-8 h-14">
                  Talk to an Expert <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 h-14">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}