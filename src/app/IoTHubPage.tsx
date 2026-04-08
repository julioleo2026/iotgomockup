import { Header } from "./components/iot-hub/Header";
import { HeroSection } from "./components/iot-hub/HeroSection";
import { ValueProposition } from "./components/iot-hub/ValueProposition";
import { SectorsSection } from "./components/iot-hub/SectorsSection";
import { ResourcesSection } from "./components/iot-hub/ResourcesSection";
import { ProductsSection } from "./components/iot-hub/ProductsSection";
import { DeveloperSection } from "./components/iot-hub/DeveloperSection";
import { ChatbotSection } from "./components/iot-hub/ChatbotSection";
import { TrustSection } from "./components/iot-hub/TrustSection";
import { Footer } from "./components/iot-hub/Footer";

export function IoTHubPage() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", minWidth: 1280 }}>
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <SectorsSection />
        <ResourcesSection />
        <ProductsSection />
        <DeveloperSection />
        <ChatbotSection />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}
