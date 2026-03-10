import { NavLink, Outlet, useNavigate } from "react-router";
import { logoutUser } from "../api/api";
import "../css/Layout.css";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  return (
    <>
      <header className="App-header">
        <NavLink className="nav-link" to="/" end>
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/todo-list">
          ToDo List
        </NavLink>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2026 Anna Shynkar. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Layout;