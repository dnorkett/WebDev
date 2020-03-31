const quotes =[
    {
      quote: 'Sample quote 1',
      author: 'Jeff'
    },
    {
      quote: 'Sample quote 2',
      author: 'Bob'
    },
    {
      quote: 'Sample quote 3',
      author: 'Greg'
    }
  ]

class RenderQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: '',
      currentAuthor: ''
    }
    this.randomize = this.randomize.bind(this)
  }

  randomize () {
    let expression = Math.floor(Math.random() * quotes.length)
    this.setState(state => (
      {
        currentQuote: quotes[expression].quote,
        currentAuthor: quotes[expression].author
      }
    ))
  }

  render() {
    this.random();
    
    return (
      <div>
        <h1 id="text">{this.state.currentQuote}</h1>
        <p id="author">- {this.state.currentAuthor}</p>
        <div id="bottom-bar">        
          <a id="tweet-quote" href="#">tweet</a>                  
          <button id="new-quote" onClick={this.randomize}> New Quote</button>        
      </div>
      </div>      
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (
        <div id="quote-box">
            <RenderQuote />            
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />,document.getElementById('root'));
