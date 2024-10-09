import { useNavigate } from "react-router-dom";
import { useModelDetails } from "../Contexts/LLMModelContext";

function ChatSidbar() {
  const { handleNewChat } = useModelDetails();
  const navigate = useNavigate();
  return (
    <div className="sticky h-1/5 z-20 w-1/6 p-3 left-0 top-0 flex flex-col gap-6">
      <h3
        className="font-semibold text-xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        Open AGI
      </h3>
      <button
        className="border border-black rounded-lg p-2"
        onClick={() => handleNewChat(true)}
      >
        + Start new chat
      </button>
      <p className="text-gray-300 text-sm">CHAT HISTORY</p>
    </div>
  );
}

export default ChatSidbar;
