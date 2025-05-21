import type { squareType } from "../types/squares";
import ResetButton from "./ResetButton";

type GameInfoProps = {
  history: (squareType | null)[][];
  currentMove: number;
  onJumpTo: (move: number) => void;
  onReset: () => void;
};

const GameInfo = ({
  history,
  currentMove,
  onJumpTo,
  onReset,
}: GameInfoProps) => {
  return (
    <div className="game-info bg-white p-4 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-2 text-gray-700">Move History</h2>
      <ol className="list-decimal list-inside space-y-1">
        {history.map((_, move) => {
          const desc = move > 0 ? `Go to move #${move}` : "Go to game start";
          return (
            <li key={move}>
              <button
                className="
                      text-blue-600 hover:underline 
                      focus:outline-none
                    "
                onClick={() => onJumpTo(move)}
              >
                {desc}
              </button>
            </li>
          );
        })}
      </ol>
      <ResetButton onClick={onReset} disabled={currentMove === 0} />
    </div>
  );
};

export default GameInfo;
