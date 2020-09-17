import React, { Component } from "react";
import MyButton from "./components/myButton";
import MyInput from "./components/myInput";
import SingleCatagoryItem from "./components/singleCatagoryItem";
import SingleProductItem from "./components/singleProductItem";
class App extends Component {
  state = {
    text: "",
    catagoryTitle: "",
    catagories: [
      { _id: 1, title: "Cloths" },
      { _id: 2, title: "Shoes" },
    ],
    text1: "",
    productTitle: "",
    selectedCatagory: null,
    products: [
      { _id: 1, title: "Shirt", catagoryId: 1 },
      { _id: 2, title: "Pent", catagoryId: 1 },
      { _id: 3, title: "Jogers", catagoryId: 2 },
      { _id: 4, title: "Sneekers", catagoryId: 2 },
      { _id: 5, title: "Trowser", catagoryId: 1 },
    ],
  };

  getCatagoryTitleById = (catagoryId) => {
    let catagoryTitle = "DIMY";
    for (let index = 0; index < this.state.catagories.length; index++) {
      const singleCatagory = this.state.catagories[index];
      if (singleCatagory._id == catagoryId) {
        catagoryTitle = singleCatagory.title;

        break;
      }
    }
    return catagoryTitle;
  };

  catagoryExist = (catagoryTitle) => {
    let exists = false;
    for (let index = 0; index < this.state.catagories.length; index++) {
      const singleCatagory = this.state.catagories[index];
      if (singleCatagory.title === catagoryTitle) {
        exists = true;
        break;
      }
    }
    return exists;
  };

  validateCagagory = () => {
    let validation = { success: true, message: "" };
    if (this.state.catagoryTitle === "") {
      validation.success = false;
      validation.message = "Invalid Title";
    } else if (this.catagoryExist(this.state.catagoryTitle)) {
      validation.success = false;
      validation.message = `${this.state.catagoryTitle} Already exists`;
    }
    return validation;
  };

  _handleAddCatagory = () => {
    let validationResult = this.validateCagagory();
    if (validationResult.success === true) {
      let catagories = [...this.state.catagories];
      let newCatagory = {
        _id: `${Math.random() * 10000}-ABC-${Math.random() * 1000}`,
        title: this.state.catagoryTitle,
        editingmode: false,
      };
      catagories.push(newCatagory);

      this.setState({ catagories });
      this.setState({ catagoryTitle: "" });
      console.log(catagories);
    } else {
      alert(validationResult.message);
    }
  };

  validateProduct = () => {
    let validation = { success: true, message: "" };
    if (this.state.productTitle === "") {
      validation.success = false;
      validation.message = "Invalid Product title";
    } else if (this.state.selectedCatagory === null) {
      validation.success = false;
      validation.message = "Please select a catagory";
    }
    return validation;
  };

  _handleAddProduct = () => {
    let validationResult = this.validateProduct();
    if (validationResult.success === true) {
      let products = [...this.state.products];
      let newProduct = {
        _id: `${Math.random() * 10000}-ABC-${Math.random() * 1000}`,
        title: this.state.productTitle,

        catagoryId: this.state.selectedCatagory,
        editingmode: false,
      };
      console.log("ADDING PRODUCT");

      products.push(newProduct);
      this.setState({ products });
      this.setState({ productTitle: "" });
      console.log({ products });
    } else {
      alert(validationResult.message);
    }
  };
  catagoryIdExist = (_id) => {
    let exists = false;
    for (let index = 0; index < this.state.products.length; index++) {
      const singleProduct = this.state.products[index];
      if (singleProduct.catagoryId === _id) {
        exists = true;
        break;
      }
    }
    return exists;
  };
  validateCatagoryId = (_id) => {
    let validation = { success: false, message: "" };

    if (this.catagoryIdExist(_id)) {
      validation.success = true;
      validation.message = ` Already Exist`;
    } else {
      validation.success = false;
      validation.message = `not  Exist`;
    }

    return validation;
  };

