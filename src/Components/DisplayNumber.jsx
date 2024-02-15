const DisplayNumber = ({ setSelectedNumber, selectedNumber }) => {
  const numberArray = [1, 2, 3, 4, 5, 6];
  return (
    <div className="max-sm:mx-auto">
      <div className="flex gap-4 sm:w-full flex-wrap">
        {numberArray.map((number) => (
          <div
            key={number}
            className={`h-12 w-12 grid place-items-center cursor-pointer font-semibold border border-black ${
              number === selectedNumber && "bg-black text-white"
            }`}
            onClick={() => setSelectedNumber(number)}
          >
            {number}
          </div>
        ))}
      </div>
      <p className="text-right mt-2 font-bold max-sm:text-center">
        Select Number
      </p>
    </div>
  );
};

export default DisplayNumber;
