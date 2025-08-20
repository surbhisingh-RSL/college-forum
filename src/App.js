import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Feed from "./Components/Feed/Feed";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import NavbarComponent from "./Components/NavbarComponent";
import Profile from "./Components/Profile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/feed" replace /> : <Login onLogin={() => setIsLoggedIn(true)} />
          }
        />
        <Route
          path="/feed"
          element={
            isLoggedIn ? <Layout><Feed /></Layout> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? "/feed" : "/login"} replace />}
        />
        <Route
          path="/profile"
          element={
            isLoggedIn ? <Layout><Profile onLogout={() => setIsLoggedIn(false)}/></Layout> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </>
  );
};

export default App;
