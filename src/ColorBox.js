import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    if (this.props.opacity >= 0.2) {
      return (
        <div className='color-box' style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      )} else {
        return null
      }
    }
}


// Trying to get this passing by using the Ternary Expression but not doing it right. Used if/else instead. 
//
//   render() {
//     const newOpacity = this.props.opacity - 0.1;
//     return this.props.opacity >= 0.2 ? null : ( <div className="color-box" style={{opacity: this.props.opacity}}>
//         <ColorBox opacity={newOpacity} />
//       </div>)
//   }
// }
