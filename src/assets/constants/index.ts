import { TCategories, TCities, TColor, TSortingFilter } from "../types";

export const cities: TCities[] = [
  {
    url: "https://yandex.ru/map-widget/v1/?um=constructor%3A74e929d7cf0de9b86b546e6b4d1345c8bb88f6547d31dfe80097748632492a96&amp;source=constructor",
    isSelected: true,
    name: "Чебоксары",
  },
  {
    url: "https://yandex.ru/map-widget/v1/?um=constructor%3A2e7a7ca2d9925e989d5b055b2303b2509dbdfd69f7135e99dc77ddebb32d3f1b&amp;source=constructor",
    isSelected: false,
    name: "Йошкар-Ола",
  },
];

export const sortingFilters: TSortingFilter[] = [
  {
    filter: "popularity",
    label: "популярность",
    isSelected: false,
    isDisabled: true,
  },
  {
    filter: "isNew",
    label: "новинки",
    isSelected: false,
    isDisabled: false,
  },
  {
    filter: "ascending",
    label: "цена по возрастанию",
    isSelected: false,
    isDisabled: false,
  },
  {
    filter: "descending",
    label: "цена по убыванию",
    isSelected: false,
    isDisabled: false,
  },
  {
    filter: "discount",
    label: "скидка",
    isSelected: false,
    isDisabled: false,
  },
];

export const colorList: TColor[] = [
  {
    engName: "blue",
    ruName: "голубой",
    hexCode: "#6C9CA9",
    isSelected: false,
  },
  {
    engName: "beige",
    ruName: "бежевый",
    hexCode: "#8B7361",
    isSelected: false,
  },
  {
    engName: "white",
    ruName: "белый",
    hexCode: "#E1E0DC",
    isSelected: false,
  },
  {
    engName: "brown",
    ruName: "коричневый",
    hexCode: "#584E45",
    isSelected: false,
  },
  {
    engName: "lightred",
    ruName: "светло-красный",
    hexCode: "#FE7E62",
    isSelected: false,
  },
  {
    engName: "yeallow",
    ruName: "желтый",
    hexCode: "#FDEE3B",
    isSelected: false,
  },
  {
    engName: "laguna",
    ruName: "лагуна",
    hexCode: "#01729D",
    isSelected: false,
  },
  {
    engName: "black",
    ruName: "черный",
    hexCode: "#000",
    isSelected: false,
  },
  {
    engName: "grey",
    ruName: "серый",
    hexCode: "#808080",
    isSelected: false,
  },
  {
    engName: "lightblue",
    ruName: "светло-синий",
    hexCode: "#ADD8E6",
    isSelected: false,
  },
  {
    engName: "aquablue",
    ruName: "аква-синий",
    hexCode: "#02D8E9",
    isSelected: false,
  },
  {
    engName: "spacegray",
    ruName: "космический серый",
    hexCode: "#717378",
    isSelected: false,
  },
  {
    engName: "lightgreen",
    ruName: "светло-зеленый",
    hexCode: "#D1FFBD",
    isSelected: false,
  },
];

export const categories: TCategories[] = [
  {
    filter: "all",
    isSelected: true,
    name: "Все товары",
  },
  {
    filter: "cornerSofas",
    isSelected: false,
    name: "Угловые диваны",
  },
  {
    filter: "straightSofas",
    isSelected: false,
    name: "Прямые диваны",
  },
  {
    filter: "beds",
    isSelected: false,
    name: "Кровати",
  },
  {
    filter: "uShapedSofas",
    isSelected: false,
    name: "П-образные диваны",
  },
  {
    filter: "other",
    isSelected: false,
    name: "Другое",
  },
];
