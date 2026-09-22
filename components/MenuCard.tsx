import type { Flavor } from "@/data/flavors";
export default function MenuCard({ flavor }: { flavor: Flavor }) {
  return (
    <article className="menu-card">
      <div className="card-photo torn">
        <img src={flavor.image} alt={flavor.imageAlt} />
      </div>
      <div className="card-copy">
        {flavor.isNew && <span className="new-tag">New this week</span>}
        {flavor.group && <p className="card-group">{flavor.group}</p>}
        <h3>{flavor.name}</h3>
        <p>{flavor.description}</p>
      </div>
    </article>
  );
}
