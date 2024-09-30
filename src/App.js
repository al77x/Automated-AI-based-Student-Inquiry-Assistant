import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import ForgotPassword from "./components/Login/ForgotPassword";
import Dashboard from "./components/Dashboard/Dashboard";
import NewChat from "./components/NewChat/NewChat";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import MentorDashboard from "./components/MentorDashboard/MentorDashboard";

function App() {
  return (
    <Router>
      {/* different routes of the application */}
      <Routes>
        {/* default route to redirect the root path to the login page */}
        <Route path="/" element={<Navigate to="/Login" />} />

        {/* route to the login page */}
        <Route path="/login" element={<Login />} />

        {/* route to the Register page */}
        <Route path="/register" element={<Register />} />

        {/* route to the forgot password page */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* route to the dashboard after successful login */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* route to start a new chat */}
        <Route path="/newchat" element={<NewChat />} />

        {/* route to view and edit user profile details */}
        <Route path="/profile" element={<ProfilePage />} />

        {/* route to the mentor dashboard */}
        <Route path="/mentor-dashboard" element={<MentorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
