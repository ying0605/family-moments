import { Sun, Image, Users } from "lucide-react";

interface BottomNavProps {
  activeTab: "today" | "moments" | "family";
  onTabChange: (tab: "today" | "moments" | "family") => void;
}

const tabs = [
  { id: "today" as const, label: "Today", icon: Sun },
  { id: "moments" as const, label: "Moments", icon: Image },
  { id: "family" as const, label: "Family", icon: Users },
];

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-t border-border shadow-soft">
      <div className="flex items-center justify-around max-w-lg mx-auto py-2 px-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all duration-300 ${
                isActive
                  ? "text-primary scale-105"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon
                size={24}
                strokeWidth={isActive ? 2.5 : 1.8}
                className="transition-all duration-300"
              />
              <span className={`text-xs font-body font-semibold transition-all ${isActive ? "opacity-100" : "opacity-70"}`}>
                {tab.label}
              </span>
              {isActive && (
                <div className="w-1 h-1 rounded-full bg-primary mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
