import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { TProduct } from "../../redux/services/api.types";
import {
  fetchProducts,
  filterProductsBySimilar,
} from "../../redux/productsSlice";
import { getDiscountPrice } from "../../utils/helpers";

import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import CardParams from "../../components/Card/CardParams/CardParams";
import CardVideo from "../../components/Card/CardVideo/CardVideo";
import CardDescription from "../../components/Card/CardDescription/CardDescription";

import "./styles.scss";
import SpecialProducts from "../../components/SpecialProducts/SpecialProducts";
import Footer from "../../components/Footer/Footer";

const PersonalCard = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<TProduct | null>(null);
  const { products, similarProducts } = useAppSelector(
    (store) => store.products,
  );
  const [discountPrice, setDiscountPrice] = useState<string | null>(null);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
    const currentProduct = products?.find((el: TProduct) => el.id === id);
    if (currentProduct) setProduct(currentProduct);
    if (product) {
      dispatch(filterProductsBySimilar(product));
    }
  }, [id, products, dispatch, product]);

  useEffect(() => {
    if (product?.discount) {
      setDiscountPrice(getDiscountPrice(product.price, product.discount));
    }
  }, [product]);

  return (
    <div>
      <Header />
      {!product ? (
        <Loader />
      ) : (
        <>
          <div className="container">
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to="/">
                    Главная
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to="/catalog">
                    Каталог мебели
                  </Link>
                </li>
                <li className="breadcrumbs__item">{product?.name}</li>
              </ul>
            </nav>
          </div>
          <CardParams
            id={product.id}
            image={product.image}
            name={product.name}
            discountPrice={discountPrice}
            rowPrice={product.price}
            colors={product.colors}
            sizeWidth={product.size.width}
            sizeLength={product.size.length}
            sleepingLength={product.sleepingPlace.length}
            sleepingWidth={product.sleepingPlace.width}
          />
          <section className="card-section">
            <CardDescription characteristics={product.characteristics} />
          </section>
          <CardVideo
            link={product.videoLink}
            title={product.name}
            text={product.videoText}
          />
          {!!similarProducts.length && (
            <section className="section">
              <SpecialProducts
                title="Похожие товары"
                text="Все представленные диваны цены имеют доступные, тем не менее, наша фабрика регулярно проводит распродажи и акции. Следите за новостями на нашем сайте мебели, если хотите купить диван по выгодной цене."
                productList={similarProducts}
              />
            </section>
          )}
          <Footer />
        </>
      )}
    </div>
  );
};

export default PersonalCard;
