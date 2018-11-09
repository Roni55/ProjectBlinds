import React, { Component } from 'react';
import data from './data.json';

 
export default class Menu extends Component {
  constructor( props ) {
    super( props );

    // since you're using this method in a callback, don't forget to
    // bind the this context
    this.handleClick = this.handleClick.bind( this );
}

  handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    
  }
  
  render() {
   
    return (
        <ul>
        {  
          data.map((menu) => {
            return <li key={menu.id}>{menu.name} - {menu.icon} >
              <a href={menu.link} onClick={() => this.handleClick }> Click</a>
            </li>
              
          
           
          })
        }
        </ul>
    );
  }
}