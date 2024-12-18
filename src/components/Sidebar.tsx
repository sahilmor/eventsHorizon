import { Home, Calendar, Users, Music, TrendingUp, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "Dashboard" },
    { icon: Calendar, label: "Events" },
    { icon: Users, label: "Artists" },
    { icon: Music, label: "Concerts" },
    { icon: TrendingUp, label: "Trending" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="h-screen w-64 bg-card fixed left-0 top-0 border-r border-border p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary">EventsHorizon</h1>
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-lg",
              "text-foreground hover:bg-muted transition-colors",
              "mb-2"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;