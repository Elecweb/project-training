import React from "react";

const ErrorMessage = ({ meta }) => {
  if (meta.error && meta.touched) {
    return <span style={{ color: "red" }}>{meta.error}</span>;
  }else{
    return null
  }
};

export default ErrorMessage;
