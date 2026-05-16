"use client";

import { useEffect } from "react";

const particles = [
  { left: "6%", top: "14%", size: 240, delay: "0s" },
  { left: "72%", top: "8%", size: 220, delay: "-3s" },
  { left: "66%", top: "72%", size: 320, delay: "-5s" },
  { left: "18%", top: "76%", size: 180, delay: "-7s" },
];

export default function InteractiveBackdrop() {
  useEffect(() => {
    const updateSpotlight = (event) => {
      document.documentElement.style.setProperty("--x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--y", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", updateSpotlight);
    return () => window.removeEventListener("mousemove", updateSpotlight);
  }, []);

  return (
    <>
      <div className="spotlight" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="particle absolute rounded-full blur-3xl"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              background:
                index % 2 === 0
                  ? "radial-gradient(circle, rgba(43,184,255,0.18), transparent 68%)"
                  : "radial-gradient(circle, rgba(141,107,255,0.14), transparent 68%)",
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>
    </>
  );
}
