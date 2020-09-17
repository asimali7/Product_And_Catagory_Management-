import React, { Component } from "react";
class Productlist extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          {this.props.lists.map((product, index) => {
            return (
              <div key={product.P_ID}>
                <span>Product ID:{product.P_ID}</span>
                <br />
                <span>Product Name:{product.P_Name}</span>
                <br />
                <span>Catagory Title: {product.selected}</span>{" "}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Productlist;
