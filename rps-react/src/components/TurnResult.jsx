export default function TurnResult(props) {
  const { result, setResult } = props;
  const closeWindow = () => {
    setResult(null);
  };

  const resultColors = {
    you: "#d8f3fd",
    them: "rgb(255, 228, 233)",
    none: ""
  };

  return (
    <div className="TurnResult">
      <button
        className="next"
        onClick={closeWindow}
        style={{backgroundColor: resultColors[result.winner]}}
      >
        <p className="Pick">
          <img className="Card" src={result.pickA.img} alt={result.pickA.type + result.pickA.img}/>
          <span>vs</span>
          <img className="Card" src={result.pickB.img} alt={result.pickB.type + result.pickB.img}/>
        </p>
        <div className="result">{result.message}</div>
      </button>
    </div>
  );
}
