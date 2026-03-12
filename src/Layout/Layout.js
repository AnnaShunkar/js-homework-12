import "../css/Layout.css";
import { NavLink, Outlet, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";


const Layout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      <header className="App-header">
        <NavLink className="nav-link" to="/" end>Home</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
        <NavLink className="nav-link" to="/todo-list">ToDo List</NavLink>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
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