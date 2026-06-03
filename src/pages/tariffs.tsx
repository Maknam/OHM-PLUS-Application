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
    { category: "Band A (Min 20hrs)", rate: "₦ 206.80", desc: "Premium Areas", savings: "20+ hours daily", color: "text-ohm-orange" },
    { category: "Band B (Min 16hrs)", rate: "₦ 63.30", desc: "Urban Areas", savings: "16-20 hours daily", color: "text-ohm-orange" },
    { category: "Band C (Min 12hrs)", rate: "₦ 42.44", desc: "Semi-Urban Areas", savings: "12-16 hours daily", color: "text-ohm-green" },
    { category: "Band D (Min 8hrs)", rate: "₦ 29.50", desc: "Rural Areas", savings: "8-12 hours daily", color: "text-ohm-blue" },
    { category: "Band E (Min 4hrs)", rate: "₦ 29.50", desc: "Remote Areas", savings: "4-8 hours daily", color: "text-ohm-blue" },
  ];

  const comparisonTips = [
    { icon: TrendingUp, text: "Band A customers pay 7x more than Band C - monitor your supply hours carefully", color: "text-ohm-orange" },
    { icon: TrendingDown, text: "Ghana's block tariff means high users pay progressively more - track your consumption", color: "text-ohm-green" },
    { icon: Zap, text: "Consider solar or inverter systems if you're in higher tariff bands", color: "text-ohm-orange" },
    { icon: CheckCircle2, text: "Omhero helps you track exactly which band you qualify for based on your usage", color: "text-ohm-green" },
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
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2a] to-[#1a1a3e]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-ohm-blue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ohm-green/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ohm-blue/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,75,158,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,75,158,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ohm-blue/20 backdrop-blur-sm border border-ohm-blue/30 text-ohm-green text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Understanding Your Energy Costs
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Electricity <span className="text-transparent bg-clip-text bg-gradient-to-r from-ohm-green to-ohm-blue">Tariffs</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
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
          <div className="bg-gradient-to-r from-ohm-blue/20 via-ohm-green/20 to-ohm-blue/20 rounded-2xl p-1">
            <div className="bg-black/60 backdrop-blur-md rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calculator className="w-5 h-5 text-ohm-green" />
                    <h3 className="text-lg font-bold text-white">Sample Bill Calculator</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Based on {activeTab === "ghana" ? "Residential (301-600 kWh block)" : "Band C (Semi-Urban)"} tariff
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Monthly Usage</span>
                      <span className="text-white font-medium">{sampleBill.usage} kWh</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Energy Rate</span>
                      <span className="text-white font-medium">{sampleBill.currency} {sampleBill.rate}/kWh</span>
                    </div>
                    {sampleBill.charge > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Service Charge</span>
                        <span className="text-white font-medium">{sampleBill.currency} {sampleBill.charge}</span>
                      </div>
                    )}
                    <div className="border-t border-white/10 pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300 font-medium">Estimated Bill</span>
                        <span className="text-2xl font-bold text-ohm-green">{sampleBill.currency} {sampleBill.total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-ohm-blue/10 rounded-xl p-4 border border-ohm-blue/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-ohm-green" />
                    <span className="text-sm text-ohm-green font-medium">Pro Tip</span>
                  </div>
                  <p className="text-sm text-gray-300">
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
            <TabsList className="bg-black/40 backdrop-blur-md border border-white/10 p-1 rounded-xl">
              <TabsTrigger 
                value="ghana" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-ohm-blue data-[state=active]:to-ohm-blue data-[state=active]:text-white px-8 py-2 rounded-lg transition-all"
              >
                <DollarSign className="w-4 h-4 mr-2" />
                Ghana (ECG/NEDCo)
              </TabsTrigger>
              <TabsTrigger 
                value="nigeria" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-ohm-green data-[state=active]:to-ohm-green data-[state=active]:text-white px-8 py-2 rounded-lg transition-all"
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
              <Card className="bg-black/40 backdrop-blur-md border-ohm-blue/30 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-ohm-blue to-ohm-blue" />
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-black/50">
                      <TableRow className="border-white/10 hover:bg-transparent">
                        <TableHead className="text-ohm-green py-4 px-6 font-bold">Customer Category</TableHead>
                        <TableHead className="text-ohm-green py-4 px-6 font-bold">Energy Rate per kWh</TableHead>
                        <TableHead className="text-ohm-green py-4 px-6 font-bold">Monthly Service Charge</TableHead>
                        <TableHead className="text-ohm-green py-4 px-6 font-bold">Best For</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {ghanaTariffs.map((tariff, index) => (
                        <TableRow key={tariff.category} className="border-white/10 hover:bg-ohm-blue/5 transition-colors">
                          <TableCell className="font-medium text-white py-4 px-6">{tariff.category}</TableCell>
                          <TableCell className="text-gray-300 py-4 px-6">{tariff.rate}</TableCell>
                          <TableCell className="text-gray-300 py-4 px-6">{tariff.charge}</TableCell>
                          <TableCell className="text-gray-400 text-sm py-4 px-6">{tariff.savings}</TableCell>
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
              <Card className="bg-black/40 backdrop-blur-md border-ohm-green/30 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-ohm-green to-ohm-green" />
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-black/50">
                      <TableRow className="border-white/10 hover:bg-transparent">
                        <TableHead className="text-ohm-green py-4 px-6 font-bold">Service Band</TableHead>
                        <TableHead className="text-ohm-green py-4 px-6 font-bold">Description</TableHead>
                        <TableHead className="text-ohm-green py-4 px-6 font-bold">Energy Rate per kWh</TableHead>
                        <TableHead className="text-ohm-green py-4 px-6 font-bold">Supply Hours</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {nigeriaTariffs.map((tariff) => (
                        <TableRow key={tariff.category} className="border-white/10 hover:bg-ohm-green/5 transition-colors">
                          <TableCell className={`font-medium py-4 px-6 ${tariff.color}`}>{tariff.category}</TableCell>
                          <TableCell className="text-gray-300 py-4 px-6">{tariff.desc}</TableCell>
                          <TableCell className="text-gray-300 py-4 px-6">{tariff.rate}</TableCell>
                          <TableCell className="text-gray-400 text-sm py-4 px-6">{tariff.savings}</TableCell>
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
          <div className="bg-ohm-orange/10 border border-ohm-orange/20 rounded-xl p-5 flex gap-4">
            <AlertCircle className="w-5 h-5 text-ohm-orange shrink-0 mt-0.5" />
            <div>
              <p className="text-ohm-orange/90 text-sm font-medium mb-1">Important Disclaimer</p>
              <p className="text-sm text-gray-400">
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
          <h2 className="text-2xl font-display font-bold text-white text-center mb-6">
            Tariff <span className="text-ohm-green">Insights</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {comparisonTips.map((tip, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex items-start gap-3">
                <tip.icon className={`w-5 h-5 ${tip.color} shrink-0 mt-0.5`} />
                <p className="text-sm text-gray-300">{tip.text}</p>
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
          <div className="bg-gradient-to-r from-ohm-blue/20 to-ohm-green/20 rounded-2xl p-1">
            <div className="bg-black/60 backdrop-blur-md rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingDown className="w-5 h-5 text-ohm-green" />
                    <h3 className="text-lg font-bold text-white">How to Reduce Your Tariff Impact</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-ohm-green shrink-0 mt-0.5" />
                      <span>Monitor your daily consumption to avoid moving into higher tariff blocks</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-ohm-green shrink-0 mt-0.5" />
                      <span>In Nigeria, track your supply hours - you should pay based on actual availability</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-ohm-green shrink-0 mt-0.5" />
                      <span>Use Omhero to get real-time alerts when you're approaching higher tariff thresholds</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center bg-black/40 rounded-xl p-4 border border-ohm-blue/30">
                  <Zap className="w-8 h-8 text-ohm-green mx-auto mb-2" />
                  <p className="text-sm text-gray-300 mb-3">
                    With Omhero, you'll never be surprised by your tariff category again
                  </p>
                  <Link to="/product">
                    <Button size="sm" className="bg-ohm-green hover:bg-ohm-green/90 text-white">
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
          <div className="bg-gradient-to-r from-ohm-blue/20 to-ohm-green/20 rounded-2xl p-8 border border-white/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-3">Want to estimate your next bill?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Use our interactive bill calculator to see exactly how much you'll pay based on your actual usage
            </p>
            <Link to="/services/bill-calculator">
              <Button size="lg" className="bg-gradient-to-r from-ohm-green to-ohm-green hover:from-ohm-green/90 hover:to-ohm-green/90 text-white shadow-lg shadow-ohm-green/20 gap-2">
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