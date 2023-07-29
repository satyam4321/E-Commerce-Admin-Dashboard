import React, { useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavB = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <>
      {auth ? (
        <nav className="main-nav">
          <div className="logo">
            <h2>
              <span>E</span>xclsv
              <span>S</span>tore
            </h2>
          </div>
          <div className="menu-link">
            <ul>
              <li>
                <NavLink to="/">Search Product</NavLink>
              </li>
              <li>
                <NavLink to="/add">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/select">Update Product</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/signup" onClick={logout}>
                  Logout({JSON.parse(auth).name})
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        // <Navbar bg="dark" variant="dark">
        <nav className="main-nav2">
          <div className="logo">
            <h2>
              <span>E</span>xclsv
              <span>S</span>tore
            </h2>
          </div>
          <div className="menu-link2">
            <ul>
              {/* <li>
            <NavLink to="/home">CXB</NavLink>
            </li> */}

              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        // <Container>
        //   <NavLink to="/home">CXB</NavLink>
        //   <Nav variant="tabs">
        //     <NavLink to="/signup">Sign Up</NavLink>
        //     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        //     <NavLink to="/login">Login</NavLink>
        //   </Nav>
        // </Container>
        // </Navbar>
      )}
    </>
  );
};

export default NavB;
