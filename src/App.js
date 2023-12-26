import React from "react";
import Router from "./Router";
import ProductContext from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ProductContext>
        <CartProvider>
          <Router />
        </CartProvider>
      </ProductContext>
    </React.Fragment>
  );
}

export default App;
