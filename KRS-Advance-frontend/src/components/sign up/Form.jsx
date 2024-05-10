import { useState } from "react";
import React from "react";
// import { useNavigate } from "react-router-dom";

import "./Form.css";

export default function Form() {
  // const redirect = useNavigate();
  const[name,setName] = useState("")
  const [nameErr,setNameErr]=useState("")

  const changeName = (e) =>{
    setName(e.target.value);
  }
  
  const[image,setImage] = useState("")
  const [imageErr,setImageErr] = useState("")

  const changeImage = (e) =>{
    setImage(e.target.value);
  }

  const[email,setEmail] = useState("")

  const changeEmail = (e) =>{
    setEmail(e.target.value);
  }

  const[password,setPassword] = useState("")

  const changePassword = (e) =>{
    setPassword(e.target.value);
  }

  const[confirmPass,setConfirm] = useState("")

  const changeConfirm = (e) =>{
    setConfirm(e.target.value);
  }

  const[phone,setPhone] = useState("")

  const changePhone = (e) =>{
    setPhone(e.target.value);
  }

  const[date,setDate] = useState("")

  const changeDate = (e) =>{
    setDate(e.target.value);
  }

  const submit = (e) =>{
    if(name===""){
      setNameErr("Error 404")
    }

    if(name==="")


    console.log("Name="+ name);
    console.log("Image Link="+ image);
    console.log("Email="+ email);
    console.log("Password="+ password);
    console.log("Confirm Password="+ confirmPass);
    console.log("Telephone Number="+ phone);
    console.log("Date ="+ date);
  }
  return (
    <div className="signUpForm">
      <div className="formHeading">
        <div className="formMainHeading">👋 Hey there, newbie</div>
        <div className="formSubHeading">
          Signup with us to learn and explore the Universe.
        </div>
      </div>
      <div className="form">
        <div className="inputSignUp">
          <label htmlFor="formName">Name</label>
          <input type="text" 
          id="formName" 
          placeholder="Full Name"
          value={name}
          onChange={changeName}
          />
          <div class="error" id="nameErr">{nameErr}</div>
        </div>
        <div className="inputSignUp">
          <label htmlFor="formImage">Upload Image</label>
          <input 
          type="text" 
          id="formImage" 
          placeholder="Image Link"
          value={image}
          onChange={changeImage}
          />
          <div class="error" id="imageErr">{}</div>
        </div>
        <div className="inputSignUp">
          <label htmlFor="formEmail">Email</label>
          <input
            type="email"
            id="formEmail"
            placeholder="Eg: example@gmail.com"
            value={email}
            onChange={changeEmail}
          />
          <div class="error" id="nameErr"></div>
        </div>
        <div className="inputSignUp">
          <label htmlFor="formPass">Enter Password</label>
          <input
            type="password"
            id="formPass"
            placeholder="At least 8 characters"
            value={password}
            onChange={changePassword}
          />
          <div class="error" id="nameErr"></div>
        </div>
        <div className="inputSignUp">
          <label htmlFor="formRePass">Re-enter Password</label>
          <input
            type="password"
            id="formRePass"
            placeholder="At least 8 characters"
            value = {confirmPass}
            onChange={changeConfirm}
          />
          <div class="error" id="nameErr"></div>
        </div>
        <div className="inputSignUp">
          <label htmlFor="formPhone">Phone</label>
          <input type="number" 
          id="formPhone" 
          placeholder="Eg: 1234567890"
          value={phone}
          onChange={changePhone}
          />
          <div class="error" id="nameErr"></div>
        </div>
        <div className="inputSignUp" id="date">
          <label htmlFor="formDOB">Birth Date</label>
          <input type="date" 
          id="formDOB" 
          value={date}
          onChange={changeDate}
          />
          <div class="error" id="nameErr"></div>
        </div>
        <button className="signUp" onClick={submit}>
          Sign Up</button>
      </div>
      <div className="existing">
        Already have an account?
        <span
          className="highlighted"
          onClick={() => {
            redirect("/login");
          }}
        >
          {" "}
          Sign in
        </span>
      </div>
      <div className="copyright">© 2023 ALL RIGHTS RESERVED</div>
    </div>
  );
} 