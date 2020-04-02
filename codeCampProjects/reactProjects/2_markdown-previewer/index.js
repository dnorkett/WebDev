marked.setOptions({breaks: true,});
const INITIAL_VALUE = `# React Github-Markdown Previewer!

## Here's an H2 element! What else can we do???
  
How about some inline code? \`<div>some inline code</div>\`


\`\`\`
// Now lets look at some multi-line code:

function helloWorld() {
  console.log("Hello world!");
}
\`\`\`

Perhaps you want some **bold** text?

There's also [links](https://www.freecodecamp.com), and even
> Block Quotes!

We can also do a list:
- Like this
- and this...
- ...and this!
  
You can even use images. This preview was made with REACT!
![React Logo w/ Text](https://goo.gl/Umyytc)
`

class Editor extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <div id="editorWindow" className="mainBox">
          <div className="title"> 
            (<i className="fa fa-flask"></i>) - <strong>Editor</strong>
          </div>
          <div className="lowerBox">
            <textarea id="editor" value={this.props.input} onChange={this.props.handleChange}> </textarea>
          </div>
        </div>  
      )
    }
  }
  
  class Previewer extends React.Component {
    constructor(props){
      super(props);
    }
    
    render() {
      let markUp = marked(this.props.input);
      
      return (
        <div id="previewerWindow" className="mainBox">
          <div className="title"> 
            (<i className="fa fa-flask"></i>) - <strong>Previewer</strong>
          </div>
          <div className="lowerBox" id="preview" dangerouslySetInnerHTML={{__html: markUp}}>
          </div>
        </div>  
      )
    }
  }
  
  
  class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: INITIAL_VALUE
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        });
    }
    
    render() {
      return (
        <div id="main">
          <Editor input={this.state.input} handleChange={this.handleChange} />
          <Previewer input={this.state.input}/>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));