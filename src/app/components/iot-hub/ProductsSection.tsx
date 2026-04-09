import { ArrowRight, ExternalLink, Battery, Sun, Plug, Wifi, Globe, Cpu } from "lucide-react";

const trackerImg = "https://images.unsplash.com/photo-1668207985574-8aa41b3a3708?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHUFMlMjBhc3NldCUyMHRyYWNrZXIlMjBkZXZpY2UlMjBoYXJkd2FyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc0OTczNTQ5fDA&ixlib=rb-4.1.0&q=80&w=600";
const esimImg = "https://images.unsplash.com/photo-1754292471061-a9dd19ccf23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlU0lNJTIwU0lNJTIwY2FyZCUyMGNvbm5lY3Rpdml0eSUyMG1vYmlsZSUyMG5ldHdvcmslMjBjaGlwfGVufDF8fHx8MTc3NDk3MzU1MXww&ixlib=rb-4.1.0&q=80&w=600";

const trackerProducts = [
  { name: "IoTgo® Track-Solar Advanced", icon: <Sun size={14} />, color: "#B45309", bg: "#FEF4E5", desc: "Solar-powered outdoor asset tracker with global eSIM, IP67 rated.", tags: ["Solar", "GNSS", "LTE-M"] },
  { name: "IoTgo® Track-Solar Ultra", icon: <Battery size={14} />, color: "#005BAC", bg: "#EAF2FC", desc: "Long-life battery tracker (5+ years standby) for containers and pallets.", tags: ["Battery", "BLE", "NB-IoT"] },
  { name: "IoTgo® Smart Label", icon: <Plug size={14} />, color: "#0A8A62", bg: "#E6F6F1", desc: "Wired vehicle tracker with CAN bus integration and real-time telemetry.", tags: ["Wired", "CAN Bus", "4G LTE"] },
];

const connectivityProducts = [
  { name: "IoTgo® Connect", icon: <Globe size={14} />, color: "#6C3FC5", bg: "#F0EAFE", desc: "Global IoT connectivity with resilient SIM and eSIM options for international deployments.", tags: ["Connectivity", "eSIM", "Global"] },
  { name: "IoTgo® Intelligent Online (IO)", icon: <Wifi size={14} />, color: "#0082C8", bg: "#E5F3FB", desc: "Operational intelligence for monitoring usage, network performance and fleet health at scale.", tags: ["Insights", "Monitoring", "Automation"] },
  { name: "IoTgo® Control", icon: <Cpu size={14} />, color: "#BE1D3B", bg: "#FDE9EC", desc: "SIM lifecycle management, policy control and analytics in one secure platform.", tags: ["Platform", "API", "Lifecycle"] },
];

export function ProductsSection() {
  return (
    <section id="products" style={{ background: "#F0F5FA", paddingTop: 80, paddingBottom: 80 }}>
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 gap-6">
          <div>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: "#0F1C2E", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Products & Solutions
            </h2>
            <p className="mt-2 max-w-lg" style={{ color: "#5A6C80", fontSize: 16 }}>
              From hardware trackers to global eSIM connectivity — explore our full IoTgo® product range.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#chatbot"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all"
              style={{ border: "1.5px solid #005BAC", color: "#005BAC", background: "transparent" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#EAF2FC")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              Talk to an expert
            </a>
            <a
              href="https://iotshop.gi-de.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all"
              style={{ background: "#005BAC", color: "white" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#004A8F")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#005BAC")}
            >
              Visit IoT Shop <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid #E2EBF5", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
          >
            <div className="relative" style={{ height: 172, background: "linear-gradient(135deg, #002A5A, #004A96)" }}>
              <img
                src={trackerImg}
                alt="Asset Trackers"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0.25 }}
              />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span
                  className="inline-block px-2.5 py-1 rounded-md text-xs mb-2 font-semibold"
                  style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)", width: "fit-content" }}
                >
                  Hardware
                </span>
                <h3 style={{ color: "white", fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em" }}>Asset Trackers</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, marginTop: 3 }}>
                  Solar, battery & wired — for any asset, anywhere.
                </p>
              </div>
            </div>

            <div className="p-4 space-y-1">
              {trackerProducts.map((p) => (
                <a
                  key={p.name}
                  href="#"
                  className="flex items-start gap-3 p-3.5 rounded-xl transition-all hover:bg-slate-50 group"
                >
                  <div
                    className="flex items-center justify-center rounded-lg flex-shrink-0 mt-0.5"
                    style={{ width: 32, height: 32, background: p.bg, color: p.color }}
                  >
                    {p.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div style={{ fontWeight: 600, fontSize: 13.5, color: "#0F1C2E" }}>{p.name}</div>
                    <div style={{ color: "#5A6C80", fontSize: 12, marginTop: 2 }}>{p.desc}</div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md text-xs font-medium" style={{ background: "#EEF3F9", color: "#4A5C70" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight size={14} className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#005BAC" }} />
                </a>
              ))}
            </div>

            <div className="px-4 pb-5">
              <a
                href="#"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{ border: "1.5px solid #005BAC", color: "#005BAC" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#EAF2FC")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                View All Trackers <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid #E2EBF5", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
          >
            <div className="relative" style={{ height: 172, background: "linear-gradient(135deg, #3B1A8A, #5A3FC5)" }}>
              <img
                src={esimImg}
                alt="IoT Connectivity"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0.2 }}
              />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span
                  className="inline-block px-2.5 py-1 rounded-md text-xs mb-2 font-semibold"
                  style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)", width: "fit-content" }}
                >
                  Connectivity
                </span>
                <h3 style={{ color: "white", fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em" }}>IoT Connectivity</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, marginTop: 3 }}>
                  eSIM, SIM, and managed connectivity plans.
                </p>
              </div>
            </div>

            <div className="p-4 space-y-1">
              {connectivityProducts.map((p) => (
                <a
                  key={p.name}
                  href="#"
                  className="flex items-start gap-3 p-3.5 rounded-xl transition-all hover:bg-slate-50 group"
                >
                  <div
                    className="flex items-center justify-center rounded-lg flex-shrink-0 mt-0.5"
                    style={{ width: 32, height: 32, background: p.bg, color: p.color }}
                  >
                    {p.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div style={{ fontWeight: 600, fontSize: 13.5, color: "#0F1C2E" }}>{p.name}</div>
                    <div style={{ color: "#5A6C80", fontSize: 12, marginTop: 2 }}>{p.desc}</div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md text-xs font-medium" style={{ background: "#EEF3F9", color: "#4A5C70" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight size={14} className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#005BAC" }} />
                </a>
              ))}
            </div>

            <div className="px-4 pb-5">
              <a
                href="#"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{ border: "1.5px solid #6C3FC5", color: "#6C3FC5" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F0EAFE")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                View Connectivity Plans <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
