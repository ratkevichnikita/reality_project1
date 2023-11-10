import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const realityApi = createApi({
  reducerPath: "realityApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://my-json-server.typicode.com/ratkevichnikita/fake_api_reality/db/",
  }),
  endpoints: (build) => ({
    getData: build.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDataQuery } = realityApi;
