import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { deleteItemByItemId, getAllItems, setItem } from "./Apiservice";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  useEffect(() => {
    getlistItem();
  }, []);

  function addItem(e) {
    navigate("/additem");
  }

  const getlistItem = () => {
    getAllItems()
      .then((response) => {
        setItems(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteItem = (itemId) => {
    console.log(itemId);
    deleteItemByItemId(itemId)
      .then((response) => {
        console.log("Deleted Items", response);
        getAllItems();
        alert("Do you want to delete the Item? ");
        refreshPage();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function refreshPage() {
    window.location.reload(false);
  }

  function updateItem(id){
   console.log("Update function called ",items);
    setItem(id)
    navigate('/update')

  }

  return (
    <div className="container" style={{ backgroundColor: "blanchedalmond" }}>
      <Header />
      {/* <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Employee </Link> */}

      <table className="table table-bordered table-striped">
        {/* <thead className="table-dark"> */}
        <thead>
          <tr>
            <th> Select</th>
            <th> Item Code </th>
            <th> Item Name</th>
            <th> Category</th>
            <th>Quantity </th>
            <th> Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((data) => (
            <tr>
              <td key={data.id}>
                <input type="checkbox" name=" " value=" " />
              </td>
              <td>{data.itemCode} </td>
              <td>{data.itemName}</td>
              <td>{data.category}</td>
              <td>{data.quantity}</td>
              <td>{data.status}</td>
              <td>
                <button
                  className="btn btn-success"
                  style={{ marginLeft: "10px" }}
                  onClick={addItem}
                >
                  {" "}
                  Add
                </button>
                <button className="btn btn-info" style={{ marginLeft: "10px" }}
                
                onClick={()=>updateItem(data.itemId)}
                >
                  {" "}
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                  onClick={() => deleteItem(data.itemId)}
                >
                  {" "}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default Home;
