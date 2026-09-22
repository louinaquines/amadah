import StoryVideo from "./StoryVideo";
import ScrollReveal from "./ScrollReveal";

export default function Story() {
  return (
    <section className="story-section" id="story">
      <div className="story-divider" aria-hidden="true">
        <span />
        <b>❧</b>
        <span />
      </div>
      <div className="story-content">
        <ScrollReveal variant="left">
          <StoryVideo />
        </ScrollReveal>
        <ScrollReveal variant="right" delay={160}>
          <div className="story-copy">
            <p className="eyebrow">A little about us</p>
            <h2>
              A small kitchen,
              <br />
              <em>a lot of heart.</em>
            </h2>
            <p>
              We’re so happy to have you here. AmaDah Pastries is a small
              home-based bakery that started with a simple love for baking and a
              dream to share it with others. Every pastry is made fresh with
              care, then packed up for someone we hope will enjoy it.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
