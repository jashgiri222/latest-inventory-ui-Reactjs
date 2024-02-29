import React from "react";
import { getItem, getItemById, updateItems } from "./Apiservice";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UpdateItem() {

  const [item, setItem] = useState({
    itemCode: "",
    itemName: "",
    category: "",
    quantity: "",
    status: ""
  });

  let id;
  const navigate = useNavigate();
  function cancel() {
    navigate("/home");
  }

  useEffect(() => {
    getId();
  }, []);

  function getId() {
    id = getItem();
    console.log("id", id);
    getData(id);
  }
  function getData(id) {
    axios.get(`http://localhost:9090/item/finditem/${id}`).then((resp) => {
      console.log("Resp in Update", resp.data);
      setItem(resp.data);
    });
  }

  function handleSubmit(e) {
    setItem({ ...item, [e.target.name]: e.target.value });
    console.log(item);
  }

  function submitForm(e) {
    e.preventDefault();

    // Extract the item ID from the state
    const itemId = item.itemId;

    // Make PUT request to update the item record
    axios
      .put(`http://localhost:9090/item/updateitem/${itemId}`, item, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "JWT fefege...",
        },
      })
      .then((resp) => {
        console.log("Item updated successfully:", resp.data);
        navigate("/home"); // Navigate back to home page after successful update
      })
      .catch((error) => {
        console.error("Error updating item:", error);
        // Handle error appropriately (e.g., show error message to user)
      });
  }
  return (
    <>
      <div className="App">
        <h2 style={{ color: "Highlight" }}>Update Item </h2>
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
            value={item.itemCode}
            onChange={handleSubmit}
          ></input>
          <br></br>
          <br></br>
          <label>Item Name : </label>
          <input
            type="text"
            name="itemName"
            value={item.itemName}
            onChange={handleSubmit}
          ></input>
          <br></br>
          <br></br>
          <label>Category : </label>
          <input
            type="text"
            name="category"
            value={item.category}
            onChange={handleSubmit}
          ></input>
          <br></br>
          <br></br>
          <label>Quantity : </label>
          <input
            type="text"
            name="quantity"
            value={item.quantity}
            onChange={handleSubmit}
          ></input>
          <br></br>
          <br></br>
          <label>Status : </label>
          <input
            type="text"
            name="status"
            value={item.status}
            onChange={handleSubmit}
          ></input>
          <br></br>
          <br></br>
          <button className="btn btn-info">Add </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <button className="btn btn-info" onClick={cancel}>
            Cancel
          </button> */}
        </form>
      </div>
    </>
  );
}
