import { 
  BookOpen, 
  Clock, 
  Award, 
  Flame, 
  PlayCircle,
  Calendar,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

export default function DashboardOverview() {
  const stats = [
    { title: "Courses in Progress", value: "3", icon: <BookOpen className="w-5 h-5 text-blue-500" /> },
    { title: "Hours Learned", value: "24.5", icon: <Clock className="w-5 h-5 text-purple-500" /> },
    { title: "Certificates", value: "2", icon: <Award className="w-5 h-5 text-yellow-500" /> },
    { title: "Day Streak", value: "5", icon: <Flame className="w-5 h-5 text-orange-500" /> },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      {/* Welcome Section */}
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
        <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="relative z-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-muted-foreground max-w-xl">
            You're on a 5-day learning streak. Keep up the great work! Your AI tutor suggests focusing on React Hooks today based on your previous test results.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-card border border-border rounded-2xl p-6 shadow-sm flex items-center gap-4 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Continue Learning */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">Continue Learning</h2>
            <Link href="/dashboard/courses" className="text-sm font-medium text-primary hover:underline">View All</Link>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 shadow-sm group hover:border-primary/50 transition-colors">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-48 h-32 rounded-xl bg-muted shrink-0 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop" alt="React" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">Web Development</span>
                <h3 className="text-lg font-bold text-foreground mb-2">Advanced React Patterns</h3>
                <p className="text-sm text-muted-foreground mb-4">Module 4: Custom Hooks & Performance</p>
                <div className="space-y-2 mt-auto">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground font-medium">65% Completed</span>
                    <span className="text-foreground font-bold">12/18 Lessons</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '65%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Tests & Activity */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-6">Upcoming Tests</h2>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground mb-1">React Fundamentals Quiz</h4>
                  <p className="text-xs text-muted-foreground mb-2">Tomorrow, 10:00 AM</p>
                  <Link href="/dashboard/tests" className="text-xs font-medium text-primary hover:underline">Prepare with AI Tutor</Link>
                </div>
              </div>
              <div className="flex gap-4 items-start opacity-70">
                <div className="w-12 h-12 rounded-xl bg-muted text-muted-foreground flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground mb-1">UI/UX Design Mid-term</h4>
                  <p className="text-xs text-muted-foreground mb-2">Friday, 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-6">Recent Activity</h2>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-6">
              <div className="flex gap-4 items-start relative">
                <div className="absolute left-3 top-8 bottom-[-24px] w-0.5 bg-border z-0" />
                <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 relative z-10 border border-background">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-foreground">Completed <span className="font-bold">Module 3: State Management</span></p>
                  <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-4 items-start relative">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center shrink-0 relative z-10 border border-background">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-foreground">Earned <span className="font-bold">Fast Learner Badge</span></p>
                  <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
