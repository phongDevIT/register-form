import { useState } from "react";
import "./App.css";
import RegisterFormik from "./components/RegisterFormik";
import RegisterHook from "./components/RegisterHook";

function App() {
    return (
        <div className="App">
            <RegisterHook></RegisterHook>
        </div>
    );
}

export default App;
