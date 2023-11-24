import { FC } from "react";
import "./styles.scss";

export type AsideBarProps = {
  handleFilterProducts: (filter: string) => void;
};

export enum Filters {
  cornerSofas = "cornerSofas",
  straightSofas = "straightSofas",
  beds = "beds",
  uShapedSofas = "uShapedSofas",
  other = "other",
}

const AsideBar: FC<AsideBarProps> = ({ handleFilterProducts }) => {
  return (
    <aside className="aside">
      <ul className="aside__list">
        <li
          className="aside__item"
          onClick={() => handleFilterProducts(Filters.cornerSofas)}
        >
          Угловые диваны
        </li>
        <li
          className="aside__item"
          onClick={() => handleFilterProducts(Filters.uShapedSofas)}
        >
          П-образные диваны
        </li>
        <li
          className="aside__item"
          onClick={() => handleFilterProducts(Filters.straightSofas)}
        >
          Прямые диваны
        </li>
        <li
          className="aside__item"
          onClick={() => handleFilterProducts(Filters.beds)}
        >
          Кровати
        </li>
        <li
          className="aside__item"
          onClick={() => handleFilterProducts(Filters.other)}
        >
          Другое
        </li>
      </ul>
    </aside>
  );
};

export default AsideBar;
