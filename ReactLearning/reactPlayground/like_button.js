'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
    /*
    return (
        <button onClick={() => this.setState({ liked: true })}>
        Like
        </button>
    );
  */
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);


//Generic JSX. Every tag must be closed
let JSX = (
            <div>
                <h1> Title! </h1>
                <p> Paragraph! </p>
                <ul>
                    <li> li one! </li>
                    {/*Comment*/}
                    <li> li two! </li>
                    <li> li three! </li>
                </ul>
            </div>
);


//Creating a component via a custom function
const MyComponent = function() {  
  return (<div> some string of text </div>);  
}


//Creating a component by using React.Component
//Gives the class access to React features, such as local state and lifecycle hooks
class Kitten extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <h1> H1 </h1>
    );
  }
}


//To return multiple React components together, create a custom parent component to render all as children.
//When React encounters a custom HTML tag that references another component (a component name wrapped in < /> like in this example), 
//it renders the markup for that component in the location of the tag. 
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>I am the parent</h1>        
        <ChildComponent />        
      </div>
    );
  }
};


//More complex example of nested parent / child components
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>      
      <TypesOfFruit />      
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>        
          <Fruits />        
      </div>
    );
  }
};


