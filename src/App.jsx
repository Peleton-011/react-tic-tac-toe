import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import fs from "fs";
import "@picocss/pico";

import Header from "./components/Header";

function App() {
    const tabObjArray = [
        {
            label: "Home",
            path: "home",
        }
    ];
    return (
        <Router className="container">
            <Header tabObjArray={tabObjArray} />
            <div className="App">Hello world from Peleton</div>
            <Routes>

            </Routes>
        </Router>
    );
}

async function getPages() {
    const pages = [];
    fs.readdir("./pages", (err, files) => {
        files.forEach((file) => {
            console.log(file);
            const page = import(`./pages/${file}.jsx`);
        });
    });
}

export default App;
