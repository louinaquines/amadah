export type Flavor = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  isNew?: boolean;
  group?: string;
};

export const flavors: Flavor[] = [
  {
    name: "Cinnamon Roll",
    description: "Soft, fluffy, and warmly spiced with creamy sweet icing.",
    image: "/images/a8.jpg",
    imageAlt: "Creamy iced cinnamon rolls",
  },
  {
    name: "Korean Garlic Cream Cheese Bread",
    description:
      "Golden bread filled with garlic butter and creamy cheese in every bite.",
    image: "/images/a7.jpg",
    imageAlt: "Korean garlic cream cheese breads",
  },
  {
    name: "Midnight",
    group: "Cookie Club",
    description: "A chocolate-chip cookie with a rich cookie-center surprise.",
    image: "/images/midnyt.jpg",
    imageAlt: "Midnight Cookie Club cookie with a chocolate sandwich cookie",
  },
  {
    name: "Golden",
    group: "Cookie Club",
    description: "A golden cookie packed with caramelized biscuit goodness.",
    image: "/images/golden.jpg",
    imageAlt: "Golden Cookie Club cookie with caramel biscuit spread",
  },
  {
    name: "Classic",
    group: "Cookie Club",
    description:
      "The familiar, gooey chocolate-chip cookie made extra generous.",
    image: "/images/classic.jpg",
    imageAlt: "Classic Cookie Club chocolate-chip cookie",
  },
  {
    name: "Crinkles",
    description: "Fudgy chocolate cookies with a soft, powdered-sugar finish.",
    image: "/images/a3.jpg",
    imageAlt: "Chocolate crinkle cookies",
  },
  {
    name: "S’mores Cookie",
    description: "A warm, chewy cookie with melty chocolate and marshmallow.",
    image: "/images/a2.jpg",
    imageAlt: "S’mores cookies with marshmallows",
  },
  {
    name: "Biscoff Crunch",
    description:
      "A cinnamon roll finished with Biscoff spread, biscuit crunch, and a whole lot of comfort.",
    image: "/images/a6.jpg",
    imageAlt: "Biscoff Crunch cinnamon roll",
    isNew: true,
  },
];
