import React from "react";
import CurrencyFormat from "react-currency-format";

import "../Subtotal/Subtotal.css";
import { useStateValue } from "../../StateProvider";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const Navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  const getBasketTotal = (basket) => {
    const total = basket?.reduce((amount, item) => item.price + amount, 0);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(total);
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => Navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
