import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>React</h1>
      <div>{children}</div>;
    </div>
  );
};

export default Layout;
