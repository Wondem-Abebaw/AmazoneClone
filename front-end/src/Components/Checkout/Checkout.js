import React from "react";
import "../Checkout/Checkout.css";
import Subtotal from "./Subtotal/Subtotal";
import CheckOutProduct from "./CheackOutProduct/CheakOutProduct";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h3>Hello,</h3>
        <h2 className="checkout__title">Your Shopping Basket</h2>
        {basket.map((item, index) => (
          <CheckOutProduct
            key={index}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;