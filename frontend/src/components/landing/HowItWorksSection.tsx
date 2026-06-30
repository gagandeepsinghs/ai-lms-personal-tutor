import { UserPlus, Sparkles, Award } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "1. Create Your Profile",
      description: "Sign up and tell us about your goals, current skill level, and preferred learning style."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "2. Meet Your AI Tutor",
      description: "Our AI analyzes your profile to create a custom learning path just for you."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "3. Learn & Achieve",
      description: "Follow your personalized curriculum, get instant feedback, and earn certificates."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes. Our intelligent onboarding ensures your learning experience is perfectly tailored to you from day one.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative group">
                <div className="w-24 h-24 rounded-full bg-card border-4 border-background shadow-xl flex items-center justify-center text-primary mb-6 relative z-10 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-[280px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
