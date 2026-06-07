import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import { newsArticles } from "@/data/news";

export default function News() {
  const featuredArticle = newsArticles[0];
  const restArticles = newsArticles.slice(1);

  return (
    <div className="pt-32 pb-24 min-h-[100dvh] bg-theme">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            News & Updates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Stay informed with the latest company news, industry insights, and energy policies across Africa.
          </motion.p>
        </div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Link to={`/news/${featuredArticle.slug}`}>
            <Card className="bg-muted/40 border-primary/20 overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto bg-muted/60 border-b md:border-b-0 md:border-r border-border relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
                  {/* Mock Image Placeholder */}
                  <div className="text-primary/20 font-display text-4xl font-bold tracking-widest -rotate-12 transform scale-150 select-none">
                    OHM PLUS
                  </div>
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {featuredArticle.category}
                    </Badge>
                    <span className="text-sm text-foreground/60 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredArticle.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-foreground/70 mb-8 text-lg">
                    {featuredArticle.summary}
                  </p>
                  <div className="flex items-center text-primary font-medium mt-auto group-hover:gap-2 transition-all">
                    Read Full Article <ArrowRight className="w-5 h-5 ml-1" />
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </motion.div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restArticles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Link to={`/news/${article.slug}`}>
                <Card className="h-full bg-muted/40 border-border hover:border-primary/30 transition-all hover:shadow-[0_0_20px_rgba(0,114,206,0.1)] group flex flex-col cursor-pointer">
                  <div className="h-48 bg-muted/60 border-b border-border relative flex items-center justify-center overflow-hidden shrink-0">
                    <div className="text-foreground/10 font-display text-2xl font-bold select-none">
                      NEWS
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="bg-muted/60 border-border text-foreground/60 text-xs">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-foreground/60">
                        {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-6 line-clamp-3">
                      {article.summary}
                    </p>
                    <div className="mt-auto flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      Read more <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}