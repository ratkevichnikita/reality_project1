import { FC } from "react";

import { AsideBarFilter } from "../../assets/types";

import "./styles.scss";

type AsideBarProps = {
  handleFilterProducts: (filter: AsideBarFilter) => void;
  categories: AsideBarFilter[];
};

const AsideBar: FC<AsideBarProps> = ({ handleFilterProducts, categories }) => {
  return (
    <aside className="aside">
      <ul className="aside__list">
        {categories.map((filter: AsideBarFilter) => {
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
