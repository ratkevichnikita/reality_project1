import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import { useGetProductsQuery } from "../../redux/services/realityApi";

import ProductItem from "../ProductItem/ProductItem";

import "./styles.scss";
import { TProduct } from "../../redux/services/api.types";
import Loader from "../Loader/Loader";

const ProductList = () => {
  const { data, isLoading } = useGetProductsQuery();

  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState<TProduct[]>([]);
  const n = 3;
  const pageCount = Math.ceil((data ? data.length : 0) / n);

  useEffect(() => {
    if (data) {
      setFilterData(
        data.filter((item, index) => {
          return index >= page * n && index < (page + 1) * n;
        }),
      );
    }
  }, [page, data]);
  return (
    <div className="product-list">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <div className="product-list__wrapper">
            {filterData?.map((product) => {
              return (
                <div key={product.id}>
                  <ProductItem {...product} />
                </div>
              );
            })}
          </div>
          <div className="pagination">
            {data && pageCount > 1 && (
              <ReactPaginate
                containerClassName={"pagination__container"}
                pageClassName={"pagination__page-item"}
                activeClassName={"pagination__btn-active"}
                onPageChange={(event) => setPage(event.selected)}
                pageCount={pageCount}
                breakLabel="..."
                previousLabel={""}
                nextLabel={""}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
