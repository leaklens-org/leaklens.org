import React, { useState } from "react";
import { X, Menu, Search } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  navbarSearchQuery: string;
  setNavbarSearchQuery: (q: string) => void;
}

export default function Navbar({ activeTab, setActiveTab, navbarSearchQuery, setNavbarSearchQuery }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "home",        label: "CHECK" },
    { id: "database",   label: "LEAK REGISTRY" },
    { id: "explainers",  label: "EXPLAINERS" },
    { id: "methodology",label: "METHODOLOGY" },
    { id: "security",   label: "SECURITY" },
    { id: "about",      label: "ABOUT" },
  ];

  const go = (id: string) => { setActiveTab(id); setMobileOpen(false); };

  return (
    <>
      {/* Top strip */}
      <div style={{ borderBottom: "1px solid #2E2E2C", display:"flex", justifyContent:"flex-end", padding:"12px 40px", background:"#141414" }}>
        <button
          onClick={() => go("about")}
          style={{
            background: "#D6A24C", color: "#141414",
            fontFamily: "'Arial Narrow', Arial, sans-serif",
            fontWeight: 800, fontSize: 12, padding: "7px 18px",
            borderRadius: 20, textTransform: "uppercase", border: "none",
            cursor: "pointer", letterSpacing: "0.05em",
          }}
        >
          Support LeakLens
        </button>
      </div>

      {/* Main header */}
      <header style={{ padding: "20px 40px", borderBottom:"1px solid #2E2E2C", display:"flex", alignItems:"center", justifyContent:"space-between", background:"#141414" }}>
        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background:"none", border:"none", cursor:"pointer", color:"#F5F5F0", fontFamily:"'Arial Narrow',Arial,sans-serif", fontSize:22, letterSpacing:2 }}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <button
          onClick={() => go("home")}
          style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:12 }}
        >
          <img
            src="https://pbs.twimg.com/profile_images/2077105319759810560/hA2-zwLs_400x400.jpg"
            alt="LeakLens Logo"
            style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover", border: "1px solid #D6A24C" }}
          />
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ fontFamily:"'Arial Narrow',Arial,sans-serif", fontWeight:800, fontSize:26, letterSpacing:"-0.01em" }}>
              <span style={{ color:"#F5F5F0" }}>Leak</span>
              <span style={{ color:"#D6A24C" }}>Lens</span>
            </span>
            <span style={{ width:2, height:28, background:"#D6A24C", display:"inline-block" }} />
            <span style={{ fontFamily:"'Arial Narrow',Arial,sans-serif", fontSize:12, color:"#A8A8A0", lineHeight:1.35 }}>
              Public Registry of<br />Data Leaks
            </span>
          </div>
        </button>

        {/* Desktop search */}
        <div style={{ position:"relative", display:"flex", alignItems:"center" }}>
          <Search size={14} style={{ position:"absolute", left:10, color:"#A8A8A0" }} />
          <input
            type="text"
            value={navbarSearchQuery}
            placeholder="Search registry..."
            onChange={e => {
              setNavbarSearchQuery(e.target.value);
              if (e.target.value.trim()) setActiveTab("database");
            }}
            style={{
              background:"#1B1B1B", border:"1px solid #2E2E2C", color:"#F5F5F0",
              fontFamily:"'Arial Narrow',Arial,sans-serif", fontSize:13,
              padding:"7px 12px 7px 30px", outline:"none", width:200,
            }}
          />
        </div>
      </header>

      {/* Nav categories */}
      <nav style={{
        display:"flex", gap:30, padding:"16px 40px",
        borderBottom:"1px solid #2E2E2C", background:"#141414",
        fontFamily:"'Arial Narrow',Arial,sans-serif", fontSize:12,
        fontWeight:700, letterSpacing:"0.05em", flexWrap:"wrap",
      }}>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => go(item.id)}
            style={{
              background:"none", border:"none", cursor:"pointer",
              color: activeTab === item.id ? "#D6A24C" : "#F5F5F0",
              fontFamily:"'Arial Narrow',Arial,sans-serif",
              fontWeight:700, fontSize:12, letterSpacing:"0.05em",
              textTransform:"uppercase",
              borderBottom: activeTab === item.id ? "2px solid #D6A24C" : "2px solid transparent",
              paddingBottom:2,
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          position:"fixed", top:0, left:0, right:0, bottom:0,
          background:"rgba(0,0,0,0.85)", zIndex:200,
          display:"flex", flexDirection:"column",
          padding:"80px 40px 40px",
          borderRight:"1px solid #2E2E2C",
        }}>
          <button
            onClick={() => setMobileOpen(false)}
            style={{ position:"absolute", top:24, right:24, background:"none", border:"none", color:"#F5F5F0", cursor:"pointer" }}
          >
            <X size={24} />
          </button>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              style={{
                background:"none", border:"none", cursor:"pointer",
                color: activeTab === item.id ? "#D6A24C" : "#F5F5F0",
                fontFamily:"'Arial Narrow',Arial,sans-serif",
                fontWeight:700, fontSize:20, letterSpacing:"0.05em",
                textTransform:"uppercase", textAlign:"left",
                padding:"14px 0", borderBottom:"1px solid #2E2E2C",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
