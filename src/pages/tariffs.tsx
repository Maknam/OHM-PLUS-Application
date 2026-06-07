import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Calculator, AlertCircle, TrendingUp, TrendingDown, Zap, Info, DollarSign, Activity, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Tariffs() {
  const [activeTab, setActiveTab] = useState("ghana");

  const ghanaTariffs = [
    { category: "Residential (0 - 300 kWh)", rate: "GH₵ 1.15", charge: "GH₵ 10.00", savings: "Best for small homes" },
    { category: "Residential (301 - 600 kWh)", rate: "GH₵ 1.45", charge: "GH₵ 10.00", savings: "Standard home usage" },
    { category: "Residential (600+ kWh)", rate: "GH₵ 1.80", charge: "GH₵ 10.00", savings: "High consumption homes" },
    { category: "Non-Residential (Small)", rate: "GH₵ 1.30", charge: "GH₵ 15.00", savings: "Small businesses" },
    { category: "Non-Residential (Medium)", rate: "GH₵ 1.65", charge: "GH₵ 25.00", savings: "Medium enterprises" },
  ];

  const nigeriaTariffs = [
    { category: "Band A (Min 20hrs)", rate: "₦ 206.80", desc: "Premium Areas", savings: "20+ hours daily", color: "text-destructive" },
    { category: "Band B (Min 16hrs)", rate: "₦ 63.30", desc: "Urban Areas", savings: "16-20 hours daily", color: "text-destructive" },
    { category: "Band C (Min 12hrs)", rate: "₦ 42.44", desc: "Semi-Urban Areas", savings: "12-16 hours daily", color: "text-secondary" },
    { category: "Band D (Min 8hrs)", rate: "₦ 29.50", desc: "Rural Areas", savings: "8-12 hours daily", color: "text-primary" },
    { category: "Band E (Min 4hrs)", rate: "₦ 29.50", desc: "Remote Areas", savings: "4-8 hours daily", color: "text-primary" },
  ];

  const comparisonTips = [
    { icon: TrendingUp, text: "Band A customers pay 7x more than Band C - monitor your supply hours carefully", color: "text-destructive" },
    { icon: TrendingDown, text: "Ghana's block tariff means high users pay progressively more - track your consumption", color: "text-secondary" },
    { icon: Zap, text: "Consider solar or inverter systems if you're in higher tariff bands", color: "text-destructive" },
    { icon: CheckCircle2, text: "Omhero helps you track exactly which band you qualify for based on your usage", color: "text-secondary" },
  ];

  const calculateSampleBill = () => {
    if (activeTab === "ghana") {
      return {
        usage: 450,
        rate: 1.45,
        charge: 10,
        total: (450 * 1.45) + 10,
        currency: "GH₵"
      };
    } else {
      return {
        usage: 350,
        rate: 42.44,
        charge: 0,
        total: 350 * 42.44,
        currency: "₦"
      };
    }
  };

  const sampleBill = calculateSampleBill();

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden bg-theme">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="theme-grid" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-secondary text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Understanding Your Energy Costs
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Electricity <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Tariffs</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            View the current indicative electricity rates for your region. Understand what you pay and why.
          </p>
        </motion.div>

        {/* Sample Bill Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl p-1">
            <div className="bg-muted/60 backdrop-blur-md rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calculator className="w-5 h-5 text-secondary" />
                    <h3 className="text-lg font-bold text-foreground">Sample Bill Calculator</h3>
                  </div>
                  <p className="text-foreground/70 text-sm mb-4">
                    Based on {activeTab === "ghana" ? "Residential (301-600 kWh block)" : "Band C (Semi-Urban)"} tariff
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Monthly Usage</span>
                      <span className="text-foreground font-medium">{sampleBill.usage} kWh</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Energy Rate</span>
                      <span className="text-foreground font-medium">{sampleBill.currency} {sampleBill.rate}/kWh</span>
                    </div>
                    {sampleBill.charge > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/60">Service Charge</span>
                        <span className="text-foreground font-medium">{sampleBill.currency} {sampleBill.charge}</span>
                      </div>
                    )}
                    <div className="border-t border-border pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-foreground/70 font-medium">Estimated Bill</span>
                        <span className="text-2xl font-bold text-secondary">{sampleBill.currency} {sampleBill.total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-secondary font-medium">Pro Tip</span>
                  </div>
                  <p className="text-sm text-foreground/70">
                    With Omhero, you can track your real-time consumption and never get surprised by your bill again. 
                    Know exactly which tariff band you fall into each month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tariff Tabs */}
        <Tabs defaultValue="ghana" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/40 backdrop-blur-md border border-border p-1 rounded-xl">
              <TabsTrigger 
                value="ghana" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary data-[state=active]:text-white px-8 py-2 rounded-lg transition-all text-foreground/70 data-[state=active]:text-white"
              >
                <DollarSign className="w-4 h-4 mr-2" />
                Ghana (ECG/NEDCo)
              </TabsTrigger>
              <TabsTrigger 
                value="nigeria" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-secondary data-[state=active]:to-secondary data-[state=active]:text-white px-8 py-2 rounded-lg transition-all text-foreground/70 data-[state=active]:text-white"
              >
                <Zap className="w-4 h-4 mr-2" />
                Nigeria (DisCos)
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ghana">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-muted/40 backdrop-blur-md border-primary/30 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary to-primary" />
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-muted/60">
                      <TableRow className="border-border hover:bg-transparent">
                        <TableHead className="text-secondary py-4 px-6 font-bold">Customer Category</TableHead>
                        <TableHead className="text-secondary py-4 px-6 font-bold">Energy Rate per kWh</TableHead>
                        <TableHead className="text-secondary py-4 px-6 font-bold">Monthly Service Charge</TableHead>
                        <TableHead className="text-secondary py-4 px-6 font-bold">Best For</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {ghanaTariffs.map((tariff, index) => (
                        <TableRow key={tariff.category} className="border-border hover:bg-primary/5 transition-colors">
                          <TableCell className="font-medium text-foreground py-4 px-6">{tariff.category}</TableCell>
                          <TableCell className="text-foreground/70 py-4 px-6">{tariff.rate}</TableCell>
                          <TableCell className="text-foreground/70 py-4 px-6">{tariff.charge}</TableCell>
                          <TableCell className="text-foreground/60 text-sm py-4 px-6">{tariff.savings}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="nigeria">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-muted/40 backdrop-blur-md border-secondary/30 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-secondary to-secondary" />
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-muted/60">
                      <TableRow className="border-border hover:bg-transparent">
                        <TableHead className="text-secondary py-4 px-6 font-bold">Service Band</TableHead>
                        <TableHead className="text-secondary py-4 px-6 font-bold">Description</TableHead>
                        <TableHead className="text-secondary py-4 px-6 font-bold">Energy Rate per kWh</TableHead>
                        <TableHead className="text-secondary py-4 px-6 font-bold">Supply Hours</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {nigeriaTariffs.map((tariff) => (
                        <TableRow key={tariff.category} className="border-border hover:bg-secondary/5 transition-colors">
                          <TableCell className={`font-medium py-4 px-6 ${tariff.color}`}>{tariff.category}</TableCell>
                          <TableCell className="text-foreground/70 py-4 px-6">{tariff.desc}</TableCell>
                          <TableCell className="text-foreground/70 py-4 px-6">{tariff.rate}</TableCell>
                          <TableCell className="text-foreground/60 text-sm py-4 px-6">{tariff.savings}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Tariff Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-5 flex gap-4">
            <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
            <div>
              <p className="text-destructive/90 text-sm font-medium mb-1">Important Disclaimer</p>
              <p className="text-sm text-foreground/60">
                The rates shown above are indicative and may vary based on exact distribution company charges, 
                statutory levies, and VAT. For exact billing, refer to your utility provider.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Comparison Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-6">
            Tariff <span className="text-secondary">Insights</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {comparisonTips.map((tip, index) => (
              <div key={index} className="bg-muted/40 backdrop-blur-sm rounded-xl p-4 border border-border flex items-start gap-3">
                <tip.icon className={`w-5 h-5 ${tip.color} shrink-0 mt-0.5`} />
                <p className="text-sm text-foreground/70">{tip.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How to Save Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-1">
            <div className="bg-muted/60 backdrop-blur-md rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingDown className="w-5 h-5 text-secondary" />
                    <h3 className="text-lg font-bold text-foreground">How to Reduce Your Tariff Impact</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-foreground/70">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>Monitor your daily consumption to avoid moving into higher tariff blocks</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/70">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>In Nigeria, track your supply hours - you should pay based on actual availability</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/70">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>Use Omhero to get real-time alerts when you're approaching higher tariff thresholds</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center bg-muted/40 rounded-xl p-4 border border-primary/30">
                  <Zap className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <p className="text-sm text-foreground/70 mb-3">
                    With Omhero, you'll never be surprised by your tariff category again
                  </p>
                  <Link to="/product">
                    <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA to Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 border border-border backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-3">Want to estimate your next bill?</h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Use our interactive bill calculator to see exactly how much you'll pay based on your actual usage
            </p>
            <Link to="/services/bill-calculator">
              <Button size="lg" className="bg-gradient-to-r from-secondary to-secondary hover:from-secondary/90 hover:to-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/20 gap-2">
                <Calculator className="w-5 h-5" />
                Open Bill Calculator
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}