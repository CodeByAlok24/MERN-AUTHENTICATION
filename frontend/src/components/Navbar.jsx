import React from "react";
import { Link, Navigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    Navigate('/');
  }

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center container mx-auto max-w-7xl">
        <Link to="/" className="text-white font-bold text-lg">
          Mern Auth
        </Link>
        <div className="flex gap-4">
          {user ? (
            <button onClick={handleLogout}
            className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600">Logout</button>
          ) : (
            <>
              <Link className="text-white mx-2 hover:underline" to="/login">Login</Link>
              <Link to="/register" className="text-white mx-2 hover:underline">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
