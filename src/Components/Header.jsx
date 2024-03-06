import React from "react";
import { Link } from "react-router-dom";

function Header() {
    

    


  return (
    <>
      <table>
        <header>
        <img src="download.jpg" alt="system" height="100" align="left"></img>

          <div align="right">
            <img src="icons8-user-90.png" alt="User" height="40"></img>

            <h5><Link  Link to="/logout">Logout</Link></h5>
          </div>
          <h2 style={{ textAlign: "center",color:"green" }}>Inventory Application</h2>
        </header>
      </table>
    </>
  );
}

export default Header;
