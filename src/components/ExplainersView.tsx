import React, { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, ArrowUpRight } from "lucide-react";
import ShinyHunters2026 from "./explainers/ShinyHunters2026";
import WhatDataProtectionAuthorityDoes from "./explainers/WhatDataProtectionAuthorityDoes";
import SpotFakeBreachNotice from "./explainers/SpotFakeBreachNotice";

const S = {
  sans: "'Arial Narrow', Arial, sans-serif" as const,
  serif: "Georgia, 'Times New Roman', serif" as const,
  coral: "#D6A24C",
  gray: "#A8A8A0",
  line: "#2E2E2C",
  bg: "#141414",
  bg2: "#1B1B1B",
  white: "#F5F5F0",
};

export default function ExplainersView() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  React.useEffect(() => {
    const syncArticleFromUrl = () => {
      const parts = window.location.pathname.split("/").filter(Boolean);
      if (parts[0] === "explainers" && parts[1]) {
        setSelectedArticle(parts[1]);
      } else {
        setSelectedArticle(null);
      }
    };

    syncArticleFromUrl();
    window.addEventListener("popstate", syncArticleFromUrl);
    return () => window.removeEventListener("popstate", syncArticleFromUrl);
  }, []);

  const renderMiniCover = (id: string) => {
    if (id === "spot-fake-breach-notice") {
      return (
        <div style={{
          height: "120px",
          position: "relative",
          overflow: "hidden",
          borderBottom: `1px solid ${S.line}`,
          background: `radial-gradient(ellipse 200px 100px at 50% 50%, rgba(224,74,63,0.12), transparent 70%), linear-gradient(180deg, #0e0a0a 0%, #050505 100%)`
        }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.25 }} viewBox="0 0 100 50">
            <rect x="30" y="15" width="40" height="24" rx="2" fill="none" stroke="#e04a3f" strokeWidth="1" />
            <path d="M 30,15 L 50,30 L 70,15" fill="none" stroke="#e04a3f" strokeWidth="1" />
            <circle cx="50" cy="27" r="5" fill="#000" stroke="#e04a3f" strokeWidth="1" />
            <line x1="50" y1="24.5" x2="50" y2="27.5" stroke="#e04a3f" strokeWidth="1" strokeLinecap="round" />
            <circle cx="50" cy="29.5" r="0.5" fill="#e04a3f" />
          </svg>
          <div style={{ width: "100%", height: "2px", background: "#e04a3f", position: "absolute", top: 0, left: 0 }} />
          <div style={{ position: "absolute", bottom: "8px", left: "12px", fontFamily: S.sans, fontSize: "9px", color: "#e04a3f", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
            EXPLAINER #03
          </div>
        </div>
      );
    }

    if (id === "what-a-data-protection-authority-does") {
      return (
        <div style={{
          height: "120px",
          position: "relative",
          overflow: "hidden",
          borderBottom: `1px solid ${S.line}`,
          background: `radial-gradient(ellipse 200px 100px at 50% 50%, rgba(214,162,76,0.12), transparent 70%), linear-gradient(180deg, #0e0e0c 0%, #050505 100%)`
        }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.25 }} viewBox="0 0 100 50">
            <circle cx="20" cy="25" r="1.5" fill={S.coral} />
            <circle cx="50" cy="25" r="3" fill="#e04a3f" />
            <circle cx="80" cy="25" r="1.5" fill={S.coral} />
            <line x1="21.5" y1="25" x2="47" y2="25" stroke={S.coral} strokeWidth="0.5" strokeDasharray="1,1" />
            <line x1="53" y1="25" x2="78.5" y2="25" stroke={S.coral} strokeWidth="0.5" strokeDasharray="1,1" />
            <circle cx="50" cy="25" r="5" fill="none" stroke="#e04a3f" strokeWidth="0.5" opacity="0.6">
              <animate attributeName="r" values="3;7;3" dur="3s" repeatCount="indefinite" />
            </circle>
          </svg>
          <div style={{ width: "100%", height: "2px", background: S.coral, position: "absolute", top: 0, left: 0 }} />
          <div style={{ position: "absolute", bottom: "8px", left: "12px", fontFamily: S.sans, fontSize: "9px", color: S.coral, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
            EXPLAINER #02
          </div>
        </div>
      );
    }

    if (id === "shinyhunters-2026") {
      return (
        <div style={{
          height: "120px",
          position: "relative",
          overflow: "hidden",
          borderBottom: `1px solid ${S.line}`,
          background: `radial-gradient(ellipse 200px 100px at 75% 40%, rgba(90,120,160,0.2), transparent 70%), linear-gradient(180deg, #0a0d12 0%, #05070a 100%)`
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "flex-end",
            gap: "6px",
            paddingRight: "10px",
            opacity: 0.7
          }}>
            {[...Array(4)].map((_, rIdx) => (
              <div key={rIdx} style={{
                width: "12px",
                height: "100%",
                background: "linear-gradient(180deg, #14181f 0%, #0c0f14 100%)",
                borderLeft: "1px solid rgba(255,255,255,0.03)",
                borderRight: "1px solid rgba(0,0,0,0.3)",
                display: "flex",
                flexDirection: "column",
                padding: "8px 2px",
                gap: "2px"
              }}>
                {[...Array(8)].map((_, uIdx) => (
                  <div key={uIdx} style={{
                    height: "2px",
                    background: "rgba(60,68,78,0.6)",
                    borderRadius: "1px",
                    position: "relative"
                  }}>
                    {(rIdx + uIdx) % 3 === 0 && (
                      <span style={{
                        position: "absolute", right: "1px", top: "50%", transform: "translateY(-50%)",
                        width: "1px", height: "1px", borderRadius: "50%",
                        background: (rIdx + uIdx) % 6 === 0 ? "#c9a15c" : "#4a9d6e",
                        boxShadow: "0 0 2px currentColor"
                      }} />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ width: "100%", height: "2px", background: "#c9a15c", position: "absolute", top: 0, left: 0 }} />
          <div style={{ position: "absolute", bottom: "8px", left: "12px", fontFamily: S.sans, fontSize: "9px", color: S.coral, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
            EXPLAINER #01
          </div>
        </div>
      );
    }

    if (id === "kanonymity-guide") {
      return (
        <div style={{
          height: "120px",
          position: "relative",
          overflow: "hidden",
          borderBottom: `1px solid ${S.line}`,
          background: `radial-gradient(ellipse 200px 100px at 25% 40%, rgba(214,162,76,0.15), transparent 70%), linear-gradient(180deg, #0f0e0c 0%, #060605 100%)`
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.25,
            fontFamily: "monospace",
            fontSize: "11px",
            color: S.coral,
            lineHeight: 1.2,
            userSelect: "none"
          }}>
            <div style={{ textAlign: "center" }}>
              SHA-256 PREFIX MATCH<br />
              [*****] -&gt; ANONYMIZED<br />
              k = 50 (k-ANONYMITY)
            </div>
          </div>
          <div style={{ width: "100%", height: "2px", background: S.gray, position: "absolute", top: 0, left: 0 }} />
          <div style={{ position: "absolute", bottom: "8px", left: "12px", fontFamily: S.sans, fontSize: "9px", color: S.gray, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
            TECH BRIEFING #04
          </div>
        </div>
      );
    }

    if (id === "aleph-guide") {
      return (
        <div style={{
          height: "120px",
          position: "relative",
          overflow: "hidden",
          borderBottom: `1px solid ${S.line}`,
          background: `radial-gradient(ellipse 200px 100px at 50% 50%, rgba(150,150,150,0.12), transparent 70%), linear-gradient(180deg, #0e0f11 0%, #060708 100%)`
        }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.2 }} viewBox="0 0 100 50">
            <line x1="20" y1="10" x2="50" y2="25" stroke={S.coral} strokeWidth="0.5" />
            <line x1="80" y1="15" x2="50" y2="25" stroke={S.coral} strokeWidth="0.5" />
            <line x1="50" y1="25" x2="30" y2="40" stroke={S.coral} strokeWidth="0.5" />
            <line x1="50" y1="25" x2="70" y2="40" stroke={S.coral} strokeWidth="0.5" />
            <circle cx="20" cy="10" r="2" fill={S.white} />
            <circle cx="80" cy="15" r="2" fill={S.white} />
            <circle cx="50" cy="25" r="3.5" fill={S.coral} />
            <circle cx="30" cy="40" r="2" fill={S.white} />
            <circle cx="70" cy="40" r="2" fill={S.white} />
          </svg>
          <div style={{ width: "100%", height: "2px", background: S.gray, position: "absolute", top: 0, left: 0 }} />
          <div style={{ position: "absolute", bottom: "8px", left: "12px", fontFamily: S.sans, fontSize: "9px", color: S.gray, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
            INVESTIGATIVE BRIEF #05
          </div>
        </div>
      );
    }
    return null;
  };

  const articles = [
    {
      id: "shinyhunters-2026",
      title: "ShinyHunters: Inside the largest data extortion campaign in history",
      eyebrow: "LEAKLENS EXPLAINER · JULY 2026",
      desc: "Since May 2020, a group operating under the name ShinyHunters has been tied to data theft affecting several hundred million individual records across hundreds of organizations.",
      date: "July 2026",
      readTime: "7 min read"
    },
    {
      id: "what-a-data-protection-authority-does",
      title: "What a Data Protection Authority Actually Does — And What Happens Without One",
      eyebrow: "LEAKLENS EXPLAINER · JULY 2026",
      desc: "This is not an article about a specific breach. It's about the institution that, in most of the world, is supposed to respond when a breach happens — and what its absence looks like.",
      date: "July 2026",
      readTime: "5 min read"
    },
    {
      id: "spot-fake-breach-notice",
      title: "Real Breach Notice or Scam? How to Tell in the First 60 Seconds",
      eyebrow: "LEAKLENS EXPLAINER · JULY 2026",
      desc: "Breach notifications have become so routine that scammers are now exploiting them. Learn how to tell a real breach warning from a phishing attack in under a minute.",
      date: "July 2026",
      readTime: "5 min read"
    },
    {
      id: "kanonymity-guide",
      title: "k-Anonymity: Checking leaks without giving away your email",
      eyebrow: "CIVIC TECH GUIDE · UPCOMING",
      desc: "A look at the mathematics and privacy design of prefix-based checking systems that guarantee your credentials never leave your browser.",
      date: "August 2026",
      readTime: "Coming soon",
      teaser: true
    },
    {
      id: "aleph-guide",
      title: "OCCRP Aleph: The journalist's database for tracking power and leaks",
      eyebrow: "INVESTIGATIVE BRIEF · UPCOMING",
      desc: "How global citizen watchdogs coordinate, structure and audit millions of leak and registry files to reveal shell companies and illicit wealth.",
      date: "August 2026",
      readTime: "Coming soon",
      teaser: true
    }
  ];

  if (selectedArticle === "shinyhunters-2026") {
    return (
      <ShinyHunters2026
        S={S}
        onBack={() => {
          window.history.pushState(null, "", "/explainers");
          window.dispatchEvent(new PopStateEvent("popstate"));
        }}
      />
    );
  }

  if (selectedArticle === "what-a-data-protection-authority-does") {
    return (
      <WhatDataProtectionAuthorityDoes
        S={S}
        onBack={() => {
          window.history.pushState(null, "", "/explainers");
          window.dispatchEvent(new PopStateEvent("popstate"));
        }}
      />
    );
  }

  if (selectedArticle === "spot-fake-breach-notice") {
    return (
      <SpotFakeBreachNotice
        S={S}
        onBack={() => {
          window.history.pushState(null, "", "/explainers");
          window.dispatchEvent(new PopStateEvent("popstate"));
        }}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        padding: "36px 40px 60px",
        background: `radial-gradient(circle at center, #1b1713 0%, #0d0b09 100%)`,
        boxShadow: "inset 0 0 100px rgba(0,0,0,0.85)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Board overlay texture */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.04,
        backgroundImage: `repeating-linear-gradient(45deg, #000 0px, #000 2px, transparent 2px, transparent 10px), repeating-linear-gradient(-45deg, #000 0px, #000 2px, transparent 2px, transparent 10px)`,
        pointerEvents: "none"
      }} />

      <div style={{ borderBottom: `1px solid ${S.line}`, paddingBottom: "24px", marginBottom: "42px", position: "relative", zIndex: 2 }}>
        <div style={{ fontFamily: S.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: S.coral, textTransform: "uppercase", marginBottom: 10 }}>
          Threat Briefings & Insights
        </div>
        <h1 style={{ fontFamily: S.sans, fontWeight: 800, fontSize: 42, color: S.white, margin: 0, lineHeight: 1.1 }}>
          LeakLens Explainers
        </h1>
        <p style={{ fontFamily: S.serif, fontSize: 16, color: S.gray, marginTop: 12 }}>
          Deep-dives into threat actors, leak methodologies, and major global campaigns.
        </p>
      </div>

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Connecting threads (SVG lines) */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1, overflow: "visible" }}>
          {/* Thread from ShinyHunters (Card 1) to GDPR (Card 2) */}
          <path d="M 180 80 C 250 -20, 350 180, 520 80" fill="none" stroke="#e04a3f" strokeWidth="2.2" strokeDasharray="1" style={{ filter: "drop-shadow(2px 3px 2px rgba(0,0,0,0.6))" }} />
          {/* Thread from GDPR (Card 2) to Phishing Notice (Card 3) */}
          <path d="M 520 80 C 600 -10, 700 180, 860 80" fill="none" stroke="#e04a3f" strokeWidth="2.2" strokeDasharray="1" style={{ filter: "drop-shadow(2px 3px 2px rgba(0,0,0,0.6))" }} />
          {/* Thread from Phishing Notice (Card 3) to k-Anonymity (Card 4) */}
          <path d="M 860 80 C 950 180, 600 350, 180 400" fill="none" stroke="#e04a3f" strokeWidth="2.2" strokeDasharray="1" style={{ filter: "drop-shadow(2px 3px 2px rgba(0,0,0,0.6))" }} />
          {/* Thread from k-Anonymity (Card 4) to OCCRP Aleph (Card 5) */}
          <path d="M 180 400 C 350 450, 600 320, 520 400" fill="none" stroke="#e04a3f" strokeWidth="2.2" strokeDasharray="1" style={{ filter: "drop-shadow(2px 3px 2px rgba(0,0,0,0.6))" }} />
          {/* Diagonal thin thread linking Card 1 to Card 5 */}
          <path d="M 180 80 C 400 300, 600 -100, 520 400" fill="none" stroke="#D6A24C" strokeWidth="1.2" opacity="0.65" style={{ filter: "drop-shadow(1px 2px 2px rgba(0,0,0,0.5))" }} />
        </svg>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "40px 28px", position: "relative", zIndex: 2 }}>
          {articles.map((art, idx) => {
            const isTeaser = 'teaser' in art && art.teaser;
            // Introduce a subtle hand-pinned rotation for the detective board
            const rotation = idx % 3 === 0 ? "rotate(0.6deg)" : idx % 3 === 1 ? "rotate(-0.8deg)" : "rotate(0.4deg)";
            
            return (
              <div
                key={art.id}
                onClick={() => {
                  if (!isTeaser) {
                    window.history.pushState(null, "", `/explainers/${art.id}`);
                    window.dispatchEvent(new PopStateEvent("popstate"));
                  }
                }}
                style={{
                  background: S.bg2,
                  border: `1px solid ${S.line}`,
                  boxShadow: "0 12px 28px rgba(0,0,0,0.55), 0 3px 8px rgba(0,0,0,0.3)",
                  padding: 0,
                  cursor: isTeaser ? "default" : "pointer",
                  opacity: isTeaser ? 0.75 : 1,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  overflow: "hidden",
                  position: "relative",
                  transform: rotation,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "rotate(0deg) scale(1.025)";
                  e.currentTarget.style.boxShadow = "0 22px 40px rgba(0,0,0,0.65), 0 8px 16px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = rotation;
                  e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.55), 0 3px 8px rgba(0,0,0,0.3)";
                }}
              >
                {/* Colored Push Pin at the top of the evidence paper */}
                <div style={{
                  position: "absolute",
                  top: "6px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: isTeaser ? "radial-gradient(circle at 4px 4px, #888 0%, #444 100%)" : "radial-gradient(circle at 4px 4px, #f23d29 0%, #8c1206 100%)",
                  boxShadow: "1px 3px 4px rgba(0,0,0,0.7)",
                  zIndex: 10
                }}>
                  {/* Pin shadow */}
                  <div style={{
                    position: "absolute",
                    top: "10px",
                    left: "8px",
                    width: "2px",
                    height: "8px",
                    background: "rgba(0,0,0,0.5)",
                    transform: "rotate(20deg)"
                  }} />
                </div>

                {renderMiniCover(art.id)}

                <div style={{ padding: 24, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div>
                    <div style={{ fontFamily: S.sans, fontSize: 11, color: isTeaser ? S.gray : S.coral, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 12 }}>
                      {art.eyebrow}
                    </div>
                    <h3 style={{ fontFamily: S.serif, fontSize: 19, fontWeight: 700, color: S.white, marginBottom: 10, lineHeight: 1.35 }}>
                      {art.title}
                    </h3>
                    <p style={{ fontFamily: S.serif, fontSize: 13, color: S.gray, lineHeight: 1.6, marginBottom: 16 }}>
                      {art.desc}
                    </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: `1px solid ${S.line}`, paddingTop: 12, marginTop: "auto" }}>
                    <span style={{ fontFamily: S.sans, fontSize: 12, color: S.gray }}>{art.readTime}</span>
                    {!isTeaser && (
                      <span style={{ fontFamily: S.sans, fontSize: 12, color: S.coral, fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
                        READ BRIEF <ArrowUpRight size={14} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
