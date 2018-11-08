import React from 'react'

export const MyHeader = () => {
  return (
    <div>
      <h1> This Header </h1>
    </div>
  )
}

export const MyFooter = () => {
    return (
      <div>
        <h1> This footer </h1>
      </div>
    )
  }
class Layouts extends React.Component {
    render() {
        return (
            <div>
                <MyHeader />
                {this.props.children}
                <MyFooter />
            </div>
        )
    }
}
export default Layouts;