import React from "react";
import FontAwesome from "react-fontawesome";
function CardItem() {
  return (
    <div className="card-item">
      <div style={{ width: "20%" }}>
        <img
          style={{ width: "100%" }}
          src="images/products/baby/mamy.jpg"
          alt=""
        />
      </div>

      <div className="card-item-header">
        <p
          style={{
            fontSize: "1rem",
            fontWeight: "bolder",
            marginBottom: "0rem",
          }}
        >
          Coca Cola Soft Drink , 2x1.75L
        </p>
        <div className="card-item-info">
          <FontAwesome
            name="minus"
            style={{
              color: "white",
              backgroundColor: "#d00155",
              borderRadius: "50%",
              padding: "5px",
              marginRight: "1rem",
              cursor: "pointer",
            }}
          />
          <p style={{ marginRight: "1rem" }}>1</p>

          <FontAwesome
            name="plus"
            style={{
              color: "white",
              backgroundColor: "#d00155",
              borderRadius: "50%",
              padding: "5px",
              marginRight: "3rem",
              cursor: "pointer",
            }}
          />
          <FontAwesome name="times" style={{ marginRight: "4rem" }} />
          <p style={{ marginRight: "auto", fontWeight: "bold" }}>Rs 187</p>
          <p
            style={{
              alignSelf: "flex-end",
              marginRight: "auto",
              fontWeight: "bold",
            }}
          >
            Rs 187
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
