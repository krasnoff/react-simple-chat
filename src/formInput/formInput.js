import React, { Component } from "react";

class FormInput extends Component {
    render() {
        return (
            <>
                <div className={ `txtUser ${this.props.classDef}` }><i className={`${this.props.classDef === 'txtUserA' ? 'fas' : 'far'} fa-user`}></i>&nbsp;{ this.props.classDef === 'txtUserA' ? 'User A' : 'User B' }</div>
                {this.props.originalText ? <pre className="form">{this.props.originalText}</pre> : null}
                <input type="text" id={this.props.classDef} onChange={this.props.change} onKeyPress={this.props.keyPress} value={this.props.value} />
            </>
        );
    }
}

export default FormInput;