import "../css/Register.css";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label htmlFor="">User Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username"
        />

        <label htmlFor="">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email"
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your Password"
        />

        <button className="registerbutton">Register</button>
        <button className="registerloginbutton">
          <Link to="/login">Login</Link>
        </button>
      </form>
    </div>
  );
}
