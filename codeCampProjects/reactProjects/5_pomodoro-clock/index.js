class TimerControl extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div id={this.props.componentID}>
        <h3>{this.props.componentTitle}</h3>
        <div className="controls">
          <button>
            <i class="fa fa-arrow-down"></i> 
          </button>
            
          {this.props.length} 
          
          <button>
            <i class="fa fa-arrow-up"></i>
          </button>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         timer: 1500,
         breakLength: 1,
         sessionLength: 2,
    };    
  }
  
  render() {
    return (
      <div id="main_app">
        <h1> Pomodoro Clock </h1>
        <div id="controls">
          <TimerControl 
            length={this.state.breakLength}
            componentID='break-label'
            componentTitle='Break Length'
            />
          <TimerControl 
            length={this.state.sessionLength}
            componentID='session-label'
            componentTitle='Session Length'
            />
        </div>
        <h2> Session </h2>
        <h2> {this.state.timer} </h2>
        <h4> <i class="fa fa-play"></i>  <i class="fa fa-pause"></i> <i class="fa fa-stop"></i></h4>
      </div>
    );
  }
}
  
  
ReactDOM.render(<App />,document.getElementById('root'));  