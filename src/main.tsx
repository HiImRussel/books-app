/** React */
import React from "react";
import ReactDOM from "react-dom/client";

/** React router */
import { RouterProvider } from "react-router-dom";

/** Redux */
import { Provider } from "react-redux";

/** Store */
import { store } from "./store/root.store";

/** Router */
import router from "./router/main.router";

/** React PDF */
import { pdfjs } from "react-pdf";

/** Styles */
import "./assets/styles/main.scss";

/** Config */
import "./config";

/** Setup */
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
