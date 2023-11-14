import Header from "../../components/Header/Header";
import Categories from "../../components/Categories/Categories";
import "./styles.scss";
import Products from "../../components/Products/Products";

const Home = () => {
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
        <Products
          title="Акция"
          text="Все представленные диваны цены имеют доступные, тем не менее, наша фабрика регулярно проводит распродажи и акции. Следите за новостями на нашем сайте мебели, если хотите купить диван по выгодной цене."
        />
      </section>
    </>
  );
};

export default Home;
