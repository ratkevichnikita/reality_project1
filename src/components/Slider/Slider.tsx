import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { TProduct } from "../../redux/services/api.types";
import ProductItem from "../ProductItem/ProductItem";
import SliderNavButtons from "./SliderNavButtons/SliderNavButtons";
import "swiper/css";
import "./styles.scss";

type TSliderProps = {
  slides: TProduct[];
};

const Slider = ({ slides }: TSliderProps) => {
  return (
    <div className={"slider"}>
      <SliderNavButtons />
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={4}
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
