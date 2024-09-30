import React from "react";

function ChatHeader() {
  return (
    <div className="w-full border-b p-4 flex gap-2 items-center justify-center">
      <span className="rounded-full bg-blue-100 p-1">✍</span>
      <h1 className="text-xl text-center font-semibold"> AI Assistant</h1>
    </div>
  );
}

export default ChatHeader;
