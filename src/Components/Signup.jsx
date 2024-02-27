import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { registerUser } from "./Apiservice";




function Signup() {

  const formData = {

    "firstName":"",
    "lastName":"",
    "userName":"",
    "password":"",
    "dob":""

  };
  const [inputData, setInputData] = useState(formData);
  const [status,setStatus]=useState("");
  const navigate = useNavigate();

  function cancel() {
    document.getElementById("register-form").reset();
  }
  function handleInput(e){
    setInputData({ ...inputData, [e.target.name]: e.target.value })
    console.log(inputData)
  }
  
  
  function submitForm(e) {
    e.preventDefault()
    if(!inputData.firstName || !inputData.lastName || !inputData.userName || !inputData.password || !inputData.dob){
      alert("All Fields Are Mandotary!!")
    }else {
    console.log("submit input Data",inputData)
    console.log("Calling Api in component")
    registerUser(inputData).then(resp=>{
      setStatus(resp.status)
      console.log("Response in Component ",resp.status)
      alert("Success!!") 
      navigate('/login')
    })

    
  } 
  }


  return (
    <>
      <div className="App">
        <h2 style={{ color: "Highlight" }}>New User Enrollment</h2>
      </div>
      <div className="formbg">
        <form
          style={{ textAlign: "center" }}
          id="register-form"
          
          onSubmit={submitForm}
        >
          <label>First Name :</label>
          <input type="text" name="firstName" value={inputData.firstName} onChange={handleInput}></input>
          <br></br>
          <br></br>
          <label>Last Name :</label>
          <input type="text" name="lastName" value={inputData.lastName} onChange={handleInput}></input>
          <br></br>
          <br></br>
          <label>User Name :</label>
          <input type="text" name="userName" value={inputData.userName} onChange={handleInput}></input>
          <br></br>
          <br></br>
          <label>Password :</label>
          <input type="password" name="password"  value={inputData.password} onChange={handleInput}></input>
          <br></br>
          <br></br>
          <label>DOB :</label>
          <input type="date" name="dob" value={inputData.dob} onChange={handleInput}></input>
          <br></br>
          <br></br>
          <button className="btn btn-info">Add User</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn btn-info" onClick={cancel}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
