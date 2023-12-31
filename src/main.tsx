import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./scss/index.scss";
import { store } from "./redux/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
