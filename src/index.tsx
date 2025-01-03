import { createRoot } from "react-dom/client";

const App = () => {
    return (
        <div>Hello from React</div>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);