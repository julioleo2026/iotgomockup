import { useState } from "react";
import { MessageSquare, Send, Bot, X, Minimize2, Sparkles, ArrowRight } from "lucide-react";

const suggestedQuestions = [
  "Which tracker is best for cold chain logistics?",
  "What's the difference between eSIM and Multi-IMSI SIM?",
  "How do I integrate the IoTgo® API with AWS IoT Core?",
  "Which connectivity plan supports NB-IoT in Europe?",
];

const mockMessages = [
  {
    role: "bot",
    text: "Hi! I'm the IoT Expert Hub assistant. I can help you find the right connectivity solutions, navigate our product range, or point you to technical resources. What are you working on today?",
  },
  {
    role: "user",
    text: "I'm looking for a solar tracker for fleet management.",
  },
  {
    role: "bot",
    text: "Great choice! For fleet management with solar power, I recommend the IoTgo® Track-Solar gte. It features GNSS, LTE-M/NB-IoT connectivity, IP67 weatherproofing, and a built-in eSIM with global coverage across 190+ countries. Would you like a spec sheet or pricing information?",
  },
];

export function ChatbotSection() {
  const [inputValue, setInputValue] = useState("");

  return (
    <section id="chatbot" style={{ background: "#F0F5FA", paddingTop: 80, paddingBottom: 80 }}>
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Description */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-5 font-semibold"
              style={{ background: "#EAF2FC", color: "#005BAC" }}
            >
              <Sparkles size={12} /> AI-Powered Assistant
            </div>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: "#0F1C2E", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Ask Our IoT Expert
            </h2>
            <p className="mt-4" style={{ color: "#4A5568", fontSize: 17, lineHeight: 1.65, fontWeight: 400 }}>
              Not sure which product or connectivity plan is right for you? Our AI-powered assistant is trained on G+D's full IoT product catalogue, technical documentation, and sector expertise.
            </p>

            <div className="space-y-2.5 mt-8">
              <p style={{ color: "#374151", fontWeight: 600, fontSize: 14 }}>Try asking:</p>
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  className="w-full text-left flex items-center gap-3 p-3.5 rounded-xl transition-all"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #E2EBF5",
                    color: "#374151",
                    fontSize: 13.5,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                  onClick={() => setInputValue(q)}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#005BAC")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E2EBF5")}
                >
                  <MessageSquare size={14} style={{ color: "#005BAC", flexShrink: 0 }} />
                  <span className="flex-1">{q}</span>
                  <ArrowRight size={12} style={{ color: "#9CA3AF", flexShrink: 0 }} />
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["#005BAC", "#0A8A62", "#6C3FC5"].map((c) => (
                  <div
                    key={c}
                    className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-white"
                    style={{ background: c }}
                  >
                    <Bot size={13} style={{ color: "white" }} />
                  </div>
                ))}
              </div>
              <p style={{ color: "#5A6C80", fontSize: 13 }}>
                Backed by G+D's IoT specialists · Available 24/7
              </p>
            </div>
          </div>

          {/* Right: Chat widget */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="w-full rounded-2xl overflow-hidden"
              style={{
                maxWidth: 420,
                boxShadow: "0 16px 48px rgba(0,91,172,0.14)",
                border: "1px solid #D5E3F0",
              }}
            >
              {/* Chat header */}
              <div
                className="flex items-center justify-between px-4 py-3.5"
                style={{ background: "linear-gradient(135deg, #002A5A, #004A96)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-xl"
                    style={{ width: 36, height: 36, background: "rgba(255,255,255,0.15)" }}
                  >
                    <Bot size={18} style={{ color: "#7ECEFF" }} />
                  </div>
                  <div>
                    <div style={{ color: "white", fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em" }}>IoT Expert Assistant</div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22C55E" }} />
                      <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 11 }}>Online · Powered by G+D AI</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button className="p-1.5 rounded-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
                    <Minimize2 size={14} />
                  </button>
                  <button className="p-1.5 rounded-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div
                className="flex flex-col gap-3 p-4"
                style={{ background: "#F7FAFE", minHeight: 320, maxHeight: 380, overflowY: "auto" }}
              >
                {mockMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}
                  >
                    {msg.role === "bot" && (
                      <div
                        className="flex items-center justify-center rounded-full flex-shrink-0 mt-1"
                        style={{ width: 28, height: 28, background: "#EAF2FC" }}
                      >
                        <Bot size={13} style={{ color: "#005BAC" }} />
                      </div>
                    )}
                    <div
                      className="rounded-2xl px-4 py-2.5"
                      style={{
                        maxWidth: "80%",
                        background: msg.role === "user" ? "#005BAC" : "#ffffff",
                        color: msg.role === "user" ? "white" : "#0F1C2E",
                        fontSize: 13,
                        lineHeight: 1.55,
                        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                        borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                <div className="flex items-center gap-2">
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{ width: 28, height: 28, background: "#EAF2FC" }}
                  >
                    <Bot size={13} style={{ color: "#005BAC" }} />
                  </div>
                  <div
                    className="flex items-center gap-1 px-4 py-2.5 rounded-2xl"
                    style={{ background: "#ffffff", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                  >
                    {[0, 0.15, 0.3].map((delay, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full animate-bounce"
                        style={{ background: "#9CA3AF", animationDelay: `${delay}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Input */}
              <div
                className="flex items-center gap-2 p-3"
                style={{ background: "#ffffff", borderTop: "1px solid #E8EEF6" }}
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about IoT connectivity, products..."
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{
                    background: "#F0F5FA",
                    border: "1px solid #D5E3F0",
                    color: "#0F1C2E",
                  }}
                />
                <button
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ width: 40, height: 40, background: "#005BAC" }}
                >
                  <Send size={15} style={{ color: "white" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
