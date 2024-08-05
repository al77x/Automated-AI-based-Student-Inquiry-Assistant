import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewChat.css";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";

const NewChat = () => {
  const navigate = useNavigate(); // initialise navigate
  const [message, setMessage] = useState(""); // hold current message
  const [chatHistory, setChatHistory] = useState([]); //hold chat history

  // update message state when user types
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // function to send message to backend server
  const sendMessage = async (message) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json(); // get response data
      console.log("Response from backend: ", data.response);
      return data.response; // return response from backend
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      return "Sorry, I couldn't process your request at the moment."; // return error message
    }
  };

  // function to handle sending message
  const handleSend = async () => {
    if (message.trim() === "") return; // if message is empty, do nothing

    // add user's message to chat history
    const newChatHistory = [...chatHistory, { user: "student", text: message }];
    setChatHistory(newChatHistory);

    // send message and get response
    const response = await sendMessage(message);
    if (response) {
      setChatHistory([...newChatHistory, { user: "bot", text: response }]);
    } else {
      // add default error message if no response
      setChatHistory([
        ...newChatHistory,
        { user: "bot", text: "Sorry, I couldn't understand that." },
      ]);
    }
    setMessage(""); // clear message input
  };

  return (
    <div className="new-chat-page">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>AASIA</h1>
          <p>Automated AI-based Student Inquiry Assistant</p>
          <button className="new-chat-btn" onClick={() => navigate("/newchat")}>
            New Chat
          </button>
        </div>
        <nav className="sidebar-nav">
          {/* add more sidebar content can be added here */}
        </nav>
        <div className="sidebar-footer">
          <ul>
            <li onClick={() => navigate("/help")}>Help Center</li>
            <li onClick={() => navigate("/privacy")}>Privacy</li>
            <li onClick={() => navigate("/terms")}>Terms of Service</li>
          </ul>
        </div>
      </aside>
      <main className="main-content">
        <header className="new-chat-header">
          <div className="header-icons">
            <DashboardIcon onClick={() => navigate("/dashboard")} />
            <SettingsIcon />
            <NotificationsIcon />
            <AccountCircleIcon />
          </div>
        </header>
        <div className="chat-window">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`chat-message ${chat.user}`}>
              <div className="message-content">
                <p>{chat.text}</p>
                <span className="message-time">
                  {new Date().toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>
        <footer className="footer">
          <input
            type="text"
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your message"
          />
          <button onClick={handleSend}>Send</button>
        </footer>
      </main>
    </div>
  );
};

export default NewChat;
