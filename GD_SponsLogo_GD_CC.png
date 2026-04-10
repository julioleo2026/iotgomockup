import { Header } from "./components/iot-hub/Header";
import { HeroSection } from "./components/iot-hub/HeroSection";
import { ResourcesSection } from "./components/iot-hub/ResourcesSection";
import { ProductsSection } from "./components/iot-hub/ProductsSection";
import { DeveloperSection } from "./components/iot-hub/DeveloperSection";
import { TrustSection } from "./components/iot-hub/TrustSection";
import { Footer } from "./components/iot-hub/Footer";
import { FloatingChatbot } from "./components/iot-hub/FloatingChatbot";

type Route = "home" | "developers";

export function IoTHubPage({ route }: { route: Route }) {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", minWidth: 1280, background: "#FFFFFF" }}>
      <Header currentRoute={route} />
      <main>
        {route === "home" ? (
          <>
            <HeroSection />
            <TrustSection />
            <ProductsSection />
            <ResourcesSection />
          </>
        ) : (
          <DeveloperSection />
        )}
      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
}
