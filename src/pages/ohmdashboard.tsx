// pages/dashboard/overview.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Add missing import
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  Activity, 
  Clock,
  Sparkles,
  ArrowRight,
  Star,
  Globe,
  Users,
  TrendingDown,
  Leaf,
  CheckCircle2,
  Radio,
  Bell,
  Calendar,
  Share2,
  Server,
  Database,
  LineChart,
  FileText,
  QrCode,
  Sun,
  Smartphone as SmartphoneIcon,
  Monitor,
  Car,
  Code,
} from "lucide-react";

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
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
            y: [0, -30, 0],
            x: [0, 15, 0, -15, 0],
            opacity: [0, 0.5, 0]
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

// Feature Card Component
const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
      <Card className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-md border border-white/10 hover:border-primary/40 transition-all duration-300 overflow-hidden">
        <CardContent className="p-6 text-center sm:text-left">
          <div className="relative mb-4 flex justify-center sm:justify-start">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
              <feature.icon className="w-7 h-7 text-white" />
            </div>
            {feature.badge && (
              <div className="absolute -top-2 -right-2 bg-primary/80 text-white text-xs px-2 py-0.5 rounded-full">
                {feature.badge}
              </div>
            )}
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors text-center sm:text-left">{feature.title}</h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed text-center sm:text-left">{feature.description}</p>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {feature.tags?.map((tag: string, idx: number) => (
              <span key={idx} className="text-xs bg-white/5 px-2 py-1 rounded-full text-gray-400">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Stats Card Component
const StatCard = ({ stat, index }: { stat: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-primary/30 transition-all group"
  >
    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
    <div className="text-2xl md:text-3xl font-bold text-white mb-1 text-center">{stat.value}</div>
    <div className="text-xs text-gray-400 text-center">{stat.label}</div>
  </motion.div>
);

// Roadmap Timeline Component
const RoadmapItem = ({ item, index }: { item: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className="relative flex flex-col md:flex-row gap-6 mb-12"
  >
    <div className="md:w-1/3 text-center md:text-left">
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${item.statusColor} text-sm font-medium mb-3 mx-auto md:mx-0 w-fit`}>
        <Clock className="w-3 h-3" />
        {item.status}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2 text-center md:text-left">{item.title}</h3>
      <p className="text-gray-400 text-sm text-center md:text-left">{item.description}</p>
    </div>
    <div className="md:w-2/3">
      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {item.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-2 justify-center sm:justify-start">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
              <span className="text-gray-300 text-sm text-center sm:text-left">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    {index < 3 && (
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-24px] hidden md:block">
        <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    )}
  </motion.div>
);

export default function DashboardOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const dashboardFeatures = [
    {
      icon: LineChart,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive energy analytics with customizable charts, trends, and predictive insights. Track consumption patterns and identify optimization opportunities.",
      color: "from-blue-500 to-cyan-500",
      tags: ["Real-time", "Historical", "Predictive"],
      badge: "Core Feature"
    },
    {
      icon: Bell,
      title: "Smart Alerts & Notifications",
      description: "Receive instant alerts for anomalies, unusual usage patterns, potential faults, and maintenance reminders via SMS, email, or push notifications.",
      color: "from-red-500 to-orange-500",
      tags: ["SMS", "Email", "Push"],
      badge: "Coming Soon"
    },
    {
      icon: Shield,
      title: "Advanced Fault Detection",
      description: "AI-powered detection of electrical faults, overloads, and fire risks before they become dangerous. Real-time protection for your entire property.",
      color: "from-green-500 to-emerald-500",
      tags: ["AI Detection", "Predictive", "Real-time"],
      badge: "Enhanced"
    },
    {
      icon: Globe,
      title: "Multi-Property Management",
      description: "Manage multiple properties from a single dashboard. Perfect for landlords, property managers, and businesses with multiple locations.",
      color: "from-purple-500 to-pink-500",
      tags: ["Unlimited Properties", "Centralized"],
      badge: "Enterprise"
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Generate detailed energy reports, compliance certificates, and custom analytics with one click. Export to PDF, CSV, or share via email.",
      color: "from-yellow-500 to-amber-500",
      tags: ["PDF", "CSV", "Auto-schedule"],
      badge: "New"
    },
    {
      icon: Users,
      title: "Team Access & Permissions",
      description: "Invite team members, set role-based permissions, and collaborate on energy management across your organization.",
      color: "from-indigo-500 to-purple-500",
      tags: ["Roles", "Permissions", "Audit Log"],
      badge: "Enterprise"
    },
    {
      icon: QrCode,
      title: "Device Health Monitoring",
      description: "Real-time health status of all connected devices. Get maintenance alerts and performance insights for each appliance.",
      color: "from-teal-500 to-green-500",
      tags: ["Health Score", "Maintenance"],
      badge: "IoT Ready"
    },
    {
      icon: Leaf,
      title: "Carbon Footprint Tracker",
      description: "Track your carbon emissions based on energy usage and get recommendations to reduce your environmental impact.",
      color: "from-green-500 to-teal-500",
      tags: ["Emissions", "Recommendations"],
      badge: "Coming Soon"
    },
    {
      icon: TrendingDown,
      title: "Cost Optimization Engine",
      description: "AI-driven recommendations to reduce energy costs. Compare tariff plans and get personalized savings suggestions.",
      color: "from-cyan-500 to-blue-500",
      tags: ["AI Recommendations", "ROI Calculator"],
      badge: "Smart"
    },
    {
      icon: Radio,
      title: "IoT Device Integration",
      description: "Connect and control smart plugs, thermostats, lighting systems, and other IoT devices from your dashboard.",
      color: "from-orange-500 to-red-500",
      tags: ["Zigbee", "Z-Wave", "MQTT"],
      badge: "Integration"
    },
    {
      icon: QrCode,
      title: "QR Code Scanning",
      description: "Quickly add new devices by scanning QR codes. Instantly access device information and configuration.",
      color: "from-pink-500 to-rose-500",
      tags: ["Quick Setup", "Device Info"],
      badge: "New"
    },
    {
      icon: Database,
      title: "Data Export & Backup",
      description: "Export your energy data for external analysis. Automatic cloud backup ensures your data is always safe.",
      color: "from-slate-500 to-gray-500",
      tags: ["Cloud Backup", "API Access"],
      badge: "Premium"
    }
  ];

  const stats = [
    { icon: Activity, value: "99.9%", label: "Platform Uptime" },
    { icon: Clock, value: "< 1s", label: "Alert Response" },
    { icon: Globe, value: "24/7", label: "Global Access" },
    { icon: Users, value: "Unlimited", label: "Team Members" }
  ];

  const roadmapItems = [
    {
      title: "Phase 1 - Foundation",
      status: "Completed",
      statusColor: "bg-green-500/20 text-green-400",
      description: "Core monitoring and alerting features",
      features: [
        "Real-time energy monitoring",
        "Basic alert system",
        "Mobile app access",
        "Data visualization",
        "Basic reporting"
      ]
    },
    {
      title: "Phase 2 - Intelligence",
      status: "In Development",
      statusColor: "bg-yellow-500/20 text-yellow-400",
      description: "AI-powered insights and automation",
      features: [
        "AI fault detection",
        "Predictive maintenance",
        "Carbon tracking",
        "Cost optimization",
        "Automated scheduling"
      ]
    },
    {
      title: "Phase 3 - Integration",
      status: "Planned",
      statusColor: "bg-blue-500/20 text-blue-400",
      description: "IoT ecosystem and third-party integrations",
      features: [
        "Smart device control",
        "API marketplace",
        "Third-party integrations",
        "IFTTT/Zapier support",
        "Voice assistant integration"
      ]
    },
    {
      title: "Phase 4 - Enterprise",
      status: "Future",
      statusColor: "bg-purple-500/20 text-purple-400",
      description: "Advanced enterprise features",
      features: [
        "Multi-site management",
        "White-label solution",
        "Custom analytics",
        "SLA management",
        "Advanced security features"
      ]
    }
  ];


    const Apple = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
  );

  const integrations = [
    { name: "Google Assistant", icon: SmartphoneIcon, color: "from-blue-500 to-blue-600" },
    { name: "Amazon Alexa", icon: Radio, color: "from-cyan-500 to-blue-500" },
    { name: "Apple HomeKit", icon: Apple, color: "from-gray-500 to-gray-600" },
    { name: "Samsung SmartThings", icon: Monitor, color: "from-blue-600 to-blue-700" },
    { name: "IFTTT", icon: Share2, color: "from-purple-500 to-pink-500" },
    { name: "Zapier", icon: Zap, color: "from-orange-500 to-red-500" }
  ];

  const upcomingFeatures = [
    { name: "Solar Integration", desc: "Monitor solar production and battery storage", icon: Sun, eta: "Q1 2025" },
    { name: "EV Charging Management", desc: "Smart charging for electric vehicles", icon: Car, eta: "Q2 2025" },
    { name: "Generator Control", desc: "Automated generator switching and monitoring", icon: Zap, eta: "Q2 2025" },
    { name: "Demand Response", desc: "Participate in utility demand response programs", icon: TrendingDown, eta: "Q3 2025" }
  ];

  const [activeTab, setActiveTab] = useState<'features' | 'roadmap' | 'integrations'>('features');


  return (
    <div ref={containerRef} className="pt-32 pb-20 min-h-screen relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-sm font-medium mb-6 mx-auto w-fit">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Beyond the App — Complete Energy Ecosystem
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight text-center">
              OHM Plus <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Dashboard</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center">
              Experience the future of energy management with our comprehensive dashboard. 
              Beyond the Omhero app, unlock enterprise-grade features, AI-powered insights, 
              and complete control over your energy ecosystem.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} index={idx} />
          ))}
        </div>

        {/* Dashboard Preview Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan-500/20 pointer-events-none" />
            <img 
              src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?w=1200&h=600&fit=crop"
              alt="Dashboard Preview"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center gap-2 text-white justify-center md:justify-start">
                <Server className="w-5 h-5 text-primary" />
                <span className="text-sm text-center md:text-left">OHM Plus Dashboard — Centralized Energy Command Center</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-black/40 backdrop-blur-md rounded-full p-1 border border-white/10">
            {[
              { id: 'features', label: 'Features', icon: Star },
              { id: 'roadmap', label: 'Roadmap', icon: Calendar },
              { id: 'integrations', label: 'Integrations', icon: Share2 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-primary to-cyan-500 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        {activeTab === 'features' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {dashboardFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        )}

        {/* Roadmap Timeline */}
        {activeTab === 'roadmap' && (
          <div className="relative mb-20">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/50 via-cyan-500/50 to-transparent hidden md:block" />
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <RoadmapItem key={index} item={item} index={index} />
              ))}
            </div>

            {/* Upcoming Features */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Coming Soon</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {upcomingFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-primary/30 transition-all text-center sm:text-left"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-white font-bold mb-1 text-center sm:text-left">{feature.name}</h4>
                    <p className="text-gray-400 text-xs mb-2 text-center sm:text-left">{feature.desc}</p>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full inline-block mx-auto sm:mx-0 w-fit">{feature.eta}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Integrations Section */}
        {activeTab === 'integrations' && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-3 text-center">Connect Everything</h3>
              <p className="text-gray-400 max-w-2xl mx-auto text-center">
                Seamlessly integrate with your favorite smart home platforms and business tools
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
              {integrations.map((integration, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-black/30 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-primary/30 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white text-xs font-medium text-center">{integration.name}</p>
                </motion.div>
              ))}
            </div>

            {/* API Access */}
            <div className="bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center">REST API Access</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-center">
                  Build custom integrations and automate your energy management with our comprehensive API. 
                  Access real-time data, control devices, and create custom workflows.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" className="border-primary/30 text-white hover:bg-primary/10">
                    View API Documentation <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Comparison: App vs Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Omhero App <span className="text-primary">vs</span> OHM Dashboard
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                <SmartphoneIcon className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-white text-center md:text-left">Omhero Mobile App</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Real-time energy monitoring",
                  "Basic usage reports",
                  "Remote power control",
                  "Fire-risk alerts",
                  "Appliance health tracking"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-center md:text-left">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                <Server className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white text-center md:text-left">OHM Plus Dashboard</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Everything in Omhero App +",
                  "Advanced analytics & AI insights",
                  "Multi-property management",
                  "Team collaboration tools",
                  "Automated reporting & exports",
                  "API access for integrations",
                  "Custom alert workflows",
                  "Predictive maintenance",
                  "Carbon footprint tracking"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-center md:text-left">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 via-cyan-500/20 to-blue-500/20 rounded-2xl p-8 sm:p-12 border border-white/20 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 text-center">
                Ready to Upgrade Your Energy Management?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-center text-sm sm:text-base">
                Get access to the full OHM Plus Dashboard experience. Contact our sales team for a demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-600/90 text-white shadow-lg shadow-primary/30 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto">
                    Request Demo <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}