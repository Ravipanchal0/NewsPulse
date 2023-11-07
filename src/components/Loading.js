import React, { Component } from "react";
import loading from "./loading.gif";

export class Loading extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-item-center">
        <img src={loading} alt="" />
      </div>
    );
  }
}

export default Loading;
