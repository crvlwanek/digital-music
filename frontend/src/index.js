import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Navbar from "./components/Navbar"

ReactDOM.render(
    <div>
        <Navbar />
        <App />
    </div>,
    document.getElementById("app")
);
