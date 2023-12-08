import { createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";
import Home from "../pages/Home/home";
import Catalog from "../pages/Catalog/Catalog";
import PersonalCard from "../pages/PersonalCard/PersonalCard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BasketPage from "../pages/BasketPage/BasketPage";

export const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: Paths.catalog,
    element: <Catalog />,
  },
  {
    path: `${Paths.catalog}/:id`,
    element: <PersonalCard />,
  },
  {
    path: Paths.basket,
    element: <BasketPage />,
  },
]);
