import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "./services/api.types";

interface ProductState {
  products: TProduct[];
  sortedProducts: TProduct[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  sortedProducts: [],
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<TProduct[], void>(
  "products/fetchProducts",
  async function () {
    const res = await fetch(
      "https://my-json-server.typicode.com/ratkevichnikita/fake_api_reality/db/",
    );
    const data = await res.json();

    return data.products as TProduct[];
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProductsByCategory: (state, action) => {
      const res: TProduct[] = [];

      if (action.payload === "all") {
        state.sortedProducts = res;
      } else {
        state.products.forEach((value: TProduct) => {
          if (value.category === action.payload) {
            res.push(value);
          }
        });
        state.sortedProducts = res;
      }
    },
    filterProductsBySorting: (state, action) => {
      switch (action.payload) {
        case "isNew":
          state.sortedProducts.length
            ? (state.sortedProducts = state.sortedProducts.filter(
                (product) => product.isNew,
              ))
            : (state.sortedProducts = state.products.filter(
                (product) => product.isNew,
              ));
          break;

        default:
          state.sortedProducts = [];
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
  },
});

export const { filterProductsByCategory, filterProductsBySorting } =
  productsSlice.actions;

export default productsSlice.reducer;
