// pages/CaseStudies.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Home, Factory, TrendingDown, Shield, Zap, Users, Clock, Award, ArrowRight, Star, CheckCircle2, BarChart3, Leaf, Wifi, Smartphone, Eye, Activity, Cpu, Flame, Gauge, MapPin, Calendar, ChevronRight, Quote, Sparkles, Heart, DollarSign, Target, Globe, Gauge as GaugeIcon, Briefcase, ShoppingBag, Cloud, Cog, Car, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

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
          className="absolute rounded-full bg-[#004B9E]/20"
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

// Image with fallback component
const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [imgError, setImgError] = useState(false);
  
  const fallbackImages = {
    industrial: "https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?w=800&h=500&fit=crop",
    showroom: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?w=800&h=500&fit=crop",
    hotel: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?w=800&h=500&fit=crop",
    ski: "https://images.pexels.com/photos/848599/pexels-photo-848599.jpeg?w=800&h=500&fit=crop",
    residential: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=800&h=500&fit=crop",
    commercial: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=800&h=500&fit=crop",
    avatar1: "https://randomuser.me/api/portraits/men/32.jpg",
    avatar2: "https://randomuser.me/api/portraits/men/45.jpg",
    avatar3: "https://randomuser.me/api/portraits/women/68.jpg"
  };

  const getFallbackSrc = () => {
    if (src.includes("fta") || alt.includes("FTA")) return fallbackImages.industrial;
    if (src.includes("audi") || alt.includes("Audi")) return fallbackImages.showroom;
    if (src.includes("puglia") || alt.includes("PugliaParadise")) return fallbackImages.hotel;
    if (src.includes("bardonecchia") || alt.includes("Bardonecchia")) return fallbackImages.ski;
    if (src.includes("estate") || alt.includes("Estate")) return fallbackImages.residential;
    if (src.includes("freshmart") || alt.includes("Retail")) return fallbackImages.commercial;
    return fallbackImages.residential;
  };

  return (
    <img 
      src={imgError ? getFallbackSrc() : src} 
      alt={alt}
      className={className}
      onError={() => setImgError(true)}
    />
  );
};

