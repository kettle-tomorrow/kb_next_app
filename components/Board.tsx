import Square from "./Square"
import React, { useState } from "react";

const Board = () => {
  type Squares = {
    value: number
    isDisplay: boolean
  };
  const default_squares: Squares[] = [...Array(25)].map(() => {
    return (
      {
        value: 1,
        isDisplay: false
      }
    )
  })
  const [squares, setSquares] = useState(default_squares);
  const changeSquare = i => {
    squares[i].isDisplay = true
    setSquares([...squares])
  }
  const renderSquare = i => {
    return (
      <Square value={squares[i].value} isDisplay={squares[i].isDisplay} onClick={() => changeSquare(i)} />
    )
  }
  
  return (
    <div>
      <div className="table">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
      </div>
      <div className="table">
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
      </div>
      <div className="table">
        {renderSquare(10)}
        {renderSquare(11)}
        {renderSquare(12)}
        {renderSquare(13)}
        {renderSquare(14)}
      </div>
      <div className="table">
        {renderSquare(15)}
        {renderSquare(16)}
        {renderSquare(17)}
        {renderSquare(18)}
        {renderSquare(19)}
      </div>
      <div className="table">
        {renderSquare(20)}
        {renderSquare(21)}
        {renderSquare(22)}
        {renderSquare(23)}
        {renderSquare(24)}
      </div>
    </div>
  )
}
export default Board