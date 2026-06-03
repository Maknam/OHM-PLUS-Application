import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { 
  Sparkles, 
  Clock, 
  Mail, 
  Send, 
  CheckCircle2, 
  Twitter, 
  Github, 
  Linkedin,
  Zap,
  Heart,
  Calendar,
  Activity,
  Cloud,
  Sun,
  Moon,
  Star,
  Battery,
  TrendingUp,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

// Mock submit function - replace with your actual API call
const useSubmitWaitlist = () => {
  const [isPending, setIsPending] = useState(false);
  
  const mutate = async (data: { email: string }, options?: { onSuccess?: () => void; onError?: () => void }) => {
    setIsPending(true);
    try {
      console.log("Adding to waitlist:", data.email);
      await new Promise(resolve => setTimeout(resolve, 1000));
      options?.onSuccess?.();
    } catch (error) {
      options?.onError?.();
    } finally {
      setIsPending(false);
    }
  };
  
  return { mutate, isPending };
};

export default function ComingSoon() {
  const { toast } = useToast();
  const submitWaitlist = useSubmitWaitlist();
  const [isSuccess, setIsSuccess] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 120);
    launchDate.setHours(0, 0, 0, 0);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitWaitlist.mutate(
      { email: values.email },
      {
        onSuccess: () => {
          setIsSuccess(true);
          form.reset();
          toast({
            title: "You're on the list! 🎉",
            description: "We'll notify you when we launch. Exciting things ahead!",
          });
        },
        onError: () => {
          toast({
            title: "Something went wrong",
            description: "Please try again or contact support.",
            variant: "destructive",
          });
        },
      }
    );
  }

  const features = [
    { icon: Zap, title: "Real-time Monitoring", description: "Track your energy usage as it happens", color: "from-ohm-orange to-ohm-orange/70" },
    { icon: Activity, title: "Smart Analytics", description: "AI-powered insights to optimize usage", color: "from-ohm-green to-ohm-green/70" },
    { icon: Calendar, title: "Predictive Alerts", description: "Never miss an important notification", color: "from-ohm-blue to-ohm-blue/70" },
    { icon: Battery, title: "Battery Optimization", description: "Extend battery life by 30%", color: "from-ohm-green to-ohm-green/70" },
    { icon: TrendingUp, title: "Cost Savings", description: "Reduce bills by up to 40%", color: "from-ohm-orange to-ohm-orange/70" },
    { icon: Award, title: "Carbon Tracking", description: "Monitor your environmental impact", color: "from-ohm-blue to-ohm-blue/70" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-[#1DA1F2]" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-[#6e5494]" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-[#0077B5]" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2a] to-[#1a1a3e] pt-20">
      
      {/* Animated Gradient Orbs with more colors */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 40, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-ohm-blue/30 to-ohm-green/20 blur-[100px]"
        />
        <motion.div
          animate={{ 
            x: [0, -30, 40, 0],
            y: [0, 30, -40, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-200px] left-[-150px] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-ohm-green/20 to-ohm-blue/20 blur-[120px]"
        />
        <motion.div
          animate={{ 
            x: [0, 30, -40, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.05, 0.95, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-ohm-orange/10 to-ohm-orange/10 blur-[100px]"
        />
        <motion.div
          animate={{ 
            x: [0, -20, 20, 0],
            y: [0, 20, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 8 }}
          className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] rounded-full bg-gradient-to-r from-ohm-green/10 to-ohm-blue/10 blur-[100px]"
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -30, 0, 30, 0],
              opacity: [0, 1, 0.5, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Mouse-follow glow effect */}
      <motion.div
        className="fixed w-[300px] h-[300px] rounded-full bg-gradient-to-r from-ohm-blue/10 to-ohm-green/5 blur-[80px] pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />

      {/* Subtle Grid Pattern with color */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,75,158,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,75,158,0.05) 1px, transparent 1px),
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)
          `,
          backgroundSize: '50px 50px, 50px 50px, 100% 100%'
        }}
      />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center py-8">
        
        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl w-full"
        >
          <div className="bg-gradient-to-br from-black/50 via-black/40 to-black/50 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/10 hover:border-ohm-blue/30 transition-all duration-500">
            
            {/* Animated Icon with glow */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-ohm-green to-ohm-blue rounded-2xl blur-xl opacity-50 animate-pulse" />
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-ohm-green to-ohm-blue flex items-center justify-center shadow-2xl">
                  <Zap className="w-10 h-10 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Badge with animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-ohm-blue/20 to-ohm-green/20 backdrop-blur-sm border border-ohm-blue/30 text-ohm-green text-sm font-medium shadow-lg">
                <Sparkles className="w-4 h-4 animate-pulse" />
                Launching Soon - Be the First to Know
              </div>
            </motion.div>

            {/* Headline with gradient animation */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-center mb-4 tracking-wide"
            >
              <span className="text-white">
                Something Beautiful
              </span>
              <br />
              <span className="bg-gradient-to-r from-ohm-green via-ohm-green to-ohm-blue bg-clip-text text-transparent animate-gradient">
                Is Coming
              </span>
            </motion.h1>

            {/* Description with icons */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-gray-300 text-lg md:text-xl mb-8 leading-relaxed flex items-center justify-center gap-2 flex-wrap"
            >
              <Cloud className="w-5 h-5 text-ohm-blue" />
              We're crafting an exceptional dashboard experience
              <Sun className="w-5 h-5 text-ohm-orange" />
              <br />
              that puts humanity back into energy data.
              <Moon className="w-5 h-5 text-ohm-blue" />
            </motion.p>

            {/* Countdown Timer with gradient backgrounds */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-4 gap-3 md:gap-4 mb-10"
            >
              {Object.entries(timeLeft).map(([unit, value], index) => {
                const gradients = [
                  "from-ohm-blue to-ohm-blue",
                  "from-ohm-green to-ohm-green",
                  "from-ohm-orange to-ohm-orange",
                  "from-ohm-green to-ohm-blue"
                ];
                return (
                  <motion.div
                    key={unit}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-ohm-blue/20 to-ohm-green/20 rounded-xl blur group-hover:blur-md transition-all" />
                    <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-ohm-blue/30 transition-all hover:-translate-y-1">
                      <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${gradients[index]} bg-clip-text text-transparent mb-1`}>
                        {String(value).padStart(2, '0')}
                      </div>
                      <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">
                        {unit}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Email Signup Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-ohm-green/20 to-ohm-green/20 flex items-center justify-center mx-auto mb-4 border-2 border-ohm-green/50 animate-pulse">
                    <CheckCircle2 className="w-10 h-10 text-ohm-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">You're on the list! 🎉</h3>
                  <p className="text-gray-300 mb-4">
                    We'll notify you when we launch. Stay tuned for something special!
                  </p>
                  <Button 
                    onClick={() => setIsSuccess(false)} 
                    variant="outline"
                    className="border-ohm-blue/30 text-white hover:bg-ohm-blue/20 hover:border-ohm-blue/50 transition-all"
                  >
                    Join with another email
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <Input
                        placeholder="Enter your email address"
                        type="email"
                        {...form.register("email")}
                        className="h-12 bg-black/50 border-white/20 focus:border-ohm-green focus:ring-ohm-green/20 text-white placeholder:text-gray-500 transition-all"
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-ohm-orange mt-1">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                    <Button 
                      type="submit"
                      disabled={submitWaitlist.isPending}
                      className="h-12 px-8 bg-gradient-to-r from-ohm-green to-ohm-blue hover:from-ohm-green/90 hover:to-ohm-blue/90 text-white shadow-lg shadow-ohm-green/20 transition-all hover:scale-105"
                    >
                      {submitWaitlist.isPending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Joining...
                        </>
                      ) : (
                        <>
                          Notify Me <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1">
                    <Star className="w-3 h-3 text-ohm-green" />
                    No spam, ever. Unsubscribe anytime.
                    <Star className="w-3 h-3 text-ohm-green" />
                  </p>
                </form>
              )}
            </motion.div>

            {/* Features Preview Grid - Now with 6 features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 pt-6 border-t border-white/10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white group-hover:text-ohm-green transition-colors">{feature.title}</h4>
                    <p className="text-xs text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social & Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-8 pt-6 border-t border-white/10"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4 text-ohm-green" />
                    <span>Launching in 120 days</span>
                  </div>
                  <div className="w-px h-4 bg-gray-700 hidden sm:block" />
                  <div className="flex items-center gap-2 text-gray-400">
                    <Mail className="w-4 h-4 text-ohm-blue" />
                    <span>Priority access for early signups</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2, scale: 1.1 }}
                      className={`w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 ${social.color} hover:bg-white/10 transition-all`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/" className="text-gray-400 hover:text-ohm-green transition-colors flex items-center gap-1">
              Home
            </Link>
            <Link to="/product" className="text-gray-400 hover:text-ohm-green transition-colors flex items-center gap-1">
              Product
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-ohm-green transition-colors flex items-center gap-1">
              Contact
            </Link>
            <Link to="/pricing" className="text-gray-400 hover:text-ohm-green transition-colors flex items-center gap-1">
              Pricing
            </Link>
            <Link to="/energy-tips" className="text-gray-400 hover:text-ohm-green transition-colors flex items-center gap-1">
              Energy Tips
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
            © 2026 OhmPlus. All rights reserved. Built with <Heart className="w-3 h-3 inline text-ohm-orange animate-pulse" /> for Africa.
          </p>
        </motion.div>
      </div>

      {/* Add gradient animation keyframes */}
      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}