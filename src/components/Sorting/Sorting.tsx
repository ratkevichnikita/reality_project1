import { FC } from "react";

import { sortingFilters } from "../../assets/constants";
import { TSortingFilter } from "../../assets/types";

import "./styles.scss";

type SortingProps = {
  count: number;
  handleFilter: (filter: string) => void;
};

const Sorting: FC<SortingProps> = ({ count, handleFilter }) => {
  return (
    <div className="sorting">
      <div className="sorting__wrapper">
        <span className="sorting__text">Сортировка:</span>
        {sortingFilters.map((filter: TSortingFilter) => {
          return (
            <button
              key={filter.label}
              className={
                filter.isSelected
                  ? "sorting__btn sorting__btn_active"
                  : "sorting__btn"
              }
              onClick={() => handleFilter(filter.filter)}
              disabled={filter.isDisabled}
            >
              {filter.label}
            </button>
          );
        })}
        <span className="sorting__counter">Найдено: {count}</span>
      </div>
    </div>
  );
};

export default Sorting;
