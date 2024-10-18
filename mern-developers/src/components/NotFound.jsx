import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="font-semibold text-lg text-red-500 mb-5">
        404 The page you are looking for does not exist!
      </div>
      <div className="font-bold text-xl">
        <Link to="/">Go to Homepage</Link>
      </div>
    </div>
  );
}
