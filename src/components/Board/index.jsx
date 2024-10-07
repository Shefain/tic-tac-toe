import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [value, setValue] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (e) => {
    if (value[e]) {
      return;
    }
    const nextValue = [...value];
    if (isX) {
      nextValue[e] = "x";
    } else {
      nextValue[e] = "o";
    }

    setValue(nextValue);
    setIsX(!isX);
  };
  const resetState = () => {
    setValue(Array(9).fill(null));
    setIsX(true);
  };

  return (
    <div className="flex flex-col mx-auto items-center h-">
      <div className="flex">
        <Square value={value[0]} onSquareClick={() => handleClick(0)} />
        <Square value={value[1]} onSquareClick={() => handleClick(1)} />
        <Square value={value[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="flex">
        <Square value={value[3]} onSquareClick={() => handleClick(3)} />
        <Square value={value[4]} onSquareClick={() => handleClick(4)} />
        <Square value={value[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="flex">
        <Square value={value[6]} onSquareClick={() => handleClick(6)} />
        <Square value={value[7]} onSquareClick={() => handleClick(7)} />
        <Square value={value[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div>
        <button className="w-[100px] bg-pink-400 h-8 mt-8 rounded px-4 " onClick={resetState}> Reset </button>
      </div>
    </div>
  );
};

export default Board;
