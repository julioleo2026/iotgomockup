import { ArrowRight, Code2, Terminal, BookOpen, GitBranch, Zap, ExternalLink } from "lucide-react";

const devImg = "https://images.unsplash.com/photo-1595623654300-b27329804025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZyUyMEFQSSUyMGRvY3VtZW50YXRpb24lMjB0ZWNofGVufDF8fHx8MTc3NDk3MzU1MXww&ixlib=rb-4.1.0&q=80&w=800";

const codeSnippet = `// IoTgo® API - Get SIM Status
const response = await fetch(
  'https://api.iotgo.gi-de.com/v2/sims/{iccid}',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

const { status, network, data_usage } = await response.json();
console.log(\`SIM \${iccid}: \${status} on \${network}\`);
// → SIM 8949xxxx: ACTIVE on Telekom DE`;

const devResources = [
  { icon: <BookOpen size={18} />, color: "#005BAC", bg: "#EAF2FC", title: "API Reference", desc: "Full REST API documentation for SIM management, device provisioning, and connectivity monitoring.", link: "View Docs" },
  { icon: <Terminal size={18} />, color: "#0A8A62", bg: "#E6F6F1", title: "SDKs & Libraries", desc: "Official SDKs for Python, Node.js, Java, and Go. Get started in minutes.", link: "Download SDKs" },
  { icon: <GitBranch size={18} />, color: "#6C3FC5", bg: "#F0EAFE", title: "Integration Guides", desc: "Step-by-step guides for AWS IoT Core, Azure IoT Hub, and Google Cloud IoT integration.", link: "Read Guides" },
  { icon: <Zap size={18} />, color: "#B45309", bg: "#FEF4E5", title: "Sandbox Environment", desc: "Test your integration in our sandbox before going live — no billing, full API access.", link: "Try Sandbox" },
];

export function DeveloperSection() {
  return (
    <section
      id="developers"
      style={{
        background: "linear-gradient(160deg, #001226 0%, #002040 45%, #003070 100%)",
        paddingTop: 80,
        paddingBottom: 80,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${devImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.055,
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-screen-xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs mb-4 font-semibold"
              style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <Code2 size={11} /> For Developers
            </div>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: "white", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Build on IoTgo® Platform
            </h2>
            <p className="mt-2 max-w-lg" style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, fontWeight: 400 }}>
              A robust API ecosystem designed for teams integrating connectivity management into their own applications and platforms.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold"
            style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.8)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            Developer Portal <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Code snippet */}
          <div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#020C18",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
              }}
            >
              {/* Window bar */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ background: "#0A1A2E", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
                </div>
                <span style={{ color: "#3A5878", fontSize: 12, fontFamily: "monospace" }}>iotgo-api-example.js</span>
                <button
                  className="text-xs px-2.5 py-1 rounded-md font-medium"
                  style={{ background: "rgba(0,91,172,0.25)", color: "#7ECEFF" }}
                >
                  Copy
                </button>
              </div>

              {/* Code */}
              <div className="p-5 overflow-x-auto">
                <pre style={{ fontFamily: "'Fira Code', 'Cascadia Code', monospace", fontSize: 13, lineHeight: 1.75, color: "#B0C4DE", margin: 0 }}>
                  {codeSnippet.split("\n").map((line, i) => {
                    const isComment = line.trim().startsWith("//");
                    const hasKeyword = line.includes("const ") || line.includes("await ") || line.includes("Bearer");
                    return (
                      <div key={i} className="flex">
                        <span style={{ color: "#1E3A5A", minWidth: 28, userSelect: "none", fontSize: 11 }}>{i + 1}</span>
                        <span style={{
                          color: isComment ? "#3D7A4A" : hasKeyword ? "#5BA3D9" : "#B0C4DE",
                          fontStyle: isComment ? "italic" : "normal",
                        }}>
                          {line}
                        </span>
                      </div>
                    );
                  })}
                </pre>
              </div>

              {/* Tags */}
              <div
                className="flex items-center gap-2 px-5 py-3 flex-wrap"
                style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "#081525" }}
              >
                {["REST API", "OpenAPI 3.0", "Webhooks", "Rate Limits: 1000/min"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-xs"
                    style={{ background: "rgba(0,91,172,0.18)", color: "#5BA3D9" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Dev resource cards */}
          <div className="space-y-3.5">
            {devResources.map((r) => (
              <a
                key={r.title}
                href="#"
                className="flex items-start gap-4 p-5 rounded-2xl transition-all group"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,91,172,0.15)";
                  e.currentTarget.style.borderColor = "rgba(0,91,172,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ width: 44, height: 44, background: r.bg, color: r.color }}
                >
                  {r.icon}
                </div>
                <div className="flex-1">
                  <h4 style={{ color: "white", fontWeight: 700, fontSize: 15, marginBottom: 4, letterSpacing: "-0.01em" }}>{r.title}</h4>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.55 }}>{r.desc}</p>
                  <span className="flex items-center gap-1 mt-3 text-sm font-semibold" style={{ color: "#7ECEFF" }}>
                    {r.link} <ArrowRight size={13} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl"
          style={{ background: "rgba(0,91,172,0.18)", border: "1px solid rgba(0,91,172,0.3)" }}
        >
          <div>
            <div style={{ color: "white", fontWeight: 700, fontSize: 17, letterSpacing: "-0.01em" }}>Ready to start building?</div>
            <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, marginTop: 4 }}>
              Get your API key in minutes. Free sandbox access included.
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold"
              style={{ background: "#005BAC", color: "white" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#004A8F")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#005BAC")}
            >
              Request API Access
            </a>
            <a
              href="#"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold"
              style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              View Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
