import { Link } from "react-router-dom";
import "./sryles.scss";

const NavBar = () => {
  return (
    <ul className={"nav__list"}>
      <li className={"nav__item nav__item_active"}>
        <Link to="/">Главная</Link>
      </li>
      <li className={"nav__item"}>
        <Link to="/catalog">Каталог мебели</Link>
      </li>
      <li className={"nav__item"}>О компании</li>
      <li className={"nav__item"}>Доставка и оплата</li>
      <li className={"nav__item"}>Магазины</li>
    </ul>
  );
};

export default NavBar;
