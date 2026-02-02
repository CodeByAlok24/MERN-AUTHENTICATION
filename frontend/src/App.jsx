import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(" ");
  const [isLoading, setIsLoading] = useState(true);
  console.log(user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const res = await axios.get("http://localhost:5000/api/users/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data);
        }
      } catch (err) {
        setError("Failed to fetch user data");
        localStorage.removeItem("token");
      } finally {
        // Add a small delay to show loading page
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <h1 className="text-xl text-white">Loading...</h1>
      </div>
    );
  }

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user} error={error} />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login setUser={setUser} />}
        />
        <Route path="/register" element={user ? <Navigate to="/" /> :<Register setUser={setUser} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
