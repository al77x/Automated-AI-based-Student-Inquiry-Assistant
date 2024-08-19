import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewChat.css";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";

const NewChat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

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
      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      return "Sorry, I couldn't process your request at the moment.";
    }
  };

  const handleSend = async () => {
    if (message.trim() === "") return;

    const newChatHistory = [...chatHistory, { user: "student", text: message }];
    setChatHistory(newChatHistory);

    const response = await sendMessage(message);
    if (response) {
      setChatHistory([...newChatHistory, { user: "bot", text: response }]);
    } else {
      setChatHistory([
        ...newChatHistory,
        { user: "bot", text: "Sorry, I couldn't understand that." },
      ]);
    }
    setMessage("");
  };

  // Function to detect and render code blocks
  const renderText = (text) => {
    const codeRegex = /```(.*?)```/gs;
    const parts = text.split(codeRegex);

    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <pre className="code-block" key={index}>
            <code>{part}</code>
          </pre>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
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
        <nav className="sidebar-nav"></nav>
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
            <AccountCircleIcon onClick={() => navigate("/profile")} />{" "}
          </div>
        </header>
        <div className="chat-window">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`chat-message ${chat.user}`}>
              <div className="message-content">{renderText(chat.text)}</div>
              <span className="message-time">
                {new Date().toLocaleTimeString()}
              </span>
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
