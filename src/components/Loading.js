import React from "react";
import loading from "./loading.gif";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-item-center">
      <img width={"100px"} src={loading} alt="" />
    </div>
  );
};

export default Loading;
