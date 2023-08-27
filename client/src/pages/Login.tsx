import axios from "axios";
import { useState } from "react";
import Star from "../assets/star.png";

const Login = () => {
  const [email, setEmail] = useState<string>("");

  const handleLogin = async () => {
    const body = {
      email,
    };

    try {
      const res = await axios.post("http://localhost:5000/auth/login", body);
      if (res.status === 201) {
        localStorage.setItem("access_token", res.data.access_token);
        alert("Berhasil Login");
        window.location.replace("/");
      } else {
        alert("User not found");
      }
    } catch (err) {
      alert("User not found");
    }
  };

  return (
    <div className="container">
      <div className="login">
        <div>
          <img src={Star} alt="Awards" />
        </div>

        <p>AWARD</p>
        <span>Enter your email address to sign in and continue</span>

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <input type="submit" value="Sign In" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
