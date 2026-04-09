import { Shield, Globe, Award, Users, Cpu, Wifi } from "lucide-react";
import { CoverageMap } from "./CoverageMap";

const stats = [
  { icon: <Globe size={24} />, value: "190+", label: "Countries & Territories", sub: "Global eSIM coverage", color: "#005BAC", bg: "#EAF2FC" },
  { icon: <Cpu size={24} />, value: "580M+", label: "eSIM Profiles Delivered", sub: "GSMA certified deployments", color: "#6C3FC5", bg: "#F0EAFE" },
  { icon: <Wifi size={24} />, value: "10B+", label: "Connected Devices Supported", sub: "Across enterprise & consumer", color: "#0082C8", bg: "#E5F3FB" },
  { icon: <Users size={24} />, value: "160+", label: "Years of G+D Expertise", sub: "Security & trust since 1852", color: "#B45309", bg: "#FEF4E5" },
  { icon: <Shield size={24} />, value: "ISO 27001", label: "Certified Security", sub: "SOC 2 Type II compliant", color: "#0A8A62", bg: "#E6F6F1" },
  { icon: <Award size={24} />, value: "#1", label: "eSIM Market Leader", sub: "Ranked by GSMA & analysts", color: "#BE1D3B", bg: "#FDE9EC" },
];

const certifications = [
  { label: "GSMA SGP.02", desc: "M2M eSIM Standard" },
  { label: "GSMA SGP.32", desc: "IoT eSIM Standard" },
  { label: "ISO/IEC 27001", desc: "Information Security" },
  { label: "ETSI EN 419 241", desc: "Digital Signatures" },
  { label: "SOC 2 Type II", desc: "Service Organization" },
  { label: "FIPS 140-2", desc: "Cryptographic Standard" },
];

export function TrustSection() {
  return (
    <section id="trust" style={{ background: "#ffffff", paddingTop: 80, paddingBottom: 80 }}>
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Header */}
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
            G+D's IoT connectivity solutions are deployed across mission-critical use cases in 190+ countries, backed by decades of security expertise.
          </p>
        </div>

        {/* Stats grid */}
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

        <CoverageMap />

        {/* Certifications bar */}
        <div
          className="rounded-2xl p-7"
          style={{ background: "#F0F5FA", border: "1px solid #E2EBF5" }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-shrink-0">
              <div style={{ fontWeight: 700, fontSize: 16, color: "#0F1C2E", letterSpacing: "-0.01em" }}>Certifications & Standards</div>
              <p style={{ color: "#5A6C80", fontSize: 13, marginTop: 4 }}>
                Industry-leading compliance across global IoT deployments.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {certifications.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col px-4 py-3 rounded-xl"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #D5E3F0",
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: 13, color: "#005BAC" }}>{c.label}</span>
                  <span style={{ color: "#5A6C80", fontSize: 11, marginTop: 2 }}>{c.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial quote */}
        <div
          className="mt-7 rounded-2xl p-8 flex flex-col md:flex-row items-start gap-6"
          style={{
            background: "linear-gradient(135deg, #001630 0%, #002A5A 40%, #004A96 100%)",
          }}
        >
          <div className="flex-shrink-0 text-5xl" style={{ color: "rgba(126,206,255,0.7)", lineHeight: 1, fontFamily: "Georgia, serif" }}>"</div>
          <div>
            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 18, lineHeight: 1.65, fontStyle: "italic" }}>
              G+D's IoTgo® platform gave us the global coverage and management flexibility we needed to deploy 12,000 connected devices across 34 countries — without a single on-site SIM swap.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <Users size={16} style={{ color: "#7ECEFF" }} />
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em" }}>Director of IoT Operations</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}>Global Logistics Enterprise · Europe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
