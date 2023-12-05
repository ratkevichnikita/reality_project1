import { useSwiper } from "swiper/react";

import "./styles.scss";
import { FC } from "react";

type SliderNavButtonsProps = {
  arrowRight: string;
  arrowLeft: string;
};

const SliderNavButtons: FC<SliderNavButtonsProps> = ({
  arrowRight,
  arrowLeft,
}) => {
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
