import React, { useState } from "react";
import { useNavigate } from "react-router";
import { validateUser } from "./Apiservice";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function registerUser() {
    navigate("/register");
  }
  function submitLogin(e) {
    e.preventDefault()
    const inputData = {
      userName,
      password,
    }
    console.log("onSubmit Login Data", inputData);

    validateUser(inputData).then(resp=>{
      console.log("Response in Component ",resp.data)
       if(resp.data===true){
        navigate('/home')
       }
       else{
        alert("Invalid Credeantials!!")
       }
      
    })

  }

  return (
    <>
      <div className="App">
        <h2 style={{ color: "Highlight" }}>Login</h2>
      </div>
      <div className="formbg">
        <form style={{ textAlign: "center" }} onSubmit={submitLogin}>
          <label>User Name :</label>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <label>Password :</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <button className="btn btn-info">Login</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn btn-info" onClick={registerUser}>
            Register
          </button>
          <br></br>
        </form>
      </div>
    </>
  );
}

export default Login;
