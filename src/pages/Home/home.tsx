import Header from "../../components/Header/Header";
import Categories from "../../components/Categories/Categories";
import "./styles.scss";
import SpecialProducts from "../../components/SpecialProducts/SpecialProducts";
import { useGetProductsQuery } from "../../redux/services/realityApi";
import { useEffect, useState } from "react";
import { TProduct } from "../../redux/services/api.types";

const Home = () => {
  const [discountedProducts, setDiscountedProducts] = useState<TProduct[]>([]);
  const [newProducts, setNewProducts] = useState<TProduct[]>([]);
  const { data } = useGetProductsQuery();

  useEffect(() => {
    const discProducts = data?.filter((product) => product.discount);
    if (discProducts?.length) {
      setDiscountedProducts(discProducts);
    }
  }, [data]);

  useEffect(() => {
    const newProducts = data?.filter((product) => product.isNew);
    if (newProducts?.length) {
      setNewProducts(newProducts);
    }
  }, [data]);
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
      <section>
        <SpecialProducts
          title="Новинки"
          text="Если вы ищете, где купить мебель в Чебоксарах, то советуем обратить внимание на продукцию ншей фабрики. Направление нашего производства — мягкая мебель, пользующаяся большим спросом уже более 20-ти лет."
          productList={newProducts}
        />
      </section>
    </>
  );
};

export default Home;
