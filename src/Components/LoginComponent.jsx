import { useState } from "react";
import { login, saveLoggedInUser, storeToken } from "../service/AuthService";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [userNameOrEmail, setUserNameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(userNameOrEmail, password)
      .then((response) => {
        console.log(response.data);

        const token = "Basic " + window.btoa(userNameOrEmail + ":" + password);
        storeToken(token);
        saveLoggedInUser(userNameOrEmail);
        navigate("/activities");

        window.location.reload(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">User Login Form</h2>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">
                    UsernameOrEmail
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="userNameOrEmail"
                      placeholder="Enter usernameOremail"
                      className="form-control"
                      value={userNameOrEmail}
                      onChange={(e) => setUserNameOrEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">Password</label>
                  <div className="col-md-9">
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group mb-3">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleLogin(e)}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
