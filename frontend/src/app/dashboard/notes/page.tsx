import { Search, Plus, Download, Folder, FileText, MoreVertical } from "lucide-react";

export default function NotesPage() {
  const notes = [
    { title: "React Context API Setup", folder: "Web Development", date: "2 days ago", size: "12 KB" },
    { title: "Neural Networks Explained", folder: "Data Science", date: "1 week ago", size: "45 KB" },
    { title: "Color Theory Principles", folder: "Design", date: "2 weeks ago", size: "8 KB" },
    { title: "Next.js App Router", folder: "Web Development", date: "3 weeks ago", size: "24 KB" },
    { title: "Figma Shortcuts", folder: "Design", date: "1 month ago", size: "5 KB" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">My Notes</h1>
          <p className="text-muted-foreground">Access your saved learning materials and AI tutor summaries.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search notes..." 
              className="w-full pl-9 pr-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <button className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors flex shrink-0 items-center gap-2 text-sm">
            <Plus className="w-4 h-4" /> New Note
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-4">
          <h3 className="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-4 px-2">Folders</h3>
          <ul className="space-y-1">
            <li>
              <button className="w-full flex items-center justify-between px-4 py-2 bg-primary/10 text-primary font-medium rounded-lg transition-colors">
                <span className="flex items-center gap-2"><Folder className="w-4 h-4" /> All Notes</span>
                <span className="text-xs bg-background px-2 py-0.5 rounded-full border border-primary/20">24</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center justify-between px-4 py-2 text-muted-foreground hover:bg-card hover:text-foreground font-medium rounded-lg transition-colors">
                <span className="flex items-center gap-2"><Folder className="w-4 h-4" /> Web Development</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded-full border border-border">12</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center justify-between px-4 py-2 text-muted-foreground hover:bg-card hover:text-foreground font-medium rounded-lg transition-colors">
                <span className="flex items-center gap-2"><Folder className="w-4 h-4" /> Data Science</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded-full border border-border">8</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center justify-between px-4 py-2 text-muted-foreground hover:bg-card hover:text-foreground font-medium rounded-lg transition-colors">
                <span className="flex items-center gap-2"><Folder className="w-4 h-4" /> Design</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded-full border border-border">4</span>
              </button>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border bg-muted/20">
                    <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Note Title</th>
                    <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">Folder</th>
                    <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">Size</th>
                    <th className="px-6 py-4 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {notes.map((note, index) => (
                    <tr key={index} className="hover:bg-muted/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-primary/70" />
                          <span className="font-medium text-foreground">{note.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden sm:table-cell">
                        <span className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md">
                          {note.folder}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {note.date}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground hidden sm:table-cell">
                        {note.size}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-lg">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-card rounded-lg">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
