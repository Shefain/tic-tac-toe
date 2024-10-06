const Square = ({ value, onSquareClick }) => {
  return (
    <>
      <button
        onClick={onSquareClick}
        className=" w-12 h-12 text-lg border border-gray-400 leading-9  "
      >
        {value}
      </button>
    </>
  );
};

export default Square;
