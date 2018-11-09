import React from 'react';
import { render } from 'react-dom';

export default class SaveJson extends React.Component {
  constructor() {
    super()

    this.state = {
      data: [{
        "name": "bin"
      }, {
        "name": "lu"
      }
      ]
    }
  }

  onChange = (e, idx) => {

    let dataToSet = [...this.state.data]
    let error = false
    try {
      dataToSet = dataToSet.map((o, i) => {
        if (i === idx) {
          return JSON.parse(e.target.value) //dangerous
        }
        return o
      })
    } catch (e) {
      error = true
    }
    this.setState({
      data: dataToSet,
      error,
    })
  }

  getAllStates = () => console.log((this.state.data))

  render() {
    return(
      <div>{this.state.data.map((o,i)=>{
        return <div><br />
         <textarea onChange={e => this.onChange(e, i)}>
          {JSON.stringify(o)}
         </textarea>
         </div>
      })}
      
      <br />
      <button onClick={this.getAllStates}>Save JSON</button>

      </div>
    )
  }
}




