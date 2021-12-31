import React from "react";
import Button from "@mui/material/Button";

import "./products.css";
import { useStateValue } from "../datalayer/StateProvider";

function Products({ id, title, description, price, rating, imgurl }) {
  const [state, dispatch] = useStateValue();
  const AddtoCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        description: description,
        price: price,
        rating: rating,
        imgurl: imgurl,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__container">
        <div className="product__info">
          <p>
            <strong>{title}</strong>
          </p>
          <p>{description}</p>
          <div className="ratings">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>

          <p>
            <small>$</small> <strong>{price}</strong>
          </p>
        </div>
        <img className="product__img" src={imgurl} alt="" />
        <button className="product__btn" onClick={AddtoCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Products;
