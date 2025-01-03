import { createRoot } from "react-dom/client";

const App = () => {
    let myrandom = Math.random();
    console.log(myrandom);
    const TODOs = ["my task 1", "my task 2", "my task 3", "one more"];
    
    return (
        <div>
            <h1>Hello From React </h1>
            <h2>With JSX </h2>
            { myrandom > 0.5 && <h2> {myrandom} this is a conditional render </h2>}
            {
                TODOs.map((element) => {
                    return <li>{element}</li>
                })
            }
            
        </div>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);