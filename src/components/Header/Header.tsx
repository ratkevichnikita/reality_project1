import NavBar from "../NavBar/NavBar";
import "./styles.scss";

const Header = () => {
  return (
    <div className={"header"}>
      <div className={"container"}>
        <NavBar />
        <div className={"header__banner"}>
          <div className={"header__banner-wrapper"}>
            <div className={"header__banner-info"}>
              <p className={"header__banner-number"}>20</p>
              <p className={"header__banner-year"}>лет</p>
              <p className={"header__banner-text"}>Изготавливаем диваны</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
