import React from "react";
import { useState } from "react";

import { Game as GameObj } from "../components/Game/Game";

import Board from "../components/Game/Board";

const pageObj = {
    label: "Game",
    path: "game",
};

const Component = () => {
    const [Game, setGame] = useState (new GameObj({
        size: [3, 3],
        players: [
            {
                symbol: "X",
                isPlayer: true,
            },
            {
                symbol: "O",
                isPlayer: false,
            },
        ],
    }))

    // console.log("Game: " + JSON.stringify(Game, null, 2));
    return (
        <main className="container">
                <Board state={[Game, setGame]} />
        </main>
    );
};

export { Component, pageObj };
