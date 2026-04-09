import { ArrowRight, ExternalLink } from "lucide-react";
import exampleImage from "@/assets/dcb446166647abcc8ee830c4c01755566e01676f.png";
import heroBanner from "@/assets/banner.webp";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, rgba(1, 8, 96, 0.9) 0%, rgba(8, 17, 110, 0.82) 32%, rgba(10, 22, 89, 0.58) 60%, rgba(10, 22, 89, 0.2) 100%)",
        }}
      />
      <div className="relative max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", backdropFilter: "blur(10px)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#FFFFFF" }} />
              <span style={{ color: "#FFFFFF", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700 }}>
                G+D Spotlight · IoTgo Expert Hub
              </span>
            </div>

            <h1
              className="mb-5"
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(40px, 5vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
              }}
            >
              Connect Anything,
              <br />
              Manage Everything
            </h1>

            <p
              className="mb-8 max-w-2xl"
              style={{ color: "rgba(255,255,255,0.84)", fontSize: 18, lineHeight: 1.7, fontWeight: 400 }}
            >
              Explore IoTgo solutions, proof points and expert resources in a cleaner Spotlight-style experience designed around content, trust and product discovery.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#products"
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all"
                style={{ background: "#FFFFFF", color: "#0F172A" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#E2E8F0")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
              >
                Explore products <ArrowRight size={15} />
              </a>
              <a
                href="#resources"
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all"
                style={{ background: "rgba(255,255,255,0.12)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.28)", backdropFilter: "blur(10px)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              >
                Explore resources
              </a>
            </div>

          </div>

          <div>
            <div className="rounded-[28px] overflow-hidden" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)" }}>
              <div className="p-4" style={{ borderBottom: "1px solid #E5E7EB", background: "#F8FAFC" }}>
                <div style={{ color: "#005BAC", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Featured report
                </div>
              </div>
              <div className="relative" style={{ height: 420 }}>
                <img src={exampleImage} alt="IoTgo solutions" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.82), rgba(15,23,42,0.1) 55%, transparent 100%)" }} />
                <div className="absolute left-6 right-6 bottom-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: "rgba(255,255,255,0.14)", color: "#FFFFFF", backdropFilter: "blur(8px)" }}>
                    IoTgo®
                  </div>
                  <h2 style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.03em" }}>
                    Product-led entry point for IoT buyers and experts.
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 14, lineHeight: 1.6, marginTop: 10, maxWidth: 480 }}>
                    The hub now prioritizes credibility and content first, with products and resources surfaced in a more editorial Spotlight-style layout.
                  </p>
                  <a href="https://iotshop.gi-de.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5" style={{ color: "#FFFFFF", fontSize: 13, fontWeight: 700 }}>
                    Visit IoT Shop <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
