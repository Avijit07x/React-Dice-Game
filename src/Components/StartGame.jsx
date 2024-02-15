const StartGame = ({ toggle }) => {
  return (
    <div className="container flex items-center justify-between m-auto p-10 h-screen">
      <div>
        <img src="/6d3e531201ecd44ca61f9d27ff82e0ae.png" alt="" />
      </div>
      <div>
        <h1 className="text-8xl font-bold leading-[144px]">DICE GAME</h1>
        <button
          className="bg-black py-1 w-40 text-white h-8 px-3 rounded-md float-right hover:border hover:border-black hover:bg-white hover:text-black hover:transition-all transition-all"
          onClick={toggle}
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default StartGame;
