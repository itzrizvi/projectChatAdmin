import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../images/message-icon.png";

const Registration = () => {
  // State for user  registration
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Error Handling
  const [error, setError] = useState("");

  // Form Change Function
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const navigate = useNavigate();

  // Form Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/dashboard");
      console.log(res.message);
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
            Register New Account
          </div>
          <div className="intro-y box px-5 py-8 mt-8">
            <form className="registration-form" onSubmit={handleSubmit}>
              <div className="intro-y">
                <input
                  type="text"
                  className="form-control py-3 px-4 intro-y auth__input"
                  placeholder="First Name"
                  name="firstName"
                  value={data.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="form-control py-3 px-4 intro-y auth__input mt-4"
                  placeholder="Last Name"
                  name="lastName"
                  value={data.lastName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  className="form-control py-3 px-4 intro-y auth__input mt-4"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  className="form-control py-3 px-4 intro-y auth__input mt-4"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  required
                />
                <div className="intro-y w-full grid grid-cols-12 gap-4 h-1 mt-3">
                  <div className="col-span-3 h-full rounded bg-green-500"></div>
                  <div className="col-span-3 h-full rounded bg-green-500"></div>
                  <div className="col-span-3 h-full rounded bg-green-500"></div>
                  <div className="col-span-3 h-full rounded bg-gray-200 dark:bg-dark-2"></div>
                </div>
                <Link
                  to="/dashboard"
                  className="intro-y text-gray-600 dark:text-gray-300 block mt-2 text-xs sm:text-sm -mb-1"
                >
                  What is a secure password?
                </Link>
                <input
                  type="password"
                  className="form-control py-3 px-4 intro-y mt-4"
                  placeholder="Password Confirmation"
                />
              </div>
              <div className="intro-x flex items-center text-gray-700 dark:text-gray-600 mt-4 text-xs sm:text-sm">
                <input
                  type="checkbox"
                  className="form-check-input border mr-2"
                  id="remember-me"
                />
                <label
                  className="cursor-pointer select-none"
                  htmlFor="remember-me"
                >
                  I agree to the Envato
                </label>
                <Link
                  className="text-theme-1 dark:text-theme-10 ml-1"
                  to="/dashboard"
                >
                  Privacy Policy
                </Link>
                .
              </div>
              <div className="intro-y mt-5 xl:mt-8 text-center xl:text-left">
                {error && <div className="error-message">{error}</div>}
                <button
                  type="submit"
                  className="btn btn-primary intro-y w-full xl:mr-3"
                >
                  Register
                </button>
                <button className="btn btn-outline-secondary intro-y w-full mt-3">
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div className="intro-y leading-relaxed text-gray-600 dark:text-gray-300 mt-10 text-center xl:text-center">
            By signin up, you agree to our
            <br />
            <Link className="underline" to="/dashboard">
              Terms and Conditions
            </Link>{" "}
            &{" "}
            <Link className="underline" to="/dashboard">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
