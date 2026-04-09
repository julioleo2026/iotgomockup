import { Layers, BookOpen, Package, Code2, Users, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: <Layers size={22} />,
    color: "#005BAC",
    bg: "#EAF2FC",
    title: "Sector Intelligence",
    desc: "Deep-dive content tailored to 10 industries — from healthcare to transport and industrial manufacturing.",
  },
  {
    icon: <BookOpen size={22} />,
    color: "#6C3FC5",
    bg: "#F0EAFE",
    title: "Expert Resources",
    desc: "Reports, white papers, webinars, and case studies authored by IoT connectivity specialists.",
  },
  {
    icon: <Package size={22} />,
    color: "#0082C8",
    bg: "#E5F3FB",
    title: "Product Discovery",
    desc: "Explore IoTgo® asset trackers, eSIM modules, and connectivity plans directly from the IoT Shop.",
  },
  {
    icon: <Code2 size={22} />,
    color: "#0A8A62",
    bg: "#E6F6F1",
    title: "Developer Resources",
    desc: "API references, SDKs, integration guides, and sandbox environments for technical teams.",
  },
  {
    icon: <Users size={22} />,
    color: "#B45309",
    bg: "#FEF4E5",
    title: "Community & Support",
    desc: "Connect with IoT experts, access live chat, and get onboarding support for your connectivity journey.",
  },
  {
    icon: <ShieldCheck size={22} />,
    color: "#BE1D3B",
    bg: "#FDE9EC",
    title: "Trust & Compliance",
    desc: "ISO-certified, globally compliant connectivity built on 160 years of G+D security expertise.",
  },
];

export function ValueProposition() {
  return (
    <section style={{ background: "#F0F5FA", paddingTop: 80, paddingBottom: 80 }}>
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs mb-4 font-semibold"
            style={{ background: "#EAF2FC", color: "#005BAC", letterSpacing: "0.06em", textTransform: "uppercase" }}
          >
            What You'll Find Here
          </div>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: "#0F1C2E", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Everything IoT.{" "}
            <span style={{ color: "#005BAC" }}>All in One Place.</span>
          </h2>
          <p className="mt-4" style={{ color: "#4A5568", fontSize: 17, lineHeight: 1.65, fontWeight: 400 }}>
            The IoT Expert Hub combines G+D's product catalogue, technical documentation, and thought leadership content into a single, structured destination for connectivity professionals.
          </p>
        </div>

        {/* Pillar grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{
                background: "#ffffff",
                border: "1px solid #E2EBF5",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl mb-4"
                style={{ width: 48, height: 48, background: p.bg, color: p.color }}
              >
                {p.icon}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0F1C2E", marginBottom: 8, letterSpacing: "-0.01em" }}>
                {p.title}
              </h3>
              <p style={{ color: "#5A6C80", fontSize: 14, lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
