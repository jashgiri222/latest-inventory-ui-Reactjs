import React, { useState } from "react";
import { addItems } from "./Apiservice";
import { useNavigate } from "react-router-dom";

export default function Additems() {
  const formData = {
    itemCode: "",
    itemName: "",
    category: "",
    quantity: "",
    status: "",
  };

  const [inputData, setInputData] = useState(formData);
  const [status, setStatus] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);
  const navigate = useNavigate();

  function cancel() {
    alert("cancell")
    document.getElementById("add-item").reset();
  }

  function handleInput(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData)
  }

  function submitForm(e) {
    e.preventDefault();

    if(!inputData.itemCode || !inputData.itemName || !inputData.category || !inputData.quantity  || !inputData.status ){
      alert("All Field Are Mandotary!!")

    }
    else{
    console.log("submit input Data", inputData);
    console.log("Calling Api in component");
    addItems(inputData).then((resp) => {
      setStatus(resp.status);
      alert("Item Added Successfully")
      console.log("Response in Component ", resp.status);
      navigate('/home')
    });
  }
  }
  

  return (
    <>
      <div className="App">
        <h2 style={{ color: "Highlight" }}>Add Item </h2>
      </div>
      <div className="formbg">
        <form
          style={{ textAlign: "center" }}
          id="add-item"
          onSubmit={submitForm}
        >
          <label>Item Code : </label>
          <input
            type="text"
            name="itemCode"
            value={inputData.itemCode}
            onChange={handleInput}
          ></input>
          <br></br>
          <br></br>
          <label>Item Name : </label>
          <input
            type="text"
            name="itemName"
            value={inputData.itemName}
            onChange={handleInput}
          ></input>
          <br></br>
          <br></br>
          <label>Category : </label>
          <input
            type="text"
            name="category"
            value={inputData.category}
            onChange={handleInput}
          ></input>
          <br></br>
          <br></br>
          <label>Quantity : </label>
          <input
            type="text"
            name="quantity"
            value={inputData.quantity}
            onChange={handleInput}
          ></input>
          <br></br>
          <br></br>
          <label>Status : </label>
          <input
            type="text"
            name="status"
            value={inputData.status}
            onChange={handleInput}
          ></input>
          <br></br>
          <br></br>
          <button className="btn btn-info">Add </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn btn-info" onClick={cancel}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
}
