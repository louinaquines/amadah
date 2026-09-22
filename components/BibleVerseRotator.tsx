"use client";

import { useEffect, useState } from "react";

const verses = [
  {
    text: "He gives food to every creature. His love endures forever.",
    reference: "Psalm 136:25",
  },
  {
    text: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.",
    reference: "Psalm 34:8",
  },
  {
    text: "Gracious words are a honeycomb, sweet to the soul and healing to the bones.",
    reference: "Proverbs 16:24",
  },
  { text: "Give us today our daily bread.", reference: "Matthew 6:11" },
  {
    text: "Whatever you do, work at it with all your heart.",
    reference: "Colossians 3:23",
  },
];

export default function BibleVerseRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % verses.length),
      5000,
    );
    return () => window.clearInterval(timer);
  }, []);

  const verse = verses[index];

  return (
    <div className="verse-rotator" aria-live="polite" key={verse.reference}>
      <p>“{verse.text}”</p>
      <span>{verse.reference}</span>
    </div>
  );
}
