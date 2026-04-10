import { ArrowRight, Wifi, Heart, Truck, Zap, ShoppingBag, Shield, MapPin, Factory, Radio, Users } from "lucide-react";

const sectorImg = {
  manufacturing: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMHNtYXJ0JTIwZmFjdG9yeSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzc0OTczNTQyfDA&ixlib=rb-4.1.0&q=80&w=400",
  healthcare: "https://images.unsplash.com/photo-1587230307094-7ea936b24278?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMElvVCUyMGNvbm5lY3RlZCUyMGRldmljZXMlMjBob3NwaXRhbHxlbnwxfHx8fDE3NzQ5NzM1NDJ8MA&ixlib=rb-4.1.0&q=80&w=400",
  logistics: "https://images.unsplash.com/photo-1492168732976-2676c584c675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB0cmFuc3BvcnQlMjBmbGVldCUyMHRyYWNraW5nJTIwdGVsZW1hdGljc3xlbnwxfHx8fDE3NzQ5NzM1NDN8MA&ixlib=rb-4.1.0&q=80&w=400",
  energy: "https://images.unsplash.com/photo-1759536588260-e708d399a2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGVuZXJneSUyMHJlbmV3YWJsZSUyMHNvbGFyJTIwd2luZCUyMHBvd2VyJTIwZ3JpZHxlbnwxfHx8fDE3NzQ5NzM1NDN8MA&ixlib=rb-4.1.0&q=80&w=400",
  retail: "https://images.unsplash.com/photo-1742037770684-ae45bfa4db4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzbWFydCUyMHN0b3JlJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWwlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzQ5NzM1NDR8MA&ixlib=rb-4.1.0&q=80&w=400",
  security: "https://images.unsplash.com/photo-1758514474995-390bfe57c5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHN1cnZlaWxsYW5jZSUyMGNhbWVyYSUyMG1vbml0b3JpbmclMjBzeXN0ZW18ZW58MXx8fHwxNzc0OTczNTQ4fDA&ixlib=rb-4.1.0&q=80&w=400",
  emergency: "https://images.unsplash.com/photo-1764684809029-a42bf234bdda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBzZXJ2aWNlcyUyMHBvbGljZSUyMGZpcmUlMjByZXNjdWUlMjBjb25uZWN0ZWR8ZW58MXx8fHwxNzc0OTczNTQ5fDA&ixlib=rb-4.1.0&q=80&w=400",
};

const sectors = [
  { id: "connectivity", label: "Connectivity Resellers", icon: <Wifi size={17} />, img: sectorImg.manufacturing, desc: "White-label IoT connectivity for resellers and MVNOs looking to scale.", tag: "Partner Program" },
  { id: "consumer", label: "Consumer", icon: <Users size={17} />, img: sectorImg.retail, desc: "Smart home, wearables, and personal connected devices at scale.", tag: "Mass Market" },
  { id: "emergency", label: "Emergency Services", icon: <Radio size={17} />, img: sectorImg.emergency, desc: "Mission-critical connectivity for first responders and public safety.", tag: "Critical Comms" },
  { id: "energy", label: "Energy & Environment", icon: <Zap size={17} />, img: sectorImg.energy, desc: "Smart metering, grid monitoring, and environmental sensing solutions.", tag: "Smart Grid" },
  { id: "healthcare", label: "Healthcare", icon: <Heart size={17} />, img: sectorImg.healthcare, desc: "Remote patient monitoring, medical IoT, and hospital asset tracking.", tag: "MedTech" },
  { id: "industrial", label: "Industrial Manufacturing", icon: <Factory size={17} />, img: sectorImg.manufacturing, desc: "Industry 4.0 connectivity for factory automation and predictive maintenance.", tag: "Industry 4.0" },
  { id: "retail", label: "Retail", icon: <ShoppingBag size={17} />, img: sectorImg.retail, desc: "Inventory management, digital signage, and in-store analytics via IoT.", tag: "Smart Retail" },
  { id: "security", label: "Security", icon: <Shield size={17} />, img: sectorImg.security, desc: "Connected security systems, alarm panels, and surveillance networks.", tag: "Physical Security" },
  { id: "tracking", label: "Tracking & Telematics", icon: <MapPin size={17} />, img: sectorImg.logistics, desc: "Asset tracking, fleet management, and telematics for mobile assets.", tag: "GPS & GNSS" },
  { id: "transport", label: "Transport & Logistics", icon: <Truck size={17} />, img: sectorImg.logistics, desc: "Cold chain monitoring, fleet tracking, and port logistics automation.", tag: "Supply Chain" },
];

export function SectorsSection() {
  return (
    <section id="sectors" style={{ background: "#ffffff", paddingTop: 80, paddingBottom: 80 }}>
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div
              className="inline-block px-3 py-1 rounded-full text-xs mb-4 font-semibold"
              style={{ background: "#EAF2FC", color: "#005BAC", letterSpacing: "0.06em", textTransform: "uppercase" }}
            >
              By Industry
            </div>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: "#0F1C2E", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Explore by Sector
            </h2>
            <p className="mt-2 max-w-lg" style={{ color: "#5A6C80", fontSize: 16, fontWeight: 400 }}>
              Tailored IoT connectivity insights, use cases, and product recommendations for your industry.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all"
            style={{ border: "1.5px solid #005BAC", color: "#005BAC" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#EAF2FC")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            All Sectors <ArrowRight size={14} />
          </a>
        </div>

        {/* Sector grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {sectors.map((sector) => (
            <a
              key={sector.id}
              href="#"
              className="group relative rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ height: 196 }}
            >
              {/* Background image */}
              <img
                src={sector.img}
                alt={sector.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                style={{ filter: "brightness(0.4) saturate(0.65)" }}
              />
              {/* Blue gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(160deg, rgba(0,91,172,0.35) 0%, rgba(0,22,48,0.72) 100%)",
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center justify-center rounded-lg"
                    style={{ width: 32, height: 32, background: "rgba(255,255,255,0.15)", color: "white" }}
                  >
                    {sector.icon}
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded font-medium"
                    style={{ background: "rgba(255,255,255,0.13)", color: "rgba(255,255,255,0.8)" }}
                  >
                    {sector.tag}
                  </span>
                </div>

                <div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: 13, lineHeight: 1.3, marginBottom: 4 }}>
                    {sector.label}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, lineHeight: 1.45 }}>
                    {sector.desc}
                  </div>
                  <div
                    className="flex items-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "#7ECEFF", fontSize: 11, fontWeight: 600 }}
                  >
                    Explore <ArrowRight size={10} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
