import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import AsideBar from "../../components/AsideBar/AsideBar";
import Sorting from "../../components/Sorting/Sorting";
import ProductList from "../../components/ProductList/ProductList";

import "./styles.scss";
import Footer from "../../components/Footer/Footer";
import { useGetProductsQuery } from "../../redux/services/realityApi";
import { useEffect, useState } from "react";
import { TProduct } from "../../redux/services/api.types";
import { AsideBarFilter } from "../../assets/types";
import { asideBarFilters } from "../../assets/constants";

const Catalog = () => {
  const { data, isLoading } = useGetProductsQuery();
  const [filteredProductList, setFilteredProductList] = useState<TProduct[]>();

  useEffect(() => {
    if (data) {
      setFilteredProductList(data);
    }
  }, [data]);

  const handleFilterProducts = (filter: AsideBarFilter): void => {
    const filteredProducts = data?.filter(
      (product: TProduct) => product.category === filter.filter,
    );
    if (filteredProducts) setFilteredProductList(filteredProducts);

    asideBarFilters.forEach((el: AsideBarFilter) => {
      if (el.filter === filter.filter) {
        el.isSelected = true;
      } else {
        el.isSelected = false;
      }
    });
  };

  const handleFilterNewProducts = (): void => {
    const filteredProducts = filteredProductList?.filter(
      (product: TProduct) => product["isNew"] === true,
    );
    setFilteredProductList(filteredProducts);
  };
  const handleFilterDiscountProducts = (): void => {
    const filteredProducts = filteredProductList?.filter(
      (product: TProduct) => product["discount"] !== null,
    );
    setFilteredProductList(filteredProducts);
  };

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
          <AsideBar handleFilterProducts={handleFilterProducts} />
          <div className="catalog__section-wrapper">
            <Sorting
              productList={filteredProductList}
              handleFilterNewProducts={handleFilterNewProducts}
              handleFilterDiscountProducts={handleFilterDiscountProducts}
            />
            <ProductList
              productList={filteredProductList}
              isLoading={isLoading}
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
