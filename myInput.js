import React from "react";

const MyInput = (props) => {
  const title = props.title ? props.title : "No Title";
  const value = props.value ? props.value : "";
  const width = props.width ? props.width : 100;
  const height = props.height ? props.height : 40;

  const onChangeText = props.onChangeText
    ? props.onChangeText
    : (text) => console.log(`TEST onChangeText ${title} VALUE: ${text}`);
  return (
    <input
      onChange={(e) => onChangeText(e.target.value)}
      placeholder={title}
      value={value}
      style={{
        width,
        height,
        borderRadius: 10,
        fontSize: 15,
        padding: 5,
      }}
      type="text"
    />
  );
};
export default MyInput;
