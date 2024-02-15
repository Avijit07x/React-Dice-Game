import React, { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";

const App = () => {
  const [isGameStared, setIsGameStared] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStared((prev) => !prev);
  };

  return (
    <>{isGameStared ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
};

export default App;
