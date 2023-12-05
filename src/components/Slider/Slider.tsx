import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { TProduct } from "../../redux/services/api.types";
import ProductItem from "../ProductItem/ProductItem";
import SliderNavButtons from "./SliderNavButtons/SliderNavButtons";
import "swiper/css";
import "./styles.scss";

type SliderProps = {
  slides: TProduct[];
  arrowLeft: string;
  arrowRight: string;
};

const Slider = ({ slides, arrowRight, arrowLeft }: SliderProps) => {
  const slidesPerView: number = 4;
  return (
    <div className={"slider"}>
      {slides.length > slidesPerView && (
        <SliderNavButtons arrowLeft={arrowLeft} arrowRight={arrowRight} />
      )}
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation]}
        spaceBetween={30}
        loop={true}
        slidesPerView={slidesPerView}
      >
        {slides.map((slide: TProduct) => (
          <SwiperSlide key={slide.id}>
            <ProductItem {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
