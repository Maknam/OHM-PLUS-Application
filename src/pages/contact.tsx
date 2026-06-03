import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, Phone, MapPin, Clock, Users, Building2, Sparkles, ArrowRight, CheckCircle2, Globe, MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  country: z.string().min(2, "Country is required"),
  propertyType: z.string().optional(),
  meterType: z.string().optional(),
  monthlyEnergySpend: z.string().optional(),
  interestType: z.string().min(1, "Interest type is required"),
  message: z.string().optional(),
});

// EmailJS configuration - REPLACE THESE WITH YOUR ACTUAL VALUES
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_c8wupev',     // e.g., 'service_abc123'
  TEMPLATE_ID: 'template_8g4vzi1',   // e.g., 'template_xyz789'
  PUBLIC_KEY: 'Dny0JN2VYfTyiF6GA'      // e.g., 'user_123456789'
};

export default function Contact() {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      propertyType: "",
      meterType: "",
      monthlyEnergySpend: "",
      interestType: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsPending(true);
    
    try {
      // Prepare template parameters
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        phone: values.phone || "Not provided",
        country: values.country,
        interest_type: values.interestType,
        property_type: values.propertyType || "Not specified",
        meter_type: values.meterType || "Not specified",
        monthly_spend: values.monthlyEnergySpend || "Not specified",
        message: values.message || "No additional message",
        to_email: 'hello@ohmplus.africa', // Where you want to receive emails
        reply_to: values.email,
      };

      console.log("Sending email with params:", templateParams); // Debug log

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("Email sent successfully:", response);
      
      setIsSuccess(true);
      form.reset();
      toast({
        title: "Message sent! ✨",
        description: "We'll get back to you within 24 hours.",
      });
      
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
    }
  }

  const contactMethods = [
    { icon: MapPin, title: "Offices", details: ["Accra, Ghana", "Lagos, Nigeria"], color: "from-ohm-blue to-ohm-blue/70", hover: "map" },
    { icon: Mail, title: "Email Us", details: ["hello@ohmplus.africa", "support@ohmplus.africa"], color: "from-ohm-green to-ohm-green/70", hover: "mail" },
    { icon: Phone, title: "Call Us", details: ["+233 (0) 55 123 4567", "+234 (0) 80 123 4567"], color: "from-ohm-green to-ohm-green/70", hover: "phone" },
    { icon: Clock, title: "Support Hours", details: ["Monday - Friday: 8AM - 8PM", "Saturday: 9AM - 5PM"], color: "from-ohm-blue to-ohm-blue/70", hover: "clock" }
  ];

  const interestOptions = [
    { value: "Home Monitoring", icon: Building2, label: "Home Monitoring", desc: "For residential properties" },
    { value: "Business/SME", icon: Users, label: "Business/SME", desc: "For small to medium businesses" },
    { value: "Enterprise Solution", icon: Building2, label: "Enterprise Solution", desc: "For large organizations" },
    { value: "Partnership", icon: Handshake, label: "Partnership", desc: "Become a partner" }
  ];

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
            <MessageCircle className="w-4 h-4" />
            We'd Love to Hear From You
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-ohm-green to-ohm-blue">Touch</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to take control of your energy? Contact our team to join the pilot program or request an enterprise consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredContact(method.hover)}
                  onMouseLeave={() => setHoveredContact(null)}
                  className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-ohm-blue/30 transition-all hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-ohm-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start gap-5 relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{method.title}</h4>
                      {method.details.map((detail, i) => (
                        <p key={i} className="text-gray-300 text-sm leading-relaxed">{detail}</p>
                      ))}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social/Trust Badges */}
            <div className="mt-8 p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 text-ohm-green" />
                <span className="text-white font-medium">Average response time: &lt; 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-ohm-green" />
                <span className="text-gray-400 text-sm">Available in Nigeria & Ghana</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-black/40 backdrop-blur-md border border-ohm-blue/30 rounded-2xl p-6 md:p-8 shadow-2xl">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-ohm-green/20 flex items-center justify-center mx-auto mb-6 border-2 border-ohm-green/50 animate-pulse">
                    <CheckCircle2 className="w-10 h-10 text-ohm-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent! 🎉</h3>
                  <p className="text-gray-300 mb-6 max-w-sm mx-auto">
                    Thank you for reaching out! We've received your message and will get back to you within 24 hours.
                  </p>
                  <div className="bg-ohm-blue/10 rounded-xl p-4 mb-6">
                    <p className="text-sm text-gray-300">📞 Need immediate assistance? Call our hotline:</p>
                    <p className="text-ohm-green font-bold mt-1">+233 (0) 55 123 4567 (Ghana) | +234 (0) 80 123 4567 (Nigeria)</p>
                  </div>
                  <Button 
                    onClick={() => setIsSuccess(false)} 
                    variant="outline" 
                    className="border-ohm-blue/30 text-white hover:bg-ohm-blue/20"
                  >
                    Send Another Message <Send className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                className="bg-black/50 border-white/20 text-white focus:border-ohm-green focus:ring-ohm-green/20" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Email Address *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="john@example.com" 
                                type="email" 
                                className="bg-black/50 border-white/20 text-white focus:border-ohm-green focus:ring-ohm-green/20" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+233..." 
                                className="bg-black/50 border-white/20 text-white focus:border-ohm-green focus:ring-ohm-green/20" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Country *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-black/50 border-white/20 text-white focus:ring-ohm-green">
                                  <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-black/90 border-white/20">
                                <SelectItem value="Ghana" className="text-white hover:bg-ohm-blue/20">🇬🇭 Ghana</SelectItem>
                                <SelectItem value="Nigeria" className="text-white hover:bg-ohm-blue/20">🇳🇬 Nigeria</SelectItem>
                                <SelectItem value="Other" className="text-white hover:bg-ohm-blue/20">🌍 Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="interestType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">I'm interested in *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-black/50 border-white/20 text-white focus:ring-ohm-green">
                                <SelectValue placeholder="Select interest" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-black/90 border-white/20">
                              {interestOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value} className="text-white hover:bg-ohm-blue/20">
                                  <div className="flex items-center gap-2">
                                    <option.icon className="w-4 h-4 text-ohm-green" />
                                    <span>{option.label}</span>
                                    <span className="text-xs text-gray-500 ml-2">- {option.desc}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your energy monitoring needs..." 
                              className="bg-black/50 border-white/20 text-white focus-visible:ring-ohm-green min-h-[120px] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-ohm-green to-ohm-green hover:from-ohm-green/90 hover:to-ohm-green/90 text-white h-12 text-base shadow-lg shadow-ohm-green/20 transition-all"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      By submitting, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </form>
                </Form>
              )}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">Frequently Asked Questions</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/product" className="text-gray-400 hover:text-ohm-green transition-colors">Product Info →</Link>
              <Link to="/pricing" className="text-gray-400 hover:text-ohm-green transition-colors">Pricing →</Link>
              <Link to="/services/bill-calculator" className="text-gray-400 hover:text-ohm-green transition-colors">Bill Calculator →</Link>
              <Link to="/services/report-fault" className="text-gray-400 hover:text-ohm-green transition-colors">Report Fault →</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Handshake icon component
function Handshake(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 12l-4 4-4-4" />
      <path d="M7 8l-4 4 4 4" />
      <path d="M17 8l4 4-4 4" />
      <path d="M12 16v4" />
      <path d="M8 4h8" />
      <path d="M12 4v4" />
    </svg>
  );
}