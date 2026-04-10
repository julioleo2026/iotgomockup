import { useState, useRef } from "react";
import gdLogo from "@/assets/GD_SponsLogo_GD_CC.png";
import { ChevronDown, Search, ShoppingCart, Menu, X, ExternalLink, Wifi, Heart, Truck, Zap, ShoppingBag, Shield, MapPin, Factory, Radio, Users, BookOpen, Video, FileText, Newspaper, BarChart2, Package, Cpu, Code2, LogIn } from "lucide-react";

type Route = "home" | "developers";
type DropdownKey = "sectors" | "resources" | "products" | null;

const sectors = [
  { label: "Connectivity Resellers", icon: <Wifi size={15} /> },
  { label: "Consumer", icon: <Users size={15} /> },
  { label: "Emergency Services", icon: <Radio size={15} /> },
  { label: "Energy and Environment", icon: <Zap size={15} /> },
  { label: "Healthcare", icon: <Heart size={15} /> },
  { label: "Industrial Manufacturing", icon: <Factory size={15} /> },
  { label: "Retail", icon: <ShoppingBag size={15} /> },
  { label: "Security", icon: <Shield size={15} /> },
  { label: "Tracking and Telematics", icon: <MapPin size={15} /> },
  { label: "Transport and Logistics", icon: <Truck size={15} /> },
];

const resources = [
  { label: "Reports", desc: "Expert insights & industry news", icon: <BookOpen size={15} />, href: "#resources" },
  { label: "Webinar", desc: "On-demand & upcoming sessions", icon: <Video size={15} />, href: "#resources" },
  { label: "White Papers", desc: "In-depth technical research", icon: <FileText size={15} />, href: "#resources" },
  { label: "Media Coverage", desc: "Press & industry mentions", icon: <Newspaper size={15} />, href: "#resources" },
  { label: "Case Studies", desc: "Real-world success stories", icon: <BarChart2 size={15} />, href: "#resources" },
  { label: "For developers", desc: "API docs, guides and sandbox overview", icon: <Code2 size={15} />, href: "#for-developers" },
];

const products = [
  { label: "Asset Trackers", desc: "IoTgo® Track Solar & Smart Label", icon: <Package size={15} />, external: false },
  { label: "IoT Connectivity", desc: "eSIM, SIM & connectivity plans", icon: <Wifi size={15} />, external: false },
  { label: "IoTgo® Control", desc: "SIM lifecycle & analytics", icon: <Cpu size={15} />, external: false },
  { label: "IoTgo® Track-Fleet", desc: "Fleet tracking & telematics", icon: <Truck size={15} />, external: false },
  { label: "IoT Shop", desc: "Browse all products online", icon: <ShoppingBag size={15} />, external: true },
];

