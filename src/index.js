import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { AppProvider } from "./context";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // eslint-disable-next-line react/jsx-no-undef
  <React.StrictMode>
    <AppProvider>
    <RouterProvider router={routes} />
    </AppProvider>
  </React.StrictMode>
);
