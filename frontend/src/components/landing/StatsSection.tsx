import { Users, BookOpen, Award, Globe } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "500K+",
      label: "Active Learners",
      description: "Join a growing community of students."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      value: "1,200+",
      label: "Premium Courses",
      description: "Extensive library across all categories."
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "95%",
      label: "Success Rate",
      description: "Students achieving their learning goals."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "120+",
      label: "Countries",
      description: "Global reach and accessibility."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-black blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-primary-foreground/20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center pt-8 sm:pt-0 sm:px-8 group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm shadow-inner">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2 text-white drop-shadow-md">
                {stat.value}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white/90">{stat.label}</h3>
              <p className="text-primary-foreground/70 text-sm max-w-[200px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
