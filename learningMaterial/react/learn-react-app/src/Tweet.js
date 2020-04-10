import React from 'react';
import './App.css';

function Tweet(props) {  //can also destructure props, in this case Tweet({name, message}) , then refer directly to name and message
    return(
        <div className='tweet'>
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h3>Number of likes</h3>
        </div>
    );
}

export default Tweet;