import { User, Mail, Bell, Shield, Book, CreditCard, Save } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Account Settings</h1>
        <p className="text-muted-foreground">Manage your profile, preferences, and security.</p>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        <div className="flex flex-col md:flex-row">
          
          {/* Settings Sidebar */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-border bg-muted/10 p-6 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-primary/10 text-primary font-medium rounded-xl transition-colors">
              <User className="w-4 h-4" /> Personal Info
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:bg-muted hover:text-foreground font-medium rounded-xl transition-colors">
              <Book className="w-4 h-4" /> Learning Goals
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:bg-muted hover:text-foreground font-medium rounded-xl transition-colors">
              <Bell className="w-4 h-4" /> Notifications
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:bg-muted hover:text-foreground font-medium rounded-xl transition-colors">
              <Shield className="w-4 h-4" /> Security
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:bg-muted hover:text-foreground font-medium rounded-xl transition-colors">
              <CreditCard className="w-4 h-4" /> Billing
            </button>
          </div>

          {/* Settings Content */}
          <div className="flex-1 p-6 md:p-10">
            <div className="space-y-8">
              
              <div className="flex items-center gap-6 pb-8 border-b border-border">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center overflow-hidden shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://i.pravatar.cc/150?u=student" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <button className="absolute bottom-0 right-0 p-1.5 bg-primary text-primary-foreground rounded-full shadow-md border-2 border-background">
                    <User className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Alex Developer</h3>
                  <p className="text-sm text-muted-foreground mb-3">alex@example.com</p>
                  <div className="flex gap-2">
                    <button className="px-4 py-1.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-lg hover:bg-secondary/80 transition-colors">
                      Change Picture
                    </button>
                    <button className="px-4 py-1.5 border border-border text-foreground text-xs font-medium rounded-lg hover:bg-muted transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground mb-4">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input 
                      type="text" 
                      defaultValue="Alex"
                      className="w-full px-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input 
                      type="text" 
                      defaultValue="Developer"
                      className="w-full px-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                      type="email" 
                      defaultValue="alex@example.com"
                      className="w-full pl-9 pr-4 py-2.5 bg-muted/50 border border-border rounded-xl text-sm text-muted-foreground focus:outline-none cursor-not-allowed"
                      disabled
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">To change your email, please contact support.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Bio</label>
                  <textarea 
                    rows={4}
                    defaultValue="Passionate frontend developer learning advanced React and AI tools."
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-border">
                <button className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors flex items-center gap-2">
                  <Save className="w-4 h-4" /> Save Changes
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
