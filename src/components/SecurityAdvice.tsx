import React from "react";
import { ShieldCheck, ShieldAlert, Key, Smartphone, FileText } from "lucide-react";
import { motion } from "motion/react";

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

const guides = [
  {
    title: "Immediate Post-Breach Response",
    icon: <ShieldAlert size={18} color="#e05252" />,
    steps: [
      "Change passwords on compromised accounts and any account sharing that password.",
      "Enable Multi-Factor Authentication (MFA) on personal and professional email immediately.",
      "Monitor bank statements closely for unauthorized debit requests or credit inquiries.",
      "Alert contacts to disregard suspicious messages purporting to come from your number or email.",
    ],
  },
  {
    title: "Telecom & SIM Card Defense",
    icon: <Smartphone size={18} color={S.white} />,
    steps: [
      "Call your mobile operator and request a SIM-swap lock or carrier transfer PIN.",
      "Do not list your primary phone number publicly on social profiles or online registries.",
      "Move critical accounts' MFA from SMS to authentication apps or physical FIDO keys.",
      "Use a VoIP burner number (e.g. Google Voice) for forms that mandate a phone number.",
    ],
  },
  {
    title: "Modern Credential Hygiene",
    icon: <Key size={18} color={S.gray} />,
    steps: [
      "Adopt the Diceware passphrase model: four or more random, non-associated words.",
      "Use a secure password manager to generate, audit, and store unique passkeys.",
      "Never use employer-linked credentials for personal financial or e-government portals.",
      "Routinely revoke third-party API or OAuth connections to apps you no longer use.",
    ],
  },
  {
    title: "Asserting Rights in Lacking Regions",
    icon: <FileText size={18} color="#6ea8d8" />,
    steps: [
      "If an organization leaks your data, send a formal written notice requesting confirmation of the breach.",
      "In regions without a functional DPA, file complaints through regional ombudsmen or civic watchdogs.",
      "Participate in civic campaigns urging ratification of basic digital privacy charters.",
      "Demand that vendors provide cryptographically verifiable audit trails for access to your account.",
    ],
  },
];

export default function SecurityAdvice() {
  return (
    <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.3 }}>
      {/* Header */}
      <div style={{ padding:"36px 40px 28px", borderBottom:`1px solid ${S.line}` }}>
        <div style={{ fontFamily:S.sans, fontSize:11, fontWeight:700, letterSpacing:"0.1em", color: S.coral, textTransform:"uppercase", marginBottom:10 }}>
          Digital Defense Playbooks
        </div>
        <h1 style={{ fontFamily:S.sans, fontWeight:800, fontSize:42, color: S.white, margin:0, lineHeight:1.1 }}>
          Personal Cybersecurity Guide
        </h1>
        <p style={{ fontFamily:S.serif, fontSize:16, color: S.gray, marginTop:12 }}>
          Actionable, non-commercial advice to protect your digital sovereignty and secure your identity records.
        </p>
      </div>

      {/* Grid */}
      <div style={{ padding:"32px 40px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, borderBottom:`1px solid ${S.line}` }}>
        {guides.map((g, i) => (
          <div key={i} style={{ border:`1px solid ${S.line}`, background: S.bg2, padding:24 }}>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16, paddingBottom:14, borderBottom:`1px solid ${S.line}` }}>
              <div style={{ width:36, height:36, display:"flex", alignItems:"center", justifyContent:"center", background: S.bg, border:`1px solid ${S.line}`, flexShrink:0 }}>{g.icon}</div>
              <h3 style={{ fontFamily:S.sans, fontWeight:800, fontSize:15, color: S.white, margin:0 }}>{g.title}</h3>
            </div>
            <ol style={{ margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
              {g.steps.map((step, j) => (
                <li key={j} style={{ display:"flex", gap:12, fontFamily:S.serif, fontSize:13, color: S.gray, lineHeight:1.65 }}>
                  <span style={{ fontFamily:S.sans, fontWeight:800, fontSize:11, color: S.coral, flexShrink:0, minWidth:16 }}>{String(j + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ margin:"32px 40px 40px", border:`1px solid ${S.line}`, background: S.bg2, padding:28, display:"flex", justifyContent:"space-between", alignItems:"center", gap:24, flexWrap:"wrap" }}>
        <div>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
            <ShieldCheck size={18} color="#4db86a" />
            <h4 style={{ fontFamily:S.sans, fontWeight:800, fontSize:17, color: S.white, margin:0 }}>Are your critical accounts fully protected?</h4>
          </div>
          <p style={{ fontFamily:S.serif, fontSize:13, color: S.gray, margin:0, lineHeight:1.7, maxWidth:520 }}>
            Take 10 minutes: check for email forwarding rules, verify your backup recovery number is correct, and confirm recovery passwords are unique.
          </p>
        </div>
        <button
          onClick={() => alert("Self-audit checklist:\n1. Check active sessions & logins\n2. Check forwarding rules in Settings\n3. Verify 2FA is active\n4. Remove unused API app permissions.")}
          style={{ background: S.coral, color:"#141414", border:"none", fontFamily:S.sans, fontWeight:800, fontSize:12, textTransform:"uppercase", letterSpacing:"0.06em", padding:"11px 24px", cursor:"pointer", flexShrink:0 }}
        >
          Begin Self-Audit
        </button>
      </div>
    </motion.div>
  );
}
