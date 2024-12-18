/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css"; // Assuming you'll create a CSS file for the styles

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    // Add user message to the chat
    const newMessage = { sender: "user", text: userInput };
    setMessages([...messages, newMessage]);

    try {
      // Call the backend API
      const response = await axios.post("/rag", { userQuery: userInput });

      // Add AI response to the chat
      const aiResponseText =
        response.data?.openAIResponse?.choices?.[0]?.message?.content ||
        "Sorry, I couldn't understand that.";
      const aiResponse = { sender: "bot", text: aiResponseText };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      const errorMessage = { sender: "bot", text: "Sorry, something went wrong. Please try again." };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setUserInput(""); // Clear the input field
  };

  return (
    <>
      {!isChatOpen && (
        <button
          className="chatbot-toggle"
          onClick={() => setIsChatOpen(true)}
        >
          Chat
        </button>
      )}

      {isChatOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            Chat with Us
            <button
              className="close-button"
              onClick={() => setIsChatOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.sender === "bot" ? "bot" : "user"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input-container">
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
