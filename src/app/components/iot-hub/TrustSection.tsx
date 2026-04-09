import { useEffect, useState } from "react";
import { Globe, Users, Cpu, Wifi, Network, ChevronLeft, ChevronRight, SimCard, BadgeCheck, CreditCard, Microchip } from "lucide-react";
import exampleImage from "@/assets/dcb446166647abcc8ee830c4c01755566e01676f.png";
import { CoverageMap } from "./CoverageMap";

const stats = [
  { icon: <Globe size={24} />, value: "185", label: "Countries & Territories", sub: "Global eSIM coverage", color: "#005BAC", bg: "#EAF2FC" },
  { icon: <Cpu size={24} />, value: "500M+", label: "eSIM Profiles Delivered", sub: "GSMA certified deployments", color: "#6C3FC5", bg: "#F0EAFE" },
  { icon: <Wifi size={24} />, value: "1B+", label: "Mobile Devices Managed", sub: "Globally", color: "#0082C8", bg: "#E5F3FB" },
  { icon: <Users size={24} />, value: "170 +", label: "Years of G+D Experience", sub: "Security & trust since 1852", color: "#B45309", bg: "#FEF4E5" },
  { icon: <Network size={24} />, value: "600 +", label: "Networks", sub: "Global connectivity reach", color: "#0A8A62", bg: "#E6F6F1" },
  { icon: <Globe size={24} />, value: "#1", label: "eSIM Market Leader", sub: "Ranked by GSMA & analysts", color: "#BE1D3B", bg: "#FDE9EC" },
];

const fullStackFeatures = [
  { icon: <SimCard size={16} />, label: "eSIM for IoT" },
  { icon: <Globe size={16} />, label: "Global coverage" },
  { icon: <BadgeCheck size={16} />, label: "Localized experience" },
  { icon: <CreditCard size={16} />, label: "3+ billion SIM cards managed" },
  { icon: <Microchip size={16} />, label: "500+ million eSIM profiles delivered" },
];

const testimonials = [
  {
    quote:
      "G+D's IoTgo® platform gave us the global coverage and management flexibility we needed to deploy 12,000 connected devices across 34 countries — without a single on-site SIM swap.",
    role: "Director of IoT Operations",
    company: "Global Logistics Enterprise · Europe",
  },
  {
    quote:
      "With IoTgo® Connect and IoTgo® Control, we standardized connectivity across utility assets in 18 markets while keeping provisioning, monitoring and support in one secure workflow.",
    role: "Head of Connected Products",
    company: "European Energy Provider",
  },
  {
    quote:
      "IoTgo® asset tracking helped us gain real-time visibility on high-value shipments across ports, warehouses and inland routes — improving delivery confidence and reducing manual follow-up.",
    role: "Supply Chain Transformation Lead",
    company: "Global Industrial Manufacturer",
  },
];

export function TrustSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const currentTestimonial = testimonials[activeTestimonial];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  const showPrevious = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="trust" style={{ background: "#ffffff", paddingTop: 80, paddingBottom: 80 }}>
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-14">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs mb-4 font-semibold"
            style={{ background: "#EAF2FC", color: "#005BAC", letterSpacing: "0.06em", textTransform: "uppercase" }}
          >
            Trust & Proof Points
          </div>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: "#0F1C2E", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Trusted by Enterprises Worldwide
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ color: "#5A6C80", fontSize: 16, lineHeight: 1.65 }}>
            G+D's IoT connectivity solutions are deployed across mission-critical use cases in 185 countries and territories, backed by decades of security expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center p-5 rounded-2xl transition-all hover:-translate-y-0.5"
              style={{
                background: "#ffffff",
                border: "1px solid #E2EBF5",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl mb-3"
                style={{ width: 48, height: 48, background: s.bg, color: s.color }}
              >
                {s.icon}
              </div>
              <div style={{ fontWeight: 800, fontSize: 21, color: "#0F1C2E", lineHeight: 1.1, letterSpacing: "-0.02em" }}>{s.value}</div>
              <div style={{ fontWeight: 600, fontSize: 12, color: "#374151", marginTop: 4, lineHeight: 1.3 }}>{s.label}</div>
              <div style={{ color: "#9CA3AF", fontSize: 11, marginTop: 3 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        <div
          className="relative rounded-2xl overflow-hidden mb-7"
          style={{
            background: "linear-gradient(135deg, #001630 0%, #002A5A 40%, #004A96 100%)",
          }}
        >
          <img
            src={exampleImage}
            alt="IoTgo® Full Stack"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.1, objectPosition: "right center" }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative flex flex-col md:flex-row items-center gap-8 p-8">
            <div className="flex-1">
              <div
                className="inline-block px-3 py-1 rounded-full text-xs mb-3 font-semibold"
                style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)" }}
              >
                The Full Stack
              </div>
              <h3 style={{ color: "white", fontWeight: 800, fontSize: 22, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                IoT Connectivity, eSIM and Platform — All in One.
              </h3>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, marginTop: 8, lineHeight: 1.6 }}>
                IoTgo® Control brings together IoT connectivity, eSIM, and SIM management in one unified platform — from deployment to control.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 flex-shrink-0" style={{ minWidth: 320 }}>
              {fullStackFeatures.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3">
                  <div className="flex items-center justify-center" style={{ color: "#28B7F7", flexShrink: 0 }}>
                    {feature.icon}
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.92)", fontSize: 14, fontWeight: 600, lineHeight: 1.4 }}>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CoverageMap />

        <div
          className="mt-7 rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, #001630 0%, #002A5A 40%, #004A96 100%)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <div style={{ color: "rgba(126,206,255,0.9)", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Customer Testimonials
              </div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginTop: 4 }}>
                Real-world outcomes across global IoT deployments.
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={showPrevious}
                className="flex items-center justify-center rounded-full transition-colors"
                style={{ width: 36, height: 36, background: "rgba(255,255,255,0.1)", color: "white" }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="flex items-center justify-center rounded-full transition-colors"
                style={{ width: 36, height: 36, background: "rgba(255,255,255,0.1)", color: "white" }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0 text-5xl" style={{ color: "rgba(126,206,255,0.7)", lineHeight: 1, fontFamily: "Georgia, serif" }}>
              "
            </div>
            <div className="flex-1">
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 18, lineHeight: 1.65, fontStyle: "italic" }}>
                {currentTestimonial.quote}
              </p>
              <div className="flex items-center gap-3 mt-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                >
                  <Users size={16} style={{ color: "#7ECEFF" }} />
                </div>
                <div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em" }}>{currentTestimonial.role}</div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}>{currentTestimonial.company}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.role}
                type="button"
                onClick={() => setActiveTestimonial(index)}
                className="rounded-full transition-all"
                style={{
                  width: index === activeTestimonial ? 22 : 8,
                  height: 8,
                  background: index === activeTestimonial ? "#7ECEFF" : "rgba(255,255,255,0.25)",
                }}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
