import React from 'react';
import ReactDOM from 'react-dom';

const App = ()  => {
    return (
        <div className = "New Element">
            <h1> Hello, world! </h1>
            <div> Glad to be here. </div>
        </div>
    ) 
}

ReactDOM.render(<App/>,document.querySelector("#root"));