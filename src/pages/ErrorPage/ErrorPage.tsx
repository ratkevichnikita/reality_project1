import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { FC } from "react";

const ErrorPage: FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={"error-page"}>
      <h2 className={"error-page__title"}>Ууупс!</h2>
      <p className={"error-page__text"}>Такой страницы у нас пока нет.</p>
      <p className={"error-page__num"}>404</p>
      <button onClick={goBack} className={"error-page__link"}>
        Вернуться
      </button>
    </div>
  );
};

export default ErrorPage;
