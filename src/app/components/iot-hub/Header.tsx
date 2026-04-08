import { useState, useRef } from "react";
import { ChevronDown, Search, ShoppingCart, Menu, X, ExternalLink, Wifi, Heart, Truck, Zap, ShoppingBag, Shield, MapPin, Factory, Radio, Users, BookOpen, Video, FileText, Newspaper, BarChart2, Package, Cpu } from "lucide-react";

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
  { label: "Blog", desc: "Expert insights & industry news", icon: <BookOpen size={15} /> },
  { label: "Webinar", desc: "On-demand & upcoming sessions", icon: <Video size={15} /> },
  { label: "White Papers", desc: "In-depth technical research", icon: <FileText size={15} /> },
  { label: "Media Coverage", desc: "Press & industry mentions", icon: <Newspaper size={15} /> },
  { label: "Case Studies", desc: "Real-world success stories", icon: <BarChart2 size={15} /> },
];

const products = [
  { label: "Asset Trackers", desc: "Solar, battery & wired trackers", icon: <Package size={15} />, external: false },
  { label: "IoT Connectivity", desc: "eSIM, SIM & connectivity plans", icon: <Wifi size={15} />, external: false },
  { label: "IoT Shop", desc: "Browse all products online", icon: <ShoppingBag size={15} />, external: true },
  { label: "IoTgo® Platform", desc: "SIM lifecycle & analytics", icon: <Cpu size={15} />, external: false },
];

type DropdownKey = "sectors" | "resources" | "products" | null;

