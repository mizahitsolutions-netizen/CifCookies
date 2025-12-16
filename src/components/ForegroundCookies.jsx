import { useEffect, useRef, useState } from "react";

const cookies = [
  "/cookies/cookie1.png",
  "/cookies/cookie2.png",
  "/cookies/cookie3.png",
];

export default function ForegroundCookies() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const positions = useRef(
    cookies.map((_, i) => ({
      top: `${20 + i * 25}%`,
      left: `${10 + i * 30}%`,
      depth: (i + 1) * 0.3,
    }))
  );

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {cookies.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="foreground cookie"
          className="absolute opacity-80 drop-shadow-xl cookie-float-slow"
          style={{
            width: "120px",
            top: positions.current[i].top,
            left: positions.current[i].left,
            transform: `translate(
              ${offset.x * positions.current[i].depth}px,
              ${offset.y * positions.current[i].depth}px
            )`,
          }}
        />
      ))}
    </div>
  );
}
