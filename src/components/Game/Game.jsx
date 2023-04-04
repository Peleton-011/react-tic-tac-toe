
import React from 'react';
import {useState} from "react"

class Game {

    #size;
    #players;

    game;
    setGame;
    
    //size is an array [width, height]
    constructor({size, players}) {
        
        [this.game, this.setGame] = useState(this.#newBoard(size));
        this.#players = 3; 
                
    }
    #newBoard (size) {
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