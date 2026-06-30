import { Search, Filter, PlayCircle, Star, Clock } from "lucide-react";
import Link from "next/link";

export default function CoursesPage() {
  const courses = [
    {
      title: "Advanced React Patterns",
      category: "Web Development",
      progress: 65,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
      totalModules: 12,
      completedModules: 8,
      lastAccessed: "2 hours ago"
    },
    {
      title: "Machine Learning Foundations",
      category: "Data Science",
      progress: 30,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop",
      totalModules: 15,
      completedModules: 4,
      lastAccessed: "Yesterday"
    },
    {
      title: "UI/UX Design Essentials",
      category: "Design",
      progress: 100,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop",
      totalModules: 8,
      completedModules: 8,
      lastAccessed: "1 week ago"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">My Courses</h1>
          <p className="text-muted-foreground">Manage and track your enrolled courses.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="w-full pl-9 pr-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <button className="p-2 bg-card border border-border rounded-lg text-muted-foreground hover:bg-muted transition-colors flex shrink-0">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm group hover:border-primary/50 transition-colors flex flex-col">
            <div className="h-48 relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              {course.progress === 100 && (
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-sm">
                  Completed
                </div>
              )}
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{course.category}</span>
              <h3 className="text-lg font-bold text-foreground mb-4 line-clamp-2">{course.title}</h3>
              
              <div className="space-y-2 mt-auto mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground font-medium">{course.progress}%</span>
                  <span className="text-foreground font-medium">{course.completedModules}/{course.totalModules} Modules</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${course.progress === 100 ? 'bg-green-500' : 'bg-primary'}`} 
                    style={{ width: `${course.progress}%` }} 
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{course.lastAccessed}</span>
                </div>
                <button className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                  course.progress === 100 
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" 
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}>
                  {course.progress === 100 ? "Review" : "Continue"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
