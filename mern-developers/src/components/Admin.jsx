import axios from "axios";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // get token
    const token = JSON.parse(localStorage.getItem("user")).token;
    // send request and verify token
    axios
      .get("/admin/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setIsAuthenticated(true);
        console.log(isAuthenticated, res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => {
        setIsAuthenticated(false);
        console.log(err);
      });
  }, []);

  const handleDelete = () => {
    console.log("deleted");
  };

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center mx-6 my-6">
        <div className="w-fit text-xl font-semibold bg-gray-200 px-4 py-2 rounded ">
          Users List
        </div>
      </div>
      <div className="flex items-center justify-center m-auto">
        <table className="w-full bg-white text-center mx-4 border-separate border-spacing-2 mb-10">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
              <th className="py-3 px-4 border-2 border-gray-300">Name</th>
              <th className="py-3 px-4 border-2 border-gray-300">Email</th>
              <th className="py-3 px-4 border-2 border-gray-300">Operations</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users.map((user) => {
              return (
                <tr className="hover:bg-gray-100">
                  <td className="py-3 px-4 border-2 border-gray-300">
                    {user.name}
                  </td>
                  <td className="py-3 px-4 border-2 border-gray-300">
                    {user.email}
                  </td>
                  <td className="py-3 px-4 border-2 border-gray-300">
                    <div className="flex items-center justify-center gap-2">
                      <button className="bg-green-400 px-4 py-1 rounded">
                        Edit
                      </button>
                      <button
                        onClick={handleDelete}
                        className="bg-red-400 px-4 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
