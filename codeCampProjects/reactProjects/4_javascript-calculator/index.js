class Formula extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="formula">
        {this.props.formula}
      </div>
    )
  }
}


class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="display">
        {this.props.output}
      </div>
    )
  }
}


class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button 
          id="clear" 
          onClick={this.props.allClear}          
          value="AC"
        >
          AC
        </button>
        <button 
          id="divide" 
          onClick={this.props.operatorClick}          
          value="/"
        >
          /
        </button>
        <button 
          id="multiply" 
          onClick={this.props.operatorClick}          
          value="*"
        >
          *
        </button>
        <button 
          id="seven" 
          onClick={this.props.numberClick}          
          value="7"
        >
          7
        </button>
        <button 
          id="eight" 
          onClick={this.props.numberClick}          
          value="8"
        >
          8
        </button>
        <button 
          id="nine" 
          onClick={this.props.numberClick}          
          value="9"
        >
          9
        </button>
        <button 
          id="subtract" 
          onClick={this.props.operatorClick}          
          value="-"
        >
          -
        </button>
        <button 
          id="four" 
          onClick={this.props.numberClick}          
          value="4"
        >
          4
        </button>
        <button 
          id="five" 
          onClick={this.props.numberClick}          
          value="5"
        >
          5
        </button>
        <button 
          id="six" 
          onClick={this.props.numberClick}          
          value="6"
        >
          6
        </button>
        <button 
          id="add" 
          onClick={this.props.operatorClick}          
          value="+"
        >
          +
        </button>
        <button 
          id="one" 
          onClick={this.props.numberClick}          
          value="1"
        >
          1
        </button>
        <button 
          id="two" 
          onClick={this.props.numberClick}          
          value="2"
        >
          2
        </button>
        <button 
          id="three" 
          onClick={this.props.numberClick}          
          value="3"
        >
          3
        </button>
        <button 
          id="equals" 
          onClick={this.props.equalsClick}          
          value="="
        >
          =
        </button>
        <button 
          id="zero" 
          onClick={this.props.numberClick}          
          value="0"
        >
          0
        </button>
        <button 
          id="decimal" 
          onClick={this.props.decimalClick}          
          value="."
        >
          .
        </button>
      </div>            
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      formulaValue: '',
      previousValue: '',            
    };
    this.allClear = this.allClear.bind(this);
    this.numberClick = this.numberClick.bind(this);
    this.operatorClick = this.operatorClick.bind(this);
    this.decimalClick = this.decimalClick.bind(this);
    this.equalsClick = this.equalsClick.bind(this);
  }

  allClear() {
    this.setState({
      displayValue: '0',
      formulaValue: ''
    })
  }

  numberClick(e) {
    if (this.state.displayValue == '0'){
      this.setState({
        displayValue: e.target.value,
        formulaValue: this.state.formulaValue + e.target.value,
        previousValue: e.target.value
      })
    } else if (this.state.previousValue == '=') {
      this.setState({
        displayValue: e.target.value,
        formulaValue: e.target.value,
        previousValue: e.target.value
      })
    } else if (this.state.displayValue == '+' || this.state.displayValue == '-' || this.state.displayValue == '*' || this.state.displayValue == '/') {
      this.setState({
        displayValue: e.target.value,
        formulaValue: this.state.formulaValue + e.target.value,
        previousValue: e.target.value
      })
    } else {    
      this.setState({
        displayValue: this.state.displayValue + e.target.value,
        formulaValue: this.state.formulaValue + e.target.value,
        previousValue: e.target.value
      })
    }
  }

  operatorClick(e) {       
    if (this.state.previousValue == '=') {
      this.setState({
        formulaValue: this.state.displayValue + e.target.value,
        displayValue: e.target.value,        
        previousValue: e.target.value
      })
    } else if (this.state.displayValue == '+' || this.state.displayValue == '-' || this.state.displayValue == '*' || this.state.displayValue == '/') {
        if (this.state.previousValue === "-" && this.state.formulaValue.slice(-2,-1) === "*") {
          this.setState({            
            displayValue: e.target.value,
            formulaValue: this.state.formulaValue.slice(0,-2) + e.target.value,
            previousValue: e.target.value
        })
        } else if (e.target.value == '-' && this.state.previousValue != '-') {
            this.setState ({
              displayValue: e.target.value,
              formulaValue: this.state.formulaValue + e.target.value,
              previousValue: e.target.value              
            })
          } else {
            this.setState({              
              displayValue: e.target.value,
              formulaValue: this.state.formulaValue.slice(0,-1) + e.target.value,
              previousValue: e.target.value
          })
        }  
    } else {
    this.setState({
      displayValue: e.target.value,
      formulaValue: this.state.formulaValue + e.target.value,
      previousValue: e.target.value
      })    
    }
  }

  decimalClick(e) {
    if (this.state.previousValue != e.target.value && !this.state.displayValue.includes(e.target.value)) {
      this.setState({
        displayValue: this.state.displayValue + e.target.value,
        formulaValue: this.state.formulaValue + e.target.value,
        previousValue: e.target.value
      });
    }    
  }

  equalsClick(e) {    
    if (this.state.previousValue != '=') {      
      let answer = eval(this.state.formulaValue);

      this.setState({
        formulaValue: this.state.formulaValue + e.target.value + answer,
        displayValue: answer,
        previousValue: e.target.value
      });
    }
  }

  
  render() {
    return (
      <div id="calculator">
        <Formula formula={this.state.formulaValue}/>
        <Display output={this.state.displayValue}/>
        <Buttons allClear={this.allClear} numberClick={this.numberClick} operatorClick={this.operatorClick} decimalClick={this.decimalClick} equalsClick={this.equalsClick}/>
      </div>
    );
  }
}
  
  
ReactDOM.render(<App />,document.getElementById('root'));
  