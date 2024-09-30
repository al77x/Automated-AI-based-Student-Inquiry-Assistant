import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../NewChat/NewChat.module.css";

// icon imports
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DeleteIcon from "@mui/icons-material/Delete";

// shortens chat title to 25 characters and ends it with an ellipsis (...) if its longer
const trimChatTitle = (message, maxLength = 25) => {
  const ellipsis = "...";
  return message.length > maxLength
    ? message.slice(0, maxLength) + ellipsis
    : message;
};

/* 
- manage the state of the current chat session
- handles the retrieval and storage of chat history from local storage
*/
const useChatSession = (initialId = null) => {
  const [chatId, setChatId] = useState(initialId);
  const [history, setHistory] = useState([]);

  // load chat history from local storage whenever the chat ID changes
  useEffect(() => {
    if (!chatId) return;
    const storedHistory = JSON.parse(localStorage.getItem(chatId)) || [];
    setHistory(storedHistory);
  }, [chatId]);
  return { chatId, history, setChatId, setHistory };
};

const NewChat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(""); // State for the current input message
  const {
    chatId: currentChatId,
    history: chatHistory,
    setChatId,
    setHistory,
  } = useChatSession();

  // handles changes in the input field and updates the message state
  const handleInputChange = (e) => setMessage(e.target.value);

  // sends the message when "Enter" key is pressed
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  // sends user's message to the backend API and retrieves the bot's response
  const sendMessageToBot = async (userMessage) => {
    try {
      // make a POST request to the API with the user's message
      const response = await fetch("http://127.0.0.1:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      // check if response is successful
      if (!response.ok) {
        throw new Error("Something went wrong with the API request.");
      }

      // parse the response data
      const data = await response.json();
      return data.response;
    } catch (error) {
      // log the error and return a user-friendly message
      console.error("There was a problem with the fetch operation:", error);
      return "Oops! Something went wrong. Please try again later.";
    }
  };

  /*
- updates the chat history with the user's message and the bot's response
- saves the chat history and metadata to local storage
*/
  const handleSendMessage = async () => {
    if (message.trim() === "") return; // Ignore empty messages

    // record the current time for the message timestamp
    const currentTime = new Date().toLocaleTimeString();

    // update the chat history with the user's message
    const updatedHistory = [
      ...chatHistory,
      { user: "student", text: message, time: currentTime },
    ];
    setHistory(updatedHistory);

    // send the message to the bot and get its response
    const botResponse = await sendMessageToBot(message);
    const finalBotMessage = botResponse || "Sorry, I didn't quite catch that.";

    // update the chat history with the bot's response
    const finalChatHistory = [
      ...updatedHistory,
      {
        user: "bot",
        text: finalBotMessage,
        time: new Date().toLocaleTimeString(),
      },
    ];
    setHistory(finalChatHistory);

    // save chat data to local storage
    const existingMetadata =
      JSON.parse(localStorage.getItem(`${currentChatId}-metadata`)) || {};
    const chatMetadata = {
      lastMessage: existingMetadata.lastMessage || trimChatTitle(message),
      timestamp: existingMetadata.timestamp || new Date().getTime(),
    };

    localStorage.setItem(currentChatId, JSON.stringify(finalChatHistory));
    localStorage.setItem(
      `${currentChatId}-metadata`,
      JSON.stringify(chatMetadata)
    );
    setMessage("");
  };

  /*
- starts a new chat session by generating a new chat ID
- resets the chat history and updates local storage
*/
  const startNewChatSession = () => {
    const newChatId = Date.now().toString();
    setChatId(newChatId);
    setHistory([]);
    localStorage.setItem(
      `${newChatId}-metadata`,
      JSON.stringify({ lastMessage: "", timestamp: Date.now() })
    );
  };

  // deletes a chat session by removing its data from local storage
  const handleDeleteChat = (chatId) => {
    localStorage.removeItem(chatId);
    localStorage.removeItem(`${chatId}-metadata`);
    setChatId(null);
    setHistory([]);
  };

  /*
- renders text with code blocks
- splits the text based on code block markers
*/
  const renderText = (text) => {
    const codeRegex = /```(.*?)```/gs; // regex to find code blocks
    const parts = text.split(codeRegex); // split the text by code blocks

    return parts.map((part, index) =>
      index % 2 === 1 ? (
        <pre className={styles.codeBlock} key={index}>
          <code>{part}</code>
        </pre>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <div className={styles.newChatPage}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h1>AASIA</h1>
          <p>Automated AI-based Student Inquiry Assistant</p>
          <button className={styles.newChatBtn} onClick={startNewChatSession}>
            New Chat
          </button>
        </div>
        <nav className={styles.sidebarNav}>
          {/* iterate over local storage keys to list all chat sessions */}
          {Object.keys(localStorage).map((key) => {
            if (key.endsWith("-metadata")) return null; // skip metadata keys
            const metadata = JSON.parse(
              localStorage.getItem(`${key}-metadata`)
            );
            const title = metadata?.lastMessage
              ? trimChatTitle(metadata.lastMessage)
              : `Chat ${new Date(parseInt(key)).toLocaleDateString()}`;
            return (
              <div key={key} className={styles.chatHistory}>
                <p onClick={() => setChatId(key)}>{title}</p>
                <span onClick={() => setChatId(key)}>
                  {new Date(parseInt(key)).toLocaleTimeString()}
                </span>
                <DeleteIcon
                  className={styles.deleteIcon}
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
        <div className={styles.sidebarFooter}>
          <ul>
            <li onClick={() => navigate("/help")}>Help Center</li>
            <li onClick={() => navigate("/privacy")}>Privacy</li>
            <li onClick={() => navigate("/terms")}>Terms of Service</li>
          </ul>
        </div>
      </aside>
      <main className={styles.mainContent}>
        <header className={styles.newChatHeader}>
          <div className={styles.headerIcons}>
            <DashboardIcon onClick={() => navigate("/dashboard")} />
            <SettingsIcon />
            <NotificationsIcon />
            <AccountCircleIcon onClick={() => navigate("/profile")} />
          </div>
        </header>
        <div className={styles.chatWindow}>
          {/* Display the chat history */}
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`${styles.chatMessage} ${styles[chat.user]}`}
            >
              <div className={styles.messageContent}>
                {renderText(chat.text)}
              </div>
              <span className={styles.messageTime}>{chat.time}</span>
            </div>
          ))}
        </div>
        <footer className={styles.footer}>
          <input
            type="text"
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything... I'm here to help!"
            autoFocus
            className={styles.inputField}
          />
          <button className={styles.sendButton} onClick={handleSendMessage}>
            Send
          </button>
        </footer>
      </main>
    </div>
  );
};

export default NewChat;
