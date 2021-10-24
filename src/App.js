import { Component } from "react";
import Products from "./components/Products";

class App extends Component {
  state = {
    products: [
      {
        name: "Tomate",
        price: 1500,
        img: "/productos/tomate.jpg",
      },
      {
        name: "Arbejas",
        price: 2500,
        img: "/productos/arbejas.jpg",
      },
      {
        name: "Lechuga",
        price: 500,
        img: "/productos/lechuga.jpg",
      },
    ],
  };

  render() {
    return (
      <div>
        <Products
          addToCart={() => {
            console.log("add to cart");
          }}
          products={this.state.products}
        />
      </div>
    );
  }
}

export default App;
