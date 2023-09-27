import { Link } from "react-router-dom";
import "../css/Login.css";
export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label htmlFor="">Email</label>
        <input type="text" className="loginInput" placeholder="Email" />

        <label htmlFor="">Password</label>
        <input type="password" className="loginInput" placeholder="Password" />

        <button className="loginbutton">Login</button>
        <button className="loginregisterbutton">
          <Link to="/register">Register</Link>
        </button>
      </form>
    </div>
  );
}
