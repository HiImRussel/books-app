import ReactDOM from "react-dom/client";
/** Redux */
import { Provider } from "react-redux";

/** Store */
import { store } from "./store/root.store";

/** React PDF */
import { pdfjs } from "react-pdf";

/** Styles */
import "./assets/styles/main.scss";

/** Config */
import "./config";

/** Components */
import App from "./App";

/** Setup */
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <App />
    </Provider>
);
