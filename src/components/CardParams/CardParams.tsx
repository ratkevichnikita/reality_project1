import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addToFavorites,
  changeCurrentColor,
  getCurrentColorList,
} from "../../redux/productsSlice";

import "./styles.scss";

type CardParamsProps = {
  id: string;
  image: string;
  name: string;
  rowPrice: string;
  discountPrice: string | null;
  colors: string[];
  sizeWidth: string;
  sizeLength: string;
  sleepingLength: string;
  sleepingWidth: string;
};

const CardParams: FC<CardParamsProps> = ({
  id,
  image,
  name,
  rowPrice,
  discountPrice,
  colors,
  sizeWidth,
  sizeLength,
  sleepingLength,
  sleepingWidth,
}) => {
  const dispatch = useAppDispatch();
  const { currentColorList } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getCurrentColorList(colors));
  }, [colors, dispatch]);

  return (
    <div className="card-params">
      <div className="container">
        <div className="card-params__wrapper">
          <div className="demo">
            <img className="demo__img" src={image} alt="product image" />
          </div>
          <div className="options">
            <h2 className="options__title">{name}</h2>
            <div className="options__prices">
              <span
                className={
                  discountPrice ? "options__price_old" : "options__price"
                }
              >
                {rowPrice}
              </span>
              {discountPrice && (
                <span className="options__price_discount">{discountPrice}</span>
              )}
            </div>
            <div className="options__colors">
              <p className="options__colors-title title">Цвет</p>
              {currentColorList && (
                <ul className="color-list">
                  {currentColorList.map((color) => {
                    return (
                      <li
                        key={color.engName}
                        className="color-list__item"
                        onClick={() =>
                          dispatch(changeCurrentColor(color.engName))
                        }
                      >
                        <span
                          style={{ backgroundColor: color.hexCode }}
                          className={
                            color.isSelected
                              ? "color-list__box color-list__box_active"
                              : "color-list__box"
                          }
                        />
                        <p className="color-list__text">{color.ruName}</p>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className="options__params">
              <p className="options__params-title title">Размер</p>
              <div className="options__params-container">
                <div className="options__params-item">
                  <span className="options__params-text">длина</span>
                  <span className="options__params-num">{sizeLength} см</span>
                </div>
                <div className="options__params-item">
                  <span className="options__params-text">ширина</span>
                  <span className="options__params-num">{sizeWidth} см</span>
                </div>
              </div>
            </div>
            <div className="options__params">
              <p className="options__params-title title">Спальное место</p>
              <div className="options__params-container">
                <div className="options__params-item">
                  <span className="options__params-text">длина</span>
                  <span className="options__params-num">
                    {sleepingLength} см
                  </span>
                </div>
                <div className="options__params-item">
                  <span className="options__params-text">ширина</span>
                  <span className="options__params-num">
                    {sleepingWidth} см
                  </span>
                </div>
              </div>
            </div>
            <div className="options__layout">
              <span className="options__layout-title">Механизм раскладки:</span>
              <span className="options__layout-text">Тройной раскладки</span>
            </div>
            <button
              className="options__btn"
              onClick={() => dispatch(addToFavorites(id))}
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardParams;