export function Header({ currentRoute }: { currentRoute: Route }) {
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (key: DropdownKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 180);
  };

  return (
    <header className="sticky top-0 z-50" style={{ background: "rgba(255,255,255,0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E5E7EB" }}>
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between" style={{ height: "86px" }}>
        <a href="#" className="flex items-center flex-shrink-0">
          <div>
            <div style={{ color: "#111827", fontWeight: 700, fontSize: 16, lineHeight: 1.1 }}>IoTgo® Expert Hub</div>
            <div style={{ color: "#005BAC", fontSize: 11, fontWeight: 600, marginTop: 2 }}>Spotlight</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center">
          <div className="relative" onMouseEnter={() => handleMouseEnter("products")} onMouseLeave={handleMouseLeave}>
            <button
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-lg"
              style={{
                color: activeDropdown === "products" ? "#005BAC" : currentRoute === "home" ? "#111827" : "#374151",
                background: activeDropdown === "products" ? "#EFF6FF" : "transparent",
              }}
            >
              Products
              <ChevronDown size={14} style={{ color: activeDropdown === "products" ? "#005BAC" : "#9CA3AF" }} className={`transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`} />
            </button>
            {activeDropdown === "products" && (
              <div
                className="absolute top-full left-0 mt-2 rounded-2xl py-2 z-50"
                style={{ background: "#ffffff", border: "1px solid #E5E7EB", boxShadow: "0 18px 40px rgba(15, 23, 42, 0.10)", minWidth: 290 }}
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={handleMouseLeave}
              >
                {products.map((p) => (
                  <a
                    key={p.label}
                    href={p.external ? "https://iotshop.gi-de.com" : "#products"}
                    target={p.external ? "_blank" : undefined}
                    rel={p.external ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 px-4 py-3 transition-colors"
                    style={{ color: "#374151" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#F8FAFC")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <span style={{ color: "#005BAC", marginTop: 1 }}>{p.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5" style={{ fontWeight: 600, fontSize: 13, color: "#111827" }}>
                        {p.label}
                        {p.external && <ExternalLink size={11} style={{ color: "#005BAC" }} />}
                      </div>
                      <div style={{ fontSize: 12, color: "#64748B", marginTop: 1 }}>{p.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => handleMouseEnter("sectors")} onMouseLeave={handleMouseLeave}>
            <button
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-lg"
              style={{ color: activeDropdown === "sectors" ? "#005BAC" : "#111827", background: activeDropdown === "sectors" ? "#EFF6FF" : "transparent" }}
            >
              Sectors
              <ChevronDown size={14} style={{ color: activeDropdown === "sectors" ? "#005BAC" : "#9CA3AF" }} className={`transition-transform ${activeDropdown === "sectors" ? "rotate-180" : ""}`} />
            </button>
            {activeDropdown === "sectors" && (
              <div
                className="absolute top-full left-0 mt-2 rounded-2xl py-2 z-50"
                style={{ background: "#ffffff", border: "1px solid #E5E7EB", boxShadow: "0 18px 40px rgba(15, 23, 42, 0.10)", minWidth: 260 }}
                onMouseEnter={() => handleMouseEnter("sectors")}
                onMouseLeave={handleMouseLeave}
              >
                {sectors.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors"
                    style={{ color: "#374151" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#F8FAFC";
                      e.currentTarget.style.color = "#005BAC";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#374151";
                    }}
                  >
                    <span style={{ color: "#9CA3AF" }}>{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => handleMouseEnter("resources")} onMouseLeave={handleMouseLeave}>
            <button
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-lg"
              style={{ color: activeDropdown === "resources" ? "#005BAC" : "#111827", background: activeDropdown === "resources" ? "#EFF6FF" : "transparent" }}
            >
              Resources
              <ChevronDown size={14} style={{ color: activeDropdown === "resources" ? "#005BAC" : "#9CA3AF" }} className={`transition-transform ${activeDropdown === "resources" ? "rotate-180" : ""}`} />
            </button>
            {activeDropdown === "resources" && (
              <div
                className="absolute top-full left-0 mt-2 rounded-2xl py-2 z-50"
                style={{ background: "#ffffff", border: "1px solid #E5E7EB", boxShadow: "0 18px 40px rgba(15, 23, 42, 0.10)", minWidth: 300 }}
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                {resources.map((r) => (
                  <a
                    key={r.label}
                    href={r.href}
                    className="flex items-start gap-3 px-4 py-3 transition-colors"
                    style={{ color: "#374151" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#F8FAFC")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <span style={{ color: "#005BAC", marginTop: 1 }}>{r.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 13, color: "#111827" }}>{r.label}</div>
                      <div style={{ fontSize: 12, color: "#64748B", marginTop: 1 }}>{r.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg transition-colors hover:bg-slate-50" style={{ color: "#64748B" }}>
            <Search size={18} />
          </button>

          <a
            href="https://iotsuite.gi-de.com/login?returnUrl=%2Fdashboard"
            className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all"
            style={{ color: "#374151", background: "transparent" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#F8FAFC";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <LogIn size={15} />
            Login
          </a>

          <a
            href="#chatbot"
            className="hidden lg:flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={{ background: "#005BAC", color: "#FFFFFF" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#004C90";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#005BAC";
            }}
          >
            Talk to an expert
          </a>

          <a
            href="https://iotshop.gi-de.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={{ border: "1px solid #005BAC", color: "#005BAC", background: "transparent" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#EFF6FF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <ShoppingCart size={14} />
            IoT Shop
          </a>

          <a
            href="#"
            className="hidden md:flex items-center"
            aria-label="Giesecke+Devrient"
            style={{ marginLeft: 4 }}
          >
            <img
              src={gdLogo}
              alt="Giesecke+Devrient Creating Confidence"
              style={{ height: 44, width: "auto", display: "block" }}
            />
          </a>

          <button className="lg:hidden p-2 rounded-lg" style={{ color: "#374151" }} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden px-6 pb-6" style={{ borderTop: "1px solid #E5E7EB", background: "#ffffff" }}>
          <div className="pt-4 space-y-1">
            {[
              { label: "Products", href: "#products" },
              { label: "Sectors", href: "#" },
              { label: "Resources", href: "#resources" },
              { label: "For developers", href: "#for-developers" },
              { label: "Talk to an expert", href: "#chatbot" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="block px-3 py-2.5 rounded-lg text-sm font-medium" style={{ color: "#374151" }}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
