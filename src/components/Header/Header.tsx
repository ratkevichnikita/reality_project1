import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useAppSelector } from "../../redux/hooks";

import NavBar from "../NavBar/NavBar";
import BasketPopup from "../BasketPopup/BasketPopup";

import basket from "../../assets/images/basket.svg";
import logo from "../../assets/images/logo.svg";

import "./styles.scss";

const Header = () => {
  const location = useLocation();
  const { favoritesProducts } = useAppSelector((store) => store.products);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
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
            <div className={"basket"} onClick={handleOpenPopup}>
              <img className={"basket__img"} src={basket} alt="basket" />
              <span className={"basket__counter"}>
                {favoritesProducts.length}
              </span>
            </div>
            <a href="tel:+79170772332" className={"header__phone"}>
              8 (917) 077-23-32
            </a>
          </div>
          <BasketPopup
            handleOpenPopup={handleOpenPopup}
            isPopupOpen={isPopupOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
