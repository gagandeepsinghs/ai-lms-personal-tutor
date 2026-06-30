import { Check } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for getting started and exploring.",
      features: [
        "Access to free courses",
        "Basic AI tutor assistance",
        "Community forum access",
        "Standard support"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Everything you need to master new skills faster.",
      features: [
        "Unlimited premium courses",
        "Unlimited AI tutor interactions",
        "Personalized learning paths",
        "Verified certificates",
        "Priority support"
      ],
      cta: "Start 7-Day Free Trial",
      popular: true
    },
    {
      name: "Team",
      price: "$99",
      period: "/month/user",
      description: "Empower your entire team to upskill.",
      features: [
        "Everything in Pro",
        "Team analytics dashboard",
        "Custom learning tracks",
        "SSO integration",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that best fits your learning goals. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 border ${plan.popular ? 'bg-card border-primary shadow-2xl scale-105' : 'bg-background border-border/50 shadow-md hover:border-primary/50'} transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-sm">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6 min-h-[48px]">{plan.description}</p>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>
              
              <Link 
                href={plan.name === 'Team' ? '/contact' : '/sign-up'} 
                className={`w-full block text-center py-3 px-6 rounded-xl font-bold transition-colors ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
              >
                {plan.cta}
              </Link>
              
              <div className="mt-8 space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
