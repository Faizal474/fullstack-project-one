import {useState, useEffect} from "react";
import CertificationPreview from "./components/certification-preview";
import Header from "./components/header";
import CertificationList from "./components/certification-list";
import axios from "axios";
import {API_SERVER_URL} from "./public-config";


const App = () => {

    let [initialData, setInitialData] = useState({certifications: []});

    let [counter, setCounter] = useState(0);

    useEffect(() => {
        // let id = Math.random();
        // const interval = setInterval(() => {
        //     console.log(`Counter ${id} triggered`);
        // }, 2000);

        // return (() => {
        //     clearInterval(interval);
        // })
                
        // fetch data from backend
        axios.get(`${API_SERVER_URL}/certifications`).then((resp) => {
            setInitialData(resp.data);
        });
    }, []);

    let myrandom = Math.random();
    let TODOs = ["my task 1", "my task 2", "my task 3"];
    return (
        <div className="container">
            <Header message="Certification Programmes" />
            {/* <button onClick={() => {
                setCounter(counter + 1)
            }}>{counter}</button> */}
            <CertificationList initialData={initialData}/>
        </div>
    );
};

export default App;