import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "./services/api.types";
import { TCategories, TColor, TSortingFilter } from "../assets/types";
import { getDiscount } from "../utils/helpers";
import { categories, colorList, sortingFilters } from "../assets/constants";

const favoriteProductsFromLocalStore = (() => {
  const item = localStorage.getItem("favoriteProducts");
  if (item) {
    return JSON.parse(item);
  } else {
    return [];
  }
})();

interface ProductState {
  products: TProduct[];
  sortedProducts: TProduct[];
  catalogProducts: TProduct[];
  similarProducts: TProduct[];
  favoritesProducts: TProduct[];
  currentColorList: TColor[];
  categories: TCategories[];
  sortingFilters: TSortingFilter[];
  colorList: TColor[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  sortedProducts: [],
  catalogProducts: [],
  similarProducts: [],
  favoritesProducts: favoriteProductsFromLocalStore,
  currentColorList: [],
  sortingFilters,
  categories,
  colorList,
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
    filterProductsByCategory: (state, action: PayloadAction<string>) => {
      const data: TProduct[] = state.products.filter((value: TProduct) =>
        action.payload === "all" ? value : value.category === action.payload,
      );
      state.catalogProducts = data;

      const newCategories: TCategories[] = state.categories.map(
        (el: TCategories) => {
          if (el.filter === action.payload) {
            return { ...el, isSelected: true };
          } else {
            return { ...el, isSelected: false };
          }
        },
      );
      state.categories = newCategories;
    },
    filterProductsBySorting: (state, action: PayloadAction<string>) => {
      let data: TProduct[] = [];
      switch (action.payload) {
        case "isNew":
          data = state.products.filter((value: TProduct) => value.isNew);
          break;
        case "discount":
          data = state.products.filter((value: TProduct) => value.discount);
          break;
        case "ascending":
          data = state.products.sort(
            (a, b) =>
              getDiscount(b.price, b.discount) -
              getDiscount(a.price, a.discount),
          );
          break;
        case "descending":
          data = state.products.sort(
            (a, b) =>
              getDiscount(a.price, a.discount) -
              getDiscount(b.price, b.discount),
          );
          break;
        default:
          state.sortedProducts = [];
          break;
      }
      state.catalogProducts = data;
      const newSortingFilters: TSortingFilter[] = state.sortingFilters.map(
        (el: TSortingFilter) => {
          if (el.filter === action.payload) {
            return { ...el, isSelected: true };
          } else {
            return { ...el, isSelected: false };
          }
        },
      );
      state.sortingFilters = newSortingFilters;
    },
    filterProductsBySimilar: (state, action: PayloadAction<TProduct>) => {
      const data: TProduct[] = state.products.filter(
        (value: TProduct) =>
          value.category === action.payload.category &&
          value.name !== action.payload.name,
      );
      state.similarProducts = data;
    },
    getCurrentColorList: (state, action: PayloadAction<string[]>) => {
      const resColors: TColor[] = [];
      action.payload.forEach((value: string) => {
        const color = state.colorList.find((el) => el.engName === value);
        if (color) {
          resColors.push(color);
        }
      });
      state.currentColorList = resColors;
    },
    changeCurrentColor: (state, action: PayloadAction<string>) => {
      const newCurrentColorList: TColor[] = state.currentColorList.map((el) => {
        if (el.engName === action.payload) {
          return { ...el, isSelected: true };
        } else {
          return { ...el, isSelected: false };
        }
      });

      state.currentColorList = newCurrentColorList;
    },
    addToFavorites: (state, action: PayloadAction<string>) => {
      const favoriteProduct = state.products.find(
        (el) => el.id === action.payload,
      );
      if (
        favoriteProduct &&
        !state.favoritesProducts.some((el) => el.id === favoriteProduct.id)
      ) {
        state.favoritesProducts.push(favoriteProduct);
        localStorage.setItem(
          "favoriteProducts",
          JSON.stringify(state.favoritesProducts),
        );
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      const newFavoriteProducts = state.favoritesProducts.filter(
        (el) => el.id !== action.payload,
      );
      state.favoritesProducts = newFavoriteProducts;
      localStorage.setItem(
        "favoriteProducts",
        JSON.stringify(state.favoritesProducts),
      );
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
      state.catalogProducts = action.payload;
    });
  },
});

export const {
  filterProductsByCategory,
  filterProductsBySorting,
  getCurrentColorList,
  changeCurrentColor,
  filterProductsBySimilar,
  addToFavorites,
  removeFromFavorites,
} = productsSlice.actions;

export default productsSlice.reducer;
