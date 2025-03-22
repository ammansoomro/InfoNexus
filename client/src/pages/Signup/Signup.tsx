import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const isPasswordMatch = password === repeatPassword || repeatPassword === "";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
      <div className="w-80">
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Repeat Password</label>
          <input
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            className={`w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 ${
              isPasswordMatch
                ? "focus:ring-blue-500"
                : "focus:ring-red-500 border-red-500"
            }`}
            placeholder="Repeat your password"
          />
        </div>
        <Button
          onClick={() => navigate("/signup")}
          label="Sign Up"
          type="primary"
        />
        <Button
          onClick={() => navigate("/login")}
          label="Login"
          type="secondary"
        />
      </div>
    </div>
  );
};

export default Signup;
