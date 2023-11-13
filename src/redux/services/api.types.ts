export type Product = {
  id: string;
  name: string;
  isSelected: boolean;
  price: string;
  isNew: boolean;
  category: string;
  discount: string | null;
  image: string;
  additionImages: string[];
  videoLink: string;
  videoText: string;
  description: string;
  colors: string[];
  size: {
    width: string;
    length: string;
  };
  sleepingPlace: {
    width: string;
    length: string;
  };
  layoutMechanism: string;
  characteristics: {
    karkas: string;
    napolnenie: string;
    material: string;
    podushki: string;
    chehol: string;
    cvet: string;
    proizvoditel: string;
  };
};

export type Promo = {
  image: string;
  bgImage: string;
  discount: string;
  label: string;
  description: string;
};

export type Category = {
  name: string;
  label: string;
  image: string | null;
  count: number | null;
};
