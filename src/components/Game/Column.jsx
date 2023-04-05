import React from "react";
import { useContext } from "react";

// import {GameContext}

import { Cell } from "./Cell";

const Column = ({ height, col, state }) => {
    const [Game, setGame] = state;

    // console.warn(JSON.stringify(Game, null, 2));

    return <div className="col">{getCells()}</div>;

    function getCells() {
        const cells = [];
        for (let row = 0; row < height; row++) {
            cells.push(
                <Cell
                    key={`${col},${row}`}
                    onClick={() => {
                        console.log(Game);
                        if (!Game.currPlayer.isPlayer) {
                            return;
                        }
                        Game.setCell({
                            col: col,
                            row: row,
                        });
                        console.log(Game.game.board);
                    }}
                />
            );
        }
        return cells;
    }
};

export { Column };
