"use client";

import { useEffect, useRef, useState } from "react";

export default function StoryVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reducedMotion]);

  if (reducedMotion)
    return (
      <div className="story-video-frame">
        <img
          src="/images/a10.jpg"
          alt="AmaDah Pastries baked goods prepared in their home kitchen"
        />
      </div>
    );
  return (
    <div className="story-video-frame">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/a10.jpg"
        aria-label="AmaDah Pastries baked goods being prepared"
      >
        <source src="/videos/ama.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
