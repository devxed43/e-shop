import React from "react";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container" style={{textAlign: "center"}}>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <button onClick={addProductToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
