"use client";

import { 
  Users, 
  DollarSign, 
  BookOpen, 
  Star,
  TrendingUp,
  ArrowUpRight
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function InstructorDashboard() {
  const stats = [
    { title: "Total Revenue", value: "$12,450", icon: <DollarSign className="w-5 h-5 text-green-500" />, trend: "+15% this month" },
    { title: "Active Students", value: "842", icon: <Users className="w-5 h-5 text-blue-500" />, trend: "+42 this week" },
    { title: "Active Courses", value: "4", icon: <BookOpen className="w-5 h-5 text-purple-500" />, trend: "1 draft" },
    { title: "Avg. Rating", value: "4.8", icon: <Star className="w-5 h-5 text-yellow-500" />, trend: "From 320 reviews" },
  ];

  const revenueData = [
    { name: 'Jan', revenue: 1200 },
    { name: 'Feb', revenue: 1900 },
    { name: 'Mar', revenue: 1500 },
    { name: 'Apr', revenue: 2200 },
    { name: 'May', revenue: 2800 },
    { name: 'Jun', revenue: 2850 },
  ];

  const recentEnrollments = [
    { student: "Sarah Jenkins", course: "Advanced React Patterns", date: "2 hours ago", amount: "$89.99" },
    { student: "Michael Chen", course: "UI/UX Design Essentials", date: "5 hours ago", amount: "$94.50" },
    { student: "Emily Taylor", course: "Machine Learning Foundations", date: "Yesterday", amount: "$129.99" },
    { student: "David Rodriguez", course: "Advanced React Patterns", date: "Yesterday", amount: "$89.99" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Welcome back, Prof. Andrew! 🚀
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your courses today.
          </p>
        </div>
        <button className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2">
          <TrendingUp className="w-4 h-4" /> View Detailed Analytics
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:border-primary/30 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                {stat.icon}
              </div>
            </div>
            <h3 className="text-sm text-muted-foreground font-medium mb-1">{stat.title}</h3>
            <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
            <p className="text-xs font-medium text-green-500">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Revenue Overview</h2>
            <select className="bg-muted border border-border text-sm rounded-lg px-3 py-1.5 focus:outline-none">
              <option>Last 6 Months</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))'}} tickFormatter={(val) => \`$\${val}\`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                  formatter={(value) => [\`$\${value}\`, 'Revenue']}
                />
                <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={3} dot={{r: 4, strokeWidth: 2}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Enrollments */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Recent Enrollments</h2>
              <button className="text-sm font-medium text-primary hover:underline">View All</button>
            </div>
            
            <div className="space-y-6">
              {recentEnrollments.map((enrollment, index) => (
                <div key={index} className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0">
                      {enrollment.student.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">{enrollment.student}</h4>
                      <p className="text-xs text-muted-foreground truncate max-w-[150px]">{enrollment.course}</p>
                      <p className="text-[10px] text-muted-foreground mt-1">{enrollment.date}</p>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-green-500 bg-green-500/10 px-2.5 py-1 rounded-md shrink-0">
                    {enrollment.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
