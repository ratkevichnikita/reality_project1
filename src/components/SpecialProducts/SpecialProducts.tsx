import { FC } from "react";
import Slider from "../Slider/Slider";
import "./styles.scss";
import { TProduct } from "../../redux/services/api.types";

type ProductsProps = {
  title: string;
  text: string;
  productList: TProduct[];
};

const Products: FC<ProductsProps> = ({ title, text, productList }) => {
  return (
    <div className={"products"}>
      <div className={"container"}>
        <h2 className={"products__title"}>{title}</h2>
        <p className={"products__text"}>{text}</p>
        {productList && <Slider slides={productList} />}
      </div>
    </div>
  );
};

export default Products;
