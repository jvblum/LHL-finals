export default function Join(props) {
  const {setJoinedGame, roomChangeListener, requestJoinRoom, roomListener, startNewGame} = props;
  return (
      <div className="bgimg w3-display-container w3-text-white">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"/>  
        <div className="w3-display-topleft w3-container w3-xxlarge">
          <p>
            <input className="w3-input w3-padding-12 w3-border" type="text-field" value={roomListener} placeholder="Room number" onChange={(e) => {
              roomChangeListener(e.target.value);
            }} />
          </p>
          <p>
            <button className="w3-button w3-black" onClick={() => {
              requestJoinRoom();
              startNewGame();
              setJoinedGame(true);
              // setGameType("new");
            }}>Join Game</button>
          </p>
        </div>
      </div>
  );
}
