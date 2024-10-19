import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register({ isUser, setIsUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    const data = { name, email, phone, profession, password, confirmPass };

    axios
      .post("/register", data)
      .then((res) => {
        console.log(res.data);
        setIsUser(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="flex flex-col items-left justify-center w-5/12 shadow-lg p-10 my-10">
        <div className="text-2xl mb-10 font-bold">Register</div>
        <input
          className="mb-5 border-b border-black p-2"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="mb-5 border-b border-black p-2"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="mb-5 border-b border-black p-2"
          type="text"
          placeholder="Mobile Number"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          className="mb-5 border-b border-black p-2"
          type="text"
          placeholder="Profession"
          onChange={(e) => setProfession(e.target.value)}
          required
        />
        <input
          className="mb-5 border-b border-black p-2"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="mb-10 border-b border-black p-2"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPass(e.target.value)}
          required
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-300 hover:bg-blue-400 px-4 py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}
