import { useState } from "react";
import { cities } from "../../assets/constants";
import "./styles.scss";

const Map = () => {
  const [iframeSrc, setIframeSrc] = useState(
    "https://yandex.ru/map-widget/v1/?um=constructor%3A74e929d7cf0de9b86b546e6b4d1345c8bb88f6547d31dfe80097748632492a96&amp;source=constructor",
  );

  const handleClick = (name: string) => {
    const currentSrc = cities
      .filter((city) => city.name === name)
      .flatMap((el) => el.url)[0];

    cities.forEach((city) => {
      if (city.name === name) {
        city.isSelected = true;
      } else {
        city.isSelected = false;
      }
    });

    setIframeSrc(currentSrc);
  };
  return (
    <div className={"map"}>
      <div className={"container"}>
        <ul className={"map__cities"}>
          {cities.map((city) => {
            return (
              <li
                key={city.name}
                className={
                  city.isSelected ? "map__city map__city_active" : "map__city"
                }
                onClick={() => handleClick(city.name)}
              >
                {city.name}
              </li>
            );
          })}
        </ul>
        <iframe src={iframeSrc} width="100%" height="500"></iframe>
      </div>
    </div>
  );
};

export default Map;
