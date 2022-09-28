import React from 'react'
import './App.css'
import {data} from "./data.js"

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPad: {
        text: ""
      }
    }
  this.playSound = this.playSound.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", (e)=>{
      const newPad = data.find(pad=>pad.text == e.key.toUpperCase());
      this.setState({
        currentPad: newPad
      });
      this.playSound(this.state.currentPad.text)
    })
  }
  

  playSound(id){
    const sound = document.getElementById(id);
    sound.play();
    sound.currentTime = 0;
  }
  
  render (){
    return(
      <div id="drum-machine">
        <div id="pads">
          {data.map((pad)=>{
        return <DrumPad playSound={this.playSound} name={pad.name} text={pad.text} key={pad.text} audio={pad.audio}/>;
          })}
        </div>
        <div id="display" className='flex'>{this.state.currentPad.text}</div>
      </div>
    );
  }
    
}


function DrumPad(props) {
  return (<div id={props.name} className="drum-pad flex"
    onClick={(e) => {console.log(e.target)}}>
    <audio id={props.text} src={props.audio} className="clip"></audio>
    {props.text}
  </div>);
}