import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CookieParticles() {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ref.current.children,
      { y: "100vh", opacity: 0 },
      {
        y: "-10vh",
        opacity: 1,
        duration: 15,
        repeat: -1,
        stagger: 2,
        ease: "none"
      }
    );
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="absolute text-3xl" style={{ left: Math.random()*100 + '%' }}>
          🍪
        </span>
      ))}
    </div>
  );
}