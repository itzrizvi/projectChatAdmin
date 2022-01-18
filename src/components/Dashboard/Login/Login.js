import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/message-icon.png";

const Login = () => {
  // State for user  registration
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // Error Handling
  const [error, setError] = useState("");

  // Form Change Function
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  // Form Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/dashboard";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="w-full min-h-screen p-5 md:p-20 flex items-center justify-center">
        <div className="intro-y auth">
          <img
            className="intro-y mx-auto w-16"
            alt="Topson Messenger Tailwind HTML Admin Template"
            src={logo}
          />
          <div className="intro-y text-gray-700 dark:text-gray-300 text-2xl font-medium text-center mt-16">
            Login to Your Account!
          </div>
          <div className="intro-y box px-5 py-8 mt-8">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="intro-y">
                <input
                  type="email"
                  className="form-control py-3 px-4 auth__input intro-y"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  required
                />
                <input
                  type="password"
                  className="form-control py-3 px-4 auth__input intro-y mt-4"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                />
              </div>
              <div className="intro-y text-gray-600 dark:text-gray-300 flex text-xs sm:text-sm mt-4">
                <div className="flex items-center mr-auto">
                  <input
                    type="checkbox"
                    className="form-check-input border mr-2"
                    id="remember-me"
                  />
                  <label
                    className="cursor-pointer select-none"
                    htmlFor="remember-me"
                  >
                    Remember me
                  </label>
                </div>
                <Link to="/dashboard">Forgot Password?</Link>
              </div>
              <div className="intro-y mt-5 xl:mt-8 text-center xl:text-left">
                {error && <div className="login-error">{error}</div>}
                <button
                  type="submit"
                  className="btn btn-primary login-btn intro-y w-full xl:mr-3"
                >
                  Login
                </button>
                <button className="btn btn-outline-secondary intro-y w-full mt-3">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
