import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

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
      <App />
    </Suspense>
  </React.StrictMode>
);
