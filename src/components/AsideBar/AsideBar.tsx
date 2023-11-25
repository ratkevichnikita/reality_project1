import { FC } from "react";

import { AsideBarFilter } from "../../assets/types";
import { asideBarFilters } from "../../assets/constants";

import "./styles.scss";

type AsideBarProps = {
  handleFilterProducts: (filter: AsideBarFilter) => void;
};

const AsideBar: FC<AsideBarProps> = ({ handleFilterProducts }) => {
  return (
    <aside className="aside">
      <ul className="aside__list">
        {asideBarFilters.map((filter: AsideBarFilter) => {
          return (
            <li
              key={filter.filter}
              className={
                filter.isSelected
                  ? "aside__item aside__item_active"
                  : "aside__item"
              }
              onClick={() => handleFilterProducts(filter)}
            >
              {filter.name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default AsideBar;
