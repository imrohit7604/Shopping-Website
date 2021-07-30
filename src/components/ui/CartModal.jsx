import React from "react";
import FontAwesome from "react-fontawesome";
import CardItem from "./CardItem";

function CartModal({ handleClose, show }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bolder",
            display: "flex",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <p
            style={{
              fontWeight: "bolder",
              fontSize: "1.3rem",
              padding: "0rem",
              margin: "0rem",
            }}
          >
            My Cart
          </p>
          <p style={{ marginRight: "auto", marginLeft: ".5rem" }}>(1 item)</p>
          <FontAwesome
            name="times"
            style={{ color: "white", cursor: "pointer" }}
            size="2x"
            onClick={handleClose}
          />
        </div>
        <CardItem />
        <CardItem />

        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            margin: " 1rem 0rem 1rem 0rem",
          }}
        >
          <img
            style={{ width: "20%", marginRight: "1rem", marginLeft: "1rem" }}
            src="images/lowest-price.png"
            alt=""
          />
          <p>You won't find it cheaper anywhere</p>
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Promo code can be applied on payment page</p>
          <div
            style={{
              display: "flex",
              backgroundColor: " #d00155",
              color: "white",
              alignItems: "center",
              width: "95%",
              marginBottom: ".5rem",
              padding: "0 .3rem 0 .3rem ",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <p style={{ marginRight: "auto" }}>Proceed to Checkout</p>
            <p>Rs 187 </p>
            <FontAwesome
              name="angle-right"
              style={{
                marginLeft: ".5rem",
                marginRight: "1rem",
                color: "white",
                cursor: "pointer",
              }}
              onClick={handleClose}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CartModal;
