export default function RoomStatus(props) {
  const {
    room,
    roomListener,
    hasOpponent,
    roomChangeListener,
    requestLeaveRoom,
    requestJoinRoom,
    startNewGame
  } = props;
  return (
    <div className="RoomStatus">
    {room &&
    <>
      <span>Room: {room} {!hasOpponent && "(Waiting for opponent...)"}</span>
      <button onClick={() => {
        requestLeaveRoom();
        // reset current game when joining new room
      }}>leave room</button>
    </>}
    {!room &&
    <>
      <span>Playing solo</span>
      <input type="text-field" value={roomListener} placeholder="room name here" onChange={(e) => {
        roomChangeListener(e.target.value);
      }} />
      <button onClick={() => {
        requestJoinRoom();
        startNewGame();
        // reset current game when joining new room
      }}>join room</button>
    </>}
    </div>
  )
};