import axios from "axios";
import { useNavigate } from "react-router-dom";
import Endpoint from "../utils/api-endpoint";
import { useEffect, useState } from "react";
import { Button, FormContainer } from "../components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    axios
      .post(Endpoint.login, {
        username: username,
        password: password,
      })
      .then((res) => {
        const getToken = res.data.data.token;
        console.log(getToken);
        localStorage.setItem("token", getToken);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div className="mt-[20vh]">
      <FormContainer>
        <h1 className="text-center">Form Login</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center justify-center gap-4 p-10">
          <div>
            <label>Username: </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Password: </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="flex mt-5 gap-5">
            <Button name="Login" />
            <Button name="Register" link="/register" />
          </div>
        </form>
      </FormContainer>
    </div>
  );
};

export default Login;
