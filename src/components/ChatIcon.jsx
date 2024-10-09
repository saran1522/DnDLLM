import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { useModelDetails } from "../Contexts/LLMModelContext";
import { Link } from "react-router-dom";
function ChatIcon() {
  const { deployedModels, currentModel } = useModelDetails();
  const isModelAvailable = deployedModels && deployedModels.length > 0;
  return (
    <Link
      to={isModelAvailable ? `/${currentModel.id}` : "/"}
      className={`${
        isModelAvailable
          ? "bg-blue-700 cursor-pointer"
          : "bg-blue-400 cursor-not-allowed"
      } text-white z-40 fixed bottom-10 right-10 rounded-full p-3`}
    >
      <AiFillMessage size="20" />
    </Link>
  );
}

export default ChatIcon;
