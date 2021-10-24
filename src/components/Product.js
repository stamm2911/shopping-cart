import { Component } from "react";

class Product extends Component {
  render() {
    const { product } = this.props;
    console.log(product.img)
    return (
      <div>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    );
  }
}

export default Product;
