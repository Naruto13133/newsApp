import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Utils/Authentication/Auth";
const Login = () => {
  const logoutUser = () => {
    logout();
  };
  const navigate = useNavigate();
  const [userId, setUserId] = React.useState("");
  const [password, sePassword] = React.useState("");
  const [newuser, setUser] = React.useState();
  const { login, logout, user } = useAuth();
  const setUSer = () => {
    setUser({
      userId,
      password,
    });
    login(newuser);
    navigate("/");
  };
  let jsx;
  if (user === null) {
    jsx = (
      <div>
        <h5>USer Id:</h5>
        <input
          className="border-2"
          type="text"
          placeholder="Enter user id"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        ></input>
        <h5>Password:</h5>
        <input
          className="border-2"
          type="password"
          placeholder="Enter Password"
        ></input>
        <br></br>
        <br></br>
        <button onClick={setUSer} className="bg-red-600 ">
          Submit
        </button>
      </div>
    );
  } else {
    jsx = (
      <div>
        <button onClick={logoutUser}>LogOut</button>
      </div>
    );
  }

  return jsx;
};

export default Login;
