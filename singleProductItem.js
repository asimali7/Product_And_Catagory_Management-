import React from "react";
import MyButton from "./myButton";
const SingleProductItem = (props) => {
  const onChangeText = props.onChangeText;

  const onedit = props.onedit;
  const onsave = props.onsavetext;
  const singleProduct = props.singleProduct
    ? props.singleProduct
    : {
        _id: "dummy product id",
        title: "dummy product title",
        catagoryId: "abc",
      };
  const catagoryTitle = props.getCatagoryTitleById
    ? props.getCatagoryTitleById(singleProduct.catagoryId)
    : "invalid catagory";
  return (
    <div
      style={{
        height: 40,
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {singleProduct.editingmode === true ? (
        <input
          type="text"
          defaultValue={singleProduct.title}
          onChange={(e) => onChangeText(e.target.value)}
        />
      ) : (
        <div>
          <span>{singleProduct.title}</span>|<span>{`(${catagoryTitle})`}</span>
        </div>
      )}
      {singleProduct.editingmode === true ? (
        <MyButton width={40} height={30} title="save" onClick={onsave} />
      ) : (
        <MyButton width={40} height={30} title="Edit" onClick={onedit} />
      )}

      <MyButton
        onClick={() => props.deletingproduct(props.id)}
        width={60}
        height={30}
        title="Delete"
      />
    </div>
  );
};
export default SingleProductItem;
