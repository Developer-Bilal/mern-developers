import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gray-100 ">
      <div className="logo w-1/5 ">
        <div className="font-bold text-xl">Developers.</div>
      </div>
      <ul className="flex items-center justify-between w-2/5 ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}
