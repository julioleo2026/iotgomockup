import { useEffect, useMemo, useRef, useState } from "react";

type CoverageRow = [string, number, string];
type ViewMode = "global" | "europe";

const NETWORK_OPTIONS = ["2G", "3G", "4G", "LTE-M"] as const;

const COUNTRY_NAME_OVERRIDES: Record<string, string> = {
  "Alands Islands": "Aland Islands",
  "Bosnia and Herzegovenia": "Bosnia and Herzegovina",
  "Congo (Brazzaville)": "Republic of the Congo",
  "Congo (Democratic Republic)": "Democratic Republic of the Congo",
  "French Guyana": "French Guiana",
  "Guinea Bissau": "Guinea-Bissau",
  "Ivory Coast": "Cote d'Ivoire",
  "Macedonia": "North Macedonia",
  "Reunion": "Réunion",
  "Russia": "Russian Federation",
};

const GLOBAL_COVERAGE_DATA: CoverageRow[] = [
  ["Afghanistan", 1, "2G, 3G, 4G"],
  ["Alands Islands", 1, "2G, 3G, 4G"],
  ["Albania", 1, "2G, 3G, 4G"],
  ["Algeria", 1, "2G, 3G, 4G"],
  ["Argentina", 1, "2G, 3G, 4G"],
  ["Aruba", 1, "4G"],
  ["Australia", 1, "3G, LTE-M"],
  ["Austria", 1, "3G"],
  ["Azerbaijan", 1, "3G"],
  ["Bahrain", 1, "2G, LTE-M"],
  ["Bangladesh", 1, "2G, 3G, 4G, LTE-M"],
  ["Belarus", 1, "2G, 3G, 4G"],
  ["Belgium", 1, "3G"],
  ["Benin", 1, "2G, 3G, 4G"],
  ["Bermuda", 1, "3G"],
  ["Bolivia", 1, "3G"],
  ["Bosnia and Herzegovenia", 1, "2G, 3G, 4G"],
  ["Botswana", 1, "2G, 3G"],
  ["Brazil", 1, "2G, 3G, 4G"],
  ["Bulgaria", 1, "3G, 4G, LTE-M"],
  ["Burkina Faso", 1, "2G, 4G, LTE-M"],
  ["Cameroon", 1, "2G, 3G, 4G"],
  ["Canada", 1, "2G, 3G, 4G, LTE-M"],
  ["Chad", 1, "2G, 3G, 4G"],
  ["Chile", 1, "2G, 4G"],
  ["China", 1, "2G, 4G"],
  ["Colombia", 1, "2G, 3G, 4G"],
  ["Congo (Brazzaville)", 1, "2G, 3G, 4G"],
  ["Congo (Democratic Republic)", 1, "3G"],
  ["Costa Rica", 1, "3G"],
  ["Croatia", 1, "3G"],
  ["Cyprus", 1, "2G, 3G, 4G"],
  ["Czech Republic", 1, "2G, 3G, 4G"],
  ["Denmark", 1, "3G"],
  ["Dominican Republic", 1, "2G, 3G, 4G"],
  ["Ecuador", 1, "2G, 3G, 4G"],
  ["Egypt", 1, "2G, 3G, 4G"],
  ["El Salvador", 1, "2G, 3G, 4G, LTE-M"],
  ["Estonia", 1, "2G, 3G, 4G"],
  ["Eswatini", 1, "2G, 3G, 4G"],
  ["Finland", 1, "2G, 3G, 4G, LTE-M"],
  ["France", 1, "2G, 3G, 4G"],
  ["French Guyana", 1, "2G, 3G, 4G"],
  ["Gabon", 1, "2G, 3G, 4G"],
  ["Georgia", 1, "2G, 3G, 4G"],
  ["Germany", 1, "3G"],
  ["Ghana", 1, "2G, 3G, 4G"],
  ["Gibraltar", 1, "2G, 4G"],
  ["Greece", 1, "2G, 4G, LTE-M"],
  ["Greenland", 1, "4G"],
  ["Guadeloupe", 1, "2G, 3G"],
  ["Guam", 1, "2G, 3G, 4G"],
  ["Guatemala", 1, "3G"],
  ["Guinea", 1, "2G, 3G, 4G, LTE-M"],
  ["Guinea Bissau", 1, "3G"],
  ["Honduras", 1, "3G, 4G, LTE-M"],
  ["Hong Kong", 1, "2G, 3G, 4G, LTE-M"],
  ["Hungary", 1, "3G, 4G"],
  ["Iceland", 1, "2G, 3G, 4G"],
  ["India", 1, "2G, 3G, 4G, LTE-M"],
  ["Indonesia", 1, "3G, 4G"],
  ["Iraq", 1, "2G, 3G, 4G, LTE-M"],
  ["Ireland", 1, "2G, 3G, 4G"],
  ["Isle of Man", 1, "2G, 3G, 4G"],
  ["Israel", 1, "2G, 4G"],
  ["Italy", 1, "2G, 3G, 4G, LTE-M"],
  ["Ivory Coast", 1, "3G, 4G"],
  ["Jamaica", 1, "2G, 3G, 4G"],
  ["Japan", 1, "2G, 3G, 4G"],
  ["Jersey", 1, "2G, 3G, 4G"],
  ["Jordan", 1, "2G, 3G, 4G"],
  ["Kazakhstan", 1, "2G, 3G"],
  ["Kenya", 1, "2G, 3G"],
  ["Kuwait", 1, "2G, 3G, 4G, LTE-M"],
  ["Kyrgyzstan", 1, "3G"],
  ["Laos", 1, "2G, 3G, 4G"],
  ["Latvia", 1, "2G, 4G, LTE-M"],
  ["Liechtenstein", 1, "3G"],
  ["Lithuania", 1, "2G, 3G, 4G"],
  ["Luxembourg", 1, "2G, 3G, 4G"],
  ["Macau", 1, "2G, 3G, 4G"],
  ["Macedonia", 1, "4G"],
  ["Madagascar", 1, "4G"],
  ["Malawi", 1, "4G"],
  ["Malaysia", 1, "4G"],
  ["Mali", 1, "4G"],
  ["Malta", 1, "4G"],
  ["Mauritius", 1, "4G"],
  ["Mayotte", 1, "4G"],
  ["Mexico", 1, "2G, 3G, 4G"],
  ["Moldova", 1, "3G"],
  ["Mongolia", 1, "4G"],
  ["Montenegro", 1, "4G"],
  ["Morocco", 1, "3G, 4G"],
  ["Mozambique", 1, "2G, 3G, 4G, LTE-M"],
  ["Myanmar", 1, "2G, 3G, 4G"],
  ["Namibia", 1, "3G, 4G"],
  ["Netherlands", 1, "3G"],
  ["New Zealand", 1, "2G, 3G"],
  ["Nicaragua", 1, "3G"],
  ["Niger", 1, "3G, 4G"],
  ["Nigeria", 1, "2G, 3G, 4G"],
  ["Norway", 1, "2G, 3G, 4G, LTE-M"],
  ["Oman", 1, "2G, 3G, 4G"],
  ["Pakistan", 1, "2G, 3G, 4G"],
  ["Panama", 1, "2G, 4G, LTE-M"],
  ["Paraguay", 1, "2G, 3G, 4G"],
  ["Peru", 1, "3G"],
  ["Philippines", 1, "2G, 3G, 4G"],
  ["Poland", 1, "2G, 3G, 4G"],
  ["Portugal", 1, "2G, 3G, 4G, LTE-M"],
  ["Puerto Rico", 1, "2G, 3G, 4G"],
  ["Qatar", 1, "2G, 3G, 4G, LTE-M"],
  ["Reunion", 1, "2G, 3G, 4G"],
  ["Romania", 1, "2G, 3G"],
  ["Russia", 1, "3G"],
  ["Rwanda", 1, "2G, 3G, 4G"],
  ["Saint Kitts and Nevis", 1, "2G, 3G, 4G"],
  ["Saint Lucia", 1, "3G"],
  ["Saint Vincent and the Grenadines", 1, "3G, 4G"],
  ["Samoa", 1, "2G, 4G"],
  ["Saudi Arabia", 1, "2G, 3G, 4G"],
  ["Senegal", 1, "2G, 3G, 4G"],
  ["Serbia", 1, "2G, 3G"],
  ["Sierra Leone", 1, "2G, 3G"],
  ["Singapore", 1, ""],
  ["Slovakia", 1, "2G, 3G, 4G"],
  ["Slovenia", 1, "2G, 3G, 4G"],
  ["South Africa", 1, "2G, 3G, 4G"],
  ["South Korea", 1, "2G, 3G, 4G"],
  ["South Sudan", 1, "3G, 4G"],
  ["Spain", 1, "3G, 4G, LTE-M"],
  ["Sri Lanka", 1, "2G, 3G, 4G"],
  ["Sudan", 1, "2G, 3G"],
  ["Sweden", 1, "2G, 3G, 4G"],
  ["Switzerland", 1, "2G, 3G, 4G"],
  ["Taiwan", 1, "3G, 4G"],
  ["Tanzania", 1, "2G, 3G, 4G"],
  ["Thailand", 1, "2G, 3G, 4G"],
  ["Tonga", 1, "3G"],
  ["Trinidad and Tobago", 1, "2G, 3G"],
  ["Tunisia", 1, "3G"],
  ["Turkey", 1, "2G, 3G, 4G, LTE-M"],
  ["Uganda", 1, "3G"],
  ["United Kingdom", 1, "2G, 3G, 4G"],
  ["Ukraine", 1, "2G, 3G, 4G"],
  ["Uruguay", 1, "2G, 3G, 4G"],
  ["United States", 1, "2G, 3G, 4G"],
  ["Uzbekistan", 1, "3G"],
  ["Venezuela", 1, "3G"],
  ["Vietnam", 1, "3G"],
  ["Zambia", 1, "2G, 3G, 4G"],
  ["Zimbabwe", 1, "2G, 3G, 4G"],
];

