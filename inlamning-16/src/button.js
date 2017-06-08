import React, { Component } from 'react';


class Button extends Component {
 
    
  render() {
    return (
        <div>
            <button onClick={this.props.delete}
            type="reset" className="buttonClass" >Delete</button>
        </div>
      
    );
  }
    
}

export default Button;