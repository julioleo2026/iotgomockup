import { ArrowRight, Play, Wifi, Globe, Cpu } from "lucide-react";
import exampleImage from "@/assets/dcb446166647abcc8ee830c4c01755566e01676f.png";

const heroImg = "https://images.unsplash.com/photo-1609868714484-2b2556006301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBjb25uZWN0ZWQlMjBkZXZpY2VzJTIwbmV0d29yayUyMGdsb2JlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ5NzM1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080";

const stats = [
  { icon: <Globe size={16} />, value: "190+", label: "Countries Connected" },
  { icon: <Wifi size={16} />, value: "580M+", label: "eSIM Profiles Delivered" },
  { icon: <Cpu size={16} />, value: "10B+", label: "IoT Devices Supported" },
];

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #001630 0%, #002A5A 35%, #004A96 65%, #005BAC 100%)",
        minHeight: "610px",
      }}
    >
      {/* Background photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.12,
        }}
      />

      {/* Subtle dot-grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Blue glow */}
      <div
        className="absolute"
        style={{
          top: "5%",
          right: "15%",
          width: 560,
          height: 560,
          background: "radial-gradient(circle, rgba(91,172,255,0.15) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative max-w-screen-xl mx-auto px-6 py-20 flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-16 w-full">

          {/* Left: Text content */}
          <div className="flex-1 max-w-2xl">
            {/* Breadcrumb badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#7ECEFF" }} />
              <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500 }}>
                G+D Spotlight · IoT Expert Hub
              </span>
            </div>

            <h1
              className="mb-5"
              style={{
                color: "#ffffff",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
              }}
            >
              Connect Anything.
              <br />
              <span style={{ color: "#7ECEFF" }}>Manage Everything.</span>
            </h1>

            <p
              className="mb-8 max-w-xl"
              style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, lineHeight: 1.65, fontWeight: 400 }}
            >
              Your single destination for IoT expertise, connectivity solutions, sector insights, and developer resources — powered by 160 years of G+D innovation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-12">
              <a
                href="#sectors"
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all"
                style={{ background: "#ffffff", color: "#005BAC" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#EAF2FC")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
              >
                Explore by Sector <ArrowRight size={15} />
              </a>
              <a
                href="https://iotshop.gi-de.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(4px)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              >
                <Play size={13} fill="white" /> Visit IoT Shop
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.15)", color: "#7ECEFF" }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ color: "#ffffff", fontWeight: 800, fontSize: 20, lineHeight: 1.1 }}>{s.value}</div>
                    <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, fontWeight: 400 }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product cards */}
          <div className="hidden lg:flex flex-col gap-4 items-end flex-shrink-0" style={{ width: 370 }}>
            {/* Main card */}
            <div
              className="relative rounded-2xl overflow-hidden w-full"
              style={{
                height: 214,
                background: "linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06))",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}
            >
              <img
                src={exampleImage}
                alt="IoTgo solutions"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0.55, mixBlendMode: "luminosity" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(145deg, rgba(0,30,64,0.55) 0%, transparent 60%)" }}
              />
              <div className="absolute bottom-5 left-5">
                <div style={{ color: "white", fontWeight: 800, fontSize: 20, letterSpacing: "-0.02em" }}>IoTgo®</div>
                <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 12.5, marginTop: 3 }}>
                  Connect anything. Manage everything.
                </div>
              </div>
              <div
                className="absolute top-4 right-4 px-2.5 py-1 rounded-md text-xs font-semibold"
                style={{ background: "rgba(0,91,172,0.5)", color: "#7ECEFF", border: "1px solid rgba(126,206,255,0.25)" }}
              >
                G+D
              </div>
            </div>

            {/* Two mini cards */}
            <div className="flex gap-3 w-full">
              {[
                { label: "Asset Trackers", sub: "Solar · Battery · Wired", link: "View range" },
                { label: "IoT Connectivity", sub: "eSIM · SIM · Plans", link: "Learn more" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="flex-1 rounded-xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div style={{ color: "#7ECEFF", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                    {card.label}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, marginTop: 6, fontWeight: 500 }}>{card.sub}</div>
                  <div className="mt-3 flex items-center gap-1" style={{ color: "#7ECEFF", fontSize: 11, fontWeight: 600 }}>
                    {card.link} <ArrowRight size={10} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade to page background */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: 70, background: "linear-gradient(to bottom, transparent, #F0F5FA)" }}
      />
    </section>
  );
}
