import { FC } from "react";

import { TProduct } from "../../redux/services/api.types";
import { sortingFilters } from "../../assets/constants";
import { TSortingFilter } from "../../assets/types";

import "./styles.scss";

type SortingProps = {
  productList: TProduct[] | undefined;
  handleFilter: (filterItem: TSortingFilter) => void;
};

const Sorting: FC<SortingProps> = ({ productList, handleFilter }) => {
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
              onClick={() => handleFilter(filter)}
              disabled={filter.isDisabled}
            >
              {filter.label}
            </button>
          );
        })}
        <span className="sorting__counter">Найдено: {productList?.length}</span>
      </div>
    </div>
  );
};

export default Sorting;
