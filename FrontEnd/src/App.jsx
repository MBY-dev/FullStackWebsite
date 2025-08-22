import "./App.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate 
} from "react-router-dom";
import "./styles/themeMixin.scss";

import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import LeftBar from "./components/LeftBar/LeftBar.jsx";
import RightBar from "./components/RightBar/RightBar.jsx";
import { DarkModeContext } from "./context/DarkModeContext";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx";
import { Padding } from "@mui/icons-material";
function App() {


const {currentUser} =useContext(AuthContext);
console.log(currentUser);
const {darkMode} = useContext(DarkModeContext);

console.log(darkMode);const Layout = () => {
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <div style={{ display: "flex"}}>
        <LeftBar />
        <div style={{ flex: 6 }}>
           <Outlet />
        </div>
         
        <RightBar />
      </div>
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  if (!currentUser || null) {
    return <Navigate to="/login" />
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <ProtectedRoute> 
      <Layout /> 
      </ProtectedRoute>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);


  return <RouterProvider router={router} />;
}

export default App;
