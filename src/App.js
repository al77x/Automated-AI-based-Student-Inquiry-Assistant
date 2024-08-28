import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import NewChat from "./components/NewChat";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <Router>
      {/* different routes of the application */}
      <Routes>
        {/* default route to the login page */}
        <Route path="/" element={<Login />} />

        {/* route to the dashboard after successful login */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* route to start a new chat */}
        <Route path="/newchat" element={<NewChat />} />

        {/* route to view and edit user profile details */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
