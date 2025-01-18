import {useState, useEffect} from "react";
import Header from "./header";
import axios from "axios";
import CertificationList from "./certifications-list";
import {API_URL} from "./public-config";

const App = ({initialData}) => {

    const [certifications, setCertifications] = useState(initialData)

    useEffect(() => {   
        axios.get(`${API_URL}/certifications`).then((resp) => {
            setCertifications(resp.data.certifications);
        })
    }, []);

    return (
        <div className="container">
            <Header message="Certification Programmes"/>
            <CertificationList certifications={certifications} />
        </div>
    );
}

export default App;
