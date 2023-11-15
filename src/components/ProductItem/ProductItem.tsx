import "./styles.scss";

import { TProduct } from "../../redux/services/api.types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ discount, name, price, image, id }: TProduct) => {
  const [discountPrice, setDiscountPrice] = useState("");

  const getDiscountPrice = (price: string, discount: string) => {
    const numPrice = parseInt(price.replace(" ", ""));
    const numDiscount = parseInt(discount) / 100;

    const discountPrice =
      (numPrice - numPrice * numDiscount).toLocaleString("ru") + " ₽";

    setDiscountPrice(discountPrice);
  };

  useEffect(() => {
    if (discount) {
      getDiscountPrice(price, discount);
    }
  }, [discount]);

  return (
    <div className={"product-item"}>
      {discount && (
        <span className={"product-item__discount"}>-{discount}</span>
      )}
      <Link to={`/catalog/${id}`} className={"product-item__link"}>
        <img className={"product-item__img"} src={image} alt="img" />
      </Link>
      <h3 className={"product-item__title"}>{name}</h3>
      <div className={"product-item__prices"}>
        <span className={"product-item__price product-item__price_old"}>
          {price}
        </span>
        {discount && (
          <span className={"product-item__discount-price"}>
            {discountPrice}
          </span>
        )}
      </div>
      <button className={"product-item__button"}>Купить</button>
    </div>
  );
};

export default ProductItem;
