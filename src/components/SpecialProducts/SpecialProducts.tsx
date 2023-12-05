import { FC } from "react";
import Slider from "../Slider/Slider";
import "./styles.scss";
import { TProduct } from "../../redux/services/api.types";
import Loader from "../Loader/Loader";
import arrowRight from "../../assets/images/arrow-right.svg";
import arrowLeft from "../../assets/images/arrow-left.svg";

type ProductsProps = {
  title: string;
  text: string;
  productList: TProduct[];
};

const Products: FC<ProductsProps> = ({ title, text, productList }) => {
  return (
    <div className={"products"}>
      <div className={"container"}>
        {productList.length ? (
          <>
            <h2 className={"products__title"}>{title}</h2>
            <p className={"products__text"}>{text}</p>
            {productList && (
              <Slider
                slides={productList}
                arrowRight={arrowRight}
                arrowLeft={arrowLeft}
              />
            )}
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Products;
