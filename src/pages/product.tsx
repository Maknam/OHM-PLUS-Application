import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Zap, 
  Shield, 
  Activity, 
  Cpu, 
  Wifi, 
  Battery, 
  Clock,
  Award,
  Heart,
  Sparkles,
  ArrowRight,
  Star,
  Globe,
  Users,
  Settings,
  Eye,
  Cloud,
  Smartphone,
  ShoppingCart,
  Package,
  Home,
  Building2,
  CreditCard,
  Flame,
  Leaf,
  Wrench,
  BarChart3,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Gauge,
  Radio,
  MapPin,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Circle,
  MoveRight,
  Check,
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

// Country flag icons
const NigeriaFlag = () => (
  <div className="flex items-center gap-1">
    <div className="w-5 h-4 bg-secondary rounded-l-sm" />
    <div className="w-5 h-4 bg-white" />
    <div className="w-5 h-4 bg-secondary rounded-r-sm" />
  </div>
);

const GhanaFlag = () => (
  <div className="flex flex-col">
    <div className="w-5 h-1.5 bg-red-500 rounded-t-sm" />
    <div className="w-5 h-1.5 bg-destructive" />
    <div className="w-5 h-1.5 bg-secondary rounded-b-sm" />
    <div className="w-5 h-0.5 bg-black relative -mt-0.5" />
  </div>
);

// Floating particles animation component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
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

