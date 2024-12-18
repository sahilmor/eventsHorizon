import { Home, Calendar, Users, Music, TrendingUp, Settings, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const Sidebar = () => {
  const sections = [
    {
      title: "Main",
      items: [
        { icon: Home, label: "Dashboard" },
        { icon: Calendar, label: "Events" },
      ]
    },
    {
      title: "Content",
      items: [
        { icon: Users, label: "Artists" },
        { icon: Music, label: "Concerts" },
        { icon: TrendingUp, label: "Trending" },
      ]
    },
    {
      title: "Settings",
      items: [
        { icon: Settings, label: "Settings" },
      ]
    }
  ];

  return (
    <div className="h-screen w-16 hover:w-64 fixed left-0 top-0 bg-card border-r border-border p-4 transition-all duration-300 group hover:shadow-xl z-50">
      <div className="mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h1 className="text-2xl font-bold text-primary">EventsHorizon</h1>
      </div>
      <nav className="space-y-8">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-sm font-semibold text-muted-foreground">{section.title}</h2>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs text-primary hover:text-primary/80"
              >
                See All <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </div>
            <div className="space-y-1">
              {section.items.map((item, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg",
                    "text-foreground hover:bg-muted transition-colors"
                  )}
                >
                  <item.icon className="w-5 h-5 min-w-[20px]" />
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;