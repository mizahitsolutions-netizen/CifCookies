import { useRef } from "react";

const cookies = [
  "/cookies/cookie1.png",
  "/cookies/cookie2.png",
  "/cookies/cookie3.png",
  "/cookies/cookie4.png",
  "/cookies/cookie5.png",
  "/cookies/cookie6.png",
  "/cookies/cookie7.png",
];

export default function FloatingCookies() {
  const positions = useRef(
    cookies.map((_, i) => ({
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
      size: `${90 + i * 15}px`,
      speed: i % 3,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {cookies.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="cookie"
          className={`absolute opacity-60 blur-[1px] drop-shadow-lg
            ${
              positions.current[i].speed === 0
                ? "cookie-float-slow"
                : positions.current[i].speed === 1
                ? "cookie-float"
                : "cookie-float-fast"
            }`}
          style={{
            top: positions.current[i].top,
            left: positions.current[i].left,
            width: positions.current[i].size,
          }}
        />
      ))}
    </div>
  );
}
