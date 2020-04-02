//Workaround due to CodePen's file hosting limitation
const soundLocation = 'https://donnorkett.com/learning/drums/sounds/';

class DrumPad extends React.Component {
  constructor(props){
    super(props);    
    this.playKeyAudio = this.playKeyAudio.bind(this);
    this.playClickAudio = this.playClickAudio.bind(this);
    this.url = soundLocation + this.props.drumType + '.wav'; 
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.playKeyAudio);
  }
  
  playKeyAudio(e) {
    if (e.keyCode == this.props.keyName.charCodeAt()) {            
      const sound = document.getElementById(this.props.keyName);
      sound.currentTime = 0;
      sound.play();        
    }    
  }
  
  playClickAudio() {    
    const sound = document.getElementById(this.props.keyName);
    sound.currentTime = 0;
    sound.play();        
  }

  render() {    
    return (
      <div onClick={this.playClickAudio} className="drum-pad" id={this.props.drumType}>        
        <h1>{this.props.keyName}</h1>
        <audio preload src={this.url} className="clip" id={this.props.keyName}></audio>
      </div>
    );
  }
}


class App extends React.Component {
  constructor(props){
    super(props);    
      }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          <DrumPad drumType="boom" keyName="Q"/>
          <DrumPad drumType="clap" keyName="W"/>
          <DrumPad drumType="hihat" keyName="E"/>
          <DrumPad drumType="kick" keyName="A"/>
          <DrumPad drumType="openhat" keyName="S"/>
          <DrumPad drumType="ride" keyName="D"/>
          <DrumPad drumType="snare" keyName="Z"/>
          <DrumPad drumType="tink" keyName="X"/>
          <DrumPad drumType="tom" keyName="C"/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
