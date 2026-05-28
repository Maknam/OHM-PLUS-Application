import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutDashboard, Building2, FileText, Calendar, Users, Bell, TrendingDown, CheckCircle2, BarChart3, Clock, DollarSign, Home, Sparkles, Leaf, Award, Eye, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function FacilityManagers() {
  const features = [
    { icon: Building2, title: "Multi-Property Dashboard", desc: "Manage all properties from one central view", gradient: "from-blue-500 to-cyan-500" },
    { icon: FileText, title: "Automated Billing", desc: "Generate tenant bills based on actual usage", gradient: "from-green-500 to-emerald-500" },
    { icon: Calendar, title: "Maintenance Scheduling", desc: "Track and schedule preventive maintenance", gradient: "from-orange-500 to-red-500" },
    { icon: Users, title: "Tenant Portal", desc: "Give tenants visibility into their consumption", gradient: "from-purple-500 to-pink-500" },
    { icon: Bell, title: "Alert Management", desc: "Get notified of issues across your portfolio", gradient: "from-yellow-500 to-amber-500" },
    { icon: TrendingDown, title: "Benchmarking", desc: "Compare performance across properties", gradient: "from-cyan-500 to-blue-500" }
  ];

  const benefits = [
    { icon: Clock, title: "50% Less Admin Time", desc: "Automated billing and reporting", value: "50%", color: "text-blue-400" },
    { icon: DollarSign, title: "25% Lower Costs", desc: "Portfolio-wide energy optimization", value: "25%", color: "text-green-400" },
    { icon: Eye, title: "100% Transparency", desc: "Real-time usage visibility", value: "100%", color: "text-cyan-400" },
    { icon: Settings, title: "40% Faster Response", desc: "Automated maintenance alerts", value: "40%", color: "text-orange-400" }
  ];

  const caseStudies = [
    {
      facility: "Heritage Court Estate",
      location: "Lagos, Nigeria",
      savings: "₦45M",
      reduction: "32%",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=600&h=400&fit=crop",
      description: "120-unit residential estate reduced common area energy costs"
    },
    {
      facility: "Ocean View Tower",
      location: "Accra, Ghana",
      savings: "₵320,000",
      reduction: "28%",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?w=600&h=400&fit=crop",
      description: "Commercial office building optimized HVAC across 15 floors"
    },
    {
      facility: "Industrial Park",
      location: "Ogun State, Nigeria",
      savings: "₦78M",
      reduction: "35%",
      image: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?w=600&h=400&fit=crop",
      description: "Multi-tenant industrial park with sub-metering for 50+ tenants"
    }
  ];

  const properties = [
    { name: "Sunset Heights", type: "Residential", units: 48, usage: "42,500 kWh", efficiency: "Good", color: "text-green-400" },
    { name: "Business Plaza", type: "Commercial", units: 32, usage: "128,000 kWh", efficiency: "Excellent", color: "text-green-400" },
    { name: "Riverside Complex", type: "Mixed-Use", units: 64, usage: "95,000 kWh", efficiency: "Needs Review", color: "text-yellow-400" }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2a] to-[#1a1a3e]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,114,206,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,114,206,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link to="/solutions" className="text-red-400 hover:text-red-300 transition-colors inline-flex items-center gap-2 group">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium mb-6 mx-auto md:mx-0 w-fit">
              <LayoutDashboard className="w-4 h-4" />
              Portfolio Management
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight text-center md:text-left">
              Facility <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">Managers</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed text-center md:text-left">
              Manage hundreds of properties from a single dashboard. Automated billing and sub-metering solutions for efficient portfolio management.
            </p>
            <p className="text-gray-400 mb-8 text-center md:text-left">
              Managing multiple properties? Omhero's facility management dashboard gives you complete visibility across your entire portfolio, with automated sub-metering, tenant billing, and maintenance alerts all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg shadow-red-500/20 w-full sm:w-auto justify-center">
                  Request Demo <Sparkles className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-red-500/30 text-white hover:bg-red-500/10 w-full sm:w-auto justify-center">
                  View Enterprise Pricing
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
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-orange-500/30 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-red-500/20 to-orange-500/10 rounded-3xl p-6 border border-white/20 backdrop-blur-sm overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?w=800&h=600&fit=crop"
                alt="Facility Management Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md rounded-xl p-3 border border-red-500/30">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xs text-gray-400">Total Properties</div>
                    <div className="text-base sm:text-lg font-bold text-red-400">127</div>
                  </div>
                  <div className="border-l border-white/20 pl-2">
                    <div className="text-xs text-gray-400">Total Usage</div>
                    <div className="text-base sm:text-lg font-bold text-white">1.24 MWh</div>
                  </div>
                  <div className="border-l border-white/20 pl-2">
                    <div className="text-xs text-gray-400">Savings</div>
                    <div className="text-base sm:text-lg font-bold text-green-400">₦5.2M</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Property Portfolio Overview */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-red-500/20 via-orange-500/20 to-amber-500/20 rounded-3xl p-1">
            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white text-center mb-4">
                Portfolio <span className="text-red-400">Overview</span>
              </h2>
              <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                Real-time monitoring across your entire property portfolio
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 text-gray-400 font-medium">Property</th>
                      <th className="text-left p-3 text-gray-400 font-medium">Type</th>
                      <th className="text-left p-3 text-gray-400 font-medium">Units</th>
                      <th className="text-left p-3 text-gray-400 font-medium">Monthly Usage</th>
                      <th className="text-left p-3 text-gray-400 font-medium">Efficiency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.map((property, index) => (
                      <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-3 text-white font-medium">{property.name}</td>
                        <td className="p-3 text-gray-300">{property.type}</td>
                        <td className="p-3 text-white">{property.units}</td>
                        <td className="p-3 text-white">{property.usage}</td>
                        <td className={`p-3 ${property.color} font-medium`}>{property.efficiency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white text-center mb-12">
            Benefits for <span className="text-red-400">Facility Managers</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all group text-center md:text-left"
            >
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Reduce Administrative Overhead</h3>
              </div>
              <p className="text-gray-300 text-center md:text-left">Automate tenant billing, sub-meter reading, and invoice generation.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all group text-center md:text-left"
            >
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Improve Tenant Satisfaction</h3>
              </div>
              <p className="text-gray-300 text-center md:text-left">Give tenants transparent visibility into their energy usage and bills.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all group text-center md:text-left"
            >
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calendar className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Preventative Maintenance</h3>
              </div>
              <p className="text-gray-300 text-center md:text-left">Schedule and track maintenance across all properties automatically.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all group text-center md:text-left"
            >
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingDown className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Reduce Energy Waste</h3>
              </div>
              <p className="text-gray-300 text-center md:text-left">Identify underperforming properties and take corrective action.</p>
            </motion.div>
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
              Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">Features</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto text-center">
              Complete control over your entire property portfolio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all hover:-translate-y-2"
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
              Proven <span className="text-red-400">Results</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500/30 to-orange-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${benefit.color} mb-2 text-center`}>{benefit.value}</div>
                  <p className="text-sm font-semibold text-gray-300 mb-1 text-center">{benefit.title}</p>
                  <p className="text-xs text-gray-500 text-center">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white text-center mb-12">
            Portfolio <span className="text-red-400">Success Stories</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-red-500/30 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image}
                    alt={study.facility}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4 bg-red-500/90 rounded-full px-2 py-1">
                    <span className="text-xs font-bold text-white">{study.reduction} saved</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 text-center md:text-left">{study.facility}</h3>
                  <p className="text-sm text-gray-400 mb-3 text-center md:text-left">{study.location}</p>
                  <p className="text-gray-300 text-sm mb-4 text-center md:text-left">{study.description}</p>
                  <div className="flex justify-between items-center pt-3 border-t border-white/10">
                    <div>
                      <div className="text-xs text-gray-400 text-center md:text-left">Annual Savings</div>
                      <div className="text-lg font-bold text-red-400 text-center md:text-left">{study.savings}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400 text-center md:text-right">Cost Reduction</div>
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
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 sm:p-12 border border-white/20 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">Ready to Transform Your Portfolio?</h3>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto text-center">
              Join leading facility managers already optimizing their portfolios and reducing operational costs with Omhero.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg shadow-red-500/20 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto justify-center">
                  Schedule Portfolio Review <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-red-500/30 text-white hover:bg-red-500/10 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto justify-center">
                  Request Enterprise Quote
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}