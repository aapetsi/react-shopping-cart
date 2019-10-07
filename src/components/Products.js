import React, { Component, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
// Components
import Product from "./Product";

class Products extends Component {
  static contextType = ProductContext;
  render() {
    const { products, addItem } = this.context;
    console.log(products);

    return (
      <div className="products-container">
        {products.map(product => (
          <Product key={product.id} product={product} addItem={addItem} />
        ))}
      </div>
    );
  }
}

// const Products = () => {
//   const { products, addItem } = useContext(ProductContext);
//   return (
//     <div className="products-container">
//       {products.map(product => (
//         <Product key={product.id} product={product} addItem={addItem} />
//       ))}
//     </div>
//   );
// };

export default Products;
