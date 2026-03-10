import { Link } from 'react-router';
const NotFoundPage = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', backgroundColor:"red", padding:"10px", borderRadius:"10px"}}>This page is not found.</h1>
            <Link style={{ color: "red" }} to="/">Press to go to Home</Link>
        </div>
    )
}
export default NotFoundPage;