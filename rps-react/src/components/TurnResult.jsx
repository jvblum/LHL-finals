export default function TurnResult(props) {
  const { result, setResult } = props;
  const closeWindow = () => {
    setResult(null);
  };

  return (
    <div className="TurnResult">
      <button className="next" onClick={closeWindow}>
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
