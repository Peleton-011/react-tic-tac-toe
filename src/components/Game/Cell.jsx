import React from "react";

const Cell = ({ onClick }) => {
    return (
        <button className="cell" onClick={onClick}>
            Cell
        </button>
    );
};

export { Cell };
