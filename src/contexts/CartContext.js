import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <CartContext.Provider value={{ cart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
