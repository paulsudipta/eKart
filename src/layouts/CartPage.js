import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import "./CartPage.css";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [selectedValue, setSelectedValue] = useState(1);

  let cartList = cart.length;

  const handleChange = (e) => {
    setSelectedValue(parseInt(e.target.value, 10));
  };

  console.log(cart);

  return (
    <React.Fragment>
      {cartList > 0 ? (
        <div className="cart_body">
          <h2>Shopping Cart</h2>
          <div className="cart_list">
            {cart.map((item) => (
              <div key={item.id} className="list_box">
                <div className="title"> {item.name}</div>
                <div className="count_div">
                  <select
                    id="rangeSelector"
                    value={selectedValue}
                    onChange={handleChange}
                  >
                    {[...Array(10).keys()].map((value) => (
                      <option key={value + 1} value={value + 1}>
                        {value + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <Button
                  startIcon={<DeleteIcon />}
                  onClick={() => removeFromCart(item.id)}
                ></Button>
              </div>
            ))}
          </div>
          <div className="action_button">
            <Button variant="contained" onClick={clearCart}>
              Clear Cart
            </Button>
            <Button
              className="order_button"
              variant="contained"
              onClick={() => {}}
            >
              Place Order
            </Button>
          </div>
        </div>
      ) : (
        <div className="empty_page">Your cart is empty!</div>
      )}
    </React.Fragment>
  );
};

export default CartPage;
