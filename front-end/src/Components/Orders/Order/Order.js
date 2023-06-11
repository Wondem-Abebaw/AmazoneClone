import React from "react";
import "../Order/Order.css";
import moment from "moment";

import CheckOutProduct from "../../Checkout/CheackOutProduct/CheakOutProduct";
const Order = ({ order }) => {
  // console.log(order);
  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(order.data.amount / 100);

  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckOutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <h3 className="order__total">Order Total: {formattedTotal}</h3>
    </div>
  );
};

export default Order;