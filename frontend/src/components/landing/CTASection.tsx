import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-secondary/20 blur-3xl rounded-full pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center p-12 md:p-16 rounded-3xl bg-card border border-border shadow-2xl backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Ready to Transform Your Learning Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of students who are learning faster and smarter with our AI-powered educational platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/sign-up" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-primary-foreground bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Get Started for Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/demo" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-foreground bg-background hover:bg-muted border border-border transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required. Free plan available forever.
          </p>
        </div>
      </div>
    </section>
  );
}
