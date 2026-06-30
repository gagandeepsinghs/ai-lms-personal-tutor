import { User, Mail, Save, Twitter, Linkedin, Github, Globe } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Instructor Profile</h1>
        <p className="text-muted-foreground">Manage your public instructor profile and social links.</p>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        <div className="flex flex-col md:flex-row">
          
          <div className="flex-1 p-6 md:p-10">
            <div className="space-y-8">
              
              {/* Profile Image Section */}
              <div className="flex items-center gap-6 pb-8 border-b border-border">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center overflow-hidden shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://i.pravatar.cc/150?u=instructor" alt="Instructor" className="w-full h-full object-cover" />
                  </div>
                  <button className="absolute bottom-0 right-0 p-1.5 bg-primary text-primary-foreground rounded-full shadow-md border-2 border-background">
                    <User className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Prof. Andrew</h3>
                  <p className="text-sm text-muted-foreground mb-3">Senior Software Engineer & Educator</p>
                  <div className="flex gap-2">
                    <button className="px-4 py-1.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-lg hover:bg-secondary/80 transition-colors">
                      Upload New Image
                    </button>
                    <button className="px-4 py-1.5 border border-border text-foreground text-xs font-medium rounded-lg hover:bg-muted transition-colors">
                      Remove
                    </button>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-2">Recommended size: 400x400px</p>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground mb-4">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input 
                      type="text" 
                      defaultValue="Andrew"
                      className="w-full px-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input 
                      type="text" 
                      defaultValue="Smith"
                      className="w-full px-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Headline</label>
                  <input 
                    type="text" 
                    defaultValue="Senior Software Engineer & Educator"
                    className="w-full px-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Appears below your name on your public profile.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Biography</label>
                  <textarea 
                    rows={6}
                    defaultValue="I am a Senior Software Engineer with over 10 years of experience building scalable web applications. I am passionate about teaching and helping others transition into tech careers."
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">Social Links</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Globe className="w-4 h-4" /> Website
                    </label>
                    <input 
                      type="url" 
                      placeholder="https://yourwebsite.com"
                      className="w-full px-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Twitter className="w-4 h-4" /> Twitter
                    </label>
                    <input 
                      type="text" 
                      placeholder="https://twitter.com/username"
                      className="w-full px-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </label>
                    <input 
                      type="text" 
                      placeholder="https://linkedin.com/in/username"
                      className="w-full px-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Github className="w-4 h-4" /> GitHub
                    </label>
                    <input 
                      type="text" 
                      placeholder="https://github.com/username"
                      className="w-full px-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-6 border-t border-border">
                <button className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-sm">
                  <Save className="w-4 h-4" /> Save Profile
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
