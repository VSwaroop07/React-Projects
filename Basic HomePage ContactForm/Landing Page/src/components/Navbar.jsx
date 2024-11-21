const Navbar = () =>{
    return (
        <nav className="nav-container">
        <div className="Logo">
          <img src="Images/brand_logo.png" alt="Brand-Logo"/>
        </div>

        <ul>
          <li>Home</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button className="btn-log">Login</button>
      </nav>
    )
}

export default Navbar;