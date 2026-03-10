import { useState } from "react";
import { MessageCircle, Calendar, Mic, Video, Send, Gift, Plane, Heart } from "lucide-react";

const boardMessages = [
  { id: 1, author: "Mom", avatar: "👩", message: "Don't forget — dinner at 7 tonight! Making your favorite pasta 🍝", time: "1h ago" },
  { id: 2, author: "Dad", avatar: "👨", message: "Just fixed the garden fence. Who wants to help plant flowers this weekend?", time: "3h ago" },
  { id: 3, author: "Grandma", avatar: "👵", message: "Sending love to everyone! Miss you all so much 💕", time: "5h ago" },
  { id: 4, author: "Sarah", avatar: "👧", message: "Got an A on my science project! Thanks dad for helping 🎉", time: "8h ago" },
  { id: 5, author: "Grandpa", avatar: "👴", message: "Remember when we used to go fishing every Saturday? Let's plan that again!", time: "1d ago" },
];

const calendarEvents = [
  { id: 1, title: "Emma's 8th Birthday", date: "March 15, 2026", icon: Gift, accent: "bg-primary/15 text-primary" },
  { id: 2, title: "Spring Break Trip", date: "March 22–28, 2026", icon: Plane, accent: "bg-secondary/15 text-secondary-foreground" },
  { id: 3, title: "Anniversary Dinner", date: "April 5, 2026", icon: Heart, accent: "bg-primary/15 text-primary" },
  { id: 4, title: "Family Reunion", date: "May 10, 2026", icon: Heart, accent: "bg-secondary/15 text-secondary-foreground" },
];

const voiceMemories = [
  { id: 1, author: "Grandma", avatar: "👵", type: "voice", duration: "0:42", label: "Bedtime story for Emma" },
  { id: 2, author: "Dad", avatar: "👨", type: "video", duration: "1:15", label: "First steps in the garden" },
  { id: 3, author: "Mom", avatar: "👩", type: "voice", duration: "0:28", label: "Good morning message" },
];

const FamilyPage = () => {
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="pb-8 space-y-8">
      <h2 className="font-heading text-2xl font-bold text-foreground">Family</h2>

      {/* Family Board */}
      <section className="animate-fade-up">
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle size={18} className="text-primary" />
          <h3 className="font-heading text-lg font-semibold text-foreground">Family Board</h3>
        </div>

        {/* New message input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Leave a message for the family..."
            className="flex-1 bg-card rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          />
          <button className="p-3 bg-primary text-primary-foreground rounded-xl shadow-soft hover:opacity-90 transition-opacity">
            <Send size={16} />
          </button>
        </div>

        <div className="space-y-3">
          {boardMessages.map((msg, i) => (
            <div
              key={msg.id}
              className="bg-card rounded-xl p-4 shadow-soft animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{msg.avatar}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-body font-semibold text-sm text-foreground">{msg.author}</span>
                    <span className="text-xs text-muted-foreground font-body">{msg.time}</span>
                  </div>
                  <p className="font-body text-sm text-foreground/85 mt-1 leading-relaxed">{msg.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Family Calendar */}
      <section className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
        <div className="flex items-center gap-2 mb-4">
          <Calendar size={18} className="text-secondary" />
          <h3 className="font-heading text-lg font-semibold text-foreground">Family Calendar</h3>
        </div>
        <div className="space-y-3">
          {calendarEvents.map((evt) => (
            <div key={evt.id} className={`rounded-xl p-4 shadow-soft ${evt.accent}`}>
              <div className="flex items-center gap-3">
                <evt.icon size={20} />
                <div>
                  <p className="font-body font-semibold text-sm">{evt.title}</p>
                  <p className="font-body text-xs opacity-75 mt-0.5">{evt.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Voice & Video Memories */}
      <section className="animate-fade-up" style={{ animationDelay: "0.25s" }}>
        <div className="flex items-center gap-2 mb-4">
          <Mic size={18} className="text-primary" />
          <h3 className="font-heading text-lg font-semibold text-foreground">Voice & Video Memories</h3>
        </div>
        <div className="space-y-3">
          {voiceMemories.map((vm) => (
            <div key={vm.id} className="bg-card rounded-xl p-4 shadow-soft flex items-center gap-4">
              <span className="text-2xl">{vm.avatar}</span>
              <div className="flex-1 min-w-0">
                <p className="font-body text-sm font-medium text-foreground">{vm.label}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground font-body">{vm.author}</span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground font-body">{vm.duration}</span>
                </div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                {vm.type === "voice" ? (
                  <Mic size={16} className="text-primary" />
                ) : (
                  <Video size={16} className="text-primary" />
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full py-3 bg-card rounded-xl shadow-soft font-body font-semibold text-sm text-primary border border-dashed border-primary/30 hover:bg-primary/5 transition-colors">
          + Record a Memory
        </button>
      </section>
    </div>
  );
};

export default FamilyPage;
