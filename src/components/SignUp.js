import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithGooglePopup } from "./Firebase";

export default function SignUp() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account Created");
    } catch (err) {
      console.log(err);
    }
  };

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        <strong>Sign In</strong>
      </h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">SIGN IN</button>
        <p></p>
        <p>OR</p>
        <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE</button>
        <Link to="/">
          <button>LOG OUT</button>
        </Link>
      </form>
    </div>
  );
}
