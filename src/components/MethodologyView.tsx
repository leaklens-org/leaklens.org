import React from "react";
import { ShieldAlert, FileText, Key, Heart, CheckCircle } from "lucide-react";
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

const principles = [
  {
    icon: <ShieldAlert size={22} color="#e05252" />,
    title: "1. Data Discovery & Sourcing",
    desc: "LeakLens systematically monitors public fileservers, misconfigured cloud repositories, and civic reports for leaked citizen records. We strictly avoid sourcing data via hacking — we only index databases that are already actively exposed.",
  },
  {
    icon: <FileText size={22} color={S.white} />,
    title: "2. Empirical Data Verification",
    desc: "Before indexing a leak, investigative journalism teams (such as OCCRP, RFE/RL, and other independent outlets) cross-reference a randomized control group against live sources to confirm data validity.",
  },
  {
    icon: <Key size={22} color={S.gray} />,
    title: "3. Decentralized Browser-Side Audits",
    desc: "Your email never reaches our servers. The browser computes an irreversible SHA-256 hash locally and only a short prefix is checked using the k-Anonymity privacy model.",
  },
  {
    icon: <Heart size={22} color="#e05252" />,
    title: "4. Explicit Non-Commerciality",
    desc: "We sell no insurance, display no ads, and charge nothing for access. LeakLens was designed solely to assist residents in regions lacking dedicated Data Protection Authorities.",
  },
];

export default function MethodologyView() {
  return (
    <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.3 }}>
      {/* Header */}
      <div style={{ padding:"36px 40px 28px", borderBottom:`1px solid ${S.line}` }}>
        <div style={{ fontFamily:S.sans, fontSize:11, fontWeight:700, letterSpacing:"0.1em", color: S.coral, textTransform:"uppercase", marginBottom:10 }}>
          Verification Standards
        </div>
        <h1 style={{ fontFamily:S.sans, fontWeight:800, fontSize:42, color: S.white, margin:0, lineHeight:1.1 }}>
          Our Methodology
        </h1>
        <p style={{ fontFamily:S.serif, fontSize:16, color: S.gray, marginTop:12 }}>
          An open, neutral protocol for verifying corporate negligence, government data leaks, and civic exposure indexes.
        </p>
      </div>

      {/* Principles */}
      <div style={{ padding:"32px 40px", borderBottom:`1px solid ${S.line}`, display:"flex", flexDirection:"column", gap:0 }}>
        {principles.map((p, i) => (
          <div key={i} style={{ display:"flex", gap:24, padding:"22px 0", borderBottom: i < principles.length - 1 ? `1px solid ${S.line}` : "none" }}>
            <div style={{ width:48, height:48, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", background: S.bg2, border:`1px solid ${S.line}` }}>
              {p.icon}
            </div>
            <div>
              <h3 style={{ fontFamily:S.sans, fontWeight:800, fontSize:17, color: S.white, margin:"0 0 8px" }}>{p.title}</h3>
              <p style={{ fontFamily:S.serif, fontSize:14, color: S.gray, margin:0, lineHeight:1.7 }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Crypto block */}
      <div style={{ margin:"32px 40px", background:"#0a0a0a", border:`1px solid ${S.line}`, padding:32 }}>
        <h3 style={{ fontFamily:S.sans, fontWeight:800, fontSize:22, color: S.white, margin:"0 0 12px" }}>
          The k-Anonymity Cryptographic Check
        </h3>
        <p style={{ fontFamily:S.serif, fontSize:14, color: S.gray, margin:"0 0 24px", lineHeight:1.7 }}>
          To guarantee anonymity, we do not query our servers with your plain email. The protocol works as follows:
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:16 }}>
          {[
            { phase:"PHASE 01", title:"Local Hashing", text:"The browser instantly converts user@mail.com into an irreversible SHA-256 signature: e3b0c44298fc1c14..." },
            { phase:"PHASE 02", title:"Prefix Partitioning", text:"Only the first 5 characters e3b0c are sent to the registry. The database returns all hashes matching those 5 characters." },
            { phase:"PHASE 03", title:"Client Matching", text:"Your browser compares the returned list against the full SHA-256 hash locally. The server never learns your full email." },
          ].map(ph => (
            <div key={ph.phase} style={{ background:"#141414", border:`1px solid ${S.line}`, padding:18 }}>
              <div style={{ fontFamily:S.sans, fontWeight:800, fontSize:11, letterSpacing:"0.1em", color: S.coral, marginBottom:8 }}>{ph.phase}</div>
              <h4 style={{ fontFamily:S.sans, fontWeight:800, fontSize:14, color: S.white, margin:"0 0 8px" }}>{ph.title}</h4>
              <p style={{ fontFamily:S.serif, fontSize:12, color: S.gray, margin:0, lineHeight:1.6 }}>{ph.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust */}
      <div style={{ margin:"0 40px 40px", border:`1px dashed ${S.line}`, padding:24, textAlign:"center" }}>
        <h4 style={{ fontFamily:S.sans, fontWeight:800, fontSize:14, color: S.white, margin:"0 0 16px" }}>Independent Audits & Open Code</h4>
        <div style={{ display:"flex", flexWrap:"wrap", gap:24, justifyContent:"center" }}>
          {["Open-Source Codebase (Verified)", "Local-only Computation (Assured)", "Zero Tracking Analytics (Confirmed)"].map(badge => (
            <span key={badge} style={{ display:"flex", alignItems:"center", gap:7, fontFamily:S.sans, fontWeight:700, fontSize:12, color: S.gray }}>
              <CheckCircle size={14} color="#4db86a" /> {badge}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
