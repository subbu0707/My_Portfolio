"use client";

import { useState } from "react";

export default function TiltCard({ children, className = "" }) {
  const [transform, setTransform] = useState(
    "perspective(1600px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)",
  );

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 7;
    const rotateX = (0.5 - y) * 7;

    setTransform(
      `perspective(1600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale(1.012)`,
    );
  };

  const handleLeave = () => {
    setTransform(
      "perspective(1600px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)",
    );
  };

  return (
    <div
      className={className}
      style={{
        transform,
        transformStyle: "preserve-3d",
        transition: "transform 320ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}
