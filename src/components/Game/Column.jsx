import React from "react";
import { useContext } from "react";

// import {GameContext}

import { Cell } from "./Cell";

const Column = ({ height, col, state }) => {
    const [Game, setGame] = state;

    return <div className="col">{getCells()}</div>;

    function getCells() {
        const cells = [];
        for (let row = 0; row < height; row++) {
            cells.push(
                <Cell
                    key={`${col},${row}`}
                    onClick={() => {
                        if (!Game.currPlayer.isPlayer) {
                            return;
                        }
                        Game.setCell({
                            game: Game,
                            setGame: setGame,
                            col: col,
                            row: row,
                            player: Game.currPlayer,
                        });
                    }}
                />
            );
        }
        return cells;
    }
};

export { Column };
