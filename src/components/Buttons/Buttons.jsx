import React from "react";

const Buttons = ({ value }) => {
  return (
    <button
      style={{
        color: "white",
        fontSize: "14px",
        backgroundColor: "#2AA8FF",
        height: "40px",
        padding: "20px",
        border: "none",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {value}
    </button>
  );
};

export default Buttons;
