import { useState } from "react";
import DisplayNumber from "./DisplayNumber";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import Footer from "./Footer";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState("");
  const [currentDice, setCurrentDice] = useState("1");
  const [totalScore, setTotalScore] = useState(0);
  const [errorMessage, setErrorMessage] = useState(false);

  return (
    <>
      <main className="p-5 container select-none lg:mx-auto">
        <div className="w-full h-5 flex justify-end max-sm:justify-center max-sm:mb-2">
          {errorMessage && (
            <p className="text-red-500 font-semibold text-base ">
              You have not selected any number
            </p>
          )}
        </div>
        <div className="container flex items-center justify-between flex-wrap max-sm:flex-wrap">
          <TotalScore totalScore={totalScore} />
          <DisplayNumber
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            setErrorMessage={setErrorMessage}
          />
        </div>
        <RoleDice
          currentDice={currentDice}
          setCurrentDice={setCurrentDice}
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          setErrorMessage={setErrorMessage}
        />
      </main>
      <Footer />
    </>
  );
};

export default GamePlay;
