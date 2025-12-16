import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    const interval = setInterval(() => {
      const crumb = document.createElement("span");
      crumb.className = "crumb";

      crumb.style.left = "50%";
      crumb.style.top = "50%";

      document.querySelector(".loader-wrapper")?.appendChild(crumb);

      setTimeout(() => crumb.remove(), 800);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-wrapper">
      <img
        src="/cookies/cookie1.png"
        alt="Loading cookie"
        className="cookie-run"
      />
      <p className="loader-text">Baking cookies...</p>
    </div>
  );
}
