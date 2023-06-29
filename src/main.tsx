/** React */
import React from "react";
import ReactDOM from "react-dom/client";

/** React router */
import { RouterProvider } from "react-router-dom";

/** Router */
import router from "./router/main.router";

/** Styles */
import "./assets/styles/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
