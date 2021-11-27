import Game from '../Game';
import { useState } from "react";

export default function Landing() {

  const [gameMode, setGameMode] = useState(null)
 
  const renderJoinGame = () => {
    setGameMode("join")
  }

  const renderNewGame = () => {
    setGameMode("new")
  }

  const renderSoloGame = () => {
    setGameMode("solo")
  }


  return (
    gameMode ? <Game gameType={gameMode}/> : (
      <div className="landing">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"/>
        <div className="bgimg w3-display-container w3-text-white">  
          <div className="w3-display-topleft w3-container w3-xlarge">
            <p><button onClick={()=> renderJoinGame()} className="w3-button w3-black">Join Game</button></p>
            <p><button onClick={()=> renderNewGame()} className="w3-button w3-black">New Game</button></p>
            <p><button onClick={()=> renderSoloGame()} className="w3-button w3-black">Solo Game</button></p>
          <p><button onClick={()=> document.getElementById('rules').style.display='block'} className="w3-button w3-black">Rules</button></p>
          </div>
          <div className="w3-display-bottomleft w3-container">
            <p className="w3-large">Johannes, Hamed, Volkan</p>
          </div>
        </div>
        {/* <!-- rules Modal --> */}
        <div id="rules" className="w3-modal">
          <div className="w3-modal-content w3-animate-zoom">
            <div className="w3-container w3-black w3-display-container">
              <span onClick={() => document.getElementById('rules').style.display='none'} className="w3-button w3-display-topright w3-large">x</span>
              <h1>Joinin a game</h1>
            </div>
            <div className="w3-container">
              <h5>Vestibulum vitae ullamcorper tellus, at dapibus velit. Quisque felis quam, elementum eu justo eu, mollis sodales sapien. Morbi volutpat metus et convallis accumsan. Sed odio risus, bibendum nec odio id, sodales finibus lorem. Etiam vulputate vestibulum ipsum at aliquet. In vehicula velit sapien, eu lacinia mi porttitor ut. Sed eu ipsum in est ultricies consectetur. Vestibulum sodales massa in blandit efficitur. Nunc vitae sodales nibh. Nunc ac hendrerit tortor. Quisque volutpat ultrices enim. Proin vel nulla sapien.

Vestibulum sodales lorem lorem. Praesent id facilisis libero, ut pretium nibh. In id orci dolor. Cras et orci non enim scelerisque accumsan eget at orci. Nunc ac mi eget sapien venenatis vestibulum non in ligula. Curabitur rhoncus a purus ut vulputate. Nunc nec mauris consectetur, eleifend lacus ut, bibendum lacus. Proin ultrices ex pellentesque, posuere leo sed, maximus velit. In varius at tortor vitae pulvinar. Nam dui lectus, sodales et vehicula vel, bibendum non libero. Ut congue nulla a ante volutpat, ac euismod nulla eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</h5>
            </div>
            <div className="w3-container w3-black">
              <h1>Starting a Game</h1>
            </div>
            <div className="w3-container">
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis elementum auctor. Nulla vel nunc in massa luctus ullamcorper. Morbi vehicula orci quis tellus porta congue. Mauris in aliquam turpis, at gravida lacus. Integer tortor magna, maximus vel tempus eu, placerat eu sapien. Praesent fermentum diam id bibendum auctor. Vestibulum pellentesque quis libero a suscipit.
Integer et nisi id massa mattis efficitur. Proin eget accumsan tortor, eget scelerisque massa. Nullam at sem auctor nunc efficitur egestas non vel orci. Pellentesque non mauris enim. Nulla dapibus, lorem vitae hendrerit tempor, mauris leo dapibus purus, sagittis elementum tellus leo eu diam. Aenean quis nisl maximus, feugiat odio id, sagittis diam. Pellentesque sodales tortor id risus ultricies tempus. Donec tincidunt quis sem et congue. Phasellus vehicula ipsum suscipit eleifend condimentum. Etiam tincidunt rhoncus ex non venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam felis mi, vestibulum ornare elit in, aliquam consectetur tellus. Curabitur sagittis et leo eget hendrerit. Suspendisse sodales quam in turpis pharetra pulvinar.
</h5>
            
            </div>
            <div className="w3-container w3-black">
              <h1>Winning</h1>
            </div>
            <div className="w3-container">
              <h5>Nullam quis justo semper, lobortis lectus quis, vehicula enim. Integer in urna fermentum, sollicitudin magna quis, lobortis urna. Nam a rutrum orci, sit amet vestibulum est. Aliquam consectetur eros nulla, vitae molestie diam rhoncus vehicula. Mauris in volutpat metus. Nullam ut rutrum tortor. Proin lacinia cursus lobortis. Etiam risus erat, rutrum venenatis congue nec, mattis congue purus. Proin id tincidunt metus, quis laoreet libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sed lorem mattis diam ultrices ullamcorper ut mollis odio. Suspendisse potenti.</h5>
            </div>
          </div>
        </div>
      </div>
  )
  )}
