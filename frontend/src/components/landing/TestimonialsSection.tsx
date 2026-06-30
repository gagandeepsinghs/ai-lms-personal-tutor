"use client";

import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

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
    },
    {
      quote: "The personalized learning paths helped me transition from a totally different career into tech. The AI is incredibly patient and clear.",
      author: "Emily Taylor",
      role: "UX Designer",
      avatar: "https://i.pravatar.cc/150?u=emily"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

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

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <div className="p-10 rounded-3xl bg-background border border-border/50 shadow-lg relative max-w-2xl mx-auto">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
                    
                    <p className="text-lg md:text-xl text-foreground leading-relaxed italic mb-8 relative z-10">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                      />
                      <div>
                        <h4 className="font-bold text-foreground text-lg">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-background border border-border/50 hover:bg-muted text-foreground transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-primary' : 'bg-primary/20'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-background border border-border/50 hover:bg-muted text-foreground transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
