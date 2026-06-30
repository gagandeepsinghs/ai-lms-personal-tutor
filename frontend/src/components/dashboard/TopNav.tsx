"use client";

import { usePathname } from "next/navigation";
import { Menu, Bell, Search, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export function TopNav({ toggleMobileMenu }: { toggleMobileMenu: () => void }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // Generate breadcrumbs based on pathname
  const pathSegments = pathname.split('/').filter(Boolean);
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const isLast = index === pathSegments.length - 1;
    const title = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    return { title, href, isLast };
  });

  return (
    <header className="h-16 flex items-center justify-between px-4 sm:px-6 bg-card border-b border-border z-10 sticky top-0">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 -ml-2 rounded-lg text-muted-foreground hover:bg-muted"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <nav className="hidden sm:flex items-center text-sm font-medium text-muted-foreground">
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.href} className="flex items-center">
              {index > 0 && <span className="mx-2 text-border">/</span>}
              {crumb.isLast ? (
                <span className="text-foreground">{crumb.title}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-foreground transition-colors">
                  {crumb.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative hidden md:block w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pl-9 pr-4 py-2 bg-muted/50 border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors"
        >
          <Sun className="h-5 w-5 dark:hidden" />
          <Moon className="h-5 w-5 hidden dark:block" />
        </button>

        <button className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </button>

        <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center overflow-hidden shrink-0 ml-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://i.pravatar.cc/150?u=student" alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}
