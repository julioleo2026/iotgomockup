import { ExternalLink, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  "IoTgo® Hub": [
    { label: "About IoTgo® Expert Hub", href: "#" },
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
    { label: "Blog", href: "#resources" },
    { label: "Webinars", href: "#resources" },
    { label: "White Papers", href: "#resources" },
    { label: "Case Studies", href: "#resources" },
    { label: "For developers", href: "#for-developers" },
  ],
  Product: [
    { label: "Asset Trackers", href: "#products" },
    { label: "IoT Connectivity", href: "#products" },
    { label: "IoTgo® Platform", href: "#products" },
    { label: "eSIM Solutions", href: "#products" },
    { label: "IoT Shop", href: "https://iotshop.gi-de.com", external: true },
  ],
};

const legalLinks = ["Privacy Policy", "Cookie Settings", "Legal Notice", "Terms of Use", "Accessibility"];

export function Footer() {
  return (
    <footer style={{ background: "#0F172A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex items-center justify-center rounded-md" style={{ width: 38, height: 38, background: "#005BAC" }}>
                <span style={{ color: "white", fontWeight: 800, fontSize: 17 }}>G</span>
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em" }}>IoTgo® Expert Hub</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 11 }}>Spotlight</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
              A Spotlight-style destination for IoTgo® products, trust-building proof points and expert resources.
            </p>

            <div className="space-y-2 mb-6">
              <a href="mailto:iot@gi-de.com" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.58)" }}>
                <Mail size={13} /> iot@gi-de.com
              </a>
              <a href="tel:+498921686400" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.58)" }}>
                <Phone size={13} /> +49 89 2168-6400
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.58)" }}>
                <MapPin size={13} /> Munich, Germany
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              {[Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center rounded-lg transition-all"
                  style={{ width: 34, height: 34, background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#005BAC";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <div style={{ color: "rgba(255,255,255,0.72)", fontWeight: 700, fontSize: 12.5, marginBottom: 14, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                {heading}
              </div>
              <div className="space-y-2.5">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-1 text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.58)" }}
                    target={"external" in link && link.external ? "_blank" : undefined}
                    rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                    {"external" in link && link.external && <ExternalLink size={10} style={{ color: "#60A5FA" }} />}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-screen-xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div style={{ color: "rgba(255,255,255,0.34)", fontSize: 12 }}>
            © 2026 Giesecke+Devrient GmbH. All rights reserved. IoTgo® is a registered trademark of G+D.
          </div>
          <div className="flex flex-wrap items-center gap-5">
            {legalLinks.map((link) => (
              <a key={link} href="#" className="text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.34)" }}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
