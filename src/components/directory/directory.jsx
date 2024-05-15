import React from "react";
import { Fragment } from "react";
import DirectoryItem from "../directory-item/directory-item";

const Directory = ({ categories }) => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "5px",
          padding: "4rem",
        }}
      >
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
