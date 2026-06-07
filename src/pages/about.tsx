import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Target, 
  Eye, 
  TrendingUp,
  Award,
  Globe,
  Building2,
  Mail,
  Briefcase,
  Quote,
  Sparkles,
  Clock,
  Heart,
  Star,
  MapPin,
  Phone,
  ChevronRight,
  CheckCircle2,
  Rocket,
  Lightbulb,
  HandshakeIcon,
  Activity,
  Gauge,
  Settings,
  AlertTriangle
} from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Kofi Mensah",
      role: "Chief Executive Officer",
      bio: "20+ years of experience in energy infrastructure and smart grid technology across Africa. Previously led major energy projects at ECG Ghana.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "kofi.mensah@ohmplus.africa"
    },
    {
      name: "Ngozi Okonkwo",
      role: "Chief Technology Officer",
      bio: "Former lead engineer at Siemens with expertise in IoT systems, embedded devices, and cloud architecture. Holds multiple patents in smart metering.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "ngozi.okonkwo@ohmplus.africa"
    },
    {
      name: "Adaobi Eze",
      role: "Head of Operations - Nigeria",
      bio: "15 years of experience in energy distribution and customer relations. Former regional manager at Ikeja Electric.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "adaobi.eze@ohmplus.africa"
    },
    {
      name: "Michael Asare",
      role: "Head of Operations - Ghana",
      bio: "Energy economist with deep expertise in Ghana's power sector. Former advisor to the Ministry of Energy on smart grid initiatives.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "michael.asare@ohmplus.africa"
    }
  ];

  const milestones = [
    { year: "2023", title: "Company Founded", description: "OHM Plus established with a mission to transform Africa's energy landscape", icon: Rocket },
    { year: "2024", title: "Product Development", description: "Omhero device engineered specifically for African power conditions", icon: Lightbulb },
    { year: "2025", title: "Pilot Launch", description: "Initial rollout in Lagos, Nigeria and Accra, Ghana", icon: Zap },
    { year: "2026", title: "Market Expansion", description: "Planned expansion across West and East Africa", icon: Globe }
  ];

  const coreValues = [
    { icon: Heart, title: "Customer First", description: "Putting African consumers at the heart of everything we do", color: "from-destructive to-destructive/70" },
    { icon: Zap, title: "Innovation Driven", description: "Continuously pushing boundaries to deliver smarter solutions", color: "from-destructive to-destructive/70" },
    { icon: Shield, title: "Safety Focused", description: "Protecting lives and property through intelligent monitoring", color: "from-secondary to-secondary/70" },
    { icon: HandshakeIcon, title: "Partnership", description: "Building strong relationships with regulators and customers", color: "from-primary to-primary/70" }
  ];

  const challenges = [
    { icon: TrendingUp, title: "Rising Energy Costs", description: "Energy costs continue to rise, yet users lack insight into where and how power is wasted. Inefficient usage drains finances and weakens productivity.", color: "text-destructive", bgColor: "bg-destructive/10" },
    { icon: BarChart3, title: "Lack of Smart Monitoring", description: "Most users rely on outdated systems without real-time control or reporting tools, making energy planning impossible.", color: "text-primary", bgColor: "bg-primary/10" },
    { icon: Zap, title: "Unstable Supply", description: "Frequent blackouts and voltage fluctuations affect both homes and businesses, leading to operational losses and equipment damage.", color: "text-destructive", bgColor: "bg-destructive/10" },
    { icon: Shield, title: "Safety and Maintenance Gaps", description: "Many facilities lack preventive maintenance systems, leading to electrical faults, safety risks, and downtime that could have been avoided.", color: "text-secondary", bgColor: "bg-secondary/10" }
  ];

  const solutions = [
    { icon: Activity, title: "Real-Time Monitoring", description: "Cloud-based system that tracks, controls, and optimizes energy usage in real time. Users can monitor consumption patterns, receive alerts, and automate control to prevent waste." },
    { icon: Gauge, title: "Subscription-Based Access", description: "Affordable monthly or yearly packages tailored to individuals, small businesses, and corporate clients, making smart energy solutions accessible to all." },
    { icon: Settings, title: "Remote Power Control", description: "Turn electricity on or off from your phone, anywhere. Reduce waste and improve safety with complete control over your power supply." },
    { icon: AlertTriangle, title: "Fire-Risk Detection", description: "Early detection of overloads, faulty connections, or fire risks — ensuring safe operations for homes and businesses." }
  ];

  const valueProps = [
    { icon: TrendingUp, title: "Save Energy, Cut Costs", description: "Save up to 30% annually on bills", color: "from-destructive to-destructive/70" },
    { icon: Shield, title: "Safety First", description: "Detect overloads and fire risks early", color: "from-secondary to-secondary/70" },
    { icon: Building2, title: "All-in-One System", description: "Energy, safety, maintenance in one interface", color: "from-primary to-primary/70" },
    { icon: Globe, title: "Sustainability at the Core", description: "Transition to cleaner energy", color: "from-primary to-primary/70" }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden bg-theme">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/36631700/pexels-photo-36631700.jpeg?q=80&w=2070')] bg-cover bg-fixed opacity-5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="theme-grid" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-secondary text-sm font-medium mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            Since 2023 — Nigeria & Ghana
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
            Powering Africa's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Energy Revolution
            </span>
          </h1>
          <p className="text-xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            OHM Plus is building the smart energy infrastructure needed to solve Africa's electricity challenges — 
            starting with Nigeria and Ghana. We're redefining how homes and businesses monitor, control, and optimize their power consumption.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/20 text-lg px-8 h-14">
                Partner With Us <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/product">
              <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 text-lg px-8 h-14">
                Explore Omhero
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          <div className="bg-muted/40 backdrop-blur-md rounded-2xl p-6 text-center border border-border hover:border-primary/30 transition-all group">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform">2</div>
            <div className="text-sm text-foreground/60">Pilot Countries</div>
          </div>
          <div className="bg-muted/40 backdrop-blur-md rounded-2xl p-6 text-center border border-border hover:border-primary/30 transition-all group">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform">200M+</div>
            <div className="text-sm text-foreground/60">Potential Reach</div>
          </div>
          <div className="bg-muted/40 backdrop-blur-md rounded-2xl p-6 text-center border border-border hover:border-primary/30 transition-all group">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform">30%</div>
            <div className="text-sm text-foreground/60">Avg. Energy Savings</div>
          </div>
          <div className="bg-muted/40 backdrop-blur-md rounded-2xl p-6 text-center border border-border hover:border-primary/30 transition-all group">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform">24/7</div>
            <div className="text-sm text-foreground/60">Monitoring Support</div>
          </div>
        </motion.div>

        {/* 1. THE CHALLENGE WE'RE SOLVING */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              The Challenge <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">We're Solving</span>
            </h2>
            <p className="text-xl text-foreground/70">Breaking down the core issues affecting African homes and businesses</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-muted/40 backdrop-blur-md rounded-2xl border border-border hover:border-primary/30 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl ${challenge.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <challenge.icon className={`w-7 h-7 ${challenge.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{challenge.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{challenge.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. OUR SOLUTION */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Solution</span>
            </h2>
            <p className="text-xl text-foreground/70">How Omhero addresses Africa's energy challenges</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto md:mx-0">
                  <solution.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground text-center mb-2">{solution.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-center">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. VALUE PROPOSITION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Our Value <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Proposition</span>
            </h2>
            <p className="text-xl text-foreground/70">Efficiency, Safety, and Sustainability — Simplified.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((value, index) => (
              <div key={index} className="bg-muted/40 backdrop-blur-md rounded-xl p-6 text-center border border-border hover:border-primary/30 transition-all group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-foreground/60 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4. MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-primary/20 to-transparent rounded-2xl p-8 border border-primary/30"
          >
            <Eye className="w-12 h-12 text-secondary mb-4 mx-auto md:mx-0" />
            <h3 className="text-2xl font-display font-bold text-foreground text-center mb-4">Our Vision</h3>
            <p className="text-foreground/70 leading-relaxed text-center md:text-left">
              To become the leading smart energy and facility management brand in Africa, 
              building reliable systems that save power, improve safety, and reduce environmental impact.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-secondary/20 to-transparent rounded-2xl p-8 border border-secondary/30"
          >
            <Target className="w-12 h-12 text-secondary mb-4 mx-auto md:mx-0" />
            <h3 className="text-2xl font-display font-bold text-foreground text-center mb-4">Our Mission</h3>
            <p className="text-foreground/70 leading-relaxed text-center md:text-left">
              To provide accessible, affordable, and data-powered energy solutions that help 
              individuals and organizations take full control of their energy and safety needs.
            </p>
          </motion.div>
        </div>

        {/* 5. CORE VALUES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">
            Our Core <span className="text-secondary">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/40 backdrop-blur-md rounded-xl p-6 text-center border border-border hover:border-primary/30 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-foreground/60 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-24"
        >
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl p-1">
            <div className="bg-muted/60 backdrop-blur-md rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">
                Our <span className="text-secondary">Journey</span>
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <milestone.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="text-2xl font-bold text-secondary mb-1">{milestone.year}</div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-sm text-foreground/60">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Leadership</span>
            </h2>
            <p className="text-xl text-foreground/70">Passionate experts driving Africa's energy transformation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/40 backdrop-blur-md rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-secondary mb-3">{member.role}</p>
                  <p className="text-sm text-foreground/60 mb-4">{member.bio}</p>
                  <div className="flex gap-3 justify-center">
                    <a href={`mailto:${member.email}`} className="text-foreground/50 hover:text-secondary transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href={member.linkedin} className="text-foreground/50 hover:text-secondary transition-colors">
                      <Briefcase className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regulatory Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Regulatory <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Partnerships</span>
            </h2>
            <p className="text-xl text-foreground/70">Working with government bodies to ensure compliance and build trust.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted/40 backdrop-blur-md rounded-xl p-8 text-center border border-border hover:border-primary/30 transition-all group">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">NERC</h3>
              <p className="text-sm text-foreground/60">Nigerian Electricity Regulatory Commission</p>
            </div>
            <div className="bg-muted/40 backdrop-blur-md rounded-xl p-8 text-center border border-border hover:border-primary/30 transition-all group">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">SON</h3>
              <p className="text-sm text-foreground/60">Standards Organisation of Nigeria</p>
            </div>
            <div className="bg-muted/40 backdrop-blur-md rounded-xl p-8 text-center border border-border hover:border-primary/30 transition-all group">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">FCCPC</h3>
              <p className="text-sm text-foreground/60">Federal Competition & Consumer Protection Commission</p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-12 border border-border backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Ready to Transform Your Energy?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of homes and businesses already saving with Omhero. Get started today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/20 text-lg px-8 h-14">
                  Get Started Today <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/product">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-primary/10 text-lg px-8 h-14">
                  Explore Omhero
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}