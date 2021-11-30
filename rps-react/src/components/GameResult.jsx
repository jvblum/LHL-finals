export default function GameResult(props) {
  const { result, setResult, newGame, yourScore, theirScore } = props;

  const closeGameResult = () => {
    setResult(null);
    newGame();
  }

  const resultColors = {
    you: "#d8f3fd",
    them: "rgb(255, 228, 233)",
    none: ""
  };

  return (
    <div className="GameResult">
      <button
        className="next"
        onClick={closeGameResult}
        style={{backgroundColor: resultColors[result.winner]}}
      >
        <p className="Pick">
          {`${yourScore} - ${theirScore}`}
        </p>
        <p className="result">
          {result.message}
        </p>
      </button>
    </div>
  );
}