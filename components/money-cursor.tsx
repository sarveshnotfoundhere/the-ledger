"use client";

import { useEffect, useState } from "react";

export default function MoneyCursor() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState("₹");

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer:fine)").matches;
    if (!finePointer) return;
    setEnabled(true);

    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [role='button']");
      setLabel(interactive ? "₹" : "₿");
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="money-cursor"
      aria-hidden="true"
      style={{ left: position.x, top: position.y }}
    >
      <span>{label}</span>
    </div>
  );
}
