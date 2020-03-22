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


//misc
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

const MyComponent = function() {  
  return (<div> some string of text </div>);  
}