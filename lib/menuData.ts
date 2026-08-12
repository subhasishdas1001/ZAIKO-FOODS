export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  veg: boolean;
  tag?: "Bestseller" | "New" | "Chef's Pick";
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "momos",
    name: "Momos",
    items: [
      {
        id: "veg-momos",
        name: "Veg Momos",
        description: "Steamed dumplings packed with finely chopped garden vegetables, served with our house chilli-garlic dip.",
        price: 80,
        image: "/VEG.png",
        veg: true,
        tag: "Bestseller",
      },
      {
        id: "chicken-momos",
        name: "Chicken Momos",
        description: "Juicy minced chicken folded into delicate wrappers, steamed to order and finished with smoked chilli oil.",
        price: 140,
        image: "/NON VEG.png",
        veg: false,
        tag: "Bestseller",
      },
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    items: [
      {
        id: "veg-burger",
        name: "Veg Burger",
        description: "A crisp vegetable patty layered with fresh lettuce, tomato and our signature Zaiko sauce in a toasted brioche bun.",
        price: 50,
        image: "/burger veg.png",
        veg: true,
      },
      {
        id: "chicken-burger",
        name: "Chicken Burger",
        description: "A hand-formed chicken patty, char-grilled and stacked with melted cheese, pickles and smoked mayo.",
        price: 70,
        image: "/non veg burger.png",
        veg: false,
        tag: "Chef's Pick",
      },
    ],
  },
  {
    id: "rolls",
    name: "Rolls",
    items: [
      {
        id: "veg-roll",
        name: "Veg Roll",
        description: "Spiced vegetables and paneer rolled in a flaky paratha with mint chutney and tangy onions.",
        price: 60,
        image: "/veg roll.png",
        veg: true,
      },
      {
        id: "chicken-roll",
        name: "Chicken Roll",
        description: "Char-grilled chicken strips wrapped tight with crunchy salad and our secret Zaiko sauce.",
        price: 80,
        image: "/non veg roll.png",
        veg: false,
        tag: "New",
      },
    ],
  },
  {
    id: "fries",
    name: "French Fries",
    items: [
      {
        id: "peri-peri-fries",
        name: "Peri Peri Fries",
        description: "Golden, crisp-edged fries tossed in a fiery peri peri seasoning.",
        price: 99,
        image: "/fri2.png",
        veg: true,
      },
    ],
  },
  {
    id: "drinks",
    name: "Soft Drinks",
    items: [
      {
        id: "soft-drink",
        name: "Chilled Soft Drink",
        description: "Ice-cold classic soft drink, the perfect companion to any Zaiko meal.",
        price: 50,
        image: "/drink 1.png",
        veg: true,
      },
    ],
  },
  {
    id: "combos",
    name: "Combo Meals",
    items: [
      {
        id: "zaiko-combo",
        name: "Zaiko Signature Combo",
        description: "Chicken burger, peri peri fries and a chilled drink — our most-loved meal, priced to delight.",
        price: 299,
        image: "/combo non.png",
        veg: false,
        tag: "Bestseller",
      },
    ],
  },
  {
    id: "offers",
    name: "Special Offers",
    items: [
      {
        id: "momo-mania",
        name: "ZAIKO ROYAL DUOS (Pair Any Two — Pay Only for One)",
        description: "Any momo plate, doubled. Available all day, every Tuesday.",
        price: 159,
        image: "/DUOS.png",
        veg: true,
        tag: "New",
      },
    ],
  },
];
