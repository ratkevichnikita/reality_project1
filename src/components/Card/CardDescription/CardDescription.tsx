import { FC } from "react";

import "./styles.scss";

type CardDescriptionProps = {
  characteristics: {
    karkas?: string;
    napolnenie?: string;
    material?: string;
    podushki?: string;
    chehol?: string;
    cvet?: string;
    proizvoditel?: string;
  };
};

const CardDescription: FC<CardDescriptionProps> = ({ characteristics }) => {
  const { karkas, napolnenie, material, podushki, chehol, cvet, proizvoditel } =
    characteristics;
  return (
    <div className="container">
      <div className="card-description">
        <div className="card-description__info">
          <div className="card-description__desc">
            <h3 className="card-description__title">Описание</h3>
            <p className="card-description__text">
              “Ренессанс” современный стильный диван класса люкс. В дизайне
              модели лаконичные скругленные формы выгодно дополнены бархатистой
              фактурой обивки и стяжками на лицевой стороне. Состоящий из
              отдельных модулей, «Монреаль» может принимать любую форму.
              Комбинируйте кресла, канапе, угловые и прямые элементы, создавая
              идеальную конфигурацию для своей гостиной!
            </p>
          </div>
          <div className="card-description__characteristics">
            <h3 className="card-description__title">Характеристики</h3>
            <ul className="card-description__characteristics-list">
              <li className="card-description__characteristics-item">
                <p className="card-description__text">Каркас: {karkas}</p>
              </li>
              <li className="card-description__characteristics-item">
                <p className="card-description__text">
                  Наполнение: {napolnenie}
                </p>
              </li>
              <li className="card-description__characteristics-item">
                <p className="card-description__text">
                  Материал ножек: {material}
                </p>
              </li>
              <li className="card-description__characteristics-item">
                <p className="card-description__text">
                  Декоративные подушки: {podushki}
                </p>
              </li>
              <li className="card-description__characteristics-item">
                <p className="card-description__text">
                  Съемный чехол: {chehol}
                </p>
              </li>
              <li className="card-description__characteristics-item">
                <p className="card-description__text">Цвет: {cvet}</p>
              </li>
              <li className="card-description__characteristics-item">
                <p className="card-description__text">
                  Производитель: {proizvoditel}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-description__equipment">
          <div className="card-description__equipment-wrapper">
            <h3 className="card-description__title">Полная комплектация</h3>
            <p className="card-description__equipment-text">
              Любой комплект можно заменить или собрать по своему пожеланию
            </p>
            <ul className="card-description__equipment-list">
              <li className="card-description__equipment-item">
                Дополнить креслом-кроватью;
              </li>
              <li className="card-description__equipment-item">
                Увеличить диванную секцию;
              </li>
              <li className="card-description__equipment-item">
                Увеличить общий размер дивана;
              </li>
              <li className="card-description__equipment-item">
                Изменить наполнитель;
              </li>
              <li className="card-description__equipment-item">
                Изменить форму подлокотников;
              </li>
              <li className="card-description__equipment-item">
                Добавить подлокотники;
              </li>
              <li className="card-description__equipment-item">
                Изменить форму подушек и наполнитель.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
