import React from "react";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div>
      <img
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          margin: "0 auto",
        }}
        src={imageUrl}
        alt={title}
      />
      <div>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
