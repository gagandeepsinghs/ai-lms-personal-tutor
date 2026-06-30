import { Brain, Target, Zap, Clock, Shield, Trophy } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Personalized AI Tutor",
      description: "Get 24/7 assistance from an AI that understands your learning pace and adapts to your needs."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Adaptive Curriculum",
      description: "Course materials dynamically adjust based on your performance, ensuring you master every concept."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Feedback",
      description: "Receive immediate, detailed feedback on assignments and quizzes to accelerate your understanding."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Learn at Your Pace",
      description: "No rigid schedules. Learn whenever and wherever you want with bite-sized, engaging lessons."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Certifications",
      description: "Earn industry-recognized certificates upon completion to boost your resume and career."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Gamified Experience",
      description: "Stay motivated with achievements, leaderboards, and daily streaks as you progress."
    }
  ];

  return (
    <section className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Supercharge Your Learning with AI
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform goes beyond traditional video courses. We offer an interactive, intelligent environment designed to maximize your potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
