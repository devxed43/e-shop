import React from "react";
import { Outlet } from "react-router-dom";
// import { Fragment } from "react";
import { Link } from "react-router-dom";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  return (
    <div>
      <div>
        <div className="nav-container">
          <Link to="/">
            <h2>LOGO</h2>
          </Link>
          <div className="nav-links">
            <Link to="/auth">
              <span>SIGN IN</span>
            </Link>
            <Link to="/shop">
              <span>SHOP</span>
            </Link>
          </div>
          <Link to="/checkout">
            <h2>BUY</h2>
          </Link>
        </div>
        <CartDropdown />
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
