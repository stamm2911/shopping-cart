import { Component } from "react";

const styles = {
  bubble: {
    backgroundColor: "#E9725A",
    borderRadius:'15px',
    color:'#fff',
    padding:'2px 10px',
    fontSize:'0.9rem',
    width: '20px'
  },
};

class BubbleAlert extends Component {
  render() {
    return <sapn style={styles.bubble}>5</sapn>;
  }
}

export default BubbleAlert;
