import { CheckCircle2, Clock, XCircle, FileText, BrainCircuit } from "lucide-react";

export default function TestsPage() {
  const previousTests = [
    { title: "React State Management Quiz", course: "Advanced React Patterns", score: 92, date: "2 days ago", status: "passed" },
    { title: "CSS Grid Foundations", course: "UI/UX Design Essentials", score: 100, date: "1 week ago", status: "passed" },
    { title: "Machine Learning Basics", course: "Data Science", score: 65, date: "2 weeks ago", status: "failed" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Tests & Quizzes</h1>
        <p className="text-muted-foreground">Manage upcoming assessments and review past performance.</p>
      </div>

      {/* Upcoming Test Banner */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="text-sm font-bold text-primary mb-1 block">UPCOMING ASSESSMENT</span>
            <h2 className="text-xl font-bold text-foreground mb-2">React Hooks Deep Dive</h2>
            <p className="text-sm text-muted-foreground">Module 4 • 20 Questions • 45 Minutes</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full sm:w-auto">
          <button className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors whitespace-nowrap shadow-sm">
            Start Test Now
          </button>
          <button className="px-6 py-2 bg-card border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors whitespace-nowrap flex items-center justify-center gap-2 text-sm">
            <BrainCircuit className="w-4 h-4" /> Prepare with AI
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-foreground">Previous Results</h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="divide-y divide-border">
              {previousTests.map((test, index) => (
                <div key={index} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {test.status === "passed" ? (
                         <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                         <XCircle className="w-5 h-5 text-destructive" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{test.title}</h4>
                      <p className="text-sm text-muted-foreground">{test.course}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="text-right">
                      <p className={`text-xl font-bold ${test.score >= 80 ? 'text-green-500' : test.score >= 70 ? 'text-yellow-500' : 'text-destructive'}`}>
                        {test.score}%
                      </p>
                      <p className="text-xs text-muted-foreground">{test.date}</p>
                    </div>
                    <button className="p-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
                      <FileText className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-foreground">AI Performance Insights</h2>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Based on your recent tests, your AI tutor has analyzed your strengths and areas for improvement.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-foreground">Strengths</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold rounded-full border border-green-500/20">Component Lifecycle</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold rounded-full border border-green-500/20">CSS Specificity</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-sm text-foreground">Needs Review</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-xs font-semibold rounded-full border border-yellow-500/20">Neural Networks</span>
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-xs font-semibold rounded-full border border-yellow-500/20">Memoization</span>
              </div>
            </div>

            <button className="w-full py-3 mt-4 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary/20 transition-colors text-sm">
              Generate Custom Practice Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
