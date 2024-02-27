import React from "react";

function Footer() {
  var currentdate = new Date();
  var date =
    currentdate.getDate() +
    "-" +
    (currentdate.getMonth() + 1) +
    "-" +
    currentdate.getFullYear();

  var time =
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  return (
    <table>
    <footer className="App">
      <p className="textBorder">
        <h6>
        Copyright &copy; {date} &nbsp; {time}
        </h6>
      </p>
    </footer>
    </table>
  );
}

export default Footer;
