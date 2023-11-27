import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TApiData, TCategory, TProduct, TPromo } from "./api.types";

const baseGetQuery = () => ({
  url: "/",
  method: "GET",
});

export const realityApi = createApi({
  reducerPath: "realityApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://my-json-server.typicode.com/ratkevichnikita/fake_api_reality/db/",
  }),
  endpoints: (build) => ({
    getData: build.query<TApiData, void>({
      query: baseGetQuery,
    }),
    getProducts: build.query<TProduct[], void>({
      query: baseGetQuery,
      transformResponse: (response: TApiData) => response.products,
    }),
    getCategories: build.query<TCategory[], void>({
      query: baseGetQuery,
      transformResponse: (response: TApiData) => response.categories,
    }),
    getPromo: build.query<TPromo, void>({
      query: baseGetQuery,
      transformResponse: (response: TApiData) => response.promo,
    }),
  }),
});

export const {
  useGetDataQuery,
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetPromoQuery,
} = realityApi;
