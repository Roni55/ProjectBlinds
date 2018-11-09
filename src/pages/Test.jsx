import React, { Component } from "react";
import { render } from "react-dom";



const styles = {
  fontFamily: "sans-serif",
  display: "inline",
  textDecoration:'none',
  textAlign: "center"
};

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.onItemClickHandler = this.onItemClickHandler.bind(this);
  }

  onItemClickHandler(itemName) {
    window.location = `http://localhost:3000/${itemName}`;
    console.log("Clicked " + itemName);
  }

  render() {
    this.items = ["home", "about", "dashboard"];
    var lis = [];
    for (var liName in this.items) {
      var liName2 = this.items[liName];
      console.log("Adding " + this.items[liName]);

      var clickHandler = (item => {
        return event => {
          this.onItemClickHandler(item);
        };
      })(this.items[liName]);

      lis.push(
        <li
          className="item-ListItem"
          key={this.items[liName]}
          onClick={clickHandler}
        >
          <span>
            <a href="#">{this.items[liName]}</a>
          </span>
        </li>
      );
    }

    return (
      <div className="item">
        <label className="item-Header">
          <u>items</u>
        </label>
        <ul className="item-List">{lis}</ul>
      </div>
    );
  }
}




