import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ShieldAlert, FileText, Scale, Landmark, Vote, Users, AlertCircle, FileCheck, CheckCircle2, XCircle } from "lucide-react";

interface ConnecticutDOJProps {
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

export default function ConnecticutDOJ({ S, onBack }: ConnecticutDOJProps) {
  React.useEffect(() => {
    const originalTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription ? metaDescription.getAttribute("content") : "";

    document.title = "Connecticut Just Handed Trump's DOJ Its 16th Straight Defeat — LeakLens";
    const descContent = "On July 17, 2026, a federal judge in Connecticut rejected the DOJ's demand for the state's voter registration list — the 16th consecutive defeat.";
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
    canonicalLink.setAttribute("href", "https://leaklens.org/explainers/trump-doj-took-a-victory-lap-in-connecticut-then-it-became-their-16th-straight-voter-roll-loss");
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
      {/* Navigation Bar */}
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
            background: `radial-gradient(ellipse 900px 500px at 75% 50%, rgba(214,162,76,0.08), transparent 60%), linear-gradient(180deg, #0a0d0a 0%, #030403 100%)`
          }}
        />

        {/* Decorative Grid & Graphics */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.2, pointerEvents: "none" }}>
          <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            <path d="M 0,50 L 800,50 M 0,100 L 800,100 M 0,150 L 800,150 M 0,200 L 800,200 M 0,250 L 800,250 M 0,300 L 800,300 M 100,0 L 100,400 M 200,0 L 200,400 M 300,0 L 300,400 M 400,0 L 400,400 M 500,0 L 500,400 M 600,0 L 600,400 M 700,0 L 700,400" fill="none" stroke="#222" strokeWidth="0.5" />
            <circle cx="400" cy="200" r="140" fill="none" stroke={S.coral} strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
            <circle cx="400" cy="200" r="8" fill={S.coral} />
            <path d="M 250,200 L 550,200 M 400,50 L 400,350" fill="none" stroke="#333" strokeWidth="1" />
            <text x="415" y="195" fill={S.coral} fontSize="10" fontFamily="monospace">DOJ CAMPAIGN: 16 LOSSES</text>
            <text x="415" y="215" fill={S.gray} fontSize="9" fontFamily="monospace">63% GOP APPOINTEES</text>
          </svg>
        </div>

        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(4,6,4,0.96) 0%, rgba(4,6,4,0.85) 45%, rgba(4,6,4,0.3) 75%, rgba(4,6,4,0.85) 100%)" }} />
        <div style={{ width: "100%", height: "3px", background: `linear-gradient(90deg, ${S.coral} 0%, #e04a3f 100%)`, position: "absolute", top: 0, left: 0 }} />

        {/* Header Content */}
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
            <div style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "3px", color: S.coral, marginBottom: "20px", fontFamily: S.sans }}>
              LEAKLENS ANALYSIS · JULY 2026
            </div>
            <h1
              style={{
                fontFamily: S.serif,
                fontSize: "42px",
                fontWeight: 700,
                color: "#f2f0eb",
                lineHeight: 1.15,
                maxWidth: "850px",
                margin: 0
              }}
            >
              Connecticut Just Handed Trump's DOJ Its 16th Straight Defeat<br />
              <span style={{ fontWeight: 400, color: "#d8c4c0", fontSize: "28px" }}>And Most of the Losses Came From Republican Judges</span>
            </h1>
            <div style={{ display: "flex", gap: "48px", marginTop: "32px" }}>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 800, color: "#e04a3f", fontFamily: S.sans }}>0–16</div>
                <div style={{ fontSize: "11px", color: "#9a968a", letterSpacing: "1px", marginTop: "2px", fontFamily: S.sans, textTransform: "uppercase" }}>
                  DOJ COURT RECORD
                </div>
              </div>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 800, color: S.coral, fontFamily: S.sans }}>63%</div>
                <div style={{ fontSize: "11px", color: "#9a968a", letterSpacing: "1px", marginTop: "2px", fontFamily: S.sans, textTransform: "uppercase" }}>
                  RULINGS BY GOP JUDGES
                </div>
              </div>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 800, color: S.white, fontFamily: S.sans }}>30+</div>
                <div style={{ fontSize: "11px", color: "#9a968a", letterSpacing: "1px", marginTop: "2px", fontFamily: S.sans, textTransform: "uppercase" }}>
                  LAWSUITS NATIONWIDE
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: "13px", color: "#7a7669", marginTop: "18px", fontFamily: S.sans }}>
              <span>Analysis based on federal dockets, Associated Press, and Democracy Docket filings</span>
              <span style={{ color: S.coral, fontWeight: 700, letterSpacing: "1px" }}>LEAKLENS.ORG</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Body Section */}
      <div style={{ position: "relative", width: "100%", background: "#050505", overflow: "hidden" }}>
        
        <style>{`
          @media (max-width: 1280px) {
            .evidence-board-pin {
              display: none !important;
            }
          }
        `}</style>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 40px", background: "#000", borderLeft: `1px solid ${S.line}`, borderRight: `1px solid ${S.line}`, position: "relative", zIndex: 2 }}>
          
          {/* Executive Summary */}
          <div style={{ borderBottom: `1px solid ${S.line}`, paddingBottom: "32px", marginBottom: "40px" }}>
            <h2 style={{ fontFamily: S.sans, fontSize: "12px", color: S.coral, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Summary
            </h2>
            <p style={{ fontFamily: S.serif, fontSize: "18px", color: S.white, lineHeight: 1.8, margin: 0 }}>
              On July 17, 2026, a federal judge in Connecticut rejected the Department of Justice's demand for the state's complete, unredacted voter registration list — the DOJ's 16th consecutive defeat in a nationwide campaign to obtain personal voter data. The detail that cuts against the easy partisan reading: 63% of those defeats came from judges appointed by Republican presidents, including the judge who just ruled against the DOJ in Connecticut — a Trump appointee.
            </p>
            <p style={{ fontFamily: S.serif, fontSize: "14px", color: S.gray, fontStyle: "italic", marginTop: "12px" }}>
              [DRAFT — social media quotes flagged below still need direct-source verification before publication]
            </p>
          </div>

          {/* Article Text Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            
            {/* Section 1: The Lead */}
            <div style={{ position: "relative" }}>
              {/* Evidence Card 1 */}
              <div className="evidence-board-pin" style={{
                position: "absolute",
                left: "-250px",
                top: "10px",
                width: "210px",
                background: "#0c0d0e",
                border: "1px solid #22252a",
                borderTop: `3px solid ${S.coral}`,
                padding: "14px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.7)",
                color: "#8e9ba8",
                zIndex: 5,
                fontFamily: "monospace",
                fontSize: "9px",
                lineHeight: 1.4
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#54606e", fontSize: "7.5px", fontWeight: "bold", borderBottom: "1px solid #1c2024", paddingBottom: "6px", marginBottom: "8px" }}>
                  <span>CASE FILE // CT</span>
                  <span>US v. THOMAS</span>
                </div>
                <div style={{ fontWeight: "bold", color: S.white, fontSize: "10px", marginBottom: "8px" }}>
                  DECISION METRICS
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#aaa" }}>
                  <div><span style={{ color: "#54606e" }}>Court:</span> <span style={{ color: S.white }}>D. Conn.</span></div>
                  <div><span style={{ color: "#54606e" }}>Judge:</span> <span style={{ color: S.coral }}>Kari Dooley</span></div>
                  <div><span style={{ color: "#54606e" }}>Appointed:</span> <span style={{ color: "#e04a3f" }}>Trump</span></div>
                  <div><span style={{ color: "#54606e" }}>Outcome:</span> <span style={{ color: "#e04a3f" }}>Denied</span></div>
                </div>
              </div>

              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: S.coral, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px" }}>
                The lead: this isn't a story about partisan judges
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                For a year and a half, the DOJ has been trying to compile personal data on voters across the country. And federal courts — regardless of who appointed the judge — keep telling it the same thing: the law doesn't allow it.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                U.S. District Judge <strong>Kari Dooley</strong>, herself a Trump appointee, ruled on July 17 in <em>United States v. Thomas</em>, denying the DOJ's motion to compel Connecticut to hand over its full, unredacted voter registration list.<a href="#fn1" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[1]</a> Dooley is now the <strong>seventh Trump appointee</strong> to reject the DOJ's claims in cases like this one across different states. Add three judges appointed by George W. Bush, and Republican appointees account for <strong>10 of the DOJ's 16 losses — 63%</strong>.<a href="#fn2" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[2]</a>
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Of the remaining six losses, four came from Obama appointees, one from a Clinton appointee, and one from a Biden appointee.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75 }}>
                The campaign's scoreboard now stands at <strong>0 wins, 16 losses</strong> at the district court level, and 0–1 at the appellate level.<a href="#fn3" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[3]</a><a href="#fn4" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[4]</a> No court has ever ordered a state to hand over an unredacted voter list.
              </p>
            </div>

            {/* Section 2: What actually happened */}
            <div style={{ position: "relative" }}>
              {/* Evidence Card 2 */}
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
                <div style={{ display: "flex", justifyContent: "space-between", color: "#666", fontSize: "7.5px", fontWeight: "bold", borderBottom: "1px solid #222", paddingBottom: "6px", marginBottom: "8px" }}>
                  <span>DEMAND DETAILS</span>
                  <span>PERSONAL DATA</span>
                </div>
                <div style={{ fontWeight: "bold", color: "#e04a3f", fontSize: "10px", marginBottom: "8px" }}>
                  REQUESTED FIELDS:
                </div>
                <ul style={{ listStyleType: "none", paddingLeft: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
                  <li>• Complete Names</li>
                  <li>• Dates of Birth</li>
                  <li>• Home Addresses</li>
                  <li>• DL / Last 4 SSN</li>
                </ul>
              </div>

              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: S.coral, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                What actually happened
              </h2>
              
              <h3 style={{ fontFamily: S.serif, fontSize: "17px", fontWeight: 700, color: S.white, marginBottom: "10px", marginTop: "16px" }}>
                The demand
              </h3>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                The case began with an August 6, 2025 letter from the Attorney General's office to Connecticut Secretary of the State Stephanie Thomas, a Democrat, demanding the state's Statewide Voter Registration List (SVRL).<a href="#fn1" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[1]</a> The DOJ cited data from the Election Administration and Voting Survey (EAVS) as justification, framing the request as necessary to assess how the state maintains its voter rolls.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Thomas provided a partial response but withheld the full dataset. On December 12, 2025, the DOJ sent a sharper follow-up demand — invoking Title III of the Civil Rights Act of 1960 and the Help America Vote Act (HAVA) — this time for complete voter names, dates of birth, home addresses, and driver's license numbers or the last four digits of Social Security numbers.<a href="#fn1" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[1]</a>
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                On December 24, 2025, Thomas refused, citing Connecticut's data privacy statutes.<a href="#fn1" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[1]</a>
              </p>

              <h3 style={{ fontFamily: S.serif, fontSize: "17px", fontWeight: 700, color: S.white, marginBottom: "10px", marginTop: "16px" }}>
                The lawsuit — and the premature victory lap
              </h3>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                The DOJ filed suit on January 6, 2026. Two days later, on January 8, Judge Dooley issued a routine order to show cause — a standard procedural step requiring Connecticut to explain its position to the court. It was not a ruling on the merits, and it did not require the state to hand over anything.<a href="#fn3" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[3]</a>
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                DOJ officials treated it as a win anyway. According to Democracy Docket, Principal Deputy Assistant Attorney General <strong>Jesus Osete</strong> wrote on social media at the time:
              </p>
              <blockquote style={{ borderLeft: `3px solid ${S.coral}`, paddingLeft: "16px", margin: "16px 0", color: S.white, fontStyle: "italic" }}>
                "Great news out of Connecticut tonight... It's precisely how Congress intended the Civil Rights [Act] of 1960 to function."<a href="#fn3" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[3]</a>
              </blockquote>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Assistant Attorney General <strong>Harmeet Dhillon</strong>, who leads the DOJ's Civil Rights Division, amplified the post; Democracy Docket reports she called it a "Big win for election integrity in Connecticut" and added: "Kudos to the amazing @CivilRights TEAM handling election matters!"<a href="#fn3" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[3]</a>
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "14px", color: S.gray, fontStyle: "italic", marginBottom: "16px" }}>
                *Note on sourcing: no direct, independently archived link to either post could be located as of this draft (July 19, 2026) — both quotes are reproduced here as reported by Democracy Docket, and are attributed to that outlet in the text above rather than presented as directly verified. If a primary link surfaces before publication, cite it directly; otherwise this attribution should stand as-is rather than being presented as independently confirmed.*
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                In her final ruling, Judge Dooley footnoted an acknowledgment that her early procedural language "may have unnecessarily created confusion" among the parties<a href="#fn1" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[1]</a> — a pointed suggestion that DOJ officials misunderstood the difference between a procedural order and a ruling on the merits.
              </p>

              <h3 style={{ fontFamily: S.serif, fontSize: "17px", fontWeight: 700, color: S.white, marginBottom: "10px", marginTop: "16px" }}>
                The ruling on the merits
              </h3>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                After considering Connecticut's arguments, Judge Dooley sided entirely with the state. The central legal question was how to read Title III's language governing records that "come into the possession" of a state election official.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                The DOJ's position: the voter list qualifies, so the state must preserve and produce it on request.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Judge Dooley's position — shared, she noted, by at least eight other judges who have ruled on similar claims in other states<a href="#fn1" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[1]</a> — is that a voter list is a record the state <strong>creates itself</strong>, continuously updated by municipal registrars feeding a centralized system, rather than a record the state "receives" from an outside party. Title III's language, she found, was written for documents voters submit to the government — registration applications and the like — not for a live, constantly-updated state database.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Dooley also flagged an internal contradiction in the DOJ's own argument: the same 1960 statute (Section 20702) imposes <strong>criminal penalties</strong> for altering protected records. If the voter list were covered by Title III, it could never legally be modified — yet the National Voter Registration Act and HAVA require states to regularly clean their rolls, removing deceased voters and updating addresses.<a href="#fn1" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[1]</a> From the ruling:
              </p>
              <blockquote style={{ borderLeft: `3px solid ${S.coral}`, paddingLeft: "16px", margin: "16px 0", color: S.white, fontStyle: "italic" }}>
                "The SVRL is a record created by the state. It is not a record that comes into the state's possession at all."<a href="#fn1" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[1]</a>
              </blockquote>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                On July 17, the court denied the DOJ's motion to compel and closed the case in Connecticut's favor.<a href="#fn1" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[1]</a>
              </p>
            </div>

            {/* Section 3: The bigger picture */}
            <div>
              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: S.coral, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                The bigger picture: a nationwide campaign
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Connecticut's case is one of at least <strong>30 lawsuits filed against states and the District of Columbia</strong> since fall 2025, including California, Arizona, Georgia, New York, Virginia, Michigan, Wisconsin, and Pennsylvania.<a href="#fn5" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[5]</a><a href="#fn6" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[6]</a>
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Civil rights groups — the ACLU, Common Cause, the Brennan Center for Justice, and the Campaign Legal Center — describe the effort as an attempt to build a <strong>national voter database without congressional authorization</strong>.<a href="#fn7" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[7]</a><a href="#fn8" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[8]</a>
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                A significant detail surfaced by the Associated Press in a parallel Rhode Island case: at a March 2026 hearing, DOJ attorney Eric Neff told the court directly that the purpose of collecting the data was to cross-check it against the Department of Homeland Security's <strong>SAVE</strong> database (Systematic Alien Verification for Entitlements) to verify voter citizenship.<a href="#fn9" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[9]</a>
              </p>
              <blockquote style={{ borderLeft: `3px solid ${S.coral}`, paddingLeft: "16px", margin: "16px 0", color: S.white, fontStyle: "italic" }}>
                "Our intention is to run this against the DHS SAVE database," Neff told Judge Mary McElroy.
              </blockquote>

              <h3 style={{ fontFamily: S.serif, fontSize: "17px", fontWeight: 700, color: S.white, marginBottom: "10px", marginTop: "16px" }}>
                The scoreboard, state by state
              </h3>
              <ul style={{ paddingLeft: "20px", color: "#c8c8c0", fontFamily: S.serif, fontSize: "15px", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                <li>
                  <strong style={{ color: S.white }}>Michigan</strong> — Judge Hala Jarbou, a Trump appointee, rejected all three statutory grounds the DOJ cited.<a href="#fn2" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[2]</a> The 6th Circuit Court of Appeals later upheld the ruling 2–1 — the DOJ's only appellate loss to date.<a href="#fn10" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[10]</a> Judge John Nalbandian, also a Trump appointee, dissented in the DOJ's favor — the sole break in an otherwise unanimous judicial consensus.
                </li>
                <li>
                  <strong style={{ color: S.white }}>Arizona</strong> — Judge Susan Brnovich, a Trump appointee, dismissed the case with prejudice.<a href="#fn2" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[2]</a>
                </li>
                <li>
                  <strong style={{ color: S.white }}>Maryland</strong> — Judge Stephanie Gallagher, a Trump appointee, rejected the DOJ's reliance on its own internal legal opinion.<a href="#fn2" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[2]</a>
                </li>
                <li>
                  <strong style={{ color: S.white }}>Virginia</strong> — Judge Roderick Young, a Trump appointee.<a href="#fn2" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[2]</a>
                </li>
                <li>
                  <strong style={{ color: S.white }}>West Virginia</strong> — Judge Thomas Johnston, a Bush appointee: "Given the lack of an adequate basis or purpose, one is left to wonder what the real purpose was..."<a href="#fn2" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[2]</a><a href="#fn11" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[11]</a>
                </li>
                <li>
                  <strong style={{ color: S.white }}>New Mexico</strong> — Judge Judith Herrera, a Bush appointee, dismissed with prejudice.<a href="#fn2" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[2]</a>
                </li>
                <li>
                  <strong style={{ color: S.white }}>Massachusetts</strong> — dismissed in July 2026, per AP.<a href="#fn9" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[9]</a>
                </li>
              </ul>
            </div>

            {/* Section 4: The campaign isn't over */}
            <div>
              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: S.coral, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                The campaign isn't over — it's just moved to Michigan
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Connecticut's case is closed, but the broader fight is not. Michigan remains the DOJ's most active front: after the 6th Circuit affirmed the state's win on June 24, 2026 — the department's only appellate ruling to date — the DOJ asked for <strong>en banc review</strong> by the full Sixth Circuit, seeking to overturn its first appeals-court loss.<a href="#fn12" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[12]</a>
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                The department has separately appealed all of its district court losses across the country, including Connecticut's sister cases in Pennsylvania and New Hampshire.<a href="#fn13" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[13]</a> Legal observers tracking the litigation say Michigan, moving through a comparatively fast appellate circuit, is the case most likely to reach the U.S. Supreme Court before the November midterms.<a href="#fn14" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[14]</a> No appeal has yet been filed in the Connecticut case itself.
              </p>
            </div>

            {/* Section 5: Reaction */}
            <div>
              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: S.coral, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                Reaction
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                "Voters should not have to worry that registering to vote means giving the federal government access to their most sensitive personal information," said <strong>Will Hughes</strong>, staff attorney with the ACLU's Voting Rights Project, when Common Cause, the ACLU National Voting Rights Project, and the ACLU of Connecticut moved to intervene in the case back in January.<a href="#fn15" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[15]</a>
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Marc Elias of Elias Law Group, who represented the defense in the Connecticut case, wrote after the July 17 ruling:
              </p>
              <blockquote style={{ borderLeft: `3px solid ${S.coral}`, paddingLeft: "16px", margin: "16px 0", color: S.white, fontStyle: "italic" }}>
                "DOJ is now 0-16 in cases to gain access to state voter files. Elias Law Group remains undefeated..."<a href="#fn4" style={{ color: S.coral, textDecoration: "none", fontSize: "11px", verticalAlign: "super" }}>[4]</a>
              </blockquote>
              <p style={{ fontFamily: S.serif, fontSize: "14px", color: S.gray, fontStyle: "italic" }}>
                *⚠️ TO VERIFY: the Elias quote is sourced via Raw Story, which reproduces it as a direct post — but no independent archive link to the original X post has been located. Confirm before publication.*
              </p>
            </div>

            {/* Section 6: TODO before publication */}
            <div style={{ border: `1px solid ${S.line}`, padding: "20px", background: S.bg2, marginTop: "20px" }}>
              <h3 style={{ fontFamily: S.sans, fontSize: "14px", fontWeight: 800, color: S.coral, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "12px", display: "flex", alignItems: "center", gap: 8 }}>
                <AlertCircle size={16} /> TODO before publication
              </h3>
              <ul style={{ paddingLeft: "20px", color: "#c8c8c0", fontFamily: S.serif, fontSize: "14px", lineHeight: 1.6, display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>
                  <span style={{ color: "#4db86a" }}>✅ Addressed</span> — Osete and Dhillon quotes now explicitly attributed to Democracy Docket in the body text (not just the footnote), since no independent archive link to either post was found after two search passes. If a direct link surfaces, replace the attribution with a direct citation.
                </li>
                <li>
                  <strong>Verify the Marc Elias quote</strong> — partially resolved. Independently reproduced by Raw Story as a direct quotation (not just paraphrase), which lowers but doesn't eliminate risk. No direct X archive link found. Recommend confirming the original post before publication, or attributing it explicitly to Raw Story if a direct link can't be found.
                </li>
                <li>
                  <strong>Open</strong> — no on-the-record DOJ response to the Connecticut ruling has surfaced in reporting so far. Fine to publish without it, noting the absence, or hold for outreach if the outlet's practice requires comment attempts.
                </li>
                <li>
                  <span style={{ color: "#4db86a" }}>✅ Resolved</span> — DOJ has not appealed the Connecticut ruling as of July 18, 2026. It has, however, filed an en banc petition in the related Michigan case and appealed its other district court losses; see the "campaign isn't over" section above.
                </li>
              </ul>
            </div>

            {/* Sources section */}
            <div style={{ borderTop: `1px solid ${S.line}`, paddingTop: "24px", marginTop: "20px" }}>
              <h2 style={{ fontFamily: S.sans, fontSize: "14px", fontWeight: 800, color: S.coral, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "16px" }}>
                Sources
              </h2>
              <ol style={{ paddingLeft: "20px", color: S.gray, fontFamily: S.sans, fontSize: "12px", lineHeight: 1.7, display: "flex", flexDirection: "column", gap: "12px" }}>
                <li id="fn1">
                  Order Denying the United States' Motion to Compel, <em>United States v. Thomas</em>, No. 3:26-cv-00021 (KAD), Document 109, D. Conn., July 17, 2026. PDF: <a href="https://www.democracydocket.com/wp-content/uploads/2026/01/109-2026-07-17-Order-1.pdf" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>Democracy Docket PDF</a> · Docket on CourtListener: <a href="https://www.courtlistener.com/docket/72110170/parties/united-states-v-thomas/" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>CourtListener Docket</a>
                </li>
                <li id="fn2">
                  Yunior Rivas, "Most of Trump DOJ's voter roll losses have come from GOP-appointed judges," Democracy Docket, July 15, 2026. <a href="https://www.democracydocket.com/news-alerts/most-of-trump-dojs-voter-roll-losses-have-come-from-gop-appointed-judges/" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>Democracy Docket Link</a>
                </li>
                <li id="fn3">
                  Yunior Rivas, "Trump DOJ took a victory lap in Connecticut. Then it became their 16th straight voter roll loss," Democracy Docket, July 17, 2026. <a href="https://www.democracydocket.com/news-alerts/trump-doj-took-a-victory-lap-in-connecticut-then-it-became-their-16th-straight-voter-roll-loss/" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>Democracy Docket Link</a>
                </li>
                <li id="fn4">
                  Raw Story, "Trump's own appointee deals his DOJ 16th straight loss in ploy to seize voter files," July 17–18, 2026. <a href="https://www.rawstory.com/trump-doj-voting/" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>Raw Story Link</a>
                </li>
                <li id="fn5">
                  Democracy Docket, "Connecticut DOJ Voter Data Access Challenge" (case tracker). <a href="https://www.democracydocket.com/cases/connecticut-doj-voter-data-access-challenge/" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>Democracy Docket Tracker</a>
                </li>
                <li id="fn6">
                  ACLU, "United States v. Thomas" (case page). <a href="https://www.aclu.org/cases/united-states-v-thomas" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>ACLU Link</a>
                </li>
                <li id="fn7">
                  Campaign Legal Center, "United States v. Thomas — Amici Curiae Brief of the Brennan Center for Justice and Campaign Legal Center," March 10, 2026. <a href="https://campaignlegal.org/document/united-states-v-thomas-amici-curiae-brief-brennan-center-justice-and-campaign-legal-center" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>Campaign Legal Center Link</a>
                </li>
                <li id="fn8">
                  ACLU of Connecticut, "Federal Court to Hear Challenge to U.S. Government Demand for Connecticut Voter Data." <a href="https://www.acluct.org/press-releases/challenging-demand-for-connecticut-voter-data/" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>ACLU CT Press Release</a>
                </li>
                <li id="fn9">
                  Rebecca Boone (AP), "A federal judge dismisses another DOJ lawsuit seeking voter data, this time in Massachusetts." <a href="https://www.aol.com/articles/federal-judge-dismisses-another-doj-232636331.html" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>AP Article Link</a>
                </li>
                <li id="fn10">
                  CNN, "Appeals court deals biggest setback yet to Trump DOJ's demands for confidential voter roll data," June 24, 2026. <a href="https://www.cnn.com/2026/06/24/politics/appeals-court-rejects-demand-confidential-voter-roll-data" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>CNN Link</a> · See also Law.com: <a href="https://www.law.com/nationallawjournal/2026/07/01/doj-loses-voter-roll-appeal-but-dissent-breaks-a-judicial-consensus/" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>Law.com Link</a>
                </li>
                <li id="fn11">
                  Democracy Docket, "Trump DOJ 0 for 13 in voter roll grab after court dismisses West Virginia lawsuit." <a href="https://www.democracydocket.com/news-alerts/trump-doj-0-for-13-in-voter-roll-grab-after-court-dismisses-west-virginia-lawsuit/" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>Democracy Docket Link</a>
                </li>
                <li id="fn12">
                  State Democracy Research Initiative, University of Wisconsin Law School, "Tracker: DOJ Lawsuits Seeking States' Sensitive Voter Data." <a href="https://statedemocracy.law.wisc.edu/our-work/tracker-doj-lawsuits-seeking-states-sensitive-voter-data" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>UW Law Tracker</a> · Yunior Rivas, "Trump DOJ seeks to undo first appeals loss in voter roll crusade, asks for rehearing," Democracy Docket. <a href="https://www.democracydocket.com/news-alerts/trump-doj-seeks-to-undo-first-appeals-loss-in-voter-roll-crusade/" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>Democracy Docket Link</a>
                </li>
                <li id="fn13">
                  Democracy Docket, "Trump DOJ appeals latest wave of losses in languishing voter roll crusade." <a href="https://www.democracydocket.com/news-alerts/trump-doj-appeals-latest-wave-of-losses-in-voter-roll-crusade/" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>Democracy Docket Link</a>
                </li>
                <li id="fn14">
                  Votebeat, "Why Michigan's voter roll case could be first to reach the Supreme Court," March 2026. <a href="https://www.votebeat.org/michigan/2026/03/14/michigan-voter-roll-case-doj-appeal-supreme-court/" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>Votebeat Link</a>
                </li>
                <li id="fn15">
                  Common Cause Connecticut, "Voting Rights Groups, Connecticut Voters File Motion to Protect Data Privacy," January 28, 2026. <a href="https://www.commoncause.org/connecticut/press/voting-rights-groups-connecticut-voters-file-motion-to-protect-data-privacy/" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>Common Cause Release</a> · Independently corroborated by WSHU: "CT joins federal lawsuit to block DOJ from accessing voters' data," January 30, 2026. <a href="https://www.wshu.org/connecticut-news/2026-01-29/ct-federal-lawsuit-voters-data-privacy" target="_blank" rel="noopener noreferrer" style={{ color: S.coral }}>WSHU Link</a>
                </li>
              </ol>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
