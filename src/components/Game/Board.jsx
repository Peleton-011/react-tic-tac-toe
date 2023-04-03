import React from "react";

import { Column } from "./Column";

const Board = () => {
    const height = 3;
    const width = 3;
    return (
        <div
            className="grid"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${width}, 1fr)`,
            }}
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
