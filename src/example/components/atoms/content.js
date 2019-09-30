import React from "react";

export const Content = ({ tabKey, params, paramName, children }) => (
  <>{params[paramName] === String(tabKey) ? children : null}</>
);
