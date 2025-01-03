import Header from "./components/header";

const App = () => {
    let myrandom = Math.random();
    console.log(myrandom);
    const TODOs = ["my task 1", "my task 2", "my task 3", "one more"];
    
    return (
        <div className="container">
            <Header message="Certification Programmes" />
        </div>
    );
};

export default App;
