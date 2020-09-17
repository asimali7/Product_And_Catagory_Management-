import React from "react";

const MyButton = (props) => {
  const title = props.title ? props.title : "No Title";
  const width = props.width ? props.width : 100;
  const height = props.height ? props.height : 40;

  const onClick = props.onClick
    ? props.onClick
    : () => console.log(`TEST: Clicking ${title}`);
  return (
    <div
      onClick={onClick}
      style={{
        width,
        height,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <span>{title}</span>
    </div>
  );
};

export default MyButton;
