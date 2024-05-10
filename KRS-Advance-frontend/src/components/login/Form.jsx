import React from "react";
import { useState } from "react";
import "./Form.css";
// import { useNavigate } from "react-router-dom";

export default function Form() {
  // const redirect = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const changeEmail = (e) => {
    // console.log(e.target.value)
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = () => {
    console.log(email,password);
  }

  return (
    <div className="loginForm">
      <div className="heading">
        <div className="mainHeading">👋 Welcome to Explore-Universe</div>
        <div className="subHeading">
          Today is a new day. It's your day. You shape it.
          <br />
          Sign in to start exploring the universe.
        </div>
      </div>
      <div className="formInputs">
        <div className="input">
          <label htmlFor="inputEmail">Email</label>
          <input 
          type="email" 
          id="inputEmail" 
          placeholder="Example@email.com"
          value={email}
          onChange={changeEmail} />
        </div>
        <div className="input">
          <label htmlFor="inputPass">Password</label>
          <input
            type="password"
            id="inputPass"
            placeholder="At least 8 characters"
            value={password}
            onChange={changePassword}
          />
        </div>
        <div className="forgetPass">
          <div></div>
          <div className="forgetPass">Forgot Password?</div>
        </div>
        <div className="signIn">
          <button onClick={submit}>Sign In</button>
        </div>
      </div>
      <div className="newAcc">
        Don't you have an account?
        <span
          className="highlighted"
          // onClick={() => {
          //   redirect("/signUp");
          // }}
        >
          {" "}
          Sign up
        </span>
      </div>
      <div className="copyright">© 2023 ALL RIGHTS RESERVED</div>
    </div>
  );
}