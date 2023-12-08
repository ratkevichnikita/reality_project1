import { useGetCategoriesQuery } from "../../redux/services/realityApi";

import { TCategory } from "../../redux/services/api.types";

import Category from "./Category/Category";
import Loader from "../Loader/Loader";

import "./styles.scss";

export default function Categories() {
  const { data, isLoading } = useGetCategoriesQuery();

  return (
    <section className="categories">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <ul className="categories__list">
            {data?.map(
              (item: TCategory) =>
                item.count && (
                  <Category
                    key={item.name}
                    image={item.image}
                    label={item.label}
                  />
                ),
            )}
          </ul>
        </div>
      )}
    </section>
  );
}
