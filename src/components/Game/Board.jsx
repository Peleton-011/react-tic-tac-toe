import React from "react";

import { Column } from "./Column";

const Board = ({ state }) => {
    const height = 3;
    const width = 3;
    const [Game, setGame] = state;
    return <div className="grid board">{getColumns()}</div>;
    function getColumns() {
        const columns = [];
        for (let col = 0; col < width; col++) {
            columns.push(
                <Column
                    key={col}
                    height={height}
                    state={state}
                    col={col}
                />
            );
        }
        return columns;
    }
};

export default Board;
