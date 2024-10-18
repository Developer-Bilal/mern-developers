import axios from "axios";
import { useEffect, useState } from "react";

export default function About() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("user"))._id;
    const token = JSON.parse(localStorage.getItem("user")).token;

    axios
      .get(`/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-5/12 shadow-lg p-10 my-10">
        <div className="flex flex-col items-center ">
          <div className="text-3xl font-bold">{user.name}</div>
          <div className="text-blue-600 font-semibold my-2">Web Developer</div>
        </div>
        <div className="border border-black rounded"></div>
        <div className="flex items-center justify-around mt-20">
          <div className="">
            <div className="mb-5">ID</div>
            <div className="mb-5">Email</div>
            <div className="mb-5">Phone</div>
          </div>
          <div className="">
            <div className="mb-5 text-blue-500">{user._id}</div>
            <div className="mb-5 text-blue-500">{user.email}</div>
            <div className="mb-5 text-blue-500">+123 123 123</div>
          </div>
        </div>
        <div className="flex items-center justify-center border border-gray-200 rounded mt-10 mx-10"></div>
      </div>
    </div>
  );
}
