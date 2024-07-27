// src/components/ChatButton.jsx
import React from 'react';
import './ChatButton.css'; // Import file CSS cho nút chat
import { useState, useEffect } from 'react';
import chatIcon from '../image/chat-icon.png';
import writeIcon from '../image/write-icon.png';

const ChatButton = () => {

    
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className={`chat-button ${isVisible ? 'visible' : ''}`}>
      <img src={chatIcon} alt="Chat Icon" className="chat-icon" />
      <img src={writeIcon} alt="Write Icon" className="write-icon" />
    </div>
  );
};

export default ChatButton;