  handledelete = (_id) => {
    let validationResult = this.validateCatagoryId(_id);
    if (validationResult.success === true) {
      alert("already exist ");
    } else if (validationResult.success === false) {
      let deletelist = [];
      for (let index = 0; index < this.state.catagories.length; index++) {
        const element = this.state.catagories[index];

        if (element._id !== _id) {
          deletelist.push(element);
        }
      }

      this.setState({ catagories: deletelist });
    }
    console.log(_id);
  };
  handledeleteproduct = (id) => {
    let deletingProduct = this.state.products.filter((i) => i._id !== id);
    this.setState({ products: deletingProduct });
  };
  edittext = (counter) => {
    const list = [...this.state.catagories];
    list.forEach((lists) => {
      if (lists._id === counter) {
        lists.editingmode = true;
      }
    });

    const data = [...list];
    this.setState({ catagories: data });
    console.log({ counter });
    console.log("helooooo");
  };
  onsavetext = (counter, text) => {
    const list = [...this.state.catagories];
    list.forEach((lists) => {
      if (lists._id === counter) {
        lists.editingmode = false;
        lists.title = text;
      }
    });

    const data = [...list];
    this.setState({ catagories: data });
    console.log({ data });
    console.log(counter);
    console.log(text);
  };

  onChangeText = (e) => {
    console.log(e);
  };
  // onChangeText={(e) => this.setState({ text: e.target.value })}
  editproducttext = (counter) => {
    const list = [...this.state.products];
    list.forEach((lists) => {
      if (lists._id === counter) {
        lists.editingmode = true;
      }
    });

    const data = [...list];
    this.setState({ products: data });
    console.log({ counter });
    console.log("helooooo");
  };
  onsaveproducttext = (counter, text1) => {
    const list = [...this.state.products];
    list.forEach((lists) => {
      if (lists._id === counter) {
        lists.editingmode = false;
        lists.title = text1;
      }
    });

    const data = [...list];
    this.setState({ products: data });
    console.log({ data });
    console.log(counter);
    console.log(text1);
  };
  render() {
    return (
      <div>
        <div style={{ width: "100%", backgroundColor: "gray" }}>
          <div
            style={{
              backgroundColor: "#f0f0f0",
              display: "flex",
              justifyContent: "center",
              padding: 10,
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <MyInput
                value={this.state.catagoryTitle}
                onChangeText={(text) => this.setState({ catagoryTitle: text })}
                width={200}
                title="Catagory title"
              />
              <MyButton
                onClick={this._handleAddCatagory}
                title="Add Catatory"
                className="btn btn-danger btn-sm"
              />
            </div>
            <div style={{ backgroundColor: "gray", width: "100%" }}>
              {this.state.catagories.map((singleCatagory) => (
                <SingleCatagoryItem
                  key={singleCatagory._id}
                  singleCatagory={singleCatagory}
                  handledelete={() => this.handledelete(singleCatagory._id)}
                  id={singleCatagory._id}
                  title={singleCatagory.title}
                  value={this.state.text}
                  onedit={() => this.edittext(singleCatagory._id)}
                  onsavetext={() =>
                    this.onsavetext(singleCatagory._id, this.state.text)
                  }
                  onChangeText={(e) => this.setState({ text: e })}
                />
              ))}
            </div>
          </div>
        </div>
        <div style={{ width: "100%", backgroundColor: "gray" }}>
          <div
            style={{
              backgroundColor: "#f0f0f0",
              display: "flex",
              justifyContent: "center",
              padding: 10,
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <MyInput
                value={this.state.productTitle}
                onChangeText={(text) => this.setState({ productTitle: text })}
                width={200}
                title="Product title"
              />
              <select
                onChange={(e) => {
                  this.setState({ selectedCatagory: e.target.value });
                  console.log(JSON.stringify(e.target.value));
                }}
              >
                <option value={null}>-Please Select--</option>
                {this.state.catagories.map((singleCatagory) => (
                  <option key={singleCatagory._id} value={singleCatagory._id}>
                    {singleCatagory.title}
                  </option>
                ))}
              </select>
              <MyButton onClick={this._handleAddProduct} title="Add Product" />
            </div>
            <div style={{ backgroundColor: "gray", width: "100%" }}>
              {this.state.products.map((singleProduct) => (
                <SingleProductItem
                  key={singleProduct._id}
                  getCatagoryTitleById={this.getCatagoryTitleById}
                  singleProduct={singleProduct}
                  deletingproduct={this.handledeleteproduct}
                  id={singleProduct._id}
                  onedit={() => this.editproducttext(singleProduct._id)}
                  onsavetext={() =>
                    this.onsaveproducttext(singleProduct._id, this.state.text1)
                  }
                  onChangeText={(e) => this.setState({ text1: e })}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
