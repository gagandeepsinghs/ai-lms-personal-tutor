import { Search, Filter, Mail, Eye } from "lucide-react";

export default function StudentsPage() {
  const students = [
    { name: "Sarah Jenkins", email: "sarah@example.com", course: "Advanced React Patterns", enrolled: "Jan 12, 2026", progress: 65, avatar: "https://i.pravatar.cc/150?u=sarah" },
    { name: "Michael Chen", email: "michael@example.com", course: "UI/UX Design Essentials", enrolled: "Feb 03, 2026", progress: 100, avatar: "https://i.pravatar.cc/150?u=michael" },
    { name: "Emily Taylor", email: "emily@example.com", course: "Machine Learning Foundations", enrolled: "Mar 15, 2026", progress: 30, avatar: "https://i.pravatar.cc/150?u=emily" },
    { name: "David Rodriguez", email: "david@example.com", course: "Advanced React Patterns", enrolled: "Apr 02, 2026", progress: 12, avatar: "https://i.pravatar.cc/150?u=david" },
    { name: "Alex Developer", email: "alex@example.com", course: "Fullstack Next.js 14", enrolled: "Jun 10, 2026", progress: 85, avatar: "https://i.pravatar.cc/150?u=alex" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Students</h1>
          <p className="text-muted-foreground">Track student progress and engagement.</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        <div className="p-4 sm:p-6 border-b border-border flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search students..." 
              className="w-full pl-9 pr-4 py-2 bg-muted/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <select className="bg-muted border border-border text-sm rounded-lg px-3 py-2 focus:outline-none w-full sm:w-auto">
              <option>All Courses</option>
              <option>Advanced React Patterns</option>
              <option>UI/UX Design Essentials</option>
            </select>
            <button className="p-2 border border-border rounded-lg text-muted-foreground hover:bg-muted transition-colors flex shrink-0">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-border bg-muted/20">
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Student Name</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Enrolled Course</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Enrollment Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Progress</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {students.map((student, index) => (
                <tr key={index} className="hover:bg-muted/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 shrink-0 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={student.avatar} alt={student.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm">{student.name}</h4>
                        <p className="text-xs text-muted-foreground">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">
                    {student.course}
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    {student.enrolled}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden max-w-[120px]">
                        <div 
                          className={`h-full rounded-full ${student.progress === 100 ? 'bg-green-500' : 'bg-primary'}`} 
                          style={{ width: \`\${student.progress}%\` }} 
                        />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-lg" title="Email Student">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-muted rounded-lg" title="View Details">
                        <Eye className="w-4 h-4" />
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
