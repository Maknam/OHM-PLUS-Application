import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlugZap, CheckCircle2, Calendar, Home, Building2, Factory, MapPin, Mail, Phone, User, Clock, Sparkles, ArrowRight, Wifi, Zap, Shield, Award, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewConnection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    region: "",
    date: "",
    address: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const propertyTypes = [
    { value: "residential", label: "Residential (House/Apartment)", icon: Home, color: "from-blue-500 to-cyan-500" },
    { value: "commercial", label: "Commercial (Office/Shop)", icon: Building2, color: "from-purple-500 to-pink-500" },
    { value: "industrial", label: "Industrial (Factory/Warehouse)", icon: Factory, color: "from-orange-500 to-red-500" }
  ];

  const regions = [
    { value: "accra", label: "Greater Accra, Ghana", emoji: "🌆", color: "text-blue-400" },
    { value: "kumasi", label: "Kumasi, Ghana", emoji: "🏙️", color: "text-green-400" },
    { value: "takoradi", label: "Takoradi, Ghana", emoji: "🏭", color: "text-orange-400" },
    { value: "lagos", label: "Lagos, Nigeria", emoji: "🌉", color: "text-purple-400" },
    { value: "abuja", label: "Abuja, Nigeria", emoji: "🏛️", color: "text-red-400" },
    { value: "port_harcourt", label: "Port Harcourt, Nigeria", emoji: "⚓", color: "text-teal-400" }
  ];

  const benefits = [
    { icon: Zap, title: "Fast Installation", desc: "Within 5-7 business days", color: "text-yellow-400" },
    { icon: Shield, title: "Certified Technicians", desc: "Professional installation", color: "text-green-400" },
    { icon: Wifi, title: "Remote Monitoring", desc: "Real-time energy tracking", color: "text-cyan-400" },
    { icon: Award, title: "1-Year Warranty", desc: "Full device coverage", color: "text-purple-400" }
  ];

  const getMinDate = () => {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate() + 3);
    return minDate.toISOString().split('T')[0];
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2a] to-[#1a1a3e]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,114,206,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,114,206,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-500 text-sm font-medium mb-6">
            <PlugZap className="w-4 h-4" />
            Get Connected Today
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Request New <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Connection</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Apply for a new property connection or schedule an Omhero device installation. 
            Our team will reach out within 24 hours.
          </p>
        </motion.div>

        {/* Benefits Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 group hover:border-green-500/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
              </div>
              <h4 className="text-sm font-bold text-white">{benefit.title}</h4>
              <p className="text-xs text-gray-400">{benefit.desc}</p>
            </div>
          ))}
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30 text-center py-12 overflow-hidden">
              <div className="absolute inset-0 bg-green-500/5" />
              <CardContent className="relative z-10">
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500/50 animate-pulse">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">Request Received Successfully!</h2>
                <p className="text-gray-300 mb-6 max-w-md mx-auto">
                  Thank you for your application. Our installations team will review your request and contact you within 24-48 hours to confirm your preferred date.
                </p>
                <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-xl p-5 inline-block mb-8">
                  <p className="text-sm text-green-400 mb-2">Next Steps</p>
                  <ul className="text-left text-sm text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span>Assessment call within 24 hours</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-green-400" />
                      <span>Schedule installation date</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <PlugZap className="w-4 h-4 text-green-400" />
                      <span>Professional installation by certified technicians</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "", phone: "", email: "", propertyType: "", region: "", date: "", address: "", message: ""
                      });
                    }} 
                    variant="outline" 
                    className="border-green-500/30 text-white hover:bg-green-500/10"
                    data-testid="button-new-request"
                  >
                    Submit Another Request
                  </Button>
                  <Link to="/product">
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      Learn About Omhero <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-black/40 backdrop-blur-md border-green-500/30 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Full Name
                      </Label>
                      <Input 
                        id="name" 
                        required 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="bg-black/50 border-green-500/30 text-white focus:border-green-500 focus:ring-green-500/20"
                        data-testid="input-conn-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300 flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone Number
                      </Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+233 XX XXX XXXX"
                        className="bg-black/50 border-green-500/30 text-white focus:border-green-500 focus:ring-green-500/20"
                        data-testid="input-conn-phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="bg-black/50 border-green-500/30 text-white focus:border-green-500 focus:ring-green-500/20"
                        data-testid="input-conn-email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="propertyType" className="text-gray-300 flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        Property Type
                      </Label>
                      <Select required onValueChange={(value) => handleSelectChange("propertyType", value)}>
                        <SelectTrigger className="bg-black/50 border-green-500/30 text-white focus:border-green-500">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent className="bg-black/90 border-green-500/30">
                          {propertyTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value} className="text-white hover:bg-green-500/20">
                              <span className="flex items-center gap-2">
                                <type.icon className="w-4 h-4" />
                                <span>{type.label}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="region" className="text-gray-300 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Region
                      </Label>
                      <Select required onValueChange={(value) => handleSelectChange("region", value)}>
                        <SelectTrigger className="bg-black/50 border-green-500/30 text-white focus:border-green-500">
                          <SelectValue placeholder="Select your region" />
                        </SelectTrigger>
                        <SelectContent className="bg-black/90 border-green-500/30">
                          {regions.map((region) => (
                            <SelectItem key={region.value} value={region.value} className="text-white hover:bg-green-500/20">
                              <span className="flex items-center gap-2">
                                <span>{region.emoji}</span>
                                <span>{region.label}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-gray-300 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Preferred Installation Date
                      </Label>
                      <div className="relative">
                        <Input 
                          id="date" 
                          type="date" 
                          required 
                          min={getMinDate()}
                          value={formData.date}
                          onChange={handleInputChange}
                          className="bg-black/50 border-green-500/30 text-white pl-10 focus:border-green-500 focus:ring-green-500/20"
                          data-testid="input-conn-date"
                        />
                        <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3 pointer-events-none" />
                      </div>
                      <p className="text-xs text-gray-500">Earliest available date is {getMinDate()}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-gray-300 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Full Address
                    </Label>
                    <Input 
                      id="address" 
                      required 
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="House number, Street name, Landmark for easy identification"
                      className="bg-black/50 border-green-500/30 text-white focus:border-green-500 focus:ring-green-500/20"
                      data-testid="input-conn-address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Additional Details (Optional)</Label>
                    <Textarea 
                      id="message" 
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any specific instructions for our installation team? Special requirements or preferred times?"
                      className="bg-black/50 border-green-500/30 text-white focus:border-green-500 focus:ring-green-500/20 resize-none"
                      data-testid="input-conn-msg"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-lg h-14 shadow-lg shadow-green-500/20"
                    disabled={isSubmitting}
                    data-testid="button-conn-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        Submit Request <Sparkles className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              Certified Installation
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-400" />
              24hr Response Time
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-green-400" />
              1-Year Warranty
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            By submitting this form, you agree to our terms of service and privacy policy.
          </p>
        </motion.div>
      </div>
    </div>
  );
}