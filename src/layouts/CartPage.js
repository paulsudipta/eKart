import React from "react";
import { useCart } from "../contexts/CartContext";
import "./CartPage.css";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  let cartList = cart.length;

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
                  <IconButton aria-label="delete">
                    <AddCircleIcon />
                  </IconButton>
                  <div>5</div>
                  <IconButton aria-label="delete">
                    <RemoveCircleIcon />
                  </IconButton>
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
