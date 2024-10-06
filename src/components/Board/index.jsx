import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [value, setValue] = useState(Array(9).fill(null));


  const handleClick = (values) =>{
    const nextValue = [...value]
    nextValue[values] = 'x'
    setValue(nextValue)
  }




  return (
    <>
      <div className="flex">
        <Square value={value[0]}  onSquareClick={()=>handleClick(0)} />
        <Square value={value[1]} onSquareClick={()=>handleClick(1)} />
        <Square value={value[2]} onSquareClick={()=>handleClick(2)} />
      </div>

      <div className="flex">
        <Square value={value[3]} onSquareClick={()=>handleClick(3)} />
        <Square value={value[4]} onSquareClick={()=>handleClick(4)} />
        <Square value={value[5]} onSquareClick={()=>handleClick(5)} />
      </div>

      <div className="flex">
        <Square value={value[6]} onSquareClick={()=>handleClick(6)} />
        <Square value={value[7]} onSquareClick={()=>handleClick(7)} />
        <Square value={value[8]} onSquareClick={()=>handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
