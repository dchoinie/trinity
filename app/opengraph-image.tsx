import { ImageResponse } from "next/og";
import { site } from "@/lib/site-config";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1f2c45",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 15% -10%, rgba(211,172,106,0.25), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 24,
              height: 1,
              background: "linear-gradient(to right, transparent, #d3ac6a)",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              transform: "rotate(45deg)",
              backgroundColor: "#b3893f",
            }}
          />
          <div
            style={{
              width: 24,
              height: 1,
              background: "linear-gradient(to left, transparent, #d3ac6a)",
            }}
          />
        </div>
        <div
          style={{
            marginTop: 28,
            display: "flex",
            fontSize: 64,
            fontWeight: 600,
            color: "#faf6ef",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#d3ac6a",
          }}
        >
          Waterville, Minnesota
        </div>
      </div>
    ),
    { ...size }
  );
}
