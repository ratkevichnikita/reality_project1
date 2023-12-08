import { FC, useEffect, useState } from "react";

import closeBtn from "../../../assets/images/close.svg";

import "./styles.scss";
import { getDiscountPrice } from "../../../utils/helpers";
import { useAppDispatch } from "../../../redux/hooks";
import { removeFromFavorites } from "../../../redux/productsSlice";

type BasketPopupItemProps = {
  id: string;
  name: string;
  image: string;
  price: string;
  discount: string | null;
};

const BasketPopupItem: FC<BasketPopupItemProps> = ({
  id,
  name,
  image,
  price,
  discount,
}) => {
  const [discountPrice, setDiscountPrice] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (discount) {
      const currentPrice = getDiscountPrice(price, discount);
      setDiscountPrice(currentPrice);
    }
  }, [discount, price]);
  return (
    <li className="basket-popup__item">
      <img className="basket-popup__item-img" src={image} alt="product image" />
      <div className="basket-popup__item-info">
        <p>{name}</p>
        <div className="basket-popup__item-prices">
          <span
            className={
              discount
                ? "basket-popup__item-price_old"
                : "basket-popup__item-price"
            }
          >
            {price}
          </span>
          {discount && (
            <span className="basket-popup__item-discount-price">
              {discountPrice}
            </span>
          )}
        </div>
      </div>
      <button
        className="basket-popup__item-bin-btn"
        onClick={() => dispatch(removeFromFavorites(id))}
      >
        <img src={closeBtn} alt="close btn" />
      </button>
    </li>
  );
};

export default BasketPopupItem;
