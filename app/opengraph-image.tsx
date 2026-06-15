import { ImageResponse } from "next/og";

import { profile } from "@/constants/profile";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 48,
          background:
            "radial-gradient(circle at top, rgba(46,211,217,0.25), transparent 24%), linear-gradient(180deg, #081120 0%, #060a12 100%)",
          color: "#e2e8f0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 28,
            padding: 40,
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            <div
              style={{
                padding: "10px 16px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                fontSize: 24,
              }}
            >
              Backend Developer
            </div>
            <div
              style={{
                padding: "10px 16px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                fontSize: 24,
              }}
            >
              AI Data Engineer
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 72, fontWeight: 800 }}>{profile.name}</div>
            <div style={{ fontSize: 34, maxWidth: 920, lineHeight: 1.35, color: "#cbd5e1" }}>
              {profile.hero.description}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
            <div>{profile.title}</div>
            <div style={{ color: "#7dd3fc" }}>{profile.siteUrl.replace(/^https?:\/\//, "")}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
