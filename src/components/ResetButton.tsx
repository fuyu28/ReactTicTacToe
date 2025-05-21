type ResetProps = {
  onClick: () => void;
  disabled?: boolean;
};

const ResetButton = ({ onClick, disabled }: ResetProps) => {
  return (
    <button
      className="mt-4 py-2 px-4 bg-red-500 hover: bg-red-600 text-white font-semibold rounded-lg shadow transition"
      onClick={onClick}
      disabled={disabled}
    >
      Reset Game
    </button>
  );
};

export default ResetButton;
