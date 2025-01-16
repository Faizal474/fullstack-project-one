import { createRoot } from "react-dom/client";
import App from "./app";
import axios from "axios";
import {API_SERVER_URL} from "./public-config";

const root = createRoot(document.getElementById("app"));

root.render(<App />);