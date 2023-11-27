import "./styles.scss";
import loader from "../../assets/images/loader.svg";

const Loader = () => {
  return (
    <div className={"loader"}>
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
