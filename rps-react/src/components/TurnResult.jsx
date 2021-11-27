export default function TurnResult(props) {
  const { result, setResult } = props;
  const closeWindow = () => {
    setResult(null);
  };

  return (
    <div>
      <button className="next" onClick={closeWindow}>
        <p className="Pick">
          <img className="Card" src={result.pickA.img} />
          <span>vs</span>
          <img className="Card" src={result.pickB.img} />
          {/* <i>{result.pickA.type}</i> - <b>{result.pickB.type}</b> */}
        </p>
        <div className="result">{result.message}</div>
      </button>
    </div>
  );
}
