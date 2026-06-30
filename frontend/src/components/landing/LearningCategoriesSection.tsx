import { Code, Palette, Briefcase, Database, Layout, Smartphone, PieChart, Globe } from "lucide-react";
import Link from "next/link";

export function LearningCategoriesSection() {
  const categories = [
    { name: "Web Development", icon: <Code className="w-6 h-6" />, courses: 120 },
    { name: "UI/UX Design", icon: <Palette className="w-6 h-6" />, courses: 85 },
    { name: "Business", icon: <Briefcase className="w-6 h-6" />, courses: 210 },
    { name: "Data Science", icon: <Database className="w-6 h-6" />, courses: 145 },
    { name: "Architecture", icon: <Layout className="w-6 h-6" />, courses: 60 },
    { name: "Mobile Dev", icon: <Smartphone className="w-6 h-6" />, courses: 95 },
    { name: "Marketing", icon: <PieChart className="w-6 h-6" />, courses: 180 },
    { name: "Languages", icon: <Globe className="w-6 h-6" />, courses: 230 },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Top Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Find the perfect course to advance your career or learn a new skill.
            </p>
          </div>
          <Link href="/categories" className="text-primary font-medium hover:underline inline-flex items-center">
            View All Categories
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              href={`/category/${category.name.toLowerCase().replace(/ /g, '-')}`} 
              key={index}
              className="group flex flex-col p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{category.name}</h3>
              <span className="text-sm text-muted-foreground">{category.courses} Courses</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
