import React from "react";

import Board from "../components/Game/Board";

const pageObj = {
    label: "Game",
    path: "game",
};

const Component = () => {
    return (
        <main className="container">
            <Board />
        </main>
    );
};

export { Component, pageObj };
