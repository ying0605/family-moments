import { useState } from "react";
import { Heart, MessageCircle, Plus, ChevronRight } from "lucide-react";
import moment1 from "@/assets/moment-1.jpg";
import moment2 from "@/assets/moment-2.jpg";
import moment3 from "@/assets/moment-3.jpg";
import moment4 from "@/assets/moment-4.jpg";
import moment5 from "@/assets/moment-5.jpg";
import moment6 from "@/assets/moment-6.jpg";
import heroMemory from "@/assets/hero-memory.jpg";

interface MomentItem {
  id: number;
  img: string;
  caption: string;
  author: string;
  liked: boolean;
  comments: number;
  large?: boolean;
  year: number;
}

const allMoments: MomentItem[] = [
  { id: 1, img: heroMemory, caption: "Golden hour in the garden", author: "Mom", liked: false, comments: 3, large: true, year: 2025 },
  { id: 2, img: moment1, caption: "Bubble fun", author: "Dad", liked: true, comments: 5, year: 2025 },
  { id: 3, img: moment5, caption: "Little artist at work", author: "Mom", liked: false, comments: 2, year: 2025 },
  { id: 4, img: moment2, caption: "Baking day with grandma", author: "Sarah", liked: true, comments: 8, large: true, year: 2025 },
  { id: 5, img: moment6, caption: "Happy birthday Emma!", author: "Grandpa", liked: false, comments: 12, year: 2025 },
  { id: 6, img: moment3, caption: "Sunday picnic", author: "Dad", liked: false, comments: 4, year: 2024 },
  { id: 7, img: moment4, caption: "Beach sunset walk", author: "Mom", liked: true, comments: 7, large: true, year: 2024 },
  { id: 8, img: moment1, caption: "Backyard adventures", author: "Sarah", liked: false, comments: 1, year: 2024 },
  { id: 9, img: moment5, caption: "Crayon masterpiece", author: "Emma", liked: true, comments: 6, year: 2023 },
  { id: 10, img: moment2, caption: "Holiday baking", author: "Grandma", liked: false, comments: 3, large: true, year: 2023 },
];

const years = [2025, 2024, 2023];

const MomentsPage = () => {
  const [moments, setMoments] = useState(allMoments);
  const [selectedYear, setSelectedYear] = useState<number>(2025);

  const toggleLike = (id: number) => {
    setMoments((prev) =>
      prev.map((m) => (m.id === id ? { ...m, liked: !m.liked } : m))
    );
  };

  const filtered = moments.filter((m) => m.year === selectedYear);

  return (
    <div className="pb-8 space-y-6">
      {/* Header with upload button */}
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold text-foreground">Moments</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full font-body font-semibold text-sm shadow-soft hover:opacity-90 transition-opacity">
          <Plus size={16} />
          Add Memory
        </button>
      </div>

      {/* Year Timeline */}
      <div className="flex items-center gap-3">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-5 py-2 rounded-full font-heading font-semibold text-sm transition-all duration-300 ${
              selectedYear === year
                ? "bg-primary text-primary-foreground shadow-soft"
                : "bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {year}
          </button>
        ))}
        <ChevronRight size={16} className="text-muted-foreground" />
      </div>

      {/* Masonry Gallery */}
      <div className="columns-2 gap-3 space-y-3">
        {filtered.map((m, i) => (
          <div
            key={m.id}
            className="break-inside-avoid animate-fade-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="rounded-xl overflow-hidden shadow-soft bg-card">
              <div className="relative">
                <img
                  src={m.img}
                  alt={m.caption}
                  className={`w-full object-cover ${m.large ? "h-64" : "h-40"}`}
                />
              </div>
              <div className="p-3">
                <p className="font-body text-sm font-medium text-foreground line-clamp-2">{m.caption}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground font-body">{m.author}</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleLike(m.id)}
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Heart
                        size={14}
                        className={m.liked ? "text-primary fill-primary" : ""}
                      />
                    </button>
                    <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                      <MessageCircle size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Year separator */}
      <div className="flex items-center gap-4 py-4">
        <div className="flex-1 h-px bg-border" />
        <span className="font-heading text-sm text-muted-foreground">End of {selectedYear}</span>
        <div className="flex-1 h-px bg-border" />
      </div>
    </div>
  );
};

export default MomentsPage;
