import React, { Component } from 'react';
import './App.css';


class Form extends Component {
  render() {
    return (
        <div>
            <input value={this.props.name} className="name" onChange={this.props.saveName} placeholder="name" />
            <input value={this.props.email} className="email" onChange={this.props.saveEmail} placeholder="email" />
        </div>
      
    );
  }
    
}

export default Form;