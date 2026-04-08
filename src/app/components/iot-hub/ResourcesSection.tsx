import { useState } from "react";
import { ArrowRight, BookOpen, Video, FileText, Newspaper, BarChart2, Clock, Tag } from "lucide-react";

const webinarImg = "https://images.unsplash.com/photo-1758598306845-8630d064a244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJpbmFyJTIwdmlydHVhbCUyMGNvbmZlcmVuY2UlMjBvbmxpbmUlMjBwcmVzZW50YXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NzQ5NzM1NTF8MA&ixlib=rb-4.1.0&q=80&w=600";
const mfgImg = "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMHNtYXJ0JTIwZmFjdG9yeSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzc0OTczNTQyfDA&ixlib=rb-4.1.0&q=80&w=600";
const healthImg = "https://images.unsplash.com/photo-1587230307094-7ea936b24278?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMElvVCUyMGNvbm5lY3RlZCUyMGRldmljZXMlMjBob3NwaXRhbHxlbnwxfHx8fDE3NzQ5NzM1NDJ8MA&ixlib=rb-4.1.0&q=80&w=600";
const energyImg = "https://images.unsplash.com/photo-1759536588260-e708d399a2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGVuZXJneSUyMHJlbmV3YWJsZSUyMHNvbGFyJTIwd2luZCUyMHBvd2VyJTIwZ3JpZHxlbnwxfHx8fDE3NzQ5NzM1NDN8MA&ixlib=rb-4.1.0&q=80&w=600";
const logisticsImg = "https://images.unsplash.com/photo-1492168732976-2676c584c675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB0cmFuc3BvcnQlMjBmbGVldCUyMHRyYWNraW5nJTIwdGVsZW1hdGljc3xlbnwxfHx8fDE3NzQ5NzM1NDN8MA&ixlib=rb-4.1.0&q=80&w=600";

const categories = [
  { key: "all", label: "All", icon: <BarChart2 size={14} /> },
  { key: "blog", label: "Blog", icon: <BookOpen size={14} /> },
  { key: "webinar", label: "Webinar", icon: <Video size={14} /> },
  { key: "whitepaper", label: "White Papers", icon: <FileText size={14} /> },
  { key: "media", label: "Media Coverage", icon: <Newspaper size={14} /> },
  { key: "casestudy", label: "Case Studies", icon: <BarChart2 size={14} /> },
];

const resources = [
  { id: 1, category: "blog", categoryLabel: "Blog", categoryColor: "#005BAC", title: "eSIM vs. Traditional SIM for Industrial IoT: What You Need to Know", excerpt: "As remote deployments scale, the flexibility of eSIM is becoming a key driver in industrial IoT architecture. Here's a practical comparison.", date: "Mar 18, 2026", readTime: "6 min read", sector: "Industrial", img: mfgImg, featured: true },
  { id: 2, category: "webinar", categoryLabel: "Webinar", categoryColor: "#6C3FC5", title: "IoT Connectivity Masterclass: From SIM to Cloud", excerpt: "On-demand session covering end-to-end IoT connectivity architecture, including G+D's IoTgo® platform and real-world deployment patterns.", date: "Mar 5, 2026", readTime: "45 min", sector: "Cross-Sector", img: webinarImg, featured: true },
  { id: 3, category: "casestudy", categoryLabel: "Case Study", categoryColor: "#0A8A62", title: "How a European Healthcare Network Cut Device Costs by 35% with eSIM", excerpt: "Deploying IoTgo® connectivity across 3,200 remote patient monitoring devices — with zero truck rolls for SIM swaps.", date: "Feb 22, 2026", readTime: "8 min read", sector: "Healthcare", img: healthImg, featured: false },
  { id: 4, category: "whitepaper", categoryLabel: "White Paper", categoryColor: "#B45309", title: "The Future of Smart Metering: LTE-M, NB-IoT & eSIM Convergence", excerpt: "An in-depth technical exploration of next-generation metering connectivity across Europe's evolving energy grid landscape.", date: "Feb 10, 2026", readTime: "24 pages", sector: "Energy", img: energyImg, featured: false },
  { id: 5, category: "media", categoryLabel: "Media Coverage", categoryColor: "#BE1D3B", title: "G+D Named a Leader in IoT Connectivity Management Platforms", excerpt: "Giesecke+Devrient recognized by independent analyst firm for the IoTgo® platform's global reach and enterprise-grade SLA commitments.", date: "Jan 28, 2026", readTime: "3 min read", sector: "Corporate", img: logisticsImg, featured: false },
];

