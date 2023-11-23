import logo from "../../assets/images/logo.svg";
import basket from "../../assets/images/basket.svg";
import "./styles.scss";
import { Link, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const location = useLocation();
  return (
    <div className={"header"}>
      <div className={"container"}>
        <div
          className={
            location.pathname !== "/"
              ? "header__wrapper header__wrapper_border "
              : "header__wrapper"
          }
        >
          <Link className={"header__logo"} to="/">
            <img src={logo} alt="logo" />
          </Link>
          <NavBar />
          <div className={"header__utils"}>
            <div className={"basket"}>
              <img className={"basket__img"} src={basket} alt="basket" />
              <span className={"basket__counter"}>0</span>
            </div>
            <a href="tel:+79170772332" className={"header__phone"}>
              8 (917) 077-23-32
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
