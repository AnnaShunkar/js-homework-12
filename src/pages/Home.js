import { Link } from "react-router";
const Home = () => {
    return (
        <>
            <h1>Home Page</h1>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                marginBottom: "40px"
            }}>
            <h2>Welcome to the <span style={{color:"lightskyblue"}}>ToDo List App</span>!</h2>
            <p>The world bring you to app "ToDo List".</p>
            <p>Here you can manage your tasks, planning, and organization.</p>
                <p>Get started by creating your first todo item!</p>
            <p>Click the button below and enjoy!)</p>
            </div>
            <Link to="/todo-list" style={{
                backgroundColor: 'lightseagreen',
                color: 'white', border: 'none',
                padding: '10px 20px', borderRadius: '5px',
                width: "150px", fontSize: '16px', cursor: 'pointer',
                margin: "0 auto", marginBottom: "30px",
                textDecoration: 'none'
            }}>Get Started</Link>
        </>
    )
};
export default Home;