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


//Render JSX to DOM
//ReactDOM.render(JSX, targetNode)


//Generic JSX. Every tag must be closed, must return a single element (can have nested)
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


//Writing a React Component from scratch
//class that extends React.Component, with a render method that returns HTML from JSX
// change code below this line
class MyComponent extends React.Component {
  constructor(props) {
      super(props);
  }

  render () {
      return (
          <div>
              <h1>My First React Component!</h1>
          </div>
      )
  }
}

let domContainer = document.getElementById("challenge-node"); 
ReactDOM.render(<MyComponent />, domContainer);


//Props
//Use custom HTML attributes to pass to the component
//Props object passed to component function, can be accessed as props.key
//For prop values to be evaluated in JavaScript, they mst be enclosed in {}
const CurrentDate = (props) => {
  return (
    <div>      
      <p>The current date is: {props.date}</p>      
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>What date is it?</h3>        
        <CurrentDate date={Date()}/>        
      </div>
    );
  }
};

//To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>

const ChildComponent = (props) => <p> {props.colors.join(', ')} </p>

//Another example of passing an array
const List = (props) => {  
  return <p>{props.tasks.join(", ")}</p>  
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>        
        <List tasks={['Fix door', 'Change locks']}/>
        <h2>Tomorrow</h2>
        <List tasks={['Dishes','Shop' ,'Laundry']}/>        
      </div>
    );
  }
};

//React: Default props
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

ShoppingCart.defaultProps = {items: 0};

//Another example of setting default props and overwriting.
//Note integers must be passed in curly braces
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {    
    return <Items quantity={10}/>    
  }
};


//PropTypes
//React can type-check component properties
//Considered best practice to set when you know type ahead of time
//import PropTypes from 'prop-types';
//ComponentName.propTypes = {property: PropTypes.DataType.isRequired}   adding .isRequired forces it to be required, otherwise omit
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.propTypes = {quantity: PropTypes.number.isRequired};

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};


//React: Access Props Using this.props
//Used when child component that you're passing a prop to is an ES6 class component.
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>            
            <p>Your temporary password is: {this.props.tempPassword}</p>            
        </div>
    );
  }
};


class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          
          <ReturnTempPassword tempPassword="password" />
          
        </div>
    );
  }
};


//STATE
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Don'
    }
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};


//Can also declare variables, functions etc in the components render method
class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Don'
    }
  }
  render() {    
    const name = this.state.name;
    
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};


//SetState
//built in method for updating state. Call this.setState() and pass object of key value pais
//never modify state directly, always use setState()
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {    
    this.setState({name: 'React Rocks!'});
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


//Binding 'this' to a Class Method
//One common way is to explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };    
    this.handleClick = this.handleClick.bind(this);    
  }

  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }

  render() {
    return (
      <div>        
        <button onClick={this.handleClick}>Click Me</button>        
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};


//Using state to toggle an element
//state updates may be asynchronous - this means React may batch multiple setState() calls into a single update.
//This means you can't rely on the previous value of this.state or this.props when calculating the next value.
/*
BAD
---
this.setState({
  counter: this.state.counter + this.props.increment
});

GOOD
----
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
*/

