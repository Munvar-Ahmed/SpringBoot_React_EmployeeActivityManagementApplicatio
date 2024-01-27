import ActivityComponent from "./Components/ActivityComponent";
import FooterComponent from "./Components/FooterComponent";
import HeaderComponent from "./Components/HeaderComponent";
import ListActivityComponent from "./Components/ListActivityComponent";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterComponent from "./Components/RegisterComponent";
import LoginComponent from "./Components/LoginComponent";
import { isUserLoggedIn } from "./service/AuthService";

const App = () => {
  const AuthenticatedRoute = ({ children }) => {
    const isAuth = isUserLoggedIn();

    if (isAuth) {
      return children;
    }
    return <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route
          path="/activities"
          element={
            <AuthenticatedRoute>
              <ListActivityComponent />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/add-activity"
          element={
            <AuthenticatedRoute>
              <ActivityComponent />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/update-activity/:id"
          element={
            <AuthenticatedRoute>
              <ActivityComponent />
            </AuthenticatedRoute>
          }
        />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>

      <FooterComponent />
    </BrowserRouter>
  );
};

export default App;
