import React from "react";

import  { Cell } from "./Cell"

const Column = ({ height, id }) => {
    console.log(getCells(height))
    return <div>{getCells(height, id)}</div>;
};

function getCells(height, id) {
    const res = [];
    for (let i = 0; i < height; i++) {
        res.push(<Cell key={`${id},${i}`} />);
    }
    return res;
}

export {Column};
