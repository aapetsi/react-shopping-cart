import React, { Component } from "react";
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

// const Products = props => {
// 	return (
// 		<div className="products-container">
// 			{props.products.map(product => (
// 				<Product
// 					key={product.id}
// 					product={product}
// 					addItem={props.addItem}
// 				/>
// 			))}
// 		</div>
// 	);
// };

export default Products;
