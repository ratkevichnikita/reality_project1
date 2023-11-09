import "./styles.scss";
import logo from "../../assets/images/logo.svg";
import basket from "../../assets/images/basket.svg";

const NavBar = () => {
  return (
    <div className={"nav"}>
      <img src={logo} alt="logo" />
      <ul className={"nav__list"}>
        <li className={"nav__item nav__item_active"}>Главная</li>
        <li className={"nav__item"}>Каталог мебели</li>
        <li className={"nav__item"}>О компании</li>
        <li className={"nav__item"}>Доставка и оплата</li>
        <li className={"nav__item"}>Магазины</li>
      </ul>
      <div className={"nav__utils"}>
        <div className={"basket"}>
          <img className={"basket__img"} src={basket} alt="basket" />
          <span className={"basket__counter"}>0</span>
        </div>
        <p className={"nav__phone"}>8 (917) 077-23-32</p>
      </div>
    </div>
  );
};

export default NavBar;
