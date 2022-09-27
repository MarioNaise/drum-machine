import './App.css'
import {data} from "./data.js"

export default function App() {
  return (
      <div id="drum-machine">
        <div id="pads">
          {data.map((pad)=>{
        return <DrumPad name={pad.name} text={pad.text} key={pad.text} audio={pad.audio}/>;
          })}
        </div>
        <div id="display" className='flex'>change text</div>
      </div>
  )
}


function DrumPad(props) {
  return (<div id={props.name} className="drum-pad flex"
    onClick={() => playSound(props.text, props.name)}>
    <audio id={props.text} src={props.audio} className="clip"></audio>
    {props.text}
  </div>);
}

function playSound(id){
  const sound = document.getElementById(id);
  sound.play();
}