import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, CheckCircle2, Phone, MapPin, AlertCircle, Zap, Clock, Shield, ArrowRight, Home, Building, Loader2, Sparkles, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function ReportFault() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    account: "",
    region: "",
    faultType: "",
    address: "",
    description: ""
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
    
    setTicketId(`FLT-${Math.floor(100000 + Math.random() * 900000)}`);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const faultTypes = [
    { value: "no_power", label: "No Power / Total Outage", icon: Zap, color: "text-destructive" },
    { value: "voltage", label: "Voltage Drop / Fluctuations", icon: AlertTriangle, color: "text-destructive" },
    { value: "surge", label: "Power Surge", icon: Zap, color: "text-destructive" },
    { value: "spark", label: "Sparking Wire / Transformer Issue", icon: AlertTriangle, color: "text-destructive" },
    { value: "pole", label: "Fallen Pole", icon: MapPin, color: "text-destructive" },
    { value: "meter", label: "Meter Fault", icon: Home, color: "text-primary" },
    { value: "other", label: "Other", icon: AlertCircle, color: "text-foreground/60" }
  ];

  const regions = [
    { value: "accra", label: "Greater Accra, Ghana", emoji: "🌆" },
    { value: "kumasi", label: "Kumasi, Ghana", emoji: "🏙️" },
    { value: "lagos", label: "Lagos, Nigeria", emoji: "🌉" },
    { value: "abuja", label: "Abuja, Nigeria", emoji: "🏛️" },
    { value: "port_harcourt", label: "Port Harcourt, Nigeria", emoji: "⚓" },
    { value: "takoradi", label: "Takoradi, Ghana", emoji: "🏭" }
  ];

  const emergencyTips = [
    { icon: Shield, text: "Stay away from fallen power lines - at least 10 meters", color: "text-destructive" },
    { icon: Phone, text: "Call emergency services if there's fire or injury", color: "text-destructive" },
    { icon: AlertTriangle, text: "Don't touch electrical panels with wet hands", color: "text-destructive" },
    { icon: Clock, text: "Save your meter reading before reporting", color: "text-primary" }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden bg-theme">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-destructive/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-destructive/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-destructive/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="theme-grid" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 backdrop-blur-sm border border-destructive/30 text-destructive text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            24/7 Emergency Response
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Report a <span className="text-transparent bg-clip-text bg-gradient-to-r from-destructive to-destructive">Fault</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Experiencing power issues? Report an outage or technical fault to our rapid response team. 
            We're here to help 24/7.
          </p>
        </motion.div>

        {/* Emergency Tips Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <h3 className="text-sm font-bold text-destructive">Safety First</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {emergencyTips.map((tip, index) => (
                <div key={index} className="flex items-center gap-2">
                  <tip.icon className={`w-4 h-4 ${tip.color}`} />
                  <span className="text-xs text-foreground/70">{tip.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/10 border-secondary/30 text-center py-12 overflow-hidden">
              <div className="absolute inset-0 bg-secondary/5" />
              <CardContent className="relative z-10">
                <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-secondary/50 animate-pulse">
                  <CheckCircle2 className="w-12 h-12 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-3">Fault Reported Successfully!</h2>
                <p className="text-foreground/70 mb-6 max-w-md mx-auto">
                  Our technical team has been notified and will prioritize your issue. We'll contact you shortly if we need more information.
                </p>
                <div className="bg-muted/40 backdrop-blur-sm border border-secondary/30 rounded-xl p-5 inline-block mb-8">
                  <p className="text-sm text-secondary mb-2">Your Ticket Reference Number</p>
                  <p className="text-3xl font-mono font-bold text-foreground tracking-wider" data-testid="text-ticket-id">
                    {ticketId}
                  </p>
                  <p className="text-xs text-foreground/50 mt-2">Save this number for tracking your request</p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "", phone: "", account: "", region: "", faultType: "", address: "", description: ""
                      });
                    }} 
                    variant="outline" 
                    className="border-secondary/30 text-foreground hover:bg-secondary/10"
                    data-testid="button-report-another"
                  >
                    Report Another Fault
                  </Button>
                  <Link to="/contact">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Contact Support
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
            <Card className="bg-muted/40 backdrop-blur-md border-destructive/30 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-destructive to-destructive" />
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground/70 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Full Name
                      </Label>
                      <Input 
                        id="name" 
                        required 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="bg-muted/50 border-destructive/30 text-foreground focus:border-destructive focus:ring-destructive/20"
                        data-testid="input-fault-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground/70 flex items-center gap-2">
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
                        className="bg-muted/50 border-destructive/30 text-foreground focus:border-destructive focus:ring-destructive/20"
                        data-testid="input-fault-phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="account" className="text-foreground/70 flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        Meter / Account Number (Optional)
                      </Label>
                      <Input 
                        id="account" 
                        value={formData.account}
                        onChange={handleInputChange}
                        placeholder="Enter your meter number"
                        className="bg-muted/50 border-destructive/30 text-foreground focus:border-destructive focus:ring-destructive/20"
                        data-testid="input-fault-account"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="region" className="text-foreground/70 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Region
                      </Label>
                      <Select required onValueChange={(value) => handleSelectChange("region", value)}>
                        <SelectTrigger className="bg-muted/50 border-destructive/30 text-foreground focus:border-destructive">
                          <SelectValue placeholder="Select a region" />
                        </SelectTrigger>
                        <SelectContent className="bg-muted/90 border-destructive/30">
                          {regions.map((region) => (
                            <SelectItem key={region.value} value={region.value} className="text-foreground hover:bg-destructive/20">
                              <span className="flex items-center gap-2">
                                <span>{region.emoji}</span>
                                <span>{region.label}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="faultType" className="text-foreground/70 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Fault Type
                    </Label>
                    <Select required onValueChange={(value) => handleSelectChange("faultType", value)}>
                      <SelectTrigger className="bg-muted/50 border-destructive/30 text-foreground focus:border-destructive">
                        <SelectValue placeholder="What is the issue?" />
                      </SelectTrigger>
                      <SelectContent className="bg-muted/90 border-destructive/30">
                        {faultTypes.map((fault) => (
                          <SelectItem key={fault.value} value={fault.value} className="text-foreground hover:bg-destructive/20">
                            <span className="flex items-center gap-2">
                              <fault.icon className={`w-4 h-4 ${fault.color}`} />
                              <span>{fault.label}</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-foreground/70 flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Detailed Address / Location
                    </Label>
                    <Input 
                      id="address" 
                      required 
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="House number, Street, Landmark for easy identification"
                      className="bg-muted/50 border-destructive/30 text-foreground focus:border-destructive focus:ring-destructive/20"
                      data-testid="input-fault-address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-foreground/70">Description of the Issue</Label>
                    <Textarea 
                      id="description" 
                      required 
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Please provide any additional details that might help our team diagnose and resolve the issue faster."
                      className="bg-muted/50 border-destructive/30 text-foreground focus:border-destructive focus:ring-destructive/20 resize-none"
                      data-testid="input-fault-desc"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-destructive to-destructive hover:from-destructive/90 hover:to-destructive/90 text-destructive-foreground text-lg h-14 shadow-lg shadow-destructive/20"
                    disabled={isSubmitting}
                    data-testid="button-fault-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting Report...
                      </>
                    ) : (
                      <>
                        Submit Fault Report <Sparkles className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Alternative Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-foreground/60">
            Need immediate assistance? Call our emergency hotline: 
            <span className="text-secondary font-bold ml-2">+233 (0) 55 123 4567</span>
          </p>
          <p className="text-xs text-foreground/50 mt-2">
            For Ghana • For Nigeria: <span className="text-secondary">+234 (0) 80 123 4567</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}