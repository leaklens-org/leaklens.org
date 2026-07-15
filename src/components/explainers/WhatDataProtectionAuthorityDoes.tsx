import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ShieldAlert, FileText, BarChart3, AlertCircle } from "lucide-react";

interface WhatDataProtectionAuthorityDoesProps {
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

export default function WhatDataProtectionAuthorityDoes({ S, onBack }: WhatDataProtectionAuthorityDoesProps) {
  // Simple fake grid data for background decoration
  const gridNodes = [
    { x: 30, y: 40, status: "active" },
    { x: 60, y: 80, status: "active" },
    { x: 120, y: 110, status: "warning" },
    { x: 180, y: 50, status: "active" },
    { x: 220, y: 150, status: "critical" },
    { x: 280, y: 90, status: "active" },
    { x: 340, y: 130, status: "warning" }
  ];

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
            background: `radial-gradient(ellipse 900px 500px at 20% 50%, rgba(214,162,76,0.12), transparent 60%), linear-gradient(180deg, #0e0e0c 0%, #050505 100%)`
          }}
        />

        {/* Tech Grid Visual */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.25,
            pointerEvents: "none"
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 400 200">
            {/* Grid Lines */}
            <path d="M 0,50 L 400,50 M 0,100 L 400,100 M 0,150 L 400,150 M 100,0 L 100,200 M 200,0 L 200,200 M 300,0 L 300,200" fill="none" stroke="#222" strokeWidth="0.5" strokeDasharray="4,4" />

            {/* Regulatory Hub Connections */}
            <path d="M 30,40 L 120,110 L 220,150 L 280,90 M 180,50 L 120,110 L 60,80" fill="none" stroke="#333" strokeWidth="1" />
            <path d="M 280,90 L 340,130" fill="none" stroke="#d6a24c" strokeWidth="1" strokeDasharray="2,2" />

            {/* Nodes */}
            {gridNodes.map((node, idx) => (
              <g key={idx} transform={`translate(${node.x}, ${node.y})`}>
                <circle r="3" fill={node.status === "critical" ? "#e04a3f" : node.status === "warning" ? "#c9a15c" : "#4a9d6e"} />
                {node.status === "critical" && (
                  <circle r="6" fill="none" stroke="#e04a3f" strokeWidth="1" opacity="0.6">
                    <animate attributeName="r" values="3;9;3" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            ))}
          </svg>
        </div>

        {/* Scrim Overlays */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(5,5,5,0.96) 0%, rgba(5,5,5,0.85) 45%, rgba(5,5,5,0.4) 75%, rgba(5,5,5,0.85) 100%)"
          }}
        />

        {/* Golden top rule */}
        <div style={{ width: "100%", height: "3px", background: "#c9a15c", position: "absolute", top: 0, left: 0 }} />

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
            <div style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "3px", color: "#c9a15c", marginBottom: "20px", fontFamily: S.sans }}>
              LEAKLENS EXPLAINER · JULY 2026
            </div>
            <h1
              style={{
                fontFamily: S.serif,
                fontSize: "46px",
                fontWeight: 700,
                color: "#f2f0eb",
                lineHeight: 1.15,
                maxWidth: "800px",
                margin: 0
              }}
            >
              What a Data Protection Authority Actually Does<br />
              <span style={{ fontWeight: 400, color: "#a8a8a0", fontSize: "32px" }}>— And What Happens Without One</span>
            </h1>
            <div style={{ display: "flex", gap: "48px", marginTop: "32px" }}>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 800, color: "#c9a15c", fontFamily: S.sans }}>€7.1B+</div>
                <div style={{ fontSize: "11px", color: "#9a968a", letterSpacing: "1px", marginTop: "2px", fontFamily: S.sans, textTransform: "uppercase" }}>
                  GDPR FINES ISSUED SINCE 2018
                </div>
              </div>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 800, color: "#c9a15c", fontFamily: S.sans }}>443 / day</div>
                <div style={{ fontSize: "11px", color: "#9a968a", letterSpacing: "1px", marginTop: "2px", fontFamily: S.sans, textTransform: "uppercase" }}>
                  AVG DATA BREACH REPORTS
                </div>
              </div>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 800, color: "#c9a15c", fontFamily: S.sans }}>27</div>
                <div style={{ fontSize: "11px", color: "#9a968a", letterSpacing: "1px", marginTop: "2px", fontFamily: S.sans, textTransform: "uppercase" }}>
                  EU MEMBER STATE COORDINATION
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 0, marginTop: "10px" }}>
              {[
                { name: "GDPR Enacted", year: "2018" },
                { name: "Amazon Fine (€746M)", year: "2021" },
                { name: "Meta Fine (€1.2B)", year: "2023" },
                { name: "TikTok Fine (€530M)", year: "2025" },
                { name: "Transparency Wave", year: "2026", now: true }
              ].map((item, idx, arr) => (
                <React.Fragment key={idx}>
                  <div style={{ textAlign: "center", fontSize: "12px" }}>
                    <div style={{ fontFamily: S.serif, fontStyle: "italic", color: "#c9c5b8", marginBottom: "4px", fontSize: "13px" }}>
                      {item.name}
                    </div>
                    <div style={{ color: item.now ? "#c9a15c" : "#8a8574", fontWeight: 600, fontFamily: S.sans }}>
                      {item.year}
                    </div>
                  </div>
                  {idx < arr.length - 1 && (
                    <div style={{ flex: 1, height: "1px", background: "#3a3730", margin: "0 8px" }} />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div style={{ display: "flex", justifycontent: "space-between", justifyContent: "space-between", alignItems: "flex-end", fontSize: "13px", color: "#7a7669", marginTop: "18px", fontFamily: S.sans }}>
              <span>Sourced from DLA Piper, CMS GDPR Tracker, EDPB Reports, enforcementtracker.com</span>
              <span style={{ color: "#c9a15c", fontWeight: 700, letterSpacing: "1px" }}>LEAKLENS.ORG</span>
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
            <h2 style={{ fontFamily: S.sans, fontSize: "12px", color: S.coral, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Why we're starting here
            </h2>
            <p style={{ fontFamily: S.serif, fontSize: "18px", color: S.white, lineHeight: 1.8, margin: 0, fontStyle: "normal" }}>
              This is not an article about a specific breach. It's about the institution that, in most of the world, is supposed to respond when a breach happens — and what the absence of that institution actually looks like in practice, not in theory.
            </p>
            <p style={{ fontFamily: S.serif, fontSize: "16px", color: S.gray, lineHeight: 1.8, marginTop: "16px", marginBottom: 0 }}>
              LeakLens exists because that institution doesn't operate in every jurisdiction. To explain why that gap matters, it's worth looking concretely at what a functioning data protection authority does when it works as designed — using the European Union's GDPR enforcement record, the most extensively documented example in the world — and then asking what happens to the same categories of violation when no equivalent body exists to act on them.
            </p>
          </div>

          {/* Article Text Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

            {/* Section 1: GDPR numbers */}
            <div style={{ position: "relative" }}>

              {/* Evidence Card 1: GDPR Fine Leaderboard (Left Side) */}
              <div className="evidence-board-pin" style={{
                position: "absolute",
                left: "-250px",
                top: "10px",
                width: "210px",
                background: "#111111",
                border: "1px solid #2e2d2a",
                borderTop: `3px solid ${S.coral}`,
                padding: "14px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.7)",
                color: "#c8c8c0",
                zIndex: 5,
                fontFamily: "monospace",
                fontSize: "10px",
                lineHeight: 1.4
              }}>
                {/* Horizontal dotted connector to main border */}
                <div style={{
                  position: "absolute",
                  right: "-40px",
                  top: "24px",
                  width: "40px",
                  height: "0",
                  borderTop: `1px dashed ${S.coral}`,
                  opacity: 0.45,
                  pointerEvents: "none"
                }} />

                <div style={{ display: "flex", justifyContent: "space-between", color: "#666", fontSize: "8px", fontWeight: "bold", borderBottom: "1px solid #222", paddingBottom: "6px", marginBottom: "8px" }}>
                  <span>METRIC: FINES</span>
                  <span>RECORD_INDEX // GDPR</span>
                </div>

                <div style={{ fontWeight: "bold", color: S.white, fontSize: "11px", marginBottom: "8px" }}>
                  LARGEST GDPR PENALTIES
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {/* Meta */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", marginBottom: "2px" }}>
                      <span style={{ color: S.white }}>META (2023)</span>
                      <span style={{ color: S.coral }}>€1.20B</span>
                    </div>
                    <div style={{ height: "4px", background: "#222", borderRadius: "1px", overflow: "hidden" }}>
                      <div style={{ width: "100%", height: "100%", background: S.coral }} />
                    </div>
                  </div>

                  {/* Amazon */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", marginBottom: "2px" }}>
                      <span style={{ color: S.white }}>AMAZON (2021)</span>
                      <span style={{ color: "#8a8574" }}>€746M*</span>
                    </div>
                    <div style={{ height: "4px", background: "#222", borderRadius: "1px", overflow: "hidden" }}>
                      <div style={{ width: "62%", height: "100%", background: "#666" }} />
                    </div>
                  </div>

                  {/* TikTok */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", marginBottom: "2px" }}>
                      <span style={{ color: S.white }}>TIKTOK (2025)</span>
                      <span style={{ color: S.coral }}>€530M</span>
                    </div>
                    <div style={{ height: "4px", background: "#222", borderRadius: "1px", overflow: "hidden" }}>
                      <div style={{ width: "44%", height: "100%", background: S.coral }} />
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "12px", fontSize: "8px", color: "#666", lineHeight: 1.2 }}>
                  *Annulled in court (March 2026), returned for reassessment.
                </div>
              </div>

              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: S.coral, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                What GDPR enforcement actually looks like, in numbers
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Since the regulation took effect in May 2018, EU and EEA data protection authorities have issued more than €7.1 billion in cumulative fines, across upward of 2,800 individual enforcement actions, according to the DLA Piper GDPR Fines and Data Breach Survey and the CMS GDPR Enforcement Tracker. Roughly €1.2 billion of that was issued in 2025 alone — matching the prior year and reversing what had briefly looked like a cooling trend.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                The headline numbers get the attention: Meta's €1.2 billion fine (2023, unlawful US data transfers) remains the largest ever issued; TikTok's €530 million penalty (May 2025, unlawful transfers to China) is the second-largest of 2025; Amazon's €746 million fine (2021, ad-targeting consent) was later annulled on procedural grounds in March 2026, though the court upheld the underlying violations and sent the case back for reassessment.
              </p>
            </div>

            {/* Section 1 part 2 */}
            <div style={{ position: "relative" }}>
              {/* Evidence Card 2: 443 Breach Notification Pipeline (Right Side) */}
              <div className="evidence-board-pin" style={{
                position: "absolute",
                right: "-250px",
                top: "10px",
                width: "210px",
                background: "#0c0d0e",
                border: "1px solid #22252a",
                borderLeft: "3px solid #e04a3f",
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
                  borderTop: "1px dashed #e04a3f",
                  opacity: 0.45,
                  pointerEvents: "none"
                }} />

                <div style={{ display: "flex", justifyContent: "space-between", color: "#54606e", fontSize: "8px", fontWeight: "bold", borderBottom: "1px solid #1c2024", paddingBottom: "6px", marginBottom: "8px" }}>
                  <span>MONITOR ACTIVE</span>
                  <span>BREACH_LOG // EDPB</span>
                </div>

                <div style={{ fontWeight: "bold", color: "#e04a3f", fontSize: "10px", marginBottom: "4px", letterSpacing: "0.5px" }}>
                  INCOMING PIPELINE: 443 / DAY
                </div>

                {/* SVG Pulse graph representing notifications */}
                <div style={{ background: "#060708", height: "35px", margin: "8px 0", border: "1px solid #1c2024", position: "relative", overflow: "hidden" }}>
                  <svg width="100%" height="100%" viewBox="0 0 100 35">
                    <path d="M 0,25 Q 10,25 20,25 T 30,25 T 40,5 T 45,30 T 50,22 T 60,25 T 80,25 T 90,5 T 100,25" fill="none" stroke="#e04a3f" strokeWidth="1" />
                    <text x="5" y="10" fill="#54606e" fontSize="6">22% YoY INCREASE</text>
                  </svg>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "2px", fontSize: "8px", color: "#8e9ba8" }}>
                  <div>[08:14] DPC (IRL): Notified (70K accounts)</div>
                  <div>[11:03] AEPD (ESP): Notified (2.2M logs)</div>
                  <div>[14:50] CNIL (FRA): Notified (300K accounts)</div>
                </div>
              </div>

              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                But the more operationally important number may be this one: European data protection authorities now receive an average of <strong style={{ color: S.white }}>443 personal data breach notifications per day</strong> — up 22% year-over-year, the first time daily reports have exceeded 400 since the regulation came into force. That is not 443 fines. It is 443 legally mandated disclosures, arriving daily, that a regulator is required to receive, log, and potentially act on.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                <strong style={{ color: S.white }}>Enforcement isn't limited to Big Tech, and the fine total isn't the whole story.</strong> Ireland's Data Protection Commission holds the largest cumulative total (€4.04 billion) largely because it serves as lead regulator for Meta, Google, TikTok, and other firms headquartered in Dublin. But Spain has issued the most individual fines by count — nearly 1,000 since 2018 — spread across sectors far beyond tech: a €6.2 million fine against a Spanish bank, an €870,000 penalty in Poland for failing to report a breach at all, a €5 million fine in Italy against a utility provider for using outdated data and ignoring data subject requests. Healthcare, telecommunications, energy, and financial services organizations are now routinely investigated and fined — not just platforms with billions of users.
              </p>
            </div>

            {/* Section 2: Forced structural change */}
            <div>
              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: S.coral, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                What the fine number doesn't capture: forced structural change
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Compliance lawyers who track this space point out that the headline fine is often the least consequential part of an enforcement action. Companies frequently appeal the amount — but they almost always implement the corrective order that comes with it, because the order takes effect immediately while the appeal grinds through years of litigation. Meta had to localize EU data processing infrastructure following its transfer violations. TikTok had to redesign its data-access controls for European users. LinkedIn rewrote its consent flows within three months of a DPC ruling on behavioral advertising.
              </p>
              <div style={{
                borderLeft: `4px solid ${S.coral}`,
                paddingLeft: "24px",
                margin: "32px 0 24px",
                fontFamily: S.serif,
                fontSize: "22px",
                fontWeight: 400,
                lineHeight: 1.45,
                color: S.white,
                fontStyle: "italic"
              }}>
                "Compliance lawyers who track this space point out that the headline fine is often the least consequential part of an enforcement action."
              </div>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                This is the part a fine total, by itself, doesn't show: a functioning regulator doesn't just extract money after the fact. It has the standing authority to compel a company to change how it actually handles data — on a timeline the company doesn't control.
              </p>
            </div>

            {/* Section 3: Legal machinery */}
            <div style={{ position: "relative" }}>
              {/* Evidence Card 3: GDPR Article 83 Matrix (Left Side) */}
              <div className="evidence-board-pin" style={{
                position: "absolute",
                left: "-250px",
                top: "10px",
                width: "210px",
                background: "#111111",
                border: "1px solid #2e2d2a",
                borderTop: "3px solid #7a7669",
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
                  borderTop: "1px dashed #7a7669",
                  opacity: 0.45,
                  pointerEvents: "none"
                }} />

                <div style={{ display: "flex", justifyContent: "space-between", color: "#666", fontSize: "8px", fontWeight: "bold", borderBottom: "1px solid #222", paddingBottom: "6px", marginBottom: "8px" }}>
                  <span>STATUTORY LIMITS</span>
                  <span>REGULATION // ART_83</span>
                </div>

                <div style={{ fontWeight: "bold", color: S.white, fontSize: "10px", marginBottom: "8px" }}>
                  PENALTY STRUCTURES
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ borderBottom: "1px solid #222", paddingBottom: "4px" }}>
                    <div style={{ color: S.coral, fontWeight: "bold", fontSize: "8.5px" }}>TIER 1 // PROCEDURAL</div>
                    <div style={{ color: "#aaa" }}>Up to €10M or 2% turnover</div>
                    <div style={{ color: "#666", fontSize: "7.5px" }}>Missing notifications, no DPO</div>
                  </div>
                  <div>
                    <div style={{ color: S.coral, fontWeight: "bold", fontSize: "8.5px" }}>TIER 2 // SUBSTANTIVE</div>
                    <div style={{ color: "#aaa" }}>Up to €20M or 4% turnover</div>
                    <div style={{ color: "#666", fontSize: "7.5px" }}>Consent violations, data transfers</div>
                  </div>
                </div>
              </div>

              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: S.coral, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                The legal machinery behind this
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                None of this happens informally. GDPR Article 83 sets a two-tier penalty structure — up to €10 million or 2% of global turnover for procedural failures (missing breach notifications, inadequate impact assessments, lack of a data protection officer), and up to €20 million or 4% of global turnover for substantive violations (unlawful processing, invalid consent, unauthorized international transfers). Article 83(2) then requires regulators to weigh specific factors before setting an amount: the nature and duration of the infringement, whether it was intentional, what the organization did to mitigate harm, and its degree of cooperation with the investigation.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                The mechanism that makes this enforceable across 27 countries is coordination: the European Data Protection Board runs a Coordinated Enforcement Framework that synchronizes national authorities around shared priorities — in 2026, the focus is GDPR transparency obligations (Articles 12–14), with regulators jointly testing whether companies' privacy disclosures are actually clear and accurate, not just technically present.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                <strong>The point isn't that this system is perfect.</strong> Ireland's dominant share of total fine value reflects a structural quirk of where Big Tech chooses to headquarter, not necessarily where the worst violations occur. Appeals can take years, and a handful of major fines (Amazon's €746 million, a €15 million OpenAI penalty) have been annulled on procedural grounds in 2026, even where the underlying violation was upheld. The system is slow, contested, and unevenly resourced across member states.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                The point is that it exists, that it has statutory teeth, and that a resident of an EU country whose data is mishandled has a specific, named body to file a complaint with — one that received 443 such complaints a day in the past year, and has a 7-year track record of turning a meaningful fraction of them into enforcement actions with real operational consequences.
              </p>
            </div>

            {/* Section 4: What is missing */}
            <div style={{ position: "relative" }}>
              {/* Evidence Card 4: Gap Analysis Matrix (Right Side) */}
              <div className="evidence-board-pin" style={{
                position: "absolute",
                right: "-250px",
                top: "30px",
                width: "210px",
                background: "#121212",
                border: "1px solid #2e2d2a",
                borderLeft: `3px solid ${S.coral}`,
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
                  borderTop: `1px dashed ${S.coral}`,
                  opacity: 0.45,
                  pointerEvents: "none"
                }} />

                <div style={{ display: "flex", justifyContent: "space-between", color: "#666", fontSize: "8px", fontWeight: "bold", borderBottom: "1px solid #222", paddingBottom: "6px", marginBottom: "8px" }}>
                  <span>GAP ANALYSIS</span>
                  <span>UNREGULATED // SYS</span>
                </div>

                <div style={{ fontWeight: "bold", color: S.coral, fontSize: "10px", marginBottom: "8px" }}>
                  REGULATORY ABSENCE MATRIX
                </div>

                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "8.5px", color: "#aaa" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid #333", color: "#666" }}>
                      <th style={{ textAlign: "left", paddingBottom: "4px" }}>FUNCTION</th>
                      <th style={{ textAlign: "right", paddingBottom: "4px" }}>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #222" }}>
                      <td style={{ padding: "5px 0", color: S.white }}>MANDATORY NOTICE</td>
                      <td style={{ textAlign: "right", color: "#e04a3f" }}>ABSENT [✖]</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #222" }}>
                      <td style={{ padding: "5px 0", color: S.white }}>STATUTORY COST</td>
                      <td style={{ textAlign: "right", color: "#e04a3f" }}>ABSENT [✖]</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #222" }}>
                      <td style={{ padding: "5px 0", color: S.white }}>COMPLAINT PIPELINE</td>
                      <td style={{ textAlign: "right", color: "#e04a3f" }}>ABSENT [✖]</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "5px 0", color: S.white }}>SUBSTITUTE CHANNEL</td>
                      <td style={{ textAlign: "right", color: "#4a9d6e" }}>PUBLICITY [✔]</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: S.coral, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                What's actually missing where no such authority exists
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                This is the structural comparison that matters. In a jurisdiction without an independent data protection authority, the individual pieces of the GDPR system don't have partial equivalents — they simply don't exist:
              </p>
              <ul style={{ paddingLeft: "20px", color: "#c8c8c0", fontFamily: S.serif, fontSize: "15px", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                <li><strong style={{ color: S.white }}>No mandatory breach notification requirement</strong> — meaning no external body is legally guaranteed to even learn that an incident happened, let alone act on it, unless the affected organization chooses to disclose voluntarily.</li>
                <li><strong style={{ color: S.white }}>No statutory fine structure</strong> — meaning there is no calculable cost, in advance, for mishandling data. Article 83's two-tier system creates a predictable, escalating consequence; without it, the cost of a violation is whatever reputational or ad hoc pressure the situation happens to generate.</li>
                <li><strong style={{ color: S.white }}>No complaint mechanism</strong> — a resident with a legitimate grievance about how an organization used their data has no statutory body to file that complaint with, no equivalent of the 443-a-day pipeline that at least guarantees the complaint is logged somewhere with legal weight attached.</li>
                <li><strong style={{ color: S.white }}>No corrective-order authority</strong> — even where a violation becomes public and undeniable, there is no body with the standing power to compel the organization to change its practices on a fixed timeline, the way GDPR orders forced Meta, TikTok, and LinkedIn to restructure specific systems.</li>
              </ul>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                <strong style={{ color: S.white }}>What replaces this, in practice, is publicity.</strong> Investigative journalism, civil society documentation, and public pressure become the only functioning substitute for the missing regulatory pipeline — not because they're an equivalent, but because they're what's left. This is the specific gap LeakLens is built to partially fill: not the fine, not the corrective order, not the legal complaint mechanism — those require an authority with statutory power, which a documentation project cannot substitute for — but the first step that everything else depends on: making the exposure visible and verifiable in the first place.
              </p>
            </div>

            {/* Section 5: Why this comparison */}
            <div>
              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: S.coral, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                Why this comparison, and not a simpler one
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                It would be easier to write this as "Europe good, everywhere else bad." That's not the claim here, and it wouldn't survive scrutiny — GDPR enforcement itself is uneven, slow on appeal, and concentrated in ways that reflect corporate headquarters locations more than violation severity. Nineteen US states now have their own comprehensive privacy laws as of January 2026, with no comprehensive federal equivalent — meaning the "no authority" condition described above is not a binary that only applies outside wealthy democracies; it can exist in pockets even within them, for residents of the other 31 states.
              </p>
              <div style={{
                borderLeft: `4px solid ${S.coral}`,
                paddingLeft: "24px",
                margin: "32px 0 24px",
                fontFamily: S.serif,
                fontSize: "22px",
                fontWeight: 400,
                lineHeight: 1.45,
                color: S.white,
                fontStyle: "italic"
              }}>
                "A functioning regulator doesn't just extract money after the fact. It has the standing authority to compel change."
              </div>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, margin: 0 }}>
                The comparison that matters is narrower and more useful: does a resident, right now, in the specific jurisdiction they live in, have a named, funded, statutory body they can point to — one with the power to investigate, fine, and compel a change? Where the answer is yes, the GDPR record above shows concretely what that body can accomplish, imperfectly but measurably. Where the answer is no, that entire pipeline — notification, complaint, investigation, fine, corrective order — simply has no first step to enter.
              </p>
            </div>

            {/* Section 6 / Sources */}
            <div style={{ borderTop: `1px solid ${S.line}`, paddingTop: "24px", marginTop: "20px" }}>
              <h2 style={{ fontFamily: S.sans, fontSize: "14px", fontWeight: 800, color: S.coral, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "10px" }}>
                Sources
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "14px", color: S.gray, lineHeight: 1.7, margin: 0 }}>
                Figures on GDPR fine totals, enforcement counts, and breach notification volume are drawn from the DLA Piper GDPR Fines and Data Breach Survey (January 2026), the CMS GDPR Enforcement Tracker Report 2025/2026, and the independent GDPR Enforcement Tracker database (enforcementtracker.com), which records individual fines as they are published by national authorities. Specific case details (Meta, TikTok, Amazon, LinkedIn, Google/CNIL) are drawn from public regulatory decisions and corroborating legal-industry reporting cited inline above.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "14px", color: S.gray, lineHeight: 1.7, marginTop: "14px", marginBottom: 0 }}>
                <em>LeakLens documents exposure incidents using the same standard applied throughout this piece: every entry is sourced, dated, and linked to independent reporting — never assembled from unverified claims. <button onClick={() => window.location.href = "/methodology"} style={{ background: "none", border: "none", color: S.coral, cursor: "pointer", textDecoration: "underline", padding: 0, font: "inherit" }}>See our full methodology</button>.</em>
              </p>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
