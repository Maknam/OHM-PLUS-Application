import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Activity, 
  BarChart3, 
  TrendingDown, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Gauge,
  LineChart,
  Zap,
  Clock,
  Shield,
  Users,
  Award,
  Globe,
  Eye,
  Cpu,
  Database
} from "lucide-react";

export default function Energy() {
  const services = [
    {
      title: "Energy Monitoring",
      icon: Eye,
      description: "Real-time tracking of your electricity consumption across all circuits and appliances.",
      longDescription: "Our advanced monitoring system provides real-time visibility into your energy usage patterns. Track consumption at circuit level, identify peak usage periods, and get instant alerts for abnormal consumption.",
      features: [
        "Real-time consumption tracking",
        "Circuit-level monitoring",
        "Peak usage identification",
        "Instant consumption alerts",
        "Historical data logging",
        "Mobile app access"
      ],
      gradient: "from-[#004B9E] to-[#004B9E]/70",
      stats: { accuracy: "99.9%", response: "< 1s" }
    },
    {
      title: "Aggregation",
      icon: Database,
      description: "Centralized collection and consolidation of energy data from multiple sources.",
      longDescription: "Aggregate energy data from multiple meters, buildings, or locations into a single unified dashboard. Perfect for property managers and businesses with multiple sites.",
      features: [
        "Multi-site data consolidation",
        "Unified dashboard view",
        "Cross-location comparison",
        "Automated data collection",
        "Custom reporting",
        "API access for integration"
      ],
      gradient: "from-[#0D9444] to-[#0D9444]/70",
      stats: { properties: "Unlimited", uptime: "99.99%" }
    },
    {
      title: "Analytics",
      icon: LineChart,
      description: "Deep insights into your energy usage patterns with actionable recommendations.",
      longDescription: "Leverage AI-powered analytics to understand your energy consumption patterns. Get detailed reports, trend analysis, and predictive insights to optimize your energy usage.",
      features: [
        "AI-powered insights",
        "Trend analysis",
        "Predictive analytics",
        "Custom report generation",
        "Cost breakdown by appliance",
        "Carbon footprint tracking"
      ],
      gradient: "from-[#004B9E] to-[#004B9E]/70",
      stats: { accuracy: "99.5%", insights: "Real-time" }
    },
    {
      title: "Optimisation",
      icon: TrendingDown,
      description: "Intelligent recommendations to reduce energy waste and lower costs.",
      longDescription: "Get smart recommendations to optimize your energy consumption. Identify inefficiencies, automate load shedding, and achieve significant cost savings with data-driven decisions.",
      features: [
        "Automated load management",
        "Cost-saving recommendations",
        "Peak demand reduction",
        "Scheduling optimization",
        "ROI calculations",
        "Performance benchmarking"
      ],
      gradient: "from-[#0D9444] to-[#0D9444]/70",
      stats: { savings: "25-35%", roi: "3-6 months" }
    }
  ];

  const benefits = [
    { icon: TrendingDown, title: "Energy Savings", desc: "Reduce consumption by up to 35%", value: "35%", color: "text-[#0D9444]" },
    { icon: Clock, title: "Real-time Data", desc: "Updates every 5 seconds", value: "5s", color: "text-[#004B9E]" },
    { icon: Shield, title: "Reliability", desc: "99.9% platform uptime", value: "99.9%", color: "text-[#0D9444]" },
    { icon: Globe, title: "Multi-location", desc: "Monitor unlimited sites", value: "Unlimited", color: "text-[#004B9E]" }
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
            <Activity className="w-4 h-4" />
            Complete Energy Management
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Energy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9444] to-[#004B9E]">Consumption</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Take control of your energy usage with our comprehensive suite of monitoring, aggregation, analytics, and optimization services. Reduce costs, improve efficiency, and achieve sustainability goals.
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
                    <h4 className="text-sm font-semibold text-[#0D9444] mb-3">Key Features:</h4>
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
                        <div className="text-xs text-foreground/50">Accuracy</div>
                        <div className="text-sm font-bold text-[#0D9444]">{service.stats?.accuracy || "99.9%"}</div>
                      </div>
                      <div>
                        <div className="text-xs text-foreground/50">Response</div>
                        <div className="text-sm font-bold text-[#004B9E]">{service.stats?.response || "Real-time"}</div>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button className="bg-[#FF4E00] hover:bg-[#E04500] text-white text-sm">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
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
          <div className="bg-gradient-to-r from-[#004B9E]/20 to-[#0D9444]/20 rounded-2xl p-8 border border-border backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Optimize Your Energy Usage?</h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Get started with our energy consumption services and start saving today.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-[#FF4E00] hover:bg-[#E04500] text-white shadow-lg shadow-[#FF4E00]/30">
                Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}