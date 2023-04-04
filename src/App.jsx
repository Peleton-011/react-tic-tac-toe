import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@picocss/pico";
import "./App.css";

import Header from "./components/Header";

function App() {
    const { tabObjArray, routes } = getTabsAndRoutes();
    return (
        <Router >
            <Header tabObjArray={tabObjArray} />
            <Routes>{routes}</Routes>
        </Router>
    );
}

function getTabsAndRoutes() {
    const tabObjArray = [];
    const routes = getPages().map(({ Component, pageObj }) => {
        tabObjArray.push(pageObj);
        return <Route key={pageObj.path} path={pageObj.path} element={<Component />} />;
    });
    return { tabObjArray, routes };
}

function getPages() {
    const pages = [];

    const files = import.meta.globEager('./pages/*.jsx');

    for (const key in files) {
        if (Object.hasOwnProperty.call(files, key)) {
            const file = files[key];
            pages.push(file);
        }
    }
    return pages;
}

export default App;
