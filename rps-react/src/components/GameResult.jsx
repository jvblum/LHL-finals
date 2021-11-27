export default function GameResult(props) {
  const { result, setResult, newGame } = props;

  const closeGameResult = () => {
    setResult(null);
    newGame();
  }
  
  return (
    <div className="GameResult">
      <button className="next" onClick={closeGameResult}>
        <p>
          {result.message}
        </p>
      </button>
    </div>
  );
}