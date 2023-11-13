import Home from "../../pages/Home/home";
import Products from "../Products/Products";
import "./styles.scss";

function App() {
  return (
    <>
      <Home />
      <Products
        title="Акция"
        text="Все представленные диваны цены имеют доступные, тем не менее, наша фабрика регулярно проводит распродажи и акции. Следите за новостями на нашем сайте мебели, если хотите купить диван по выгодной цене."
      />
    </>
  );
}

export default App;
