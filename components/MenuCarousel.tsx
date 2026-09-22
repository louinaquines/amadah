"use client";

import type { Flavor } from "@/data/flavors";
import MenuCard from "./MenuCard";

export default function MenuCarousel({ flavors }: { flavors: Flavor[] }) {
  return (
    <div className="menu-carousel" aria-label="AmaDah Pastries menu">
      <div className="menu-carousel-track">
        {[0, 1].map((copy) => (
          <div
            className="menu-carousel-set"
            aria-hidden={copy === 1}
            key={copy}
          >
            {flavors.map((flavor) => (
              <MenuCard
                key={`${copy}-${flavor.group ?? ""}-${flavor.name}`}
                flavor={flavor}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
