import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ShieldAlert, FileText, AlertTriangle, ShieldCheck, Mail, Globe, Server, Activity } from "lucide-react";

interface PhantomEnigmaProps {
  S: {
    sans: string;
    serif: string;
    coral: string;
    gray: string;
    line: string;
    bg: string;
    bg2: string;
    white: string;
  };
  onBack: () => void;
}

export default function PhantomEnigma({ S, onBack }: PhantomEnigmaProps) {
  React.useEffect(() => {
    const originalTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription ? metaDescription.getAttribute("content") : "";

    document.title = "PhantomEnigma: How a Brazilian Banking-Fraud Campaign Hijacked Government Trust — LeakLens";
    const descContent = "Explore the PhantomEnigma threat briefing tracking the evolution of a banking-fraud campaign into a structural threat hijacking .gov.br infrastructure.";
    if (metaDescription) {
      metaDescription.setAttribute("content", descContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descContent;
      document.head.appendChild(meta);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    const originalCanonical = canonicalLink.getAttribute("href");
    canonicalLink.setAttribute("rel", "canonical");
    canonicalLink.setAttribute("href", "https://leaklens.org/explainers/phantom-enigma");
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }

    return () => {
      document.title = originalTitle;
      if (metaDescription) {
        metaDescription.setAttribute("content", originalDescription || "");
      }
      if (originalCanonical) {
        canonicalLink.setAttribute("href", originalCanonical);
      } else if (canonicalLink.parentNode) {
        canonicalLink.parentNode.removeChild(canonicalLink);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{ background: "#000", color: S.white, minHeight: "100vh" }}
    >
      {/* Navigation Bar Back Link */}
      <div style={{ padding: "20px 40px", borderBottom: `1px solid ${S.line}`, display: "flex", alignItems: "center", gap: 12, background: S.bg }}>
        <button
          onClick={onBack}
          style={{
            background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
            color: S.gray, fontFamily: S.sans, fontSize: 13, fontWeight: 700, textTransform: "uppercase"
          }}
        >
          <ArrowLeft size={16} /> Back to Explainers
        </button>
      </div>

      {/* Feature Cover Block */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "630px",
          position: "relative",
          overflow: "hidden",
          margin: "0 auto",
          borderBottom: `1px solid ${S.line}`,
          fontFamily: "-apple-system, sans-serif"
        }}
      >
        {/* Backdrop */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 900px 500px at 75% 50%, rgba(34,139,34,0.08), transparent 60%), linear-gradient(180deg, #070a08 0%, #030403 100%)`
          }}
        />

        {/* Dynamic Threat Flow SVG */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.28,
            pointerEvents: "none"
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            {/* Grid Backdrop */}
            <path d="M 0,50 L 800,50 M 0,100 L 800,100 M 0,150 L 800,150 M 0,200 L 800,200 M 0,250 L 800,250 M 0,300 L 800,300 M 0,350 L 800,350 M 100,0 L 100,400 M 200,0 L 200,400 M 300,0 L 300,400 M 400,0 L 400,400 M 500,0 L 500,400 M 600,0 L 600,400 M 700,0 L 700,400" fill="none" stroke="#121814" strokeWidth="0.5" />
            
            {/* Nodes representing compromised servers */}
            <circle cx="150" cy="120" r="4" fill="#228b22" />
            <circle cx="300" cy="200" r="5" fill="#e04a3f" />
            <circle cx="450" cy="150" r="4" fill="#e04a3f" />
            <circle cx="600" cy="280" r="6" fill="#e04a3f" />
            
            {/* Attack vector path lines */}
            <path d="M 50,120 Q 150,80 300,200 T 450,150 T 600,280 T 750,220" fill="none" stroke="#228b22" strokeWidth="1" strokeDasharray="3,3" />
            <path d="M 300,200 L 400,320 L 600,280" fill="none" stroke="#e04a3f" strokeWidth="1" />
            
            {/* Rings around the critical hijacked trust nodes */}
            <circle cx="300" cy="200" r="10" fill="none" stroke="#e04a3f" strokeWidth="0.5" opacity="0.6">
              <animate attributeName="r" values="5;15;5" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="600" cy="280" r="12" fill="none" stroke="#e04a3f" strokeWidth="0.5" opacity="0.6">
              <animate attributeName="r" values="6;18;6" dur="4s" repeatCount="indefinite" />
            </circle>
            
            {/* Badges/Texts */}
            <text x="315" y="196" fill="#e04a3f" fontSize="9" fontFamily="monospace">compromised .gov.br</text>
            <text x="615" y="276" fill="#e04a3f" fontSize="9" fontFamily="monospace">C2 Beacon (180s)</text>
          </svg>
        </div>

        {/* Scrim Overlays */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(4,6,4,0.96) 0%, rgba(4,6,4,0.85) 45%, rgba(4,6,4,0.4) 75%, rgba(4,6,4,0.85) 100%)"
          }}
        />

        {/* Green/Red Trust Alert Top Rule */}
        <div style={{ width: "100%", height: "3px", background: "linear-gradient(90deg, #228b22 0%, #e04a3f 100%)", position: "absolute", top: 0, left: 0 }} />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            padding: "56px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div>
            <div style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "3px", color: "#228b22", marginBottom: "20px", fontFamily: S.sans }}>
              LEAKLENS EXPLAINER · JULY 2026
            </div>
            <h1
              style={{
                fontFamily: S.serif,
                fontSize: "44px",
                fontWeight: 700,
                color: "#f2f0eb",
                lineHeight: 1.15,
                maxWidth: "850px",
                margin: 0
              }}
            >
              PhantomEnigma:<br />
              <span style={{ fontWeight: 400, color: "#d8c4c0", fontSize: "32px" }}>How a Brazilian Banking-Fraud Campaign Hijacked Government Trust</span>
            </h1>
            <div style={{ display: "flex", gap: "48px", marginTop: "32px" }}>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 800, color: "#e04a3f", fontFamily: S.sans }}>20+</div>
                <div style={{ fontSize: "11px", color: "#9a968a", letterSpacing: "1px", marginTop: "2px", fontFamily: S.sans, textTransform: "uppercase" }}>
                  COMPROMISED GOVERNMENT SITES
                </div>
              </div>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 800, color: "#e04a3f", fontFamily: S.sans }}>7</div>
                <div style={{ fontSize: "11px", color: "#9a968a", letterSpacing: "1px", marginTop: "2px", fontFamily: S.sans, textTransform: "uppercase" }}>
                  ATTACK CHAIN STAGES
                </div>
              </div>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 800, color: "#e04a3f", fontFamily: S.sans }}>180s</div>
                <div style={{ fontSize: "11px", color: "#9a968a", letterSpacing: "1px", marginTop: "2px", fontFamily: S.sans, textTransform: "uppercase" }}>
                  C2 ROTATING CHECK-IN TIME
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 0, marginTop: "10px" }}>
              {[
                { name: "Phishing Lures & Scams", year: "Stage 1" },
                { name: ".gov.br Redirect", year: "Stage 2" },
                { name: "Inno Setup/MSI Installer", year: "Stage 3" },
                { name: "Patched Boostnote App", year: "Stage 4" },
                { name: "C2 Backdoor Active", year: "Stage 5-7", now: true }
              ].map((item, idx, arr) => (
                <React.Fragment key={idx}>
                  <div style={{ textAlign: "center", fontSize: "12px" }}>
                    <div style={{ fontFamily: S.serif, fontStyle: "italic", color: "#c9c5b8", marginBottom: "4px", fontSize: "13px" }}>
                      {item.name}
                    </div>
                    <div style={{ color: item.now ? "#e04a3f" : "#8a8574", fontWeight: 600, fontFamily: S.sans }}>
                      {item.year}
                    </div>
                  </div>
                  {idx < arr.length - 1 && (
                    <div style={{ flex: 1, height: "1px", background: "#223b28", margin: "0 8px" }} />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: "13px", color: "#7a7669", marginTop: "18px", fontFamily: S.sans }}>
              <span>Sourced from ANY.RUN, Positive Technologies, The Hacker News, Recorded Future News</span>
              <span style={{ color: "#228b22", fontWeight: 700, letterSpacing: "1px" }}>LEAKLENS.ORG</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Body Section with relative positioning for evidence elements */}
      <div style={{ position: "relative", width: "100%", background: "#050505", overflow: "hidden" }}>
        
        {/* Style block for desktop evidence elements */}
        <style>{`
          @media (max-width: 1280px) {
            .evidence-board-pin {
              display: none !important;
            }
          }
        `}</style>

        {/* Main centered article text container */}
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 40px", background: "#000", borderLeft: `1px solid ${S.line}`, borderRight: `1px solid ${S.line}`, position: "relative", zIndex: 2 }}>
          {/* Introductory Paragraph */}
          <div style={{ borderBottom: `1px solid ${S.line}`, paddingBottom: "32px", marginBottom: "40px" }}>
            <h2 style={{ fontFamily: S.sans, fontSize: "12px", color: "#e04a3f", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              The scale, in one paragraph
            </h2>
            <p style={{ fontFamily: S.serif, fontSize: "18px", color: S.white, lineHeight: 1.8, margin: 0 }}>
              Since early 2025, a campaign researchers call PhantomEnigma has evolved from a Brazil-focused banking credential thief into something more structural: an operation that hijacks government infrastructure itself to deliver malware. As of July 2026, more than 20 Brazilian government websites — municipal, public-security, fire-department, and judicial portals across multiple states — have been compromised and turned into links in the delivery chain. The campaign has touched hundreds of individual victims and dozens of organizations, but the number that matters isn't a record count. It's the count of .gov.br domains an attacker can currently route a phishing victim through and have it look completely legitimate, because it is.
            </p>
            <p style={{ fontFamily: S.serif, fontSize: "16px", color: S.gray, lineHeight: 1.8, marginTop: "16px", marginBottom: 0 }}>
              <em>A note on why this case, specifically:</em> PhantomEnigma is a Brazil-focused campaign, but the technique it demonstrates — hijacking a government's own trust infrastructure to distribute malware, rather than exploiting a software flaw — isn't. Any jurisdiction with authenticated government email and public-facing web portals carries the same exposure. That's the precedent worth tracking here, independent of geography, and it's why this case belongs in a broader threat-intelligence record rather than a purely regional one.
            </p>
            <p style={{ fontFamily: S.serif, fontSize: "16px", color: S.gray, lineHeight: 1.8, marginTop: "16px", marginBottom: 0 }}>
              This piece lays out what's confirmed, what's still murky, and how the operation actually works — because the "how" here is unusual: it doesn't rely on a software vulnerability at all.
            </p>
          </div>

          {/* Article Text Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            
            {/* Section 1: Origins */}
            <div style={{ position: "relative" }}>
              
              {/* Evidence Card 1: 2025 TELEMETRY DATA (Left Side) */}
              <div className="evidence-board-pin" style={{
                position: "absolute",
                left: "-250px",
                top: "10px",
                width: "210px",
                background: "#0c0d0e",
                border: "1px solid #22252a",
                borderTop: "3px solid #228b22",
                padding: "14px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.7)",
                color: "#8e9ba8",
                zIndex: 5,
                fontFamily: "monospace",
                fontSize: "9px",
                lineHeight: 1.4
              }}>
                {/* Horizontal dotted connector to main border */}
                <div style={{
                  position: "absolute",
                  right: "-40px",
                  top: "24px",
                  width: "40px",
                  height: "0",
                  borderTop: "1px dashed #228b22",
                  opacity: 0.45,
                  pointerEvents: "none"
                }} />

                <div style={{ display: "flex", justifyContent: "space-between", color: "#54606e", fontSize: "7.5px", fontWeight: "bold", borderBottom: "1px solid #1c2024", paddingBottom: "6px", marginBottom: "8px" }}>
                  <span>PT-INTEL // 2025</span>
                  <span>CAMPAIGN // V1</span>
                </div>

                <div style={{ fontWeight: "bold", color: S.white, fontSize: "10px", marginBottom: "8px" }}>
                  PHASE 1: BANKING FRAUD
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#aaa" }}>
                  <div>
                    <span style={{ color: "#54606e" }}>Downloads:</span> <span style={{ color: "#228b22" }}>722</span>
                  </div>
                  <div>
                    <span style={{ color: "#54606e" }}>Victim Co:</span> <span style={{ color: "#aaa" }}>~70</span>
                  </div>
                  <div>
                    <span style={{ color: "#54606e" }}>Policy Push:</span> <span style={{ color: "#228b22" }}>ForceList</span>
                  </div>
                  <div>
                    <span style={{ color: "#54606e" }}>Target Tool:</span> <span style={{ color: "#e04a3f" }}>GBPlugin</span>
                  </div>
                </div>

                <div style={{ marginTop: "10px", padding: "4px 8px", background: "rgba(34,139,34,0.15)", border: "1px solid rgba(34,139,34,0.3)", color: "#4a9d6e", fontSize: "8px", fontWeight: "bold", textAlign: "center" }}>
                  DETECTION BYPASS ACTIVE
                </div>
              </div>

              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: "#e04a3f", letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px" }}>
                Origins: the banking extension, 2025
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                PhantomEnigma was first documented by Positive Technologies, a Russian cybersecurity firm, in a report published mid-2025, tracking activity researchers believe began at the start of that year. The initial version was a straightforward banking-fraud operation: phishing emails disguised as invoices, sent in part from the servers of already-compromised companies, led victims to install a malicious browser extension for Chrome, Edge, or Brave. The extension was built to steal authentication data from Brazilian banking sessions, and researchers found it had been downloaded 722 times across Brazil, Colombia, Mexico, the Czech Republic, Russia, and Vietnam, with roughly 70 distinct victim companies identified through an open directory the attackers had left exposed.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                The tradecraft in this first phase was already unusual for the region. Researchers noted the use of group-policy manipulation (<code style={{ color: "#e04a3f", background: "#111", padding: "2px 4px", fontSize: "13px" }}>ExtensionInstallForcelist</code>) to push the malicious extension without a user prompt, and a persistence mechanism that specifically checked for GBPlugin — a banking-security tool used by Brazilian banks — apparently to help the malware avoid systems already being watched.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "14px", color: S.gray, lineHeight: 1.7, fontStyle: "italic" }}>
                <strong>What's confirmed vs. disputed:</strong> The 2025 banking-extension campaign is independently documented by Positive Technologies with named indicators, C2 infrastructure, and victim-count methodology, and was corroborated by multiple outlets including The Hacker News. The 2026 government-website phase, detailed below, comes from a single research vendor, ANY.RUN, whose findings are described in detail but have not yet been independently replicated by a second research team as of this writing.
              </p>
            </div>

            {/* Section 2: Hijacked trust */}
            <div style={{ position: "relative" }}>
              
              {/* Evidence Card 2: COMPROMISED DOMAINS (Right Side) */}
              <div className="evidence-board-pin" style={{
                position: "absolute",
                right: "-250px",
                top: "10px",
                width: "210px",
                background: "#111",
                border: "1px solid #2e2d2a",
                borderLeft: "3px solid #e04a3f",
                padding: "14px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.7)",
                color: "#c8c8c0",
                zIndex: 5,
                fontFamily: "monospace",
                fontSize: "9px",
                lineHeight: 1.4
              }}>
                {/* Horizontal dotted connector to main border */}
                <div style={{
                  position: "absolute",
                  left: "-40px",
                  top: "24px",
                  width: "40px",
                  height: "0",
                  borderTop: "1px dashed #e04a3f",
                  opacity: 0.45,
                  pointerEvents: "none"
                }} />

                <div style={{ display: "flex", justifyContent: "space-between", color: "#666", fontSize: "7.5px", fontWeight: "bold", borderBottom: "1px solid #222", paddingBottom: "6px", marginBottom: "8px" }}>
                  <span>INFRASTRUCTURE LOGS</span>
                  <span>COMPROMISED HOSTS</span>
                </div>

                <div style={{ fontWeight: "bold", color: "#e04a3f", fontSize: "10px", marginBottom: "8px" }}>
                  OBSERVED GOV LINKS
                </div>

                <ul style={{ listStyleType: "none", paddingLeft: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                  <li>⚠️ <span style={{ color: S.white }}>timon.ma.gov.br</span></li>
                  <li>⚠️ <span style={{ color: S.white }}>loginam.sesp.es.gov.br</span></li>
                  <li>⚠️ <span style={{ color: S.white }}>aplicacao.cbm.mt.gov.br</span></li>
                  <li>⚠️ <span style={{ color: S.white }}>prodoc.ap.gov.br</span></li>
                </ul>

                <div style={{ marginTop: "10px", padding: "4px 8px", background: "rgba(224,74,63,0.15)", border: "1px solid rgba(224,74,63,0.3)", color: "#e04a3f", fontSize: "8px", fontWeight: "bold", textAlign: "center" }}>
                  SPF / DKIM / DMARC: PASS
                </div>
              </div>

              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: "#e04a3f", letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                The 2026 pivot: from bank fraud to hijacked government trust
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                The shift documented by ANY.RUN in July 2026 is not a new target list — it's a new delivery mechanism layered onto the same operation. Instead of compromised business email alone, PhantomEnigma began routing victims through compromised .gov.br infrastructure and using stolen government-adjacent lures: fake documents styled as "Ofício Polícia Civil" (civil police memo) or "Procuração Digital" (digital power of attorney), some carrying QR codes.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Government hosts observed compromised and used in the delivery chain include <code style={{ color: S.white }}>timon.ma.gov.br</code>, <code style={{ color: S.white }}>loginam.sesp.es.gov.br</code> (a state public-security login system), <code style={{ color: S.white }}>aplicacao.cbm.mt.gov.br</code> (a fire department application), and <code style={{ color: S.white }}>prodoc.ap.gov.br</code>, among others. Several of these appeared across more than one distinct attack branch, which is how researchers were able to connect sandbox sessions that had initially looked unrelated.
              </p>
              
              <div style={{
                borderLeft: `4px solid #228b22`,
                paddingLeft: "24px",
                margin: "24px 0",
                fontFamily: S.serif,
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: 1.45,
                color: S.white,
                fontStyle: "italic"
              }}>
                "Trusted .gov.br links and authenticated emails helped the activity remain hidden."
                <div style={{ fontSize: "13px", color: S.gray, marginTop: "8px", fontStyle: "normal", fontFamily: S.sans, fontWeight: 700 }}>
                  — ANY.RUN PhantomEnigma research, via The Hacker News
                </div>
              </div>

              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                The emails carrying these lures were, in several observed cases, sent through genuinely compromised mailboxes — meaning they passed SPF, DKIM, and DMARC authentication checks. That's a meaningfully different threat than a spoofed sender: it's a real, previously-legitimate account sending a real, passing-every-check email.
              </p>
            </div>

            {/* Section 3: Step by step */}
            <div style={{ position: "relative" }}>
              
              {/* Evidence Card 3: SEVEN STAGES (Left Side) */}
              <div className="evidence-board-pin" style={{
                position: "absolute",
                left: "-250px",
                top: "10px",
                width: "210px",
                background: "#111",
                border: "1px solid #2e2d2a",
                borderTop: "3px solid #e04a3f",
                padding: "14px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.7)",
                color: "#c8c8c0",
                zIndex: 5,
                fontFamily: "monospace",
                fontSize: "9px",
                lineHeight: 1.4
              }}>
                {/* Horizontal dotted connector to main border */}
                <div style={{
                  position: "absolute",
                  right: "-40px",
                  top: "24px",
                  width: "40px",
                  height: "0",
                  borderTop: "1px dashed #e04a3f",
                  opacity: 0.45,
                  pointerEvents: "none"
                }} />

                <div style={{ display: "flex", justifyContent: "space-between", color: "#666", fontSize: "7.5px", fontWeight: "bold", borderBottom: "1px solid #222", paddingBottom: "6px", marginBottom: "8px" }}>
                  <span>ANY.RUN RECONSTRUCT</span>
                  <span>ATTACK STAGES</span>
                </div>

                <div style={{ fontWeight: "bold", color: S.white, fontSize: "10px", marginBottom: "8px" }}>
                  7-STAGE PROGRESSION
                </div>

                <ol style={{ paddingLeft: "14px", display: "flex", flexDirection: "column", gap: "4px", color: "#aaa" }}>
                  <li>Phishing lure email</li>
                  <li>.gov.br redirection</li>
                  <li>Inno / MSI installer</li>
                  <li>Boostnote patched</li>
                  <li>Backdoor machine ID</li>
                  <li>C2 rotation check-in</li>
                  <li>Modular payload drop</li>
                </ol>
              </div>

              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: "#e04a3f", letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                The attack chain, step by step
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "14px", color: S.gray, lineHeight: 1.7, fontStyle: "italic", marginBottom: "20px" }}>
                *The following sequence is as reconstructed by ANY.RUN from sandbox sessions; it has not yet been independently corroborated by a second research team, consistent with the sourcing note above.*
              </p>
              
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Once a target engages with the lure, researchers describe a seven-stage progression:
              </p>
              
              <ol style={{ paddingLeft: "20px", color: "#c8c8c0", fontFamily: S.serif, fontSize: "15px", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                <li>
                  <strong style={{ color: S.white }}>Phishing email arrives</strong> — styled as an official police or legal document, sometimes with a QR code.
                </li>
                <li>
                  <strong style={{ color: S.white }}>Link redirects</strong> through a compromised .gov.br host or a lookalike domain designed to resemble one.
                </li>
                <li>
                  <strong style={{ color: S.white }}>A malicious installer runs</strong> — packaged as an Inno Setup file, an MSI, or another familiar installer format.
                </li>
                <li>
                  <strong style={{ color: S.white }}>A patched, legitimate application</strong> — in observed cases, a modified copy of the note-taking app Boostnote — loads a malicious <code style={{ color: "#e04a3f", background: "#111", padding: "1px 4px" }}>index.js</code> file bundled inside it.
                </li>
                <li>
                  <strong style={{ color: S.white }}>The backdoor activates</strong>, collecting the machine name, username, and system details, and generating a persistent machine ID.
                </li>
                <li>
                  <strong style={{ color: S.white }}>It checks in with rotating command-and-control infrastructure</strong> roughly every 180 seconds, and can execute arbitrary JavaScript via <code style={{ color: "#e04a3f", background: "#111", padding: "1px 4px" }}>eval()</code> or download and run additional executables on demand.
                </li>
                <li>
                  <strong style={{ color: S.white }}>Whatever arrives next</strong> — a credential stealer, a loader, remote-monitoring-and-management (RMM) software — depends entirely on what the operator decides to push to that specific machine.
                </li>
              </ol>

              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                That last point is the operationally important one: the initial installer isn't the payload. It's a foothold that lets the operator decide, machine by machine, what to deliver later — stealer, loader, or full remote-access tooling — without rebuilding the delivery chain each time.
              </p>
            </div>

            {/* Section 4: Why harder to catch */}
            <div>
              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: "#e04a3f", letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                Why this is harder to catch than a typical phishing kit
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Most phishing detection leans on source reputation: is the sending domain known-bad, is the destination URL on a blocklist, does the file hash match a known sample. PhantomEnigma's 2026 phase is built to fail all three checks in the attacker's favor — the sending domain is a real government mailbox, the destination is a real government website, and the first-stage installer patches a real, otherwise-benign application rather than shipping a novel malicious binary.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Researchers frame the resulting problem for defenders in blunt terms: trusted infrastructure lowers suspicion, modular payloads change after the fact, and rotating C2 domains make static blocklists go stale quickly — which is why they argue that behavioral detection and ongoing threat hunting, not source-based filtering alone, are what actually holds up against this pattern.
              </p>
            </div>

            {/* Section 5: What this means */}
            <div style={{ position: "relative" }}>
              
              {/* Evidence Card 4: ACTION PLAN (Right Side) */}
              <div className="evidence-board-pin" style={{
                position: "absolute",
                right: "-250px",
                top: "10px",
                width: "210px",
                background: "#0c0d0e",
                border: "1px solid #22252a",
                borderLeft: "3px solid #228b22",
                padding: "14px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.7)",
                color: "#8e9ba8",
                zIndex: 5,
                fontFamily: "monospace",
                fontSize: "9px",
                lineHeight: 1.4
              }}>
                {/* Horizontal dotted connector to main border */}
                <div style={{
                  position: "absolute",
                  left: "-40px",
                  top: "24px",
                  width: "40px",
                  height: "0",
                  borderTop: "1px dashed #228b22",
                  opacity: 0.45,
                  pointerEvents: "none"
                }} />

                <div style={{ display: "flex", justifyContent: "space-between", color: "#54606e", fontSize: "7.5px", fontWeight: "bold", borderBottom: "1px solid #1c2024", paddingBottom: "6px", marginBottom: "8px" }}>
                  <span>MITIGATION STEPS</span>
                  <span>DEFENDER DIRECTIVE</span>
                </div>

                <div style={{ fontWeight: "bold", color: "#4a9d6e", fontSize: "10px", marginBottom: "8px" }}>
                  THREAT WORKAROUND
                </div>

                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "8.5px", color: "#aaa" }}>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #222" }}>
                      <td style={{ padding: "4px 0" }}>TRUST GOV</td>
                      <td style={{ textAlign: "right", color: "#e04a3f", fontWeight: "bold" }}>DISABLED</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #222" }}>
                      <td style={{ padding: "4px 0" }}>PATCH ANALYSIS</td>
                      <td style={{ textAlign: "right", color: "#4a9d6e", fontWeight: "bold" }}>MANDATORY</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #222" }}>
                      <td style={{ padding: "4px 0" }}>BEACON MONITOR</td>
                      <td style={{ textAlign: "right", color: "#4a9d6e", fontWeight: "bold" }}>ENABLED</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: "#e04a3f", letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                What this means if you're a bank, public agency, or vendor
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                The direct victims of the 2025 phase were retail banking customers. The 2026 phase widens the blast radius: any organization that receives email from, or routes users through links to, Brazilian government domains is now inside the trust chain PhantomEnigma is exploiting — whether or not that organization is the intended target.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                If you operate in or alongside this ecosystem:
              </p>
              
              <ul style={{ paddingLeft: "20px", color: "#c8c8c0", fontFamily: S.serif, fontSize: "15px", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                <li>
                  <strong style={{ color: S.white }}>Don't treat .gov.br (or any government) sender/domain as an automatic pass</strong> — apply the same behavioral scrutiny to authenticated, "trusted" mail as to unknown senders, especially for documents styled as legal or police notices.
                </li>
                <li>
                  <strong style={{ color: S.white }}>Watch for installers that modify or patch already-installed legitimate applications</strong> rather than dropping obviously new binaries — this is the specific technique used to smuggle the backdoor past signature-based tools.
                </li>
                <li>
                  <strong style={{ color: S.white }}>Give employees a fast, low-friction way to flag an official-looking message that felt off</strong>, and make sure someone actually investigates flagged messages beyond a quick "looks fine" pass.
                </li>
                <li>
                  <strong style={{ color: S.white }}>Monitor for anomalous outbound beaconing</strong> rather than relying solely on domain or IP blocklists, if your organization has any dependency — vendor, integration, or user base — that touches Brazilian government portals, since PhantomEnigma's C2 infrastructure rotates.
                </li>
              </ul>
            </div>

            {/* Section 6: Sources */}
            <div style={{ borderTop: `1px solid ${S.line}`, paddingTop: "24px", marginTop: "20px" }}>
              <h2 style={{ fontFamily: S.sans, fontSize: "14px", fontWeight: 800, color: "#e04a3f", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "10px" }}>
                Sources
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "14px", color: S.gray, lineHeight: 1.7, margin: 0 }}>
                This piece draws on the July 2026 ANY.RUN PhantomEnigma investigation as reported by The Hacker News, Positive Technologies' 2025 "Operation Phantom Enigma" research, and coverage from Recorded Future News and other outlets tracking the broader 2025–2026 wave of malware campaigns targeting Brazil. Figures and infrastructure details attributed to a single research vendor are marked as such above and should be read accordingly until independently corroborated.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "14px", color: S.gray, lineHeight: 1.7, marginTop: "14px", marginBottom: 0 }}>
                <em>If you have documented, source-linked information about a data exposure or malware campaign not covered here — particularly one affecting the regions LeakLens focuses on — <button onClick={() => window.location.href = "/database"} style={{ background: "none", border: "none", color: "#e04a3f", cursor: "pointer", textDecoration: "underline", padding: 0, font: "inherit" }}>submit it through our registry</button>.</em>
              </p>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
