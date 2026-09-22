import { testimonials } from "@/data/testimonials";
import ScrollReveal from "./ScrollReveal";
export default function Testimonials() {
  return (
    <section
      className="testimonials testimonials-section section-rule"
      id="testimonials"
    >
      <ScrollReveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">From the kitchen table</p>
            <h2>
              What people are <em>saying.</em>
            </h2>
          </div>
          <p>
            We’re still collecting our first official reviews, but these are the
            kinds of messages that make our day.
          </p>
        </div>
      </ScrollReveal>
      <div className="quote-grid">
        {testimonials.map((item, index) => (
          <ScrollReveal key={index} delay={index * 120}>
            <figure className="quote">
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>
                {item.name}
                <span>{item.flavor}</span>
              </figcaption>
            </figure>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
