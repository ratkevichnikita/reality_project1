import { FC } from "react";

import { TProduct } from "../../redux/services/api.types";

import "./styles.scss";

type SortingProps = {
  productList: TProduct[] | undefined;
  handleFilterNewProducts: () => void;
  handleFilterDiscountProducts: () => void;
};

const Sorting: FC<SortingProps> = ({
  productList,
  handleFilterNewProducts,
  handleFilterDiscountProducts,
}) => {
  return (
    <div className="sorting">
      <div className="sorting__wrapper">
        <span className="sorting__text">Сортировка:</span>
        <button className="sorting__btn sorting__btn_disabled">
          популярность
        </button>
        <button className="sorting__btn" onClick={handleFilterNewProducts}>
          новинки
        </button>
        <button className="sorting__btn">цена по возрастанию</button>
        <button className="sorting__btn">цена по убыванию</button>
        <button className="sorting__btn" onClick={handleFilterDiscountProducts}>
          скидка
        </button>
        <span className="sorting__counter">Найдено: {productList?.length}</span>
      </div>
    </div>
  );
};

export default Sorting;
