import { useState } from "react";
import { Heart } from "lucide-react";

const WelcomeOverlay = ({ onDismiss }: { onDismiss: () => void }) => {
  const [fading, setFading] = useState(false);

  const handleDismiss = () => {
    setFading(true);
    setTimeout(onDismiss, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm transition-opacity duration-600 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleDismiss}
    >
      <div className="text-center px-8 max-w-md animate-fade-up">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
          <Heart className="text-primary" size={28} fill="currentColor" />
        </div>
        <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
          Family Moments
        </h1>
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
          Welcome to our family space — a place for memories, photos, and love.
        </p>
        <button
          onClick={handleDismiss}
          className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-semibold text-base shadow-card hover:opacity-90 transition-opacity"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default WelcomeOverlay;
