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
        alert("Success")
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
        <h2 style={{ color: "green" }}>Login</h2>
      </div>
      <div className="formbg1">
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
          <input style={{color:"Highlight"}}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <button className="btn btn-success">Login</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn btn-success" onClick={registerUser}>
            Register
          </button>
          <br></br>
        </form>
      </div>

      <marquee style={{color:"red"}}><strong>Note:</strong> If you don't have an account? Please click on Register Button.</marquee>
    </>
  );
}

export default Login;
