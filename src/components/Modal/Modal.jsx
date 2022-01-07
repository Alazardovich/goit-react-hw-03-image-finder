import { Component } from "react";

export default class Modal extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.children}
          IMG
        </div>
      </div>
    );
  }
}
