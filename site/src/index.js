import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./apiSlice";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div>
          <h4>Eddy Abbound..</h4>
        </div>
      }
    >
      <ApiProvider api={apiSlice}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApiProvider>
    </Suspense>
  </React.StrictMode>
);
