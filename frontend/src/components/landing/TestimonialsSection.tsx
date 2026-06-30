import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The AI tutor feels like a real teacher. It caught my specific misunderstandings in React and explained them perfectly. I learned faster here than in my university classes.",
      author: "David Chen",
      role: "Frontend Developer",
      avatar: "https://i.pravatar.cc/150?u=david"
    },
    {
      quote: "I've tried many platforms, but the adaptive curriculum here is unmatched. It skipped what I already knew and focused deeply on my weak points. Incredible experience.",
      author: "Sarah Jenkins",
      role: "Data Scientist",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      quote: "As a busy professional, I love that I can get instant answers from the AI tutor at 2 AM without waiting for a forum response. Highly recommended!",
      author: "Michael Rodriguez",
      role: "Product Manager",
      avatar: "https://i.pravatar.cc/150?u=michael"
    }
  ];

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by Learners Worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our community has to say about their personalized learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-2xl bg-background border border-border/50 shadow-sm relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex items-center gap-4 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
