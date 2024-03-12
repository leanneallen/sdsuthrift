import './NavBar.css'; // Import the CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">Listings</a></li>
        <li className="nav-item"><a href="#">Login</a></li>
        <li className="nav-item"><a href="#">Support</a></li>
        <li className="nav-item"><a href="#">Create Listing</a></li>
        <li className="nav-item"><a href="#">Create Account</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
