import { Component } from "react";

const styles = {
  cartDetails: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 50,
  },
  ul: {
      margin:0,
      padding:0
  },
  product: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItemns: "center",
    padding:'25px 20px',
    borderBottom:'solid 1px #aaa'
  },
};

class CartDetails extends Component {
  render() {
    const { cart } = this.props;
    console.log(cart);
    return (
      <div style={styles.cartDetails}>
        <ul style={styles.ul}>
          {cart.map((item, index) => (
            <li style={styles.product} key={index}>
              <img src={item.img} width="50" height="32" alt={item.name} />
              {item.name}
              <span>{item.qty}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CartDetails;
