import * as React from "react";
import { createRoot } from "react-dom/client";

const App = ({message}) => {
    let myrandom = Math.random();
    console.log({myrandom});
    const TODOs = ["my task 1", "my task 2", "my task 3"];
    return (
        <div className="container">
            <div className="header">
                Certification Programmes
            </div>
        </div>
    );
};

const root = createRoot(document.getElementById("app"));
root.render(<App message="Hello From React as Parameter" />);