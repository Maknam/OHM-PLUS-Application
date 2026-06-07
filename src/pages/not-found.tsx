import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-theme">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="theme-grid" />
      </div>

      <div className="relative z-10 w-full max-w-md mx-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-muted/40 backdrop-blur-md border-primary/30 shadow-2xl overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-secondary to-primary" />
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 rounded-full bg-destructive/20 flex items-center justify-center mb-6 border-2 border-destructive/30"
                >
                  <AlertCircle className="h-10 w-10 text-destructive" />
                </motion.div>
                
                <h1 className="text-7xl font-display font-bold text-foreground mb-2">404</h1>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Page Not Found</h2>
                
                <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-primary mb-6" />
                
                <p className="text-foreground/70 mb-8 max-w-xs">
                  Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Link to="/" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white shadow-lg shadow-secondary/20">
                      <Home className="mr-2 w-4 h-4" />
                      Back to Home
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    onClick={() => window.history.back()}
                    className="border-primary/30 text-foreground hover:bg-primary/20"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Go Back
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/" className="text-foreground/50 hover:text-secondary transition-colors">Home</Link>
            <span className="text-foreground/30">•</span>
            <Link to="/product" className="text-foreground/50 hover:text-secondary transition-colors">Product</Link>
            <span className="text-foreground/30">•</span>
            <Link to="/solutions" className="text-foreground/50 hover:text-secondary transition-colors">Solutions</Link>
            <span className="text-foreground/30">•</span>
            <Link to="/contact" className="text-foreground/50 hover:text-secondary transition-colors">Contact</Link>
          </div>
          <p className="text-xs text-foreground/40 mt-4">
            © {new Date().getFullYear()} OHM Plus Energy Management. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}