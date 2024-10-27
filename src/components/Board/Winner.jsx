const Winner = ({ winner }) => {
  return (
    <>
      <h1 className=" font-bold text-2xl text-red-500 my-8"> {`${winner === null ? "no Winner" : "winner is " + winner}`}</h1>
    </>
  );
};

export default Winner;
