import React from "react";
import { ShieldCheck, ShieldAlert, FileText, ArrowLeft, RefreshCw, HelpCircle, Globe } from "lucide-react";
import { DocumentedLeak, DOCUMENTED_LEAKS } from "../data";
import { motion } from "motion/react";

interface Props {
  email: string;
  isExposed: boolean;
  exposedCount: number;
  results: DocumentedLeak[];
  onReset: () => void;
}

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

function sevColor(sev: DocumentedLeak["severity"]) {
  return {
    Critical: { color:"#e05252", border:"rgba(224,82,82,0.3)", bg:"rgba(224,82,82,0.08)" },
    High:     { color:"#D6A24C", border:"rgba(214,162,76,0.3)", bg:"rgba(214,162,76,0.08)" },
    Medium:   { color:"#c9b850", border:"rgba(201,184,80,0.3)", bg:"rgba(201,184,80,0.08)" },
    Low:      { color:"#6ea8d8", border:"rgba(110,168,216,0.3)", bg:"rgba(110,168,216,0.08)" },
  }[sev] || { color: S.gray, border: S.line, bg:"transparent" };
}

export default function ReportView({ email, isExposed, exposedCount, results, onReset }: Props) {
  return (
    <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.35 }}>
      {/* Back */}
      <div style={{ padding:"28px 40px 0" }}>
        <button onClick={onReset}
          style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:7, color: S.gray, fontFamily:S.sans, fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em" }}
          onMouseEnter={e => (e.currentTarget.style.color = S.white)}
          onMouseLeave={e => (e.currentTarget.style.color = S.gray)}
        >
          <ArrowLeft size={14} /> Back to search
        </button>
      </div>

      {/* Status */}
      <div style={{ margin:"20px 40px", padding:"28px", border:`1px solid ${isExposed ? "rgba(224,82,82,0.35)" : "rgba(80,180,100,0.35)"}`, background: isExposed ? "rgba(224,82,82,0.05)" : "rgba(80,180,100,0.05)", display:"flex", alignItems:"flex-start", gap:20, flexWrap:"wrap" }}>
        <div style={{ width:52, height:52, borderRadius:"50%", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", background: isExposed ? "rgba(224,82,82,0.15)" : "rgba(80,180,100,0.15)" }}>
          {isExposed ? <ShieldAlert size={26} color="#e05252" /> : <ShieldCheck size={26} color="#4db86a" />}
        </div>
        <div style={{ flex:1 }}>
          <div style={{ fontFamily:S.sans, fontWeight:700, fontSize:11, letterSpacing:"0.1em", color: S.gray, textTransform:"uppercase", marginBottom:6 }}>
            Audit Report · LeakLens
          </div>
          <h2 style={{ fontFamily:S.sans, fontWeight:800, fontSize:26, color: S.white, margin:"0 0 8px", lineHeight:1.1 }}>
            {isExposed
              ? `Exposure Detected in ${exposedCount} Documented Incident${exposedCount > 1 ? "s" : ""}`
              : "No Documented Exposure Detected"}
          </h2>
          <p style={{ fontFamily:S.serif, fontSize:14, color: S.gray, margin:"0 0 6px" }}>
            Audited address: <strong style={{ color: S.white }}>{email}</strong>
          </p>
          <p style={{ fontFamily:S.serif, fontSize:13, color: S.gray, margin:0, lineHeight:1.6 }}>
            {isExposed
              ? "Your data was identified in audited public data leaks. Take action using the protection guides below."
              : "This email was not identified in any monitored leaks. Stay vigilant, new breaches are indexed continuously, and always maintain active defenses."}
          </p>
        </div>
        <button onClick={onReset}
          style={{ height:40, padding:"0 20px", background: isExposed ? S.coral : "transparent", color: isExposed ? "#141414" : "#4db86a", border: isExposed ? "none" : "1px solid rgba(80,180,100,0.4)", fontFamily:S.sans, fontWeight:800, fontSize:11, textTransform:"uppercase", letterSpacing:"0.05em", cursor:"pointer", display:"flex", alignItems:"center", gap:6, flexShrink:0 }}>
          <RefreshCw size={13} /> Check another
        </button>
      </div>

      {isExposed ? (
        <div style={{ padding:"0 40px 40px" }}>
          <div style={{ fontFamily:S.sans, fontWeight:700, fontSize:11, letterSpacing:"0.1em", color: S.coral, textTransform:"uppercase", margin:"0 0 20px", paddingBottom:12, borderBottom:`1px solid ${S.line}` }}>
            Exposure Sources · {exposedCount}
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:24 }}>
            {results.map((leak, i) => {
              const sc = sevColor(leak.severity);
              return (
                <motion.div key={leak.id} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay: i * 0.1, duration:0.3 }}
                  style={{ border:`1px solid ${S.line}`, background: S.bg2 }}>
                  <div style={{ padding:"16px 22px", borderBottom:`1px solid ${S.line}`, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:10 }}>
                    <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                      <span style={{ fontFamily:S.sans, fontWeight:700, fontSize:10, letterSpacing:"0.08em", textTransform:"uppercase", padding:"2px 7px", color: sc.color, background: sc.bg, border:`1px solid ${sc.border}` }}>{leak.severity}</span>
                      <span style={{ fontFamily:S.sans, fontWeight:700, fontSize:11, color: S.gray }}>{new Date(leak.date).toLocaleDateString("en-US")}</span>
                    </div>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%" }}>
                      <span style={{ fontFamily:S.sans, fontWeight:700, fontSize:11, color: S.gray }}>
                        Verified by: <strong style={{ color: S.white }}>{leak.verificationSource}</strong>
                      </span>
                      {leak.referenceUrl && (
                        <a href={leak.referenceUrl} target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:4, fontFamily:S.sans, fontWeight:700, fontSize:11, color: S.coral, textDecoration:"none", borderBottom:`1px solid ${S.coral}` }}>
                          <Globe size={11} /> Source Link ↗
                        </a>
                      )}
                    </div>
                  </div>
                  <div style={{ padding:"20px 22px" }}>
                    <h4 style={{ fontFamily:S.sans, fontWeight:800, fontSize:20, color: S.white, margin:"0 0 6px" }}>{leak.title}</h4>
                    <p style={{ fontFamily:S.sans, fontSize:12, color: S.gray, margin:"0 0 14px" }}>
                      Institution: <strong style={{ color: S.white }}>{leak.institution}</strong>
                      {" · "} Records: <strong style={{ color: S.white }}>{leak.size.toLocaleString()}</strong>
                    </p>
                    <p style={{ fontFamily:S.serif, fontSize:14, color:"#c8c8c0", lineHeight:1.7, margin:"0 0 18px" }}>{leak.description}</p>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:18 }}>
                      <div style={{ background: S.bg, border:`1px solid ${S.line}`, padding:14 }}>
                        <div style={{ fontFamily:S.sans, fontWeight:700, fontSize:10, letterSpacing:"0.08em", textTransform:"uppercase", color: S.coral, marginBottom:10 }}>Exposed Fields</div>
                        <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                          {leak.exposedData.map(f => <span key={f} style={{ fontFamily:S.sans, fontSize:11, fontWeight:700, padding:"2px 7px", border:`1px solid ${S.line}`, color: S.white, background:"#0e0e0e" }}>{f}</span>)}
                        </div>
                      </div>
                      <div style={{ background: S.bg, border:`1px solid ${S.line}`, padding:14 }}>
                        <div style={{ fontFamily:S.sans, fontWeight:700, fontSize:10, letterSpacing:"0.08em", textTransform:"uppercase", color: S.gray, marginBottom:10 }}>Methodology</div>
                        <p style={{ fontFamily:S.serif, fontSize:12, color: S.gray, margin:0, lineHeight:1.6 }}>{leak.methodology}</p>
                      </div>
                    </div>
                    <div style={{ borderTop:`1px solid ${S.line}`, paddingTop:16 }}>
                      <div style={{ fontFamily:S.sans, fontWeight:700, fontSize:10, letterSpacing:"0.08em", textTransform:"uppercase", color:"#e05252", marginBottom:10 }}>Recommended Actions</div>
                      <ol style={{ margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:7 }}>
                        {leak.protectionAdvice.map((a, i) => (
                          <li key={i} style={{ display:"flex", gap:10, fontFamily:S.serif, fontSize:13, color:"#c8c8c0", lineHeight:1.6 }}>
                            <span style={{ fontFamily:S.sans, fontWeight:800, fontSize:11, color:"#e05252", flexShrink:0 }}>{i+1}.</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div style={{ marginTop:28, border:`1px solid ${S.line}`, padding:"20px 22px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:10 }}>
              <HelpCircle size={14} color={S.gray} />
              <span style={{ fontFamily:S.sans, fontWeight:700, fontSize:12, color: S.white }}>How did we find this?</span>
            </div>
            <p style={{ fontFamily:S.serif, fontSize:13, color: S.gray, margin:0, lineHeight:1.7 }}>
              LeakLens does not store email addresses. When you search, your browser locally computes an irreversible hash and checks it against verified data from <strong style={{color:S.white}}>OCCRP</strong>, <strong style={{color:S.white}}>RFE/RL</strong> and <strong style={{color:S.white}}>independent media</strong>. Your data remains private.
            </p>
          </div>
        </div>
      ) : (
        <div style={{ padding:"0 40px 40px" }}>
          <div style={{ border:`1px solid ${S.line}`, background: S.bg2, padding:28, marginBottom:20 }}>
            <h3 style={{ fontFamily:S.sans, fontWeight:800, fontSize:18, color: S.white, margin:"0 0 12px" }}>Digital Hygiene Checklist</h3>
            <p style={{ fontFamily:S.serif, fontSize:14, color: S.gray, margin:"0 0 20px", lineHeight:1.6 }}>
              No exposure was found in monitored indices. Still, maintain active defenses:
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:16 }}>
              {[
                { n:"01", t:"Passphrases", d:"Use 4+ random words. Store them in a password manager." },
                { n:"02", t:"SIM Lock", d:"Ask your carrier to require a PIN before any SIM swap." },
                { n:"03", t:"MFA Auth", d:"Use an authenticator app instead of SMS codes." },
              ].map(c => (
                <div key={c.n} style={{ background: S.bg, border:`1px solid ${S.line}`, padding:16 }}>
                  <span style={{ fontFamily:S.sans, fontWeight:800, fontSize:22, color: S.coral }}>{c.n}</span>
                  <h4 style={{ fontFamily:S.sans, fontWeight:800, fontSize:14, color: S.white, margin:"10px 0 6px" }}>{c.t}</h4>
                  <p style={{ fontFamily:S.serif, fontSize:12, color: S.gray, margin:0, lineHeight:1.6 }}>{c.d}</p>
                </div>
              ))}
            </div>
          </div>
          <button onClick={onReset}
            style={{ background: S.coral, color:"#141414", border:"none", fontFamily:S.sans, fontWeight:800, fontSize:12, textTransform:"uppercase", letterSpacing:"0.06em", padding:"11px 28px", cursor:"pointer" }}>
            Check another email
          </button>
        </div>
      )}
    </motion.div>
  );
}
