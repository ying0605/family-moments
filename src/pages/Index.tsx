import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import WelcomeOverlay from "@/components/WelcomeOverlay";
import TodayPage from "./TodayPage";
import MomentsPage from "./MomentsPage";
import FamilyPage from "./FamilyPage";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeTab, setActiveTab] = useState<"today" | "moments" | "family">("today");

  return (
    <div className="min-h-screen bg-background">
      {showWelcome && <WelcomeOverlay onDismiss={() => setShowWelcome(false)} />}

      <div className="max-w-lg mx-auto px-5 pt-6 pb-24">
        {/* App Header */}
        <header className="mb-6">
          <h1 className="font-heading text-xl font-bold text-foreground">Family Moments</h1>
        </header>

        {/* Page Content */}
        {activeTab === "today" && <TodayPage />}
        {activeTab === "moments" && <MomentsPage />}
        {activeTab === "family" && <FamilyPage />}
      </div>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