export function Header() {
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
    <header className="sticky top-0 z-50" style={{ background: "#ffffff", boxShadow: "0 1px 0 #E2E8F0" }}>
      {/* Top utility bar */}
      <div style={{ background: "#F7F9FC", borderBottom: "1px solid #E8EEF4" }}>
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between" style={{ height: "34px" }}>
          <span style={{ color: "#6B7E96", fontSize: 12 }}>
            Part of <span style={{ color: "#005BAC", fontWeight: 600 }}>Giesecke+Devrient</span> · Creating Confidence
          </span>
          <div className="flex items-center gap-5">
            <a
              href="https://iotshop.gi-de.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-[#005BAC]"
              style={{ color: "#6B7E96", fontSize: 12 }}
            >
              <ExternalLink size={11} /> IoT Shop
            </a>
            <a href="#" className="transition-colors hover:text-[#005BAC]" style={{ color: "#6B7E96", fontSize: 12 }}>EN</a>
            <a href="#" className="transition-colors hover:text-[#005BAC]" style={{ color: "#6B7E96", fontSize: 12 }}>Contact</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between" style={{ height: "66px" }}>
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 flex-shrink-0">
          <div
            className="flex items-center justify-center rounded-lg"
            style={{ width: 38, height: 38, background: "linear-gradient(145deg, #005BAC, #003D80)" }}
          >
            <span style={{ color: "white", fontWeight: 800, fontSize: 17, letterSpacing: "-0.02em" }}>G</span>
          </div>
          <div>
            <div style={{ color: "#0F1C2E", fontWeight: 700, fontSize: 15.5, letterSpacing: "-0.01em", lineHeight: 1.1 }}>IoT Expert Hub</div>
            <div style={{ color: "#7A99B8", fontSize: 10, letterSpacing: "0.07em", textTransform: "uppercase", fontWeight: 500 }}>by Giesecke+Devrient</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center">
          {/* Sectors */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("sectors")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-lg"
              style={{
                color: activeDropdown === "sectors" ? "#005BAC" : "#374151",
                background: activeDropdown === "sectors" ? "#EAF2FC" : "transparent",
              }}
            >
              Sectors
              <ChevronDown
                size={14}
                style={{ color: activeDropdown === "sectors" ? "#005BAC" : "#9CA3AF" }}
                className={`transition-transform ${activeDropdown === "sectors" ? "rotate-180" : ""}`}
              />
            </button>
            {activeDropdown === "sectors" && (
              <div
                className="absolute top-full left-0 mt-1 rounded-xl py-2 z-50"
                style={{
                  background: "#ffffff",
                  border: "1px solid #E2EBF5",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.10)",
                  minWidth: 248,
                }}
                onMouseEnter={() => handleMouseEnter("sectors")}
                onMouseLeave={handleMouseLeave}
              >
                {sectors.map((s) => (
                  <a
                    key={s.label}
                    href="#sectors"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors"
                    style={{ color: "#374151" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#EAF2FC";
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

          {/* Resources */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-lg"
              style={{
                color: activeDropdown === "resources" ? "#005BAC" : "#374151",
                background: activeDropdown === "resources" ? "#EAF2FC" : "transparent",
              }}
            >
              Resources
              <ChevronDown
                size={14}
                style={{ color: activeDropdown === "resources" ? "#005BAC" : "#9CA3AF" }}
                className={`transition-transform ${activeDropdown === "resources" ? "rotate-180" : ""}`}
              />
            </button>
            {activeDropdown === "resources" && (
              <div
                className="absolute top-full left-0 mt-1 rounded-xl py-2 z-50"
                style={{
                  background: "#ffffff",
                  border: "1px solid #E2EBF5",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.10)",
                  minWidth: 260,
                }}
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                {resources.map((r) => (
                  <a
                    key={r.label}
                    href="#resources"
                    className="flex items-start gap-3 px-4 py-3 transition-colors"
                    style={{ color: "#374151" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#EAF2FC")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <span style={{ color: "#005BAC", marginTop: 1 }}>{r.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 13, color: "#0F1C2E" }}>{r.label}</div>
                      <div style={{ fontSize: 12, color: "#6B7E96", marginTop: 1 }}>{r.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Products */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-lg"
              style={{
                color: activeDropdown === "products" ? "#005BAC" : "#374151",
                background: activeDropdown === "products" ? "#EAF2FC" : "transparent",
              }}
            >
              Products
              <ChevronDown
                size={14}
                style={{ color: activeDropdown === "products" ? "#005BAC" : "#9CA3AF" }}
                className={`transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`}
              />
            </button>
            {activeDropdown === "products" && (
              <div
                className="absolute top-full left-0 mt-1 rounded-xl py-2 z-50"
                style={{
                  background: "#ffffff",
                  border: "1px solid #E2EBF5",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.10)",
                  minWidth: 270,
                }}
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={handleMouseLeave}
              >
                {products.map((p) => (
                  <a
                    key={p.label}
                    href="#products"
                    className="flex items-start gap-3 px-4 py-3 transition-colors"
                    style={{ color: "#374151" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#EAF2FC")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <span style={{ color: "#005BAC", marginTop: 1 }}>{p.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5" style={{ fontWeight: 600, fontSize: 13, color: "#0F1C2E" }}>
                        {p.label}
                        {p.external && <ExternalLink size={11} style={{ color: "#005BAC" }} />}
                      </div>
                      <div style={{ fontSize: 12, color: "#6B7E96", marginTop: 1 }}>{p.desc}</div>
                    </div>
                  </a>
                ))}
                {/* Shop CTA inside dropdown */}
                <div style={{ borderTop: "1px solid #EAF2FC", margin: "6px 12px 4px" }} />
                <a
                  href="https://iotshop.gi-de.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mx-3 mb-1 px-3 py-2 rounded-lg text-sm justify-center"
                  style={{ background: "#005BAC", color: "white", fontWeight: 600 }}
                >
                  <ShoppingCart size={13} /> Visit IoT Shop
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-lg transition-colors hover:bg-slate-50"
            style={{ color: "#6B7E96" }}
          >
            <Search size={18} />
          </button>

          <a
            href="https://iotshop.gi-de.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              border: "1.5px solid #005BAC",
              color: "#005BAC",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#EAF2FC";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <ShoppingCart size={14} />
            IoT Shop
          </a>

          <a
            href="#contact"
            className="hidden md:flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{ background: "#005BAC", color: "white" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#004A8F")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#005BAC")}
          >
            Get in Touch
          </a>

          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ color: "#374151" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden px-6 pb-6" style={{ borderTop: "1px solid #E8EEF4", background: "#ffffff" }}>
          <div className="pt-4 space-y-1">
            {["IoT Shop", "Sectors", "Resources", "Products"].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2.5 rounded-lg text-sm font-medium"
                style={{ color: "#374151" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
