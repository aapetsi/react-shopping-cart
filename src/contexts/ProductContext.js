import React, { Component, createContext } from "react";
import data from "../data";

export const ProductContext = createContext();

class ProductContextProvider extends Component {
  state = {
    products: data
  };

  addItem = item => {
    this.setState({ products: [...this.state.products, item] });
  };

  render() {
    return (
      <ProductContext.Provider value={{ ...this.state, addItem: this.addItem }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export default ProductContextProvider;
