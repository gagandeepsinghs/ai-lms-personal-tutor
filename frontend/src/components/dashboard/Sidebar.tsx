"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  BookOpen, 
  TrendingUp, 
  FileText, 
  Bookmark, 
  Settings, 
  LogOut,
  Brain
} from "lucide-react";

export function Sidebar({ className = "", setMobileMenuOpen }: { className?: string, setMobileMenuOpen?: (open: boolean) => void }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "My Courses", href: "/dashboard/courses", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Progress", href: "/dashboard/progress", icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Tests & Quizzes", href: "/dashboard/tests", icon: <FileText className="w-5 h-5" /> },
    { name: "My Notes", href: "/dashboard/notes", icon: <Bookmark className="w-5 h-5" /> },
    { name: "Profile", href: "/dashboard/profile", icon: <Settings className="w-5 h-5" /> },
  ];

  const handleLinkClick = () => {
    if (setMobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <aside className={`flex flex-col h-full bg-card border-r border-border ${className}`}>
      <div className="h-16 flex items-center px-6 border-b border-border shrink-0">
        <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
            <Brain className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            AI LMS
          </span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
        <div className="px-2 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Menu
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <div className={`${isActive ? "text-primary" : "text-muted-foreground"}`}>
                  {item.icon}
                </div>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-border shrink-0">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors w-full">
          <LogOut className="w-5 h-5" />
          Log out
        </button>
      </div>
    </aside>
  );
}