export function ResourcesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all" ? resources : resources.filter((r) => r.category === activeCategory);
  const featured = filtered.filter((r) => r.featured);
  const others = filtered.filter((r) => !r.featured);

  return (
    <section id="resources" style={{ background: "#FFFFFF", paddingTop: 80, paddingBottom: 80 }}>
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div
              className="inline-block px-3 py-1 rounded-full text-xs mb-4 font-semibold"
              style={{ background: "#EAF2FC", color: "#005BAC", letterSpacing: "0.06em", textTransform: "uppercase" }}
            >
              Knowledge Hub
            </div>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: "#0F1C2E", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Featured Resources
            </h2>
            <p className="mt-2" style={{ color: "#5A6C80", fontSize: 16 }}>
              Expert content for IoT professionals, architects, and decision-makers.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold"
            style={{ border: "1.5px solid #005BAC", color: "#005BAC" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#EAF2FC")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            All Resources <ArrowRight size={14} />
          </a>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                background: activeCategory === cat.key ? "#005BAC" : "#ffffff",
                color: activeCategory === cat.key ? "#ffffff" : "#374151",
                border: activeCategory === cat.key ? "1.5px solid #005BAC" : "1.5px solid #D5E3F0",
              }}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Featured cards (large) */}
        {featured.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
            {featured.map((r) => (
              <a
                key={r.id}
                href="#"
                className="group relative rounded-xl overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ height: 310 }}
              >
                <img
                  src={r.img}
                  alt={r.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                  style={{ filter: "brightness(0.45)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,22,48,0.97) 0%, rgba(0,22,48,0.2) 60%, transparent 100%)" }}
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span
                      className="px-2.5 py-1 rounded-md text-xs font-semibold"
                      style={{ background: r.categoryColor, color: "#ffffff" }}
                    >
                      {r.categoryLabel}
                    </span>
                    <span
                      className="px-2 py-1 rounded text-xs"
                      style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.75)" }}
                    >
                      {r.sector}
                    </span>
                  </div>
                  <div>
                    <h3 style={{ color: "white", fontWeight: 700, fontSize: 18, lineHeight: 1.3, marginBottom: 8, letterSpacing: "-0.01em" }}>
                      {r.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 13, lineHeight: 1.55, marginBottom: 12 }}>{r.excerpt}</p>
                    <div className="flex items-center gap-3">
                      <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>{r.date}</span>
                      <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
                      <span className="flex items-center gap-1" style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>
                        <Clock size={11} /> {r.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Regular cards */}
        {others.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {others.map((r) => (
              <a
                key={r.id}
                href="#"
                className="group rounded-xl overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  background: "#ffffff",
                  border: "1px solid #E2EBF5",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                }}
              >
                <div className="relative overflow-hidden" style={{ height: 156 }}>
                  <img
                    src={r.img}
                    alt={r.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    style={{ filter: "brightness(0.88)" }}
                  />
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold"
                    style={{ background: r.categoryColor, color: "white" }}
                  >
                    {r.categoryLabel}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex items-center gap-1 text-xs" style={{ color: "#9CA3AF" }}>
                      <Tag size={10} /> {r.sector}
                    </span>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 14.5, color: "#0F1C2E", lineHeight: 1.35, marginBottom: 8, letterSpacing: "-0.01em" }}>
                    {r.title}
                  </h3>
                  <p style={{ color: "#5A6C80", fontSize: 13, lineHeight: 1.55 }}>{r.excerpt}</p>
                  <div className="flex items-center gap-3 mt-4 pt-4" style={{ borderTop: "1px solid #EEF2F7" }}>
                    <span style={{ color: "#9CA3AF", fontSize: 12 }}>{r.date}</span>
                    <span style={{ color: "#D1D5DB" }}>·</span>
                    <span className="flex items-center gap-1" style={{ color: "#9CA3AF", fontSize: 12 }}>
                      <Clock size={11} /> {r.readTime}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16" style={{ color: "#9CA3AF" }}>
            No resources in this category yet. Check back soon.
          </div>
        )}
      </div>
    </section>
  );
}
