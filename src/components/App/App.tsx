import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/home";
import "./styles.scss";
import Catalog from "../../pages/Catalog/Catalog";
import PersonalCard from "../../pages/PersonalCard/PersonalCard";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<PersonalCard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
