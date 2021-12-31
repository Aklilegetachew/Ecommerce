import React from "react";

import "./cartitem.css";
import { useStateValue } from "../datalayer/StateProvider";

function CartItmes({ id, title, description, price, rating, imgurl }) {
  const [{ basket }, dispatch] = useStateValue();
  const RemoveofCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="Item">
      <img className="Item__img" src={imgurl} alt="" />
      <div className="Item__info">
        <p>
          <strong>{title}</strong>
        </p>
        <p>{description}</p>

        <p>
          <small>$</small> <strong>{price}</strong>
        </p>
        <div className="ratings">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button className="remove__btn" onClick={RemoveofCart}>
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CartItmes;
