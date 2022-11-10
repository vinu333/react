import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar(){
return <nav className="navbar bg-danger container">
<h4><Link className="Link" to="/">Home</Link></h4>
<h4><Link className="Link" to="/notes">Notes</Link></h4>
<h4><Link className="Link" to="/create">Create Notes</Link></h4>
</nav>
}

export default Navbar;
