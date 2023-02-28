import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (<>
  <nav class="navbar navbar-expand-lg navbar-light static-top" >
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="https://mobirise.com/extensions/housem5/architecture-bureau/assets/images/logo.png" alt="..." height="36"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
        <NavLink to="/home" activeClassName="active"> Home </NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/services" activeClassName="active"> Services </NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/" activeClassName="active"> Shop  </NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/cart" activeClassName="active">
           <ShoppingCart size={30} /> </NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/contact" activeClassName="active"> Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav> 
</>
  );
};
