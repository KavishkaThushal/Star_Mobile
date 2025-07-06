import { useState } from "react";
import "./LoginForm.css";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../config/axiosInterceptor";

export default function SignupForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async () => {
    const newErrors = {
      userName: userName ? "" : "Username is required",
      email: email ? "" : "Email is required",
      password: password ? "" : "Password is required",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== "");
    if (hasErrors) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const response = await api.post("auth/register", {
        userName,
        email,
        password,
      });

      const data = response.data;

      if (data.success === true) {
        toast.success("Register successful! Welcome.");
        navigate("/login");
        setEmail("");
        setPassword("");
        setUserName("");
        setErrors({ userName: "", email: "", password: "" });
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Register failed.");
      } else {
        toast.error("Network error or server not responding.");
      }
    }
  };

  return (
    <div className="authenticate-form-screen">
      <div className="authenticate-form-container">
        <div className="authenticate-form">
          <h2>Create an account</h2>
          <p>
            Unlocking Seamless Phone Repair Solutions Right at Your Fingertips.
          </p>

          <div className="authenticate-form-user-input">
            <label>User Name</label>
            <input
              type="text"
              className={errors.userName ? "input-error" : ""}
              placeholder="Enter username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {errors.userName && (
              <span className="error-text">{errors.userName}</span>
            )}
          </div>

          <div className="authenticate-form-user-input">
            <label>Email</label>
            <input
              type="email"
              className={errors.email ? "input-error" : ""}
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="authenticate-form-user-input">
            <label>Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                className={errors.password ? "input-error" : ""}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="toggle-password" onClick={handleShowPassword}>
                {!showPassword ? (
                  <FaRegEyeSlash className="eye-icon" size={18} />
                ) : (
                  <FaEye className="eye-icon" size={20} />
                )}
              </span>
            </div>
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>

          <button onClick={handleRegister}>Register</button>
        </div>

        <div className="authenticate-form-image"></div>
      </div>
    </div>
  );
}
