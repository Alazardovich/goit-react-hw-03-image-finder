import { Component } from "react";
import { createPortal } from "react-dom";
import { ModalOverlay, ModalWindow } from "./CSSModal";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    // console.log("componentDidMount");
    window.addEventListener("keydown", this.handleKeyDown);
  }
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUnmount() {
    // console.log("componentWillUpdate");
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackdropClick = (e) => {
    // console.log("target", e.target);
    // console.log("currentTarget", e.currentTarget);
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <ModalOverlay onClick={this.handleBackdropClick}>
        <ModalWindow>{this.props.children}</ModalWindow>
      </ModalOverlay>,
      modalRoot
    );
  }
}
