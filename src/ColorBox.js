import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newOpacity = this.props.opacity - .1;
    
    return this.props.opacity < .2 ?  null : (
      <div className="color-box" style={{opacity: (newOpacity + .1) || 1 /*replace null with the value*/}}>
        <ColorBox opacity = {newOpacity} />
      </div>
    );

    
  }

}

