import { NavLink } from "react-router-dom";

function Navbar() {
  const storedUser = JSON.parse(localStorage.getItem("email"));

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-brand">
        <h4>My URLs</h4>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse mr-auto"
        id="navbarNav"
        style={{ float: "left" }}
      >
        <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
          <li className="nav-item">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
          </li>
          {storedUser ? (
            <li className="nav-item">
              <NavLink to={"/logout"} className="nav-link">
                Logout
              </NavLink>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <NavLink to={"/signup"} className="nav-link">
                  Signup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/login"} className="nav-link">
                  Login
                </NavLink>
              </li>
            </>
          )}
          <li className="nav-item">
            <NavLink to={"/dashboard"} className="nav-link">
              URLs Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
