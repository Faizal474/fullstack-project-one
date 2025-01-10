import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

const root = createRoot(document.getElementById("app"));
root.render(<App message="Hello From React as Parameter" />);
