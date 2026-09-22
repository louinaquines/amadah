import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="footer-section">
      <ScrollReveal variant="left">
        <div className="footer-brand">
          <img src="/images/a-logo2-transparent.png" alt="AmaDah Pastries" />
          <p>Freshly baked with love, just for you.</p>
        </div>
      </ScrollReveal>
      <ScrollReveal variant="right" delay={140}>
        <div className="footer-verse">
          <p>
            “He gives food to every creature.
            <br />
            His love endures forever.”
          </p>
          <span>Psalm 136:25</span>
        </div>
      </ScrollReveal>
      <small>© 2026 AmaDah Pastries · Balamban Cebu / Mandaue City</small>
    </footer>
  );
}
