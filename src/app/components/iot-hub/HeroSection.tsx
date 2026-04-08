import { ArrowRight, ExternalLink } from "lucide-react";
import exampleImage from "@/assets/dcb446166647abcc8ee830c4c01755566e01676f.png";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#005BAC" }} />
              <span style={{ color: "#005BAC", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700 }}>
                G+D Spotlight · IoTgo Expert Hub
              </span>
            </div>

            <h1
              className="mb-5"
              style={{
                color: "#111827",
                fontSize: "clamp(40px, 5vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
              }}
            >
              Secure IoT insights,
              <br />
              products and expertise
              <br />
              <span style={{ color: "#005BAC" }}>in one place.</span>
            </h1>

            <p
              className="mb-8 max-w-2xl"
              style={{ color: "#475569", fontSize: 18, lineHeight: 1.7, fontWeight: 400 }}
            >
              Explore IoTgo solutions, proof points and expert resources in a cleaner Spotlight-style experience designed around content, trust and product discovery.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#products"
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all"
                style={{ background: "#005BAC", color: "#FFFFFF" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#004A8F")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#005BAC")}
              >
                Explore products <ArrowRight size={15} />
              </a>
              <a
                href="#resources"
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all"
                style={{ background: "#FFFFFF", color: "#111827", border: "1px solid #CBD5E1" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F8FAFC")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
              >
                Explore resources
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              {[
                { value: "190+", label: "countries connected" },
                { value: "580M+", label: "eSIM profiles delivered" },
                { value: "10B+", label: "IoT devices supported" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl p-5" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB" }}>
                  <div style={{ color: "#111827", fontWeight: 800, fontSize: 22, lineHeight: 1.1 }}>{item.value}</div>
                  <div style={{ color: "#64748B", fontSize: 12.5, marginTop: 6 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-[28px] overflow-hidden" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)" }}>
              <div className="p-4" style={{ borderBottom: "1px solid #E5E7EB", background: "#F8FAFC" }}>
                <div style={{ color: "#005BAC", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Featured experience
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
