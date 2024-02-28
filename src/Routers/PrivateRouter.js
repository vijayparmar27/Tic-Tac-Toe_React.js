import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from "../utils";

const PrivateRouters = ({ children }) => {
  let token = isAuthenticated();
  console.log(`------ token ::: `,token)
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRouters;
