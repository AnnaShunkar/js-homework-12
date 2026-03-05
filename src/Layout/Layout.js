import { Outlet, NavLink } from 'react-router';

const Layout = () => {
    return (
        <>
            <header className="App-header">
                <NavLink style={{textDecoration: 'none', color:"black", backgroundColor:"lightskyblue", borderRadius:"10px", padding:"10px"}} to="/">Home</NavLink>
                <NavLink style={{textDecoration: 'none', color:"black", backgroundColor:"lightskyblue", borderRadius:"10px", padding:"10px"}} to="/about">About</NavLink>
                <NavLink style={{textDecoration: 'none', color:"black", backgroundColor:"lightskyblue", borderRadius:"10px", padding:"10px"}} to="/todo-list">ToDo List</NavLink>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>© 2026 Anna Shynkar. All rights reserved.</p>
            </footer>
        </>
    )
};
export default Layout;