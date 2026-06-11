import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Wrench, 
  Search,  
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Gauge,
  Clock,
  Shield,
  Users,
  Award,
  Globe,
  Eye,
  Cpu,
  Zap,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

export default function Repairs() {
  const services = [
    {
      title: "Fault Finding & Diagnostics",
      icon: Search,
      description: "Advanced diagnostic techniques to identify electrical faults quickly.",
      longDescription: "Our certified technicians use state-of-the-art diagnostic equipment to locate and identify electrical faults with precision. From intermittent issues to complete failures, we find the root cause.",
      features: [
        "Comprehensive fault location",
        "Thermal imaging inspection",
        "Circuit tracing",
        "Load analysis",
        "Root cause identification",
        "Detailed diagnostic reports"
      ],
      gradient: "from-[#004B9E] to-[#004B9E]/70",
      stats: { time: "Fast response", accuracy: "99% first-time" }
    },
    {
      title: "Repairs & Remedial Works",
      icon: Wrench,
      description: "Professional repairs and remedial work to restore electrical safety.",
      longDescription: "Once faults are identified, our team performs professional repairs and remedial works to restore your electrical system to optimal condition. We use high-quality materials and follow industry best practices.",
      features: [
        "Circuit repairs and replacements",
        "Wiring remediation",
        "Component replacement",
        "Panel upgrades",
        "Safety device installation",
        "Post-repair testing"
      ],
      gradient: "from-[#0D9444] to-[#0D9444]/70",
      stats: { warranty: "1 year", quality: "Certified" }
    }
  ];

  const benefits = [
    { icon: Clock, title: "Response Time", desc: "Same-day service", value: "< 24h", color: "text-[#004B9E]" },
    { icon: Shield, title: "Certified", desc: "Licensed technicians", value: "100%", color: "text-[#0D9444]" },
    { icon: Award, title: "Warranty", desc: "Workmanship guarantee", value: "1 Year", color: "text-[#004B9E]" },
    { icon: Users, title: "Satisfaction", desc: "Customer rating", value: "98%", color: "text-[#0D9444]" }
  ];

  const commonIssues = [
    { issue: "Circuit Breaker Tripping", cause: "Overload or short circuit", solution: "Load balancing or circuit repair", urgency: "High" },
    { issue: "Flickering Lights", cause: "Loose connections", solution: "Tighten or replace wiring", urgency: "Medium" },
    { issue: "Dead Outlets", cause: "Wiring fault or tripped GFCI", solution: "Outlet replacement or reset", urgency: "Medium" },
    { issue: "Burning Smell", cause: "Overheating wires", solution: "Immediate inspection", urgency: "Critical" }
  ];

  const repairProcess = [
    { step: 1, title: "Initial Assessment", description: "Diagnose the problem and provide estimate", duration: "1-2 hours" },
    { step: 2, title: "Fault Diagnosis", description: "Locate and identify root cause", duration: "2-4 hours" },
    { step: 3, title: "Repair & Remediation", description: "Fix the issue professionally", duration: "Varies" },
    { step: 4, title: "Testing & Verification", description: "Ensure system is safe and functional", duration: "1-2 hours" }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004B9E]/5 via-background to-[#0D9444]/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#004B9E]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0D9444]/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#004B9E]/5 rounded-full blur-[100px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#004B9E]/20 backdrop-blur-sm border border-[#004B9E]/30 text-[#0D9444] text-sm font-medium mb-6">
            <Wrench className="w-4 h-4" />
            Professional Service
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Diagnostics & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9444] to-[#004B9E]">Repairs</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Expert fault finding, diagnostics, and professional repair services for all your electrical needs. Fast response times and certified technicians.
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
              className="bg-muted/40 backdrop-blur-sm rounded-2xl p-6 text-center border border-border hover:border-[#004B9E]/30 transition-all"
            >
              <div className={`text-3xl md:text-4xl font-bold ${benefit.color} mb-2`}>{benefit.value}</div>
              <div className="text-sm font-semibold text-foreground/70 mb-1">{benefit.title}</div>
              <div className="text-xs text-foreground/50">{benefit.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Common Issues Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-[#004B9E]/20 to-[#0D9444]/20 rounded-2xl p-1">
            <div className="bg-muted/60 backdrop-blur-md rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground text-center mb-6">Common Electrical Issues We Fix</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 text-foreground/60 font-medium">Issue</th>
                      <th className="text-left p-3 text-foreground/60 font-medium">Common Cause</th>
                      <th className="text-left p-3 text-foreground/60 font-medium">Solution</th>
                      <th className="text-left p-3 text-foreground/60 font-medium">Urgency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commonIssues.map((issue, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="p-3 text-foreground font-medium">{issue.issue}</td>
                        <td className="p-3 text-foreground/70">{issue.cause}</td>
                        <td className="p-3 text-foreground/70">{issue.solution}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            issue.urgency === "Critical" ? "bg-[#FF4E00]/20 text-[#FF4E00]" :
                            issue.urgency === "High" ? "bg-[#FF4E00]/10 text-[#FF4E00]/80" :
                            "bg-[#0D9444]/10 text-[#0D9444]"
                          }`}>
                            {issue.urgency}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0D9444] to-[#004B9E] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
              <Card className="relative h-full bg-muted/40 backdrop-blur-md border border-border hover:border-[#0D9444]/40 transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{service.description}</p>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">{service.longDescription}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#0D9444] mb-3">Our Process:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-foreground/60">
                          <CheckCircle2 className="w-3 h-3 text-[#0D9444] shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex gap-4">
                      <div>
                        <div className="text-xs text-foreground/50">{service.stats?.time ? "Response" : "Warranty"}</div>
                        <div className="text-sm font-bold text-[#0D9444]">{service.stats?.time || service.stats?.warranty}</div>
                      </div>
                      <div>
                        <div className="text-xs text-foreground/50">{service.stats?.accuracy ? "Success Rate" : "Quality"}</div>
                        <div className="text-sm font-bold text-[#004B9E]">{service.stats?.accuracy || service.stats?.quality}</div>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button className="bg-[#FF4E00] hover:bg-[#E04500] text-white text-sm">
                        Request Service <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Repair Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Our Repair Process</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {repairProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-muted/40 backdrop-blur-sm rounded-xl p-5 text-center border border-border hover:border-[#0D9444]/30 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D9444] to-[#004B9E] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-xs text-foreground/60 mb-2">{step.description}</p>
                  <span className="text-[10px] text-[#0D9444]">{step.duration}</span>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-6 h-0.5 bg-gradient-to-r from-[#0D9444] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#004B9E]/20 to-[#0D9444]/20 rounded-2xl p-8 border border-border backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-4">Need Emergency Electrical Service?</h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Our certified technicians are ready to help with fast response times and quality workmanship.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-lg shadow-[#FF4E00]/30">
                  Request Emergency Service <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-[#004B9E]/30 text-foreground hover:bg-[#004B9E]/10">
                  Schedule Inspection
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}