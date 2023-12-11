import { FC } from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../redux/hooks";
import { calculateTotalPrices } from "../../utils/helpers";

import BasketPopupItem from "./BasketPopupItem/BasketPopupItem";

import "./styles.scss";

type BasketPopupProps = {
  handleOpenPopup: () => void;
  isPopupOpen: boolean;
};

const BasketPopup: FC<BasketPopupProps> = ({
  handleOpenPopup,
  isPopupOpen,
}) => {
  const { favoritesProducts } = useAppSelector((store) => store.products);

  const { totalDiscountPrice } = calculateTotalPrices(favoritesProducts);

  return (
    <div
      className={
        isPopupOpen
          ? "basket-popup basket-popup_open"
          : "basket-popup basket-popup_close"
      }
    >
      <div className="basket-popup__wrapper">
        <button className="basket-popup__close-btn" onClick={handleOpenPopup}>
          &#10006;
        </button>
        <h3 className="basket-popup__title">
          Корзина
          <span className="basket-popup__count">
            {` / ${favoritesProducts.length} шт.`}
          </span>
        </h3>
        <ul className="basket-popup__list">
          {favoritesProducts.length ? (
            favoritesProducts.map((product) => {
              return (
                <BasketPopupItem
                  id={product.id}
                  key={product.name}
                  name={product.name}
                  price={product.price}
                  discount={product.discount}
                  image={product.image}
                />
              );
            })
          ) : (
            <p className="basket-popup__text">В корзине пока нет товаров.</p>
          )}
        </ul>
        <div className="basket-popup__result">
          <p className="basket-popup__result-text">Итоговая цена</p>
          <p className="basket-popup__result-price">{totalDiscountPrice}</p>
        </div>
        <Link className="basket-popup__link" to="/basket">
          Перейти в корзину
        </Link>
      </div>
    </div>
  );
};

export default BasketPopup;
