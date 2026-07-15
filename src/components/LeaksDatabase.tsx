import React, { useState, useMemo } from "react";
import { DOCUMENTED_LEAKS, DocumentedLeak, getLatestBreaches } from "../data";
import { Search, ChevronDown, ChevronUp, ShieldAlert, FileText, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Props {
  navbarSearchQuery: string;
  setNavbarSearchQuery?: (q: string) => void;
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

function SeverityBadge({ sev }: { sev: DocumentedLeak["severity"] }) {
  const map = {
    Critical:{ color:"#e05252", bg:"rgba(224,82,82,0.1)", border:"rgba(224,82,82,0.3)" },
    High:    { color:"#D6A24C", bg:"rgba(214,162,76,0.1)", border:"rgba(214,162,76,0.3)" },
    Medium:  { color:"#c9b850", bg:"rgba(201,184,80,0.1)", border:"rgba(201,184,80,0.3)" },
    Low:     { color:"#6ea8d8", bg:"rgba(110,168,216,0.1)", border:"rgba(110,168,216,0.3)" },
  }[sev] || { color: S.gray, bg:"transparent", border: S.line };
  return (
    <span style={{ fontFamily:S.sans, fontWeight:700, fontSize:10, letterSpacing:"0.08em", textTransform:"uppercase", padding:"2px 7px", color: map.color, background: map.bg, border:`1px solid ${map.border}` }}>
      {sev}
    </span>
  );
}

export default function LeaksDatabase({ navbarSearchQuery, setNavbarSearchQuery }: Props) {
  const [rawLeaks, setRawLeaks] = useState<DocumentedLeak[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("All");
  const [severity, setSeverity] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"date"|"size">("date");
  const [sortOrder, setSortOrder] = useState<"asc"|"desc">("desc");

  const query = navbarSearchQuery || search;

  React.useEffect(() => {
    getLatestBreaches().then(data => {
      setRawLeaks(data);
      setLoading(false);
    });
  }, []);

  const sources = useMemo(() => ["All", ...Array.from(new Set(rawLeaks.map(l => l.verificationSource)))], [rawLeaks]);

  React.useEffect(() => {
    if (query.startsWith("id:")) {
      const id = query.substring(3);
      setExpanded(id);
    }
  }, [query]);

  const toggleExpand = (leakId: string, isOpen: boolean) => {
    if (isOpen) {
      setExpanded(null);
      if (query.startsWith("id:") && setNavbarSearchQuery) {
        setNavbarSearchQuery("");
      }
      window.history.pushState(null, "", "/database");
    } else {
      setExpanded(leakId);
      window.history.pushState(null, "", `/leaks/${leakId}`);
    }
  };

  const leaks = useMemo(() => {
    let r = [...rawLeaks];
    if (query.trim()) {
      const q = query.toLowerCase();
      if (q.startsWith("id:")) {
        const id = q.substring(3);
        r = r.filter(l => l.id.toLowerCase() === id);
      } else {
        r = r.filter(l => l.title.toLowerCase().includes(q) || l.institution.toLowerCase().includes(q) || l.description.toLowerCase().includes(q) || l.exposedData.some(f => f.toLowerCase().includes(q)));
      }
    }
    if (source !== "All") r = r.filter(l => l.verificationSource === source);
    if (severity !== "All") r = r.filter(l => l.severity === severity);
    r.sort((a, b) => {
      if (sortBy === "date") return sortOrder === "desc" ? new Date(b.date).getTime() - new Date(a.date).getTime() : new Date(a.date).getTime() - new Date(b.date).getTime();
      return sortOrder === "desc" ? b.size - a.size : a.size - b.size;
    });
    return r;
  }, [rawLeaks, query, source, severity, sortBy, sortOrder]);

  return (
    <div style={{ paddingTop:36 }}>
      {/* Header */}
      <div style={{ padding:"0 40px 28px", borderBottom:`1px solid ${S.line}` }}>
        <div style={{ fontFamily:S.sans, fontSize:11, fontWeight:700, letterSpacing:"0.1em", color: S.coral, textTransform:"uppercase", marginBottom:10 }}>
          Documented Leak Registry
        </div>
        <h1 style={{ fontFamily:S.sans, fontWeight:800, fontSize:40, color: S.white, margin:0, lineHeight:1.1 }}>
          Incident Registry
        </h1>
        <p style={{ fontFamily:S.serif, fontSize:16, color: S.gray, marginTop:10 }}>
          A neutral, verified catalog of public data leaks, misconfigurations, and documented data exposures.
        </p>
      </div>

      {/* Filters */}
      <div style={{ padding:"20px 40px", borderBottom:`1px solid ${S.line}`, background: S.bg2, display:"flex", gap:20, alignItems:"center", flexWrap:"wrap" }}>
        <div style={{ position:"relative", flexGrow:1, maxWidth:400 }}>
          <Search size={13} style={{ position:"absolute", left:12, top:"50%", transform:"translateY(-50%)", color: S.gray }} />
          <input
            type="text"
            value={navbarSearchQuery || search}
            onChange={e => setSearch(e.target.value)}
            disabled={!!navbarSearchQuery}
            placeholder={navbarSearchQuery ? "Active search from navigation..." : "Search registry by name, institution or keywords..."}
            style={{ width:"100%", height:40, paddingLeft:34, paddingRight:12, background: S.bg, border:`1px solid ${S.line}`, color: S.white, fontFamily:S.sans, fontSize:13, outline:"none" }}
          />
        </div>
        {[
          { label:"Source", val:source, set:setSource, opts:sources },
          { label:"Severity", val:severity, set:setSeverity, opts:["All","Critical","High","Medium","Low"] },
        ].map(f => (
          <div key={f.label} style={{ display:"flex", alignItems:"center", gap:8 }}>
            <span style={{ fontFamily:S.sans, fontWeight:700, fontSize:11, color: S.gray, letterSpacing:"0.05em", textTransform:"uppercase" }}>{f.label}:</span>
            <select value={f.val} onChange={e => f.set(e.target.value)} style={{ background: S.bg, border:`1px solid ${S.line}`, color: S.white, fontFamily:S.sans, fontSize:12, padding:"5px 10px", outline:"none" }}>
              {f.opts.map(o => <option key={o} value={o} style={{ background: S.bg }}>{o}</option>)}
            </select>
          </div>
        ))}
        <div style={{ display:"flex", gap:8, borderLeft:`1px solid ${S.line}`, paddingLeft:20 }}>
          {(["date","size"] as const).map(type => (
            <button key={type} onClick={() => { if (sortBy === type) setSortOrder(o => o === "desc" ? "asc" : "desc"); else { setSortBy(type); setSortOrder("desc"); } }}
              style={{ fontFamily:S.sans, fontWeight:700, fontSize:11, letterSpacing:"0.04em", textTransform:"uppercase", padding:"5px 12px", background: sortBy === type ? S.coral : "transparent", color: sortBy === type ? "#141414" : S.gray, border:`1px solid ${sortBy === type ? S.coral : S.line}`, cursor:"pointer" }}>
              {type === "date" ? "Date" : "Size"} {sortBy === type ? (sortOrder === "desc" ? "↓" : "↑") : ""}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <div style={{ padding:"12px 40px", borderBottom:`1px solid ${S.line}`, fontFamily:S.sans, fontSize:11, color: S.gray, fontWeight:700, letterSpacing:"0.03em" }}>
        Showing {leaks.length} of {rawLeaks.length} verified incidents
        {query && <span style={{ color: S.coral }}> · Filter: "{query}"</span>}
      </div>

      {/* List */}
      <div>
        {loading ? (
          <div style={{ padding:"60px 40px", textAlign:"center" }}>
            <div style={{ fontFamily:S.sans, fontWeight:800, fontSize:14, color: S.coral, textTransform:"uppercase", marginBottom:8 }}>
              Synchronizing Registry...
            </div>
            <p style={{ fontFamily:S.serif, fontSize:13, color: S.gray, margin:0 }}>
              Retrieving verified cybersecurity incident feeds in real-time.
            </p>
          </div>
        ) : leaks.length === 0 ? (
          <div style={{ padding:"60px 40px", textAlign:"center" }}>
            <ShieldAlert size={36} color={S.gray} style={{ margin:"0 auto 16px" }} />
            <p style={{ fontFamily:S.sans, fontWeight:800, fontSize:18, color: S.white }}>No Matching Leaks Found</p>
            <p style={{ fontFamily:S.serif, fontSize:14, color: S.gray, marginTop:8 }}>Try adjusting your filter parameters.</p>
          </div>
        ) : leaks.map(leak => {
          const open = expanded === leak.id;
          return (
            <div key={leak.id} style={{ borderBottom:`1px solid ${S.line}`, background: open ? "#1a1a18" : "transparent" }}>
              <div onClick={() => toggleExpand(leak.id, open)} style={{ padding:"22px 40px", display:"flex", justifyContent:"space-between", alignItems:"flex-start", cursor:"pointer", gap:24 }}>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8, flexWrap:"wrap" }}>
                    <SeverityBadge sev={leak.severity} />
                    <span style={{ fontFamily:S.sans, fontWeight:700, fontSize:11, color: S.gray, letterSpacing:"0.04em" }}>
                      {new Date(leak.date).toLocaleDateString("en-US", { year:"numeric", month:"long" })}
                    </span>
                    <span style={{ fontFamily:S.sans, fontWeight:700, fontSize:11, color: S.gray }}>· {leak.verificationSource}</span>
                    {leak.referenceUrl && (
                      <a href={leak.referenceUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ marginLeft:6, fontFamily:S.sans, fontWeight:700, fontSize:11, color: S.coral, textDecoration:"none", borderBottom:`1px solid ${S.coral}` }}>
                        Source Link ↗
                      </a>
                    )}
                  </div>
                  <h3 style={{ fontFamily:S.sans, fontWeight:800, fontSize:20, color: S.white, margin:"0 0 6px", lineHeight:1.2 }}>{leak.title}</h3>
                  <p style={{ fontFamily:S.serif, fontSize:13, color: S.gray, margin:0 }}>
                    Organization: <strong style={{ color: S.white }}>{leak.institution}</strong>
                  </p>
                </div>
                <div style={{ flexShrink:0, textAlign:"right" }}>
                  <div style={{ fontFamily:S.sans, fontWeight:800, fontSize:22, color: S.white, lineHeight:1 }}>{leak.size.toLocaleString()}</div>
                  <div style={{ fontFamily:S.sans, fontSize:10, color: S.gray, letterSpacing:"0.06em", textTransform:"uppercase", marginTop:4 }}>records</div>
                  <div style={{ display:"flex", alignItems:"center", gap:4, color: S.coral, fontFamily:S.sans, fontSize:11, fontWeight:700, marginTop:8, justifyContent:"flex-end" }}>
                    {open ? <><ChevronUp size={13}/> Collapse</> : <><ChevronDown size={13}/> Expand</>}
                  </div>
                </div>
              </div>
              <AnimatePresence>
                {open && (
                  <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:0.22 }} style={{ overflow:"hidden", borderTop:`1px solid ${S.line}`, background:"#111110" }}>
                    <div style={{ padding:"24px 40px", display:"flex", flexDirection:"column", gap:20 }}>
                      <p style={{ fontFamily:S.serif, fontSize:15, color:"#d0d0c8", lineHeight:1.7, margin:0 }}>{leak.description}</p>
                      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
                        <div style={{ background: S.bg2, border:`1px solid ${S.line}`, padding:18 }}>
                          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12, fontFamily:S.sans, fontWeight:700, fontSize:11, letterSpacing:"0.08em", textTransform:"uppercase", color: S.coral }}>
                            <FileText size={13} /> Data Exposed
                          </div>
                          <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                            {leak.exposedData.map(f => (
                              <span key={f} style={{ fontFamily:S.sans, fontSize:11, fontWeight:700, padding:"3px 8px", background: S.bg, border:`1px solid ${S.line}`, color: S.white }}>{f}</span>
                            ))}
                          </div>
                        </div>
                        <div style={{ background: S.bg2, border:`1px solid ${S.line}`, padding:18 }}>
                          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12, fontFamily:S.sans, fontWeight:700, fontSize:11, letterSpacing:"0.08em", textTransform:"uppercase", color: S.gray }}>
                            <Globe size={13} /> Verification Methodology
                          </div>
                          <p style={{ fontFamily:S.serif, fontSize:13, color: S.gray, margin:0, lineHeight:1.6 }}>{leak.methodology}</p>
                        </div>
                      </div>
                      <div style={{ background:"rgba(224,82,82,0.05)", border:"1px solid rgba(224,82,82,0.25)", padding:18 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14, fontFamily:S.sans, fontWeight:700, fontSize:11, letterSpacing:"0.08em", textTransform:"uppercase", color:"#e05252" }}>
                          <ShieldAlert size={13} /> Recommended Actions
                        </div>
                        <ol style={{ margin:0, paddingLeft:0, listStyle:"none", display:"flex", flexDirection:"column", gap:8 }}>
                          {leak.protectionAdvice.map((a, i) => (
                            <li key={i} style={{ display:"flex", gap:12, fontFamily:S.serif, fontSize:13, color:"#d0d0c8", lineHeight:1.6 }}>
                              <span style={{ fontFamily:S.sans, fontWeight:800, fontSize:12, color:"#e05252", flexShrink:0, minWidth:18 }}>{i+1}.</span>
                              <span>{a}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      {leak.referenceUrl && (
                        <div style={{ marginTop:12, display:"flex", justifyContent:"flex-end" }}>
                          <a href={leak.referenceUrl} target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:6, fontFamily:S.sans, fontWeight:700, fontSize:12, color: S.coral, textDecoration:"none", borderBottom:`1px solid ${S.coral}` }}>
                            <Globe size={12} /> View Official Registry / Investigative Source Link ↗
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Tip box */}
      <div style={{ margin:"40px 40px 0", border:`1px dashed ${S.line}`, padding:"28px", textAlign:"center" }}>
        <h4 style={{ fontFamily:S.sans, fontWeight:800, fontSize:16, color: S.white, margin:"0 0 10px" }}>Know of an unsecured database?</h4>
        <p style={{ fontFamily:S.serif, fontSize:14, color: S.gray, margin:"0 0 14px", maxWidth:540, marginLeft:"auto", marginRight:"auto" }}>
          LeakLens welcomes anonymous reports about citizen data exposures. All submissions are independently verified.
        </p>
        <button style={{ background:"none", border:`1px solid ${S.coral}`, color: S.coral, fontFamily:S.sans, fontWeight:800, fontSize:12, letterSpacing:"0.06em", textTransform:"uppercase", padding:"8px 20px", cursor:"pointer" }}>
          Submit a Leak (PGP encrypted) →
        </button>
      </div>
    </div>
  );
}
