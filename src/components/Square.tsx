import type { squareType } from "../types/squares";
import "../tailwind.css";

type SquareProps = {
  value: squareType | null;
  onSquareClick: () => void;
};

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button
      className="w-16 h-16 md:w-20 md:h-20 bg-white border border-gray-300 rounded-lg shadow flex items-center justify-center text-2xl font-bold text-gray-800 hover:bg-gray-100 transition"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
