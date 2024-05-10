import React from "react";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <img src={imageUrl} alt={title} />
      <div>
        <h2>{title}</h2>
      </div>
      <div className="directory-item-footer">
        <h3>Shop Now</h3>
      </div>
    </div>
  );
};

export default DirectoryItem;
