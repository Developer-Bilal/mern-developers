import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };

    axios
      .post("/login", data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="flex flex-col items-left justify-center w-5/12 shadow-lg p-10 my-10">
        <div className="text-2xl mb-10 font-bold">Sign In</div>
        <input
          className="mb-5 border-b border-black p-2"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="mb-5 border-b border-black p-2"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-300 hover:bg-blue-400 px-4 py-2 rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
