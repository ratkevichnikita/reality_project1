import { useEffect, useState } from "react";

import { TProduct } from "../../redux/services/api.types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProducts } from "../../redux/productsSlice";

import Header from "../../components/Header/Header";
import Categories from "../../components/Categories/Categories";
import SpecialProducts from "../../components/SpecialProducts/SpecialProducts";
import Promo from "../../components/Promo/Promo";
import Map from "../../components/Map/Map";
import Footer from "../../components/Footer/Footer";

import aboutImg from "../../assets/images/about-img.jpg";
import item1 from "../../assets/images/info-item1.svg";
import item2 from "../../assets/images/info-item2.svg";
import item3 from "../../assets/images/info-item3.svg";
import item4 from "../../assets/images/info-item4.svg";

import "./styles.scss";

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
      <div className={"info"}>
        <div className={"container"}>
          <h2 className={"info__title"}>Фабрика диванов</h2>
          <p className={"info__text"}>
            Мебельная фабрика — это предприятие по производству современной,
            качественной и недорогой мебели. Мягкая мебель в Чебоксарах от
            производителя представляет собой широкий ассортимент стильных,
            функциональных диванов, кресел и пуфов. У нас Вы найдете диваны для
            гостиной, кухни, детские диваны, а так же мебель для офисов и кафе.
          </p>
          <ul className={"info__list"}>
            <li className={"info__item"}>
              <img className={"info__item-img"} src={item1} alt="info item 1" />
              <h3 className={"info__item-title"}>Доставка за 1 день</h3>
              <p className={"info__item-text"}>
                Доставка осуществляется до подъезда по г. Чебоксары,
                Новочебоксарск, Цивильск в определённые дни.
              </p>
            </li>
            <li className={"info__item"}>
              <img className={"info__item-img"} src={item2} alt="info item 2" />
              <h3 className={"info__item-title"}>Гарантия 12 месяцев</h3>
              <p className={"info__item-text"}>
                Мы ответственно относимся к качеству наших диванов, вся мебель
                сертифицирована.
              </p>
            </li>
            <li className={"info__item"}>
              <img className={"info__item-img"} src={item3} alt="info item 3" />
              <h3 className={"info__item-title"}>Выгодные цены</h3>
              <p className={"info__item-text"}>
                Не переплачивайте - покупайте диваны от производителя, без
                посредников и розничных наценок.
              </p>
            </li>
            <li className={"info__item"}>
              <img className={"info__item-img"} src={item4} alt="info item 4" />
              <h3 className={"info__item-title"}>Огромный выбор ткани</h3>
              <p className={"info__item-text"}>
                Мы ответственно относимся к качеству наших диванов, вся мебель
                сертифицирована.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <section className={"section"}>
        <Map />
      </section>
      <section className={"section"}>
        <div className={"about"}>
          <div className={"container"}>
            <div className={"about__wrapper"}>
              <div className={"about__info"}>
                <h2 className={"about__title"}>Фабрика диванов</h2>
                <p className={"about__text"}>
                  Это предприятие по производству современной, качественной и
                  недорогой мебели. Мягкая мебель в Чебоксарах от производителя
                  "Ульяна" представляет собой широкий ассортимент стильных,
                  функциональных диванов, кресел и пуфов. В нашем каталоге
                  мебели представлены диваны для гостиной, кухни, детские
                  диваны, а так же мебель для офисов и кафе.
                </p>
                <p className={"about__text"}>
                  Трудно представить себе современный уютный дом или квартиру
                  без дивана. Некоторые люди даже ставят угловой диван на кухню,
                  предпочитая принимать пищу с комфортом. Диван — это, пожалуй,
                  один из самых многофункциональных предметов мебели, днем на
                  нем можно сидеть, а ночью – он способен превращаться в удобную
                  1,5-спальную или двух спальную кровать. Некоторые угловые
                  диваны оснащены удобными полками, имеют мини-бар,
                  мини-столики.
                </p>
                <button className={"about__button"}>О компании</button>
              </div>
              <img src={aboutImg} alt="about image" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
