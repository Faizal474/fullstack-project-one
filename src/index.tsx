import {createRoot} from "react-dom/client";
import App from "./components/app";
import axios from "axios";

const root = createRoot(document.getElementById("app"));
root.render(<App initialData={[]} />);