import React, { useState } from "react";
import { Heart, Check, Shield } from "lucide-react";
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

export default function AboutView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const subject = encodeURIComponent(`LeakLens Inquiry from ${name || "Anonymous"}`);
    const body = encodeURIComponent(`From: ${name || "Anonymous"}\nReply-To: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:info@leaklens.org?subject=${subject}&body=${body}`;
    setTimeout(() => { setName(""); setEmail(""); setMessage(""); }, 2000);
  };

  return (
    <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.3 }}>
      {/* Header */}
      <div style={{ padding:"36px 40px 28px", borderBottom:`1px solid ${S.line}` }}>
        <div style={{ fontFamily:S.sans, fontSize:11, fontWeight:700, letterSpacing:"0.1em", color: S.coral, textTransform:"uppercase", marginBottom:10 }}>
          Civic Watchdog Charter
        </div>
        <h1 style={{ fontFamily:S.sans, fontWeight:800, fontSize:42, color: S.white, margin:0, lineHeight:1.1 }}>
          About LeakLens
        </h1>
        <p style={{ fontFamily:S.serif, fontSize:16, color: S.gray, marginTop:12 }}>
          An independent civic-tech initiative protecting data sovereignty and auditing institutional negligence.
        </p>
      </div>

      {/* Grid */}
      <div style={{ padding:"32px 40px", borderBottom:`1px solid ${S.line}`, display:"grid", gridTemplateColumns:"2fr 1fr", gap:40 }}>
        <div>
          <h3 style={{ fontFamily:S.sans, fontWeight:800, fontSize:20, color: S.white, margin:"0 0 14px" }}>Why We Monitor Data Negligence</h3>
          <p style={{ fontFamily:S.serif, fontSize:15, color:"#c8c8c0", lineHeight:1.75, margin:"0 0 16px" }}>
            In many countries, dedicated, well-funded Data Protection Authorities simply do not exist. In other regions, state institutions are themselves the primary sources of digital negligence or use surveillance against their own citizens.
          </p>
          <p style={{ fontFamily:S.serif, fontSize:15, color:"#c8c8c0", lineHeight:1.75, margin:"0 0 24px" }}>
            LeakLens was founded in <strong style={{color:S.white}}>2026</strong> as a non-commercial, civilian-led technology watchdog to collect, verify, and catalog publicly distributed database exposures.
          </p>
          <h3 style={{ fontFamily:S.sans, fontWeight:800, fontSize:20, color: S.white, margin:"0 0 14px" }}>Partners & Source Network</h3>
          <p style={{ fontFamily:S.serif, fontSize:15, color:"#c8c8c0", lineHeight:1.75, margin:0 }}>
            We work alongside verified journalists and civic advocacy groups including <strong style={{color:S.white}}>OCCRP</strong>, <strong style={{color:S.white}}>RFE/RL</strong> and <strong style={{color:S.white}}>independent media</strong>.
          </p>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
          <div style={{ border:`1px solid ${S.line}`, background: S.bg2, padding:20 }}>
            <div style={{ fontFamily:S.sans, fontWeight:700, fontSize:11, letterSpacing:"0.08em", textTransform:"uppercase", color: S.coral, marginBottom:16, paddingBottom:12, borderBottom:`1px solid ${S.line}` }}>
              Transparency Matrix
            </div>
            {[
              { k:"Status", v:"Independent / NGO" },
              { k:"Founded", v:"2026" },
              { k:"Funding", v:"100% Civic Grants", red:true },
              { k:"Advertising", v:"None" },
              { k:"Tracking Cookies", v:"None" },
            ].map(r => (
              <div key={r.k} style={{ display:"flex", justifyContent:"space-between", marginBottom:10, fontFamily:S.sans, fontSize:12 }}>
                <span style={{ color: S.gray }}>{r.k}:</span>
                <span style={{ fontWeight:700, color: r.red ? S.coral : S.white }}>{r.v}</span>
              </div>
            ))}
          </div>
          <div style={{ border:`1px dashed ${S.line}`, padding:20, textAlign:"center" }}>
            <Heart size={18} color="#e05252" style={{ margin:"0 auto 10px" }} />
            <h5 style={{ fontFamily:S.sans, fontWeight:800, fontSize:13, color: S.white, margin:"0 0 8px" }}>No Monetization Promise</h5>
            <p style={{ fontFamily:S.serif, fontSize:12, color: S.gray, margin:0, lineHeight:1.6 }}>
              We never collect search history or monetize exposure statistics. Code is open-source and publicly auditable.
            </p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div style={{ padding:"28px 40px 40px" }}>
        <h3 style={{ fontFamily:S.sans, fontWeight:800, fontSize:20, color: S.white, margin:"0 0 8px" }}>Secure Inquiries & Feedback</h3>
        <p style={{ fontFamily:S.serif, fontSize:14, color: S.gray, margin:"0 0 24px", lineHeight:1.7 }}>
          A question, feedback or a database tip? Contact us directly at <strong style={{color:S.white}}>info@leaklens.org</strong>. For confidential materials, use a burner email with PGP encryption.
        </p>
        {sent ? (
          <div style={{ background:"rgba(80,180,100,0.08)", border:"1px solid rgba(80,180,100,0.3)", padding:24, textAlign:"center" }}>
            <Check size={32} color="#4db86a" style={{ margin:"0 auto 12px" }} />
            <h4 style={{ fontFamily:S.sans, fontWeight:800, fontSize:16, color:"#4db86a", margin:"0 0 8px" }}>Message Received</h4>
            <p style={{ fontFamily:S.serif, fontSize:13, color: S.gray, margin:"0 0 14px" }}>Our team will address your message within 48 hours.</p>
            <button onClick={() => setSent(false)} style={{ background:"none", border:"none", cursor:"pointer", fontFamily:S.sans, fontWeight:700, fontSize:12, color:"#4db86a", textDecoration:"underline" }}>
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:16, maxWidth:600 }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              <div>
                <label style={{ fontFamily:S.sans, fontWeight:700, fontSize:11, letterSpacing:"0.07em", textTransform:"uppercase", color: S.gray, display:"block", marginBottom:6 }}>Name (optional)</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Anonymous Citizen"
                  style={{ width:"100%", height:42, padding:"0 12px", background: S.bg, border:`1px solid ${S.line}`, color: S.white, fontFamily:S.sans, fontSize:13, outline:"none" }} />
              </div>
              <div>
                <label style={{ fontFamily:S.sans, fontWeight:700, fontSize:11, letterSpacing:"0.07em", textTransform:"uppercase", color: S.gray, display:"block", marginBottom:6 }}>Reply Email</label>
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="citizen@protonmail.com"
                  style={{ width:"100%", height:42, padding:"0 12px", background: S.bg, border:`1px solid ${S.line}`, color: S.white, fontFamily:S.sans, fontSize:13, outline:"none" }} />
              </div>
            </div>
            <div>
              <label style={{ fontFamily:S.sans, fontWeight:700, fontSize:11, letterSpacing:"0.07em", textTransform:"uppercase", color: S.gray, display:"block", marginBottom:6 }}>Message or Leak Details</label>
              <textarea required rows={5} value={message} onChange={e => setMessage(e.target.value)} placeholder="I found an unsecured S3 bucket at..."
                style={{ width:"100%", padding:"10px 12px", background: S.bg, border:`1px solid ${S.line}`, color: S.white, fontFamily:S.serif, fontSize:13, outline:"none", resize:"vertical" }} />
            </div>
            <button type="submit"
              style={{ alignSelf:"flex-start", background: S.coral, color:"#141414", border:"none", fontFamily:S.sans, fontWeight:800, fontSize:12, textTransform:"uppercase", letterSpacing:"0.06em", padding:"11px 28px", cursor:"pointer" }}>
              Send Encrypted Message
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}
