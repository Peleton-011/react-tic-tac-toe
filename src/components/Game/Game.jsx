import React from "react";
import { useState, useEffect } from "react";

const defaultInput = {
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
};

class Game {
    game;
    setGame;

    //size is an array [width, height]
    //players is an array of two player objects
    //a player object is such that {symbol: "X", isPlayer: true}
    constructor({ size, players }) {
        [this.game, this.setGame] = useState({
            size: size,
            board: this.#newBoard(size),
            players: players,
        });

        useEffect(this.#checkWinState, [this.game.board]);
    }

    #checkWinState() {
        return;
    }

    #newBoard(size) {
        const board = [];
        for (let col = 0; col < this.size[0]; col++) {
            board.push([]);
            for (let row = 0; row < this.size[1]; row++) {
                board[col].push([]);
            }
        }
        return board;
    }
}
