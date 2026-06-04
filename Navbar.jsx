import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">

      <h2>GridVision AI</h2>

      <div>

        <Link to="/">Dashboard</Link>

        <Link to="/assets">Assets</Link>

        <Link to="/alerts">Alerts</Link>

        <Link to="/analytics">Analytics</Link>

      </div>

    </nav>
  );
}