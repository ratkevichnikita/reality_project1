import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { TProduct } from "../../../redux/services/api.types";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../redux/productsSlice";

import { getDiscountPrice } from "../../../utils/helpers";

import "./styles.scss";

export type ProductItemProps = Pick<
  TProduct,
  "discount" | "name" | "price" | "image" | "id" | "isNew"
>;

const ProductItem: FC<ProductItemProps> = ({
  discount,
  name,
  price,
  image,
  id,
  isNew,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useAppDispatch();
  const { favoritesProducts } = useAppSelector((store) => store.products);
  const discountPrice = getDiscountPrice(price, discount);

  useEffect(() => {
    favoritesProducts.some((el) => el.id === id)
      ? setIsFavorite(false)
      : setIsFavorite(true);
  }, [favoritesProducts, id]);

  return (
    <div className="product-item">
      <div className="product-item__banner">
        {isNew && <span className="product-item__new">NEW</span>}
        {discount && (
          <span className="product-item__discount">-{discount}</span>
        )}
      </div>
      <Link to={`/catalog/${id}`} className={"product-item__link"}>
        <img className="product-item__img" src={image} alt="img" />
      </Link>
      <h3 className="product-item__title">{name}</h3>
      <div className="product-item__prices">
        <span className="product-item__price product-item__price_old">
          {price}
        </span>
        {discount && (
          <span className="product-item__discount-price">{discountPrice}</span>
        )}
      </div>
      {isFavorite ? (
        <button
          className="product-item__button"
          onClick={() => dispatch(addToFavorites(id))}
        >
          Купить
        </button>
      ) : (
        <button
          className="product-item__button product-item__button_remove"
          onClick={() => dispatch(removeFromFavorites(id))}
        >
          Х
        </button>
      )}
    </div>
  );
};

export default ProductItem;
