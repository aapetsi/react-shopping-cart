import React, { createContext, useState, useEffect } from "react";
import data from "../data";

export const ProductContext = createContext();

const ProductContextProvider = props => {
  const [products, setProducts] = useState(data);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};

// class ProductContextProvider extends Component {
//   state = {
//     products: data
//   };

//   const [products, setProducts] = useState(data)

//   addItem = item => {
//     this.setState({ products: [...this.state.products, item] });
//   };

//   render() {
//     return (
//       <ProductContext.Provider value={{ ...this.state, addItem: this.addItem }}>
//         {this.props.children}
//       </ProductContext.Provider>
//     );
//   }
// }

export default ProductContextProvider;
