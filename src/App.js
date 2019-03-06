import React, { Component } from 'react';
import { connect } from "react-redux";
import { addChat } from "./js/actions/index";
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
      if (event.target.id === 'txtUserA') {
        this.props.addChat({value: this.state.txtUserA, key: 'txtUserA'});
        this.setState({ txtUserA: "" });
      }
      else if (event.target.id === 'txtUserB') {
        this.props.addChat({value: this.state.txtUserB, key: 'txtUserB'});
        this.setState({ txtUserB: "" });
      }
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
            {this.props.chats.map(el => (
              <div key={el.id} className={el.key}>{el.value}</div>
            ))}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm">
            User A<br />
            <input type="text" id="txtUserA" onChange={this.handleChange} onKeyPress={this.handleKeyPress} value={this.state.txtUserA} />
          </div>
          <div className="col-sm">
            User B<br />
            <input type="text" id="txtUserB" onChange={this.handleChange} onKeyPress={this.handleKeyPress} value={this.state.txtUserB} />
          </div>
        </div>
      </div>
    );
  }
}

// get response from redux
function mapStateToProps(state) {
  return {
    chats: state.chats,
    error: state.error
  };
}

// pass parameters to redux
function mapDispatchToProps(dispatch) {
  return {
    addChat: args => dispatch(addChat(args))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
