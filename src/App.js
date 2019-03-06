import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      txtUserA: "",
      txtUserB: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')

    }
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  
  render() {
    return (
      <div className="container chatWindow">
        <div className="row">
          <div className="col-sm">
            messages
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <input type="text" id="txtUserA" onChange={this.handleChange} onKeyPress={this.handleKeyPress} value={this.state.txtUserA} />
          </div>
          <div className="col-sm">
            <input type="text" id="txtUserB" onChange={this.handleChange} onKeyPress={this.handleKeyPress} value={this.state.txtUserB} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
