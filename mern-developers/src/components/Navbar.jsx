import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ isUser, setIsUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsUser(false);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gray-100 ">
      <div className="logo w-1/5 ">
        <div className="font-bold text-xl">Developers.</div>
      </div>
      <ul className="flex items-center justify-between gap-16">
        <li>
          <Link to="/">Home</Link>
        </li>
        {isUser ? (
          <li>
            <Link to="/about">About</Link>
          </li>
        ) : (
          <></>
        )}
        {isUser ? (
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        ) : (
          <></>
        )}
        {isUser ? (
          <li>
            <button
              onClick={handleLogout}
              className="bg-gray-300 px-4 py-1 rounded"
            >
              Logout
            </button>
          </li>
        ) : (
          <></>
        )}
        {!isUser ? (
          <li>
            <Link to="/signin">Signin</Link>
          </li>
        ) : (
          <></>
        )}
        {!isUser ? (
          <li>
            <Link to="/register">Register</Link>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}
