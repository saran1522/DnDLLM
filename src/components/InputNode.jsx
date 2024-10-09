import { LuFileInput } from "react-icons/lu";
import NodeContent from "./NodeContent";
import { useModelDetails } from "../Contexts/LLMModelContext";

function InputNode() {
  const { sampleInput, handleSampleInput } = useModelDetails();

  return (
    <div className="min-w-72">
      <NodeContent
        title="Input"
        icon={LuFileInput}
        description="Write the input/ question you want to ask"
        lable="Input"
      >
        <label htmlFor="input" className="text-sm pb-2">
          Input
        </label>
        <input
          id="input"
          name="input"
          value={sampleInput}
          onChange={handleSampleInput}
          placeholder="Type something..."
          className="nodrag border border-gray-400 rounded-md p-2"
        />
      </NodeContent>
    </div>
  );
}

export default InputNode;
