import React, { Component } from 'react'
import "../css/main.css";
import LocationOptions from './LocationOptions';

class App extends Component {

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <p>here is the app:</p>
                <LocationOptions />
            </div>
        )
    }

}

export default App;