import { Star, Clock, BookOpen, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function PopularCoursesSection() {
  const courses = [
    {
      title: "Advanced React Patterns",
      instructor: "Sarah Drasner",
      rating: 4.9,
      students: "12.5k",
      duration: "14h 30m",
      lessons: 84,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
      price: "$89.99",
      category: "Web Development"
    },
    {
      title: "Machine Learning Masterclass",
      instructor: "Andrew Ng",
      rating: 4.8,
      students: "34.2k",
      duration: "42h 15m",
      lessons: 156,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop",
      price: "$129.99",
      category: "Data Science"
    },
    {
      title: "Complete UI/UX Design Boot-camp",
      instructor: "Gary Simon",
      rating: 4.7,
      students: "8.1k",
      duration: "28h 45m",
      lessons: 112,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop",
      price: "$94.50",
      category: "Design"
    }
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trending AI-Powered Courses
            </h2>
            <p className="text-lg text-muted-foreground">
              Learn from industry experts with courses enhanced by our personalized AI tutoring system.
            </p>
          </div>
          <Link href="/courses" className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium transition-colors">
            Browse All Courses
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="group rounded-2xl bg-card border border-border/50 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-background/90 text-foreground backdrop-blur-sm shadow-sm">
                    {course.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-bold text-foreground">{course.rating}</span>
                  <span className="text-sm text-muted-foreground ml-1">({course.students} students)</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">by {course.instructor}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">{course.price}</span>
                  <Link href={`/courses/${index}`} className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
