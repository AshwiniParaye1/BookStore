import React, { useContext } from "react";
import { Context } from "../context/Context";
import BookCartItem from "./BookCartItem";
import BookCartCheckOut from "./BookCartCheckOut";
import emptyCart from "../assets/empty-cart.png";

const BookCart = () => {
  const { carts } = useContext(Context);

  if (carts.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img src={emptyCart} alt="" width={350} height={300} />
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <h4 className="d">Book Cart</h4>
        <div className="container d-flex flex-column">
          {carts.map((cart) => (
            <BookCartItem key={cart.id} cart={cart} />
          ))}
        </div>
        <BookCartCheckOut />
      </div>
    );
  }
};

export default BookCart;
