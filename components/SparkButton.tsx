"use client";

import { useState } from "react";

export default function SparkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(false);

  const spark = () => {
    setActive(false);
    requestAnimationFrame(() => setActive(true));
  };

  return (
    <a
      className="button spark-button"
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={spark}
    >
      <span className="shiny-text">{children}</span>
      <span
        className={active ? "click-spark is-active" : "click-spark"}
        aria-hidden="true"
      >
        {Array.from({ length: 6 }, (_, index) => (
          <i key={index} />
        ))}
      </span>
    </a>
  );
}
