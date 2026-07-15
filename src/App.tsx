import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmailSearchForm from "./components/EmailSearchForm";
import ReportView from "./components/ReportView";
import LeaksDatabase from "./components/LeaksDatabase";
import MethodologyView from "./components/MethodologyView";
import SecurityAdvice from "./components/SecurityAdvice";
import AboutView from "./components/AboutView";
import ExplainersView from "./components/ExplainersView";
import { DocumentedLeak, DOCUMENTED_LEAKS } from "./data";
import { ArrowUpRight, Database } from "lucide-react";

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

// Current date formatted
const dateStr = new Date().toLocaleDateString("en-US", { day:"numeric", month:"long", year:"numeric" }).toUpperCase();

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [navbarSearchQuery, setNavbarSearchQuery] = useState("");
  const [scanLines, setScanLines] = useState<string[]>([
    "SYSTEM - Local secure audit ready.",
    "NETWORK - k-Anonymity schema verified.",
    "REGISTRY - Database empty (ready for entries)."
  ]);

  React.useEffect(() => {
    const phrases = [
      "Listening for secure submissions...",
      "Awaiting database updates...",
      "Monitoring independent media reports...",
      "Ready to perform secure client-side checks...",
      "Accepting confidential tips on info@leaklens.org...",
      "k-Anonymity prefix matcher online...",
      "SHA-256 signature verifier active..."
    ];
    const interval = setInterval(() => {
      setScanLines(prev => {
        const next = [...prev];
        if (next.length > 5) next.shift();
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];
        const time = new Date().toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });
        next.push(`${time} - ${phrase}`);
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Search state
  const [auditedEmail, setAuditedEmail] = useState("");
  const [isExposed, setIsExposed] = useState(false);
  const [exposedCount, setExposedCount] = useState(0);
  const [exposureResults, setExposureResults] = useState<DocumentedLeak[]>([]);
  const [showReport, setShowReport] = useState(false);

  const handleSearchComplete = (email: string, exposed: boolean, count: number, results: DocumentedLeak[]) => {
    setAuditedEmail(email);
    setIsExposed(exposed);
    setExposedCount(count);
    setExposureResults(results);
    setShowReport(true);
    window.scrollTo({ top:0, behavior:"smooth" });
  };

  const resetSearch = () => {
    setAuditedEmail("");
    setIsExposed(false);
    setExposedCount(0);
    setExposureResults([]);
    setShowReport(false);
  };

  const navigateToTab = (tabId: string) => {
    setActiveTab(tabId);
    resetSearch();
    setNavbarSearchQuery("");
    const path = tabId === "home" ? "/" : `/${tabId}`;
    window.history.pushState(null, "", path);
    window.scrollTo({ top:0, behavior:"smooth" });
  };

  React.useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname.replace(/^\/+/g, ""); // Remove leading slashes
      if (!path) {
        setActiveTab("home");
        resetSearch();
      } else if (["database", "methodology", "security", "about"].includes(path) || path.startsWith("explainers")) {
        setActiveTab(path.startsWith("explainers") ? "explainers" : path);
        resetSearch();
      } else if (path.startsWith("leaks/")) {
        const leakId = path.substring(6);
        setActiveTab("database");
        resetSearch();
        setNavbarSearchQuery(`id:${leakId}`);
      } else {
        // Treat as direct leak ID/slug
        setActiveTab("database");
        resetSearch();
        setNavbarSearchQuery(`id:${path}`);
      }
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);


  return (
    <div style={{ background: S.bg, color: S.white, minHeight:"100vh", display:"flex", flexDirection:"column" }}>
      <Navbar
        activeTab={activeTab}
        setActiveTab={navigateToTab}
        navbarSearchQuery={navbarSearchQuery}
        setNavbarSearchQuery={setNavbarSearchQuery}
      />

      <main style={{ flex:1 }}>
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div key="home" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.25 }}>

              {showReport ? (
                <ReportView
                  email={auditedEmail}
                  isExposed={isExposed}
                  exposedCount={exposedCount}
                  results={exposureResults}
                  onReset={resetSearch}
                />
              ) : (
                <>
                  {/* Hero */}
                  <div style={{ padding:"36px 40px 0" }}>
                    <div style={{ fontFamily:S.sans, fontSize:12, color: S.gray, marginBottom:18, letterSpacing:"0.04em" }}>{dateStr}</div>
                    <div style={{ display:"grid", gridTemplateColumns:"1.1fr 1fr", gap:40, alignItems:"start" }}>
                      <div>
                        <h1 style={{
                          fontFamily:S.sans, fontWeight:800, fontSize:52, lineHeight:1.08,
                          color: S.coral, margin:"0 0 24px", letterSpacing:"-0.01em",
                        }}>
                          Check where your personal data has been exposed without consent
                        </h1>
                        <p style={{ fontFamily:S.serif, fontSize:19, color: S.white, maxWidth:480, margin:"0 0 26px", lineHeight:1.6 }}>
                          Independent, non-commercial leak registry — where no data protection authority exists, open documentation fills the gap.
                        </p>
                        <div style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:S.sans, fontSize:12, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase" }}>
                          <span style={{ width:3, height:16, background: S.coral, display:"inline-block" }} />
                          Public verification tool
                        </div>
                      </div>

                      {/* Terminal Scanner block */}
                      <div style={{
                        aspectRatio:"16/10",
                        background:"#0d0d0c",
                        border:`1px solid ${S.line}`,
                        position:"relative", overflow:"hidden",
                        padding:"16px 20px", display:"flex", flexDirection:"column", gap:12
                      }}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:`1px solid ${S.line}`, paddingBottom:8 }}>
                          <span style={{ fontFamily:S.sans, fontWeight:800, fontSize:11, color:S.coral, textTransform:"uppercase", letterSpacing:"0.05em" }}>Registry Scanner Live</span>
                          <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                            <span style={{ width:7, height:7, borderRadius:"50%", background:"#4db86a", display:"inline-block", animation:"pulse 1.5s infinite" }} />
                            <span style={{ fontFamily:S.sans, fontWeight:700, fontSize:10, color:"#4db86a" }}>ONLINE</span>
                          </div>
                        </div>
                        <div style={{ fontFamily:"Courier New, Courier, monospace", fontSize:11, color:"#8c8c82", display:"flex", flexDirection:"column", gap:8, flex:1, overflow:"hidden", lineHeight:1.5 }}>
                          {scanLines.map((line, idx) => (
                            <div key={idx} style={{ wordBreak:"break-all", color: idx === scanLines.length - 1 ? S.white : "#8c8c82" }}>
                              &gt; {line}
                            </div>
                          ))}
                        </div>
                        <style>{`
                          @keyframes pulse {
                            0% { opacity: 0.3; }
                            50% { opacity: 1; }
                            100% { opacity: 0.3; }
                          }
                        `}</style>
                      </div>
                    </div>
                  </div>

                  {/* Info Notice */}
                  <div style={{ margin: "24px 40px 12px", border: `1px solid ${S.line}`, background: "#1b1b19", padding: "18px 24px", display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <Database size={18} color={S.coral} style={{ marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontFamily: S.sans, fontWeight: 800, fontSize: 14, color: S.white, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                        Registry Auditing in Progress
                      </h4>
                      <p style={{ fontFamily: S.serif, fontSize: 13, color: S.gray, margin: 0, lineHeight: 1.6 }}>
                        The incident registry is continuously updated as newly verified public disclosures and threat reports are audited. LeakLens documents exposure metadata to help you check your footprint; we do not collect, store, or host raw data leaks. If you know of a documented incident, you can share it via our{" "}
                        <button
                          onClick={() => navigateToTab("about")}
                          style={{ background: "none", border: "none", color: S.coral, textDecoration: "underline", cursor: "pointer", padding: 0, fontFamily: S.serif, fontSize: 13 }}
                        >
                          Contact page
                        </button>.
                      </p>
                    </div>
                  </div>

                  {/* Search */}
                  <EmailSearchForm onSearchComplete={handleSearchComplete} />

                  {/* Why */}
                  <section style={{ padding:"36px 40px", borderBottom:`1px solid ${S.line}` }}>
                    <div style={{ fontFamily:S.sans, fontSize:11, fontWeight:700, letterSpacing:"0.1em", color: S.coral, textTransform:"uppercase", marginBottom:14 }}>
                      Rationale
                    </div>
                    <p style={{ fontFamily:S.serif, fontSize:16, color: S.white, maxWidth:640, margin:"0 0 12px", lineHeight:1.7 }}>
                      Many countries lack an independent data protection authority. In these regions, banks, fintech platforms, and government services collect data on millions of users — with no public oversight of how it is stored or shared.
                    </p>
                    <p style={{ fontFamily:S.serif, fontSize:16, color: S.gray, maxWidth:640, margin:0, lineHeight:1.7 }}>
                      LeakLens documents leak incidents and gives individuals the ability to check their own footprint — a function performed by regulators in other countries.
                    </p>
                  </section>

                  {/* How it works cards */}
                  <div style={{ padding:"0 40px 36px", borderBottom:`1px solid ${S.line}` }}>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:0, marginTop:0 }}>
                      {[
                        { n:"01", title:"Search", desc:"Enter an email or phone number to check against documented incidents.", tab:"home" },
                        { n:"02", title:"Documentation", desc:"Every incident is recorded with a date, source and link to the original.", tab:"database" },
                        { n:"03", title:"No Surveillance", desc:"Queries are not logged. We build no profiles — we answer one question.", tab:"security" },
                      ].map(c => (
                        <div
                          key={c.n}
                          onClick={() => navigateToTab(c.tab)}
                          style={{
                            padding:"28px 28px", borderRight: c.n !== "03" ? `1px solid ${S.line}` : "none",
                            borderTop:`1px solid ${S.line}`, cursor:"pointer",
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = "#1a1a18")}
                          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                        >
                          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
                            <span style={{ fontFamily:S.sans, fontWeight:800, fontSize:28, color: S.coral, opacity:0.25 }}>{c.n}</span>
                            <ArrowUpRight size={14} color={S.gray} />
                          </div>
                          <h3 style={{ fontFamily:S.sans, fontWeight:800, fontSize:18, color: S.white, margin:"0 0 8px" }}>{c.title}</h3>
                          <p style={{ fontFamily:S.serif, fontSize:14, color: S.gray, margin:0, lineHeight:1.6 }}>{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>


                  {/* Sources */}
                  <section style={{ padding:"32px 40px" }}>
                    <div style={{ fontFamily:S.sans, fontSize:11, fontWeight:700, letterSpacing:"0.1em", color: S.coral, textTransform:"uppercase", marginBottom:12 }}>
                      Sources
                    </div>
                    <p style={{ fontFamily:S.serif, fontSize:15, color: S.gray, margin:0, lineHeight:1.7 }}>
                      Based on investigations by independent organizations (OCCRP, RFE/RL and others), cross-referenced with publicly disclosed incidents. Every entry links to the original source.
                    </p>
                    <div style={{ display:"flex", gap:36, marginTop:24, flexWrap:"wrap" }}>
                      {["OCCRP", "RFE/RL", "Independent Media"].map(src => (
                        <button
                          key={src}
                          onClick={() => { navigateToTab("database"); setNavbarSearchQuery(src); }}
                          style={{
                            background:"none", border:"none", cursor:"pointer",
                            fontFamily:S.sans, fontWeight:800, fontSize:28,
                            color:"#3A3A38", letterSpacing:"-0.01em",
                          }}
                          onMouseEnter={e => (e.currentTarget.style.color = S.white)}
                          onMouseLeave={e => (e.currentTarget.style.color = "#3A3A38")}
                        >
                          {src}
                        </button>
                      ))}
                    </div>
                  </section>
                </>
              )}
            </motion.div>
          )}

          {activeTab === "database" && (
            <motion.div key="database" initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} transition={{ duration:0.22 }}>
              <LeaksDatabase navbarSearchQuery={navbarSearchQuery} setNavbarSearchQuery={setNavbarSearchQuery} />
            </motion.div>
          )}

          {activeTab === "explainers" && (
            <motion.div key="explainers" initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} transition={{ duration:0.22 }}>
              <ExplainersView />
            </motion.div>
          )}

          {activeTab === "methodology" && (
            <motion.div key="methodology" initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} transition={{ duration:0.22 }}>
              <MethodologyView />
            </motion.div>
          )}

          {activeTab === "security" && (
            <motion.div key="security" initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} transition={{ duration:0.22 }}>
              <SecurityAdvice />
            </motion.div>
          )}

          {activeTab === "about" && (
            <motion.div key="about" initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} transition={{ duration:0.22 }}>
              <AboutView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer setActiveTab={navigateToTab} />
    </div>
  );
}