// Glowing orb component
const GlowingOrb = ({ className, color = "primary" }: { className?: string, color?: string }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export default function Product() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState<'NG' | 'GH'>('NG');
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'howItWorks'>('overview');
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const featuresData = [
    { icon: Activity, title: "Real-Time Monitoring", description: "Track your electricity usage minute by minute with 99.9% accuracy. Know exactly where your power is going.", color: "from-primary to-primary/70", longDesc: "Our cloud-based system tracks, controls, and optimizes energy usage in real time. Monitor consumption patterns, receive alerts, and automate control to prevent waste." },
    { icon: Flame, title: "Fire-Risk Detection", description: "Instant detection of overloads, faulty connections, and fire risks before they become dangerous.", color: "from-destructive to-destructive/70", longDesc: "Over 80% of electrical fires are caused by undetected wiring faults. Omhero detects hotspots, overheating, and potential fire triggers early — ensuring safe operations." },
    { icon: Cpu, title: "Appliance Health", description: "Identify malfunctioning devices before they damage circuits or waste energy.", color: "from-secondary to-secondary/70", longDesc: "Early warning on malfunctioning appliances before they damage circuits or waste energy. Protect your valuable equipment and extend its lifespan." },
    { icon: Wifi, title: "Remote Power Control", description: "Turn electricity on/off from your phone, anywhere in the world.", color: "from-primary to-primary/70", longDesc: "Whether it's a business shutting down for the day or a homeowner who forgot to switch off an appliance, remote power control helps reduce waste and improve safety." },
    { icon: Leaf, title: "Carbon Tracking", description: "Understand your carbon footprint based on your energy usage.", color: "from-secondary to-secondary/70", longDesc: "As global focus on the environment increases, understand your impact and make better energy choices for a sustainable future." },
    { icon: Gauge, title: "Power Quality Feedback", description: "Detect voltage drops, surges, and supply irregularities instantly.", color: "from-primary to-primary/70", longDesc: "Get real-time feedback on your power quality. Detect voltage drops, surges, supply irregularities, and wiring safety concerns through automated system alerts." }
  ];

  const steps = [
    { icon: ShoppingCart, title: "Place Your Order", description: "Choose your device and subscription plan online or through our sales team.", duration: "5 minutes", color: "from-primary to-primary/70", number: 1 },
    { icon: Package, title: "Device Delivery", description: "We deliver the Omhero device to your doorstep across Nigeria & Ghana.", duration: "3-5 days", color: "from-primary to-primary/70", number: 2 },
    { icon: Settings, title: "Professional Installation", description: "Our certified technician installs the device and connects it to your electrical panel.", duration: "1-2 hours", color: "from-secondary to-secondary/70", number: 3 },
    { icon: Smartphone, title: "App Setup & Activation", description: "Download the Omhero app, create your account, and start monitoring instantly.", duration: "10 minutes", color: "from-secondary to-secondary/70", number: 4 }
  ];

  // Custom Headphones icon component
  const Headphones = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h3l3-9 3 18 3-9h3" />
    </svg>
  );

  const subscriptionBenefits = [
    { icon: Flame, title: "Fire-risk Protection", description: "Continuous monitoring of electrical hotspots, overheating, and potential fire triggers" },
    { icon: Leaf, title: "Carbon Tracking", description: "Understand and reduce electricity-related carbon emissions" },
    { icon: Cpu, title: "Appliance Health", description: "Early warning on malfunctioning appliances before they cause damage" },
    { icon: Shield, title: "Certification Support", description: "Perform compliance checks like earth loop impedance and voltage drop tests" },
    { icon: Wrench, title: "Wiring Health", description: "Regular system checks for aging electrical installations" },
    { icon: Headphones, title: "24/7 Support", description: "Technical support and optional remote shutdown assistance" }
  ];

  const howItWorksSteps = [
    { 
      icon: Cloud, 
      title: "Cloud-Based System", 
      description: "A cloud-based system that tracks, controls, and optimizes energy usage in real time. Users can monitor consumption patterns, receive alerts, and automate control to prevent waste.",
      gradient: "from-primary to-primary/70"
    },
    { 
      icon: Settings, 
      title: "Subscription Access", 
      description: "Affordable monthly or yearly packages tailored to individuals, small businesses, and corporate clients, making smart energy solutions accessible to all.",
      gradient: "from-primary to-primary/70"
    },
    { 
      icon: Smartphone, 
      title: "Mobile App Control", 
      description: "The Omhero app is the digital companion to the device, giving users a clear and simple view of their power usage with real-time and historical data.",
      gradient: "from-secondary to-secondary/70"
    },
    { 
      icon: Eye, 
      title: "Power Quality Feedback", 
      description: "Detect voltage drops, surges, supply irregularities, appliance issues, and wiring safety concerns through automated system alerts.",
      gradient: "from-secondary to-secondary/70"
    }
  ];

  const certifications = [
    { icon: Shield, name: "CE Certified", desc: "European safety standards" },
    { icon: Award, name: "ISO 9001", desc: "Quality management" },
    { icon: Globe, name: "RoHS Compliant", desc: "Environmentally friendly" },
    { icon: Users, name: "Regulatory Approved", desc: "Nigerian & Ghanaian standards" }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentFeatureIndex((prev) => (prev + 1) % featuresData.length);
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPlaying, featuresData.length]);

  const handlePrevFeature = () => {
    setIsPlaying(false);
    setCurrentFeatureIndex((prev) => (prev - 1 + featuresData.length) % featuresData.length);
    setTimeout(() => setIsPlaying(true), 5000);
  };

  const handleNextFeature = () => {
    setIsPlaying(false);
    setCurrentFeatureIndex((prev) => (prev + 1) % featuresData.length);
    setTimeout(() => setIsPlaying(true), 5000);
  };

  const currentFeature = featuresData[currentFeatureIndex];

  return (
    <div ref={containerRef} className="pt-32 pb-20 min-h-screen relative overflow-hidden bg-theme">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/35158378/pexels-photo-35158378.jpeg?q=80&w=2070')] bg-cover bg-fixed opacity-5" />
        
        {/* Animated gradient orbs */}
        <GlowingOrb className="top-20 left-10 w-96 h-96 bg-primary/20" />
        <GlowingOrb className="bottom-20 right-10 w-80 h-80 bg-secondary/15" />
        <GlowingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5" />
        
        {/* Theme-aware grid overlay */}
        <div className="theme-grid" />
        
        <FloatingParticles />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Hero Section with Parallax */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-secondary text-sm font-medium mb-6 mx-auto">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Next-Generation Energy Monitoring
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 leading-tight text-center">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary animate-gradient">
                Omhero
              </span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-center">
              Omhero, also known globally as Prycam, is a smart energy monitoring device being introduced to Africa through OHM Plus Energy Management Limited. 
              Designed to give users full control and visibility over their electricity usage, no matter the billing method.
            </p>
            
            {/* Country Availability Badges */}
            <motion.div 
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className={`flex items-center gap-3 px-5 py-2 rounded-full border transition-all cursor-pointer ${selectedCountry === 'NG' ? 'bg-primary/20 border-primary' : 'bg-muted/50 border-border hover:bg-muted'}`}
                   onClick={() => setSelectedCountry('NG')}>
                <NigeriaFlag />
                <span className="text-foreground font-medium">Available in Nigeria</span>
                {selectedCountry === 'NG' && <CheckCircle2 className="w-4 h-4 text-secondary" />}
              </div>
              <div className={`flex items-center gap-3 px-5 py-2 rounded-full border transition-all cursor-pointer ${selectedCountry === 'GH' ? 'bg-primary/20 border-primary' : 'bg-muted/50 border-border hover:bg-muted'}`}
                   onClick={() => setSelectedCountry('GH')}>
                <GhanaFlag />
                <span className="text-foreground font-medium">Available in Ghana</span>
                {selectedCountry === 'GH' && <CheckCircle2 className="w-4 h-4 text-secondary" />}
              </div>
            </motion.div>

            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm animate-pulse border border-secondary/20">
                ✨ Works with your existing electrical system
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-muted/40 backdrop-blur-md rounded-full p-1 border border-border">
            {[
              { id: 'overview', label: 'Overview', icon: Globe },
              { id: 'features', label: 'Features', icon: Star },
              { id: 'howItWorks', label: 'How It Works', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-secondary to-primary text-white shadow-lg' 
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Interactive Feature Carousel */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-24"
            >
              <div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-border backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl" />
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <motion.div
                      key={currentFeatureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentFeature.color} flex items-center justify-center mb-6 shadow-lg`}>
                        <currentFeature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">{currentFeature.title}</h3>
                      <p className="text-foreground/80 text-lg leading-relaxed mb-6">{currentFeature.longDesc}</p>
                    </motion.div>
                    
                    {/* Carousel Controls */}
                    <div className="flex items-center gap-4 mt-6">
                      <button
                        onClick={handlePrevFeature}
                        className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-all hover:scale-110"
                      >
                        <ChevronLeft className="w-5 h-5 text-foreground" />
                      </button>
                      <div className="flex gap-2">
                        {featuresData.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setIsPlaying(false);
                              setCurrentFeatureIndex(idx);
                              setTimeout(() => setIsPlaying(true), 5000);
                            }}
                            className={`transition-all rounded-full ${
                              idx === currentFeatureIndex ? 'w-8 h-2 bg-secondary' : 'w-2 h-2 bg-foreground/30 hover:bg-foreground/50'
                            }`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={handleNextFeature}
                        className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-all hover:scale-110"
                      >
                        <ChevronRight className="w-5 h-5 text-foreground" />
                      </button>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-all ml-2"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 text-foreground" /> : <Play className="w-4 h-4 text-foreground" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=500&h=500&fit=crop`}
                        alt={currentFeature.title}
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                    <motion.div 
                      className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl -z-10"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Showcase with Interactive Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24"
        >
          {/* Omhero Essential */}
          <div className="group relative bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="absolute top-4 right-4 bg-primary/20 rounded-full px-3 py-1 text-xs text-secondary font-medium">
                Best Seller
              </div>
              <img 
                src="https://www.omhero.tech/wp-content/uploads/2024/02/taglio__0003_Livello-1-800x1230.png"
                alt="Omhero Essential"
                className="w-full max-h-[350px] object-contain mx-auto mb-6 drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Omhero Essential</h3>
              <p className="text-foreground/70 text-center mb-4">Single-Phase • Perfect for Homes</p>
              <div className="flex justify-center gap-2 mb-6 flex-wrap">
                <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full flex items-center gap-1"><Zap className="w-3 h-3" /> Energy Savings</span>
                <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full flex items-center gap-1"><Smartphone className="w-3 h-3" /> App Control</span>
              </div>
              <div className="text-center">
                <p className="text-sm text-foreground/60">Available in Nigeria & Ghana</p>
              </div>
            </div>
          </div>
          
          {/* Omhero Professional */}
          <div className="group relative bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 border border-secondary/30 hover:border-secondary/60 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="absolute top-4 right-4 bg-secondary/20 rounded-full px-3 py-1 text-xs text-secondary font-medium">
                Professional
              </div>
              <img 
                src="https://www.omhero.tech/wp-content/uploads/2024/02/taglio__0002_Specifiche3-800x800.png"
                alt="Omhero Professional"
                className="w-full max-h-[350px] object-contain mx-auto mb-6 drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Omhero Professional</h3>
              <p className="text-foreground/70 text-center mb-4">3-Phase • For Business & Industry</p>
              <div className="flex justify-center gap-2 mb-6 flex-wrap">
                <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full flex items-center gap-1"><Building2 className="w-3 h-3" /> Industrial Grade</span>
                <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full flex items-center gap-1"><BarChart3 className="w-3 h-3" /> API Access</span>
              </div>
              <div className="text-center">
                <p className="text-sm text-foreground/60">Available in Nigeria & Ghana</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid Tab */}
        <AnimatePresence mode="wait">
          {activeTab === 'features' && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-24"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuresData.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="group relative bg-muted/40 backdrop-blur-md rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <motion.div 
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
                    <motion.div 
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <MoveRight className="w-5 h-5 text-secondary" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* How It Works Tab */}
        <AnimatePresence mode="wait">
          {activeTab === 'howItWorks' && (
            <motion.div
              key="howItWorks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-24"
            >
              <div className="relative">
                {/* Animated connecting line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent hidden lg:block" />
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {howItWorksSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
                      whileHover={{ y: -8 }}
                      className="relative bg-muted/40 backdrop-blur-md rounded-xl p-6 border border-border hover:border-primary/30 transition-all group text-center"
                    >
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-secondary/30 flex items-center justify-center text-white font-bold text-sm animate-pulse">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 text-center">{step.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed text-center">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Steps Taken Upon Ordering - Animated Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-secondary text-sm font-medium mb-4 mx-auto"
              whileHover={{ scale: 1.05 }}
            >
              <Package className="w-4 h-4" />
              Simple Process
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 text-center">
              Steps Taken <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Upon Ordering</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-center">
              From order to installation — we make it seamless across Nigeria and Ghana
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ y: -5 }}
                className="relative bg-muted/40 backdrop-blur-md rounded-xl p-6 border border-border hover:border-primary/30 transition-all group"
              >
                <div className="relative">
                  <motion.div 
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div 
                    className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center text-white font-bold text-sm shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {step.number}
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 text-center">{step.title}</h3>
                <p className="text-foreground/70 text-sm mb-3 text-center">{step.description}</p>
                <div className="inline-flex items-center gap-1 text-xs text-secondary bg-secondary/10 px-3 py-1 rounded-full mx-auto w-fit">
                  <Clock className="w-3 h-3 animate-pulse" />
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subscription Models Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-secondary text-sm font-medium mb-4 mx-auto"
              whileHover={{ scale: 1.05 }}
            >
              <CreditCard className="w-4 h-4" />
              Flexible Plans
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 text-center">
              Subscription <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Models</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-center">
              Choose the plan that fits your needs — from one-time purchase to full-service subscription
            </p>
          </div>

          {/* One-Time Purchase Option */}
          <motion.div 
            className="mb-10 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 text-center hover:shadow-lg hover:shadow-primary/10 transition-all"
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-3 text-center">One-Time Purchase Option</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto text-center">
              Buy the device and manage it on your own using the mobile app. Get long-term access to your energy data without any ongoing payments.
            </p>
            <div className="mt-4 inline-flex gap-3 flex-wrap justify-center">
              <div className="bg-primary/20 rounded-full px-6 py-2 text-secondary font-medium flex items-center gap-2">
                <NigeriaFlag /> Available in Nigeria
              </div>
              <div className="bg-secondary/20 rounded-full px-6 py-2 text-secondary font-medium flex items-center gap-2">
                <GhanaFlag /> Available in Ghana
              </div>
            </div>
            <p className="text-xs text-foreground/50 mt-3 text-center">Pay Once • Own Forever • Works with your existing electrical system</p>
          </motion.div>

          {/* Subscription Plans */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                name: "Basic", 
                icon: Home,
                features: ["Real-time energy monitoring", "30-day data history", "Basic usage reports", "Email support"],
                color: "from-gray-500 to-gray-600",
                popular: false
              },
              { 
                name: "Pro", 
                icon: Building2,
                features: ["Everything in Basic", "Fire-risk alerts & detection", "Appliance health tracking", "Monthly usage reports", "Wiring health assessment", "Email & chat support"],
                color: "from-secondary to-primary",
                popular: true
              },
              { 
                name: "Enterprise", 
                icon: Globe,
                features: ["Everything in Pro", "24/7 technical support", "Carbon footprint tracking", "Priority phone support", "Remote shutdown assistance", "API access for integration"],
                color: "from-primary to-primary",
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ y: -8 }}
                className={`relative bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-md rounded-xl overflow-hidden border transition-all cursor-pointer ${
                  plan.popular ? 'border-secondary shadow-lg shadow-secondary/30' : 'border-border hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute top-0 right-0 bg-gradient-to-r from-secondary to-primary text-white text-xs font-bold px-4 py-1 rounded-bl-lg"
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    MOST POPULAR
                  </motion.div>
                )}
                <div className="p-6 text-center">
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <plan.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 text-center">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent text-center block">
                      {plan.name === "Basic" ? "Free" : plan.name === "Enterprise" ? "Custom" : "Subscription"}
                    </span>
                    <span className="text-foreground/50 text-sm">{plan.name === "Basic" ? "with device purchase" : plan.name === "Enterprise" ? "pricing" : "monthly/yearly"}</span>
                  </div>
                  <ul className="space-y-3 mb-6 text-left">
                    {plan.features.map((feature, fIndex) => (
                      <motion.li 
                        key={fIndex} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: fIndex * 0.03 }}
                        className="flex items-center gap-2 text-foreground/70 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90' : 'bg-muted hover:bg-muted/80'} text-white shadow-lg`}>
                      {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subscription Benefits Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 bg-muted/40 rounded-2xl p-6 border border-border"
          >
            <p className="text-center text-secondary font-medium mb-4 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" /> Pro & Enterprise subscribers receive:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {subscriptionBenefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-center p-2 rounded-lg hover:bg-muted/60 transition-colors"
                >
                  <benefit.icon className="w-5 h-5 text-secondary mx-auto mb-1" />
                  <p className="text-xs text-foreground/70">{benefit.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* App Mockup Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12 border border-border backdrop-blur-sm relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-secondary text-sm font-medium mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Smartphone className="w-4 h-4" />
                  The Omhero App
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Your Energy Dashboard</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  The Omhero app is the digital companion to the device, giving users a clear and simple view of their power usage. 
                  It monitors the main parameters of your electrical system, both in real time and historically.
                </p>
                <ul className="space-y-3">
                  {[
                    "Real-time & historical data tracking",
                    "Power quality feedback (voltage drops, surges)",
                    "Appliance and wiring safety monitoring",
                    "System alerts for maintenance needs"
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2 text-foreground/70"
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=600&fit=crop"
                  alt="Omhero App Interface"
                  className="rounded-2xl shadow-2xl border border-border mx-auto max-w-[280px]"
                />
                <motion.div 
                  className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl -z-10"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl -z-10"
                  animate={{ scale: [1.2, 1, 1.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="bg-muted/40 backdrop-blur-sm rounded-2xl p-8 border border-border">
            <h3 className="text-center text-lg font-semibold text-foreground/60 mb-8">Certified & Compliant</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all">
                    <cert.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h4 className="text-foreground font-medium text-sm text-center">{cert.name}</h4>
                  <p className="text-foreground/50 text-xs text-center">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-24"
        >
          <motion.div 
            className="bg-muted/40 backdrop-blur-md rounded-xl p-8 border border-border hover:border-primary/30 transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground text-center md:text-left">Technical Specs</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: "Accuracy", value: "±1% (Class 1)" },
                { label: "Frequency", value: "50/60Hz" },
                { label: "Connectivity", value: "Wi-Fi 2.4GHz / Ethernet" },
                { label: "Operating Temp", value: "-10°C to 60°C" },
                { label: "Dimensions", value: "120 x 85 x 35mm" },
                { label: "Warranty", value: "Available with subscription" }
              ].map((spec, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex justify-between py-2 border-b border-border flex-col sm:flex-row"
                >
                  <span className="text-foreground/60 text-left">{spec.label}</span>
                  <span className="text-foreground font-medium text-left sm:text-right">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-muted/40 backdrop-blur-md rounded-xl p-8 border border-border hover:border-primary/30 transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground text-center md:text-left">What's Included</h3>
            </div>
            <div className="space-y-4">
              {[
                "Omhero Smart Monitor Device",
                "Current Transformers (CTs)",
                "Mounting Accessories",
                "Quick Start Guide",
                "Mobile App Access",
                "Warranty (with subscription plan)"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 text-sm" 
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-foreground/70 text-left">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl p-8 sm:p-12 border border-border backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-4 text-center">
                  Ready to Take <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Control?</span>
                </h2>
              </motion.div>
              <p className="text-base sm:text-lg text-foreground/70 mb-8 max-w-2xl mx-auto text-center">
                Join customers already saving with Omhero. Get your device today and start monitoring your energy across Nigeria and Ghana.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white shadow-lg shadow-secondary/30 text-base sm:text-lg px-8 sm:px-10 h-14">
                      Order Now <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-primary/10 text-base sm:text-lg px-8 sm:px-10 h-14">
                      Request a Quote
                    </Button>
                  </Link>
                </motion.div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 text-xs sm:text-sm text-foreground/60">
                <motion.span 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="w-4 h-4 text-secondary" /> Available in Nigeria & Ghana
                </motion.span>
                <motion.span 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Check className="w-4 h-4 text-secondary" /> Warranty with subscription
                </motion.span>
                <motion.span 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Heart className="w-4 h-4 text-destructive" /> 30-day satisfaction guarantee
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}