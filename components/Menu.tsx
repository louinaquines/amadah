import { flavors } from "@/data/flavors";
import MenuCarousel from "./MenuCarousel";
import ScrollReveal from "./ScrollReveal";
export default function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="story-divider" aria-hidden="true">
        <span />
        <b>❧</b>
        <span />
      </div>
      <ScrollReveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">Made in our kitchen</p>
            <h2>
            This week’s <em>treats.</em>
            </h2>
          </div>
          <p>
            While our flavors change, our dedication to baking never does. Send us a message to see what’s fresh out of the oven today!
          </p>
        </div>
      </ScrollReveal>
      <ScrollReveal variant="right" delay={140}>
        <MenuCarousel flavors={flavors} />
      </ScrollReveal>
    </section>
  );
}
