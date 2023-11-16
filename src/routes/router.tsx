import { createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";
import Home from "../pages/Home/home";
import Catalog from "../pages/Catalog/Catalog";
import PersonalCard from "../pages/PersonalCard/PersonalCard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
    path: Paths.personalProduct,
    element: <PersonalCard />,
  },
]);
