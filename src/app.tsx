import {useState, useEffect} from "react";
import Header from "./components/header";
import axios from "axios";

const App = ({message}) => {
    let myrandom = Math.random();
    console.log({myrandom});

    let [certifications, setCertifications] = useState([]);

    useEffect(() => {
        // get data from backend API
        axios.get("http://localhost:8080/api/certifications").then((resp) => {
            console.log(resp.data.certifications);
            setCertifications(resp.data.certifications);
        });
    }, []);

    const TODOs = ["my task 1", "my task 2", "my task 3"];
    return (
        <div className="container">
            <Header heading="Certification Programmes" extra="some extra text" />
            {certifications.map((c) => {
                return <li>{c.name}</li>
            })}
        </div>
    );
};

export default App;