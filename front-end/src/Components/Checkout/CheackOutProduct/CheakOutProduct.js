import React from "react";
import "../CheackOutProduct/CheackOutProduct.css";
import { useStateValue } from "../../StateProvider";
import PropTypes from "prop-types";

function CheckOutProduct({ id, title, image, price, rating }) {
  /* eslint-disable no-unused-vars */
  const [{ basket }, dispatch] = useStateValue();
  /* eslint-disable no-unused-vars */
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p key={id}>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from the basket</button>
      </div>
    </div>
  );
}

CheckOutProduct.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.any,
  price: PropTypes.number,
  rating: PropTypes.number,
};
export default CheckOutProduct;
