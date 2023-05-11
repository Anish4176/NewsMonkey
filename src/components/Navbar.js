import React, { Component } from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
      <div className="container-fluid ">
        <Link className="navbar-brand text-danger " style={{ fontWeight: "bold", fontSize: "1.5rem" }} to="/">NewsMonkey</Link>
        <button className="navbar-toggler" style={{ borderColor: "white" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link text-white" to="/business">Business</Link>
            <Link className="nav-link text-white" to="/entertainment">Entertainment</Link>
            <Link className="nav-link text-white" to="/health">Health</Link>
            <Link className="nav-link text-white" to="/science">Science</Link>
            <Link className="nav-link text-white" to="/sports">Sports</Link>
            <Link className="nav-link text-white" to="/technology">Technology</Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar