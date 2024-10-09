import { useModelDetails } from "../Contexts/LLMModelContext";
import { IoPlayCircleOutline } from "react-icons/io5";

function Run() {
  const { handleRunModel } = useModelDetails();
  return (
    <button
      onClick={(e) => handleRunModel(e)}
      className="z-40 bg-green-600 flex gap-1 items-center text-white text-sm px-3 py-1 rounded-md"
    >
      <IoPlayCircleOutline className="" />
      <span>Run</span>
    </button>
  );
}

export default Run;
