import React, { useState, useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaPaperPlane, FaImage, FaUserCircle, FaSearch, FaEllipsisV } from "react-icons/fa";

const ChatPage = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);
  
  // 1. Create a ref for the bottom of the chat
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    { id: 1, sender: "Celebrity", text: "Hello! Excited for our session today.", type: "text", time: "10:00 AM" },
    { id: 2, sender: "Fan", text: "Me too! I wanted to show you this fan art I made.", type: "text", time: "10:02 AM" },
  ]);

  // 2. Function to scroll to the bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 3. Trigger scroll every time the messages array changes
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const newMessage = { 
      id: Date.now(), 
      sender: "Fan", 
      text: message, 
      type: "text", 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
    setMessages([...messages, newMessage]);
    setMessage("");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImg = { 
          id: Date.now(), 
          sender: "Fan", 
          image: reader.result, 
          type: "image", 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        };
        setMessages([...messages, newImg]);
      };
      reader.readAsDataURL(file);
    }
  };

  const chatStyles = {
    container: { height: "calc(100vh - 80px)", backgroundColor: isDark ? "#0a0a1a" : "#f8f9fa" },
    sidebar: { backgroundColor: isDark ? "#16162d" : "#ffffff", borderRight: isDark ? "1px solid #222" : "1px solid #eef0f2" },
    chatArea: { backgroundColor: isDark ? "#050517" : "#fdfdfd" },
    bubbleFan: { background: "linear-gradient(135deg, #9d00ff, #ff00ea)", color: "white", borderRadius: "18px 18px 2px 18px" },
    bubbleCeleb: { backgroundColor: isDark ? "#1e1e3d" : "#f0f0f0", color: isDark ? "#fff" : "#000", borderRadius: "18px 18px 18px 2px" }
  };

  return (
    <div className="container-fluid p-0" style={chatStyles.container}>
      <div className="row g-0 h-100">
        {/* Sidebar */}
        <div className="col-md-4 col-lg-3 d-none d-md-block h-100" style={chatStyles.sidebar}>
          <div className="p-3">
            <h5 className="fw-bold mb-3 mt-2" style={{ color: isDark ? "#fff" : "#000" }}>Messages</h5>
            <div className="input-group mb-3 rounded-pill overflow-hidden border">
              <span className="input-group-text bg-white border-0"><FaSearch className="text-muted" /></span>
              <input type="text" className="form-control border-0 shadow-none" placeholder="Search chats..." />
            </div>
          </div>
          <div className="list-group list-group-flush">
            <div className={`list-group-item border-0 p-3 ${isDark ? "bg-primary bg-opacity-10" : "bg-light"}`} style={{ cursor: "pointer" }}>
              <div className="d-flex align-items-center gap-3">
                <FaUserCircle size={40} color="#9d00ff" />
                <div>
                  <h6 className={`mb-0 fw-bold ${isDark ? "text-white" : "text-dark"}`}>Marcus Johnson</h6>
                  <small className="text-muted">Active now</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat */}
        <div className="col-md-8 col-lg-9 h-100 d-flex flex-column" style={chatStyles.chatArea}>
          <div className="p-3 d-flex justify-content-between align-items-center shadow-sm" style={{ backgroundColor: isDark ? "#16162d" : "#fff", zIndex: 10 }}>
            <div className="d-flex align-items-center gap-2">
              <FaUserCircle size={35} color="#9d00ff" />
              <div>
                <h6 className={`mb-0 fw-bold ${isDark ? "text-white" : "text-dark"}`}>Marcus Johnson</h6>
                <small className="text-success" style={{ fontSize: '10px' }}>● Online</small>
              </div>
            </div>
            <FaEllipsisV className="text-muted" style={{ cursor: 'pointer' }} />
          </div>

          <div className="flex-grow-1 overflow-auto p-4 d-flex flex-column gap-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`d-flex flex-column ${msg.sender === "Fan" ? "align-items-end" : "align-items-start"}`}>
                <div className="p-3 shadow-sm" style={msg.sender === "Fan" ? chatStyles.bubbleFan : chatStyles.bubbleCeleb}>
                  {msg.type === "text" ? (
                    <p className="mb-0" style={{ fontSize: "14px" }}>{msg.text}</p>
                  ) : (
                    <img src={msg.image} alt="shared" className="rounded-3" style={{ maxWidth: "250px", height: "auto" }} />
                  )}
                </div>
                <small className="text-muted mt-1" style={{ fontSize: "10px" }}>{msg.time}</small>
              </div>
            ))}
            {/* 4. Invisible div that acts as the scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3" style={{ backgroundColor: isDark ? "#16162d" : "#fff" }}>
            <form className="d-flex align-items-center gap-2 bg-light rounded-pill px-3 py-2 border shadow-sm" onSubmit={handleSend}>
              <input type="file" ref={fileInputRef} onChange={handleImageUpload} style={{ display: 'none' }} accept="image/*" />
              <button type="button" className="btn p-0 text-muted" onClick={() => fileInputRef.current.click()}>
                <FaImage size={20} />
              </button>
              <input 
                type="text" 
                className="form-control border-0 bg-transparent shadow-none" 
                placeholder="Type your message..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="btn rounded-circle d-flex align-items-center justify-content-center p-2 text-white" style={{ backgroundColor: "#9d00ff", width: "35px", height: "35px" }}>
                <FaPaperPlane size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;