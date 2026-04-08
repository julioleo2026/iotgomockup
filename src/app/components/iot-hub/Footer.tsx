import { ExternalLink, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  "IoT Hub": [
    { label: "About IoT Expert Hub", href: "#" },
    { label: "Spotlight", href: "#" },
    { label: "News & Press", href: "#" },
    { label: "Events & Webinars", href: "#" },
    { label: "Partner Program", href: "#" },
  ],
  Sectors: [
    { label: "Connectivity Resellers", href: "#" },
    { label: "Healthcare", href: "#" },
    { label: "Industrial Manufacturing", href: "#" },
    { label: "Transport & Logistics", href: "#" },
    { label: "Energy & Environment", href: "#" },
    { label: "Security", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Webinars", href: "#" },
    { label: "White Papers", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Media Coverage", href: "#" },
  ],
  Products: [
    { label: "Asset Trackers", href: "#" },
    { label: "IoT Connectivity", href: "#" },
    { label: "IoTgo® Platform", href: "#" },
    { label: "eSIM Solutions", href: "#" },
    { label: "IoT Shop", href: "https://iotshop.gi-de.com", external: true },
  ],
  Developers: [
    { label: "API Reference", href: "#" },
    { label: "SDKs & Libraries", href: "#" },
    { label: "Integration Guides", href: "#" },
    { label: "Sandbox", href: "#" },
    { label: "Developer Portal", href: "#" },
  ],
};

const legalLinks = ["Privacy Policy", "Cookie Settings", "Legal Notice", "Terms of Use", "Accessibility"];

export function Footer() {
  return (
    <footer style={{ background: "#001226", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Newsletter strip */}
      <div style={{ background: "#001E40", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-screen-xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div style={{ color: "white", fontWeight: 700, fontSize: 17, letterSpacing: "-0.01em" }}>Stay Ahead of IoT Trends</div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginTop: 4 }}>
              Get the latest connectivity insights, product updates, and expert resources delivered monthly.
            </p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="your@company.com"
              className="flex-1 md:w-64 px-4 py-2.5 rounded-lg text-sm outline-none"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "white",
              }}
            />
            <button
              className="px-5 py-2.5 rounded-lg text-sm font-semibold flex-shrink-0"
              style={{ background: "#005BAC", color: "white" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="flex items-center justify-center rounded-lg"
                style={{ width: 38, height: 38, background: "linear-gradient(145deg, #005BAC, #003D80)" }}
              >
                <span style={{ color: "white", fontWeight: 800, fontSize: 17 }}>G</span>
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em" }}>IoT Expert Hub</div>
                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: "0.07em", textTransform: "uppercase" }}>by Giesecke+Devrient</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
              G+D's central destination for IoT expertise, connectivity solutions, and technical resources. Part of the corporate Spotlight section.
            </p>

            {/* Contact */}
            <div className="space-y-2 mb-6">
              <a href="mailto:iot@gi-de.com" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.38)" }}>
                <Mail size={13} /> iot@gi-de.com
              </a>
              <a href="tel:+498921686400" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.38)" }}>
                <Phone size={13} /> +49 89 2168-6400
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.38)" }}>
                <MapPin size={13} /> Munich, Germany
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2.5">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center rounded-lg transition-all"
                  style={{ width: 34, height: 34, background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#005BAC";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <div style={{ color: "rgba(255,255,255,0.65)", fontWeight: 700, fontSize: 12.5, marginBottom: 14, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                {heading}
              </div>
              <div className="space-y-2.5">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-1 text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.38)" }}
                    target={"external" in link && link.external ? "_blank" : undefined}
                    rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                    {"external" in link && link.external && <ExternalLink size={10} style={{ color: "#005BAC" }} />}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-screen-xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div style={{ color: "rgba(255,255,255,0.22)", fontSize: 12 }}>
            © 2026 Giesecke+Devrient GmbH. All rights reserved. IoTgo® is a registered trademark of G+D.
          </div>
          <div className="flex flex-wrap items-center gap-5">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.22)" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
