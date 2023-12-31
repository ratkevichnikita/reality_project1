import { AsideBarFilter, TCities } from "../types";

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

export const asideBarFilters: AsideBarFilter[] = [
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
