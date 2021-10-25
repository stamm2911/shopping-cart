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
    cart: [],
    CartVisibility: false,
  };

  addToCart = (product) => {
    const { cart } = this.state;
    if (cart.find((item) => item.name === product.name)) {
      const newCart = cart.map((item) =>
        item.name === product.name ? { ...item, qty: item.qty + 1 } : item
      );
      return this.setState({
        cart: newCart,
      });
    }
    return this.setState({
      cart: this.state.cart.concat({ ...product, qty: 1 }),
    });
  };

  showCart = () => {
    if (!this.state.cart.length) return;
    this.setState({ CartVisibility: !this.state.CartVisibility });
  };

  render() {
    return (
      <div>
        <Navbar
          cart={this.state.cart}
          cartVisibility={this.state.CartVisibility}
          showCart={this.showCart}
        />
        <Layout>
          <Title />
          <Products addToCart={this.addToCart} products={this.state.products} />
        </Layout>
      </div>
    );
  }
}

export default App;
