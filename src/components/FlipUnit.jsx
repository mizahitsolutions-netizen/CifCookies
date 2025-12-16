import { useEffect, useState } from "react";

export default function FlipUnit({ value, label, glow }) {
  const [current, setCurrent] = useState(value);
  const [prev, setPrev] = useState(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== current) {
      setPrev(current);
      setCurrent(value);
      setFlipping(true);

      const timeout = setTimeout(() => setFlipping(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [value]);

  return (
    <div className={`flip-unit ${glow ? "flip-glow" : ""}`}>
      <div className="flip-card">
        {/* Static */}
        <div className="flip-top">{String(current).padStart(2, "0")}</div>
        <div className="flip-bottom">{String(current).padStart(2, "0")}</div>

        {/* Animated */}
        {flipping && (
          <>
            <div className="flip-top-anim">
              {String(prev).padStart(2, "0")}
            </div>
            <div className="flip-bottom-anim">
              {String(current).padStart(2, "0")}
            </div>
          </>
        )}
      </div>

      <div className="text-xs uppercase tracking-wide text-gray-700 mt-2 text-center">
        {label}
      </div>
    </div>
  );
}
