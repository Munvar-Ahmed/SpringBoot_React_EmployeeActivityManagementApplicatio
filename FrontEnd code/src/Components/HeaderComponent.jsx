import { NavLink, useNavigate } from "react-router-dom";
import { isUserLoggedIn, logout } from "../service/AuthService";

const HeaderComponent = () => {
  const isAuth = isUserLoggedIn();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="/activities" className="navbar-brand">
              Employee - Activity Management Application
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {isAuth && (
                <li className="nav-item">
                  <NavLink to="/activities" className="nav-link">
                    Activities
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <ul className="navbar-nav">
            {!isAuth && (
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
            )}
            {!isAuth && (
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            )}

            {isAuth && (
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-link"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
