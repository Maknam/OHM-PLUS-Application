import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Thermometer, Droplet, Gauge, Activity, BarChart3, Shield, Cloud, Zap, TrendingDown, Clock, HardDrive, Cpu, Sparkles, Leaf, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function DataCenters() {
  const features = [
    { icon: Thermometer, title: "Thermal Monitoring", desc: "Track temperature and humidity across server rooms", gradient: "from-primary to-primary/70" },
    { icon: Gauge, title: "PUE Tracking", desc: "Measure and improve Power Usage Effectiveness metrics", gradient: "from-secondary to-secondary/70" },
    { icon: Activity, title: "Load Monitoring", desc: "Real-time visibility of power draw per rack", gradient: "from-primary to-primary/70" },
    { icon: BarChart3, title: "Compliance Reporting", desc: "Generate reports for regulatory requirements", gradient: "from-secondary to-secondary/70" },
    { icon: Shield, title: "Redundancy Alerts", desc: "Monitor backup systems and failover readiness", gradient: "from-destructive to-destructive/70" },
    { icon: Droplet, title: "Environmental Sensors", desc: "Detect leaks and environmental anomalies", gradient: "from-primary to-primary/70" }
  ];

  const benefits = [
    { icon: TrendingDown, title: "Reduce PUE", desc: "Lower Power Usage Effectiveness by up to 0.4 points", value: "0.4", unit: "PUE reduction", color: "text-secondary" },
    { icon: Zap, title: "Energy Savings", desc: "Reduce cooling energy consumption", value: "25%", unit: "cooling reduction", color: "text-primary" },
    { icon: Clock, title: "Uptime Improvement", desc: "Prevent thermal-related outages", value: "99.99%", unit: "target uptime", color: "text-secondary" },
    { icon: Shield, title: "Risk Prevention", desc: "Early warning for environmental issues", value: "50%", unit: "fewer incidents", color: "text-destructive" }
  ];

  const caseStudies = [
    {
      facility: "Rack Centre",
      location: "Lagos, Nigeria",
      savings: "₦85M",
      reduction: "28%",
      image: "https://images.pexels.com/photos/1181312/pexels-photo-1181312.jpeg?w=600&h=400&fit=crop",
      description: "Tier III data center reduced cooling costs with thermal optimization"
    },
    {
      facility: "MainOne Data Centre",
      location: "Lagos, Nigeria",
      savings: "₦120M",
      reduction: "32%",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?w=600&h=400&fit=crop",
      description: "Improved PUE from 1.9 to 1.45 with Omhero monitoring"
    },
    {
      facility: "Africa Data Centres",
      location: "Accra, Ghana",
      savings: "$450,000",
      reduction: "35%",
      image: "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?w=600&h=400&fit=crop",
      description: "Achieved 99.999% uptime with proactive environmental monitoring"
    }
  ];

  const rackMetrics = [
    { rack: "Rack A1", temp: "22°C", humidity: "45%", load: "4.2 kW", status: "Optimal", color: "text-secondary" },
    { rack: "Rack B3", temp: "24°C", humidity: "48%", load: "5.1 kW", status: "Optimal", color: "text-secondary" },
    { rack: "Rack C2", temp: "27°C", humidity: "52%", load: "6.8 kW", status: "Warning", color: "text-destructive" },
    { rack: "Rack D4", temp: "21°C", humidity: "43%", load: "3.9 kW", status: "Optimal", color: "text-secondary" }
  ];

  const pueMetrics = [
    { metric: "Current PUE", value: "1.85", target: "1.45", status: "Needs Improvement", color: "text-destructive" },
    { metric: "Cooling Efficiency", value: "68%", target: "85%", status: "In Progress", color: "text-primary" },
    { metric: "IT Load", value: "2.4 MW", target: "2.8 MW", status: "Good", color: "text-secondary" }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden bg-theme">
      {/* Dark Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="theme-grid" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link to="/solutions" className="text-secondary hover:text-secondary/80 transition-colors inline-flex items-center gap-2 group">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-secondary text-sm font-medium mb-6 mx-auto md:mx-0 w-fit">
              <Cloud className="w-4 h-4" />
              Critical Infrastructure
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight text-center md:text-left">
              Data <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Centres</span>
            </h1>
            <p className="text-base sm:text-lg text-foreground/70 mb-6 leading-relaxed text-center md:text-left">
              Precision power usage effectiveness (PUE) tracking. Environmental and thermal risk alerts for mission-critical infrastructure.
            </p>
            <p className="text-foreground/60 mb-8 text-center md:text-left">
              Data centers demand precision. Omhero delivers granular power monitoring with PUE tracking, environmental sensors, and thermal management alerts to help you maintain optimal operating conditions while minimizing energy waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white shadow-lg shadow-secondary/20 w-full sm:w-auto justify-center">
                  Request Consultation <Sparkles className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-secondary/30 text-foreground hover:bg-secondary/10 w-full sm:w-auto justify-center">
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
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-secondary/20 to-primary/10 rounded-3xl p-6 border border-border backdrop-blur-sm overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?w=800&h=600&fit=crop"
                alt="Data Centre Server Room"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md rounded-xl p-3 border border-secondary/30">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xs text-foreground/60">Current PUE</div>
                    <div className="text-base sm:text-lg font-bold text-secondary">1.85</div>
                  </div>
                  <div className="border-l border-border pl-2">
                    <div className="text-xs text-foreground/60">IT Load</div>
                    <div className="text-base sm:text-lg font-bold text-foreground">2.4 MW</div>
                  </div>
                  <div className="border-l border-border pl-2">
                    <div className="text-xs text-foreground/60">Cooling</div>
                    <div className="text-base sm:text-lg font-bold text-secondary">68% Eff.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* PUE Optimization Section */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl p-1">
            <div className="bg-muted/60 backdrop-blur-md rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-secondary text-sm font-medium mb-4 mx-auto md:mx-0 w-fit">
                    <Gauge className="w-4 h-4" />
                    PUE Optimization
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4 text-center md:text-left">
                    Optimize Your <span className="text-secondary">PUE</span>
                  </h2>
                  <p className="text-foreground/70 mb-6 text-center md:text-left">
                    Power Usage Effectiveness is the industry standard metric for data center efficiency. Omhero helps you track and improve it.
                  </p>
                  <div className="space-y-4">
                    {pueMetrics.map((metric, index) => (
                      <div key={index} className="flex flex-col sm:flex-row justify-between items-center py-2 border-b border-border gap-2 sm:gap-0">
                        <span className="text-foreground/70 text-center sm:text-left">{metric.metric}</span>
                        <div className="text-center sm:text-right">
                          <span className="text-foreground font-bold">{metric.value}</span>
                          <span className="text-foreground/50 text-sm mx-2">→</span>
                          <span className="text-secondary font-bold">{metric.target}</span>
                          <span className={`text-xs ml-2 ${metric.color} block sm:inline-block`}>({metric.status})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-muted/40 rounded-2xl p-6 text-center border border-border">
                    <div className="text-5xl sm:text-6xl font-bold text-secondary mb-2">1.45</div>
                    <div className="text-sm text-foreground/60 mb-4">Target PUE with Omhero</div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-[78%] h-full bg-gradient-to-r from-secondary to-primary rounded-full" />
                    </div>
                    <div className="flex justify-between text-xs text-foreground/50 mt-2">
                      <span>Current: 1.85</span>
                      <span>Target: 1.45</span>
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 bg-secondary rounded-full p-2 shadow-lg">
                    <TrendingDown className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rack Monitoring Preview */}
        <div className="mb-24">
          <div className="bg-muted/40 backdrop-blur-md rounded-2xl p-6 md:p-12 border border-border">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground text-center mb-4">
              Rack-Level <span className="text-secondary">Monitoring</span>
            </h2>
            <p className="text-foreground/70 text-center mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Real-time visibility of temperature, humidity, and power draw per rack
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 text-foreground/60 font-medium">Rack</th>
                    <th className="text-left p-3 text-foreground/60 font-medium">Temperature</th>
                    <th className="text-left p-3 text-foreground/60 font-medium">Humidity</th>
                    <th className="text-left p-3 text-foreground/60 font-medium">Power Load</th>
                    <th className="text-left p-3 text-foreground/60 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rackMetrics.map((rack, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="p-3 text-foreground font-medium">{rack.rack}</td>
                      <td className="p-3 text-foreground">{rack.temp}</td>
                      <td className="p-3 text-foreground">{rack.humidity}</td>
                      <td className="p-3 text-foreground">{rack.load}</td>
                      <td className={`p-3 ${rack.color} font-medium`}>{rack.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4 text-center">
              Data Centre <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Features</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto text-center">
              Comprehensive monitoring for mission-critical facilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-muted/40 backdrop-blur-md rounded-xl p-6 border border-border hover:border-secondary/50 transition-all hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto md:mx-0`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 text-center md:text-left">{feature.title}</h3>
                <p className="text-foreground/60 text-sm text-center md:text-left">{feature.desc}</p>
              </motion.div>
            ))}
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
                className="bg-muted/40 backdrop-blur-md rounded-xl p-6 text-center border border-border hover:border-secondary/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary/30 to-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1 text-center">{benefit.value}</h3>
                <p className="text-sm font-semibold text-foreground/70 mb-1 text-center">{benefit.title}</p>
                <p className="text-xs text-foreground/50 text-center">{benefit.unit}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground text-center mb-12">
            Data Centre <span className="text-secondary">Success Stories</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/40 backdrop-blur-md rounded-xl overflow-hidden border border-border hover:border-secondary/30 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image}
                    alt={study.facility}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 right-4 bg-secondary/90 rounded-full px-2 py-1">
                    <span className="text-xs font-bold text-white">{study.reduction} saved</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1 text-center md:text-left">{study.facility}</h3>
                  <p className="text-sm text-foreground/60 mb-3 text-center md:text-left">{study.location}</p>
                  <p className="text-foreground/70 text-sm mb-4 text-center md:text-left">{study.description}</p>
                  <div className="flex justify-between items-center pt-3 border-t border-border">
                    <div>
                      <div className="text-xs text-foreground/60 text-center md:text-left">Annual Savings</div>
                      <div className="text-lg font-bold text-secondary text-center md:text-left">{study.savings}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-foreground/60 text-center md:text-right">PUE Improvement</div>
                      <div className="text-lg font-bold text-foreground text-center md:text-right">{study.reduction}</div>
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
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 sm:p-12 border border-border backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">Ready to Optimize Your Data Centre?</h3>
            <p className="text-base sm:text-lg text-foreground/70 mb-8 max-w-2xl mx-auto text-center">
              Join leading data centres already improving PUE and reducing operational costs with Omhero.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white shadow-lg shadow-secondary/20 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto justify-center">
                  Schedule Facility Assessment <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-secondary/30 text-foreground hover:bg-secondary/10 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto justify-center">
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