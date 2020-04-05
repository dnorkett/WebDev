class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="displayApp"> 
        <div id="formula">
          {this.props.formula}
        </div>
        <div id="display">
          {this.props.output}
        </div>
      </div>
    )
  }
}


class Buttons extends React.Component {
  render() {
    return (
      <div id="calculatorButtons">
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
          className="operand"
        >
          /
        </button>
        <button 
          id="multiply" 
          onClick={this.props.operatorClick}          
          value="*"
          className="operand"
        >
          *
        </button>
        <button 
          id="seven" 
          onClick={this.props.numberClick}          
          value="7"
          className="number"
        >
          7
        </button>
        <button 
          id="eight" 
          onClick={this.props.numberClick}                   
          value="8"
          className="number"
        >
          8
        </button>
        <button 
          id="nine" 
          onClick={this.props.numberClick}          
          value="9"
          className="number"
        >
          9
        </button>
        <button 
          id="subtract" 
          onClick={this.props.operatorClick}          
          value="-"
          className="operand"
        >
          -
        </button>
        <button 
          id="four" 
          onClick={this.props.numberClick}          
          value="4"
          className="number"
        >
          4
        </button>
        <button 
          id="five" 
          onClick={this.props.numberClick}          
          value="5"
          className="number"
        >
          5
        </button>
        <button 
          id="six" 
          onClick={this.props.numberClick}          
          value="6"
          className="number"
        >
          6
        </button>
        <button 
          id="add" 
          onClick={this.props.operatorClick}          
          value="+"
          className="operand"
        >
          +
        </button>
        <button 
          id="one" 
          onClick={this.props.numberClick}          
          value="1"
          className="number"
        >
          1
        </button>
        <button 
          id="two" 
          onClick={this.props.numberClick}          
          value="2"
          className="number"
        >
          2
        </button>
        <button 
          id="three" 
          onClick={this.props.numberClick}          
          value="3"
          className="number"
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
          className="number"
        >
          0
        </button>
        <button 
          id="decimal" 
          onClick={this.props.decimalClick}          
          value="."
          className="number"
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
        <Display formula={this.state.formulaValue} output={this.state.displayValue}/>
        <Buttons allClear={this.allClear} numberClick={this.numberClick} operatorClick={this.operatorClick} decimalClick={this.decimalClick} equalsClick={this.equalsClick}/>
      </div>
    );
  }
}
  
  
ReactDOM.render(<App />,document.getElementById('root'));
  