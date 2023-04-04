import React from "react";

import { Column } from "./Column";

const Board = () => {
    const height = 3;
    const width = 3;
    return (
        <div
            className="grid board"
        >
            {getColumns(height, width)}
        </div>
    );
};

function getColumns(height, width) {
    const res = [];
    for (let i = 0; i < width; i++) {
        res.push(<Column key={i} id={i} height={height} />);
    }
    return res;
}

export default Board;
