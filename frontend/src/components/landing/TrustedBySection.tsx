export function TrustedBySection() {
  const companies = [
    "Microsoft", "Google", "Amazon", "Meta", "Netflix", "Apple"
  ];

  return (
    <section className="py-12 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          Trusted by learners from top companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company, index) => (
            <div key={index} className="text-xl md:text-2xl font-bold text-foreground/80 hover:text-foreground transition-colors">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
