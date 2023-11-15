import logo from "../../assets/images/logo.svg";
import basket from "../../assets/images/basket.svg";
import "./styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={"header"}>
      <div className={"container"}>
        <div className={"header__wrapper"}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul className={"header__list"}>
            <li className={"header__item header__item_active"}>
              <Link to="/">Главная</Link>
            </li>
            <li className={"header__item"}>
              <Link to="/catalog">Каталог мебели</Link>
            </li>
            <li className={"header__item"}>О компании</li>
            <li className={"header__item"}>Доставка и оплата</li>
            <li className={"header__item"}>Магазины</li>
          </ul>
          <div className={"header__utils"}>
            <div className={"basket"}>
              <img className={"basket__img"} src={basket} alt="basket" />
              <span className={"basket__counter"}>0</span>
            </div>
            <p className={"header__phone"}>8 (917) 077-23-32</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
