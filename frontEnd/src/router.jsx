import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import { useFirebase } from "./firebase/firebase";

// Protected Route component
const ProtectedRoute = ({ element }) => {
  const firebase = useFirebase();
  const user = firebase.user;

  // Redirect to the Welcome page if the user is not authenticated
  return user ? element : <Welcome />;
};

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Welcome />, // Default to Welcome page for unauthenticated users
      },
      {
        path: "home",
        element: <ProtectedRoute element={<Home />} />, // Protect Home route
      },
      {
        path: "login",
        element: <Login />, // Login route for unauthenticated users
      },
      {
        path: "signup",
        element: <Signup />, // Signup route for unauthenticated users
      },
    ],
  },
]);

export default router;