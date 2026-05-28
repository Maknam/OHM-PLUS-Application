import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Zap, Shield, Activity, BarChart3, AlertTriangle, Gauge, DollarSign, TrendingDown, Clock, Wrench, Settings, Sparkles, Leaf, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Industrial() {
  const features = [
    { icon: Gauge, title: "Three-Phase Monitoring", desc: "Complete visibility across all three phases of industrial power supply", gradient: "from-orange-500 to-red-500" },
    { icon: Activity, title: "Power Quality Analysis", desc: "Detect harmonics, voltage sags, and power factor issues", gradient: "from-amber-500 to-orange-500" },
    { icon: AlertTriangle, title: "Predictive Alerts", desc: "Early warning before equipment failure occurs", gradient: "from-red-500 to-pink-500" },
    { icon: BarChart3, title: "Production Analytics", desc: "Correlate energy usage with production output", gradient: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Machine Protection", desc: "Prevent costly damage from power anomalies", gradient: "from-green-500 to-emerald-500" },
    { icon: Zap, title: "Load Balancing", desc: "Optimize distribution across production lines", gradient: "from-purple-500 to-pink-500" }
  ];

  const benefits = [
    { icon: TrendingDown, title: "50% Less Downtime", desc: "Predictive maintenance prevents failures", color: "text-orange-400" },
    { icon: DollarSign, title: "25% Energy Savings", desc: "Optimize production scheduling", color: "text-green-400" },
    { icon: Clock, title: "3-6 Month ROI", desc: "Fast return on investment", color: "text-blue-400" },
    { icon: Wrench, title: "Remote Diagnostics", desc: "24/7 equipment monitoring", color: "text-purple-400" }
  ];

  const caseStudies = [
    {
      company: "Steel Manufacturing Plant",
      location: "Ogun State, Nigeria",
      savings: "₦1.2M",
      reduction: "28%",
      image: "https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?w=600&h=400&fit=crop",
      description: "Large-scale manufacturer reduced energy waste across production lines"
    },
    {
      company: "Food Processing Facility",
      location: "Accra, Ghana",
      savings: "₵42,000",
      reduction: "32%",
      image: "https://images.pexels.com/photos/4722571/pexels-photo-4722571.jpeg?w=600&h=400&fit=crop",
      description: "Food processor optimized refrigeration and HVAC systems"
    },
    {
      company: "Textile Factory",
      location: "Lagos, Nigeria",
      savings: "₦980,000",
      reduction: "35%",
      image: "https://images.pexels.com/photos/4440593/pexels-photo-4440593.jpeg?w=600&h=400&fit=crop",
      description: "Textile plant reduced energy costs with load balancing"
    }
  ];

  const equipmentTypes = [
    { name: "Motors & Pumps", icon: Settings, efficiency: "25%" },
    { name: "HVAC Systems", icon: Zap, efficiency: "30%" },
    { name: "Compressors", icon: Factory, efficiency: "28%" },
    { name: "Lighting", icon: Activity, efficiency: "35%" }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2a] to-[#1a1a3e]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,114,206,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,114,206,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Back Link */}
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link to="/solutions" className="text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-2 group">
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Solutions
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-6 mx-auto md:mx-0 w-fit">
              <Factory className="w-4 h-4" />
              Industrial Solution
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight text-center md:text-left">
              Factories & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Industrial</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed text-center md:text-left">
              Three-phase monitoring for heavy machinery. Detect power anomalies before they cause equipment failure, reduce unplanned downtime, and optimize production efficiency.
            </p>
            <p className="text-gray-400 mb-8 text-center md:text-left">
              Industrial operations demand robust energy monitoring. Omhero's three-phase monitoring capabilities give you unprecedented visibility into your factory's power consumption patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/20 w-full sm:w-auto justify-center">
                  Request Consultation <Sparkles className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-orange-500/30 text-white hover:bg-orange-500/10 w-full sm:w-auto justify-center">
                  View Industrial Pricing
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-3xl p-6 border border-white/20 backdrop-blur-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=420&fit=crop"
                alt="Industrial Factory Energy Monitoring"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md rounded-xl p-3 border border-orange-500/30">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xs text-gray-400">Production Line 1</div>
                    <div className="text-base sm:text-lg font-bold text-orange-400">45.2 kW</div>
                  </div>
                  <div className="border-l border-white/20 pl-2">
                    <div className="text-xs text-gray-400">Power Quality</div>
                    <div className="text-base sm:text-lg font-bold text-green-400">98.5%</div>
                  </div>
                  <div className="border-l border-white/20 pl-2">
                    <div className="text-xs text-gray-400">Efficiency</div>
                    <div className="text-base sm:text-lg font-bold text-white">Optimized</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Equipment Efficiency Section */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-orange-500/20 via-red-500/20 to-amber-500/20 rounded-3xl p-1">
            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white text-center mb-4">
                Equipment <span className="text-orange-400">Efficiency Gains</span>
              </h2>
              <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto text-sm sm:text-base">
                Typical energy savings by equipment type with Omhero monitoring
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {equipmentTypes.map((equip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/30 to-orange-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <equip.icon className="w-8 h-8 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1 text-center">{equip.name}</h3>
                    <p className="text-2xl font-bold text-orange-400 text-center">{equip.efficiency}</p>
                    <p className="text-xs text-gray-400 text-center">Average savings</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 text-center">
              Industrial <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Features</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto text-center">
              Advanced monitoring for heavy-duty industrial environments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-orange-500/50 transition-all hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto md:mx-0`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center md:text-left">{feature.title}</h3>
                <p className="text-gray-400 text-sm text-center md:text-left">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-24">
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white text-center mb-12">
              Proven <span className="text-orange-400">Industrial Results</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2 text-center">50%</div>
                <p className="text-gray-300 text-sm text-center">Reduction in unplanned downtime</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2 text-center">25%</div>
                <p className="text-gray-300 text-sm text-center">Average energy cost reduction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2 text-center">3-6</div>
                <p className="text-gray-300 text-sm text-center">Months ROI timeline</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2 text-center">99.9%</div>
                <p className="text-gray-300 text-sm text-center">Monitoring uptime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-md rounded-xl p-6 text-center border border-white/10 hover:border-orange-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500/30 to-orange-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1 text-center">{benefit.title}</h3>
                <p className="text-gray-400 text-sm text-center">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white text-center mb-12">
            Industrial <span className="text-orange-400">Success Stories</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-orange-500/30 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4 bg-orange-500/90 rounded-full px-2 py-1">
                    <span className="text-xs font-bold text-white">{study.reduction} saved</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 text-center md:text-left">{study.company}</h3>
                  <p className="text-sm text-gray-400 mb-3 text-center md:text-left">{study.location}</p>
                  <p className="text-gray-300 text-sm mb-4 text-center md:text-left">{study.description}</p>
                  <div className="flex justify-between items-center pt-3 border-t border-white/10">
                    <div>
                      <div className="text-xs text-gray-400 text-center md:text-left">Monthly Savings</div>
                      <div className="text-lg font-bold text-orange-400 text-center md:text-left">{study.savings}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400 text-center md:text-right">Reduction</div>
                      <div className="text-lg font-bold text-white text-center md:text-right">{study.reduction}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-8 sm:p-12 border border-white/20 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">Ready to Optimize Your Factory?</h3>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto text-center">
              Join leading manufacturers already reducing downtime and saving on energy costs with Omhero.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/20 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto justify-center">
                  Schedule Site Assessment <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-orange-500/30 text-white hover:bg-orange-500/10 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto justify-center">
                  View Industrial Plans
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}