import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { removeFromFavorites } from "../../redux/productsSlice";
import { TProduct } from "../../redux/services/api.types";

import { calculateTotalPrices, getDiscountPrice } from "../../utils/helpers";

import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";

import closeBtn from "../../assets/images/close.svg";

import "./styles.scss";

const BasketPage = () => {
  const dispatch = useAppDispatch();
  const { favoritesProducts } = useAppSelector((state) => state.products);
  const [totalRawPrice, totalDiscountNumber, totalDiscountPrice] =
    calculateTotalPrices(favoritesProducts);
  return (
    <div className="basket-page">
      <Header />
      {!favoritesProducts ? (
        <Loader />
      ) : (
        <>
          <div className="container">
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to="/">
                    Главная
                  </Link>
                </li>
                <li className="breadcrumbs__item">Корзина</li>
              </ul>
            </nav>
            <h2 className="basket-page__title">Корзина</h2>
            <div className="basket-page__headers">
              <span className="basket-page__headers-photo">Фото</span>
              <span className="basket-page__headers-product">Товар</span>
              <span className="basket-page__headers-price">Цена</span>
              <span className="basket-page__headers-quantity">Скидка</span>
              <span className="basket-page__headers-sum">Сумма</span>
            </div>
            <ul className="basket-page__products">
              {favoritesProducts.map((el: TProduct, index) => {
                return (
                  <li className="basket-page__product" key={index}>
                    <img
                      className="basket-page__product-image"
                      src={el.image}
                      alt="product image"
                    />
                    <span className="basket-page__product-name">{el.name}</span>
                    <span className="basket-page__product-price">
                      {el.price}
                    </span>
                    <span className="basket-page__product-discount">
                      {el.discount}
                    </span>
                    <span className="basket-page__product-price">
                      {getDiscountPrice(el.price, el.discount)}
                    </span>
                    <button
                      className="basket-page__product-btn"
                      onClick={() => dispatch(removeFromFavorites(el.id))}
                    >
                      <img src={closeBtn} alt="close btn" />
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="basket-page__info">
              <div>
                <input
                  className="basket-page__info-input"
                  type="text"
                  placeholder="Введите купон"
                />
              </div>
              <div className="basket-page__prices">
                <div className="basket-page__price">
                  <span className="basket-page__price-text">Сумма</span>
                  <span>{totalRawPrice}</span>
                </div>
                <div className="basket-page__price">
                  <span className="basket-page__price-discount">Скидка</span>
                  <span>{totalDiscountNumber}</span>
                </div>
                <div className="basket-page__price">
                  <span className="basket-page__price-text">
                    Итого к оплате:
                  </span>
                  <span>{totalDiscountPrice}</span>
                </div>
                <button className="basket-page__send-btn">
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BasketPage;
