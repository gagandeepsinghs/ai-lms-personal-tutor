"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the AI Tutor actually work?",
      answer: "Our AI Tutor uses advanced machine learning models to analyze your interactions, code submissions, and quiz results. It builds a unique profile of your learning style and tailors explanations, hints, and subsequent materials specifically to how you learn best."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes! You can cancel your subscription at any time from your account settings. You will continue to have access to all premium features until the end of your current billing period."
    },
    {
      question: "Are the certificates recognized by employers?",
      answer: "Our certificates are recognized by top tech companies worldwide. They verify not just completion, but actual competency through our AI-monitored capstone projects and assessments."
    },
    {
      question: "Do I need any prior coding experience?",
      answer: "Not necessarily. We offer courses ranging from complete beginner to advanced levels. The AI Tutor is especially helpful for beginners as it provides infinitely patient, customized explanations for foundational concepts."
    },
    {
      question: "How is this different from regular online courses?",
      answer: "Unlike static video courses, our platform is highly interactive. The curriculum adapts in real-time, the AI provides instant personalized feedback on exercises, and you can converse with the AI Tutor exactly like you would with a human mentor."
    }
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you need more help, feel free to reach out to our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-border/50 rounded-2xl bg-background overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-foreground">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
