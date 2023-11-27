import { FC, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import { TProduct } from "../../redux/services/api.types";

import ProductItem from "../ProductItem/ProductItem";
import Loader from "../Loader/Loader";

import "./styles.scss";

export type ProductListProps = {
  productList: TProduct[] | undefined;
  isLoading: boolean;
};

const ProductList: FC<ProductListProps> = ({ productList, isLoading }) => {
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState<TProduct[]>([]);
  const productDisplayNumber: number = 11;
  const pageCount = Math.ceil(
    (productList ? productList.length : 0) / productDisplayNumber,
  );

  useEffect(() => {
    if (productList) {
      setFilterData(
        productList.filter((_, index) => {
          return (
            index >= page * productDisplayNumber &&
            index < (page + 1) * productDisplayNumber
          );
        }),
      );
    }
  }, [page, productList]);
  return (
    <div className="product-list">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="product-list__wrapper">
            {productList?.length ? (
              filterData?.map((product: TProduct) => {
                return (
                  <div key={product.id}>
                    <ProductItem
                      discount={product.discount}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      id={product.id}
                      isNew={product.isNew}
                    />
                  </div>
                );
              })
            ) : (
              <p className="product-list_empty">
                По данному запросу не было найдено товаров
              </p>
            )}
          </div>
          <div className="pagination">
            {productList && pageCount > 1 && (
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
