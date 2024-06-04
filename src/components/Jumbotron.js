import React from "react";
import react, { useState } from "react";

const insideStyle = {
  backgroundColor: "#4b1246",
  borderRadius: "15px",
  color: "#f3aeed",
  display: "inline-block",
  float: "none",
  fontSize: "18px",
  textDecoration: "none",
  padding: " 10px 250px",
  margin: "60px 0 30px ",
};
const outsideStyle = {
  backgroundColor: "#4b1246",
  borderRadius: "15px",
  color: "#f3aeed",
  display: "inline-block",
  float: "none",
  fontSize: "18px",
  textDecoration: "none",
  margin: "20px 10px 10px ",
  padding: " 10px 25px",
};
const jumboStyle = {
  backgroundColor: "#fff",
  fontFamily: "arial, sans-serif",
  display: "block",
  border: "2px solid #9b7e96",
  borderRadius: "15px",
  boxShadow: "0 4px 8px #0000001a",
  margin: "50px",
  padding: "100px",
  textAlign: "center",
};

export default function Jumbotron() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div class="container">
        <div fluid className="bg-white text-#3b1d3a" style={jumboStyle}>
          <div className="jumbotron">
            <h2>
              <strong>Welcome to My React App</strong>
            </h2>
            <p>
              This is a basic Jumbotron.You can personalize it
              <strong> however</strong> you want!
            </p>
            <p>
              This is a simple React app with a navbar,jumbotron,sign-in(using
              Firebase), and about pages.
            </p>
            <p class="lead">
              <button
                style={insideStyle}
                onClick={() => {
                  alert("Button Clicked!");
                }}
              >
                Click Me!
              </button>
            </p>
          </div>
        </div>

        <div fluid className="bg-white text-#3b1d3a" style={jumboStyle}>
          <div className="jumbotron">
            <h2>
              <strong>Counter:{count}</strong>
            </h2>

            <p class="lead">
              {" "}
              <button style={outsideStyle} onClick={increaseCount}>
                {" "}
                Increment
              </button>
              <button style={outsideStyle} onClick={decreaseCount}>
                Decrement
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
