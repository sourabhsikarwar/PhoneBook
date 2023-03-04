import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AuthLayout = () => {
  const [component, setComponent] = useState(null);
  const path = window.location.href.split('/')[3]
  useEffect(() => {
    if (path === 'login') {
      setComponent(<Login />);
    } else {
      setComponent(<Register />);
    }
  }, []);
  return (
    <div className="container max-w-7xl mx-auto bg-gray-200 min-h-screen h-max flex">
      <div className="flex justify-center items-center w-full p-8">{component}</div>
    </div>
  );
};

export default AuthLayout;
