export default function GameResult(props) {
  const { result, setResult, newGame, yourScore, theirScore } = props;

  const closeGameResult = () => {
    setResult(null);
    newGame();
  }

  return (
    <div className="GameResult">
      <button className="next" onClick={closeGameResult}>
        <p className="Pick">
          {`${yourScore} - ${theirScore}`}
        </p>
        <p>
          {result.message}
        </p>
      </button>
    </div>
  );
}