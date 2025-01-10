import { Box } from "@mui/material";
import { useState } from "react";
import { TextField } from "@mui/material";
import { useFirebase } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const firebase = useFirebase();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await firebase.signinUser(email, password);
      // Redirect to home or dashboard after successful login
      navigate("/home");
    } catch (error) {
      console.error("Error during login:", error);
      
      // Check for specific error codes
      if (error.code === "auth/invalid-credential") {
        setError("Invalid password or User id. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        setError("No user found with this email address.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  }

  return (
    <div className="main flex justify-center items-center h-screen bg-custom-bg">
      <div className="form flex flex-col items-center space-y-4 bg-custom-bg-alt p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold text-white text-gradient-v2">
          Login to your account
        </h1>
        {error && (
          <div className="bg-red-500 text-white p-2 rounded-md">
            {error}
          </div>
        )}
        <form className="flex flex-col space-y-4 w-72" onSubmit={handleLogin}>
          <TextField
            id="standard-basic"
            label="Email"
            type="email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            InputLabelProps={{
              style: { fontSize: "0.8rem", color: "#C9CED6" },
            }}
            InputProps={{
              style: { color: "#E0E5EC", borderBottom: "1px solid #353C4A" },
            }}
          />
          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            variant="standard"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            InputLabelProps={{
              style: { fontSize: "0.8rem", color: "#C9CED6" },
            }}
            InputProps={{
              style: { color: "#E0E5EC", borderBottom: "1px solid #353C4A" },
            }}
          />
          <button className="login_btn bg-[#144EE3] hover:bg-[#123DBC] p-2 text-white rounded-md">
            Login
          </button>
          <button
            className="login_google border border-[#353C4A] p-2 rounded-md text-[#C9CED6] disabled:cursor-not-allowed"
            onClick={firebase.signupWithGoogle}
          >
            <i className="fa-brands fa-google px-1 text-[#C9CED6]"></i> Login
            with Google
          </button>
          <hr className="border-[#353C4A]" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              className="redirect text-[#7D8184]"
              style={{ fontSize: "0.8rem" }}
            >
              Don’t have an account?{" "}
              <a href="/signup" className="underline text-[#144EE3]">
                Signup
              </a>
            </p>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Login;
