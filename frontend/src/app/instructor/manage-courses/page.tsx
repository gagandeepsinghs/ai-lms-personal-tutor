import { Search, Filter, Edit, Trash2, MoreVertical, Plus } from "lucide-react";
import Link from "next/link";

export default function ManageCoursesPage() {
  const courses = [
    {
      title: "Advanced React Patterns",
      category: "Web Development",
      students: 450,
      price: "$89.99",
      status: "Published",
      revenue: "$40,495",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "React Hooks Masterclass",
      category: "Web Development",
      students: 0,
      price: "$49.99",
      status: "Draft",
      revenue: "$0",
      rating: 0,
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Fullstack Next.js 14",
      category: "Web Development",
      students: 120,
      price: "$129.99",
      status: "Published",
      revenue: "$15,598",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Manage Courses</h1>
          <p className="text-muted-foreground">View and edit your created courses.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Link href="/instructor/create-course" className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center gap-2 flex-1 sm:flex-none text-sm">
            <Plus className="w-4 h-4" /> Create Course
          </Link>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        <div className="p-4 sm:p-6 border-b border-border flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="w-full pl-9 pr-4 py-2 bg-muted/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <button className="p-2 border border-border rounded-lg text-muted-foreground hover:bg-muted transition-colors flex shrink-0 w-full sm:w-auto justify-center">
            <Filter className="w-4 h-4" /> <span className="ml-2 sm:hidden text-sm">Filter</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-border bg-muted/20">
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Course</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Students</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {courses.map((course, index) => (
                <tr key={index} className="hover:bg-muted/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-12 rounded-lg bg-muted overflow-hidden shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm line-clamp-1">{course.title}</h4>
                        <p className="text-xs text-muted-foreground">{course.category} • {course.price}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-md ${
                      course.status === 'Published' 
                        ? 'bg-green-500/10 text-green-600 dark:text-green-400' 
                        : 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground font-medium">
                    {course.students}
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground font-bold">
                    {course.revenue}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-lg" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-destructive transition-colors hover:bg-destructive/10 rounded-lg" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-muted rounded-lg">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
