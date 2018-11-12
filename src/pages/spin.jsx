import React, { Component } from 'react'
//import spinnner
export default class spin extends Component {
    
    state = {
        loading: true
    };
    componentDidUpdate() {
        setTimeout(()=> this.setState({loading:false}),1500);
    }
    render() {
        const { loading } = this.state;
        if (loading) {
            return (
                <div>

                </div>
            )
        }
    return (
      <div>
        
      </div>
    )
  }
}

