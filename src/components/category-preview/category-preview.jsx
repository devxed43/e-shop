import "./category-preview.styles.scss";
import { Link } from "react-router-dom";

import React from "react";
import ProductCard from "../product-card/product-card";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {/* whatever filter evaluates as false, it gets rid of. only accepts what is true */}
        {/* the first 4 index, keep */}
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
