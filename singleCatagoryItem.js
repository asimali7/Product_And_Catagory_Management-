import React from "react";
import MyButton from "./myButton";

const SingleCatagoryItem = (props) => {
  const onChangeText = props.onChangeText;
  const handledelete = props.handledelete;

  const onedit = props.onedit;
  const onsave = props.onsavetext;
  const singleCatagory = props.singleCatagory
    ? props.singleCatagory
    : {
        _id: "dummy catgagory id",
        title: "dummy catatgory title",
      };
  return (
    <div
      style={{
        height: 40,
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {singleCatagory.editingmode === true ? (
        <input
          type="text"
          defaultValue={singleCatagory.title}
          onChange={(e) => onChangeText(e.target.value)}
        />
      ) : (
        <span> {singleCatagory.title}</span>
      )}

      {/* <span>{singleCatagory.title}</span> */}

      {singleCatagory.editingmode === true ? (
        <MyButton width={40} height={30} title="Save" onClick={onsave} />
      ) : (
        <MyButton width={40} height={30} title="Edit" onClick={onedit} />
      )}

      <MyButton width={60} height={30} title="Delete" onClick={handledelete} />
    </div>
  );
};
export default SingleCatagoryItem;
