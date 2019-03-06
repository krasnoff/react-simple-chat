import React, { Component } from 'react';
import { connect } from "react-redux";
import { addChat } from "./js/actions/index";
import FormInput from "./formInput/formInput";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      txtUserA: "",
      txtUserB: "",
      originalTextA: null,
      originalTextB: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      if (event.target.id === 'txtUserA') {
        this.props.addChat({value: this.state.txtUserA, key: 'txtUserA', originaltext: this.state.originalTextA});
        this.setState({ txtUserA: "", originalTextA: null });
      }
      else if (event.target.id === 'txtUserB') {
        this.props.addChat({value: this.state.txtUserB, key: 'txtUserB', originaltext: this.state.originalTextB});
        this.setState({ txtUserB: "", originalTextB: null });
      }
    }
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleReply(arg) {
    if (arg.key === 'txtUserA') {
      this.setState({ originalTextB: arg.value });
    }
    else if (arg.key === 'txtUserB') {
      this.setState({ originalTextA: arg.value });
    }
  }
  
  render() {
    return (
      <div className="container chatWindow">
        <div className="row messages">
          <div className="col-sm">
            {this.props.chats.map(el => (
              <dl key={el.id}>
                <dt className={el.key}>{ el.key === 'txtUserA' ? (<div><i className="fas fa-user"></i>&nbsp;User A</div>) : <div><i className="far fa-user"></i>&nbsp;User B</div> }</dt>
                <dd className={el.key}>
                  { el.originaltext ? <pre className="reply">{ el.originaltext }</pre> : null }
                  {el.value}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-reply reply" title="Reply to this message" onClick={() => this.handleReply({value: el.value, key: el.key})}></i>
                </dd>
              </dl>
            ))}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm">
            <FormInput classDef="txtUserA" originalText={this.state.originalTextA} value={this.state.txtUserA} change={this.handleChange} keyPress={this.handleKeyPress}></FormInput>
          </div>
          <div className="col-sm">
            <FormInput classDef="txtUserB" originalText={this.state.originalTextB} value={this.state.txtUserB} change={this.handleChange} keyPress={this.handleKeyPress}></FormInput>
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
