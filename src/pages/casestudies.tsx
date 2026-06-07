// pages/CaseStudies.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Home, Factory, TrendingDown, Shield, Zap, Users, Clock, Award, ArrowRight, Star, CheckCircle2, BarChart3, Leaf, Wifi, Smartphone, Eye, Activity, Cpu, Flame, Gauge, MapPin, Calendar, ChevronRight, Quote, Sparkles, Heart, DollarSign, Target, Globe } from "lucide-react";
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
    residential: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=800&h=500&fit=crop",
    industrial: "https://images.pexels.com/photos/380251/pexels-photo-380251.jpeg?w=800&h=500&fit=crop",
    commercial: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?w=800&h=500&fit=crop",
    residentialGallery: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=600&h=400&fit=crop",
    industrialGallery: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?w=600&h=400&fit=crop",
    commercialGallery: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=600&h=400&fit=crop",
    avatar1: "https://randomuser.me/api/portraits/men/32.jpg",
    avatar2: "https://randomuser.me/api/portraits/men/45.jpg",
    avatar3: "https://randomuser.me/api/portraits/women/68.jpg"
  };

  const getFallbackSrc = () => {
    if (src.includes("estate") || src.includes("luxury") || alt.includes("Estate")) return fallbackImages.residential;
    if (src.includes("steel") || src.includes("manufacturing") || alt.includes("Manufacturing")) return fallbackImages.industrial;
    if (src.includes("retail") || src.includes("supermarket") || alt.includes("Retail")) return fallbackImages.commercial;
    if (alt.includes("gallery") && alt.includes("1")) return fallbackImages.residentialGallery;
    if (alt.includes("gallery") && alt.includes("2")) return fallbackImages.industrialGallery;
    if (alt.includes("gallery") && alt.includes("3")) return fallbackImages.commercialGallery;
    if (alt.includes("avatar")) {
      if (alt.includes("Chief")) return fallbackImages.avatar1;
      if (alt.includes("Kwame")) return fallbackImages.avatar2;
      return fallbackImages.avatar3;
    }
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

// Expanded case studies with reliable image URLs
const caseStudies = [
  {
    id: 1,
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
    id: 2,
    title: "Manufacturing Plant Optimizes Production",
    client: "Steelworks Industries, Tema",
    type: "industrial",
    icon: Factory,
    heroImage: "https://images.pexels.com/photos/380251/pexels-photo-380251.jpeg?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/3862134/pexels-photo-3862134.jpeg?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?w=600&h=400&fit=crop"
    ],
    result: "28% energy reduction",
    savings: "₵180,000 saved annually",
    description: "Heavy manufacturing facility used Omhero Professional to identify inefficient machinery and optimize production schedules.",
    fullDescription: "Steelworks Industries, one of Ghana's leading metal fabrication companies, was struggling with rising energy costs and unexpected equipment failures. Their legacy electrical system provided no visibility into power consumption across different production lines. After implementing Omhero Professional across 12 production lines with API integration to their SCADA system, they achieved unprecedented visibility into machine-level energy consumption and implemented predictive maintenance schedules.",
    challenges: [
      "Energy costs consuming 40% of operational budget",
      "Frequent equipment breakdowns due to power quality issues",
      "No data on machine-level energy consumption",
      "Manual energy reporting taking 20+ hours per week"
    ],
    solutions: [
      "Deployed Omhero Professional across 12 production lines",
      "Integrated with existing SCADA system via API",
      "Set up automated alerts for equipment anomalies",
      "Implemented predictive maintenance schedules"
    ],
    metrics: [
      { label: "Energy Reduction", value: "28%", icon: TrendingDown },
      { label: "Downtime Reduction", value: "65%", icon: Clock },
      { label: "Production Uptime", value: "99.5%", icon: Activity },
      { label: "Equipment Lifespan", value: "+40%", icon: Award }
    ],
    testimonial: {
      quote: "The visibility Omhero provides into our energy usage is game-changing. We've identified inefficiencies we never knew existed and saved millions in operational costs.",
      author: "Kwame Asante",
      role: "Plant Manager, Steelworks Industries",
      avatar: "https://randomuser.me/api/portraits/men/91.jpg"
    }
  },
  {
    id: 3,
    title: "Retail Chain Monitors 20+ Locations",
    client: "FreshMart Supermarkets",
    type: "commercial",
    icon: Building2,
    heroImage: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=600&h=400&fit=crop"
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
              Discover how businesses and homeowners across Nigeria and Ghana are transforming their energy management with Omhero — saving money, improving safety, and reducing environmental impact.
            </p>
            
            {/* Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <StatCard value="35%" label="Average Energy Savings" icon={TrendingDown} delay={0.1} />
              <StatCard value="500+" label="Happy Customers" icon={Users} delay={0.2} />
              <StatCard value="24/7" label="Real-time Monitoring" icon={Eye} delay={0.3} />
              <StatCard value="2" label="Countries Served" icon={Globe} delay={0.4} />
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
                    <p className="text-sm text-foreground/60 mb-1">Annual Savings</p>
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
                {/* 10% ACTION HIGHLIGHT - Orange (#FF4E00) for high-priority CTA */}
                <Link to="/contact">
                  <Button size="lg" className="bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-lg shadow-[#FF4E00]/30 text-lg px-8 h-14">
                    Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                {/* 30% OPERATIONAL - Blue outline for secondary action */}
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