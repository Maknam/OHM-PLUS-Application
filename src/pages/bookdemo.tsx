import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  User, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Shield, 
  TrendingDown,
  Video,
  Clock,
  Calendar,
  Loader2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function BookDemo() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please fill in all fields",
        description: "Name, email, and phone number are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Demo request:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Demo Request Submitted! 🎉",
      description: "Our team will contact you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const demoFeatures = [
    { icon: Zap, title: "Live Product Walkthrough", desc: "See Omhero in action" },
    { icon: Shield, title: "Safety Features Demo", desc: "Learn about fault detection" },
    { icon: TrendingDown, title: "Savings Calculation", desc: "Estimate your potential savings" },
    { icon: Video, title: "Dashboard Tour", desc: "Explore the analytics platform" },
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

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#004B9E]/20 backdrop-blur-sm border border-[#004B9E]/30 text-[#0D9444] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Experience Omhero Live
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
            Book a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9444] to-[#004B9E]">Live Demo</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            See Omhero in action. Our team will walk you through the features and answer your questions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {isSubmitted ? (
              <div className="bg-muted/40 backdrop-blur-md rounded-2xl p-8 text-center border border-[#0D9444]/30">
                <div className="w-16 h-16 rounded-full bg-[#0D9444]/20 flex items-center justify-center mx-auto mb-4 border-2 border-[#0D9444]/50">
                  <CheckCircle2 className="w-8 h-8 text-[#0D9444]" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2">Request Received!</h2>
                <p className="text-foreground/70 text-sm mb-4">
                  We'll contact you within 24 hours to schedule your demo.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  variant="outline"
                  className="border-[#0D9444]/30 text-foreground hover:bg-[#0D9444]/10"
                >
                  Book Another Demo
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-muted/40 backdrop-blur-md rounded-2xl p-6 border border-border">
                <div className="space-y-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground/70 flex items-center gap-2">
                      <User className="w-4 h-4 text-[#0D9444]" />
                      Full Name *
                    </Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-muted/50 border-border focus:border-[#0D9444] focus:ring-[#0D9444]/20 h-12"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground/70 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#0D9444]" />
                      Email Address *
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-muted/50 border-border focus:border-[#0D9444] focus:ring-[#0D9444]/20 h-12"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground/70 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#0D9444]" />
                      Phone Number *
                    </Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+233 XX XXX XXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-muted/50 border-border focus:border-[#0D9444] focus:ring-[#0D9444]/20 h-12"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground/70 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#0D9444]" />
                      Anything you'd like us to know? (Optional)
                    </Label>
                    <Textarea 
                      id="message" 
                      placeholder="E.g., I'm interested in business pricing, I have multiple properties, etc."
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-muted/50 border-border focus:border-[#0D9444] focus:ring-[#0D9444]/20 resize-none"
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-[#FF4E00] hover:bg-[#E04500] text-white h-12 text-base gap-2 mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Demo <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-foreground/50 text-center pt-2">
                    No commitment. Free 30-minute personalized demo.
                  </p>
                </div>
              </form>
            )}
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* What to expect */}
            <div className="bg-muted/40 backdrop-blur-md rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#0D9444]" />
                What to Expect
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-foreground/70">
                  <Clock className="w-4 h-4 text-[#0D9444]" />
                  <span>30-minute live demo with an expert</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground/70">
                  <Calendar className="w-4 h-4 text-[#0D9444]" />
                  <span>Schedule at your convenience</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground/70">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9444]" />
                  <span>No pressure, just answers</span>
                </li>
              </ul>
            </div>

            {/* Demo Highlights */}
            <div className="bg-gradient-to-r from-[#004B9E]/10 to-[#0D9444]/10 rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">Demo Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                {demoFeatures.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-[#004B9E]/20 flex items-center justify-center mx-auto mb-2">
                      <feature.icon className="w-5 h-5 text-[#0D9444]" />
                    </div>
                    <p className="text-xs font-medium text-foreground">{feature.title}</p>
                    <p className="text-xs text-foreground/50">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <div className="text-center">
              <p className="text-xs text-foreground/50 flex items-center justify-center gap-2">
                <span>Trusted by customers across Nigeria & Ghana</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}