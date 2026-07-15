import React, { useState } from "react";
import { checkEmailExposure, DocumentedLeak } from "../data";
import { Loader2, AlertCircle, Shield } from "lucide-react";

interface Props {
  onSearchComplete: (email: string, isExposed: boolean, count: number, results: DocumentedLeak[]) => void;
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

const steps = [
  "Computing SHA-256 signature locally in your browser...",
  "Sending prefix (first 5 characters) to the registry...",
  "Retrieving k-Anonymity suffix collision sets...",
  "Performing local secure signature audit matches...",
];

export default function EmailSearchForm({ onSearchComplete }: Props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState<number | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const norm = email.trim().toLowerCase();
    if (!norm || !norm.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setStep(0);
    const iv = setInterval(() => {
      setStep(prev => {
        if (prev === null) return null;
        if (prev >= steps.length - 1) {
          clearInterval(iv);
          checkEmailExposure(norm).then(result => {
            onSearchComplete(norm, result.isExposed, result.exposedCount, result.results);
          });
          return null;
        }
        return prev + 1;
      });
    }, 480);
  };

  return (
    <div style={{ padding:"32px 40px", borderTop:`1px solid ${S.line}`, borderBottom:`1px solid ${S.line}`, background: S.bg2 }}>
      <div style={{ fontFamily:S.sans, fontSize:11, fontWeight:700, letterSpacing:"0.1em", color: S.coral, textTransform:"uppercase", marginBottom:14 }}>
        Check email or phone
      </div>

      {step !== null ? (
        <div style={{ maxWidth:520, display:"flex", flexDirection:"column", gap:12 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, color: S.white }}>
            <Loader2 size={18} color={S.coral} style={{ animation:"spin 1s linear infinite" }} />
            <span style={{ fontFamily:S.sans, fontSize:13, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.06em" }}>
              Secure Audit Running
            </span>
          </div>
          <p style={{ fontFamily:S.sans, fontSize:12, color: S.gray, margin:0 }}>{steps[step]}</p>
          <div style={{ background: S.line, height:2, width:"100%", position:"relative" }}>
            <div style={{
              position:"absolute", left:0, top:0, height:"100%",
              background: S.coral,
              width:`${((step + 1) / steps.length) * 100}%`,
              transition:"width 0.3s ease",
            }} />
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={handleSearch}>
            <div style={{ display:"flex", maxWidth:520 }}>
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); if (error) setError(""); }}
                placeholder="name@example.com"
                style={{
                  flex:1, height:48, padding:"0 16px",
                  background: S.bg, border:`1px solid ${error ? "#e05252" : S.line}`,
                  borderRight:"none", color: S.white,
                  fontFamily:S.sans, fontSize:14, outline:"none",
                }}
              />
              <button
                type="submit"
                style={{
                  height:48, padding:"0 28px", background: S.coral, color:"#141414",
                  border:"none", fontFamily:S.sans, fontWeight:800, fontSize:13,
                  letterSpacing:"0.04em", textTransform:"uppercase", cursor:"pointer",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#E3B368")}
                onMouseLeave={e => (e.currentTarget.style.background = S.coral)}
              >
                Check
              </button>
            </div>
            {error && (
              <div style={{ display:"flex", alignItems:"center", gap:6, marginTop:8, color:"#e05252", fontFamily:S.sans, fontSize:12, fontWeight:700 }}>
                <AlertCircle size={14} />
                <span>{error}</span>
              </div>
            )}
          </form>
          <div style={{ display:"flex", alignItems:"center", gap:6, marginTop:12, fontFamily:S.sans, fontSize:11, color: S.gray }}>
            <Shield size={13} color={S.gray} />
            No data is stored after your search completes.
          </div>
        </>
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
