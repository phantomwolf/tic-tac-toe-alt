"use client"

import { useCallback, useMemo, useState } from "react"
import Board from "./Board"
import "../styles/styles.css"

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (const line of lines) {
    let score = 0
    for (const i of line) {
      if (squares[i] === null) {
        // No winner on this line
        break
      }
      if (squares[i] === "X") {
        score++
      } else if (squares[i] === "O") {
        score--
      }
    }
    if (score === 3 || score === -3) {
      return squares[line[0]]
    }
  }
  return null
}

export interface PlayerMove {
  mark: string
  index: number
}

export default function Game() {
  const [moves, setMoves] = useState<PlayerMove[]>([])
  const squares = useMemo(() => {
    const arr = Array(9).fill(null)
    moves.forEach(({ mark, index }) => {
      arr[index] = mark
    })
    return arr
  }, [moves])
  const winner = calculateWinner(squares)

  const handleSquareClick = useCallback(
    (index: number) => {
      if (squares[index] || winner) {
        // Do nothing if square is already set
        return
      }
      const newMark = moves.length % 2 == 0 ? "X" : "O"
      const newMove = { mark: newMark, index: index }
      setMoves([...moves, newMove])
    },
    [squares, winner, moves],
  )

  const handleRollback = useCallback(
    (index: number) => {
      const newMoves = moves.slice(0, index)
      setMoves(newMoves)
    },
    [moves],
  )
  const history = moves.map((move, index) => {
    let desc
    if (index > 0) {
      desc = "Go to move #" + index
    } else {
      desc = "Go to game start"
    }
    return (
      <li key={index}>
        <button onClick={() => handleRollback(index)}>{desc}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={squares}
          winner={winner}
          handleSquareClick={handleSquareClick}
        ></Board>
      </div>
      <div className="game-info">
        <ol>{history}</ol>
      </div>
    </div>
  )
}
