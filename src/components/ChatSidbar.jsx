import React from "react";
import { useNavigate } from "react-router-dom";
import { useChat } from "../Providers/ChatProvider";

function ChatSidbar() {
  const navigate = useNavigate();
  const { currentModel } = useChat();
  return (
    <div className="sticky z-20 w-1/6 p-3 left-0 top-0 flex flex-col gap-6">
      <h3
        className="font-semibold text-xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        Open AGI
      </h3>
      <button className="border border-black rounded-lg p-2">
        + Start new chat
      </button>
      <p className="text-gray-300 text-sm">CHAT HISTORY</p>
    </div>
  );
}

export default ChatSidbar;
