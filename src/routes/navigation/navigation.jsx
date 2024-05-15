import React, { Fragment } from "react";

import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";

import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div
        className="navigation-container"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background: "rgb(0, 0, 0, 0.03)",
          height: "15vh",
        }}
      >
        <Link to="/">
          <h2>Home</h2>
        </Link>

        <Link to="/shop">
          <h2>Shop</h2>
        </Link>

        {currentUser ? (
          <Link to="/" onClick={signOutUser}>
            <h2>Sign Out</h2>
          </Link>
        ) : (
          <Link to="/auth">
            <h2>Sign In</h2>
          </Link>
        )}

        <CartIcon />
      </div>
      <div
        style={{
          width: "400px",
          height: "auto",
          position: "absolute",
          right: "10px",
          marginTop: "0px",
          top: "120px",
        }}
      >
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
