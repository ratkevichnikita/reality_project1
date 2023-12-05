import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { TProduct } from "../../redux/services/api.types";
import { fetchProducts } from "../../redux/productsSlice";
import { getDiscountPrice } from "../../utils/helpers";

import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import CardParams from "../../components/CardParams/CardParams";

import "./styles.scss";

const PersonalCard = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<TProduct | null>(null);
  const { products } = useAppSelector((store) => store.products);
  const [discountPrice, setDiscountPrice] = useState<string | null>(null);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
    const currentProduct = products?.find((el: TProduct) => el.id === id);
    if (currentProduct) setProduct(currentProduct);
  }, [id, products, dispatch]);

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
        </>
      )}
    </div>
  );
};

export default PersonalCard;
