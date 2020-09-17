import React, { Component } from "react";
class Productlist extends Component {
  state = { text: "" };
  render() {
    return (
      <div>
        {this.props.list.map((product) => (
          <div key={product.id}>
            {product.editingmode === true ? (
              <input
                type="text"
                defaultValue={product.title}
                onChange={(e) => this.setState({ text: e.target.value })}
              />
            ) : (
              <span>Catagory Title: {product.title}</span>
            )}

            {product.editingmode === true ? (
              <button
                className="btn btn-info btn-sm m-2"
                onClick={() =>
                  this.props.onsaveCatgory(product.id, this.state.text)
                }
              >
                Save Catagory
              </button>
            ) : (
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={() => this.props.editcatgory(product.id)}
              >
                Edit Catagory
              </button>
            )}
            <button
              className="btn btn-danger btn-sm m-2"
              onClick={() => this.props.deletecatagory(product.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Productlist;
