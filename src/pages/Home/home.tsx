import { useEffect, useState } from "react";

import { TProduct } from "../../redux/services/api.types";

import Header from "../../components/Header/Header";
import Categories from "../../components/Categories/Categories";
import SpecialProducts from "../../components/SpecialProducts/SpecialProducts";
import Promo from "../../components/Promo/Promo";
import Info from "../../components/Info/Info";
import Map from "../../components/Map/Map";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import Footer from "../../components/Footer/Footer";

import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProducts } from "../../redux/productsSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);
  const [discountedProducts, setDiscountedProducts] = useState<TProduct[]>([]);
  const [newProducts, setNewProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    if (!products.length) dispatch(fetchProducts());
  }, [dispatch, products]);

  useEffect(() => {
    const discProducts = products?.filter((product) => product.discount);
    const newProducts = products?.filter((product) => product.isNew);
    if (discProducts?.length) {
      setDiscountedProducts(discProducts);
    }
    if (newProducts?.length) {
      setNewProducts(newProducts);
    }
  }, [products]);

  return (
    <>
      <Header />
      <div className={"container"}>
        <div className={"banner"}>
          <div className={"banner__wrapper"}>
            <div className={"banner__info"}>
              <p className={"banner__number"}>20</p>
              <p className={"banner__year"}>лет</p>
              <p className={"banner__text"}>Изготавливаем диваны</p>
            </div>
          </div>
        </div>
      </div>
      <Categories />
      <section className={"section"}>
        <SpecialProducts
          title="Акция"
          text="Все представленные диваны цены имеют доступные, тем не менее, наша фабрика регулярно проводит распродажи и акции. Следите за новостями на нашем сайте мебели, если хотите купить диван по выгодной цене."
          productList={discountedProducts}
        />
      </section>
      <Promo />
      <section className={"section"}>
        <SpecialProducts
          title="Новинки"
          text="Если вы ищете, где купить мебель в Чебоксарах, то советуем обратить внимание на продукцию ншей фабрики. Направление нашего производства — мягкая мебель, пользующаяся большим спросом уже более 20-ти лет."
          productList={newProducts}
        />
      </section>
      <Info />
      <section className={"section"}>
        <Map />
      </section>
      <section className={"section"}>
        <AboutCompany />
      </section>
      <Footer />
    </>
  );
};

export default Home;
