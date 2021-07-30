import React, { useEffect } from "react";

function ProductBanner(product, { name, description, key, imageUrl, order }) {
  useEffect(() => {
    //console.log(index);
    //console.log(index % 2 === 0 ? "row-reverse" : "row");
    console.log(name, description, key, imageUrl, order);
  }, []);
  return (
    <div
      style={{ flexDirection: order % 2 == 0 ? "row-reverse" : "row" }}
      className="product-banner-container"
    >
      <img style={{ width: "50%", alignSelf: "flex-start" }} src={imageUrl} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <p style={{ fontSize: "2.5rem", fontWeight: "bolder" }}>{name}</p>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{description}</p>
        <button
          style={{ fontSize: "1.5rem", padding: "1rem" }}
          className="button"
        >
          Explore {key}
        </button>
      </div>
    </div>
  );
}

export default ProductBanner;
