import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate=useNavigate()

    function logOut(){
        navigate('login')
    }


  return (
    <>
      <table>
        <header>
        <img src="download.jpg" alt="system" height="100" align="left"></img>

          <div align="right">
            <img src="icons8-user-90.png" alt="User" height="40"></img>

            <h5><Link  Link to="/logout">Logout</Link></h5>
          </div>
          <h2 style={{ textAlign: "center" }}>Inventory Application</h2>
        </header>
      </table>
    </>
  );
}

export default Header;
