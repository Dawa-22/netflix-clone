import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user);
        if (window.location.pathname === "/login") {
          navigate("/"); // Redirect to Home only if on Login
        }
      } else {
        console.log("No user is logged in");
        if (window.location.pathname !== "/login") {
          navigate("/login"); // Redirect to Login only if not already there
        }
      }
      setCheckingAuth(false); // Stop loading once auth state is resolved
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [navigate]);

  if (checkingAuth) {
    return <div>Loading authentication status...</div>; // Display loading feedback
  }

  return (
    <div>
      <ToastContainer theme="drak"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
