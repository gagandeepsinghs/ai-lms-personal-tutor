"use client";

import { useState } from "react";
import { Sidebar } from "@/components/instructor/Sidebar";
import { TopNav } from "@/components/instructor/TopNav";

export default function InstructorLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 shrink-0 shadow-xl z-20">
          <Sidebar />
        </div>

        {/* Mobile Sidebar overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div 
          className={`fixed inset-y-0 left-0 w-64 bg-card z-50 transform transition-transform duration-300 lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar setMobileMenuOpen={setIsMobileMenuOpen} />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <TopNav toggleMobileMenu={() => setIsMobileMenuOpen(true)} />
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-muted/20">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
