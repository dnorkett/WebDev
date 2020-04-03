//Workaround due to CodePen's file hosting limitation
const soundLocation = 'https://donnorkett.com/learning/drums/sounds/';

class DrumPad extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      drumStyle: {}
    }
    this.playKeyAudio = this.playKeyAudio.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.url = soundLocation + this.props.drumType + '.wav'; 
    this.activateDrumPad = this.activateDrumPad.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.playKeyAudio);
  }
  
  playKeyAudio(e) {
    if (e.keyCode == this.props.keyName.charCodeAt()) {            
      this.playAudio();      
    }    
  }
  
  playAudio() {    
    const sound = document.getElementById(this.props.keyName);
    sound.currentTime = 0;
    sound.play();   
    this.activateDrumPad();
  }
  
  activateDrumPad() {
    console.log('test')
    this.props.updateDisplay(this.props.drumType);
    this.setState(state => ({
      drumStyle: {backgroundColor: 'orange'}
    }));
    setTimeout(() => this.setState(state => ({
      drumStyle: {backgroundColor: ''}
    })), 100);
  }

  render() {    
    return (
      <div style={this.state.drumStyle} onClick={this.playAudio} className="drum-pad" id={this.props.drumType}>        
        <h1>{this.props.keyName}</h1>
        <audio preload="true" src={this.url} className="clip" id={this.props.keyName}></audio>
      </div>
    );
  }
}


class Display extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return(
    <h2 id="screen"> {this.props.displayWindow} </h2>
    )
  }
}


class App extends React.Component {
  constructor(props){
    super(props);
    this.updateDisplayWindow = this.updateDisplayWindow.bind(this);
    this.state = {
      displayWindow: ' ',
    };
  }
  
  updateDisplayWindow(drumType){
    this.setState({
      displayWindow: drumType
    });
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="drums">
          <DrumPad drumType="boom" keyName="Q" updateDisplay={this.updateDisplayWindow}/>
          <DrumPad drumType="clap" keyName="W" updateDisplay={this.updateDisplayWindow}/>
          <DrumPad drumType="hihat" keyName="E" updateDisplay={this.updateDisplayWindow}/>
          <DrumPad drumType="kick" keyName="A" updateDisplay={this.updateDisplayWindow}/>
          <DrumPad drumType="openhat" keyName="S" updateDisplay={this.updateDisplayWindow}/>
          <DrumPad drumType="ride" keyName="D" updateDisplay={this.updateDisplayWindow}/>
          <DrumPad drumType="snare" keyName="Z" updateDisplay={this.updateDisplayWindow}/>
          <DrumPad drumType="tink" keyName="X" updateDisplay={this.updateDisplayWindow}/>
          <DrumPad drumType="tom" keyName="C" updateDisplay={this.updateDisplayWindow}/>
        </div>
        <div id="display">
          <Display displayWindow={this.state.displayWindow}/>          
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
