import { Link } from "react-router-dom";

import vkIcon from "../../assets/images/vk.svg";
import instagramIcon from "../../assets/images/instagram.svg";
import viberIcon from "../../assets/images/viber.svg";
import wpIcon from "../../assets/images/wp.svg";
import logo from "../../assets/images/logo.svg";

import "./styles.scss";
import NavBar from "../Header/NavBar/NavBar";

const Footer = () => {
  return (
    <footer className={"footer"}>
      <div className={"container"}>
        <div className={"footer__navigation"}>
          <NavBar />
          <div className={"footer__contacts"}>
            <div className={"footer__contacts-wrapper"}>
              <p className={"footer__contacts-title"}>Мы в соцсетях</p>
              <div className={"footer__contacts-icons"}>
                <a href="#!">
                  <img src={vkIcon} alt="vk icon" />
                </a>
                <a href="#!">
                  <img src={instagramIcon} alt="instagram icon" />
                </a>
              </div>
            </div>
            <div className={"footer__contacts-wrapper"}>
              <a href="tel:+79170772332" className={"footer__contacts-title"}>
                8 (917) 077-23-32
              </a>
              <div className={"footer__contacts-icons"}>
                <a href="#!">
                  <img src={viberIcon} alt="viber icon" />
                </a>
                <a href="#!">
                  <img src={wpIcon} alt="whats app icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={"footer__info"}>
          <Link to="/" className={"footer__info-logo"}>
            <img src={logo} alt="logo" />
          </Link>
          <p className={"footer__info-copyright"}>
            Все ресурсы сайта www.FD.ru, включая фото, видео, контент, структура
            страниц, защищены российскими законами об охране авторских прав и
            интеллектуальной собственности (статьи 1259 и 1260 главы 70
            "Авторское право" Гражданского Кодекса Российской Федерации от 18
            декабря 2006 года N 230-ФЗ).
          </p>
          <div className={"footer__info-privacy"}>
            <p>Политика конфиденциальности</p>
            <p>© 2004 - 2020 Мебель в Чебоксарах. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
