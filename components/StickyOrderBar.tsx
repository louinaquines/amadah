"use client";
import { useEffect, useState } from "react";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61591285815713";
export default function StickyOrderBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={visible ? "sticky-order is-visible" : "sticky-order"}>
      <span>Ready to order?</span>
      <a href={FACEBOOK} target="_blank" rel="noreferrer">
        Message us
      </a>
      <a href="tel:09541560047">Call</a>
    </div>
  );
}
