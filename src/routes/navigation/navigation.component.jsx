import React from "react";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div
        className="nav-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          background: "black",
          color: "white",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 style={{ color: "white" }}>LOGO</h2>
        </Link>
        <div className="nav-links">
          <Link to="/auth" style={{ textDecoration: "none" }}>
            <span style={{ color: "white" }}>SIGN IN</span>
          </Link>
          <Link to="/shop" style={{ textDecoration: "none" }}>
            <span style={{ color: "white" }}>SHOP</span>
          </Link>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <h2 style={{ color: "white" }}>BUY</h2>
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
