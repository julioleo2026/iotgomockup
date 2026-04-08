import { useState } from "react";
import { Bot, MessageSquare, Minimize2, Send } from "lucide-react";

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 60 }}>
      {isOpen && (
        <div
          className="mb-4 overflow-hidden"
          style={{
            width: 360,
            background: "#FFFFFF",
            border: "1px solid #D9E2EC",
            borderRadius: 16,
            boxShadow: "0 18px 50px rgba(15, 28, 46, 0.18)",
          }}
        >
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ background: "#005BAC", color: "#FFFFFF" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-xl"
                style={{ width: 36, height: 36, background: "rgba(255,255,255,0.16)" }}
              >
                <Bot size={18} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>IoTgo Assistant</div>
                <div style={{ fontSize: 11, opacity: 0.8 }}>Demo chatbot pop-up</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              <Minimize2 size={14} />
            </button>
          </div>

          <div style={{ padding: 16, background: "#F8FAFC", minHeight: 220 }}>
            <div className="flex gap-2 items-start mb-4">
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{ width: 28, height: 28, background: "#EAF2FC", color: "#005BAC" }}
              >
                <Bot size={13} />
              </div>
              <div
                style={{
                  maxWidth: "82%",
                  background: "#FFFFFF",
                  color: "#0F1C2E",
                  borderRadius: "16px 16px 16px 4px",
                  padding: "10px 14px",
                  fontSize: 13,
                  lineHeight: 1.55,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                Hi, I’m the IoTgo Assistant. This is a visual chatbot placeholder so the pop-up interaction is visible in the mockup.
              </div>
            </div>

            <div className="space-y-2">
              {[
                "Show me developer resources",
                "Which tracker fits logistics?",
                "How can I request API access?",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setMessage(item)}
                  className="w-full text-left px-3 py-2.5 rounded-xl"
                  style={{ background: "#FFFFFF", border: "1px solid #E2EBF5", fontSize: 12.5, color: "#334155" }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 p-3" style={{ background: "#FFFFFF", borderTop: "1px solid #E8EEF6" }}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: "#F8FAFC", border: "1px solid #D5E3F0", color: "#0F1C2E" }}
            />
            <button
              type="button"
              className="flex items-center justify-center rounded-xl flex-shrink-0"
              style={{ width: 40, height: 40, background: "#005BAC", color: "#FFFFFF" }}
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-3 px-4 py-3 rounded-full"
        style={{
          background: "#005BAC",
          color: "#FFFFFF",
          boxShadow: "0 16px 36px rgba(0, 91, 172, 0.28)",
          fontWeight: 700,
          fontSize: 14,
        }}
      >
        <span
          className="flex items-center justify-center rounded-full"
          style={{ width: 34, height: 34, background: "rgba(255,255,255,0.16)" }}
        >
          {isOpen ? <Minimize2 size={16} /> : <MessageSquare size={16} />}
        </span>
        Chat with IoTgo
      </button>
    </div>
  );
}
