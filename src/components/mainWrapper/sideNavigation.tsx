import {
    Home,
    SwatchBook,
    Settings,
    CircleHelp,
    CircleUserRound,
  } from "lucide-react";
  import { cn } from "@/lib/utils";
  import { NavigationRoutes } from "@/constants/routeNames";
  
  const SideNavigation = () => {
    const navigationMenus = [
      {
        title: "Home",
        icon: <Home className="h-5 w-5" />,
        path: NavigationRoutes.Home,
      },
      {
        title: "Category",
        icon: <SwatchBook className="h-5 w-5" />,
        path: NavigationRoutes.Category,
      },
      {
        title: "Help",
        icon: <CircleHelp className="h-5 w-5" />,
        path: NavigationRoutes.Help,
      },
      {
        title: "Setting",
        icon: <Settings className="h-5 w-5" />,
        path: NavigationRoutes.Setting,
      },
      {
        title: "Account",
        icon: <CircleUserRound className="h-5 w-5" />,
        path: NavigationRoutes.Account,
      },
    ];
  
    return (
      <div className="h-screen w-16 hover:w-64 fixed left-0 top-0 bg-card border-r border-border p-4 transition-all duration-300 group hover:shadow-xl z-50">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            EventsHorizon
          </h1>
        </div>
        <nav className="space-y-8">
          {navigationMenus.map((menu, idx) => (
            <div key={idx}>
              <button
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg",
                  "text-foreground hover:bg-muted transition-colors"
                )}
              >
                {menu.icon}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {menu.title}
                </span>
              </button>
            </div>
          ))}
        </nav>
      </div>
    );
  };
  
  export default SideNavigation;
  