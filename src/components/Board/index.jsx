import { useState } from "react";
import Square from "./Square";
import Winner from "./Winner";

const Board = () => {
  const [value, setValue] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const winner = calculateWinner(value);
  console.log(winner);

  const handleClick = (e) => {
    if (value[e] !== null) {
      return;
    }

    const nextValue = [...value]; // copy of state array
    if (isX) {
      nextValue[e] = "x"; //  update the e nubmer of array element in nextValue array
    } else {
      nextValue[e] = "o"; //  update the e nubmer of array element in nextValue array
    }

    setValue(nextValue); // update the state array with nextValue array
    setIsX(!isX); // toggle the isX state variable
  };

  const resetState = () => {
    setValue(Array(9).fill(null));
    setIsX(true);
  };

  return (
    <div className="flex flex-col mx-auto items-center h-">
      <Winner winner={winner} />
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
        <button
          className="w-[100px] bg-pink-400 h-8 mt-8 rounded px-4 "
          onClick={resetState}
        >
          {" "}
          Reset{" "}
        </button>
      </div>
    </div>
  );
};

const calculateWinner = (value) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (value[a] && value[a] === value[b] && value[a] === value[c]) {
      return value[a];
    }
  }
  return null;
};

export default Board;
