import { useState } from "react";
import { registerUser } from "../service/AuthService";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegistrationForm = (e) => {
    e.preventDefault();
    const register = { name, userName, email, password };
    console.log(register);

    registerUser(register)
      .then((response) => {
        console.log(response.data);
        navigate("/");
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
              <h2 className="text-center">User Registration Form</h2>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">Name</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">UserName</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="UserName"
                      placeholder="Enter username"
                      className="form-control"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">Email</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                    onClick={(e) => handleRegistrationForm(e)}
                  >
                    Submit
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

export default RegisterComponent;
