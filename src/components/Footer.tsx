import React, { useState } from "react";
import { X, FileCode } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

const S = {
  sans: "'Arial Narrow', Arial, sans-serif" as const,
  coral: "#D6A24C",
  gray: "#A8A8A0",
  line: "#2E2E2C",
  bg: "#141414",
  bg2: "#1B1B1B",
  white: "#F5F5F0",
  mono: "'Courier New', Courier, monospace" as const,
};

export default function Footer({ setActiveTab }: FooterProps) {
  const [apiOpen, setApiOpen] = useState(false);

  const link = (label: string, tab: string) => (
    <button
      key={label}
      onClick={() => setActiveTab(tab)}
      style={{ background:"none", border:"none", cursor:"pointer", color: S.gray, fontFamily: S.sans, fontSize:12, fontWeight:700, letterSpacing:"0.03em" }}
      onMouseEnter={e => (e.currentTarget.style.color = S.white)}
      onMouseLeave={e => (e.currentTarget.style.color = S.gray)}
    >
      {label}
    </button>
  );

  return (
    <>
      <footer style={{ padding:"28px 40px", borderTop:`1px solid ${S.line}`, background: S.bg, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:14 }}>
        <span style={{ fontFamily:S.sans, fontSize:12, color: S.gray }}>
          LeakLens — independent civic project. Not affiliated with any government or financial institution.
        </span>
        <div style={{ display:"flex", gap:18, alignItems:"center", flexWrap:"wrap" }}>
          {link("About", "about")}
          <span style={{ color: S.line }}>·</span>
          {link("Methodology", "methodology")}
          <span style={{ color: S.line }}>·</span>
          <button
            onClick={() => setApiOpen(true)}
            style={{ background:"none", border:"none", cursor:"pointer", color: S.gray, fontFamily: S.sans, fontSize:12, fontWeight:700 }}
            onMouseEnter={e => (e.currentTarget.style.color = S.white)}
            onMouseLeave={e => (e.currentTarget.style.color = S.gray)}
          >
            API
          </button>
          <span style={{ color: S.line }}>·</span>
          {link("Contact", "about")}
          <span style={{ color: S.line }}>·</span>
          <a
            href="https://x.com/leaklens_org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration:"none", color: S.gray, fontFamily: S.sans, fontSize:12, fontWeight:700 }}
            onMouseEnter={e => (e.currentTarget.style.color = S.white)}
            onMouseLeave={e => (e.currentTarget.style.color = S.gray)}
          >
            Twitter / X
          </a>
        </div>
      </footer>

      {apiOpen && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.78)", display:"flex", alignItems:"center", justifyContent:"center", padding:24, zIndex:300 }}>
          <div style={{ background: S.bg2, border:`1px solid ${S.line}`, maxWidth:640, width:"100%", padding:32, position:"relative" }}>
            <button onClick={() => setApiOpen(false)} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", cursor:"pointer", color: S.gray }}>
              <X size={20} />
            </button>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8, borderBottom:`1px solid ${S.line}`, paddingBottom:16 }}>
              <FileCode size={18} color={S.coral} />
              <h3 style={{ fontFamily:S.sans, fontWeight:800, fontSize:18, color: S.white, margin:0 }}>API Documentation</h3>
            </div>
            <p style={{ fontFamily:S.sans, fontSize:12, color: S.gray, marginBottom:20 }}>
              LeakLens provides a free REST endpoint for human rights monitoring apps and civic portals.
            </p>
            {[
              { method:"GET", endpoint:"/api/v1/audit/hash/:prefix", desc:"Checks first 5 characters of SHA-256 hash. Returns matches for local comparison (k-Anonymity model).", example:"curl https://leaklens.org/api/v1/audit/hash/e3b0c" },
              { method:"GET", endpoint:"/api/v1/registry/leaks", desc:"Returns the full list of documented registry leaks with dates, sources and methodology.", example:"curl https://leaklens.org/api/v1/registry/leaks" },
            ].map(ep => (
              <div key={ep.endpoint} style={{ background:"#0e0e0e", border:`1px solid ${S.line}`, padding:16, marginBottom:12 }}>
                <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:6 }}>
                  <span style={{ background:"#1a5c30", color:"#fff", fontFamily:S.sans, fontWeight:800, fontSize:10, padding:"2px 6px", letterSpacing:"0.05em" }}>{ep.method}</span>
                  <span style={{ fontFamily:S.sans, fontWeight:700, fontSize:13, color: S.white }}>{ep.endpoint}</span>
                </div>
                <p style={{ fontFamily:S.sans, fontSize:12, color: S.gray, margin:"0 0 8px" }}>{ep.desc}</p>
                <code style={{ fontFamily:S.mono, fontSize:11, color: S.coral, display:"block" }}>{ep.example}</code>
              </div>
            ))}
            <button
              onClick={() => setApiOpen(false)}
              style={{ width:"100%", background: S.coral, color:"#141414", border:"none", cursor:"pointer", fontFamily:S.sans, fontWeight:800, fontSize:12, letterSpacing:"0.06em", textTransform:"uppercase", padding:"10px 0", marginTop:8 }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
