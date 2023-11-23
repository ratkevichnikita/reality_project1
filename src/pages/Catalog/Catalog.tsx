import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import AsideBar from "../../components/AsideBar/AsideBar";
import Sorting from "../../components/Sorting/Sorting";
import ProductList from "../../components/ProductList/ProductList";

import "./styles.scss";
import Footer from "../../components/Footer/Footer";

const Catalog = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="/">
                Главная
              </Link>
            </li>
            <li className="breadcrumbs__item">Каталог мебели</li>
          </ul>
        </nav>
        <section className="catalog__section">
          <AsideBar />
          <div className="catalog__section-wrapper">
            <Sorting />
            <ProductList />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
