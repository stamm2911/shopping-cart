import { Component } from "react";
import Products from "./components/Products";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

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
        <Navbar />
        <Layout>
          <Title />
          <Products
            addToCart={() => {
              console.log("add to cart");
            }}
            products={this.state.products}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
