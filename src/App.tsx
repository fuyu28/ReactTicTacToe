import { useState } from "react";
import type { squareType } from "./types/squares";
import Board from "./components/Board";
import "./tailwind.css";
import GameInfo from "./components/GameInfo";

function App() {
  const initialSquares = Array<squareType | null>(9).fill(null);
  const [history, setHistory] = useState<(squareType | null)[][]>([
    initialSquares,
  ]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: (squareType | null)[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  const handleRest = () => {
    setHistory([initialSquares]);
    setCurrentMove(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50 p-6">
      <div className="game flex flex-col md:flex-row items-start gap-8">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <GameInfo
          history={history}
          currentMove={currentMove}
          onJumpTo={jumpTo}
          onReset={handleRest}
        />
      </div>
    </div>
  );
}

export default App;
