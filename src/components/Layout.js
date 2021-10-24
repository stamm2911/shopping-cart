import { render } from "@testing-library/react";
import { Component } from "react";

const styles = {
  layout: {
    backgroundcolor: "#fff",
    color: "#0A283E",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  constainer: {
    width: "1200px",
  },
};

class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.constainer}>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
