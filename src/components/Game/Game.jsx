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

    currPlayer;
    setCurrPlayer;

    onClicks;

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

        useEffect(this.#checkWinState, [this.game.board]);

        this.onClicks = this.#getOnClicks();
    }

    #getOnClicks () {
        const onClicks = [];

        for (let col = 0; col < this.game.size[0]; col++) {
            onClicks.push([]);
            for (let row = 0; row < this.game.size[1]; row++) {
                onClicks[col].push(
                    () => {
                        this.#setCell(
                            {
                                game: this.game,
                                setGame: this.setGame,
                                col: col,
                                row: row,
                                player: this.currPlayer
                            }
                        )
                    }
                )
                
            }
        }
    }

    #setCell({game: game, setGame: setGame, row, col, player}) {
        const newGame = game;

        const newBoard = game.board;

        newBoard[col][row] = player.symbol;

        newGame = {...game, board: newBoard};

        setGame(newGame);
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
