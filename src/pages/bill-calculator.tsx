import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator, ArrowRight, TrendingDown, Zap, Lightbulb, Fan, Tv, Refrigerator, WashingMachine, Wind, DollarSign, Sparkles, Gauge } from "lucide-react";

export default function BillCalculator() {
  const [propertyType, setPropertyType] = useState("residential");
  const [currency, setCurrency] = useState("NGN");
  const [appliances, setAppliances] = useState({
    ac: 1,
    fridge: 1,
    tv: 2,
    lights: 10,
    fan: 3,
    washingMachine: 1,
  });
  const [hours, setHours] = useState(12);

  // Constants
  const RATES = {
    NGN: 180, // ₦ per kWh
    GHS: 1.5, // GH₵ per kWh
  };
  
  const APPLIANCE_KWH_PER_HOUR = {
    ac: 1.5,
    fridge: 0.15,
    tv: 0.1,
    lights: 0.015,
    fan: 0.075,
    washingMachine: 0.5,
  };

  const applianceIcons = {
    ac: { icon: Wind, label: "Air Conditioners", unit: "units", color: "from-[#004B9E] to-[#004B9E]/70" },
    fridge: { icon: Refrigerator, label: "Refrigerators", unit: "units", color: "from-[#0D9444] to-[#0D9444]/70" },
    tv: { icon: Tv, label: "Televisions", unit: "units", color: "from-[#004B9E] to-[#004B9E]/70" },
    lights: { icon: Lightbulb, label: "Light Bulbs", unit: "bulbs", color: "from-[#FF4E00] to-[#FF4E00]/70" },
    fan: { icon: Fan, label: "Fans", unit: "units", color: "from-[#004B9E] to-[#004B9E]/70" },
    washingMachine: { icon: WashingMachine, label: "Washing Machines", unit: "units", color: "from-[#0D9444] to-[#0D9444]/70" },
  };

  // Calculations
  const calculateDailyKWh = () => {
    let dailyKwh = 0;
    dailyKwh += appliances.ac * APPLIANCE_KWH_PER_HOUR.ac * (hours * 0.7);
    dailyKwh += appliances.fridge * APPLIANCE_KWH_PER_HOUR.fridge * 24;
    dailyKwh += appliances.tv * APPLIANCE_KWH_PER_HOUR.tv * (hours * 0.5);
    dailyKwh += appliances.lights * APPLIANCE_KWH_PER_HOUR.lights * (hours * 0.8);
    dailyKwh += appliances.fan * APPLIANCE_KWH_PER_HOUR.fan * hours;
    dailyKwh += appliances.washingMachine * APPLIANCE_KWH_PER_HOUR.washingMachine * 1;
    return dailyKwh;
  };

  const dailyKwh = calculateDailyKWh();
  const monthlyKwh = dailyKwh * 30;
  
  const mult = propertyType === "commercial" ? 1.3 : 1;
  const billNGN = monthlyKwh * RATES.NGN * mult;
  const billGHS = monthlyKwh * RATES.GHS * mult;
  const currentBill = currency === "NGN" ? billNGN : billGHS;
  const potentialSavings = currentBill * 0.25;
  const co2Saved = (monthlyKwh * 0.42).toFixed(0); // kg CO2 per kWh approx

  const handleApplianceChange = (key: keyof typeof appliances, value: string) => {
    setAppliances(prev => ({ ...prev, [key]: parseInt(value) || 0 }));
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/19191606/pexels-photo-19191606.jpeg?q=80&w=2070')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />
        <div className="theme-grid" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#004B9E]/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0D9444]/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#004B9E]/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B9E]/20 border border-[#004B9E]/30 text-[#0D9444] text-sm font-medium mb-6 backdrop-blur-sm">
            <Calculator className="w-4 h-4" />
            Interactive Tool
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
            Energy Bill <span className="text-[#0D9444]">Calculator</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Estimate your monthly electricity consumption and see how much you could save with Omhero.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Inputs Section */}
          <div className="lg:col-span-7 space-y-6">
            {/* Property Details Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-muted/40 backdrop-blur-md border-[#004B9E]/20 shadow-xl">
                <CardContent className="p-6 md:p-8 space-y-8">
                  <div className="flex items-center gap-3 border-b border-[#004B9E]/30 pb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#004B9E]/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[#0D9444]" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground">Property Details</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label className="text-foreground/70">Property Type</Label>
                      <Select value={propertyType} onValueChange={setPropertyType}>
                        <SelectTrigger className="bg-muted/50 border-[#004B9E]/30 text-foreground">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">🏠 Residential</SelectItem>
                          <SelectItem value="commercial">🏢 Commercial / SME</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-foreground/70">Currency</Label>
                      <Select value={currency} onValueChange={setCurrency}>
                        <SelectTrigger className="bg-muted/50 border-[#004B9E]/30 text-foreground">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="NGN">🇳🇬 Nigerian Naira (₦)</SelectItem>
                          <SelectItem value="GHS">🇬🇭 Ghanaian Cedi (₵)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-foreground/70">Daily Power Supply</Label>
                      <div className="pt-2">
                        <Slider 
                          value={[hours]} 
                          onValueChange={(v) => setHours(v[0])} 
                          max={24} 
                          min={1} 
                          step={1} 
                          className="py-2"
                        />
                        <div className="flex justify-between mt-2 text-xs text-foreground/60">
                          <span>1 hr</span>
                          <span className="text-[#0D9444] font-bold">{hours} hours/day</span>
                          <span>24 hrs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Appliances Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-muted/40 backdrop-blur-md border-[#004B9E]/20 shadow-xl">
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="flex items-center gap-3 border-b border-[#004B9E]/30 pb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#004B9E]/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-[#0D9444]" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground">Appliances & Devices</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(applianceIcons).map(([key, { icon: Icon, label, unit, color }]) => (
                      <div key={key} className="space-y-2 group">
                        <Label className="text-foreground/70 text-xs flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center p-1`}>
                            <Icon className="w-3 h-3 text-white" />
                          </div>
                          {label}
                        </Label>
                        <Input 
                          type="number" 
                          min="0" 
                          value={appliances[key as keyof typeof appliances]} 
                          onChange={(e) => handleApplianceChange(key as keyof typeof appliances, e.target.value)}
                          className="bg-muted/50 border-[#004B9E]/30 text-foreground focus:border-[#0D9444] transition-all group-hover:border-[#004B9E]/60"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="sticky top-24"
            >
              <Card className="bg-gradient-to-br from-[#004B9E]/20 via-muted/60 to-muted/80 backdrop-blur-md border-[#004B9E]/30 shadow-2xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#004B9E]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0D9444]/10 rounded-full blur-3xl" />
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <Gauge className="w-5 h-5 text-[#0D9444]" />
                    <h3 className="text-lg font-display font-bold text-foreground">Your Energy Profile</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Monthly Usage */}
                    <div className="text-center p-4 bg-muted/40 rounded-2xl border border-[#004B9E]/20">
                      <p className="text-sm text-foreground/70 mb-2">Monthly Energy Consumption</p>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-6xl font-display font-bold text-[#0D9444]" data-testid="text-monthly-kwh">
                          {Math.round(monthlyKwh).toLocaleString()}
                        </span>
                        <span className="text-xl font-bold text-foreground">kWh</span>
                      </div>
                      <p className="text-xs text-foreground/60 mt-2">≈ {Math.round(dailyKwh)} kWh per day</p>
                    </div>

                    {/* Estimated Bill */}
                    <div className="space-y-3">
                      <p className="text-sm text-foreground/70">Estimated Monthly Bill</p>
                      
                      <div className="bg-gradient-to-r from-[#004B9E]/30 to-[#004B9E]/10 rounded-xl p-5 border border-[#004B9E]/30">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="text-xs text-foreground/60">Total Amount</span>
                            <div className="text-4xl font-bold text-foreground mt-1">
                              {currency === "NGN" ? "₦" : "₵"}{Math.round(currentBill).toLocaleString()}
                            </div>
                          </div>
                          <DollarSign className="w-8 h-8 text-[#004B9E]/50" />
                        </div>
                        <p className="text-xs text-foreground/60">
                          Based on {propertyType === "residential" ? "residential" : "commercial"} rates
                          {propertyType === "commercial" && " (+30% premium)"}
                        </p>
                      </div>
                    </div>

                    {/* Savings Card - Green for success */}
                    <div className="bg-gradient-to-r from-[#0D9444]/20 to-[#0D9444]/10 rounded-xl p-5 border border-[#0D9444]/30">
                      <div className="flex gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#0D9444]/30 flex items-center justify-center shrink-0">
                          <TrendingDown className="w-5 h-5 text-[#0D9444]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground text-sm">Potential Savings with Omhero</h4>
                          <p className="text-xs text-foreground/70 mt-1">Real-time monitoring & optimization</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <span className="text-2xl font-bold text-[#0D9444]">Up to 25%</span>
                          <p className="text-xs text-foreground/60">reduction possible</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-foreground">
                            {currency === "NGN" ? "₦" : "₵"}{Math.round(potentialSavings).toLocaleString()}
                          </p>
                          <p className="text-xs text-foreground/60">saved per month</p>
                        </div>
                      </div>
                    </div>

                    {/* Environmental Impact */}
                    <div className="bg-[#004B9E]/10 rounded-xl p-4 border border-[#004B9E]/20">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#004B9E]/20 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-[#0D9444]" />
                        </div>
                        <div>
                          <p className="text-xs text-foreground/60">Carbon Footprint Saved</p>
                          <p className="text-sm font-bold text-[#0D9444]">~{co2Saved} kg CO₂/year</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button - 10% ACTION HIGHLIGHT: Orange (#FF4E00) */}
                    <Link to="/contact">
                      <Button className="w-full bg-[#FF4E00] hover:bg-[#E04500] text-white h-12 text-base gap-2 group mt-4 shadow-lg shadow-[#FF4E00]/20">
                        Get Omhero Today <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 pt-8 border-t border-border"
        >
          <p className="text-sm text-foreground/60">
            <span className="inline-flex items-center gap-1">⚡</span> Estimates based on average consumption patterns • Actual savings may vary
          </p>
        </motion.div>
      </div>
    </div>
  );
}