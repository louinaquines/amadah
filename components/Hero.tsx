import BibleVerseRotator from "./BibleVerseRotator";
import BlurText from "./BlurText";
import SparkButton from "./SparkButton";

const FACEBOOK = "https://www.facebook.com/profile.php?id=61591285815713";
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Freshly baked · Since 2026</p>
        <BlurText
          lines={[
            { text: "Fresh & delicious." },
            { text: "Made with love.", italic: true },
          ]}
        />
        <p className="hero-lede">
          Home-baked pastries and cookies from our kitchen in Balamban, Cebu —
          made just for you.
        </p>
        <div className="hero-actions">
          <SparkButton href={FACEBOOK}>Message us on Facebook</SparkButton>
          <a className="text-link" href="#menu">
            See this week’s treats
          </a>
        </div>
      </div>
      <div className="hero-media torn">
        <img
          src="/images/a10.jpg"
          alt="A fresh AmaDah Pastries box filled with cookies, cinnamon rolls, and garlic bread"
        />
        <BibleVerseRotator />
      </div>
    </section>
  );
}
