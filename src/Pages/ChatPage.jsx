import React from "react";
import ChatSidbar from "../components/ChatSidbar";
import ChatBox from "../components/ChatBox";

function ChatPage() {
  return (
    <div className="h-screen font-sans text-gray-700 bg-gray-50 overflow-hidden flex p-4 gap-5">
      <ChatSidbar />
      <ChatBox />
    </div>
  );
}

export default ChatPage;
