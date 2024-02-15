
const ShowRules = () => {
  return (
    <div className="bg-[#FBF1F1] p-5 rounded-md mt-5">
      <h1 className="font-bold text-2xl">How to play dice game</h1>
      <ul className="text-base font-medium leading-7 mt-4 ">
        <li>1. Select any number</li>
        <li>2. Click on dice image</li>
        <li>
          3. after click on dice if selected number is equal to dice number you
          will get same point as dice
        </li>
        <li>4. if you get wrong guess then 2 point will be dedcuted </li>
      </ul>
    </div>
  );
};

export default ShowRules;
