import React from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <p>Navigation</p>
      <Outlet />
    </div>
  );
};

export default Navigation;
