import React, { useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";

function OfferBanner() {
  const images = [
    { url: "images/offers/offer1.jpg" },
    { url: "images/offers/offer2.jpg" },
    { url: "images/offers/offer3.jpg" },
    { url: "images/offers/offer4.jpg" },
    { url: "images/offers/offer5.jpg" },
    
  ];

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="offer-banner-container">
      <img width="100%" src="images/offers/offer1.jpg" />
    </div>
  );
}

export default OfferBanner;
