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
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors"
        >
          <Sun className="h-5 w-5 dark:hidden" />
          <Moon className="h-5 w-5 hidden dark:block" />
        </button>

        <button className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
        </button>

        <div className="flex items-center gap-3 ml-2 border-l border-border pl-4">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-sm font-bold text-foreground leading-none">Prof. Andrew</span>
            <span className="text-xs text-muted-foreground">Instructor</span>
          </div>
          <div className="h-9 w-9 rounded-full bg-primary/20 border border-primary flex items-center justify-center overflow-hidden shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://i.pravatar.cc/150?u=instructor" alt="Instructor" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}
