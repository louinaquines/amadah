"use client";

import { useEffect, useState } from "react";

type MenuItem = { label: string; ariaLabel: string; link: string };

const items: MenuItem[] = [
  { label: "Our story", ariaLabel: "Read our story", link: "#story" },
  { label: "Menu", ariaLabel: "View this week’s menu", link: "#menu" },
  { label: "Order", ariaLabel: "Place an order", link: "#order" },
];

export default function StaggeredMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", open);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div
      className={
        open ? "staggered-menu-wrapper is-open" : "staggered-menu-wrapper"
      }
    >
      <header
        className="staggered-menu-header"
        aria-label="Mobile navigation header"
      >
        <a className="sm-logo" href="#top" onClick={close}>
          <img src="/images/a-logo-trimmed.png" alt="AmaDah Pastries" />
        </a>
        <button
          className="sm-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="staggered-menu-panel"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <i className="sm-icon" aria-hidden="true">
            <b />
            <b />
          </i>
        </button>
      </header>
      {open && (
        <button
          className="sm-backdrop"
          aria-label="Close menu"
          onClick={close}
        />
      )}
      <aside
        id="staggered-menu-panel"
        className="staggered-menu-panel"
        aria-hidden={!open}
      >
        <nav className="sm-panel-inner" aria-label="Mobile navigation">
          <ul className="sm-panel-list">
            {items.map((item, index) => (
              <li
                key={item.label}
                style={
                  { "--item-delay": `${index * 80}ms` } as React.CSSProperties
                }
              >
                <a href={item.link} aria-label={item.ariaLabel} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="sm-panel-cta">
            <a
              className="button sm-panel-message-btn"
              href="https://www.facebook.com/profile.php?id=61591285815713"
              target="_blank"
              rel="noreferrer"
              onClick={close}
            >
              Message us
            </a>
          </div>
          <div className="sm-socials">
            <span>Freshly baked with love</span>
            <a
              href="https://www.facebook.com/profile.php?id=61591285815713"
              target="_blank"
              rel="noreferrer"
              onClick={close}
            >
              Facebook
            </a>
          </div>
        </nav>
      </aside>
    </div>
  );
}
