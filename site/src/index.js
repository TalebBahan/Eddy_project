import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./apiSlice";
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
      <App />
    </ApiProvider>
    </Suspense>
  </React.StrictMode>
);
