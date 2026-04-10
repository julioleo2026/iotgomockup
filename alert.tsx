import { useEffect, useState } from "react";
import { IoTHubPage } from "./IoTHubPage";

type Route = "home" | "developers";

function getRouteFromHash(): Route {
  const hash = window.location.hash.toLowerCase();
  return hash === "#for-developers" || hash === "#developers" ? "developers" : "home";
}

export default function App() {
  const [route, setRoute] = useState<Route>(getRouteFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return <IoTHubPage route={route} />;
}
