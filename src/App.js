import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductContextProvider from "./contexts/ProductContext";
import CartContextProvider from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navigation cart={cart} />

          {/* Routes */}
          <Route
            exact
            path="/"
            component={Products}
            //   render={() => <Products products={products} addItem={addItem} />}
          />
          <Route path="/cart" component={ShoppingCart} />

          {/* <Route path="/cart" render={() => <ShoppingCart cart={cart} />} /> */}
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
