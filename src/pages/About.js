import { Link } from 'react-router';
const About = () => {
    return (
        <>
            <h1>About Page</h1>
            <p>This application is a simple ToDo List built with React. <br></br>
            It allows users to create, edit, and manage their tasks efficiently. <br></br>
            The app utilizes React Router for navigation between different pages, including Home, About, and the ToDo List itself.</p>
            <p>Technologies used in this project include:</p>
            <ul style={{ backgroundColor: "lightblue", padding: "10px", borderRadius: "5px", width: "200px", margin: "0 auto", marginBottom: "50px", listStyle:"none" }}>
                <li>1 - React</li>
                <li>2 - React Router</li>
                <li>3 - CSS for styling</li>
            </ul>
            <p>Socials:
                <Link to="https://github.com/AnnaShunkar" target="_blank" rel="noopener noreferrer">GitHub</Link> | 
                <Link to="https://www.linkedin.com/in/anna-shunkar-44039b3b2/" target="_blank" rel="noopener noreferrer">LinkedIn</Link> |
                <Link to="https://www.instagram.com/a.shynkar/" target="_blank" rel="noopener noreferrer">Instagram</Link> |
                <Link to="https://djinni.co/q/9e0531841e/" target="_blank" rel="noopener noreferrer">Gjinni</Link>|</p>
        </>
    )
};
export default About;