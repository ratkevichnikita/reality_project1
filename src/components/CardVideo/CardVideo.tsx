import { FC } from "react";
import "./styles.scss";

type CardVideoProps = {
  link: string;
  title: string;
  text: string;
};

const CardVideo: FC<CardVideoProps> = ({ link, title, text }) => {
  return (
    <div className="card-video">
      <div className="container">
        <div className="card-video__wrapper">
          <div className="card-video__description">
            <h3 className="card-video__title">{title}</h3>
            <p className="card-video__text">{text}</p>
          </div>
          <div className="card-video__video">
            <iframe
              width="100%"
              height="315"
              src={link}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVideo;
