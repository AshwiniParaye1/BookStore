import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const BookCartCheckOut = () => {
  const { books, carts, updateCart, clearCart } = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);
  const shippingCost = 5;

  const getSubtotal = (books, carts) => {
    let subtotal = 0;
    carts.forEach((cart) => {
      books.forEach((book) => {
        if (book.id === cart.id) {
          subtotal = subtotal + book.price * cart.quantity;
        }
      });
    });

    return subtotal.toFixed(2);
  };

  let subtotal = getSubtotal(books, carts);
  let tempTotal = (parseFloat(subtotal) + shippingCost).toFixed(2);

  useEffect(() => {
    setTotalPrice(tempTotal);
  }, [tempTotal]);

  const handleCheckout = () => {
    // Perform any checkout logic here
    // ...

    // Clear the cart
    clearCart();

    // Show success message
    toast.success("Checkout successful");
  };

  return (
    <div className="container">
      <div className="checkout-area w-75 mx-auto my-5">
        <h1 className="heading text-center">Total</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>${subtotal}</td>
            </tr>
            <tr>
              <td>Shipping Cost</td>
              <td>$0{shippingCost}</td>
            </tr>
            <tr className="text-primary h4">
              <td>Total</td>
              <td>${totalPrice}</td>
            </tr>
            <tr>
              <td>
                <Link className="btn btn-outline-primary" to="/">
                  Back To Shopping
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-outline-info"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default BookCartCheckOut;
