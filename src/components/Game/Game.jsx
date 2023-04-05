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
            isPlayer: true,
        },
    ],
};

class Game {
    game;
    setGame;

    currPlayer;
    setCurrPlayer;
    //size is an array [width, height]
    //players is an array of two player objects
    //a player object is such that {symbol: "X", isPlayer: true}
    constructor({ size, players }) {
        [this.game, this.setGame] = useState({
            size: size,
            board: this.#newBoard(size),
            players: players,
        });

        [this.currPlayer, this.setCurrPlayer] = useState(players[0]);

        useEffect(() => {
            this.#checkWinState();
            const nextPlayer = this.game.players.filter((player) => player !== this.currPlayer)[0];

            console.warn("From ", this.currPlayer, " to ", nextPlayer);
            this.setCurrPlayer(nextPlayer);
        }, [this.game.board]);
    }

    setCell({ row, col }) {
        const game = this.game;
        game.board[col][row] = this.currPlayer.symbol;
        this.setGame(game);
    }

    #checkWinState() {
        return;
    }

    #newBoard(size) {
        const board = [];
        for (let col = 0; col < size[0]; col++) {
            board.push([]);
            for (let row = 0; row < size[1]; row++) {
                board[col].push("none");
            }
        }
        return board;
    }
}

export { Game };
