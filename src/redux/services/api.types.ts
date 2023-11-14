export type TProduct = {
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

export type TPromo = {
  image: string;
  bgImage: string;
  discount: string;
  label: string;
  description: string;
};

export type TCategory = {
  name?: string;
  label: string;
  image: string | undefined;
  count?: number | null;
};

export type TApiData = {
  products: TProduct[];
  promo: TPromo;
  categories: TCategory[];
};
