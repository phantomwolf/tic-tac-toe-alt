import Square from "./Sqaure"
import "../styles/styles.css"

export interface BoardProps {
  squares: string[]
  winner: string | null
  handleSquareClick: (index: number) => void
}

export default function Board({
  squares,
  winner,
  handleSquareClick,
}: BoardProps) {
  // Paint board
  const boardRows = []
  for (let row = 0; row < 3; row++) {
    const rowCells = []
    for (let col = 0; col < 3; col++) {
      const index = row * 3 + col
      rowCells.push(
        <Square
          key={index}
          value={squares[index]}
          onClick={() => handleSquareClick(index)}
        />,
      )
    }
    boardRows.push(
      <div key={row} className="board-row">
        {rowCells}
      </div>,
    )
  }
  return (
    <>
      <div className="status">Winner: {winner}</div>
      {boardRows}
    </>
  )
}
