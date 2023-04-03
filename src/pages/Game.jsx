import React from 'react'

import Board from "../components/Game/Board";

const pageObj = {
    label: "Game",
    path: "game",
};

const Component = () => {
  return (
    <>
    <div>Game</div>
    <Board />
    </>

  )
}

export {Component, pageObj}