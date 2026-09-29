import { ImageResponse } from "next/og";
import { andresProfileData } from "@/components/landing/profile-data";
import { seo, siteUrl } from "./seo";

export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ImageResponse cannot read CSS variables, so these mirror the dark tokens in globals.css.
const colors = {
  background: "#242424",
  foreground: "#f1f1f1",
  muted: "#a0a0a0",
  primary: "#3b95ff",
  border: "#424242",
};

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: colors.background,
          color: colors.foreground,
          borderTop: `12px solid ${colors.primary}`,
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: colors.primary, letterSpacing: 4 }}>
          {seo.brandName}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700, lineHeight: 1.05 }}>
            {andresProfileData.name}
          </div>
          <div style={{ display: "flex", fontSize: 46, marginTop: 24, color: colors.muted }}>
            {andresProfileData.role.en}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: colors.muted,
            borderTop: `2px solid ${colors.border}`,
            paddingTop: 28,
          }}
        >
          {siteUrl.host}
        </div>
      </div>
    ),
    size,
  );
}
