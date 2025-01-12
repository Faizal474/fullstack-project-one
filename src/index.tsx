import { createRoot } from "react-dom/client";
import App from "./app";

const root = createRoot(document.getElementById("app"));
 // fetch data from backend
root.render(<App />);