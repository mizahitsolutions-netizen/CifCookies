import React, { useRef } from "react";
import QRCode from "react-qr-code";

export default function DownloadableQR() {
  const svgRef = useRef();

  const downloadSVG = () => {
    const svg = svgRef.current;
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svg);

    const blob = new Blob([svgStr], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "crumbella-website-qr.svg";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <QRCode
        ref={svgRef}
        value="https://www.crumbellainnovativefoods.in"
        size={220}
        bgColor="#ffffff"
        fgColor="#000000"
      />

      <br />

      <button onClick={downloadSVG} style={btnStyle}>
        Download QR (SVG)
      </button>
    </div>
  );
}

const btnStyle = {
  marginTop: "12px",
  padding: "8px 16px",
  background: "#000",
  color: "#fff",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
};
