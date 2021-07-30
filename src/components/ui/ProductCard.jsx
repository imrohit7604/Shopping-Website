import React from "react";

function ProductCard() {
  return (
    <div className="product-card-container">
      
      <h2> Coca Cola Soft Drink , 2x1.75L</h2>
      <img style={{width: "100%",}} src="images/products/baby/mamy.jpg" alt="" />
      <p style={{ backgroundColor: "#eaeaea", padding:"10px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, a
        facere. Eveniet, accusamus aperiam repellendus quo iusto exercitationem
        nesciunt accusantium dignissimos, quaerat iure doloremque.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <p style={{ fontWeight: "bold" ,width:"100%"}}>MRP Rs 150</p>
        <button style={{width:"inherit"}} className="button">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;