const EUROPE_COVERAGE_DATA: CoverageRow[] = [
  ["Austria", 1, "3G"],
  ["Belgium", 1, "3G"],
  ["Bulgaria", 1, "3G, 4G, LTE-M"],
  ["Croatia", 1, "3G"],
  ["Cyprus", 1, "2G, 3G, 4G"],
  ["Czech Republic", 1, "2G, 3G, 4G"],
  ["Denmark", 1, "3G"],
  ["Estonia", 1, "2G, 3G, 4G"],
  ["Finland", 1, "2G, 3G, 4G, LTE-M"],
  ["France", 1, "2G, 3G, 4G"],
  ["French Guyana", 1, "2G, 3G, 4G"],
  ["Germany", 1, "3G"],
  ["Greece", 1, "2G, 4G, LTE-M"],
  ["Guadeloupe", 1, "2G, 3G"],
  ["Hungary", 1, "3G, 4G"],
  ["Iceland", 1, "2G, 3G, 4G"],
  ["Ireland", 1, "2G, 3G, 4G"],
  ["Italy", 1, "2G, 3G, 4G"],
  ["Latvia", 1, "2G, 4G"],
  ["Liechtenstein", 1, "3G"],
  ["Lithuania", 1, "2G, 3G, 4G"],
  ["Luxembourg", 1, "2G, 3G, 4G"],
  ["Malta", 1, "4G"],
  ["Mayotte", 1, "4G"],
  ["Netherlands", 1, "3G"],
  ["Norway", 1, "2G, 3G, 4G, LTE-M"],
  ["Poland", 1, "2G, 3G, 4G"],
  ["Portugal", 1, "2G, 3G, 4G, LTE-M"],
  ["Reunion", 1, "2G, 3G, 4G"],
  ["Romania", 1, "2G, 3G"],
  ["Slovakia", 1, "2G, 3G, 4G"],
  ["Slovenia", 1, "2G, 3G, 4G"],
  ["Spain", 1, "3G, 4G, LTE-M"],
  ["Sweden", 1, "2G, 3G, 4G"],
  ["Switzerland", 1, "2G, 3G, 4G"],
  ["United Kingdom", 1, "2G, 3G, 4G"],
];

