import {useState, useEffect} from "react";

import Header from "./components/header";

const App = () => {

    let [counter, setCounter] = useState(0);

    useEffect(() => {
        // let id = Math.random();
        // const interval = setInterval(() => {
        //     console.log(`Counter ${id} triggered`);
        // }, 2000);

        // return (() => {
        //     clearInterval(interval);
        // })
    }, [counter]);

    let myrandom = Math.random();
    let TODOs = ["my task 1", "my task 2", "my task 3"];
    return (
        <div className="container">
            <Header message="Certification Programmes" />
            <button onClick={() => {
                setCounter(counter + 1)
            }}>{counter}</button>
        </div>
    )
};

export default App;