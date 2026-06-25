import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Activity, ShieldAlert, TrendingDown, Zap, BarChart3, Lock, Calculator, AlertTriangle, PlugZap, Lightbulb, FileText, Newspaper, CheckCircle2, Play, Image as ImageIcon, Users, Clock, DollarSign, Target, Sparkles, Crown, Leaf, Award, Star, ThumbsUp, Home as HomeIcon, Building, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(0);

  const quickServices = [
    { title: "Bill Calculator", icon: Calculator, href: "/services/bill-calculator", color: "from-[#004B9E] to-[#004B9E]/70" },
    { title: "Report Fault", icon: AlertTriangle, href: "/services/report-fault", color: "from-[#FF4E00] to-[#FF4E00]/70" },
    { title: "New Connection", icon: PlugZap, href: "/services/new-connection", color: "from-[#0D9444] to-[#0D9444]/70" },
    { title: "Energy Tips", icon: Lightbulb, href: "/energy-tips", color: "from-[#FF4E00] to-[#FF4E00]/70" },
    { title: "Tariffs", icon: FileText, href: "/tariffs", color: "from-[#004B9E] to-[#004B9E]/70" },
    { title: "News", icon: Newspaper, href: "/news", color: "from-[#0D9444] to-[#0D9444]/70" },
  ];

  const galleryImages = [
    {
      url: "/images/hero/smart-home-monitoring.jpg",
      alt: "Smart home energy monitoring",
      caption: "Real-time energy tracking from your smartphone"
    },
    {
      url: "/images/hero/business-energy-management.jpg",
      alt: "Business energy management",
      caption: "Enterprise solutions for commercial properties"
    },
    {
      url: "/images/hero/energy-savings-dashboard.jpg",
      alt: "Energy savings dashboard",
      caption: "Track your savings with detailed analytics"
    },
    {
      url: "/images/hero/server-room-monitoring.jpg",
      alt: "Server room monitoring",
      caption: "Data centre power quality management"
    },
    {
      url: "/images/hero/modern-building-energy.jpg",
      alt: "Modern building energy control",
      caption: "Centralized control for facility managers"
    },
    {
      url: "/images/hero/telecom-tower-monitoring.jpg",
      alt: "Telecom tower monitoring",
      caption: "Remote monitoring for telecom infrastructure"
    }
  ];

  // Video gallery with YouTube IDs (extracted from your URLs)
  const videoGallery = [
    {
      youtubeId: "D1l2wFdiYLg", // From: https://youtu.be/FDdl5FofPEo?feature=shared
      title: "Introducing Omhero",
      thumbnail: "/images/hero/smart-home-monitoring.jpg",
      description: "Meet the smart energy monitor transforming how Africa manages power"
    },
    {
      youtubeId: "f58PS7yd4FI", // From: https://youtu.be/f58PS7yd4FI?si=120PXJUs-pA37bpe4
      title: "Customer Testimonial",
      thumbnail: "/images/hero/business-energy-management.jpg",
      description: "Hear from real customers about their energy savings"
    },
    {
      youtubeId: "mJHIBfJyjOQ", // From: https://youtu.be/mJHIBfJyjOQ?si=nkzsalGrjz3yPlAc
      title: "Installation Guide",
      thumbnail: "/images/hero/server-room-monitoring.jpg",
      description: "Quick and easy professional installation process"
    }
  ];

  const featureSections = [
    {
      title: "Real-Time Energy Monitoring",
      description: "Track your electricity consumption minute by minute with our advanced smart sensors. Get instant alerts when usage spikes and identify energy-hungry appliances immediately.",
      image: "/images/hero/realtime-energy-monitoring.jpg",
      imageAlt: "Real-time energy monitoring dashboard",
      reverse: false,
      icon: Zap,
      stats: [
        { label: "Real-time updates", value: "Every 5s" },
        { label: "Accuracy rate", value: "99.9%" }
      ]
    },
    {
      title: "Surge & Fault Protection",
      description: "Protect your valuable appliances from dangerous voltage fluctuations and electrical faults. Our system detects anomalies instantly and alerts you before damage occurs.",
      image: "/images/hero/surge-fault-protection.jpg",
      imageAlt: "Surge protection system",
      reverse: true,
      icon: ShieldAlert,
      stats: [
        { label: "Response time", value: "< 1ms" },
        { label: "Devices protected", value: "Unlimited" }
      ]
    },
    {
      title: "Reduce Energy Waste",
      description: "Identify which appliances are driving up your bills and get personalized recommendations to optimize usage. Save up to 30% on your monthly electricity costs.",
      image: "/images/hero/reduce-energy-waste.jpg",
      imageAlt: "Energy savings graph",
      reverse: false,
      icon: TrendingDown,
      stats: [
        { label: "Average savings", value: "30%" },
        { label: "ROI timeline", value: "6-8 months" }
      ]
    },
    {
      title: "Enterprise Solutions",
      description: "Scale your energy management across multiple properties. Perfect for businesses, apartment complexes, and commercial buildings with centralized control and reporting.",
      image: "/images/hero/enterprise-solutions.jpg",
      imageAlt: "Enterprise energy management",
      reverse: true,
      icon: BarChart3,
      stats: [
        { label: "Properties supported", value: "Unlimited" },
        { label: "Data export", value: "CSV/API" }
      ]
    }
  ];

  const benefits = [
    {
      title: "Expert Installation",
      description: "Certified technicians handle the entire setup process with minimal disruption.",
      image: "/images/hero/expert-installation.jpg",
      icon: Users,
      stat: "500+ Installations"
    },
    {
      title: "24/7 Support",
      description: "Our customer support team is always available to assist you.",
      image: "/images/hero/customer-support.jpg",
      icon: Clock,
      stat: "Always Available"
    },
    {
      title: "Cost Effective",
      description: "Save money while reducing your carbon footprint.",
      image: "/images/hero/cost-effective.jpg",
      icon: DollarSign,
      stat: "30% Average Savings"
    },
    {
      title: "Data-Driven Insights",
      description: "Make informed decisions with comprehensive analytics.",
      image: "/images/hero/data-driven-insights.jpg",
      icon: Target,
      stat: "99.9% Accuracy"
    }
  ];

  const testimonials = [
    {
      name: "James Loco Efetomiwa",
      location: "Lagos, Nigeria",
      quote: "My electricity bill dropped by 35% in just two months. The real-time monitoring helped me identify my old AC was consuming too much power.",
      image: "/images/team/james-okafor.jpg",
      rating: 5
    },
    {
      name: "Abigail Kwarteng",
      location: "Kumasi, Ghana",
      quote: "Finally, I have proof to dispute ECG's estimated bills. The Omhero app gives me exactly what I need to pay only for what I use.",
      image: "/images/team/ama-serwaa.jpg",
      rating: 5
    },
    {
      name: "Michael Okereke",
      location: "Abuja, Nigeria",
      quote: "Installation was seamless and the support team is fantastic. I've recommended Omhero to all my business partners.",
      image: "/images/team/michael-adeyemi.jpg",
      rating: 5
    }
  ];

  return (
    <div className="w-full relative min-h-screen overflow-x-hidden bg-background">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/images/backgrounds/hero-energy-bg.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#004B9E]/20 via-transparent to-[#0D9444]/20" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#004B9E]/30 rounded-full blur-[120px] pointer-events-none z-0" />
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#004B9E]/30 backdrop-blur-sm border border-[#004B9E]/40 text-[#0D9444] text-sm font-medium mb-6 mx-auto w-fit">
                <Sparkles className="w-4 h-4" />
                Live in Ghana & Nigeria
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
            >
              Smart Energy Control <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9444] via-[#0D9444] to-[#004B9E]">
                For Africa
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Monitor electricity usage, detect electrical risks early, reduce waste, and gain intelligent energy insights with Omhero. Built for the unique challenges of African infrastructure.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto justify-center text-base h-12 px-6 bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-lg shadow-[#FF4E00]/30">
                Book Demo <Sparkles className="ml-2 w-4 h-4" />
              </Button>
              <Link to="/product">
                <Button size="lg" variant="outline" className="w-full sm:w-auto justify-center text-base h-12 px-6 border-white/30 bg-black/20 backdrop-blur-md text-white hover:bg-white/20">
                  Explore Omhero
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Services Bar */}
      <section className="pb-16 relative z-20 -mt-8 md:-mt-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-theme/60 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-2xl">
            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory hide-scrollbar">
              {quickServices.map((service) => (
                <Link key={service.title} to={service.href} className="flex-1 min-w-[140px] snap-center">
                  <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-[#004B9E]/5 transition-all group cursor-pointer text-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-[#004B9E] transition-colors">{service.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <div className="space-y-0">
        {featureSections.map((section, index) => (
          <motion.section 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`py-16 md:py-20 ${index % 2 === 0 ? 'bg-muted/20' : 'bg-muted/30'}`}
          >
            <div className="container mx-auto px-4 max-w-5xl">
              <div className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
                <div className="lg:w-1/2">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#004B9E]/20 flex items-center justify-center border border-[#004B9E]/30 mb-5 shadow-lg mx-auto lg:mx-0">
                      <section.icon className="w-7 h-7 text-[#0D9444]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 text-center lg:text-left">
                      {section.title}
                    </h2>
                    <p className="text-base text-foreground/80 mb-6 leading-relaxed text-center lg:text-left">
                      {section.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start">
                      {section.stats.map((stat, idx) => (
                        <div key={idx} className="bg-muted/50 backdrop-blur-sm rounded-lg px-3 py-1.5 text-center">
                          <div className="text-lg font-bold text-[#0D9444]">{stat.value}</div>
                          <div className="text-xs text-foreground/60">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center lg:justify-start">
                      <Link to="/contact">
                        <Button className="bg-[#004B9E] hover:bg-[#003A7A] text-white h-10 px-5">
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#004B9E]/30 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img 
                      src={section.image}
                      alt={section.imageAlt}
                      className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#004B9E]/5 to-[#0D9444]/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#004B9E]/20 border border-[#004B9E]/30 text-[#0D9444] text-sm font-medium mb-4 mx-auto w-fit">
              <Star className="w-4 h-4" />
              Customer Love
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              What Our <span className="text-[#0D9444]">Customers Say</span>
            </h2>
            <p className="text-base text-foreground/70">
              Join thousands of satisfied customers already saving with Omhero
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-muted/40 backdrop-blur-md rounded-xl p-5 border border-border hover:border-[#0D9444]/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#0D9444]"
                  />
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-foreground/60">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#0D9444] text-[#0D9444]" />
                  ))}
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10 md:mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-[#004B9E]/20 flex items-center justify-center border border-[#004B9E]/30">
                <ImageIcon className="w-7 h-7 text-[#0D9444]" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
              See Omhero in <span className="text-[#0D9444]">Action</span>
            </h2>
            <p className="text-base text-foreground/70">
              Real installations, real results. Browse our gallery of Omhero deployments across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer overflow-hidden rounded-xl bg-muted/40 backdrop-blur-sm border border-border hover:border-[#004B9E]/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-3">
                  <p className="text-xs text-foreground/70 text-center">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-muted/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10 md:mb-12">
            <Crown className="w-10 h-10 text-[#0D9444] mx-auto mb-3" />
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
              Why Choose <span className="text-[#0D9444]">OHM Plus?</span>
            </h2>
            <p className="text-base text-foreground/70">
              We provide end-to-end energy management solutions tailored for African homes and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-muted/40 backdrop-blur-sm rounded-xl overflow-hidden border border-border hover:border-[#004B9E]/30 transition-all duration-300 group"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <div className="w-10 h-10 rounded-lg bg-[#004B9E]/20 flex items-center justify-center mb-3 border border-[#004B9E]/30 mx-auto md:mx-0">
                    <benefit.icon className="w-5 h-5 text-[#0D9444]" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1 text-center md:text-left">{benefit.title}</h3>
                  <p className="text-foreground/70 text-xs mb-2 text-center md:text-left">{benefit.description}</p>
                  <div className="text-[11px] text-[#0D9444] font-semibold text-center md:text-left">{benefit.stat}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section - CORRECTED with YouTube Embeds */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10 md:mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-[#004B9E]/20 flex items-center justify-center border border-[#004B9E]/30">
                <Play className="w-7 h-7 text-[#0D9444]" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
              Watch Our <span className="text-[#0D9444]">Story</span>
            </h2>
            <p className="text-base text-foreground/70">
              See how Omhero is transforming energy management across the continent.
            </p>
          </div>

          {/* Main Video Player */}
          <div className="mb-10">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-2xl">
              <iframe
                key={activeVideo}
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoGallery[activeVideo].youtubeId}?autoplay=0&rel=0&modestbranding=1`}
                title={videoGallery[activeVideo].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-foreground mb-1">{videoGallery[activeVideo].title}</h3>
              <p className="text-foreground/60 text-sm">{videoGallery[activeVideo].description}</p>
            </div>
          </div>

          {/* Video Thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {videoGallery.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveVideo(index)}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  activeVideo === index 
                    ? 'border-[#0D9444] shadow-lg shadow-[#0D9444]/20' 
                    : 'border-transparent hover:border-[#004B9E]/50'
                }`}
              >
                <div className="relative aspect-video">
                  {/* YouTube Thumbnail - using YouTube's official thumbnail API */}
                  <img 
                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[#FF4E00]/90 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </div>
                  </div>
                  {/* Static play button for non-active videos */}
                  {activeVideo !== index && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center">
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-3 bg-muted/40 text-center">
                  <p className="text-sm font-medium text-foreground truncate">{video.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outage Status */}
      <section className="py-8 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0D9444]/10 border border-[#0D9444]/30 p-4 rounded-xl">
            <div className="flex items-center gap-3 flex-col md:flex-row">
              <div className="w-10 h-10 rounded-full bg-[#0D9444]/20 flex items-center justify-center shrink-0 border border-[#0D9444]/50">
                <CheckCircle2 className="w-5 h-5 text-[#0D9444]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-0.5 text-center md:text-left">Network Status: Normal</h3>
                <p className="text-xs text-foreground/60 text-center md:text-left">All systems operational in pilot regions.</p>
              </div>
            </div>
            <Link to="/services/report-fault">
              <Button variant="outline" size="sm" className="border-[#FF4E00]/30 text-foreground hover:bg-[#FF4E00]/10">
                Report an Outage
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Energy Tips Teaser */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#FF4E00]/5 to-[#FF4E00]/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="w-14 h-14 bg-[#FF4E00]/20 rounded-2xl flex items-center justify-center mb-5 border border-[#FF4E00]/30 mx-auto lg:mx-0">
                <Lightbulb className="w-7 h-7 text-[#FF4E00]" />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center lg:text-left">Did You Know?</h2>
              <p className="text-base text-foreground/70 mb-6 leading-relaxed text-center lg:text-left">
                Small behavioral changes can significantly lower your electricity bills. Setting your AC to 24°C instead of 18°C can reduce your monthly cooling costs by up to 25%.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link to="/energy-tips">
                  <Button variant="outline" size="sm" className="border-[#FF4E00]/30 hover:bg-[#FF4E00]/10 gap-2 text-foreground">
                    View More Energy Tips <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-muted/40 backdrop-blur-sm border-border">
                <CardContent className="p-4">
                  <Zap className="w-5 h-5 text-[#0D9444] mb-2 mx-auto sm:mx-0" />
                  <h4 className="font-bold text-foreground text-sm mb-1 text-center sm:text-left">Vampire Power</h4>
                  <p className="text-xs text-foreground/60 text-center sm:text-left">Electronics left plugged in can account for 10% of your bill.</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/40 backdrop-blur-sm border-border">
                <CardContent className="p-4">
                  <Leaf className="w-5 h-5 text-[#0D9444] mb-2 mx-auto sm:mx-0" />
                  <h4 className="font-bold text-foreground text-sm mb-1 text-center sm:text-left">LED Savings</h4>
                  <p className="text-xs text-foreground/60 text-center sm:text-left">LED bulbs use 80% less energy than standard bulbs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 md:py-20 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-3">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-1">Latest News</h2>
              <p className="text-sm text-foreground/60">Updates from OHM Plus and the energy sector.</p>
            </div>
            <Link to="/news">
              <Button variant="outline" size="sm" className="border-[#004B9E]/30 hover:bg-[#004B9E]/10 gap-2 text-foreground">
                View All News <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link to="/news/ohm-plus-launch-accra">
              <Card className="bg-muted/40 backdrop-blur-sm border-border hover:border-[#004B9E]/30 transition-all group cursor-pointer flex flex-col overflow-hidden h-full">
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/blog/ohm-plus-launch-accra.jpg" 
                    alt="OHM Plus Launch"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4 flex-1 flex flex-col">
                  <span className="text-[10px] text-[#0D9444] mb-1">Company News</span>
                  <h4 className="text-base font-bold text-foreground mb-1 group-hover:text-[#004B9E] transition-colors line-clamp-2">OHM Plus Launches Pilot Program in Accra</h4>
                  <p className="text-xs text-foreground/60 line-clamp-2 mb-3">We are thrilled to announce the launch of our smart energy control pilot program in the Greater Accra region.</p>
                  <span className="text-xs text-[#0D9444] font-medium mt-auto flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link to="/news/ghana-tariff-review-2025">
              <Card className="bg-muted/40 backdrop-blur-sm border-border hover:border-[#004B9E]/30 transition-all group cursor-pointer flex flex-col overflow-hidden h-full">
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/blog/ghana-tariff-review-2025.jpg" 
                    alt="Tariff Review"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4 flex-1 flex flex-col">
                  <span className="text-[10px] text-[#0D9444] mb-1">Government Policy</span>
                  <h4 className="text-base font-bold text-foreground mb-1 group-hover:text-[#004B9E] transition-colors line-clamp-2">Ghana's Electricity Tariff Review 2025</h4>
                  <p className="text-xs text-foreground/60 line-clamp-2 mb-3">The Public Utilities Regulatory Commission (PURC) has announced its quarterly tariff review.</p>
                  <span className="text-xs text-[#0D9444] font-medium mt-auto flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link to="/news/smart-meters-changing-energy">
              <Card className="bg-muted/40 backdrop-blur-sm border-border hover:border-[#004B9E]/30 transition-all group cursor-pointer flex flex-col overflow-hidden h-full">
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/blog/telecom-fuel-monitoring.jpg" 
                    alt="Smart Meters"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4 flex-1 flex flex-col">
                  <span className="text-[10px] text-[#0D9444] mb-1">Industry</span>
                  <h4 className="text-base font-bold text-foreground mb-1 group-hover:text-[#004B9E] transition-colors line-clamp-2">Smart Meters Are Changing Energy</h4>
                  <p className="text-xs text-foreground/60 line-clamp-2 mb-3">The transition from estimated billing to smart metering is transforming how Nigerians consume electricity.</p>
                  <span className="text-xs text-[#0D9444] font-medium mt-auto flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#004B9E]/20 via-[#0D9444]/20 to-[#004B9E]/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#004B9E]/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#004B9E]/20 backdrop-blur-sm border border-[#004B9E]/30 text-[#0D9444] text-sm font-medium mb-5 mx-auto w-fit">
            <ThumbsUp className="w-4 h-4" />
            Join the Revolution
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Ready to Take Control?</h2>
          <p className="text-base text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join the pilot program in Ghana and Nigeria today and be among the first to experience true energy intelligence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact">
              <Button size="default" className="w-full sm:w-auto justify-center bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-lg shadow-[#FF4E00]/30 h-11 px-6">
                Contact Sales
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="default" variant="outline" className="w-full sm:w-auto justify-center border-border text-foreground hover:bg-[#004B9E]/10 backdrop-blur-sm h-11 px-6">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}