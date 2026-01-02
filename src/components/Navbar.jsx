import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">BlueBrink</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/search">Properties</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
