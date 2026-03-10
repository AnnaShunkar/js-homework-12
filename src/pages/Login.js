import { useState } from "react";
import { loginUser } from "../api/api";
import { useNavigate } from "react-router";
import "../css/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

 
    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !email.trim()) {
      setError("Будь ласка, заповніть усі поля!");
      return;
    }

    try {
      await loginUser(username, email);
      navigate("/about");
    } catch (err) {
      setError("Помилка входу. Спробуйте ще раз.");
    }
  };


  return (
    <>
      <h2 className="login">LOGIN</h2>
      <p className='description'>Set your name and email to continue</p>
      {error && <p className="error-message">{error}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <input className="input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="button" type="submit">Login</button>

      </form>
    </>
  );
};

export default Login;