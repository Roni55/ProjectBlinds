import React, { Component } from 'react'
import CircularIndeterminate from './CircularIndeterminate'

export default class spin extends Component {
    
    state = {
        loading: true
    };
    componentDidUpdate() {
        setTimeout(()=> this.setState({loading:false}),2500);
    }
    render() {
        const { loading } = this.state;
        if (loading) {
            return (
                <div>
                <CircularIndeterminate/>
                </div>
            )
        }
    return (
      <div>
        
      </div>
    )
  }
}

