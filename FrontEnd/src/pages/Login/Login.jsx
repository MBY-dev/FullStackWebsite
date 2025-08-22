
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Login = () => {

  const {login}= useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
      navigate("/");
   ;}
  return (
    <>
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Hello Word</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              temporibus nemo delectus officiis tempora?
            </p>
            <span>Dont you have an account</span>
            <Link to="/register">
                <button>Register</button>
            </Link>
        
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="userName" />
              <input type="password" placeholder="Password" />
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
