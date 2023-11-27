import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { TProduct } from "../../redux/services/api.types";
import { AsideBarFilter } from "../../assets/types";
import { asideBarFilters } from "../../assets/constants";

import Header from "../../components/Header/Header";
import AsideBar from "../../components/AsideBar/AsideBar";
import Sorting from "../../components/Sorting/Sorting";
import ProductList from "../../components/ProductList/ProductList";
import Footer from "../../components/Footer/Footer";

import "./styles.scss";
import { fetchProducts, filterProducts } from "../../redux/productsSlice";

const Catalog = () => {
  const [isQuery, setIsQuery] = useState(false);
  const dispatch = useAppDispatch();
  const { products, sortedProducts, isLoading } = useAppSelector(
    (state) => state.products,
  );
  const [filteredProductList, setFilteredProductList] = useState<TProduct[]>(
    [],
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProductList(isQuery ? sortedProducts : products);
  }, [products, sortedProducts, isQuery]);

  const handleFilterProducts = (filter: AsideBarFilter): void => {
    setIsQuery(true);
    dispatch(filterProducts(filter.filter));

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
