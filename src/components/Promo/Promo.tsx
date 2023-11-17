import { useGetPromoQuery } from "../../redux/services/realityApi";

import "./styles.scss";

const Promo = () => {
  const { data } = useGetPromoQuery();

  return (
    <div className={"promo"}>
      <div className={"promo__wrapper"}>
        <p className={"promo__description"}>{data?.description}</p>
        <span className={"promo__discount"}>-{data?.discount}</span>
        <div className={"promo__img-container"}>
          <img className={"promo__img"} src={data?.image} alt="promo image" />
          <span className={"promo__label"}>“{data?.label}”</span>
        </div>
      </div>
    </div>
  );
};

export default Promo;