function normalizeCountryName(country: string) {
  return COUNTRY_NAME_OVERRIDES[country] ?? country;
}

function parseNetworks(networks: string) {
  return networks
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function buildTooltip(country: string, networks: string) {
  return `
    <div style="padding: 12px 14px; min-width: 180px; font-family: Arial, sans-serif;">
      <div style="font-size: 14px; font-weight: 700; color: #0F1C2E; margin-bottom: 6px;">${country}</div>
      <div style="font-size: 12px; color: #5A6C80; line-height: 1.4;">
        Coverage: ${networks || "Available"}
      </div>
    </div>
  `;
}

export function CoverageMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("global");
  const [selectedNetworks, setSelectedNetworks] = useState<string[]>([...NETWORK_OPTIONS]);
  const [isGoogleReady, setIsGoogleReady] = useState(false);

  const baseRows = useMemo(
    () => (viewMode === "global" ? GLOBAL_COVERAGE_DATA : EUROPE_COVERAGE_DATA),
    [viewMode],
  );

  const filteredRows = useMemo(() => {
    if (selectedNetworks.length === NETWORK_OPTIONS.length) {
      return baseRows;
    }

    if (selectedNetworks.length === 0) {
      return [];
    }

    return baseRows.filter((row) => {
      const networks = parseNetworks(row[2]);
      return networks.some((network) => selectedNetworks.includes(network));
    });
  }, [baseRows, selectedNetworks]);

  useEffect(() => {
    const win = window as Window & {
      google?: {
        charts?: {
          load: (version: string, config: { packages: string[] }) => void;
          setOnLoadCallback: (callback: () => void) => void;
        };
      };
    };

    const initializeGoogleCharts = () => {
      if (!win.google?.charts) {
        return;
      }

      win.google.charts.load("current", { packages: ["geochart"] });
      win.google.charts.setOnLoadCallback(() => setIsGoogleReady(true));
    };

    if (win.google?.charts) {
      initializeGoogleCharts();
      return;
    }

    const existingScript = document.getElementById("google-charts-loader") as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", initializeGoogleCharts, { once: true });
      return () => existingScript.removeEventListener("load", initializeGoogleCharts);
    }

    const script = document.createElement("script");
    script.id = "google-charts-loader";
    script.src = "https://www.gstatic.com/charts/loader.js";
    script.async = true;
    script.onload = initializeGoogleCharts;
    document.head.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  useEffect(() => {
    if (!isGoogleReady || !mapRef.current) {
      return;
    }

    const win = window as Window & {
      google?: {
        visualization?: {
          arrayToDataTable: (rows: unknown[]) => unknown;
          GeoChart: new (element: Element) => { draw: (data: unknown, options: Record<string, unknown>) => void };
        };
      };
    };

    if (!win.google?.visualization) {
      return;
    }

    if (filteredRows.length === 0) {
      mapRef.current.innerHTML = "";
      return;
    }

    const rowsForChart = filteredRows.map(([country, value, networks]) => [
      normalizeCountryName(country),
      value,
      buildTooltip(country, networks),
    ]);

    const data = win.google.visualization.arrayToDataTable([
      ["Country", "Coverage", { type: "string", role: "tooltip", p: { html: true } }],
      ...rowsForChart,
    ]);

    const options = {
      backgroundColor: "transparent",
      datalessRegionColor: "#E5E7EB",
      defaultColor: "#E5E7EB",
      displayMode: "regions",
      enableRegionInteractivity: true,
      keepAspectRatio: true,
      legend: "none",
      magnifyingGlass: {
        enable: true,
        zoomFactor: 5,
      },
      region: viewMode === "europe" ? "150" : "world",
      resolution: "countries",
      tooltip: {
        isHtml: true,
      },
      colorAxis: {
        minValue: 0,
        maxValue: 1,
        colors: ["#0A0A7A", "#0A0A7A"],
      },
    };

    const chart = new win.google.visualization.GeoChart(mapRef.current);

    const drawChart = () => {
      chart.draw(data, options);
    };

    drawChart();
    window.addEventListener("resize", drawChart);

    return () => {
      window.removeEventListener("resize", drawChart);
    };
  }, [filteredRows, isGoogleReady, viewMode]);

  const toggleNetwork = (network: string) => {
    setSelectedNetworks((current) =>
      current.includes(network)
        ? current.filter((item) => item !== network)
        : [...current, network],
    );
  };

  return (
    <div
      className="rounded-[28px] overflow-hidden mb-10"
      style={{ background: "#FFFFFF", border: "1px solid #E2EBF5", boxShadow: "0 8px 30px rgba(15,28,46,0.05)" }}
    >
      <div className="grid lg:grid-cols-[230px_minmax(0,1fr)]">
        <div className="p-6 lg:p-7" style={{ background: "#F7FAFD", borderRight: "1px solid #E2EBF5" }}>
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ background: "#EAF2FC", color: "#005BAC", letterSpacing: "0.06em", textTransform: "uppercase" }}
          >
            Interactive Coverage Map
          </div>

          <div className="mt-0">
            <div style={{ fontWeight: 700, color: "#0F1C2E", fontSize: 13, marginBottom: 10 }}>Show</div>
            <div className="space-y-3">
              {NETWORK_OPTIONS.map((network) => {
                const isActive = selectedNetworks.includes(network);

                return (
                  <button
                    key={network}
                    type="button"
                    onClick={() => toggleNetwork(network)}
                    className="w-full flex items-center gap-3 rounded-xl px-3 py-2 text-left transition-all"
                    style={{
                      background: isActive ? "#EAF2FC" : "#FFFFFF",
                      border: `1px solid ${isActive ? "#B9D6F4" : "#D5E3F0"}`,
                    }}
                  >
                    <span
                      className="flex items-center justify-center rounded-md"
                      style={{
                        width: 18,
                        height: 18,
                        background: isActive ? "#2563EB" : "#FFFFFF",
                        border: `1px solid ${isActive ? "#2563EB" : "#94A3B8"}`,
                        color: "#FFFFFF",
                        fontSize: 12,
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                    >
                      {isActive ? "✓" : ""}
                    </span>
                    <span style={{ color: "#0F1C2E", fontSize: 14, fontWeight: 600 }}>{network}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6">
            <div style={{ fontWeight: 700, color: "#0F1C2E", fontSize: 13, marginBottom: 10 }}>View</div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setViewMode("global")}
                className="rounded-xl px-3 py-2 transition-all"
                style={{
                  background: viewMode === "global" ? "#005BAC" : "#FFFFFF",
                  color: viewMode === "global" ? "#FFFFFF" : "#0F1C2E",
                  border: `1px solid ${viewMode === "global" ? "#005BAC" : "#D5E3F0"}`,
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Global
              </button>
              <button
                type="button"
                onClick={() => setViewMode("europe")}
                className="rounded-xl px-3 py-2 transition-all"
                style={{
                  background: viewMode === "europe" ? "#005BAC" : "#FFFFFF",
                  color: viewMode === "europe" ? "#FFFFFF" : "#0F1C2E",
                  border: `1px solid ${viewMode === "europe" ? "#005BAC" : "#D5E3F0"}`,
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Europe
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-2xl px-4 py-3" style={{ background: "#FFFFFF", border: "1px solid #D5E3F0" }}>
            <div style={{ fontSize: 12, color: "#5A6C80", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Visible coverage
            </div>
            <div style={{ fontWeight: 800, fontSize: 26, color: "#0F1C2E", lineHeight: 1.1, marginTop: 6 }}>
              {filteredRows.length}
            </div>
            <div style={{ color: "#5A6C80", fontSize: 12, marginTop: 4 }}>
              of {baseRows.length} covered countries and territories
            </div>
          </div>
        </div>

        <div className="p-3 md:p-4 lg:p-5">
          <div
            className="rounded-[24px] overflow-hidden relative"
            style={{ background: "#F3F4F6", border: "1px solid #E2EBF5", minHeight: 520 }}
          >
            {!isGoogleReady && (
              <div className="absolute inset-0 flex items-center justify-center px-6 text-center" style={{ color: "#5A6C80", fontSize: 14 }}>
                Loading coverage map...
              </div>
            )}

            {isGoogleReady && filteredRows.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center px-6 text-center" style={{ color: "#5A6C80", fontSize: 14 }}>
                Select at least one network technology to display coverage.
              </div>
            )}

            <div ref={mapRef} className="w-full h-[520px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
