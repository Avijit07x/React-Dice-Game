const TotalScore = ({ totalScore }) => {
  return (
    <div className="text-center max-sm:mx-auto max-sm:mb-3">
      <h1 className="text-[6.25rem] font-semibold leading-none">
        {totalScore}
      </h1>
      <p className="font-medium text-2xl">Total Score</p>
    </div>
  );
};

export default TotalScore;
