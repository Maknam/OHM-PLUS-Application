import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import { newsArticles } from "@/data/news";

export default function NewsArticle() {
  const params = useParams();
  const slug = params.slug;
  const article = newsArticles.find(a => a.slug === slug);
  const relatedArticles = newsArticles.filter(a => a.slug !== slug).slice(0, 3);

  if (!article) {
    return (
      <div className="pt-32 pb-24 min-h-[100dvh] flex items-center justify-center text-center bg-theme">
        <div>
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-foreground/70 mb-8">The news article you are looking for does not exist.</p>
          <Link to="/news">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Return to News</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-[100dvh] relative overflow-hidden bg-theme">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="theme-grid" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <Link to="/news" className="inline-flex items-center text-foreground/60 hover:text-secondary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to News
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="outline" className="bg-primary/10 text-secondary border-primary/20 text-sm py-1">
              {article.category}
            </Badge>
            <span className="text-foreground/60 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            {article.summary}
          </p>
        </header>

        <div className="h-64 md:h-96 w-full bg-muted/40 backdrop-blur-sm border border-border rounded-2xl mb-12 flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          <div className="text-foreground/10 font-display text-5xl font-bold tracking-widest select-none transform -rotate-6 scale-150">
            ARTICLE COVER
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8 prose prose-invert prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-foreground/70 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="md:col-span-4 space-y-8">
            <div className="p-6 bg-muted/40 backdrop-blur-sm border border-primary/20 rounded-xl">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-secondary" /> Share Article
              </h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="border-border hover:bg-primary/20 hover:border-secondary/30 text-foreground">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-border hover:bg-primary/20 hover:border-secondary/30 text-foreground">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-border hover:bg-primary/20 hover:border-secondary/30 text-foreground">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-display font-bold text-foreground mb-6">Related News</h3>
              <div className="space-y-4">
                {relatedArticles.map((rel) => (
                  <Link key={rel.id} to={`/news/${rel.slug}`}>
                    <div className="group cursor-pointer">
                      <p className="text-xs text-foreground/60 mb-1">
                        {new Date(rel.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                      <h4 className="text-sm font-bold text-foreground group-hover:text-secondary transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}