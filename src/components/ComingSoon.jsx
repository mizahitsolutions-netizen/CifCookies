import { useEffect, useState } from "react";
import FloatingCookies from "./FloatingCookies";
import ForegroundCookies from "./ForegroundCookies";
import WhatsAppButton from "./WhatsAppButton";

/* ===== Flip Clock Unit ===== */
function FlipUnit({ value, label, glow }) {
  const [current, setCurrent] = useState(value);
  const [prev, setPrev] = useState(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== current) {
      setPrev(current);
      setCurrent(value);
      setFlipping(true);

      const t = setTimeout(() => setFlipping(false), 600);
      return () => clearTimeout(t);
    }
  }, [value, current]);

  const curr = String(current).padStart(2, "0");
  const prevVal = String(prev).padStart(2, "0");

  return (
    <div className={`flip-unit ${glow ? "flip-glow" : ""}`}>
      <div className="flip-card">
        {/* STATIC (shown only when NOT flipping) */}
        {!flipping && (
          <>
            <div className="flip-top">{curr}</div>
            <div className="flip-bottom">{curr}</div>
          </>
        )}

        {/* ANIMATED (shown only while flipping) */}
        {flipping && (
          <>
            <div className="flip-top-anim">{prevVal}</div>
            <div className="flip-bottom-anim">{curr}</div>
          </>
        )}
      </div>

      <div className="text-xs uppercase tracking-wide text-gray-700 mt-2 text-center">
        {label}
      </div>
    </div>
  );
}

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  /* ===== 30-Day Countdown ===== */
  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 30);

    const interval = setInterval(() => {
      const diff = target - new Date();
      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center animated-gradient px-4 overflow-hidden">
      {/* Background cookies */}
      <FloatingCookies />

      {/* Foreground cookies */}
      <ForegroundCookies />

      {/* Glass Card */}
      <div className="relative z-30 backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl rounded-2xl p-10 max-w-md w-full text-center">
        {/* Brand */}
        <h1 className="text-5xl font-extrabold text-[#8B4513] leading-tight">
          Crumbella
        </h1>
        <h2 className="text-lg font-semibold tracking-wide text-[#a16207] mb-4">
          Innovative Foods
        </h2>

        {/* Description */}
        <p className="text-gray-800 mb-6">
          Our cookie store is baking something special.
          <br />
          We’re launching soon!
        </p>

        {/* Flip Countdown */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <FlipUnit value={timeLeft.days} label="Days" />
          <FlipUnit value={timeLeft.hours} label="Hours" />
          <FlipUnit value={timeLeft.minutes} label="Minutes" />
          <FlipUnit value={timeLeft.seconds} label="Seconds" glow />
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-700 mt-4">
          © {new Date().getFullYear()} Crumbella Innovative Foods
        </p>
      </div>
      <WhatsAppButton />
    </div>
  );
}
