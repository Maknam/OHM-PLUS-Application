import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Activity, ShieldAlert, TrendingDown, Zap, BarChart3, Lock, Calculator, AlertTriangle, PlugZap, Lightbulb, FileText, Newspaper, CheckCircle2, Play, Image as ImageIcon, Users, Clock, DollarSign, Target, Sparkles, Crown, Leaf, Award, Star, ThumbsUp, Home as HomeIcon, Building, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(0);

  const quickServices = [
    { title: "Bill Calculator", icon: Calculator, href: "/services/bill-calculator", color: "from-blue-500 to-cyan-500" },
    { title: "Report Fault", icon: AlertTriangle, href: "/services/report-fault", color: "from-red-500 to-orange-500" },
    { title: "New Connection", icon: PlugZap, href: "/services/new-connection", color: "from-green-500 to-emerald-500" },
    { title: "Energy Tips", icon: Lightbulb, href: "/energy-tips", color: "from-yellow-500 to-amber-500" },
    { title: "Tariffs", icon: FileText, href: "/tariffs", color: "from-purple-500 to-pink-500" },
    { title: "News", icon: Newspaper, href: "/news", color: "from-cyan-500 to-blue-500" },
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
      alt: "Smart home energy monitoring",
      caption: "Real-time energy tracking from your smartphone"
    },
    {
      url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      alt: "Business energy management",
      caption: "Enterprise solutions for commercial properties"
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      alt: "Energy savings dashboard",
      caption: "Track your savings with detailed analytics"
    },
    {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      alt: "Server room monitoring",
      caption: "Data centre power quality management"
    },
    {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      alt: "Modern building energy control",
      caption: "Centralized control for facility managers"
    },
    {
      url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
      alt: "Telecom tower monitoring",
      caption: "Remote monitoring for telecom infrastructure"
    }
  ];

  const videoGallery = [
    {
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Introducing Omhero",
      thumbnail: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
      description: "Meet the smart energy monitor transforming how Africa manages power"
    },
    {
      url: "https://www.w3schools.com/html/movie.mp4",
      title: "Customer Testimonial",
      thumbnail: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80",
      description: "Hear from real customers about their energy savings"
    },
    {
      url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      title: "Installation Guide",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      description: "Quick and easy professional installation process"
    }
  ];

  const featureSections = [
    {
      title: "Real-Time Energy Monitoring",
      description: "Track your electricity consumption minute by minute with our advanced smart sensors. Get instant alerts when usage spikes and identify energy-hungry appliances immediately.",
      image: "https://images.unsplash.com/photo-1568378710933-345c61fc7520?w=800&h=370&fit=crop",
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
      image: "https://images.unsplash.com/photo-1576446470246-499c738d1c8e?w=800&h=380&fit=crop",
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
      image: "https://plus.unsplash.com/premium_photo-1714826810176-54a0e55eafab?w=800&h=380&fit=crop",
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
      image: "https://images.unsplash.com/photo-1774186184398-1cc2da3d029e?w=800&h=380&fit=crop",
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
      image: "https://plus.unsplash.com/premium_photo-1661963753278-af66c671bbe7?w=400&h=300&fit=crop",
      icon: Users,
      stat: "500+ Installations"
    },
    {
      title: "24/7 Support",
      description: "Our customer support team is always available to assist you.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
      icon: Clock,
      stat: "Always Available"
    },
    {
      title: "Cost Effective",
      description: "Save money while reducing your carbon footprint.",
      image: "https://images.unsplash.com/photo-1729077555348-4ab768b4a90e?w=400&h=300&fit=crop",
      icon: DollarSign,
      stat: "30% Average Savings"
    },
    {
      title: "Data-Driven Insights",
      description: "Make informed decisions with comprehensive analytics.",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=400&h=300&fit=crop",
      icon: Target,
      stat: "99.9% Accuracy"
    }
  ];

  const testimonials = [
    {
      name: "James Loco Efetomiwa",
      location: "Lagos, Nigeria",
      quote: "My electricity bill dropped by 35% in just two months. The real-time monitoring helped me identify my old AC was consuming too much power.",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      rating: 5
    },
    {
      name: "Abigail Kwarteng",
      location: "Kumasi, Ghana",
      quote: "Finally, I have proof to dispute ECG's estimated bills. The Omhero app gives me exactly what I need to pay only for what I use.",
      image: "https://randomuser.me/api/portraits/women/92.jpg",
      rating: 5
    },
    {
      name: "Michael Okereke",
      location: "Abuja, Nigeria",
      quote: "Installation was seamless and the support team is fantastic. I've recommended Omhero to all my business partners.",
      image: "https://randomuser.me/api/portraits/men/59.jpg",
      rating: 5
    }
  ];

  return (
    <div className="w-full relative min-h-screen overflow-hidden">
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?q=80&w=2070')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-sm font-medium mb-6 mx-auto w-fit">
                <Sparkles className="w-4 h-4" />
                Live in Ghana & Nigeria
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight text-center"
            >
              Smart Energy Control <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-400">
                For Africa
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed text-center"
            >
              Monitor electricity usage, detect electrical risks early, reduce waste, and gain intelligent energy insights with Omhero. Built for the unique challenges of African infrastructure.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto justify-center text-base sm:text-lg h-14 px-8 bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-600/90 text-white shadow-lg shadow-primary/30">
                Book Demo <Sparkles className="ml-2 w-4 h-4" />
              </Button>
              <Link to="/product">
                <Button size="lg" variant="outline" className="w-full sm:w-auto justify-center text-base sm:text-lg h-14 px-8 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  Explore Omhero
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Services Bar */}
      <section className="pb-20 relative z-20 -mt-10">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0a0a1a] to-[#0f0f2a] border border-primary/20 rounded-2xl p-4 shadow-2xl backdrop-blur-sm">
            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory hide-scrollbar">
              {quickServices.map((service) => (
                <Link key={service.title} to={service.href} className="flex-1 min-w-[140px] snap-center">
                  <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all group cursor-pointer text-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">{service.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Feature Sections */}
      {featureSections.map((section, index) => (
        <motion.section 
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`py-20 ${index % 2 === 0 ? 'bg-black/20' : 'bg-black/30'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-cyan-500/30 flex items-center justify-center border border-primary/30 mb-6 shadow-lg mx-auto lg:mx-0">
                    <section.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-center lg:text-left">
                    {section.title}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed text-center lg:text-left">
                    {section.description}
                  </p>
                  <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
                    {section.stats.map((stat, idx) => (
                      <div key={idx} className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
                        <div className="text-xl sm:text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    <Link to="/contact">
                      <Button className="bg-primary hover:bg-primary/90 text-white">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-cyan-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-4 mx-auto w-fit">
              <Star className="w-4 h-4" />
              Customer Love
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 text-center">
              What Our <span className="text-primary">Customers Say</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 text-center">
              Join thousands of satisfied customers already saving with Omhero
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-xs text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3 justify-center md:justify-start">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic text-center md:text-left">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-cyan-500/30 flex items-center justify-center border border-primary/30">
                <ImageIcon className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 text-center">
              See Omhero in <span className="text-primary">Action</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 text-center">
              Real installations, real results. Browse our gallery of Omhero deployments across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={`${image.url}?w=600&h=400&fit=crop`} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 text-center md:text-left">
                  <p className="text-sm text-gray-300">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-gradient-to-b from-black/30 to-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Crown className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 text-center">
              Why Choose <span className="text-primary">OHM Plus?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 text-center">
              We provide end-to-end energy management solutions tailored for African homes and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center md:text-left">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-cyan-500/30 flex items-center justify-center mb-4 border border-primary/30 mx-auto md:mx-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center md:text-left">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm mb-3 text-center md:text-left">{benefit.description}</p>
                  <div className="text-xs text-primary font-semibold text-center md:text-left">{benefit.stat}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-cyan-500/30 flex items-center justify-center border border-primary/30">
                <Play className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 text-center">
              Watch Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 text-center">
              See how Omhero is transforming energy management across the continent.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-2xl">
              <video 
                key={activeVideo}
                controls 
                className="w-full h-full"
                poster={videoGallery[activeVideo].thumbnail}
              >
                <source src={videoGallery[activeVideo].url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white mb-2 text-center">{videoGallery[activeVideo].title}</h3>
              <p className="text-gray-400 text-center">{videoGallery[activeVideo].description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {videoGallery.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveVideo(index)}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  activeVideo === index ? 'border-primary shadow-lg shadow-primary/20' : 'border-transparent'
                }`}
              >
                <div className="relative aspect-video">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-3 bg-black/40 text-center">
                  <p className="text-sm font-medium text-white truncate">{video.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outage Status */}
      <section className="py-12 border-t border-white/10 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 rounded-2xl text-center md:text-left">
            <div className="flex items-center gap-4 flex-col md:flex-row">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/50">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 text-center md:text-left">Network Status: Normal</h3>
                <p className="text-sm text-gray-400 text-center md:text-left">All systems operational in pilot regions.</p>
              </div>
            </div>
            <Link to="/services/report-fault">
              <Button variant="outline" className="border-green-500/30 text-white hover:bg-green-500/10 w-full md:w-auto justify-center">
                Report an Outage
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Energy Tips Teaser */}
      <section className="py-24 bg-gradient-to-br from-yellow-500/5 to-amber-500/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/30 to-amber-500/30 rounded-2xl flex items-center justify-center mb-6 border border-yellow-500/30 mx-auto lg:mx-0">
                <Lightbulb className="w-8 h-8 text-yellow-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-display font-bold text-white mb-6 text-center lg:text-left">Did You Know?</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed text-center lg:text-left">
                Small behavioral changes can significantly lower your electricity bills. Setting your AC to 24°C instead of 18°C can reduce your monthly cooling costs by up to 25%.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link to="/energy-tips">
                  <Button variant="outline" className="border-primary/30 hover:bg-primary/10 gap-2">
                    View More Energy Tips <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-black/30 backdrop-blur-sm border-white/10">
                <CardContent className="p-6 text-center sm:text-left">
                  <Zap className="w-6 h-6 text-primary mb-4 mx-auto sm:mx-0" />
                  <h4 className="font-bold text-white mb-2 text-center sm:text-left">Vampire Power</h4>
                  <p className="text-sm text-gray-400 text-center sm:text-left">Electronics left plugged in can account for 10% of your bill.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/30 backdrop-blur-sm border-white/10">
                <CardContent className="p-6 text-center sm:text-left">
                  <Leaf className="w-6 h-6 text-green-500 mb-4 mx-auto sm:mx-0" />
                  <h4 className="font-bold text-white mb-2 text-center sm:text-left">LED Savings</h4>
                  <p className="text-sm text-gray-400 text-center sm:text-left">LED bulbs use 80% less energy than standard bulbs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section - FIXED with proper navigation */}
      <section className="py-24 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">Latest News</h2>
              <p className="text-gray-400">Updates from OHM Plus and the energy sector.</p>
            </div>
            <Link to="/news">
              <Button variant="outline" className="border-primary/30 hover:bg-primary/10 gap-2">
                View All News <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* News Card 1 */}
            <Link to="/news/ohm-plus-launch-accra">
              <Card className="bg-black/30 backdrop-blur-sm border-white/10 hover:border-primary/30 transition-all group cursor-pointer flex flex-col overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?w=400&h=200&fit=crop" 
                    alt="OHM Plus Launch"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col text-center sm:text-left">
                  <span className="text-xs text-primary mb-2">Company News</span>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">OHM Plus Launches Pilot Program in Accra</h4>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">We are thrilled to announce the launch of our smart energy control pilot program in the Greater Accra region.</p>
                  <span className="text-sm text-primary font-medium mt-auto flex items-center justify-center sm:justify-start gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            {/* News Card 2 */}
            <Link to="/news/ghana-tariff-review-2025">
              <Card className="bg-black/30 backdrop-blur-sm border-white/10 hover:border-primary/30 transition-all group cursor-pointer flex flex-col overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?w=400&h=200&fit=crop" 
                    alt="Tariff Review"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col text-center sm:text-left">
                  <span className="text-xs text-primary mb-2">Government Policy</span>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">Ghana's Electricity Tariff Review 2025</h4>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">The Public Utilities Regulatory Commission (PURC) has announced its quarterly tariff review.</p>
                  <span className="text-sm text-primary font-medium mt-auto flex items-center justify-center sm:justify-start gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            {/* News Card 3 */}
            <Link to="/news/smart-meters-changing-energy">
              <Card className="bg-black/30 backdrop-blur-sm border-white/10 hover:border-primary/30 transition-all group cursor-pointer flex flex-col overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?w=400&h=200&fit=crop" 
                    alt="Smart Meters"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col text-center sm:text-left">
                  <span className="text-xs text-primary mb-2">Industry</span>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">Smart Meters Are Changing Energy</h4>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">The transition from estimated billing to smart metering is transforming how Nigerians consume electricity.</p>
                  <span className="text-sm text-primary font-medium mt-auto flex items-center justify-center sm:justify-start gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-blue-500/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-sm font-medium mb-6 mx-auto w-fit">
            <ThumbsUp className="w-4 h-4" />
            Join the Revolution
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-6 text-center">Ready to Take Control?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto text-center">
            Join the pilot program in Ghana and Nigeria today and be among the first to experience true energy intelligence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto justify-center text-base sm:text-lg h-14 px-8 bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-600/90 text-white shadow-lg shadow-primary/30">
                Contact Sales
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="w-full sm:w-auto justify-center text-base sm:text-lg h-14 px-8 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
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