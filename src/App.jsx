import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Display from "./components/Display/Display";
import "./styles/App.css";

const App = () => {
    return (
        <div className="App">
            <Sidebar />
            <Display />
        </div>
    );
};

export default App;
