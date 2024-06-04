import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const myStyle = {
    backgroundImage:
      "url(https://lean-in-mentorship.vercel.app/static/media/Cherry_Blossoms_1-scaled.58da32fa4e845656bc01.webp)",
    backgroundSize: "cover",
    height: "140px",
    padding: "0  0 0 50px ",
    borderBottomRightRadius: "20px",
    borderBottomLeftRadius: "20px",
  };
  const btnStyle = {
    backgroundColor: " #522d47",
    borderRadius: "15px",
    color: "#f1c7e5",
    marginLeft: "40px",
    padding: "10px 30px",
    display: "flex",
    justifyContent: "right",
  };
  const eleStyle = {
    justifyContent: "right",
    padding: "120px 20px",
    marginLeft: "40px",
    height: "100vh",
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={myStyle}>
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={eleStyle}
          >
            <div className="elements">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    <button style={btnStyle}>Home</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    <button style={btnStyle}>About</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    <button style={btnStyle}>Sign In</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/flowers">
                    <button style={btnStyle}>Flowers</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
