import { calculateWinner } from "../utils/judge";
import Square from "./Square";
import type { squareType } from "../types/squares";
import "../tailwind.css";

type BoardProps = {
  xIsNext: boolean;
  squares: (squareType | null)[];
  onPlay: (nextSquares: (squareType | null)[]) => void;
};

const Board = ({ xIsNext, squares, onPlay }: BoardProps) => {
  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow-lg">
      <div className="status mb-4 text-center text-lg font-semibold text-gray-700">
        {status}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {squares.map((_, idx) => {
          return (
            <Square
              key={idx}
              value={squares[idx]}
              onSquareClick={() => handleClick(idx)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
