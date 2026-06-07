"use client";
import Link from "next/link";
import { useState } from "react";

interface NavLinkProps {
  href: string;
  label: string;
}

function NavLink({ href, label }: NavLinkProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      style={{ color: hovered ? "#f9fafb" : "#9ca3af", textDecoration: "none", fontSize: 14, fontWeight: 500 }}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  return (
    <nav style={{
      background: "rgba(10,14,26,0.95)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid #1e293b",
      position: "sticky",
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <div style={{
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            borderRadius: 8,
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            fontSize: 14,
            color: "#fff",
          }}>C</div>
          <span style={{ fontWeight: 800, fontSize: 20, color: "#f9fafb", letterSpacing: "-0.5px" }}>
            CCTV<span style={{ color: "#3b82f6" }}>.fi</span>
          </span>
        </Link>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <NavLink href="/artikkelit" label="Artikkelit" />
          <NavLink href="/kategoriat/vertailut" label="Vertailut" />
          <NavLink href="/kategoriat/oppaat" label="Oppaat" />
          <NavLink href="/kategoriat/lainsäädäntö" label="Lainsäädäntö" />
          <NavLink href="/kategoriat/kamerat" label="Kamerat" />
        </div>
      </div>
    </nav>
  );
}
