"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Brain, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-3" : "bg-transparent border-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
              <Brain className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              AI LMS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/courses" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Courses</Link>
            <Link href="/features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 dark:hidden" />
              <Moon className="h-5 w-5 hidden dark:block" />
            </button>
            <Link href="/sign-in" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Log in
            </Link>
            <Link href="/sign-up" className="px-4 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-all">
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden z-50">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors"
            >
              <Sun className="h-5 w-5 dark:hidden" />
              <Moon className="h-5 w-5 hidden dark:block" />
            </button>
            <button 
              className="p-2 -mr-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-background z-40 flex flex-col pt-24 px-6 md:hidden transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="flex flex-col gap-6 text-lg font-medium">
          <Link href="/courses" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-border pb-4">Courses</Link>
          <Link href="/features" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-border pb-4">Features</Link>
          <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-border pb-4">Pricing</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-border pb-4">About</Link>
        </nav>
        <div className="mt-auto pb-12 flex flex-col gap-4">
          <Link href="/sign-in" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 text-center font-bold border border-border rounded-xl">
            Log in
          </Link>
          <Link href="/sign-up" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 text-center font-bold bg-primary text-primary-foreground rounded-xl">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
