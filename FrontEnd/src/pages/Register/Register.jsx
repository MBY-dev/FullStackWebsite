import "./Register.scss";
import { Link } from "react-router-dom";
const  Register = () => {
  return (
      <div className="register">
        <div className="card">
          <div className="left">
            <h1>Lama Social.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              temporibus nemo delectus officiis tempora?
            </p>
            <span>Dont you have an account</span>
             <Link to="/login">
                <button>Login in</button>
            </Link>
          </div>
          <div className="right">
            <h1>Register</h1>
            <form>
              <input type="text" placeholder="name" />
              <input type="email" placeholder="eMail" />
              <input type="text" placeholder="userName" />
              <input type="password" placeholder="Password" />
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Register;