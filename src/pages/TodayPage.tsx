import { Heart, MessageCircle, Calendar, Clock } from "lucide-react";
import heroMemory from "@/assets/hero-memory.jpg";
import moment1 from "@/assets/moment-1.jpg";
import moment2 from "@/assets/moment-2.jpg";
import moment3 from "@/assets/moment-3.jpg";
import moment6 from "@/assets/moment-6.jpg";

const recentMoments = [
  { id: 1, img: moment1, caption: "Bubble fun in the backyard", author: "Mom", time: "2h ago" },
  { id: 2, img: moment2, caption: "Baking with grandma", author: "Sarah", time: "5h ago" },
  { id: 3, img: moment3, caption: "Sunday family picnic", author: "Dad", time: "1d ago" },
  { id: 4, img: moment6, caption: "Happy birthday Emma!", author: "Grandpa", time: "2d ago" },
];

const boardMessages = [
  { id: 1, author: "Mom", avatar: "👩", message: "Don't forget — dinner at 7 tonight! Making your favorite pasta 🍝", time: "1h ago" },
  { id: 2, author: "Dad", avatar: "👨", message: "Just fixed the garden fence. Who wants to help plant flowers this weekend?", time: "3h ago" },
  { id: 3, author: "Grandma", avatar: "👵", message: "Sending love to everyone! Miss you all so much 💕", time: "5h ago" },
];

const upcomingEvents = [
  { id: 1, title: "Emma's Birthday", date: "Mar 15", color: "bg-primary/20 text-primary" },
  { id: 2, title: "Family Dinner", date: "Mar 12", color: "bg-secondary/20 text-secondary-foreground" },
  { id: 3, title: "Spring Break Trip", date: "Mar 22", color: "bg-primary/20 text-primary" },
];

const TodayPage = () => {
  return (
    <div className="pb-8 space-y-8">
      {/* Today's Memory - On This Day */}
      <section className="animate-fade-up">
        <div className="relative rounded-2xl overflow-hidden shadow-card">
          <img src={heroMemory} alt="Family moment in the garden" className="w-full h-72 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={14} className="text-primary-foreground/80" />
              <span className="text-xs font-body font-semibold text-primary-foreground/80 uppercase tracking-wider">On This Day · 2 years ago</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-primary-foreground">Today's Memory</h2>
            <p className="font-body text-sm text-primary-foreground/85 mt-1">A beautiful afternoon in the garden with the kids</p>
          </div>
        </div>
      </section>

      {/* Recent Moments */}
      <section className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
        <h3 className="font-heading text-xl font-semibold text-foreground mb-4 px-1">Recent Moments</h3>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1">
          {recentMoments.map((m) => (
            <div key={m.id} className="flex-shrink-0 w-44">
              <div className="rounded-xl overflow-hidden shadow-soft bg-card">
                <img src={m.img} alt={m.caption} className="w-full h-36 object-cover" />
                <div className="p-3">
                  <p className="font-body text-sm font-medium text-foreground line-clamp-1">{m.caption}</p>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-xs text-muted-foreground font-body">{m.author}</span>
                    <span className="text-xs text-muted-foreground font-body">{m.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Family Board Preview */}
      <section className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <div className="flex items-center gap-2 mb-4 px-1">
          <MessageCircle size={18} className="text-primary" />
          <h3 className="font-heading text-xl font-semibold text-foreground">Family Board</h3>
        </div>
        <div className="space-y-3">
          {boardMessages.map((msg) => (
            <div key={msg.id} className="bg-card rounded-xl p-4 shadow-soft">
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

      {/* Upcoming Events */}
      <section className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <div className="flex items-center gap-2 mb-4 px-1">
          <Calendar size={18} className="text-secondary" />
          <h3 className="font-heading text-xl font-semibold text-foreground">Upcoming</h3>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {upcomingEvents.map((evt) => (
            <div key={evt.id} className={`flex-shrink-0 rounded-xl px-5 py-3 ${evt.color} shadow-soft`}>
              <p className="font-body font-semibold text-sm">{evt.title}</p>
              <p className="font-body text-xs opacity-75 mt-0.5">{evt.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TodayPage;
