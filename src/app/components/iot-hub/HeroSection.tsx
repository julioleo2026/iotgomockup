import { ArrowRight } from "lucide-react";
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
        <div className="grid grid-cols-1 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", backdropFilter: "blur(10px)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#FFFFFF" }} />
              <span style={{ color: "#FFFFFF", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700 }}>
                G+D Spotlight · IoTgo® Expert Hub
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
              Explore IoTgo® solutions, proof points and expert resources in a cleaner Spotlight-style experience designed around content, trust and product discovery.
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

        </div>
      </div>
    </section>
  );
}
