import "./Categories.scss";
import Category from "./Category/Category";
import { useGetDataQuery } from "../../redux/services/realityApi";
import { TCategory } from "../../redux/services/api.types";

export default function Categories() {
  const { data } = useGetDataQuery();

  return (
    <section className="categories">
      <div className="container">
        {data && (
          <ul className="categories__list">
            {data.categories.map(
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
        )}
      </div>
    </section>
  );
}