// Stats counter component
const StatCard = ({ value, label, icon: Icon, delay }: { value: string; label: string; icon: any; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="text-center"
  >
    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#004B9E]/20 to-[#0D9444]/20 flex items-center justify-center mx-auto mb-4">
      <Icon className="w-8 h-8 text-[#0D9444]" />
    </div>
    <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{value}</div>
    <div className="text-sm text-foreground/60">{label}</div>
  </motion.div>
);

// Updated case studies with new ones at the top
const caseStudies = [
  {
    id: 0,
    title: "Industrial Manufacturing - FTA",
    client: "FTA (Factory & Technical Assembly)",
    type: "industrial",
    icon: Factory,
    heroImage: "https://images.pexels.com/photos/11531870/pexels-photo-11531870.jpeg?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/34201640/pexels-photo-34201640.jpeg?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/7598915/pexels-photo-7598915.jpeg?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/10490664/pexels-photo-10490664.jpeg?w=600&h=400&fit=crop"
    ],
    result: "Predictive Maintenance & 1000+ Machines Monitored",
    savings: "65% downtime reduction",
    description: "Omhero monitors energy consumption, operation, and predictive maintenance of machines, tools, and electrical equipment across 1000+ machines.",
    fullDescription: "FTA implemented the PRY-CAM INDUSTRIAL (PI) device across their manufacturing facility to monitor energy consumption, operation, and predictive maintenance of machines, tools, and electrical equipment. The system connects to three-phase, AC monophase, and DC lines, measuring currents and voltages to provide power and essential operational data. With over 1000 machines monitored, the solution enables operations and maintenance teams to perform predictive maintenance, defect detection and localization, and proactively manage breakdown and shutdown risks.",
    challenges: [
      "Energy costs consuming 40% of operational budget",
      "Frequent equipment breakdowns due to power quality issues",
      "No data on machine-level energy consumption",
      "Reactive maintenance causing unplanned downtime"
    ],
    solutions: [
      "PRY-CAM INDUSTRIAL (PI) device deployment across 1000+ machines",
      "Three-phase, AC monophase, and DC line monitoring",
      "Real-time power and operational data acquisition",
      "Predictive maintenance and defect detection systems"
    ],
    metrics: [
      { label: "Machines Monitored", value: "1000+", icon: Activity },
      { label: "Downtime Reduction", value: "65%", icon: Clock },
      { label: "Defect Detection", value: "Real-time", icon: Eye },
      { label: "Maintenance", value: "Predictive", icon: Shield }
    ],
    testimonial: {
      quote: "Omhero has revolutionized our maintenance operations. We can now detect potential failures before they happen, saving us millions in unplanned downtime.",
      author: "Thomas Mensah",
      role: "Operations Director, FTA",
      avatar: "https://randomuser.me/api/portraits/men/47.jpg"
    }  
  },
  {
    id: 1,
    title: "Audi Showroom - Energy Management",
    client: "Audi Showroom",
    type: "commercial",
    icon: Building2,
    heroImage: "https://images.pexels.com/photos/37934740/pexels-photo-37934740.jpeg?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/17632052/pexels-photo-17632052.jpeg?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/303317/pexels-photo-303317.jpeg?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/16176576/pexels-photo-16176576.jpeg?w=600&h=400&fit=crop"
    ],
    result: "Uninterrupted Operations & 42% Energy Optimization",
    savings: "₦4.2M saved annually",
    description: "Optimized energy management across showroom, service areas, and EV charging stations with real-time monitoring and fault anticipation.",
    fullDescription: "Audi Showroom implemented Omhero to optimize energy management and ensure uninterrupted operations across their showroom, service areas, and EV charging stations. The system connects to three-phase and AC monophase lines, measuring currents and voltages to provide actionable insights for both front-office and workshop energy performance. Continuous monitoring of lighting, HVAC, chargers, and workshop equipment enables predictive maintenance, fault detection in lifts, compressors, diagnostic tools, and controlled shutdown procedures to safeguard vehicle displays and workshop operations.",
    challenges: [
      "Maintaining optimal customer experience during peak hours",
      "Unreliable power affecting showroom displays and workshop operations",
      "No real-time visibility into energy performance across facilities",
      "Reactive maintenance causing service disruptions"
    ],
    solutions: [
      "Omhero device deployment across showroom and workshop areas",
      "Continuous monitoring of lighting, HVAC, chargers, and workshop equipment",
      "Predictive maintenance to avoid downtime in customer service areas",
      "Fault detection in lifts, compressors, diagnostic tools, and critical systems"
    ],
    metrics: [
      { label: "Energy Optimization", value: "42%", icon: TrendingDown },
      { label: "Uptime", value: "99.9%", icon: Shield },
      { label: "Systems Monitored", value: "Unlimited", icon: Zap },
      { label: "Response Time", value: "< 1min", icon: Clock }
    ],
    testimonial: {
      quote: "Omhero gives us complete visibility into our energy performance. We can now proactively address issues before they affect our customers.",
      author: "Sarah Johnson",
      role: "Operations Manager, Audi Showroom",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  },
  {
    id: 2,
    title: "PugliaParadise - Luxury Hotel Energy Monitoring",
    client: "PugliaParadise Luxury Hotel",
    type: "commercial",
    icon: Hotel,
    heroImage: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/261070/pexels-photo-261070.jpeg?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?w=600&h=400&fit=crop"
    ],
    result: "100+ Machines Monitored & 35% Energy Reduction",
    savings: "€120,000 saved annually",
    description: "Ensured uninterrupted service and optimal guest experience by monitoring energy usage and anticipating failures across all distributed luxury hotel facilities.",
    fullDescription: "PugliaParadise, a distributed luxury hotel, deployed Omhero to ensure uninterrupted service and optimal guest experience across all facilities. The system monitors technical systems and facility operations with real-time data on power consumption and system health across more than 100 machines. Continuous monitoring enables predictive maintenance to avoid service disruptions, early detection of anomalies in electrical and HVAC systems, real-time alerting, and proactive management of shutdown risks to safeguard guest comfort.",
    challenges: [
      "Maintaining 5-star guest experience across distributed facilities",
      "Energy costs affecting operational margins",
      "No centralized visibility into facility operations",
      "Service disruptions affecting guest satisfaction"
    ],
    solutions: [
      "Omhero deployment across all hotel facilities",
      "Continuous monitoring of technical systems and HVAC operations",
      "Predictive maintenance to avoid service disruptions",
      "Real-time alerting and response to equipment faults"
    ],
    metrics: [
      { label: "Machines Monitored", value: "100+", icon: Activity },
      { label: "Energy Reduction", value: "35%", icon: TrendingDown },
      { label: "Guest Satisfaction", value: "98%", icon: Star },
      { label: "Uptime", value: "99.9%", icon: Shield }
    ],
    testimonial: {
      quote: "Omhero has transformed our operations. We can now ensure our guests enjoy an uninterrupted luxury experience while significantly reducing our energy costs.",
      author: "Maria Lombardi",
      role: "Facilities Director, PugliaParadise",
      avatar: "https://randomuser.me/api/portraits/women/56.jpg"
    }
  },
  {
    id: 3,
    title: "BardonecchiaSki - Ski Lift Operations",
    client: "BardonecchiaSki Resort",
    type: "industrial",
    icon: GaugeIcon,
    heroImage: "https://images.pexels.com/photos/33663116/pexels-photo-33663116.jpeg?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/16849804/pexels-photo-16849804.jpeg?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/30220544/pexels-photo-30220544.jpeg?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/15789013/pexels-photo-15789013.jpeg?w=600&h=400&fit=crop"
    ],
    result: "20+ Machines Monitored & 0 Unplanned Stoppages",
    savings: "40% maintenance cost reduction",
    description: "Guaranteed safety and continuity of lift operations by monitoring energy consumption and anticipating technical faults across ski lift systems.",
    fullDescription: "BardonecchiaSki Resort implemented Omhero to guarantee the safety and continuity of lift operations by monitoring energy consumption and anticipating technical faults across ski lift systems and support infrastructure. More than 20 machines are monitored with real-time data on power consumption and system health. The system enables monitoring of lift operations and electrical equipment, predictive maintenance to prevent unexpected stoppages, detection and localization of anomalies in motors, control panels, and power lines, and proactive management of shutdown risks during high-traffic periods.",
    challenges: [
      "Ensuring safety during high-traffic ski seasons",
      "Preventing costly lift stoppages on busy days",
      "No real-time visibility into lift system health",
      "Reactive maintenance causing service disruptions"
    ],
    solutions: [
      "Omhero deployment across ski lift systems and support infrastructure",
      "Real-time monitoring of motors, control panels, and power lines",
      "Predictive maintenance to prevent unexpected stoppages",
      "Detection and localization of anomalies in critical systems"
    ],
    metrics: [
      { label: "Machines Monitored", value: "20+", icon: Activity },
      { label: "Stoppages", value: "0", icon: Shield },
      { label: "Safety Rating", value: "100%", icon: Award },
      { label: "Uptime", value: "99.99%", icon: Clock }
    ],
    testimonial: {
      quote: "During peak ski season, any stoppage is catastrophic. Omhero gives us the confidence that our lifts will operate safely and continuously.",
      author: "Enzo Rossi",
      role: "Technical Director, BardonecchiaSki",
      avatar: "https://randomuser.me/api/portraits/men/63.jpg"
    }
  },
  {
    id: 4,
    title: "Luxury Estate Reduces Energy Costs by 35%",
    client: "Palm Groove Estates, Lagos",
    type: "residential",
    icon: Home,
    heroImage: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?w=600&h=400&fit=crop"
    ],
    result: "35% reduction in electricity bills",
    savings: "₦2.5M saved annually",
    description: "A 50-unit luxury estate implemented Omhero across all properties, enabling real-time monitoring and automated load balancing.",
    fullDescription: "Palm Groove Estates, a premium residential community in Lagos, faced challenges with inconsistent billing and lack of visibility into energy consumption across their 50 luxury units. After deploying Omhero's smart monitoring solution across all properties, residents gained real-time insights into their energy usage patterns. The estate now enjoys transparent billing, reduced disputes with DISCOs, and proactive maintenance alerts that have prevented multiple electrical hazards.",
    challenges: [
      "Inconsistent estimated billing from DISCOs",
      "No visibility into individual unit consumption",
      "Frequent voltage fluctuations damaging appliances",
      "Lack of preventive maintenance for electrical systems"
    ],
    solutions: [
      "Installed Omhero Essential in all 50 residential units",
      "Deployed cloud-based monitoring dashboard for property management",
      "Implemented real-time alerts for voltage irregularities",
      "Enabled remote power control for maintenance teams"
    ],
    metrics: [
      { label: "Energy Savings", value: "35%", icon: TrendingDown },
      { label: "ROI Timeline", value: "8 months", icon: Clock },
      { label: "Customer Satisfaction", value: "98%", icon: Star },
      { label: "Fire Risk Reduction", value: "85%", icon: Shield }
    ],
    testimonial: {
      quote: "Omhero has transformed how we manage our estate. Residents love the transparency, and our maintenance team can now proactively address issues before they become emergencies.",
      author: "Chief Adebayo Ogunlesi",
      role: "Estate Manager, Palm Groove Estates",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    }  
  },
  {
    id: 5,
    title: "Retail Chain Monitors 20+ Locations",
    client: "FreshMart Supermarkets",
    type: "commercial",
    icon: Building2,
    heroImage: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?w=600&h=400&fit=crop"
    ],
    result: "42% reduction in standby power",
    savings: "₦4.2M saved across locations",
    description: "Retail chain deployed Omhero across all stores to monitor HVAC, lighting, and refrigeration systems remotely.",
    fullDescription: "FreshMart Supermarkets, a growing retail chain with 22 locations across Nigeria, needed a unified solution to monitor energy consumption across their diverse store formats. Refrigeration alone accounted for 60% of their electricity costs. By deploying Omhero Professional across all locations and connecting HVAC, lighting, and refrigeration systems, they achieved real-time visibility and implemented automated scheduling that dramatically reduced standby power consumption.",
    challenges: [
      "Refrigeration systems running inefficiently",
      "Lighting schedules inconsistent across stores",
      "No real-time visibility into store-level energy",
      "Maintenance reactive rather than proactive"
    ],
    solutions: [
      "Installed Omhero Professional in all 22 locations",
      "Connected HVAC, lighting, and refrigeration systems",
      "Implemented automated scheduling for lighting and HVAC",
      "Created centralized dashboard for facilities team"
    ],
    metrics: [
      { label: "Standby Power Reduction", value: "42%", icon: TrendingDown },
      { label: "Refrigeration Efficiency", value: "35%", icon: Zap },
      { label: "Stores Monitored", value: "22", icon: Globe },
      { label: "Carbon Reduction", value: "120 tons", icon: Leaf }
    ],
    testimonial: {
      quote: "The centralized dashboard gives our facilities team complete visibility across all stores. We've reduced our carbon footprint significantly while saving millions.",
      author: "Ngozi Okonkwo",
      role: "Operations Director, FreshMart",
      avatar: "https://randomuser.me/api/portraits/women/36.jpg"
    }
  }
];

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  return (
    <div ref={containerRef} className="pt-32 pb-20 min-h-screen relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004B9E]/5 via-background to-[#0D9444]/5" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?q=80&w=2070')] bg-cover bg-fixed opacity-5" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#004B9E]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0D9444]/15 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#004B9E]/5 rounded-full blur-[100px]" />
        <div className="theme-grid" />
        
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#004B9E]/20 backdrop-blur-sm border border-[#004B9E]/30 text-[#0D9444] text-sm font-medium mb-6 mx-auto">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Real Results from Real Customers
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 leading-tight text-center">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9444] to-[#004B9E]">
                Stories
              </span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed text-center">
              Discover how businesses across the globe are transforming their energy management with Omhero — saving money, improving safety, and reducing environmental impact.
            </p>
            
            {/* Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <StatCard value="1000+" label="Machines Monitored" icon={Activity} delay={0.1} />
              <StatCard value="35%" label="Average Energy Savings" icon={TrendingDown} delay={0.2} />
              <StatCard value="99.9%" label="System Uptime" icon={Shield} delay={0.3} />
              <StatCard value="4+" label="Countries Served" icon={Globe} delay={0.4} />
            </div>
          </motion.div>
        </motion.div>

        {/* Case Studies Grid - Enhanced */}
        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Hero Image Section */}
              <div className="relative rounded-3xl overflow-hidden mb-8">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent z-10" />
                <ImageWithFallback 
                  src={study.heroImage} 
                  alt={study.title}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-[#004B9E]/20 backdrop-blur-sm">
                      <study.icon className="w-6 h-6 text-[#0D9444]" />
                    </div>
                    <span className="text-sm text-[#0D9444] uppercase tracking-wider bg-[#004B9E]/10 px-3 py-1 rounded-full">
                      {study.type} • Case Study
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">{study.title}</h2>
                  <p className="text-lg text-foreground/80 max-w-2xl">{study.client}</p>
                </div>
              </div>

              {/* Results Banner */}
              <div className="bg-gradient-to-r from-[#004B9E]/20 via-[#0D9444]/20 to-[#004B9E]/20 rounded-2xl p-6 mb-8 border border-[#004B9E]/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center md:text-left">
                    <p className="text-sm text-foreground/60 mb-1">Key Result</p>
                    <p className="text-2xl font-bold text-[#0D9444]">{study.result}</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-sm text-foreground/60 mb-1">Savings</p>
                    <p className="text-2xl font-bold text-[#0D9444]">{study.savings}</p>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">The Challenge</h3>
                  <ul className="space-y-3">
                    {study.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#FF4E00]/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#FF4E00]" />
                        </div>
                        <span className="text-foreground/70">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">The Solution</h3>
                  <ul className="space-y-3">
                    {study.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0D9444] shrink-0 mt-0.5" />
                        <span className="text-foreground/70">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Full Description Text */}
              <div className="bg-muted/40 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-border">
                <p className="text-foreground/70 leading-relaxed">{study.fullDescription}</p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {study.metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-muted/40 backdrop-blur-sm rounded-xl p-4 text-center border border-border hover:border-[#004B9E]/30 transition-all"
                  >
                    <metric.icon className="w-8 h-8 text-[#0D9444] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                    <div className="text-xs text-foreground/60">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Gallery Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Project Gallery</h3>
                <div className="grid grid-cols-3 gap-3">
                  {study.galleryImages.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="overflow-hidden rounded-xl"
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`${study.title} gallery ${idx + 1}`}
                        className="w-full h-32 object-cover cursor-pointer transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-[#004B9E]/10 to-[#0D9444]/10 rounded-2xl p-8 border border-border">
                <Quote className="w-10 h-10 text-[#0D9444]/40 mb-4" />
                <p className="text-lg text-foreground/80 italic mb-6">"{study.testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <ImageWithFallback 
                    src={study.testimonial.avatar} 
                    alt={study.testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-foreground">{study.testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{study.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action - 10% ACTION HIGHLIGHT: Orange (#FF4E00) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
          <div className="bg-gradient-to-r from-[#004B9E]/20 via-[#0D9444]/20 to-[#004B9E]/20 rounded-2xl p-12 border border-border backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#004B9E]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0D9444]/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied customers who have transformed their energy management with Omhero.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-lg shadow-[#FF4E00]/30 text-lg px-8 h-14">
                    Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/product">
                  <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-[#004B9E]/10 text-lg px-8 h-14">
                    Explore Omhero
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