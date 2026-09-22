const FACEBOOK = "https://www.facebook.com/profile.php?id=61591285815713";
import ScrollReveal from "./ScrollReveal";
export default function Order() {
  return (
    <section className="order-section" id="order">
      <ScrollReveal variant="left">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>
            Let’s get something
            <br />
            <em>sweet</em> started.
          </h2>
          <p>
            Send us a message on Facebook or give us a call to ask what’s
            available and place your order.
          </p>
        </div>
      </ScrollReveal>
      <ScrollReveal variant="right" delay={140}>
        <div className="order-details">
          <a
            className="order-detail"
            href={FACEBOOK}
            target="_blank"
            rel="noreferrer"
          >
            <span className="detail-icon">f</span>
            <span>
              <strong>Message us on Facebook</strong>
              <small>AmaDah Pastries</small>
            </span>
          </a>
          <a className="order-detail" href="tel:09541560047">
            <span className="detail-icon">☎</span>
            <span>
              <strong>Call 0954 156 0047</strong>
              <small>We’re based in Balamban Cebu / Mandaue City</small>
            </span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
