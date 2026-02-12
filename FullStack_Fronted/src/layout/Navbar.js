import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand mb-0 h1" to={'/'}>𝓕𝓾𝓵𝓵 𝓢𝓽𝓪𝓬𝓴 </Link>
 </div>

 <Link to="/adduser" className = "btn btn-outline-light" >Add User</Link>
</nav>




    </div>
  )
}

export default Navbar
