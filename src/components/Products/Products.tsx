import "./styles.scss";

type ProductsProps = {
  title: string;
  text: string;
};

const Products = ({ title, text }: ProductsProps) => {
  return (
    <div className={"products"}>
      <div className={"container"}>
        <h2 className={"products__title"}>{title}</h2>
        <p className={"products__text"}>{text}</p>
      </div>
    </div>
  );
};

export default Products;
