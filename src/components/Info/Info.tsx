import "./styles.scss";

import item1 from "../../assets/images/info-item1.svg";
import item2 from "../../assets/images/info-item2.svg";
import item3 from "../../assets/images/info-item3.svg";
import item4 from "../../assets/images/info-item4.svg";

const Info = () => {
  return (
    <div className={"info"}>
      <div className={"container"}>
        <h2 className={"info__title"}>Фабрика диванов</h2>
        <p className={"info__text"}>
          Мебельная фабрика — это предприятие по производству современной,
          качественной и недорогой мебели. Мягкая мебель в Чебоксарах от
          производителя представляет собой широкий ассортимент стильных,
          функциональных диванов, кресел и пуфов. У нас Вы найдете диваны для
          гостиной, кухни, детские диваны, а так же мебель для офисов и кафе.
        </p>
        <ul className={"info__list"}>
          <li className={"info__item"}>
            <img className={"info__item-img"} src={item1} alt="info item 1" />
            <h3 className={"info__item-title"}>Доставка за 1 день</h3>
            <p className={"info__item-text"}>
              Доставка осуществляется до подъезда по г. Чебоксары,
              Новочебоксарск, Цивильск в определённые дни.
            </p>
          </li>
          <li className={"info__item"}>
            <img className={"info__item-img"} src={item2} alt="info item 2" />
            <h3 className={"info__item-title"}>Гарантия 12 месяцев</h3>
            <p className={"info__item-text"}>
              Мы ответственно относимся к качеству наших диванов, вся мебель
              сертифицирована.
            </p>
          </li>
          <li className={"info__item"}>
            <img className={"info__item-img"} src={item3} alt="info item 3" />
            <h3 className={"info__item-title"}>Выгодные цены</h3>
            <p className={"info__item-text"}>
              Не переплачивайте - покупайте диваны от производителя, без
              посредников и розничных наценок.
            </p>
          </li>
          <li className={"info__item"}>
            <img className={"info__item-img"} src={item4} alt="info item 4" />
            <h3 className={"info__item-title"}>Огромный выбор ткани</h3>
            <p className={"info__item-text"}>
              Мы ответственно относимся к качеству наших диванов, вся мебель
              сертифицирована.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
