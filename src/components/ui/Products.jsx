import React, { useState } from "react";
import FontAwesome from "react-fontawesome";
import ProductCard from "./ProductCard";

function Products() {
  const products = [
    {
      id: 0,
      selected: true,
      productName: "All Product",
    },
    {
      id: 1,
      selected: false,
      productName: "Fruits & Vegtables",
    },
    {
      id: 2,
      selected: false,
      productName: "Bakes Cakes and Dairy",
    },
    {
      id: 3,
      selected: false,
      productName: "Beverages",
    },
    {
      id: 4,
      selected: false,
      productName: "Beauty and Hygiene",
    },
    {
      id: 5,
      selected: false,
      productName: "Baby Care",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState({
    id: 0,
    selected: true,
    productName: "All Product",
  });
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <>
      <div className="products-menu">
        <ul>
          {products.map((item) => (
            <li
              key={item.id}
              tabIndex="0"
              onClick={() => setSelectedProduct(item)}
            >
              {item.productName}
            </li>
          ))}
        </ul>
      </div>

      <div className="drop-menu">
        <ul>
          <li
            style={{ display: "flex", justifyContent: "space-evenly" }}
            tabIndex="0"
            onClick={() => {
              setDropMenu((prevState) => !prevState);
            }}
          >
            {selectedProduct.productName}
           {
             dropMenu ? <FontAwesome name="angle-up" size="2x" />:<FontAwesome name="angle-down" size="2x" />
           } 
          </li>

          {dropMenu &&
            products.map(
              (item) =>
                item.id != selectedProduct.id && (
                  <li
                    key={item.id}
                    tabIndex="0"
                    onClick={() => {
                      setSelectedProduct(item);
                      setDropMenu((prevState) => !prevState);
                    }}
                  >
                    {item.productName}
                  </li>
                )
            )}
        </ul>
      </div>

      <div className="products-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        
      </div>
    </>
  );
}

export default Products;
