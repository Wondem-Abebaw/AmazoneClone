import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { useStateValue } from "./Components/StateProvider";
import { auth } from "./firebase";
import { useEffect } from "react";
import Checkout from "./Components/Checkout/Checkout";
import { onAuthStateChanged } from "firebase/auth";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";
const promise = loadStripe(
  "pk_test_51N7xJkJglVWOP7fCKnFEzeyxcJgf1en59OKru1sy8544JBkixW1LlT91RfkNuBlYQenS0R7uz4hQO4s4W97B4fX300aSpl7BYB"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Header /> <Home />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header /> <Login />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header /> <Checkout />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />{" "}
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>{" "}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
