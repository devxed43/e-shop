import React from "react";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckout = () => navigate("/checkout");

  return (
    <div
      style={{
        background: "white",
        textAlign: "center",
        border: "1px solid black",
        height: "55vh",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <button
          onClick={goToCheckout}
          style={{ width: "200px", height: "40px" }}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartDropdown;
