import React from "react";

import "./checkout.css";
import Total from "./Total.js";
import CartItmes from "./CartItmes";
import { useStateValue } from "../datalayer/StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__header">
        <img
          className="bannerimg"
          src="https://digitalsathi.com/wp-content/uploads/2017/08/amazon-todays-deal-banner-expand-4.jpg"
          alt="Advertisment banner"
        />
        <div className="productTotal">
          <Total />
        </div>
      </div>
      <div>
        <h1>Your Shoping Cart</h1>
        {basket.map((item) => (
          <CartItmes
            id={item.id}
            title={item.title}
            description={item.description}
            rating={item.rating}
            imgurl={item.imgurl}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
