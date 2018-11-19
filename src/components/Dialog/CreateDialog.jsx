
 
  
 
 

import React, { Component } from 'react'

export default class CreateDialog extends Component {
    handleChange = name => ({ target: { value } }) => {
        this.state({
          exercise: {
            ...this.state.exercise,
            [name]: value
          }
        });
      
     };


  render() {
    return (
      <div>
        
      </div>
    )
  }
}

 