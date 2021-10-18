import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  remoreItem: (item) => {},
});

export default CartContext;
