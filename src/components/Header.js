import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div
      style={{
        background: "#686565",
        height: "50px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/erp-login"
          style={{
            color: "#d6cece",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          ERP LOGIN LINK
        </Link>

        <Link
          to="/public-disclosure"
          style={{
            color: "#d6cece",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          Mandatory Public Disclosure
        </Link>
      </div>
    </div>
  );
};

export default TopBar;