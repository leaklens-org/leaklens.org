import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ShieldAlert, FileText, AlertTriangle, ShieldCheck, Mail } from "lucide-react";

interface SpotFakeBreachNoticeProps {
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

export default function SpotFakeBreachNotice({ S, onBack }: SpotFakeBreachNoticeProps) {
  React.useEffect(() => {
    const originalTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription ? metaDescription.getAttribute("content") : "";

    document.title = "Real Breach Notice or Scam? How to Tell in the First 60 Seconds — LeakLens";
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn to distinguish genuine data breach notification emails from sophisticated AI-generated phishing scams in under a minute.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Learn to distinguish genuine data breach notification emails from sophisticated AI-generated phishing scams in under a minute.";
      document.head.appendChild(meta);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    const originalCanonical = canonicalLink.getAttribute("href");
    canonicalLink.setAttribute("rel", "canonical");
    canonicalLink.setAttribute("href", "https://leaklens.org/explainers/spot-fake-breach-notice");
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
            background: `radial-gradient(ellipse 900px 500px at 80% 50%, rgba(224,74,63,0.1), transparent 60%), linear-gradient(180deg, #0e0a0a 0%, #050505 100%)`
          }}
        />

        {/* Phishing Routing Visualization */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.22,
            pointerEvents: "none"
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 400 200">
            {/* Grid */}
            <path d="M 0,40 L 400,40 M 0,80 L 400,80 M 0,120 L 400,120 M 0,160 L 400,160 M 80,0 L 80,200 M 160,0 L 160,200 M 240,0 L 240,200 M 320,0 L 320,200" fill="none" stroke="#222" strokeWidth="0.5" strokeDasharray="3,3" />
            
            {/* Thread of compromised nodes */}
            <path d="M 40,40 L 120,80 L 200,80 L 280,120 L 360,160" fill="none" stroke="#e04a3f" strokeWidth="1.2" strokeDasharray="2,2" />
            <path d="M 120,80 L 160,160 L 240,120" fill="none" stroke="#e04a3f" strokeWidth="0.8" />
            
            {/* Active Nodes */}
            <circle cx="40" cy="40" r="2.5" fill="#e04a3f" />
            <circle cx="120" cy="80" r="4" fill="#e04a3f" />
            <circle cx="200" cy="80" r="2.5" fill="#888" />
            <circle cx="280" cy="120" r="4" fill="#e04a3f" />
            <circle cx="360" cy="160" r="3" fill="#e04a3f" />
            <circle cx="160" cy="160" r="2" fill="#c9a15c" />
            <circle cx="240" cy="120" r="2.5" fill="#4a9d6e" />

            <circle cx="120" cy="80" r="8" fill="none" stroke="#e04a3f" strokeWidth="0.5" opacity="0.5">
              <animate attributeName="r" values="4;12;4" dur="2.5s" repeatCount="indefinite" />
            </circle>
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

        {/* Red warning top rule */}
        <div style={{ width: "100%", height: "3px", background: "#e04a3f", position: "absolute", top: 0, left: 0 }} />

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
            <div style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "3px", color: "#e04a3f", marginBottom: "20px", fontFamily: S.sans }}>
              LEAKLENS EXPLAINER · JULY 2026
            </div>
            <h1
              style={{
                fontFamily: S.serif,
                fontSize: "46px",
                fontWeight: 700,
                color: "#f2f0eb",
                lineHeight: 1.15,
                maxWidth: "850px",
                margin: 0
              }}
            >
              Real Breach Notice or Scam?<br />
              <span style={{ fontWeight: 400, color: "#d8c4c0", fontSize: "32px" }}>How to Tell in the First 60 Seconds</span>
            </h1>
            <div style={{ display: "flex", gap: "48px", marginTop: "32px" }}>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 800, color: "#e04a3f", fontFamily: S.sans }}>3,322</div>
                <div style={{ fontSize: "11px", color: "#9a968a", letterSpacing: "1px", marginTop: "2px", fontFamily: S.sans, textTransform: "uppercase" }}>
                  US BREACH INCIDENTS LAST YEAR
                </div>
              </div>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 800, color: "#e04a3f", fontFamily: S.sans }}>80%</div>
                <div style={{ fontSize: "11px", color: "#9a968a", letterSpacing: "1px", marginTop: "2px", fontFamily: S.sans, textTransform: "uppercase" }}>
                  ESTIMATED AI-GENERATED PHISH
                </div>
              </div>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 800, color: "#e04a3f", fontFamily: S.sans }}>60s</div>
                <div style={{ fontSize: "11px", color: "#9a968a", letterSpacing: "1px", marginTop: "2px", fontFamily: S.sans, textTransform: "uppercase" }}>
                  CRITICAL ASSESSMENT WINDOW
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 0, marginTop: "10px" }}>
              {[
                { name: "Real Breach Hits News", year: "T + 0h" },
                { name: "Scammer Templates Prepared", year: "T + 2h" },
                { name: "Fake Notification Blast", year: "T + 6h" },
                { name: "Victim Action & Entry", year: "T + 12h" },
                { name: "Credential Exploitation", year: "T + 24h", now: true }
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
                    <div style={{ flex: 1, height: "1px", background: "#3a3030", margin: "0 8px" }} />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: "13px", color: "#7a7669", marginTop: "18px", fontFamily: S.sans }}>
              <span>Sourced from Netcraft, Experian, ESET, Wall Street Journal, Techlicious</span>
              <span style={{ color: "#e04a3f", fontWeight: 700, letterSpacing: "1px" }}>LEAKLENS.ORG</span>
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
              Why this article exists
            </h2>
            <p style={{ fontFamily: S.serif, fontSize: "18px", color: S.white, lineHeight: 1.8, margin: 0 }}>
              In the US alone, roughly 3,322 data breach incidents were recorded last year, generating notification emails to an estimated 280 million people. In Europe, daily breach incidents rose 22% year-over-year in 2025, reaching an average of 443 recorded cases per day. Breach notifications have become so routine that most people now react automatically — open, click, panic, comply.
            </p>
            <p style={{ fontFamily: S.serif, fontSize: "16px", color: S.gray, lineHeight: 1.8, marginTop: "16px", marginBottom: 0 }}>
              That automatic reflex is exactly what scammers are now exploiting. Rather than inventing a threat from nothing, fraudsters increasingly wait for a <em>real</em> breach to make headlines, then send their own fake notification riding the same wave of public concern — sometimes referencing the real incident by name to borrow its credibility.
            </p>
            <p style={{ fontFamily: S.serif, fontSize: "16px", color: S.gray, lineHeight: 1.8, marginTop: "16px", marginBottom: 0 }}>
              This is not a hypothetical risk. Following the 2026 Instructure Canvas breach, Alamo Colleges issued a public warning to students and staff specifically because cybercriminals were already sending fake breach-related messages impersonating the platform, sometimes posing as an educator or colleague the recipient actually knew.
            </p>
          </div>

          {/* Article Text Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            
            {/* Section 1: Real notices */}
            <div style={{ position: "relative" }}>
              
              {/* Evidence Card 1: Email Header Analysis (Left Side) */}
              <div className="evidence-board-pin" style={{
                position: "absolute",
                left: "-250px",
                top: "10px",
                width: "210px",
                background: "#111111",
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
                  <span>ANALYSER: HEADERS</span>
                  <span>SMTP_VERIFY // LOG</span>
                </div>

                <div style={{ fontWeight: "bold", color: S.white, fontSize: "10px", marginBottom: "8px" }}>
                  SUSPECT ROUTING DETECTED
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#aaa" }}>
                  <div>
                    <span style={{ color: "#666" }}>From:</span> <span style={{ color: "#e04a3f" }}>alert@yourbank-secure.com</span>
                  </div>
                  <div>
                    <span style={{ color: "#666" }}>SPF:</span> <span style={{ color: "#e04a3f" }}>FAIL</span>
                  </div>
                  <div>
                    <span style={{ color: "#666" }}>DKIM:</span> <span style={{ color: "#e04a3f" }}>FAIL</span>
                  </div>
                  <div>
                    <span style={{ color: "#666" }}>Source IP:</span> <span style={{ color: "#aaa" }}>185.190.140.23</span>
                  </div>
                </div>

                <div style={{ marginTop: "10px", padding: "4px 8px", background: "rgba(224,74,63,0.15)", border: "1px solid rgba(224,74,63,0.3)", color: "#e04a3f", fontSize: "8px", fontWeight: "bold", textAlign: "center" }}>
                  TYPOSQUATTING ALERT [✖]
                </div>
              </div>

              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: "#e04a3f", letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px" }}>
                First: what a real breach notification looks like
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                In the United States, companies are generally required under state data-breach notification laws to inform affected individuals when personal information may have been exposed. A genuine notification typically:
              </p>
              <ul style={{ paddingLeft: "20px", color: "#c8c8c0", fontFamily: S.serif, fontSize: "15px", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                <li><strong style={{ color: S.white }}>Uses measured, formal language.</strong> It explains what happened, when it was discovered, and what categories of data were involved — without demanding you act within a countdown.</li>
                <li><strong style={{ color: S.white }}>Includes some account-specific detail.</strong> A real notice from a company you have an account with often references a partial account number, the last four digits of a card, or your actual username — something a mass-blasted scam email won't have, because the scammer doesn't have your real account data.</li>
                <li><strong style={{ color: S.white }}>Directs you to information, not just a login page.</strong> Legitimate notices tend to explain remediation steps (password reset, credit monitoring offer) rather than immediately routing you to "confirm your details."</li>
                <li><strong style={{ color: S.white }}>Comes from a domain that matches the company exactly.</strong> Not a close lookalike.</li>
              </ul>
            </div>

            {/* Section 2: Red Flags */}
            <div style={{ position: "relative" }}>
              
              {/* Evidence Card 2: Urgency Playbook (Right Side) */}
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

                <div style={{ display: "flex", justifyContent: "space-between", color: "#54606e", fontSize: "7.5px", fontWeight: "bold", borderBottom: "1px solid #1c2024", paddingBottom: "6px", marginBottom: "8px" }}>
                  <span>PSYCH_TRIGGER</span>
                  <span>TACTICAL // MATRIX</span>
                </div>

                <div style={{ fontWeight: "bold", color: "#e04a3f", fontSize: "10px", marginBottom: "8px" }}>
                  THE PHISHING PLAYBOOK
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ color: "#e04a3f", fontWeight: "bold" }}>01.</span>
                    <span><strong>Urgency:</strong> Bypasses analytical evaluation.</span>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ color: "#e04a3f", fontWeight: "bold" }}>02.</span>
                    <span><strong>Impersonation:</strong> Spoofs trusted display name.</span>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ color: "#e04a3f", fontWeight: "bold" }}>03.</span>
                    <span><strong>Malicious Route:</strong> Directs to forged credentials portal.</span>
                  </div>
                </div>
              </div>

              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: "#e04a3f", letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                The red flags, in order of reliability
              </h2>
              
              <h3 style={{ fontFamily: S.sans, fontSize: "15px", fontWeight: 800, color: S.white, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "8px" }}>
                1. Urgency is the single strongest signal
              </h3>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                <em>"Undue urgency, like asking you to click or call or text in a really short deadline, is a good indicator that this is fake,"</em> Robert Duncan of cybersecurity firm Netcraft told the Wall Street Journal. Legitimate organizations give you time to act. If an email demands you click within minutes or hours "before your account is locked," that pressure is the point — it's designed to bypass the part of your thinking that would otherwise catch the other red flags below.
              </p>
              <div style={{
                borderLeft: `4px solid ${S.coral}`,
                paddingLeft: "24px",
                margin: "24px 0",
                fontFamily: S.serif,
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: 1.45,
                color: S.white,
                fontStyle: "italic"
              }}>
                "Undue urgency, like asking you to click or call or text in a really short deadline, is a good indicator that this is fake."
              </div>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Michael Bruemmer, who heads global data-breach resolution at Experian, described the pattern directly: the scammer will <em>"wait for a real breach to make headlines, then ride the wave of public concern to trick people."</em>
              </p>
            </div>

            {/* Section 2 part 2 */}
            <div style={{ position: "relative" }}>
              
              {/* Evidence Card 3: AI Phishing Stats (Left Side) */}
              <div className="evidence-board-pin" style={{
                position: "absolute",
                left: "-250px",
                top: "10px",
                width: "210px",
                background: "#111111",
                border: "1px solid #2e2d2a",
                borderTop: "3px solid #c9a15c",
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
                  borderTop: "1px dashed #c9a15c",
                  opacity: 0.45,
                  pointerEvents: "none"
                }} />

                <div style={{ display: "flex", justifyContent: "space-between", color: "#666", fontSize: "7.5px", fontWeight: "bold", borderBottom: "1px solid #222", paddingBottom: "6px", marginBottom: "8px" }}>
                  <span>VECTOR: AI_ATTACK</span>
                  <span>INTEL // LLM_STATS</span>
                </div>

                <div style={{ fontWeight: "bold", color: S.white, fontSize: "10px", marginBottom: "8px" }}>
                  AI PHISHING GROWTH
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8.5px", marginBottom: "2px" }}>
                      <span>AI-GENERATED PHISH</span>
                      <span style={{ color: "#e04a3f", fontWeight: "bold" }}>80%</span>
                    </div>
                    <div style={{ height: "4px", background: "#222", borderRadius: "1px", overflow: "hidden" }}>
                      <div style={{ width: "80%", height: "100%", background: "#e04a3f" }} />
                    </div>
                  </div>
                  <div style={{ fontSize: "8px", color: "#666", lineHeight: 1.2 }}>
                    Large Language Models have fully eliminated grammar errors as a reliable filter.
                  </div>
                </div>
              </div>

              <h3 style={{ fontFamily: S.sans, fontSize: "15px", fontWeight: 800, color: S.white, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "8px" }}>
                2. Check the sender address, not the display name
              </h3>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Email clients show a display name ("Bank Security Team") that can say anything the sender wants. What matters is the actual address underneath it. Watch specifically for:
              </p>
              <ul style={{ paddingLeft: "20px", color: "#c8c8c0", fontFamily: S.serif, fontSize: "15px", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
                <li><strong>Domain typosquatting</strong> — `security@yourbank.com` versus `security@yourbank-secure.com` or `security@your-bank.com`</li>
                <li><strong>Free email providers</strong> claiming to be a corporate sender (a real bank will not email you from a Gmail address)</li>
                <li><strong>Compromised legitimate domains</strong> — researchers note a rise in phishing sent from genuinely compromised third-party vendor accounts, which means "the domain looks right" is no longer a fully reliable check on its own</li>
              </ul>

              <h3 style={{ fontFamily: S.sans, fontSize: "15px", fontWeight: 800, color: S.white, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "8px" }}>
                3. Genuine notices are specific; fake ones are vague
              </h3>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Because scammers usually don't actually have your real account data, their messages tend to stay generic — "Dear Customer" instead of your name, no partial account reference, no specific description of what data category was affected. A real notification from a company that already has your information will usually be able to reference some of it.
              </p>

              <h3 style={{ fontFamily: S.sans, fontSize: "15px", fontWeight: 800, color: S.white, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "8px" }}>
                4. Links and attachments
              </h3>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Never open an unsolicited attachment in a security-related email — legitimate notices direct you to information within the email body or to a website you navigate to yourself, not a file to download. Before clicking any link, hover over it (on desktop) to see the actual destination URL, which frequently reveals a domain that has nothing to do with the company being impersonated.
              </p>

              <h3 style={{ fontFamily: S.sans, fontSize: "15px", fontWeight: 800, color: S.white, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "8px" }}>
                5. AI has made "bad grammar" an unreliable tell
              </h3>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Older advice to watch for typos and broken English is increasingly outdated. Researchers estimate that up to 80% of phishing attempts are now AI-generated, producing polished, well-written emails that match a real company's tone and even personalize the message with your actual name if it's been exposed in a prior breach. Cornell University researchers cited by Techlicious describe the resulting emails as far harder for the average person to distinguish from the real thing. Grammar is no longer a safe signal either way — its absence doesn't confirm legitimacy.
              </p>

              <h3 style={{ fontFamily: S.sans, fontSize: "15px", fontWeight: 800, color: S.white, letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "8px" }}>
                6. Visual inconsistencies still exist, if you look closely
              </h3>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Even sophisticated forgeries sometimes get small details wrong: a footer that doesn't match previous emails from the same company, a logo that's slightly the wrong shade or resolution, formatting that looks hastily assembled compared to the company's usual communications. These are lower-confidence signals than the ones above, but worth a second look if something already feels off.
              </p>
            </div>

            {/* Section 3: Verification */}
            <div style={{ position: "relative" }}>
              
              {/* Evidence Card 4: Protocol Checklist (Right Side) */}
              <div className="evidence-board-pin" style={{
                position: "absolute",
                right: "-250px",
                top: "10px",
                width: "210px",
                background: "#121212",
                border: "1px solid #2e2d2a",
                borderLeft: "3px solid #4a9d6e",
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
                  borderTop: "1px dashed #4a9d6e",
                  opacity: 0.45,
                  pointerEvents: "none"
                }} />

                <div style={{ display: "flex", justifyContent: "space-between", color: "#666", fontSize: "7.5px", fontWeight: "bold", borderBottom: "1px solid #222", paddingBottom: "6px", marginBottom: "8px" }}>
                  <span>PROTOCOL CHECK</span>
                  <span>VERIFY // SECURE</span>
                </div>

                <div style={{ fontWeight: "bold", color: "#4a9d6e", fontSize: "10px", marginBottom: "8px" }}>
                  OUT-OF-BAND PROTOCOL
                </div>

                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "8.5px", color: "#aaa" }}>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #222" }}>
                      <td style={{ padding: "4px 0" }}>CLICK LINK</td>
                      <td style={{ textAlign: "right", color: "#e04a3f", fontWeight: "bold" }}>BLOCKED</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #222" }}>
                      <td style={{ padding: "4px 0" }}>OPEN ATTACHMENT</td>
                      <td style={{ textAlign: "right", color: "#e04a3f", fontWeight: "bold" }}>BLOCKED</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #222" }}>
                      <td style={{ padding: "4px 0" }}>CALL EMAIL PHONE</td>
                      <td style={{ textAlign: "right", color: "#e04a3f", fontWeight: "bold" }}>BLOCKED</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "4px 0" }}>DIRECT SITE SEARCH</td>
                      <td style={{ textAlign: "right", color: "#4a9d6e", fontWeight: "bold" }}>APPROVED</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: "#e04a3f", letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                The one verification step that beats all of the above
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                <strong style={{ color: S.white }}>Don't click anything in the email. Don't reply to it. Don't call any number listed in it.</strong>
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Instead, open a new browser tab, type the company's actual website address yourself, and check their official channels directly — a security notice section, official social media, or their published customer service number. If a breach is real and large enough to matter, it will be reported through multiple independent channels, not just the one email in your inbox. In the US, breaches affecting more than 500 people typically trigger reporting obligations that make them independently verifiable — you shouldn't have to take a single email's word for it.
              </p>
              <div style={{
                borderLeft: `4px solid ${S.coral}`,
                paddingLeft: "24px",
                margin: "24px 0",
                fontFamily: S.serif,
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: 1.45,
                color: S.white,
                fontStyle: "italic"
              }}>
                "Don't click anything in the email. Don't reply to it. Don't call any number listed in it."
              </div>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                This single habit — verify out-of-band, never through the contact method the message itself provides — defeats nearly every version of this scam, regardless of how convincing the email looks.
              </p>
            </div>

            {/* Section 4: If you clicked */}
            <div>
              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: "#e04a3f", letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                If you've already clicked
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                Act in this order:
              </p>
              <ol style={{ paddingLeft: "20px", color: "#c8c8c0", fontFamily: S.serif, fontSize: "15px", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                <li><strong style={{ color: S.white }}>Change the password</strong> on the account the email referenced — and anywhere else you reused that same password.</li>
                <li><strong style={{ color: S.white }}>Enable multi-factor authentication</strong> using an authenticator app or hardware key, not SMS, on every account that supports it.</li>
                <li><strong style={{ color: S.white }}>Run a malware scan</strong> with reputable security software, particularly if you opened an attachment.</li>
                <li><strong style={{ color: S.white }}>If you entered financial information</strong>, contact your bank immediately and consider a card freeze.</li>
                <li><strong style={{ color: S.white }}>Monitor your accounts</strong> for unfamiliar activity over the following weeks, not just the following days.</li>
                <li><strong style={{ color: S.white }}>Report it.</strong> In the US, the FTC accepts phishing reports at ReportFraud.ftc.gov; most email clients also have a built-in "Report Phishing" option that helps providers block similar messages for others.</li>
              </ol>
            </div>

            {/* Section 5: Alert fatigue */}
            <div>
              <h2 style={{ fontFamily: S.sans, fontSize: "20px", fontWeight: 800, color: "#e04a3f", letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "14px", marginTop: "12px" }}>
                The uncomfortable part: this is now a permanent condition
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "15px", color: "#c8c8c0", lineHeight: 1.75, marginBottom: "16px" }}>
                As breach notifications become a routine feature of digital life, there's a real risk of alert fatigue — becoming so accustomed to receiving them that every new one gets the same reflexive, unquestioning response, which is precisely the vulnerability scammers are counting on. Treating every breach notice — real or fake — with the same brief, deliberate pause before acting is not paranoia. Given the volume above, it's now a basic hygiene habit, the same category as locking your front door.
              </p>
            </div>

            {/* Section 6 / Sources */}
            <div style={{ borderTop: `1px solid ${S.line}`, paddingTop: "24px", marginTop: "20px" }}>
              <h2 style={{ fontFamily: S.sans, fontSize: "14px", fontWeight: 800, color: "#e04a3f", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "10px" }}>
                Sources
              </h2>
              <p style={{ fontFamily: S.serif, fontSize: "14px", color: S.gray, lineHeight: 1.7, margin: 0 }}>
                This guide draws on reporting from the Wall Street Journal (via Daily Voice), Techlicious, CyberSierra, WeLiveSecurity (ESET), and public advisories from Alamo Colleges following the 2026 Instructure Canvas breach. Specific figures on breach volume and notification counts are cited from these sources directly; where a claim originates from a single source rather than being independently corroborated, that source is named inline above.
              </p>
              <p style={{ fontFamily: S.serif, fontSize: "14px", color: S.gray, lineHeight: 1.7, marginTop: "14px", marginBottom: 0 }}>
                <em>Check whether your own email or phone number appears in a documented, verified exposure — <button onClick={() => window.location.href = "/check"} style={{ background: "none", border: "none", color: "#e04a3f", cursor: "pointer", textDecoration: "underline", padding: 0, font: "inherit" }}>use the LeakLens registry search</button>. Nothing is stored after your search completes.</em>
              </p>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
