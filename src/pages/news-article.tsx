import { useParams, Link } from "wouter";
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
      <div className="pt-32 pb-24 min-h-[100dvh] flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">The news article you are looking for does not exist.</p>
          <Link href="/news">
            <Button className="bg-ohm-green hover:bg-ohm-green/90 text-white">Return to News</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-[100dvh] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2a] to-[#1a1a3e]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-ohm-blue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ohm-green/10 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ohm-blue/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,75,158,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,75,158,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <Link href="/news" className="inline-flex items-center text-gray-400 hover:text-ohm-green transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to News
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="outline" className="bg-ohm-blue/10 text-ohm-green border-ohm-blue/20 text-sm py-1">
              {article.category}
            </Badge>
            <span className="text-gray-400 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            {article.summary}
          </p>
        </header>

        <div className="h-64 md:h-96 w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl mb-12 flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-ohm-blue/10 to-transparent" />
          <div className="text-gray-500/10 font-display text-5xl font-bold tracking-widest select-none transform -rotate-6 scale-150">
            ARTICLE COVER
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8 prose prose-invert prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-gray-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="md:col-span-4 space-y-8">
            <div className="p-6 bg-black/40 backdrop-blur-sm border border-ohm-blue/20 rounded-xl">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-ohm-green" /> Share Article
              </h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="border-white/10 hover:bg-ohm-blue/20 hover:border-ohm-green/30 text-white">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-white/10 hover:bg-ohm-blue/20 hover:border-ohm-green/30 text-white">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-white/10 hover:bg-ohm-blue/20 hover:border-ohm-green/30 text-white">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-display font-bold text-white mb-6">Related News</h3>
              <div className="space-y-4">
                {relatedArticles.map((rel) => (
                  <Link key={rel.id} href={`/news/${rel.slug}`}>
                    <div className="group cursor-pointer">
                      <p className="text-xs text-gray-400 mb-1">
                        {new Date(rel.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                      <h4 className="text-sm font-bold text-white group-hover:text-ohm-green transition-colors line-clamp-2">
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