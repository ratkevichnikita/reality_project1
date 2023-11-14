import { useGetDataQuery } from "../../redux/services/realityApi";
import Slider from "../Slider/Slider";
import "./styles.scss";

type ProductsProps = {
  title: string;
  text: string;
};

const Products = ({ title, text }: ProductsProps) => {
  const { data } = useGetDataQuery();
  return (
    <div className={"products"}>
      <div className={"container"}>
        <h2 className={"products__title"}>{title}</h2>
        <p className={"products__text"}>{text}</p>
        {data && <Slider slides={data.products} />}
      </div>
    </div>
  );
};

export default Products;
