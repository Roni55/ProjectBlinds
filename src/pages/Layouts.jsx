import React from 'react'
import { SideMain } from './SideMenu'
import ScrollableTabsButtonForce from "./ScrollableTabsButtonForce";

export const MyHeader = () => {
  return (
    <div>
      <h1> This Header </h1>
      <SideMain />
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
            <div>
              </div>
            <MyFooter />
            <ScrollableTabsButtonForce />
            </div>
        )
    }
}
export default Layouts;