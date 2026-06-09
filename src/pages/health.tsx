import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Zap, 
  AlertTriangle, 
  Droplets, 
  Shield, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Wifi,
  Gauge,
  Clock,
  Activity,
  Users,
  Award,
  Globe,
  Eye,
  Cpu,
  Database,
  Radio,
  Thermometer
} from "lucide-react";

export default function Health() {
  const services = [
    {
      title: "Wiring Systems Monitoring",
      icon: Radio,
      description: "Continuous monitoring of electrical wiring health to prevent hazards.",
      longDescription: "Our advanced wiring monitoring system detects potential issues before they become dangerous. Track wiring temperature, detect loose connections, and monitor insulation degradation in real-time.",
      features: [
        "Continuous wiring health tracking",
        "Temperature monitoring",
        "Loose connection detection",
        "Insulation degradation alerts",
        "Real-time fault detection",
        "Preventive maintenance alerts"
      ],
      gradient: "from-[#004B9E] to-[#004B9E]/70",
      stats: { coverage: "Full circuit", response: "Instant" }
    },
    {
      title: "Fault Detection",
      icon: AlertTriangle,
      description: "Early detection of electrical faults before they cause damage.",
      longDescription: "Our intelligent fault detection system identifies electrical anomalies including short circuits, overloads, and arc faults instantly. Prevent equipment damage and fire hazards with early warnings.",
      features: [
        "Arc fault detection",
        "Short circuit identification",
        "Overload protection",
        "Ground fault detection",
        "Real-time alerts",
        "Automatic fault logging"
      ],
      gradient: "from-[#FF4E00] to-[#FF4E00]/70",
      stats: { detection: "< 1ms", accuracy: "99.5%" }
    },
    {
      title: "Leakage & Earthing Checks",
      icon: Droplets,
      description: "Comprehensive leakage current and earthing system verification.",
      longDescription: "Ensure your electrical system is safe with our leakage current monitoring and earthing integrity checks. Detect dangerous leakage paths and verify proper grounding to protect against electric shocks.",
      features: [
        "Leakage current monitoring",
        "Earthing resistance testing",
        "Ground continuity verification",
        "Touch voltage measurement",
        "Compliance reporting",
        "Remediation recommendations"
      ],
      gradient: "from-[#0D9444] to-[#0D9444]/70",
      stats: { accuracy: "99.9%", safety: "IEC compliant" }
    }
  ];

  const benefits = [
    { icon: Shield, title: "Hazard Prevention", desc: "Reduce fire risks", value: "85%", color: "text-[#FF4E00]" },
    { icon: Clock, title: "Response Time", desc: "Instant alerts", value: "< 1s", color: "text-[#004B9E]" },
    { icon: Activity, title: "Coverage", desc: "Full system", value: "100%", color: "text-[#0D9444]" },
    { icon: Award, title: "Compliance", desc: "Safety standards", value: "IEC", color: "text-[#004B9E]" }
  ];

  const warningSigns = [
    { sign: "Flickering Lights", severity: "Medium", action: "Check connections" },
    { sign: "Burning Smell", severity: "Critical", action: "Immediate inspection" },
    { sign: "Warm Outlets", severity: "High", action: "Replace outlets" },
    { sign: "Circuit Breaker Trips", severity: "High", action: "Check overloads" }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004B9E]/5 via-background to-[#FF4E00]/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF4E00]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#004B9E]/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF4E00]/5 rounded-full blur-[100px]" />
        <div className="theme-grid" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4E00]/20 backdrop-blur-sm border border-[#FF4E00]/30 text-[#FF4E00] text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Safety First
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Electrical Systems <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E00] to-[#004B9E]">Health Check</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive electrical safety assessments including wiring monitoring, fault detection, and leakage checks. Protect your property and loved ones from electrical hazards.
          </p>
        </motion.div>

        {/* Benefits Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-muted/40 backdrop-blur-sm rounded-2xl p-6 text-center border border-border hover:border-[#FF4E00]/30 transition-all"
            >
              <div className={`text-3xl md:text-4xl font-bold ${benefit.color} mb-2`}>{benefit.value}</div>
              <div className="text-sm font-semibold text-foreground/70 mb-1">{benefit.title}</div>
              <div className="text-xs text-foreground/50">{benefit.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Warning Signs Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-[#FF4E00]/20 to-[#004B9E]/20 rounded-2xl p-1">
            <div className="bg-muted/60 backdrop-blur-md rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground text-center mb-6">Warning Signs to Watch For</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 text-foreground/60 font-medium">Warning Sign</th>
                      <th className="text-left p-3 text-foreground/60 font-medium">Severity</th>
                      <th className="text-left p-3 text-foreground/60 font-medium">Recommended Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {warningSigns.map((warning, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="p-3 text-foreground">{warning.sign}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            warning.severity === "Critical" ? "bg-[#FF4E00]/20 text-[#FF4E00]" :
                            warning.severity === "High" ? "bg-[#FF4E00]/10 text-[#FF4E00]/80" :
                            "bg-[#0D9444]/10 text-[#0D9444]"
                          }`}>
                            {warning.severity}
                          </span>
                        </td>
                        <td className="p-3 text-foreground/70">{warning.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF4E00] to-[#004B9E] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
              <Card className="relative h-full bg-muted/40 backdrop-blur-md border border-border hover:border-[#FF4E00]/40 transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto md:mx-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 text-center md:text-left">{service.title}</h3>
                  <p className="text-foreground/70 text-sm mb-3 text-center md:text-left">{service.description}</p>
                  <p className="text-foreground/60 text-xs leading-relaxed mb-4 text-center md:text-left">{service.longDescription}</p>
                  
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-[#FF4E00] mb-2 text-center md:text-left">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-xs text-foreground/60">
                          <CheckCircle2 className="w-3 h-3 text-[#0D9444] shrink-0" />
                          <span className="text-[11px]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex gap-3">
                      <div>
                        <div className="text-[10px] text-foreground/50">Detection</div>
                        <div className="text-xs font-bold text-[#FF4E00]">{service.stats?.detection || "Continuous"}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-foreground/50">Accuracy</div>
                        <div className="text-xs font-bold text-[#004B9E]">{service.stats?.accuracy || "99.5%"}</div>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button className="bg-[#FF4E00] hover:bg-[#E04500] text-white text-xs h-8 px-3">
                        Learn More <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#FF4E00]/20 to-[#004B9E]/20 rounded-2xl p-8 border border-border backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ensure Your Electrical Safety Today</h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Schedule a comprehensive electrical health check for your home or business.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-lg shadow-[#FF4E00]/30">
                Request Safety Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}