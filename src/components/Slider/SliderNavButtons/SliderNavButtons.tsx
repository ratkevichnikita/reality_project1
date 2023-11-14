import { useSwiper } from "swiper/react";

import arrowRight from "../../../assets/images/arrow-right.svg";
import arrowLeft from "../../../assets/images/arrow-left.svg";

import "./styles.scss";

const SliderNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className={"swiper-buttons"}>
      <button
        className={"swiper-button swiper-button-prev"}
        onClick={() => swiper.slidePrev()}
      >
        <img src={arrowLeft} alt="arrowLeft" />
      </button>
      <button
        className={"swiper-button swiper-button-next"}
        onClick={() => swiper.slideNext()}
      >
        <img src={arrowRight} alt="arrowRight" />
      </button>
    </div>
  );
};

export default SliderNavButtons;
