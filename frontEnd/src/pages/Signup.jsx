import { Box } from "@mui/material";
import { useState } from "react";
import { TextField } from "@mui/material";
import { useFirebase } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const firebase = useFirebase();
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      // Check if the email already exists
      const userExists = await firebase
        .signupUser(email, password)
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setError("The email address is already in use by another account.");
            throw error; // Prevent further execution
          }
          throw error; // For other errors, continue with normal flow
        });

      // If signup was successful, save user data in the database
      const userData = { name, email, password };
      await firebase.putData("users/" + name, userData);
      console.log("User data saved successfully!");

      // Redirect to home page
      navigate("/home");
    } catch (error) {
      if (error.code !== "auth/email-already-in-use") {
        setError("An error occurred during signup. Please try again.");
      }
      console.error("Error during signup or saving user data:", error);
    }
  };

  return (
    <div className="main flex justify-center items-center h-screen bg-custom-bg">
      <div className="form flex flex-col items-center space-y-4 bg-custom-bg-alt p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold text-white text-gradient-v2">
          Create an account
        </h1>
        {error && (
          <div className="bg-red-500 text-white p-2 rounded-md">
            {error}
          </div>
        )}
        <form className="flex flex-col space-y-4 w-72" onSubmit={handleSignup}>
          <TextField
            id="name-input"
            label="Name"
            type="text"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
            value={name}
            InputLabelProps={{
              style: { fontSize: "0.8rem", color: "#C9CED6" },
            }}
            InputProps={{
              style: { color: "#E0E5EC", borderBottom: "1px solid #353C4A" },
            }}
          />
          <TextField
            id="email-input"
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
            id="password-input"
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
          <TextField
            id="confirm-password-input"
            label="Confirm Password"
            type="password"
            variant="standard"
            InputLabelProps={{
              style: { fontSize: "0.8rem", color: "#C9CED6" },
            }}
            InputProps={{
              style: { color: "#E0E5EC", borderBottom: "1px solid #353C4A" },
            }}
          />
          <button
            type="submit"
            className="signup_btn bg-[#144EE3] hover:bg-[#123DBC] p-2 text-white rounded-md"
          >
            Create Account
          </button>
          <button
            className="signup_google border border-[#353C4A] p-2 rounded-md text-[#C9CED6] disabled:cursor-not-allowed"
            onClick={firebase.signupWithGoogle}
          >
            <i className="fa-brands fa-google px-2 text-[#C9CED6]"></i>
            Sign up with Google
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
              Already have an account?{" "}
              <a href="/login" className="underline text-[#144EE3]">
                Login
              </a>
            </p>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Signup;