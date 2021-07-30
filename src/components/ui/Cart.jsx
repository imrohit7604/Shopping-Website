import React, { useEffect, useState } from "react";
import CartModal from "./CartModal";
//import CartSVG from "/images/cart.svg";
function Cart({ item = 0 }) {
  const [itemValue, setItemValue] = useState(0);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setItemValue(item);
  }, [item]);
  return (
    <>
      <div
        className="cart-container"
        tabIndex="0"
        onClick={() => setShowModal((prevState) => !prevState)}
      >
        <img className="cart-image" src="/images/cart.svg" alt="Cart Picture" />
        {itemValue} items
      </div>
      <CartModal
        show={showModal}
        handleClose={() => setShowModal((prevState) => !prevState)}
      />
    </>
  );
}

export default Cart;
