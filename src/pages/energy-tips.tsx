import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Factory, Building2, Lightbulb, Fan, ThermometerSnowflake, Zap, Plug, WashingMachine, Refrigerator, Laptop, Sun, Droplets, Clock, ArrowRight, TrendingDown, Leaf, HardDrive } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function EnergyTips() {
  const [activeCategory, setActiveCategory] = useState("home");
  const [currency, setCurrency] = useState<"NGN" | "GHS">("NGN");
  const [savingsCalculator, setSavingsCalculator] = useState({ acTemp: 24, monthlyBill: 50000 });

  // Exchange rate (approximate: 1 GHS ≈ 100 NGN)
  const exchangeRate = 100;
  
  const formatCurrency = (amountInNGN: number) => {
    if (currency === "NGN") {
      return `₦${Math.round(amountInNGN).toLocaleString()}`;
    } else {
      const amountInGHS = amountInNGN / exchangeRate;
      return `₵${Math.round(amountInGHS).toLocaleString()}`;
    }
  };

  const categories = [
    {
      id: "home",
      title: "At Home",
      icon: Home,
      color: "from-primary to-primary/70",
      bgColor: "bg-primary/10",
      tips: [
        {
          title: "Optimize Air Conditioning",
          desc: "Set your AC to 24°C instead of 18°C. Every degree lower increases consumption by 6-8%. Clean filters monthly for optimal performance.",
          icon: ThermometerSnowflake,
          savings: "Up to 25% on cooling costs",
          statNGN: "₦15,000/month saved",
          statGHS: "₵150/month saved",
          color: "from-primary to-primary/70"
        },
        {
          title: "Switch to LEDs",
          desc: "Replace old incandescent bulbs with LEDs. They use up to 80% less energy and last 25x longer. Start with your most-used lights first.",
          icon: Lightbulb,
          savings: "80% less energy",
          statNGN: "₦5,000/year per bulb",
          statGHS: "₵50/year per bulb",
          color: "from-destructive to-destructive/70"
        },
        {
          title: "Unplug Idle Electronics",
          desc: "TVs, decoders, chargers, and computers draw 'vampire power' even when off. Unplug them or use smart power strips to eliminate phantom load.",
          icon: Plug,
          savings: "5-10% of your bill",
          statNGN: "Up to ₦10,000/month",
          statGHS: "Up to ₵100/month",
          color: "from-secondary to-secondary/70"
        },
        {
          title: "Efficient Refrigeration",
          desc: "Set fridge to 3-4°C and freezer to -18°C. Keep coils clean and ensure door seals are tight. Don't put hot food directly in the fridge.",
          icon: Refrigerator,
          savings: "15% energy reduction",
          statNGN: "₦8,000/month saved",
          statGHS: "₵80/month saved",
          color: "from-primary to-primary/70"
        },
        {
          title: "Wash Smart",
          desc: "Use cold water for laundry when possible. Modern detergents work effectively at lower temperatures. Wash full loads and clean the lint filter.",
          icon: WashingMachine,
          savings: "90% of washer energy",
          statNGN: "Hot water heating savings",
          statGHS: "Hot water heating savings",
          color: "from-secondary to-secondary/70"
        },
        {
          title: "Natural Lighting",
          desc: "Open curtains and blinds during daylight hours. Use light-colored walls and mirrors to reflect natural light deeper into rooms.",
          icon: Sun,
          savings: "Free lighting",
          statNGN: "Zero energy cost",
          statGHS: "Zero energy cost",
          color: "from-destructive to-destructive/70"
        }
      ]
    },
    {
      id: "business",
      title: "For Businesses",
      icon: Building2,
      color: "from-secondary to-secondary/70",
      bgColor: "bg-secondary/10",
      tips: [
        {
          title: "Smart Lighting Controls",
          desc: "Install motion sensors in bathrooms, corridors, and meeting rooms. Use daylight harvesting sensors near windows to dim artificial lights automatically.",
          icon: Lightbulb,
          savings: "30-50% lighting savings",
          statNGN: "6-12 month ROI",
          statGHS: "6-12 month ROI",
          color: "from-secondary to-secondary/70"
        },
        {
          title: "Office Equipment Management",
          desc: "Configure computers to sleep after 15 minutes. Enable power management on all devices. Turn off printers, copiers, and servers overnight.",
          icon: Laptop,
          savings: "15-20% on equipment",
          statNGN: "₦50,000+ annually",
          statGHS: "₵500+ annually",
          color: "from-primary to-primary/70"
        },
        {
          title: "HVAC Optimization",
          desc: "Schedule quarterly maintenance for commercial HVAC. Clean filters monthly. Set thermostats to 22°C during occupied hours and 18°C when empty.",
          icon: Fan,
          savings: "25-40% HVAC savings",
          statNGN: "Extended equipment life",
          statGHS: "Extended equipment life",
          color: "from-primary to-primary/70"
        },
        {
          title: "Energy Audits",
          desc: "Conduct regular energy audits to identify waste. Use sub-meters for different departments. Track energy intensity (kWh per product/service unit).",
          icon: TrendingDown,
          savings: "10-30% reduction",
          statNGN: "Identify hidden waste",
          statGHS: "Identify hidden waste",
          color: "from-secondary to-secondary/70"
        }
      ]
    },
    {
      id: "industrial",
      title: "For Factories",
      icon: Factory,
      color: "from-destructive to-destructive/70",
      bgColor: "bg-destructive/10",
      tips: [
        {
          title: "Shift Heavy Loads",
          desc: "Schedule energy-intensive processes during off-peak hours. Night shifts can reduce electricity costs by 30-40% depending on your tariff structure.",
          icon: Clock,
          savings: "30-40% cost reduction",
          statNGN: "Lower demand charges",
          statGHS: "Lower demand charges",
          color: "from-destructive to-destructive/70"
        },
        {
          title: "Power Factor Correction",
          desc: "Install capacitor banks to improve power factor to 0.95+. Poor power factor draws more current and attracts utility penalties. ROI typically 6-18 months.",
          icon: Zap,
          savings: "15-25% on bills",
          statNGN: "Avoid PF penalties",
          statGHS: "Avoid PF penalties",
          color: "from-destructive to-destructive/70"
        },
        {
          title: "Motor Upgrades",
          desc: "Replace standard motors with IE3/IE4 High-Efficiency models. Install Variable Frequency Drives (VFDs) for fans, pumps, and compressors.",
          icon: HardDrive,
          savings: "20-40% motor savings",
          statNGN: "2-3 year payback",
          statGHS: "2-3 year payback",
          color: "from-primary to-primary/70"
        },
        {
          title: "Compressed Air Systems",
          desc: "Fix leaks in compressed air systems (often 20-30% of output). Reduce pressure to minimum required. Use variable speed drives for air compressors.",
          icon: Fan,
          savings: "20-50% reduction",
          statNGN: "Major energy user",
          statGHS: "Major energy user",
          color: "from-primary to-primary/70"
        }
      ]
    }
  ];

  const calculateSavings = () => {
    const baselineAC = savingsCalculator.acTemp === 24 ? 25 : 
                       savingsCalculator.acTemp === 22 ? 15 : 0;
    const monthlySavings = (savingsCalculator.monthlyBill * baselineAC) / 100;
    return monthlySavings;
  };

  const currentCategory = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden bg-theme">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-destructive/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="theme-grid" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header with Currency Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 backdrop-blur-sm border border-destructive/30 text-destructive text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4" />
            Smart Energy Tips
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Energy Saving <span className="text-transparent bg-clip-text bg-gradient-to-r from-destructive to-destructive">Tips</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-6">
            Practical advice to help you reduce waste, lower your monthly bills, and maximize the lifespan of your appliances.
          </p>
          
          {/* Currency Toggle */}
          <div className="inline-flex items-center gap-3 bg-muted/40 backdrop-blur-sm rounded-full p-1 border border-border">
            <button
              onClick={() => setCurrency("NGN")}
              className={`px-6 py-2 rounded-full transition-all font-medium ${
                currency === "NGN" 
                  ? "bg-gradient-to-r from-secondary to-secondary text-white shadow-lg" 
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              ₦ Naira (NGN)
            </button>
            <button
              onClick={() => setCurrency("GHS")}
              className={`px-6 py-2 rounded-full transition-all font-medium ${
                currency === "GHS" 
                  ? "bg-gradient-to-r from-secondary to-secondary text-white shadow-lg" 
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              ₵ Cedi (GHS)
            </button>
          </div>
        </motion.div>

        {/* Savings Calculator Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-secondary/20 via-secondary/20 to-secondary/20 rounded-2xl p-1">
            <div className="bg-muted/60 backdrop-blur-md rounded-xl p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingDown className="w-6 h-6 text-secondary" />
                    <h3 className="text-xl font-bold text-foreground">Savings Calculator</h3>
                  </div>
                  <p className="text-foreground/70 mb-4">
                    See how much you could save by optimizing your AC temperature
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-foreground/60">Current AC Temperature Setting</label>
                      <div className="flex items-center gap-4 mt-2">
                        <button
                          onClick={() => setSavingsCalculator(prev => ({ ...prev, acTemp: 18 }))}
                          className={`px-4 py-2 rounded-lg transition-all ${savingsCalculator.acTemp === 18 ? 'bg-primary text-white' : 'bg-muted/80 text-foreground/60 hover:bg-muted'}`}
                        >
                          18°C
                        </button>
                        <button
                          onClick={() => setSavingsCalculator(prev => ({ ...prev, acTemp: 22 }))}
                          className={`px-4 py-2 rounded-lg transition-all ${savingsCalculator.acTemp === 22 ? 'bg-primary text-white' : 'bg-muted/80 text-foreground/60 hover:bg-muted'}`}
                        >
                          22°C
                        </button>
                        <button
                          onClick={() => setSavingsCalculator(prev => ({ ...prev, acTemp: 24 }))}
                          className={`px-4 py-2 rounded-lg transition-all ${savingsCalculator.acTemp === 24 ? 'bg-secondary text-white' : 'bg-muted/80 text-foreground/60 hover:bg-muted'}`}
                        >
                          24°C (Optimal)
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-foreground/60">
                        Monthly Electricity Bill ({currency === "NGN" ? "₦" : "₵"})
                      </label>
                      <input
                        type="range"
                        min={currency === "NGN" ? "10000" : "100"}
                        max={currency === "NGN" ? "200000" : "2000"}
                        step={currency === "NGN" ? "5000" : "50"}
                        value={currency === "NGN" ? savingsCalculator.monthlyBill : savingsCalculator.monthlyBill / exchangeRate}
                        onChange={(e) => {
                          const value = parseFloat(e.target.value);
                          const valueInNGN = currency === "NGN" ? value : value * exchangeRate;
                          setSavingsCalculator(prev => ({ ...prev, monthlyBill: valueInNGN }));
                        }}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-sm text-foreground/60 mt-1">
                        <span>{currency === "NGN" ? "₦10,000" : "₵100"}</span>
                        <span className="text-foreground font-bold">
                          {formatCurrency(savingsCalculator.monthlyBill)}
                        </span>
                        <span>{currency === "NGN" ? "₦200,000" : "₵2,000"}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center bg-muted/40 rounded-xl p-6 border border-secondary/30">
                  <Leaf className="w-10 h-10 text-secondary mx-auto mb-3" />
                  <div className="text-sm text-foreground/60 mb-1">Potential Monthly Savings</div>
                  <div className="text-4xl font-bold text-secondary mb-2">
                    {formatCurrency(calculateSavings())}
                  </div>
                  <div className="text-sm text-foreground/60">
                    by setting AC to {savingsCalculator.acTemp}°C → 24°C
                  </div>
                  <div className="mt-3 text-xs text-foreground/50">
                    That's {Math.round((calculateSavings() / savingsCalculator.monthlyBill) * 100)}% of your current bill!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === cat.id
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                  : 'bg-muted/40 text-foreground/60 hover:text-foreground border border-border'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span className="font-medium">{cat.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Tips Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory.tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-muted/40 backdrop-blur-md border border-border hover:border-primary/30 transition-all group hover:-translate-y-2 duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${tip.color}`} />
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tip.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <tip.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">{tip.title}</h4>
                    <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                      {tip.desc}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-destructive" />
                        <span className="text-xs text-secondary font-medium">{tip.savings}</span>
                      </div>
                      <div className="text-xs text-foreground/50">
                        {currency === "NGN" ? tip.statNGN : tip.statGHS}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Seasonal Tips Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl p-1">
            <div className="bg-muted/60 backdrop-blur-md rounded-xl p-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-secondary text-sm font-medium mb-4">
                <Clock className="w-4 h-4" />
                Seasonal Tips
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">🌧️ Rainy Season Special</h3>
              <p className="text-foreground/70 mb-4 max-w-2xl mx-auto">
                Use natural ventilation instead of AC when it's cool outside. Clean air filters more frequently during dusty Harmattan season.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Droplets className="w-4 h-4 text-primary" />
                  High humidity? Use dehumidifier mode
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Sun className="w-4 h-4 text-destructive" />
                  Close blinds during peak sun hours
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Myth Busters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-6">
            Energy Myth <span className="text-secondary">Busters</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted/40 rounded-xl p-4 border border-border">
              <p className="text-sm text-foreground/70">❌ "Leaving lights on uses less energy than turning them off and on"</p>
              <p className="text-sm text-secondary mt-2">✓ FALSE - Always turn off lights when leaving a room, even for a few minutes.</p>
            </div>
            <div className="bg-muted/40 rounded-xl p-4 border border-border">
              <p className="text-sm text-foreground/70">❌ "Electronics don't use power when turned off"</p>
              <p className="text-sm text-secondary mt-2">✓ FALSE - Many devices draw "vampire power" - unplug them!</p>
            </div>
            <div className="bg-muted/40 rounded-xl p-4 border border-border">
              <p className="text-sm text-foreground/70">❌ "Higher AC temperature doesn't save much money"</p>
              <p className="text-sm text-secondary mt-2">✓ FALSE - Each degree below 24°C increases consumption by 6-8%!</p>
            </div>
            <div className="bg-muted/40 rounded-xl p-4 border border-border">
              <p className="text-sm text-foreground/70">❌ "LED bulbs are too expensive"</p>
              <p className="text-sm text-secondary mt-2">✓ FALSE - They pay for themselves in 6-12 months and last 25x longer.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA to Omhero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 border border-border backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-3">Want to Track Your Real Savings?</h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Omhero gives you real-time visibility into your energy consumption. See exactly how much you're saving with every energy tip!
            </p>
            <Link to="/product">
              <Button size="lg" className="bg-gradient-to-r from-secondary to-secondary hover:from-secondary/90 hover:to-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/30">
                Learn About Omhero <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}