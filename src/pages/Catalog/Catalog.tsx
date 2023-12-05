import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { TProduct } from "../../redux/services/api.types";
import { TCategories } from "../../assets/types";
import {
  fetchProducts,
  filterProductsByCategory,
  filterProductsBySorting,
} from "../../redux/productsSlice";

import Header from "../../components/Header/Header";
import AsideBar from "../../components/AsideBar/AsideBar";
import Sorting from "../../components/Sorting/Sorting";
import ProductList from "../../components/ProductList/ProductList";
import Footer from "../../components/Footer/Footer";

import "./styles.scss";

const Catalog = () => {
  const dispatch = useAppDispatch();
  const { products, catalogProducts, categories, isLoading } = useAppSelector(
    (state) => state.products,
  );
  const [filteredProductList, setFilteredProductList] = useState<TProduct[]>(
    [],
  );

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
    setFilteredProductList(catalogProducts);
  }, [dispatch, products, catalogProducts]);

  useEffect(() => {
    dispatch(filterProductsByCategory("all"));
  }, [dispatch]);

  const handleFilterProductsByCategory = (filter: TCategories): void => {
    dispatch(filterProductsByCategory(filter.filter));
  };

  const handleFilterProductsBySorting = (filter: string): void => {
    dispatch(filterProductsBySorting(filter));
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
          <AsideBar
            handleFilterProducts={handleFilterProductsByCategory}
            categories={categories}
          />
          <div className="catalog__section-wrapper">
            <Sorting
              count={filteredProductList.length}
              handleFilter={handleFilterProductsBySorting}
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
