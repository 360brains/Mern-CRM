import React from "react";
import { Alert } from "reactstrap";

export const ErrorMessage = (msg) => {
  return <Alert color="danger">{msg}</Alert>;
};

export const WarningMessage = (msg) => {
    return <Alert color="warning">{msg}</Alert>;
  };

  export const InfoMessage = (msg) => {
    return <Alert color="info">{msg}</Alert>;
  };

export const SuccessMessage = (msg) => {
  return (
    <Alert color="success">
     {msg}
    </Alert>
  );
};
