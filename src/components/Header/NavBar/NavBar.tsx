import { Link, useLocation } from "react-router-dom";
import "./styles.scss";

const NavBar = () => {
  const location = useLocation();
  return (
    <ul className={"nav__list"}>
      <li className={"nav__item"}>
        <Link
          className={
            location.pathname === "/"
              ? "nav__link nav__link_active"
              : "nav__link"
          }
          to="/"
        >
          Главная
        </Link>
      </li>
      <li className={"nav__item"}>
        <Link
          className={
            location.pathname === "/catalog"
              ? "nav__link nav__link_active"
              : "nav__link"
          }
          to="/catalog"
        >
          Каталог мебели
        </Link>
      </li>
      <li className={"nav__item"}>О компании</li>
      <li className={"nav__item"}>Доставка и оплата</li>
      <li className={"nav__item"}>Магазины</li>
    </ul>
  );
};

export default NavBar;
