import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NewChat.css";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DeleteIcon from "@mui/icons-material/Delete";

const truncateMessage = (message, maxLength = 25) => {
  if (message.length > maxLength) {
    return message.substring(0, maxLength) + "...";
  }
  return message;
};

const NewChat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);

  useEffect(() => {
    const chatId = currentChatId || new Date().getTime().toString(); // Generate a new chatId if not set
    setCurrentChatId(chatId);

    const storedHistory = JSON.parse(localStorage.getItem(chatId)) || [];
    setChatHistory(storedHistory);
  }, [currentChatId]);

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

    const timestamp = new Date().toLocaleTimeString();

    const newChatHistory = [
      ...chatHistory,
      { user: "student", text: message, time: timestamp },
    ];
    setChatHistory(newChatHistory);

    const response = await sendMessage(message);
    const botMessage = response || "Sorry, I couldn't understand that.";
    const updatedChatHistory = [
      ...newChatHistory,
      { user: "bot", text: botMessage, time: new Date().toLocaleTimeString() },
    ];
    setChatHistory(updatedChatHistory);

    // Check if metadata already exists
    const existingMetadata =
      JSON.parse(localStorage.getItem(`${currentChatId}-metadata`)) || {};

    const chatMetadata = {
      lastMessage: existingMetadata.lastMessage || truncateMessage(message), // Store the first user message as the title
      timestamp: existingMetadata.timestamp || new Date().getTime(),
    };

    // Save updated chat history and metadata to localStorage
    localStorage.setItem(currentChatId, JSON.stringify(updatedChatHistory));
    localStorage.setItem(
      `${currentChatId}-metadata`,
      JSON.stringify(chatMetadata)
    );

    setMessage("");
  };

  // Function to delete a chat history
  const handleDeleteChat = (chatId) => {
    localStorage.removeItem(chatId);
    localStorage.removeItem(`${chatId}-metadata`);
    setCurrentChatId(null);
    // Trigger re-render
    setChatHistory([]);
  };

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
          <button
            className="new-chat-btn"
            onClick={() => {
              setCurrentChatId(new Date().getTime().toString()); // Create new chat session
              setChatHistory([]);
            }}
          >
            New Chat
          </button>
        </div>
        <nav className="sidebar-nav">
          {Object.keys(localStorage).map((key) => {
            if (key.endsWith("-metadata")) return null; // Skip metadata keys
            const metadata = JSON.parse(
              localStorage.getItem(`${key}-metadata`)
            );
            const title = metadata?.lastMessage
              ? truncateMessage(metadata.lastMessage)
              : `Chat ${new Date(parseInt(key)).toLocaleDateString()}`;
            return (
              <div key={key} className="chat-history">
                <p onClick={() => setCurrentChatId(key)}>{title}</p>
                <span onClick={() => setCurrentChatId(key)}>
                  {new Date(parseInt(key)).toLocaleTimeString()}
                </span>
                <DeleteIcon
                  className="delete-icon"
                  onClick={() => handleDeleteChat(key)}
                  style={{
                    cursor: "pointer",
                    marginLeft: "10px",
                    color: "#ff4d4f",
                  }}
                />
              </div>
            );
          })}
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
            <AccountCircleIcon onClick={() => navigate("/profile")} />{" "}
          </div>
        </header>
        <div className="chat-window">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`chat-message ${chat.user}`}>
              <div className="message-content">{renderText(chat.text)}</div>
              <span className="message-time">{chat.time}</span>
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
