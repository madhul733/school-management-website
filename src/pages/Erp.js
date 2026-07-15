import React from "react";
import { Link } from "react-router-dom";
import imgsrc from "../assets/PHOTO-2026-03-07-23-51-58.jpg";
const ERP = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left Side */}
      <div
        style={{
          flex: 1,
          background:
            "linear-gradient(rgba(0,33,71,.75), rgba(0,33,71,.75)), url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "80px",
            color: "#fff",
          }}
        >
         <img
  src={imgsrc}
  alt="School Logo"
  style={{
    width: "220px",
    background: "#fff",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "25px",
  }}
/>

          <h1
            style={{
              fontSize: "52px",
              lineHeight: "60px",
              marginBottom: "20px",
            }}
          >
            Cambridge International School
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "30px",
              maxWidth: "600px",
            }}
          >
            Excellence in Education. Access student, parent,
            teacher and administration services through our
            secure ERP portal.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <span
              style={{
                background: "rgba(255,255,255,.15)",
                padding: "10px 18px",
                borderRadius: "25px",
              }}
            >
              ✓ Student Portal
            </span>

            <span
              style={{
                background: "rgba(255,255,255,.15)",
                padding: "10px 18px",
                borderRadius: "25px",
              }}
            >
              ✓ Parent Access
            </span>

            <span
              style={{
                background: "rgba(255,255,255,.15)",
                padding: "10px 18px",
                borderRadius: "25px",
              }}
            >
              ✓ Teacher Dashboard
            </span>

            <span
              style={{
                background: "rgba(255,255,255,.15)",
                padding: "10px 18px",
                borderRadius: "25px",
              }}
            >
              ✓ Secure Login
            </span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div
        style={{
          width: "500px",
          background: "#f8f9fc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            background: "#fff",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 10px 35px rgba(0,0,0,.12)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#002147",
              marginBottom: "10px",
            }}
          >
            ERP Login Portal
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: "30px",
            }}
          >
            Login to continue
          </p>

          <select
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          >
            <option>Student</option>
            <option>Parent</option>
            <option>Teacher</option>
            <option>Admin</option>
          </select>

          <input
            type="text"
            placeholder="Username"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          />

          <button
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              background: "#002147",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Login
          </button>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
            }}
          >
            <a
              href="#"
              style={{
                color: "#0d6efd",
                textDecoration: "none",
              }}
            >
              Forgot Password?
            </a>
          </div>

          <Link
            to="/"
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "25px",
              textDecoration: "none",
              color: "#002147",
              fontWeight: "600",
            }}
          >
            ← Back To Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ERP;