import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface ShinyHunters2026Props {
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

const rackData = [
  [1, 0, 1, 0, 2, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 2, 0, 1, 0, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 2, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 2, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 2, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 1, 0, 0, 2, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0]
];

export default function ShinyHunters2026({ S, onBack }: ShinyHunters2026Props) {
  React.useEffect(() => {
    const originalTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription ? metaDescription.getAttribute("content") : "";

    document.title = "ShinyHunters: Inside the largest data extortion campaign in history — LeakLens";
    if (metaDescription) {
      metaDescription.setAttribute("content", "Deep-dive into the history, tactics, and telemetry logs of the ShinyHunters extortion campaigns affecting hundreds of millions of records.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Deep-dive into the history, tactics, and telemetry logs of the ShinyHunters extortion campaigns affecting hundreds of millions of records.";
      document.head.appendChild(meta);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    const originalCanonical = canonicalLink.getAttribute("href");
    canonicalLink.setAttribute("rel", "canonical");
    canonicalLink.setAttribute("href", "https://leaklens.org/explainers/shinyhunters-2026");
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

      {/* Feature Cover Block (Matching User Design Cover Layout) */}
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
            background: `radial-gradient(ellipse 900px 500px at 75% 40%, rgba(90,120,160,0.25), transparent 60%), linear-gradient(180deg, #0a0d12 0%, #05070a 100%)`
          }}
        />

        {/* Server Racks */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "flex-end",
            gap: "22px",
            paddingRight: "40px",
            opacity: 0.85
          }}
        >
          {rackData.map((rack, rIdx) => (
            <div
              key={rIdx}
              style={{
                width: "78px",
                height: "100%",
                background: "linear-gradient(180deg, #14181f 0%, #0c0f14 100%)",
                borderLeft: "1px solid rgba(255,255,255,0.05)",
                borderRight: "1px solid rgba(0,0,0,0.4)",
                display: "flex",
                flexDirection: "column",
                padding: "40px 8px",
                gap: "5px"
              }}
            >
              {rack.map((unit, uIdx) => (
                <div
                  key={uIdx}
                  style={{
                    height: "7px",
                    background: "rgba(60,68,78,0.6)",
                    borderRadius: "1px",
                    position: "relative"
                  }}
                >
                  {unit === 1 && (
                    <span
                      style={{
                        position: "absolute", right: "6px", top: "50%", transform: "translateY(-50%)",
                        width: "3px", height: "3px", borderRadius: "50%",
                        background: "#4a9d6e", boxShadow: "0 0 4px #4a9d6e"
                      }}
                    />
                  )}
                  {unit === 2 && (
                    <span
                      style={{
                        position: "absolute", right: "6px", top: "50%", transform: "translateY(-50%)",
                        width: "3px", height: "3px", borderRadius: "50%",
                        background: "#c9a15c", boxShadow: "0 0 4px #c9a15c"
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Scrim Overlays */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(5,6,8,0.97) 0%, rgba(5,6,8,0.88) 38%, rgba(5,6,8,0.35) 62%, rgba(5,6,8,0.75) 100%)"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.65) 100%)"
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
                fontSize: "48px",
                fontWeight: 700,
                color: "#f2f0eb",
                lineHeight: 1.1,
                maxWidth: "760px",
                margin: 0
              }}
            >
              ShinyHunters:<br />
              <span style={{ fontWeight: 400, color: "#d8d4c8" }}>Inside the largest data<br />extortion campaign in history</span>
            </h1>
            <div style={{ display: "flex", gap: "48px", marginTop: "28px" }}>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 800, color: "#c9a15c", fontFamily: S.sans }}>40+</div>
                <div style={{ fontSize: "11px", color: "#9a968a", letterSpacing: "1px", marginTop: "2px", fontFamily: S.sans, textTransform: "uppercase" }}>
                  CONFIRMED BREACHES, 2026
                </div>
              </div>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 800, color: "#c9a15c", fontFamily: S.sans }}>400M+</div>
                <div style={{ fontSize: "11px", color: "#9a968a", letterSpacing: "1px", marginTop: "2px", fontFamily: S.sans, textTransform: "uppercase" }}>
                  RECORDS THIS YEAR ALONE
                </div>
              </div>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 800, color: "#c9a15c", fontFamily: S.sans }}>2019</div>
                <div style={{ fontSize: "11px", color: "#9a968a", letterSpacing: "1px", marginTop: "2px", fontFamily: S.sans, textTransform: "uppercase" }}>
                  ACTIVE SINCE
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 0, marginTop: "10px" }}>
              {[
                { name: "Tokopedia", year: "2020" },
                { name: "ADT", year: "2021" },
                { name: "BreachForums", year: "2023" },
                { name: "Salesforce wave", year: "2025" },
                { name: "PeopleSoft 0-day", year: "2026", now: true }
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: "13px", color: "#7a7669", marginTop: "18px", fontFamily: S.sans }}>
              <span>Sourced from Oracle, Mandiant, BleepingComputer, SecurityWeek, Wikipedia</span>
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
              The scale, in one paragraph
            </h2>
            <p style={{ fontFamily: S.serif, fontSize: "18px", color: S.white, lineHeight: 1.8, margin: 0, fontStyle: "normal" }}>
              Since May 2020, a group operating under the name ShinyHunters has been tied to data theft affecting several hundred million individual records across hundreds of organizations. In 2026 alone, the group has claimed over 40 breaches, with security researchers estimating more than 400 million records taken in this year's campaign — on top of roughly 1.8 billion records claimed across the group's history since 2019. For context: the entire population of the United States is roughly 330 million. This is not a single hack. It is the most sustained data-extortion operation on record, and it is still running.
            </p>
            <p style={{ fontFamily: S.serif, fontSize: "16px", color: S.gray, lineHeight: 1.8, marginTop: "16px", marginBottom: 0 }}>
              This piece lays out what is independently confirmed, what is claimed but disputed, and how the group actually gets in — because the "how" is the part that matters if you want to understand your own exposure.
            </p>
          </div>

          {/* Article Text Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {/* Section 1 */}
            <div style={{ position: "relative" }}>
              {/* Evidence Card 1: DECLASSIFIED DOSSIER (Left Side) */}
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
                  <span>CLASSIFICATION: CONFIDENTIAL</span>
                  <span>US-2022-SH-09</span>
                </div>
                
                <div style={{ fontWeight: "bold", color: S.white, fontSize: "11px", marginBottom: "4px" }}>
                  INTELLIGENCE BRIEF
                </div>
                
                {/* SVG Barcode */}
                <svg width="100%" height="20" style={{ margin: "8px 0", opacity: 0.5 }}>
                  {[2, 8, 14, 18, 22, 28, 34, 38, 44, 48, 54, 60, 66, 72, 76, 82, 88, 94, 100, 106, 112, 118, 124, 130, 134, 140, 146, 152].map((x, idx) => (
                    <line key={idx} x1={x} y1="0" x2={x} y2="20" stroke="#c8c8c0" strokeWidth={idx % 3 === 0 ? "3" : idx % 2 === 0 ? "1" : "2"} />
                  ))}
                </svg>

                <div style={{ display: "flex", flexDirection: "column", gap: "3px", fontSize: "9px" }}>
                  <div><span style={{ color: "#666" }}>CASE:</span> <span style={{ color: S.white }}>EXTRADITION / FRA</span></div>
                  <div><span style={{ color: "#666" }}>DEFENDANT:</span> S. RAOULT</div>
                  <div><span style={{ color: "#666" }}>SENTENCE:</span> 36 MONTHS PRISON</div>
                  <div style={{ marginTop: "4px", color: "#4a9d6e", fontWeight: "bold" }}>STATUS: DECLASSIFIED</div>
                </div>
              </div>

              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: S.coral, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                Origins: 2019–2021
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                ShinyHunters first appeared publicly in May 2020, though researchers trace its origins to 2019. Within two weeks of surfacing, the group had offered more than 200 million stolen user records for sale on dark web marketplaces. The name is believed to come from "Shiny Pokémon" — a rare color variant in the Pokémon games that dedicated players ("shiny hunters") spend hours searching for.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                The group's first confirmed target was Mathway, a math app used largely by students, breached in January 2020 with roughly 25 million records taken. Weeks later came the breach that put ShinyHunters on the map: <strong style={{ color: S.white }}>Tokopedia</strong>, Indonesia's largest e-commerce platform, with 91 million user accounts exposed — names, emails, phone numbers, hashed passwords, and location data. The same period saw claims against <strong style={{ color: S.white }}>Unacademy</strong> (India, ~22 million records) and an alleged breach of Microsoft's private GitHub repositories, from which the group leaked roughly 1GB of a claimed 500GB haul as proof.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Through mid-2020, in what the group itself labeled "Stage 1" and "Stage 2," ShinyHunters dumped databases from more than a dozen companies — Zoosk (30 million), HomeChef (8 million), Wattpad (270 million), Chatbooks, Minted, Havenly, and others — eventually releasing data from 18 companies (roughly 386 million records) for free, a move researchers believe was intended to build reputation among cybercrime forums.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                By 2021, the group had shifted toward larger, higher-value targets: AT&T (70 million wireless subscribers' data first offered for sale in 2021; AT&T did not publicly acknowledge the breach until 2024, and separately confirmed a further breach affecting 110 million customers in 2024), Bonobos, Nitro PDF (77 million), and Pixlr (1.9 million).
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
                "This is not a single hack. It is the most sustained data-extortion operation on record, and it is still running."
              </div>
              <p style={{ fontFamily: S.serif, fontSize: "14px", color: S.gray, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
                <strong>What's confirmed vs. disputed:</strong> Most of the company names above are independently corroborated by the affected organizations, breach-notification filings, or named cybersecurity outlets (BleepingComputer, Wired, TechCrunch). Exact record counts, however, routinely come from the group's own claims and are not always independently verified by the victim organization — this pattern holds throughout the group's history and is flagged below wherever it applies.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: S.coral, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                Law enforcement pressure — and no real disruption
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                In May 2022, French national <strong style={{ color: S.white }}>Sébastien Raoult</strong>, believed to be a core ShinyHunters member, was arrested in Morocco and extradited to the United States. In January 2024 he was sentenced to three years in prison and ordered to pay over $5 million in restitution; prosecutors linked him to the sale of stolen data from more than 60 companies. In 2025, additional arrests followed — a Massachusetts college student pled guilty to extortion tied to the group's PowerSchool breach, and French authorities confirmed further arrests connected to BreachForums administration.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, margin: 0 }}>
                None of this stopped the operation. Researchers note that arresting individual members of a decentralized network has limited effect — new operators simply continue under the same brand name. There is active, unresolved debate among security researchers about whether "ShinyHunters" today refers to a consistent group or a loosely affiliated set of actors using the name for the leverage it carries.
              </p>
            </div>

            {/* Section 3 */}
            <div style={{ position: "relative" }}>
              {/* Evidence Card 2: RESTRICTED OAUTH TELEMETRY (Right Side) */}
              <div className="evidence-board-pin" style={{
                position: "absolute",
                right: "-250px",
                top: "30px",
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
                  <span>RESTRICTED ACCESS</span>
                  <span>OAUTH_LOG // 0x489F</span>
                </div>

                <div style={{ fontWeight: "bold", color: "#e04a3f", fontSize: "10px", marginBottom: "6px", letterSpacing: "0.5px" }}>
                  TELEMETRY DETECTED
                </div>

                {/* Simulated JSON log with syntax coloring */}
                <div style={{ background: "#060708", padding: "8px", borderRadius: "3px", fontSize: "8.5px", color: "#c8c8c0" }}>
                  {"{"}
                  <div style={{ paddingLeft: "8px" }}>
                    <span style={{ color: "#c9a15c" }}>"client_id"</span>: <span style={{ color: "#4a9d6e" }}>"salesforce_fake"</span>,
                  </div>
                  <div style={{ paddingLeft: "8px" }}>
                    <span style={{ color: "#c9a15c" }}>"grant_type"</span>: <span style={{ color: "#4a9d6e" }}>"refresh_token"</span>,
                  </div>
                  <div style={{ paddingLeft: "8px" }}>
                    <span style={{ color: "#c9a15c" }}>"mfa_bypass"</span>: <span style={{ color: "#e04a3f" }}>true</span>,
                  </div>
                  <div style={{ paddingLeft: "8px" }}>
                    <span style={{ color: "#c9a15c" }}>"scope"</span>: [<span style={{ color: "#4a9d6e" }}>"api"</span>, <span style={{ color: "#4a9d6e" }}>"read_all"</span>]
                  </div>
                  {"}"}
                </div>

                <div style={{ marginTop: "8px", fontSize: "8px", color: "#54606e", textAlign: "right" }}>
                  TARGET SYSTEM: SALESFORCE REST
                </div>
              </div>

              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: S.coral, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                The 2025–2026 pivot: from database dumps to social engineering
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                The defining shift in ShinyHunters' operations came in 2025: the group moved away from exploiting technical vulnerabilities and toward <strong style={{ color: S.white }}>voice phishing (vishing)</strong> — phone calls, not malware.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Google's Threat Intelligence Group and Mandiant documented the pattern in detail. It works like this:
              </p>
              <ol style={{ paddingLeft: "20px", color: "#c8c8c0", fontFamily: S.serif, fontSize: "15px", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                <li>An attacker calls a company's help desk or an employee, posing as internal IT support.</li>
                <li>The employee is talked through approving a malicious "connected app" inside Salesforce — often disguised with a name like "My Ticket Portal" or a fake Data Loader tool.</li>
                <li>That approval grants the attacker a persistent OAuth access token — which bypasses multi-factor authentication entirely, because MFA was already satisfied when the employee logged in normally.</li>
                <li>The attacker uses Salesforce's own REST APIs to run bulk queries, exfiltrating customer records at scale, deliberately throttled to blend in with normal traffic.</li>
                <li>Weeks later — not immediately — a ransom demand arrives, typically $400,000 to $2.3 million, with a sample of stolen data as proof and a countdown before public release.</li>
              </ol>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Google's own assessment is blunt: <em>"This activity is not the result of a security vulnerability in vendors' products or infrastructure. Instead, it continues to highlight the effectiveness of social engineering."</em> In plain terms: the software wasn't broken. A person was talked into clicking "approve."
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
                "The software wasn't broken. A person was talked into clicking 'approve.'"
              </div>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, margin: 0 }}>
                A second method emerged alongside vishing: compromising <strong style={{ color: S.white }}>third-party vendors</strong> that already had legitimate OAuth access to a target's Salesforce environment (the Salesloft Drift and Gainsight incidents are the clearest examples), which let ShinyHunters pivot into hundreds of downstream customers through a single vendor compromise — including, reportedly, cybersecurity vendors themselves: Cloudflare, Zscaler, Palo Alto Networks, Proofpoint, and others were named as affected through this vector.
              </p>
            </div>

            {/* Section 4 */}
            <div style={{ position: "relative" }}>
              {/* Evidence Card 3: VECTOR PATHWAY (Left Side) */}
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
                  <span>EXPLOIT VECTOR</span>
                  <span>CVE-2026-35273</span>
                </div>

                <div style={{ fontWeight: "bold", color: S.white, fontSize: "10px", marginBottom: "8px" }}>
                  PEOPLESOFT RCE FLOW
                </div>

                {/* SVG exploit flow chart */}
                <div style={{ background: "#090909", border: "1px solid #222", padding: "6px", borderRadius: "3px", display: "flex", justifyContent: "center" }}>
                  <svg width="170" height="90" viewBox="0 0 170 90">
                    <rect x="5" y="5" width="45" height="18" rx="2" fill="#222" stroke="#444" strokeWidth="1" />
                    <text x="27" y="16" fill="#c8c8c0" fontSize="7" textAnchor="middle" fontFamily="monospace">Attacker</text>
                    
                    <line x1="50" y1="14" x2="115" y2="14" stroke="#e04a3f" strokeWidth="1" strokeDasharray="2,2" />
                    <polygon points="115,14 110,11 110,17" fill="#e04a3f" />
                    <text x="82" y="10" fill="#e04a3f" fontSize="5" textAnchor="middle" fontFamily="monospace">RCE exploit</text>

                    <rect x="115" y="5" width="50" height="18" rx="2" fill="#201111" stroke="#5a2222" strokeWidth="1" />
                    <text x="140" y="16" fill="#e04a3f" fontSize="7" textAnchor="middle" fontFamily="monospace">PeopleSoft</text>

                    <line x1="140" y1="23" x2="140" y2="65" stroke="#c9a15c" strokeWidth="1" />
                    <polygon points="140,65 137,60 143,60" fill="#c9a15c" />
                    <text x="145" y="47" fill="#c9a15c" fontSize="5" textAnchor="start" fontFamily="monospace">Access token</text>

                    <rect x="115" y="65" width="50" height="18" rx="2" fill="#112011" stroke="#225a22" strokeWidth="1" />
                    <text x="140" y="76" fill="#4a9d6e" fontSize="7" textAnchor="middle" fontFamily="monospace">REST API</text>

                    <line x1="115" y1="74" x2="27" y2="74" stroke="#4a9d6e" strokeWidth="1" strokeDasharray="2,2" />
                    <polygon points="27,74 32,71 32,77" fill="#4a9d6e" />
                    <text x="71" y="82" fill="#4a9d6e" fontSize="5" textAnchor="middle" fontFamily="monospace">Data exfil</text>

                    <rect x="5" y="65" width="45" height="18" rx="2" fill="#111" stroke="#333" strokeWidth="1" />
                    <text x="27" y="76" fill="#666" fontSize="7" textAnchor="middle" fontFamily="monospace">Exfil Host</text>
                  </svg>
                </div>
              </div>

              {/* Evidence Card 4: VICTIM REGISTRY LOG (Right Side - further down) */}
              <div className="evidence-board-pin" style={{
                position: "absolute",
                right: "-250px",
                top: "330px",
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
                  <span>REGISTRY DB</span>
                  <span>CAMPAIGN_2026</span>
                </div>

                <div style={{ fontWeight: "bold", color: S.coral, fontSize: "10px", marginBottom: "8px" }}>
                  VICTIM REGISTRY LOG
                </div>

                {/* Monospace registry table */}
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "8px", color: "#aaa" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid #333", color: "#666" }}>
                      <th style={{ textAlign: "left", paddingBottom: "4px" }}>ENTITY</th>
                      <th style={{ textAlign: "center", paddingBottom: "4px" }}>RECORDS</th>
                      <th style={{ textAlign: "right", paddingBottom: "4px" }}>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #222" }}>
                      <td style={{ padding: "4px 0", color: S.white }}>WYNN RESORTS</td>
                      <td style={{ textAlign: "center" }}>800K</td>
                      <td style={{ textAlign: "right", color: "#e04a3f" }}>RANSOM</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #222" }}>
                      <td style={{ padding: "4px 0", color: S.white }}>MATCH GROUP</td>
                      <td style={{ textAlign: "center" }}>10M</td>
                      <td style={{ textAlign: "right", color: "#7a7669" }}>DISPUTE</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #222" }}>
                      <td style={{ padding: "4px 0", color: S.white }}>MEDTRONIC</td>
                      <td style={{ textAlign: "center" }}>3.8M</td>
                      <td style={{ textAlign: "right", color: "#4a9d6e" }}>PAID(EST)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "4px 0", color: S.white }}>COUNCIL EUR</td>
                      <td style={{ textAlign: "center" }}>429K</td>
                      <td style={{ textAlign: "right", color: "#c9a15c" }}>INVESTIG</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: S.coral, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                2026: the Oracle PeopleSoft campaign and the year's largest confirmed incidents
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "20px" }}>
                In June 2026, Google and independent researchers confirmed ShinyHunters had begun exploiting a <strong style={{ color: S.white }}>zero-day vulnerability (CVE-2026-35273)</strong> in Oracle PeopleSoft enterprise software, reportedly affecting more than 100 organizations.
              </p>

              <blockquote style={{ borderLeft: `3px solid ${S.coral}`, paddingLeft: "20px", margin: "0 0 24px 0", fontStyle: "italic" }}>
                <p style={{ fontFamily: S.serif, fontSize: "15px", color: S.white, lineHeight: 1.6, marginBottom: "8px" }}>
                  "This vulnerability is remotely exploitable without authentication. If successfully exploited, this vulnerability may result in remote code execution."
                </p>
                <cite style={{ fontFamily: S.sans, fontSize: "11px", color: S.coral, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 4 }}>
                  Source: <a href="https://www.oracle.com/security-alerts/alert-cve-2026-35273.html" target="_blank" rel="noopener noreferrer" style={{ color: S.coral, textDecoration: "underline", display: "inline-flex", alignItems: "center" }}>
                    Oracle Security Alert Advisory – CVE-2026-35273 <ArrowUpRight size={12} style={{ marginLeft: 2 }} />
                  </a>
                </cite>
              </blockquote>

              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                The confirmed and claimed incidents this year, in rough chronological order:
              </p>
              <ul style={{ paddingLeft: "20px", color: "#c8c8c0", fontFamily: S.serif, fontSize: "15px", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                <li><strong>Wynn Resorts</strong> (February) — ~800,000 records claimed, ~$1.55 million ransom demand, via the PeopleSoft vector.</li>
                <li><strong>Match Group</strong> (Hinge, Match.com, OkCupid — January 27) — ShinyHunters claimed over 10 million records stolen via a vishing attack that compromised an employee's Okta login, pivoting into a third-party marketing dashboard (AppsFlyer). Match Group confirmed a breach but disputed the scale; passwords, financial account numbers, and private in-app messages were not affected, according to the company. A federal class action was ongoing as of this writing.</li>
                <li><strong>Aura</strong> (March) — ~900,000 records claimed.</li>
                <li><strong>European Commission cloud infrastructure and Rockstar Games</strong> (March) — the Rockstar breach reportedly came via a third-party analytics vendor with access into Snowflake, affecting a claimed 78.6 million records.</li>
                <li><strong>ADT</strong> (April) — ~5.5 million records, "pay or leak" model.</li>
                <li><strong>Medtronic</strong> (disclosed April 24, notifications began late June) — 3.8 million individuals confirmed affected; names, contact details, dates of birth, Social Security numbers, and health-related information exposed. ShinyHunters claimed over 9 million records; Medtronic has not confirmed that figure. The data was reportedly removed from ShinyHunters' leak site after the disclosed deadline, which researchers interpret as a sign the ransom was paid — though this has not been confirmed by Medtronic.</li>
                <li><strong>Instructure Canvas LMS</strong> (late April–May) — the platform's login page was reportedly defaced with a ransom note; Instructure is reported to have paid, after which the data was deleted from the leak site.</li>
                <li><strong>DentaQuest</strong> (May) — ~2.6 million records, hundreds of gigabytes published.</li>
                <li><strong>National Association of Insurance Commissioners (NAIC)</strong> (identified June 11, via the PeopleSoft zero-day) — ShinyHunters claimed 3.1TB / roughly 105,000 files including regulatory filings and payment records. NAIC's own account disputes the scale, stating that only already publicly available statutory reports, outdated logs, and configuration data were accessed.</li>
                <li><strong>Nissan</strong> (disclosed following the PeopleSoft wave) — current and former employee data affected; exact scope not yet detailed publicly.</li>
                <li><strong>KDDI Corporation</strong> (Japan) — an email system shared with five other ISPs was compromised.</li>
                <li><strong>Council of Europe</strong> (disclosed by the group in June) — ShinyHunters claims 297GB / over 429,000 files across HR, Secretariat, and other departments, including payroll data for more than 10,000 employees dating back to 2011, over 14,000 CVs, and medical records. The Council of Europe has confirmed it is investigating; full scope not yet independently verified.</li>
              </ul>
              <p style={{ fontFamily: S.serif, fontSize: "14px", color: S.gray, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
                <strong>A caution worth stating plainly:</strong> in April 2026, an entity claiming to be ShinyHunters breached Vercel — but the group's own leadership publicly denied involvement, illustrating the attribution problem that runs through the group's entire history. When a claim rests solely on the leak site's own assertion, that distinction is noted above.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: S.coral, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                Why this keeps working
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Researchers tracking the campaign point to one consistent pattern: ShinyHunters does not need to find software vulnerabilities when a phone call works just as well. Their tools are, in order of importance: a convincing voice, a fake urgency, and an employee whose job is to be helpful to whoever calls the help desk. Mandiant's guidance to defenders is correspondingly simple — the safest response to an unexpected IT request by phone is to hang up and call back through a verified, independently-looked-up number.
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
                "ShinyHunters does not need to find software vulnerabilities when a phone call works just as well."
              </div>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, margin: 0 }}>
                The group is believed to be affiliated with <strong style={{ color: S.white }}>The Com</strong>, a broader international cybercrime network that also includes Scattered Spider — the two have been observed collaborating under a combined identity some researchers call "Sp1d3rHunters," including the emergence of a ransomware variant (shinysp1d3r) targeting VMware ESXi infrastructure.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: S.coral, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                What this means if you use any of the affected services
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                If you have an account with any organization named above, the practical exposure is usually limited to what that organization has publicly confirmed — not the higher figures the group itself claims, which are not independently verified in most cases. That said, if you're checking your own exposure:
              </p>
              <ul style={{ paddingLeft: "20px", color: "#c8c8c0", fontFamily: S.serif, fontSize: "15px", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                <li>Change passwords on any account tied to an affected service, particularly if you reused that password elsewhere.</li>
                <li>Enable multi-factor authentication using an authenticator app or hardware key, not SMS.</li>
                <li>Be skeptical of unexpected IT support calls, even ones that sound legitimate — this is precisely the vector ShinyHunters has weaponized most effectively in 2025–2026.</li>
                <li>Where financial or health data was confirmed exposed (Medtronic, NAIC, ADT), monitor account statements and consider a credit freeze.</li>
              </ul>
            </div>

            {/* Section 7 / Sources */}
            <div style={{ borderTop: `1px solid ${S.line}`, paddingTop: "24px", marginTop: "20px" }}>
              <h2 style={{ fontFamily: S.sans, fontSize: "14px", fontWeight: 800, color: S.coral, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "10px" }}>
                Sources
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "14px", color: S.gray, lineHeight: 1.7, margin: 0 }}>
                This piece draws on independent reporting from BleepingComputer, SecurityWeek, Wired, Reuters, TechCrunch, the Google Threat Intelligence Group, Wikipedia's sourced ShinyHunters entry, and company disclosures where available. Figures attributed directly to ShinyHunters' own claims (via its leak site) are marked as such throughout and should be read as unverified unless a victim organization's own statement is cited alongside them.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "14px", color: S.gray, lineHeight: 1.7, marginTop: "14px", marginBottom: 0 }}>
                <em>If you have documented, source-linked information about a data exposure incident not covered here — particularly one affecting the regions LeakLens focuses on — <button onClick={() => window.location.href = "/database"} style={{ background: "none", border: "none", color: S.coral, cursor: "pointer", textDecoration: "underline", padding: 0, font: "inherit" }}>submit it through our registry</button>.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
