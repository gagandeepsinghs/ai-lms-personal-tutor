import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background Gradients */}
      <div className="absolute inset-x-0 top-0 h-96 overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-semibold tracking-wide">Introducing AI LMS Personal Tutor</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 max-w-4xl mx-auto leading-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Master Any Subject with Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">AI-Powered Tutor</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Experience the next generation of learning. Our AI adapts to your learning style, providing personalized feedback, customized curriculums, and 24/7 support.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <Link href="/sign-up" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-primary-foreground bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
            Start Learning for Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link href="/courses" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-foreground bg-secondary hover:bg-secondary/80 border border-border transition-all duration-300">
            Explore Courses
          </Link>
        </div>

        {/* Dashboard preview mockup */}
        <div className="mt-16 sm:mt-24 relative max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl p-2 sm:p-4">
            <div className="rounded-xl overflow-hidden border border-border bg-background">
              <div className="aspect-video bg-muted relative flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 flex items-center justify-center">
                    <div className="text-center p-8">
                       <h3 className="text-2xl font-bold mb-2 text-foreground">Interactive AI Learning Dashboard</h3>
                       <p className="text-muted-foreground">Premium dashboard interface visualization</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
