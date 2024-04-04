import { useState } from "react";
import ShowRules from "./ShowRules";

const RoleDice = ({
	currentDice,
	setCurrentDice,
	totalScore,
	setTotalScore,
	selectedNumber,
	setSelectedNumber,
	setErrorMessage,
}) => {
	const [isClicked, setIsClicked] = useState(false);
	const [showRules, setShowRules] = useState(false);

	const getRandomArbitrary = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	const roleDiceImage = () => {
		if (selectedNumber === "") {
			setErrorMessage(true);
		} else {
			setErrorMessage(false);
			setIsClicked((prev) => !prev);
			setTimeout(() => {
				const diceNumber = getRandomArbitrary(1, 7);
				setCurrentDice((prev) => diceNumber);
				if (selectedNumber === diceNumber) {
					setTotalScore(totalScore + diceNumber);
				} else {
					setTotalScore(totalScore - 2);
				}
				setIsClicked((prev) => !prev);
				setSelectedNumber("");
			}, 1000);
		}
	};

	return (
		<div className="flex justify-center items-center flex-col mt-5">
			<div>
				<img
					className={`cursor-pointer ${isClicked && "animate-spin"}`}
					onClick={roleDiceImage}
					src={`/dice_${currentDice}.png`}
					alt="dice_img"
					loading="eager"
				/>
			</div>
			<p className="mt-10 font-semibold text-lg">Click on Dice to roll</p>
			<div
				onClick={() => setTotalScore(0)}
				className="border border-black cursor-pointer rounded-md py-2 px-7 mt-5 hover:text-white hover:bg-black hover:transition-all transition-all"
			>
				Reset Score
			</div>
			<div
				onClick={() => setShowRules((prev) => !prev)}
				className="border border-black cursor-pointer rounded-md py-2 px-7 mt-5 bg-black text-white hover:bg-white hover:text-black   hover:transition-all transition-all"
			>
				{showRules ? "Hide Rules" : "Show Rules"}
			</div>
			{showRules && <ShowRules />}
		</div>
	);
};

export default RoleDice;
