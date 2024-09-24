import { dividerClasses } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Buttons = ({ onClick, icon, value }) => {
  return (
    <button
      onClick={onClick}
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
      {icon ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchIcon />
          <p>{value}</p>
        </div>
      ) : (
        <p>{value}</p>
      )}
    </button>
  );
};

export default Buttons;
