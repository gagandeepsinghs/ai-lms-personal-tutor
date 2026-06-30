import { Upload, Save, Play } from "lucide-react";

export default function CreateCoursePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Create New Course</h1>
          <p className="text-muted-foreground">Fill in the details to publish a new course.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="px-6 py-2.5 bg-card border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors flex items-center justify-center gap-2 flex-1 sm:flex-none text-sm">
            <Save className="w-4 h-4" /> Save Draft
          </button>
          <button className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center gap-2 flex-1 sm:flex-none text-sm">
            <Play className="w-4 h-4" /> Publish
          </button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
        <form className="space-y-6">
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground">Course Title</label>
            <input 
              type="text" 
              placeholder="e.g. Advanced Data Structures"
              className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground">Course Description</label>
            <textarea 
              rows={5}
              placeholder="Provide a detailed description of what students will learn..."
              className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-foreground">Category</label>
              <select className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                <option value="">Select a category</option>
                <option value="web-dev">Web Development</option>
                <option value="data-science">Data Science</option>
                <option value="design">UI/UX Design</option>
                <option value="business">Business</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-foreground">Difficulty Level</label>
              <select className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                <option value="">Select level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground">Price (USD)</label>
            <input 
              type="number" 
              placeholder="0.00"
              className="w-full sm:w-1/2 px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground">Course Thumbnail</label>
            <div className="w-full h-48 border-2 border-dashed border-border rounded-xl bg-muted/20 flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Upload className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium">Click to upload or drag and drop</p>
              <p className="text-xs mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
